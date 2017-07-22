'use strict'

let graphql = require('graphql')
let Course = require('../model')
let courseType = require('./types').CourseType
let resolvers = require('./resolvers')

let courses = {
  type: new graphql.GraphQLList(courseType),
  description: "List of all Course",
  resolve: resolvers.all
}

let courseById = {
  type: courseType,
  description: "Get Course by Id",
  args: {
    id:{
      name: 'Object Id',
      type: new graphql.GraphQLNonNull(graphql.GraphQLID)
    }
  },
  resolve: resolvers.find_by_id
}

module.exports = {
  'CourseById': courseById,
  'CourseAll': courses
}