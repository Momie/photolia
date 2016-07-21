'use strict'

const Confidence = require('confidence')
const criteria = {
  env: process.env.NODE_ENV
}


const manifest = {
  $meta: 'This file defines the config server.',
  // projectName: 'Photolia',
  // port: {
  //     api: {
  //         $filter: 'env',
  //         test: 9090,
  //         $default: process.env.PHOTOLIA_PORT
  //     }
  // },
  server: {
    debug: {
      request: ['error']
    },
    connections: {
      routes: {
        security: true
        // cors: true
      }
    }
  },
  connections: [{
    port: process.env.PHOTOLIA_PORT,
    labels: ['api']
  }],
  registrations: [
  {
    plugin: 'inert'
  },{
    plugin: './api/auth'
  },
  {
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