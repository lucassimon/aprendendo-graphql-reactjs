'use strict'

let graphql = require('graphql')
let userType = require('../types').UserType
let userInputType = require('../types').UserInputType
let resolvers = require('../resolvers')

let AddUsers = {
  type: userType,
  description: 'Add a new User',
  args: {
    data: {
      name: 'Data',
      type: new graphql.GraphQLNonNull(userInputType)
    }
  },
  resolve: resolvers.add
}

module.exports = AddUsers
