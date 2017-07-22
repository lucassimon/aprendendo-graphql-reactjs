'use strict'

let graphql = require('graphql')

//  Definição dos modelo de curso
//
let courseType = new graphql.GraphQLObjectType({
  name:'Course',
  description: 'Course Model',
  fields: {
    id: {
      type: new graphql.GraphQLNonNull(graphql.GraphQLID),
      description: 'Refer a objectId MongoDB'
    },
    name: {
      type: new graphql.GraphQLNonNull(graphql.GraphQLString),
      description: 'The name of course'
    },
    university: {
      type: new graphql.GraphQLNonNull(graphql.GraphQLString),
      description: 'The university that offers this course'
    },
    campus: {
      type: new graphql.GraphQLNonNull(graphql.GraphQLString),
      description: 'Campus or local of that this course is teach'
    },
    category: {
      type: new graphql.GraphQLNonNull(graphql.GraphQLString),
      description: 'Category represents the aggregate of many courses. Eg. Engineering'
    },
    duration: {
      type: new graphql.GraphQLNonNull(graphql.GraphQLString)
      description: 'The total period in this course'
    },
    modality: {
      type: new graphql.GraphQLNonNull(graphql.GraphQLString)
      description: 'The modality. Eg. Master degree'
    }
    // grid: { type: new graphql.GraphQLList(gridType) }
  }
})


module.exports = courseType