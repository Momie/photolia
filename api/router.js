
'use strict'

var handlers = require('./handler')
// var v = require('./validation')
exports.register = function (server, options, next) {
  server.route([{
    method: ['GET'],
    path: '/',
    handler: handlers.test,
    config: {
      tags: ['test'],
      // auth: 'default'
    }
  },
  {
    method: ['GET'],
    path: '/from_url/',
    handler: handlers.fromUrl,
    config: {
      tags: ['test'],
      // auth: 'default'
    }
  },
  {
    method: ['GET'],
    path: '/from_url/status/',
    handler: handlers.status,
    config: {
      tags: ['test'],
      // auth: 'default'
    }
  },
  {
    method: ['POST'],
    path: '/upload',
    handler: handlers.upload,
    config: {
      payload:{
            maxBytes: 209715200,
            output:'stream',
            parse: true
      },
      tags: ['upload']
    }
  },
  {
    method: ['GET'],
    path: '/info/',
    handler: handlers.info,
    config: {
      tags: ['upload']
    }
  },
  {
    method: ['GET'],
    path: '/{id}',
    handler: handlers.origin,
    config: {
      tags: ['get']
    }
  },
    {
    method: ['DELETE'],
    path: '/{id}',
    handler: handlers.delete,
    config: {
      tags: ['delete']
    }
  },
    {
    method: ['GET'],
    path: '/assets/{path*}',
    handler: {
        directory: {
            path: './assets/'
        }
    },
    config: {
      tags: ['assets']
    }
  }
  ])
  next()
}

exports.register.attributes = {
  name: 'api'
}
