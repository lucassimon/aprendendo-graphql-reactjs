'use strict'

let graphql = require('graphql')

//  Definição dos modelo de curso
//
let courseType = new graphql.GraphQLObjectType({
  name:'Course',
  description: 'Course Model',
  fields: {
    id: { type: new graphql.GraphQLNonNull(graphql.GraphQLID) },
    name: { type: new graphql.GraphQLNonNull(graphql.GraphQLString) },
    university: { type: new graphql.GraphQLNonNull(graphql.GraphQLString) },
    campus: { type: new graphql.GraphQLNonNull(graphql.GraphQLString) },
    category: { type: new graphql.GraphQLNonNull(graphql.GraphQLString) },
    duration: { type: new graphql.GraphQLNonNull(graphql.GraphQLString) },
    modality: { type: new graphql.GraphQLNonNull(graphql.GraphQLString) }
  }
})


module.exports = courseType