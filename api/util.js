
'use strict'



// var readChunk = require('read-chunk'); // npm install read-chunk 
// var imageType = require('image-type');
// var buffer = readChunk.sync('unicorn.png', 0, 12);
 
//imageType(buffer);

const fs = require('fs')
const im = require('imagemagick')

function s4() {
    return Math.floor((1 + Math.random()) * 0x10000)
        .toString(16)
        .substring(1);
}

exports.crop = function(img, options) {
  var dir = __dirname + '/../uploads/' + img;
  var name = options.w + 'x' + options.h + ':' + options.x + 'x' + options.y
  if (!fs.existsSync(dir)){
      fs.mkdirSync(dir);
  }

  if (fs.existsSync(dir + '/' + name)){
      return dir + '/' + name + '/' + img
  }else{
    fs.mkdirSync(dir + '/' + name);
  }
  var newPath = dir + '/' + name + '/' + img 
  var origin = dir + '/' + img;
    // write file to uploads/fullsize folder
    try {
        im.crop({
          srcPath: origin,
          dstPath: newPath,
          width: options.w,
          height: options.h,
          x: options.x,
          y: options.y,
          quality: 1,
          gravity: "North"
        }, function(err, stdout, stderr){
          console.log(err)
          return newPath
        });
        return newPath
    } catch (e) {
        console.log(e)
        return null
    }
}

exports.upload = function(img){
  const name = this.uuid()
  if (!fs.existsSync(__dirname + '/../uploads')){
      fs.mkdirSync(__dirname + '/../uploads');
  }
  var dir = __dirname + '/../uploads/' + name;
  if (!fs.existsSync(dir)){
      fs.mkdirSync(dir);
  }
  var file = fs.createWriteStream(dir + '/' + name) // img.hapi.filename)
  console.log(dir + '/' + name)
  img.pipe(file)
  img.on('error', function (err) { 
      console.error(err) 
  });
  img.on('end', function (err) { 
    return {"file": name }
  })
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



        // fs.writeFile(newPath, data, function(err) {
        //     // write file to uploads/thumbs folder
        //     im.crop({
        //       srcPath: path,
        //       dstPath: 'cropped.jpg',
        //       width: 800,
        //       height: 600,
        //       x: 100,
        //       y: 200,
        //       quality: 1,
        //       gravity: "North"
        //     }, function(err, stdout, stderr){
        //       // foo 
        //     });
        //     im.resize({
        //         srcPath: newPath,
        //         dstPath: thumbPath,
        //         width: 200
        //     }, function(err, stdout, stderr) {
        //         if (err) throw err;
        //         console.log('resized image to fit within 200x200px');
        //     });
        //     res.send({
        //             name: imageName,
        //             url: "/uploads/fullsize/" + imageName,
        //             thumbsUrl: "/uploads/thumbs/" + imageName
        //         })
        //         // res.redirect("/uploads/fullsize/" + imageName);
        // });
