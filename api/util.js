'use strict'

// var readChunk = require('read-chunk'); // npm install read-chunk 
// var imageType = require('image-type');
// var buffer = readChunk.sync('unicorn.png', 0, 12);

//imageType(buffer);

const fs = require('fs')
const im = require('imagemagick')
const path = require('path')
const request = require('request')


function s4() {
    return Math.floor((1 + Math.random()) * 0x10000)
        .toString(16)
        .substring(1)
}
exports.crop = function(img, options) {
    return new Promise(function(resolve, reject) {
      let dir = path.join(__dirname, '/../uploads/' + img)
      let name = options.w + 'x' + options.h + ':' + options.x + 'x' + options.y
      if (!fs.existsSync(dir)) {
          fs.mkdirSync(dir)
      }
      if (fs.existsSync(dir + '/' + name)) {
          return resolve(dir + '/' + name + '/' + img)
      } else {
          fs.mkdirSync(dir + '/' + name)
      }
      let newPath = dir + '/' + name + '/' + img
      let origin = dir + '/' + img;
      try {
        return im.convert([
            origin,
            "-crop",
            options.w + 'x' + options.h + '+' + options.x + '+' + options.y,
            newPath
        ], function(err) {
            if (err) {
                return reject(err)
            }
            return resolve(newPath)
        })
      } catch (e) {
        return reject(e)
      }
    })
}

exports.upload = function(img) {
  return new Promise(function(resolve, reject) {
    const name = uuid()
    let dir = path.join(__dirname, '/../uploads/' + name)
    if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir)
    }
    var file = fs.createWriteStream(dir + '/' + name) // img.hapi.filename)
    img.pipe(file)
    img.on('error', function(err) {
      reject(err)
    })
    img.on('end', function(err) {
      resolve({
            "file": name
        })
    }) 
  })  

}

exports.load = function(url , options) {
  return new Promise(function(resolve, reject) {
    let name = uuid() 
    let r = request(url)
    r.on('response',  function (res) {
      let dir = path.join(__dirname, '/../uploads/' + name)
      if (!fs.existsSync(dir)) {
          fs.mkdirSync(dir)
      }
      res.pipe(fs.createWriteStream(dir + '/' + name ))
    });
    r.on( 'end', function(){
        resolve({"token": name })
    })
  })
}

exports.resize = function(img, options) {
    return new Promise(function(resolve, reject) {
      let dir = path.join(__dirname, '/../uploads/' + img)
      let name = options.w + 'x' + options.h
      if (!fs.existsSync(dir)) {
          fs.mkdirSync(dir);
      }
      if (fs.existsSync(dir + '/' + name)) {
          return resolve(dir + '/' + name + '/' + img)
      } else {
          fs.mkdirSync(dir + '/' + name)
      }
      let newPath = dir + '/' + name + '/' + img
      let origin = dir + '/' + img;
      try {
        return im.convert([
            origin,
            "-resize",
            options.w + 'x' + options.h,
            newPath
        ], function(err) {
            if (err) {
                return reject(err);
            }
            return resolve(newPath)
        })
      } catch (e) {
        return reject(e);
      }
    })
}

exports.delete = function(img) {

}

exports.checkType = function(type, img) {

}
const uuid = function() {
    return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
        s4() + '-' + s4() + s4() + s4();
}
exports.uuid = uuid