'use strict'

let graphql = require('graphql')
let courseType = require('../types')
let resolvers = require('../resolvers')

let courses = {
  type: courseType,
  description: "Add a new Course",
  args: {
    id: {
      name: 'id',
      type: new graphql.GraphQLNonNull(courseType)
    }
  },
  resolve: resolvers.add
}