'use strict'

let mongoose = require('mongoose')
let User = require('../model')


exports.add = async (root, params) => {
  let uModel = new User(params.data)

  let newUser = await uModel.save()

  if (!newUser) {
    throw new Error('Error at add the user')
  }

  return newUser
}
