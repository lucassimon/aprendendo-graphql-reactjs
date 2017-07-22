'use strict'

let graphql = require('graphql')
let courseInputType = require('./types').CourseInputType
let resolvers = require('../resolvers')

let UpdateCourse = {
  type: courseType,
  description: "Add a new Course",
  args: {
    id: {
      name: 'Object Id',
      type: new graphql.GraphQLNonNull(graphql.GraphQLID)
    },
    data: {
      name: 'Data',
      type: new graphql.GraphQLNonNull(courseInputType)
    }
  },
  resolve: resolvers.add
}

module.exports = UpdateCourse