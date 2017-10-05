'use strict'

const Router = require('koa-router')
const Controller = require('./views')
const route = Router({
  prefix: '/auth/'
})

route.post(
  '/',
  Controller.signin
)

module.exports = route
