'use strict'

let graphql = require('graphql')
let courseType = require('../types').CourseType
let courseInputType = require('../types').CourseInputType
let resolvers = require('../resolvers')

let AddCourses = {
  type: courseType,
  description: "Add a new Course",
  args: {
    data: {
      name: 'Data',
      type: new graphql.GraphQLNonNull(courseInputType)
    }
  },
  resolve: resolvers.add
}

module.exports = AddCourses