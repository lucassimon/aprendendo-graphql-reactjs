'use strict'

let Router = require('koa-router')
let Controller = require('./view')

let router = Router({
  prefix: '/commissioning'
})

router.get(
  '/page/:page/',
  Controller.find_per_page
).get(
  '/period/:start/:end/',
  Controller.find_per_period
).get(
  '/:id/',
  Controller.find_id
).post(
  '/',
  Controller.add
)

module.exports = router
