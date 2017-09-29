'use strict'

let Router = require('koa-router')
let Controller = require('./view')

var router = Router({
  prefix: '/users'
})

router.get(
  '/',
  Controller.find
).get(
  '/:id/',
  Controller.find_id
).get(
  '/page/:page/',
  Controller.find_per_page
)

module.exports = router
