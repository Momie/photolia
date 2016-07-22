'use strict'

const Boom = require('boom')

const util = require('./util')
// var multer = require('multer')
const fs = require('fs')
// Include ImageMagick

// var upload = multer({
//     dest: 'tmp/'
// })
var form = "<!DOCTYPE HTML><html><body>" +
    "<form method='post' action='/upload' enctype='multipart/form-data'>" +
    "<input type='file' name='image'/>" +
    "<input type='text' name='api-key'/>" +
    "<input type='text' name='secret-key'/>" +
    "<input type='submit' /></form>" +
    "</body></html>";
exports.test = function (req, resp) {
    console.log('--------------->' ,req.query)
  resp(form)
}

// global['imphone'] = {};

// imphone.route = require(__dirname + '/config/router.js');
// var auth = require(__dirname + '/config/auth.js');
// Object.keys(imphone.route).map(function(value, index) {
//     var endpoint = imphone.route[value];
//     Object.keys(endpoint).map(function(action, fn) {
//         app[action](value, function(req, res) {
//             auth(req, res, endpoint[action][0], endpoint[action][1] || 'user')
//         });
//     })
// });
// Include the node file module
        // var form = new multiparty.Form();
        // form.parse(requset.payload, function(err, fields, files) {
        //     if (err) return reply(err);
        //     else upload(files, reply);
        // });
// Post files
exports.upload = function (req, resp) {
	// console.log(req.payload)
	const img = req.payload["file"]
    util.upload(img).then((res)=>{
        resp(res)
    }).catch((e) => resp(e))
    
 //    const name = util.uuid()

 //    console.log('tmp/' + name)
	// // var data = req.payload;
	// // console.log(req)
 // //    if (data.file) {
 // //        var name = data.file.hapi.filename;
 // //        var path = __dirname + "/tmp/" + name;
 //        var file = fs.createWriteStream('tmp/' + name) // img.hapi.filename)
 //        img.pipe(file)
 //        img.on('error', function (err) { 
 //            console.error(err) 
 //        });
 //        img.on('end', function (err) { 
 //            // var ret = {
 //            //     filename: data.file.hapi.filename,
 //            //     headers: data.file.hapi.headers
 //            // }
 //            resp({"file": name })
 //        })
 //    }else{
 //    	resp('not found');
 //    }
        // fs.readFile(req.file.path, function(err, data) {
        //     var imageName = req.file.filename
        //         /// If there's an error
        //     if (!imageName) {
        //         console.log("There was an error")
        //         res.redirect("/");
        //         res.end();
        //     } else {
        //         var newPath = __dirname + "/uploads/fullsize/" + imageName;
        //         var thumbPath = __dirname + "/uploads/thumbs/" + imageName;
        //         // write file to uploads/fullsize folder
        //         try {
        //             fs.writeFile(newPath, data, function(err) {
        //                 // write file to uploads/thumbs folder
        //                 im.crop({
        //                   srcPath: path,
        //                   dstPath: 'cropped.jpg',
        //                   width: 800,
        //                   height: 600,
        //                   x: 100,
        //                   y: 200,
        //                   quality: 1,
        //                   gravity: "North"
        //                 }, function(err, stdout, stderr){
        //                   // foo 
        //                 });
        //                 im.resize({
        //                     srcPath: newPath,
        //                     dstPath: thumbPath,
        //                     width: 200
        //                 }, function(err, stdout, stderr) {
        //                     if (err) throw err;
        //                     console.log('resized image to fit within 200x200px');
        //                 });
        //                 res.send({
        //                         name: imageName,
        //                         url: "/uploads/fullsize/" + imageName,
        //                         thumbsUrl: "/uploads/thumbs/" + imageName
        //                     })
        //                     // res.redirect("/uploads/fullsize/" + imageName);
        //             });
        //         } catch (e) {
        //             res.send('error');
        //         }
        //     }
        // });
}

exports.delete = function (req, resp) {
    file = req.params.file;
    fs.unlinkSync(__dirname + "/uploads/fullsize/" + file);
    fs.unlinkSync(__dirname + "/uploads/thumbs/" + file);
    res.send('success');
}

exports.origin = function (req, resp) {
	//resp(encodeURIComponent(req.params.id))
    resp.file('./uploads/' + req.params.id + '/' + req.params.id)
    // file = req.params.file
    // try {
    //     stats = fs.lstatSync(__dirname + "/uploads/fullsize/" + file);
    //     var img = fs.readFileSync(__dirname + "/uploads/fullsize/" + file);
    //     res.writeHead(200, {
    //         'Content-Type': 'image/jpg'
    //     });
    //     res.end(img, 'binary');
    // } catch (e) {
    //     res.send('Not Found');
    // }
}


exports.info = function (req, resp) {
    console.log(req.query.file_id)
    //resp(encodeURIComponent(req.params.id))
    resp({
    "is_stored": true,
    "done": 4763,
    "file_id": req.query.file_id,
    "total": 4763,
    "size": 4763,
    "uuid": req.query.file_id,
    "is_image": true,
    "filename": "jobi_logo_sm.png",
    "is_ready": true,
    "original_filename": "jobi_logo_sm.png",
    "image_info": {
        "orientation": null,
        "format": "PNG",
        "height": 302,
        "width": 300,
        "geo_location": null,
        "datetime_original": null,
        "dpi": null
    },
    "mime_type": "image/png"
    })
    // file = req.params.file
    // try {
    //     stats = fs.lstatSync(__dirname + "/uploads/fullsize/" + file);
    //     var img = fs.readFileSync(__dirname + "/uploads/fullsize/" + file);
    //     res.writeHead(200, {
    //         'Content-Type': 'image/jpg'
    //     });
    //     res.end(img, 'binary');
    // } catch (e) {
    //     res.send('Not Found');
    // }
}

exports.fromUrl = function(req, resp){
    util.load(req.query.source_url).then((res)=>{
        resp(res)
    }).catch((e) => resp(e))
}

exports.resize = function (req, resp) {
    util.resize(req.params.id,req.params).then((file)=> {
        resp.file(file)
    }).catch((e)=> resp(e))
}

exports.crop = function (req, resp) {
    util.crop(req.params.id,req.params).then((file)=> {
        resp.file(file)
    }).catch((e)=> resp(e))
}

exports.status = function(req, resp){

    resp({
        "status": "success",
        "is_stored": true,
        "done": 29940,
        "file_id": req.query.token,
        "total": 29940,
        "size": 29940,
        "uuid": req.query.token,
        "is_image": true,
        "filename": "aaroncarter_635x250_1385060042.jpg",
        "is_ready": true,
        "original_filename": "aaroncarter_635x250_1385060042.jpg",
        "image_info": {
            "orientation": null,
            "format": "JPEG",
            "height": 250,
            "width": 635,
            "geo_location": null,
            "datetime_original": null,
            "dpi": null
        },
        "mime_type": "image/jpeg"
    })
}

exports.target = function (req, resp) {

    file = req.params.file;
    try {
        stats = fs.lstatSync(__dirname + "/uploads/thumbs/" + file);
        var img = fs.readFileSync(__dirname + "/uploads/thumbs/" + file);
        res.writeHead(200, {
            'Content-Type': 'image/jpg'
        });
        res.end(img, 'binary');
    } catch (e) {
        res.send('Not Found');
    }
}