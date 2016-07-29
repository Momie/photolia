
(function() {
    window.photolia = {};

    photolia.namespace = function(path, fn) {
        var part, target, _i, _len, _ref;
        target = photolia;
        if (path) {
            _ref = path.split('.');
            for (_i = 0, _len = _ref.length; _i < _len; _i++) {
                part = _ref[_i];
                target[part] || (target[part] = {});
                target = target[part];
            }
        }
        return fn(target);
    };

    photolia.expose = function(key, value) {
        var last, part, parts, source, target, _i, _len;
        parts = key.split('.');
        last = parts.pop();
        target = window.photolia;
        source = photolia;
        for (_i = 0, _len = parts.length; _i < _len; _i++) {
            part = parts[_i];
            target[part] || (target[part] = {});
            target = target[part];
            source = source != null ? source[part] : void 0;
        }
        return target[last] = value || source[last];
    };

}).call(this);
(function() {
    var expose;

    photolia.version = '2.6.0';

    photolia.jQuery = jQuery;

    expose = photolia.expose;

    expose('version');

    expose('jQuery');

    expose('plugin', function(fn) {
        return fn(photolia);
    });

    expose('whenReady', function(fn) {
        return fn();
    });

}).call(this);
// from https://github.com/jaubourg/ajaxHooks/blob/master/src/xdr.js

if (window.XDomainRequest) {
    jQuery.ajaxTransport(function(s) {
        if (s.crossDomain && s.async) {
            if (s.timeout) {
                s.xdrTimeout = s.timeout;
                delete s.timeout;
            }
            var xdr;
            return {
                send: function(_, complete) {
                    function callback(status, statusText, responses, responseHeaders) {
                        xdr.onload = xdr.onerror = xdr.ontimeout = function() {};
                        xdr = undefined;
                        complete(status, statusText, responses, responseHeaders);
                    }
                    xdr = new XDomainRequest();
                    xdr.onload = function() {
                        callback(200, "OK", {
                            text: xdr.responseText
                        }, "Content-Type: " + xdr.contentType);
                    };
                    xdr.onerror = function() {
                        callback(404, "Not Found");
                    };
                    xdr.onprogress = function() {};
                    xdr.ontimeout = function() {
                        callback(0, "timeout");
                    };
                    xdr.timeout = s.xdrTimeout || Number.MAX_VALUE;
                    xdr.open(s.type, s.url.replace(/^https?:/, ''));
                    xdr.send((s.hasContent && s.data) || null);
                },
                abort: function() {
                    if (xdr) {
                        xdr.onerror = function() {};
                        xdr.abort();
                    }
                }
            };
        }
    });
};
(function() {
    photolia.namespace('utils.abilities', function(ns) {
        var ios, url, ver, _ref;
        ns.fileAPI = !!(window.File && window.FileList && window.FileReader);
        ns.sendFileAPI = !!(window.FormData && ns.fileAPI);
        ns.dragAndDrop = (function() {
            var el;
            el = document.createElement("div");
            return ("draggable" in el) || ("ondragstart" in el && "ondrop" in el);
        })();
        ns.canvas = (function() {
            var el;
            el = document.createElement("canvas");
            return !!(el.getContext && el.getContext('2d'));
        })();
        ns.fileDragAndDrop = ns.fileAPI && ns.dragAndDrop;
        ns.iOSVersion = null;
        if (ios = /^[^(]+\(iP(?:hone|od|ad);\s*(.+?)\)/.exec(navigator.userAgent)) {
            if (ver = /OS (\d)_(\d)/.exec(ios[1])) {
                ns.iOSVersion = +ver[1] + ver[2] / 10;
            }
        }
        ns.Blob = false;
        try {
            if (new window.Blob) {
                ns.Blob = window.Blob;
            }
        } catch (_error) {}
        url = window.URL || window.webkitURL || false;
        ns.URL = url && url.createObjectURL && url;
        return ns.FileReader = ((_ref = window.FileReader) != null ? _ref.prototype.readAsArrayBuffer : void 0) && window.FileReader;
    });

}).call(this);
(function() {
    var $,
        __hasProp = {}.hasOwnProperty,
        __extends = function(child, parent) {
            for (var key in parent) {
                if (__hasProp.call(parent, key)) child[key] = parent[key];
            }

            function ctor() {
                this.constructor = child;
            }
            ctor.prototype = parent.prototype;
            child.prototype = new ctor();
            child.__super__ = parent.prototype;
            return child;
        },
        __indexOf = [].indexOf || function(item) {
            for (var i = 0, l = this.length; i < l; i++) {
                if (i in this && this[i] === item) return i;
            }
            return -1;
        },
        __bind = function(fn, me) {
            return function() {
                return fn.apply(me, arguments);
            };
        },
        __slice = [].slice;

    $ = photolia.jQuery;

    photolia.namespace('utils', function(utils) {
        var _ref;
        utils.Collection = (function() {
            function Collection(items) {
                var item, _i, _len;
                if (items == null) {
                    items = [];
                }
                this.onAdd = $.Callbacks();
                this.onRemove = $.Callbacks();
                this.onSort = $.Callbacks();
                this.onReplace = $.Callbacks();
                this.__items = [];
                for (_i = 0, _len = items.length; _i < _len; _i++) {
                    item = items[_i];
                    this.add(item);
                }
            }

            Collection.prototype.add = function(item) {
                return this.__add(item, this.__items.length);
            };

            Collection.prototype.__add = function(item, i) {
                this.__items.splice(i, 0, item);
                return this.onAdd.fire(item, i);
            };

            Collection.prototype.remove = function(item) {
                var i;
                i = $.inArray(item, this.__items);
                if (i !== -1) {
                    return this.__remove(item, i);
                }
            };

            Collection.prototype.__remove = function(item, i) {
                this.__items.splice(i, 1);
                return this.onRemove.fire(item, i);
            };

            Collection.prototype.clear = function() {
                var i, item, items, _i, _len, _results;
                items = this.get();
                this.__items.length = 0;
                _results = [];
                for (i = _i = 0, _len = items.length; _i < _len; i = ++_i) {
                    item = items[i];
                    _results.push(this.onRemove.fire(item, i));
                }
                return _results;
            };

            Collection.prototype.replace = function(oldItem, newItem) {
                var i;
                if (oldItem !== newItem) {
                    i = $.inArray(oldItem, this.__items);
                    if (i !== -1) {
                        return this.__replace(oldItem, newItem, i);
                    }
                }
            };

            Collection.prototype.__replace = function(oldItem, newItem, i) {
                this.__items[i] = newItem;
                return this.onReplace.fire(oldItem, newItem, i);
            };

            Collection.prototype.sort = function(comparator) {
                this.__items.sort(comparator);
                return this.onSort.fire();
            };

            Collection.prototype.get = function(index) {
                if (index != null) {
                    return this.__items[index];
                } else {
                    return this.__items.slice(0);
                }
            };

            Collection.prototype.length = function() {
                return this.__items.length;
            };

            return Collection;

        })();
        utils.UniqCollection = (function(_super) {
            __extends(UniqCollection, _super);

            function UniqCollection() {
                _ref = UniqCollection.__super__.constructor.apply(this, arguments);
                return _ref;
            }

            UniqCollection.prototype.add = function(item) {
                if (__indexOf.call(this.__items, item) >= 0) {
                    return;
                }
                return UniqCollection.__super__.add.apply(this, arguments);
            };

            UniqCollection.prototype.__replace = function(oldItem, newItem, i) {
                if (__indexOf.call(this.__items, newItem) >= 0) {
                    return this.remove(oldItem);
                } else {
                    return UniqCollection.__super__.__replace.apply(this, arguments);
                }
            };

            return UniqCollection;

        })(utils.Collection);
        return utils.CollectionOfPromises = (function(_super) {
            __extends(CollectionOfPromises, _super);

            function CollectionOfPromises() {
                this.onAnyProgress = __bind(this.onAnyProgress, this);
                this.onAnyFail = __bind(this.onAnyFail, this);
                this.onAnyDone = __bind(this.onAnyDone, this);
                this.anyDoneList = $.Callbacks();
                this.anyFailList = $.Callbacks();
                this.anyProgressList = $.Callbacks();
                this.anyProgressList.add(function(item, firstArgument) {
                    return $(item).data('lastProgress', firstArgument);
                });
                CollectionOfPromises.__super__.constructor.apply(this, arguments);
            }

            CollectionOfPromises.prototype.onAnyDone = function(cb) {
                var file, _i, _len, _ref1, _results;
                this.anyDoneList.add(cb);
                _ref1 = this.__items;
                _results = [];
                for (_i = 0, _len = _ref1.length; _i < _len; _i++) {
                    file = _ref1[_i];
                    if (file.state() === 'resolved') {
                        _results.push(file.done(function() {
                            return cb.apply(null, [file].concat(__slice.call(arguments)));
                        }));
                    } else {
                        _results.push(void 0);
                    }
                }
                return _results;
            };

            CollectionOfPromises.prototype.onAnyFail = function(cb) {
                var file, _i, _len, _ref1, _results;
                this.anyFailList.add(cb);
                _ref1 = this.__items;
                _results = [];
                for (_i = 0, _len = _ref1.length; _i < _len; _i++) {
                    file = _ref1[_i];
                    if (file.state() === 'rejected') {
                        _results.push(file.fail(function() {
                            return cb.apply(null, [file].concat(__slice.call(arguments)));
                        }));
                    } else {
                        _results.push(void 0);
                    }
                }
                return _results;
            };

            CollectionOfPromises.prototype.onAnyProgress = function(cb) {
                var file, _i, _len, _ref1, _results;
                this.anyProgressList.add(cb);
                _ref1 = this.__items;
                _results = [];
                for (_i = 0, _len = _ref1.length; _i < _len; _i++) {
                    file = _ref1[_i];
                    _results.push(cb(file, $(file).data('lastProgress')));
                }
                return _results;
            };

            CollectionOfPromises.prototype.lastProgresses = function() {
                var item, _i, _len, _ref1, _results;
                _ref1 = this.__items;
                _results = [];
                for (_i = 0, _len = _ref1.length; _i < _len; _i++) {
                    item = _ref1[_i];
                    _results.push($(item).data('lastProgress'));
                }
                return _results;
            };

            CollectionOfPromises.prototype.add = function(item) {
                if (!(item && item.then)) {
                    return;
                }
                CollectionOfPromises.__super__.add.apply(this, arguments);
                return this.__watchItem(item);
            };

            CollectionOfPromises.prototype.__replace = function(oldItem, newItem, i) {
                if (!(newItem && newItem.then)) {
                    return this.remove(oldItem);
                } else {
                    CollectionOfPromises.__super__.__replace.apply(this, arguments);
                    return this.__watchItem(newItem);
                }
            };

            CollectionOfPromises.prototype.__watchItem = function(item) {
                var handler,
                    _this = this;
                handler = function(callbacks) {
                    return function() {
                        if (__indexOf.call(_this.__items, item) >= 0) {
                            return callbacks.fire.apply(callbacks, [item].concat(__slice.call(arguments)));
                        }
                    };
                };
                return item.then(handler(this.anyDoneList), handler(this.anyFailList), handler(this.anyProgressList));
            };

            return CollectionOfPromises;

        })(utils.UniqCollection);
    });

}).call(this);
(function() {
    var __slice = [].slice;

    photolia.namespace('utils', function(ns) {
        var common, messages;
        ns.log = function() {
            var _ref;
            return (_ref = window.console) != null ? typeof _ref.log === "function" ? _ref.log.apply(_ref, arguments) : void 0 : void 0;
        };
        ns.debug = function() {
            var _ref, _ref1;
            if ((_ref = window.console) != null ? _ref.debug : void 0) {
                return (_ref1 = window.console).debug.apply(_ref1, arguments);
            } else {
                return ns.log.apply(ns, ["Debug:"].concat(__slice.call(arguments)));
            }
        };
        ns.warn = function() {
            var _ref, _ref1;
            if ((_ref = window.console) != null ? _ref.warn : void 0) {
                return (_ref1 = window.console).warn.apply(_ref1, arguments);
            } else {
                return ns.log.apply(ns, ["Warning:"].concat(__slice.call(arguments)));
            }
        };
        messages = {};
        ns.warnOnce = function(msg) {
            if (messages[msg] == null) {
                messages[msg] = true;
                return ns.warn(msg);
            }
        };
        common = {
            publicKey: "Global public key not set. Uploads may not work!\nAdd this to the <head> tag to set your key:\n\n<script>\nphotolia_PUBLIC_KEY = 'your_public_key';\n</script>"
        };
        return ns.commonWarning = function(name) {
            if (common[name] != null) {
                return ns.warnOnce(common[name]);
            }
        };
    });

}).call(this);
(function() {
    var $;

    $ = photolia.jQuery;

    photolia.namespace('utils', function(ns) {
        var callbacks,
            _this = this;
        callbacks = {};
        $(window).on("message", function(_arg) {
            var e, item, message, _i, _len, _ref, _results;
            e = _arg.originalEvent;
            try {
                message = JSON.parse(e.data);
            } catch (_error) {
                return;
            }
            if (message.type in callbacks) {
                _ref = callbacks[message.type];
                _results = [];
                for (_i = 0, _len = _ref.length; _i < _len; _i++) {
                    item = _ref[_i];
                    if (e.source === item[0]) {
                        _results.push(item[1](message));
                    } else {
                        _results.push(void 0);
                    }
                }
                return _results;
            }
        });
        ns.registerMessage = function(type, sender, callback) {
            if (!(type in callbacks)) {
                callbacks[type] = [];
            }
            return callbacks[type].push([sender, callback]);
        };
        return ns.unregisterMessage = function(type, sender) {
            if (type in callbacks) {
                return callbacks[type] = $.grep(callbacks[type], function(item) {
                    return item[0] !== sender;
                });
            }
        };
    });

}).call(this);
(function() {
    var $,
        __indexOf = [].indexOf || function(item) {
            for (var i = 0, l = this.length; i < l; i++) {
                if (i in this && this[i] === item) return i;
            }
            return -1;
        },
        __slice = [].slice;

    $ = photolia.jQuery;

    photolia.namespace('utils', function(ns) {
        var pipeTuples;
        ns.unique = function(arr) {
            var item, result, _i, _len;
            result = [];
            for (_i = 0, _len = arr.length; _i < _len; _i++) {
                item = arr[_i];
                if (__indexOf.call(result, item) < 0) {
                    result.push(item);
                }
            }
            return result;
        };
        ns.imageLoader = function(src) {
            var def;
            def = $.Deferred();
            $(new Image).on('load', def.resolve).on('error', def.reject).attr('src', src);
            return def.promise();
        };
        ns.defer = function(fn) {
            return setTimeout(fn, 0);
        };
        ns.gcd = function(a, b) {
            var c;
            while (b) {
                c = a % b;
                a = b;
                b = c;
            }
            return a;
        };
        ns.once = function(fn) {
            var called, result;
            called = false;
            result = null;
            return function() {
                if (!called) {
                    result = fn.apply(this, arguments);
                    called = true;
                }
                return result;
            };
        };
        ns.wrapToPromise = function(value) {
            return $.Deferred().resolve(value).promise();
        };
        ns.then = function(pr, doneFilter, failFilter, progressFilter) {
            var compose, df;
            df = $.Deferred();
            compose = function(fn1, fn2) {
                if (fn1 && fn2) {
                    return function() {
                        return fn2.call(this, fn1.apply(this, arguments));
                    };
                } else {
                    return fn1 || fn2;
                }
            };
            pr.then(compose(doneFilter, df.resolve), compose(failFilter, df.reject), compose(progressFilter, df.notify));
            return df.promise();
        };
        ns.bindAll = function(source, methods) {
            var target;
            target = {};
            $.each(methods, function(i, method) {
                var fn;
                fn = source[method];
                if ($.isFunction(fn)) {
                    return target[method] = function() {
                        var result;
                        result = fn.apply(source, arguments);
                        if (result === source) {
                            return target;
                        } else {
                            return result;
                        }
                    };
                } else {
                    return target[method] = fn;
                }
            });
            return target;
        };
        ns.upperCase = function(s) {
            return s.replace(/([A-Z])/g, '_$1').toUpperCase();
        };
        ns.publicCallbacks = function(callbacks) {
            var result;
            result = callbacks.add;
            result.add = callbacks.add;
            result.remove = callbacks.remove;
            return result;
        };
        ns.uuid = function() {
            return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
                var r, v;
                r = Math.random() * 16 | 0;
                v = c === 'x' ? r : r & 3 | 8;
                return v.toString(16);
            });
        };
        ns.splitUrlRegex = /^(?:([^:\/?#]+):)?(?:\/\/([^\/?\#]*))?([^?\#]*)\??([^\#]*)\#?(.*)$/;
        ns.uuidRegex = /[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}/i;
        ns.groupIdRegex = new RegExp("" + ns.uuidRegex.source + "~[0-9]+", 'i');
        ns.cdnUrlRegex = new RegExp("^/?(" + ns.uuidRegex.source + ")(?:/(-/(?:[^/]+/)+)?([^/]*))?$", 'i');
        ns.splitCdnUrl = function(url) {
            return ns.cdnUrlRegex.exec(ns.splitUrlRegex.exec(url)[3]);
        };
        ns.escapeRegExp = function(str) {
            return str.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
        };
        ns.globRegexp = function(str, flags) {
            var parts;
            if (flags == null) {
                flags = 'i';
            }
            parts = $.map(str.split('*'), ns.escapeRegExp);
            return new RegExp("^" + parts.join('.+') + "$", flags);
        };
        ns.normalizeUrl = function(url) {
            var scheme;
            scheme = document.location.protocol;
            if (scheme !== 'http:') {
                scheme = 'https:';
            }
            return url.replace(/^\/\//, scheme + '//').replace(/\/+$/, '');
        };
        ns.fitText = function(text, max) {
            var head, tail;
            if (text.length > max) {
                head = Math.ceil((max - 3) / 2);
                tail = Math.floor((max - 3) / 2);
                return text.slice(0, head) + '...' + text.slice(-tail);
            } else {
                return text;
            }
        };
        ns.fitSizeInCdnLimit = function(objSize) {
            return ns.fitSize(objSize, [2048, 2048]);
        };
        ns.fitSize = function(objSize, boxSize, upscale) {
            var heightRation, widthRatio;
            if (objSize[0] > boxSize[0] || objSize[1] > boxSize[1] || upscale) {
                widthRatio = boxSize[0] / objSize[0];
                heightRation = boxSize[1] / objSize[1];
                if (!boxSize[0] || (boxSize[1] && widthRatio > heightRation)) {
                    return [Math.round(heightRation * objSize[0]), boxSize[1]];
                } else {
                    return [boxSize[0], Math.round(widthRatio * objSize[1])];
                }
            } else {
                return objSize.slice();
            }
        };
        ns.applyCropSelectionToFile = function(file, crop, size, coords) {
            var downscale, h, modifiers, prefered, upscale, w, wholeImage,
                _this = this;
            w = coords.width, h = coords.height;
            prefered = crop.preferedSize;
            modifiers = '/version';
            wholeImage = w === size[0] && h === size[1];
            console.log(prefered)
            if (!wholeImage) {
                modifiers += "/crop/" + w + "x" + h + "/" + coords.left + "-" + coords.top + "/";
            }
            downscale = crop.downscale && (w > prefered[0] || h > prefered[1]);
            upscale = crop.upscale && (w < prefered[0] || h < prefered[1]);
            if (downscale || upscale) {
                coords.sw = prefered[0], coords.sh = prefered[1];
                modifiers += "/resize/" + (prefered.join('x')) + "/";
            } else if (!wholeImage) {
                // modifiers += "-/preview/";
            }
            return file.then(function(info) {
                info.cdnUrlModifiers = modifiers;
                info.cdnUrl = "" + info.originalUrl + (modifiers || '');
                info.crop = coords;
                return info;
            });
        };
        ns.fileInput = function(container, settings, fn) {
            var accept, input, run;
            input = null;
            accept = settings.inputAcceptTypes;
            if (accept === '') {
                accept = settings.imagesOnly ? 'image/*' : null;
            }
            (run = function() {
                input = (settings.multiple ? $('<input type="file" multiple>') : $('<input type="file">')).attr('accept', accept).css({
                    position: 'absolute',
                    top: 0,
                    opacity: 0,
                    margin: 0,
                    padding: 0,
                    width: 'auto',
                    height: 'auto',
                    cursor: container.css('cursor')
                }).on('change', function() {
                    fn(this);
                    $(this).hide();
                    return run();
                });
                return container.append(input);
            })();
            return container.css({
                position: 'relative',
                overflow: 'hidden'
            }).mousemove(function(e) {
                var left, top, width, _ref;
                _ref = $(this).offset(), left = _ref.left, top = _ref.top;
                width = input.width();
                return input.css({
                    left: e.pageX - left - width + 10,
                    top: e.pageY - top - 10
                });
            });
        };
        ns.fileSelectDialog = function(container, settings, fn) {
            var accept;
            accept = settings.inputAcceptTypes;
            if (accept === '') {
                accept = settings.imagesOnly ? 'image/*' : null;
            }
            return $(settings.multiple ? '<input type="file" multiple>' : '<input type="file">').attr('accept', accept).css({
                position: 'fixed',
                bottom: 0,
                opacity: 0
            }).on('change', function() {
                fn(this);
                return $(this).remove();
            }).appendTo(container).focus().click().hide();
        };
        ns.fileSizeLabels = 'B KB MB GB TB PB EB ZB YB'.split(' ');
        ns.readableFileSize = function(value, onNaN, prefix, postfix) {
            var digits, fixedTo, i, threshold;
            if (onNaN == null) {
                onNaN = '';
            }
            if (prefix == null) {
                prefix = '';
            }
            if (postfix == null) {
                postfix = '';
            }
            value = parseInt(value, 10);
            if (isNaN(value)) {
                return onNaN;
            }
            digits = 2;
            i = 0;
            threshold = 1000 - 5 * Math.pow(10, 2 - Math.max(digits, 3));
            while (value > threshold && i < ns.fileSizeLabels.length - 1) {
                i++;
                value /= 1024;
            }
            value += 0.000000000000001;
            fixedTo = Math.max(0, digits - Math.floor(value).toFixed(0).length);
            value = Number(value.toFixed(fixedTo));
            return "" + prefix + value + " " + ns.fileSizeLabels[i] + postfix;
        };
        ns.ajaxDefaults = {
            dataType: 'json',
            crossDomain: true,
            cache: false
        };
        ns.jsonp = function(url, type, data) {
            if ($.isPlainObject(type)) {
                data = type;
                type = 'GET';
            }
            return $.ajax($.extend({
                url: url,
                type: type,
                data: data
            }, ns.ajaxDefaults)).then(function(data) {
                var text;
                if (data.error) {
                    text = data.error.content || data.error;
                    return $.Deferred().reject(text);
                } else {
                    return data;
                }
            }, function(_, textStatus, errorThrown) {
                var text;
                text = "" + textStatus + " (" + errorThrown + ")";
                ns.warn("JSONP unexpected error: " + text + " while loading " + url);
                return text;
            });
        };
        ns.canvasToBlob = function(canvas, type, quality, callback) {
            var arr, binStr, dataURL, i, _i, _ref;
            if (HTMLCanvasElement.prototype.toBlob) {
                return canvas.toBlob(callback, type, quality);
            }
            dataURL = canvas.toDataURL(type, quality);
            dataURL = dataURL.split(',');
            binStr = atob(dataURL[1]);
            arr = new Uint8Array(binStr.length);
            for (i = _i = 0, _ref = binStr.length; _i < _ref; i = _i += 1) {
                arr[i] = binStr.charCodeAt(i);
            }
            return callback(new Blob([arr], {
                type: /:(.+\/.+);/.exec(dataURL[0])[1]
            }));
        };
        ns.taskRunner = function(capacity) {
            var queue, release, run, running;
            running = 0;
            queue = [];
            release = function() {
                var task;
                if (queue.length) {
                    task = queue.shift();
                    return ns.defer(function() {
                        return task(release);
                    });
                } else {
                    return running -= 1;
                }
            };
            return run = function(task) {
                if (!capacity || running < capacity) {
                    running += 1;
                    return ns.defer(function() {
                        return task(release);
                    });
                } else {
                    return queue.push(task);
                }
            };
        };
        pipeTuples = [
            ["notify", "progress", 2],
            ["resolve", "done", 0],
            ["reject", "fail", 1]
        ];
        return ns.fixedPipe = function() {
            var fns, promise;
            promise = arguments[0], fns = 2 <= arguments.length ? __slice.call(arguments, 1) : [];
            return $.Deferred(function(newDefer) {
                return $.each(pipeTuples, function(i, tuple) {
                    var fn;
                    fn = $.isFunction(fns[tuple[2]]) && fns[tuple[2]];
                    return promise[tuple[1]](function() {
                        var returned;
                        returned = fn && fn.apply(this, arguments);
                        if (returned && $.isFunction(returned.promise)) {
                            return returned.promise().progress(newDefer.notify).done(newDefer.resolve).fail(newDefer.reject);
                        } else {
                            return newDefer[tuple[0] + "With"](this === promise ? newDefer.promise() : this, fn ? [returned] : arguments);
                        }
                    });
                });
            }).promise();
        };
    });

}).call(this);
