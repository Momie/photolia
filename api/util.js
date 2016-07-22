'use strict'
//('/path/to/file.txt');         // => 'text/plain'
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
exports.generateFile = function(img , options){
  return new Promise(function(resolve, reject) { 
      let dir = path.join(__dirname, '/../uploads/' + img + '_dir')
      let version = path.join(dir, '/' + options)
      if (fs.existsSync(version)) {
          resolve({file: path.join(version, '/' + img) , isExist: true})
      }else{
        fs.mkdirSync(version)
        let newVer = path.join(version, '/' + img)
        let file = fs.createReadStream(path.join(dir, '/' + img))
        file.pipe(fs.createWriteStream(newVer))
        file.on('error', function(err) {
          reject({err: err})
        })
        file.on('end', function(err) {
          resolve({file: newVer , isExist: false})
        }) 
      }
  }) 
}

exports.crop = function(filein, fileout, options) {
    return new Promise(function(resolve, reject) {
      try {
        console.log('---->',options)
        return im.convert([
            filein,
            "-crop",
            options.w + 'x' + options.h + '+' + options.x + '+' + options.y,
            fileout
        ], function(err) {
            if (err) {
                return reject(err)
            }
            return resolve({file: fileout , isExist: false})
        })
      } catch (e) {
        return reject(e)
      }
    })
}

exports.resize = function(filein, fileout, options) {
    return new Promise(function(resolve, reject) {
      try {
        return im.convert([
            filein,
            "-resize",
            options.w + 'x' + options.h,
            fileout
        ], function(err) {
            if (err) {
                return reject(err);
            }
            return resolve({file: fileout , isExist: false})
        })
      } catch (e) {
        return reject(e);
      }
    })
}




exports.upload = function(file , options) {
  return new Promise(function(resolve, reject) {
    const name = uuid()
    let dir = path.join(__dirname, '/../uploads/' + name + '_dir')
    if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir)
    }
    var img = fs.createWriteStream(dir + '/' + name) // file.hapi.filename)
    file.pipe(img)
    file.on('error', function(err) {
      reject(err)
    })
    file.on('end', function(err) {
      creatinfo(dir, name , options).then((f)=>{
          resolve({
                "file": name
            })
      }).catch((e)=> reject(e))
    }) 
  })  
}

exports.load = function(url , options) {
  return new Promise(function(resolve, reject) {
    let name = uuid() 
    let r = request(url)
    let dir = path.join(__dirname, '/../uploads/' + name + '_dir')
    let type = ''
    r.on('response',  function (res) {
      type = res.headers["content-type"]
      if (!fs.existsSync(dir)) {
          fs.mkdirSync(dir)
      }
      res.pipe(fs.createWriteStream(dir + '/' + name ))
    });
    r.on( 'end', function(){
      let options = {
        hapi : {
          filename: path.basename(url),
          headers: {
            "content-type" : type
          }
        }
      }
      creatinfo(dir, name , options).then((f)=>{
          resolve({
                "token": name
            })
      }).catch((e)=> reject(e))
    })
  })
}

exports.delete = function(img) {

}

exports.checkType = function(type, img) {

}

const creatinfo = function(dir, file, options){
  return new Promise(function(resolve, reject) {
      im.identify(dir + '/' + file, function(erre, features){
        if (erre) throw erre
        let info = {
                      "is_stored": true,
                      "done": features.filesize,
                      "file_id": file,
                      "total": features.filesize,
                      "size": features.filesize,
                      "uuid": file,
                      "is_image": (['JPEG','PNG'].indexOf(features.format) >= 0),
                      "filename": options.hapi.filename,
                      "is_ready": true,
                      "original_filename": options.hapi.filename,
                      "image_info": {
                          "orientation": null,
                          "format": features.format,
                          "height": features.height,
                          "width": features.width,
                          "geo_location": null,
                          "datetime_original": null,
                          "dpi": features.resolution
                      },
                      "mime_type": options.hapi.headers["content-type"]
                      }
        fs.writeFile(dir + '/info.json', JSON.stringify(info), function(err) {
          if(err) {
            console.log(err);
          }
          resolve(info)
        })
        // { format: 'JPEG', width: 3904, height: 2622, depth: 8 }
      })
  })
}

exports.creatinfo = creatinfo

const getInfo = function(file){
  return new Promise(function(resolve, reject) {
      let dir = path.join(__dirname, '/../uploads/' + file + '_dir')
      if (!fs.existsSync(dir)) {
          reject('not exist')
      }else{
        let obj = JSON.parse(fs.readFileSync(dir + '/info.json', 'utf8'))
        resolve(obj)
      }
  })
}

exports.getInfo = getInfo


const uuid = function() {
    return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
        s4() + '-' + s4() + s4() + s4();
}
exports.uuid = uuid