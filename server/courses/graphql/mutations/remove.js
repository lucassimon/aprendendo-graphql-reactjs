'use strict'

let graphql = require('graphql')
let courseType = require('../types').CourseType
let resolvers = require('../resolvers')

let RemoveCourse = {
  type: courseType,
  description: "Delete Course by Id",
  args: {
    id: {
      name: 'Object Id',
      type: new graphql.GraphQLNonNull(graphql.GraphQLID)
    }
  },
  resolve: resolvers.remove
}

module.exports = RemoveCourse