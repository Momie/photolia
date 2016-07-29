'use strict'

const Confidence = require('confidence')
const criteria = {
  env: process.env.NODE_ENV
}
const manifest = {
  $meta: 'This file defines the config server.',
  server: {
    debug: {
      request: ['error']
    },
    connections: {
      routes: {
        security: false,
        cors: true
      }
    }
  },
  connections: [{
    port: process.env.PHOTOLIA_PORT,
    labels: ['api'],
    routes: {
        cors: true
    }
  }],
  registrations: [{
    plugin: 'inert'
  },{
  //   plugin: './lib/orm'
  // },{
  //   plugin: './api/model'
  // },{
    plugin: './api/auth'
  },{
    plugin: './api/router'
  }]
}

const store = new Confidence.Store(manifest)

exports.get = function (key) {
  return store.get(key, criteria)
}

exports.meta = function (key) {
  return store.meta(key, criteria)
}

// https://github.com/hapijs/glue/blob/master/API.md
