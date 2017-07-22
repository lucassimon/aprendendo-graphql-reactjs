let graphql = require('graphql')


let { CourseById, CourseAll } = require('./queries')
let addCourse = require('./mutations/add')
let removeCourse = require('./mutations/remove')

let schema = new graphql.GraphQLSchema({
  query: new graphql.GraphQLObjectType({
    name: 'CourseQuery',
    fields: {
      courses: CourseAll,
      course: CourseById
    }
  }),
  mutation: new graphql.GraphQLObjectType({
    name: 'CourseMutation',
    fields: {
      AddCourse: addCourse,
      RemoveCourse: removeCourse
    }
  })
})

module.exports = schema