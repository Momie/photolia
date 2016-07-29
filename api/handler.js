'use strict'

const Boom = require('boom')
const util = require('./util')

const fs = require('fs')


exports.upload = function (req, resp) {
	const img = req.payload["file"]
    util.upload(img, req.payload["file"]).then((res)=>{
        resp(res)
    }).catch((e) => {
        console.log(e)
        resp(e)
    })
}

exports.delete = function (req, resp) {
    file = req.params.file;
    fs.unlinkSync(__dirname + "/uploads/fullsize/" + file);
    fs.unlinkSync(__dirname + "/uploads/thumbs/" + file);
    // res.send('success');
}

exports.origin = function (req, resp) {
    resp.file('./uploads/' + req.params.id + '_dir/' + req.params.id)
}

exports.version = function (req, resp) {
    const actions = req.params.version.split('/')
    const ver = actions.join('_')
    util.generateFile(req.params.id, ver).then((res)=>{
        if(res.isExist) return res
        let file = res.file
        let crop = actions.indexOf('crop')
        if(crop >= 0){
            let wh = actions[crop+1].split('x')
            let xy = actions[crop+2].split('-')
            let option = {
                w:wh[0],
                h:wh[1],
                x:xy[0],
                y:xy[1]
            }
            return util.crop(file , file , option)
        } else return res
    }).then((res)=>{
        if(res.isExist) return res
        let file = res.file
        let resize = actions.indexOf('resize')
        if(resize >= 0){
            let wh = actions[resize+1].split('x')
            let option = {
                w:wh[0],
                h:wh[1]
            }
            return util.resize(file , file , option)
        } else return res
    }).then((res)=>{
        resp.file(res.file)
    }).catch((er) => resp(encodeURIComponent(dir)))
}

exports.info = function (req, resp) {
    util.getInfo(req.query.file_id).then((res)=>{
        resp(res)
    }).catch((e) => {
         console.log(e)
         resp(e)
    })
}

exports.fromUrl = function(req, resp){
		// console.log(req.query.source_url)
		// resp({token:'234234-432434-4323-432'})
    util.load(req.query.source_url).then((res)=>{
        resp(res)
    }).catch((e) => {
        console.log(e)
        resp(e)
    })
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
    util.getInfo(req.query.token).then((res)=>{
        resp(res)
    }).catch((e) => {
         console.log(e)
         resp(e)
    })
}
