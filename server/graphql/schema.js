'use strict'

let graphql = require('graphql')

let { CourseById, CourseAll } = require('../courses/graphql/queries')
let addCourse = require('../courses/graphql/mutations/add')
let removeCourse = require('../courses/graphql/mutations/remove')

let schema = new graphql.GraphQLSchema({
  query: new graphql.GraphQLObjectType({
    name: 'RootQuery',
    fields: {
      courses: CourseAll,
      course: CourseById
    }
  }),
  mutation: new graphql.GraphQLObjectType({
    name: 'RootMutation',
    fields: {
      AddCourse: addCourse,
      RemoveCourse: removeCourse
    }
  })
})

module.exports = schema
