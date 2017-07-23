'use strict'

let graphql = require('graphql')

let courseType = new graphql.GraphQLObjectType({
  name: 'Course',
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
      description: 'Category represents the aggregate of many courses. Eg. Engineering and Technologies'
    },
    duration: {
      type: new graphql.GraphQLNonNull(graphql.GraphQLString),
      description: 'The total period in this course'
    },
    modality: {
      type: new graphql.GraphQLNonNull(graphql.GraphQLString),
      description: 'The modality. Eg. Master degree'
    },
    description: {
      type: new graphql.GraphQLNonNull(graphql.GraphQLString),
      description: 'Information of this course'
    },
    goals: {
      type: new graphql.GraphQLNonNull(graphql.GraphQLString),
      description: 'The goals of this course'
    }
    // grid: { type: new graphql.GraphQLList(gridType) }
  }
})

let courseInputType = new graphql.GraphQLInputObjectType({
  name: 'CourseInput',
  description: 'Course mutation',
  fields: () => ({
    university: {
      type: new graphql.GraphQLNonNull(graphql.GraphQLString),
      description: 'The university that offers this course'
    },
    campus: {
      type: new graphql.GraphQLNonNull(graphql.GraphQLString),
      description: 'Campus or local of that this course is teach'
    },
    name: {
      type: new graphql.GraphQLNonNull(graphql.GraphQLString),
      description: 'The name of course'
    },
    category: {
      type: new graphql.GraphQLNonNull(graphql.GraphQLString),
      description: 'Category represents the aggregate of many courses. Eg. Engineering and Technologies'
    },
    duration: {
      type: new graphql.GraphQLNonNull(graphql.GraphQLString),
      description: 'The total period in this course'
    },
    modality: {
      type: new graphql.GraphQLNonNull(graphql.GraphQLString),
      description: 'The modality. Eg. Master degree'
    }
  })
})

module.exports = {
  CourseType: courseType,
  CourseInputType: courseInputType
}
