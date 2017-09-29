'use strict'

let graphql = require('graphql')

let userType = new graphql.GraphQLObjectType({
  name: 'User',
  description: 'User Model',
  fields: {
    id: {
      type: new graphql.GraphQLNonNull(graphql.GraphQLID),
      description: 'Refer a objectId MongoDB'
    },
    name: {
      type: new graphql.GraphQLNonNull(graphql.GraphQLString),
      description: 'The name of user'
    },
    email: {
      type: new graphql.GraphQLNonNull(graphql.GraphQLString),
      description: 'The email of user'
    },
    is_active: {
      type: new graphql.GraphQLNonNull(graphql.GraphQLString),
      description: 'If an user is active'
    },
    is_admin: {
      type: new graphql.GraphQLNonNull(graphql.GraphQLString),
      description: 'If an user is admin'
    },
    is_superuser: {
      type: new graphql.GraphQLNonNull(graphql.GraphQLString),
      description: 'If an user is a super user'
    },
    password: {
      type: new graphql.GraphQLNonNull(graphql.GraphQLString),
      description: 'User password'
    }
  }
})

let userInputType = new graphql.GraphQLInputObjectType({
  name: 'UserInput',
  description: 'User mutation',
  fields: () => ({
    name: {
      type: new graphql.GraphQLNonNull(graphql.GraphQLString),
      description: 'The name of user'
    },
    email: {
      type: new graphql.GraphQLNonNull(graphql.GraphQLString),
      description: 'The email of user'
    },
    password: {
      type: new graphql.GraphQLNonNull(graphql.GraphQLString),
      description: 'User password'
    }
  })
})

module.exports = {
  UserType: userType,
  UserInputType: userInputType
}
