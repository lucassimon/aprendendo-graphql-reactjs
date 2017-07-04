'use strict'

let Router = require('koa-router')
let Controller = require('./view')

let courses = Router({
  prefix: '/courses/'
})

courses.get(
  '/',
  Controller.find
)

module.exports = courses