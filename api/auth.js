'use strict'
// var v = require('./validation')
var jwt = require('jsonwebtoken')
const Boom = require('boom')

const scheme = function (server, options) {

    return {
        api: {
            settings: {
                keyToken: process.env.Secret
            }
        },
        authenticate: function (request, reply) {

    // server.auth.default('default');
    // var token = req.headers.authorization
    // jwt.verify(token, toaster.local.keyToken, function(err, decoded) {
    //     if (err) {
    //         res.status(401);
    //         res.send('Unauthorized');
    //     } else {
    //         if (access == 'super' && decoded.action != 'SuperToken') {
    //             res.status(401);
    //             return res.send('Unauthorized');
    //         }
    //         if (access != 'super' && decoded.action != 'accessToken') {
    //             res.status(401);
    //             return res.send('Unauthorized');
    //         }
    //         req.session = {
    //             user: decoded.id || null,
    //             type: decoded.action
    //         }
    //         next(req, res)
    //     }
    // });
            const req = request.raw.req;
            const authorization = req.headers.authorization;
            if (!authorization) {
                return reply(Boom.unauthorized(null, 'Custom'));
            }
            console.log('im here')
            return reply.continue({ credentials: { user: 'john' } });
        }
    };
};


exports.register = function (server, options, next) {
    server.auth.scheme('custom', scheme);
    server.auth.strategy('default', 'custom');
    next()
}

exports.register.attributes = {
  name: 'auth'
}
