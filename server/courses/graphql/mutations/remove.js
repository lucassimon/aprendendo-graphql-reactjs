'use strict'

let graphql = require('graphql')
let courseType = require('../types')
let resolvers = require('../resolvers')

let courses = {
  type: courseType,
  description: "Get Course by Id",
  args: {
    data: {
      name: 'Data',
      type: new graphql.GraphQLNonNull(graphql.GraphQLID)
    }
  },
  resolve: resolvers.remove
}