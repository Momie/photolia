
'use strict'

const im = require('imagemagick');

function s4() {
    return Math.floor((1 + Math.random()) * 0x10000)
        .toString(16)
        .substring(1);
}

exports.crop = function(img, options) {
    var newPath = __dirname + "/uploads/fullsize/" + imageName;
    var thumbPath = __dirname + "/uploads/thumbs/" + imageName;
    // write file to uploads/fullsize folder
    try {
        fs.writeFile(newPath, data, function(err) {
            // write file to uploads/thumbs folder
            im.crop({
              srcPath: path,
              dstPath: 'cropped.jpg',
              width: 800,
              height: 600,
              x: 100,
              y: 200,
              quality: 1,
              gravity: "North"
            }, function(err, stdout, stderr){
              // foo 
            });
            im.resize({
                srcPath: newPath,
                dstPath: thumbPath,
                width: 200
            }, function(err, stdout, stderr) {
                if (err) throw err;
                console.log('resized image to fit within 200x200px');
            });
            res.send({
                    name: imageName,
                    url: "/uploads/fullsize/" + imageName,
                    thumbsUrl: "/uploads/thumbs/" + imageName
                })
                // res.redirect("/uploads/fullsize/" + imageName);
        });
    } catch (e) {
        res.send('error');
    }
}

exports.resize = function(img, options) {

}

exports.delete = function(img) {

}

exports.checkType = function(type, img) {

}

exports.uuid = function() {
        return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
            s4() + '-' + s4() + s4() + s4();
}

