'use strict'
exports.register = function (server, options, next) {
    console.log(server)
    server.models['file'] = server.orm.model('files', server.orm.Schema({
        uuid: {
            type: String,
            trim: true,
            required: true
        },
        user: {
            type: Number,
            required: true,
            min: 1
        },
        file_name: {
            type: String,
            trim: true,
            required: true
        },
        file_type: {
            type: String,
            trim: true,
            required: true
        },
        file_info : {
            type: Object
        },
        versions : Object
    }, {
        timestamps: true
    }));

    next()
};

exports.register.attributes = {
    name: 'file'
};