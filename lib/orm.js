'use strict'
const mongo = require('mongodb')
const mongoose = require('mongoose')
exports.register = function (server, options, next) {
	mongoose.connect('mongodb://' + process.env.MONG_HOST + ':' + process.env.MONG_PORT + '/' + process.env.MONG_DB )
    let db = mongoose.connection
    db.on('error', console.error.bind(console, 'connection error:'))
    server.orm = mongoose
    next()
};

exports.register.attributes = {
    name: 'orm'
};