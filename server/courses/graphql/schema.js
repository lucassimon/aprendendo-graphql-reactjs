let graphql = require('graphql')

let courseType = require('./types')
let { CourseById, CourseAll } = require('./queries')

let schema = new graphql.GraphQLSchema({
  query: new graphql.GraphQLObjectType({
    name: 'CourseQuery',
    fields: {
      courses: CourseAll,
      course: CourseById
    }
  })
})

module.exports = schema