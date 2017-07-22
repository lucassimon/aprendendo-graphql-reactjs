'use strict'

let Router = require('koa-router')
let Controller = require('./view')

let courses = Router({
  prefix: '/courses/'
})

courses.get(
  '/',
  Controller.find
).post(
  '/',
  Controller.add
)

module.exports = courses