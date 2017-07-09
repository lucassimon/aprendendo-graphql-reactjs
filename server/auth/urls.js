'use strict'

let Router = require('koa-router')



let auth = Router({
  prefix: '/auth/'
})

auth.get(
  '/',
  Controller.find
)

module.exports = courses