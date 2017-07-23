'use strict'

let mongoose = require('mongoose')
let Course = require('../model')

exports.all = async (root, params) => {
  return Course.find({}).exec()
}

exports.find_by_id = async (root, params) => {
  let id = params.id || null

  if (!id) {
    throw new Error('Id is required')
  }

  if (!mongoose.Types.ObjectId.isValid(params.id)) {
    throw new Error('This Id is a not valid ObjectId')
  }

  return Course.findOne({_id: params.id}).exec()
}


exports.add = async (root, params) => {
  let cModel = new Course(params.data)

  let newCourse = await cModel.save()

  if (!newCourse) {
    throw new Error('Error at add the course')
  }

  return newCourse
}


exports.remove = async (root, params) => {
  let id = params.id || null

  if (!id) {
    throw new Error('Id is required')
  }

  if (!mongoose.Types.ObjectId.isValid(params.id)) {
    throw new Error('This Id is a not valid ObjectId')
  }

  let removeCourse = await Course.findByIdAndRemove(params.id).exec()

  if (!removeCourse) {
    throw new Error('Is not possible remove that course')
  }

  return removeCourse
}
