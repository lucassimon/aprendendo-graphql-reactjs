'use strict'

let Course = require('./model')

exports.find = async (ctx, next) => {
  ctx.body = {
    resource: 'Cursos'
  }
}

// View para adicionar um curso
exports.add = async (ctx, next) => {
  let course = new Course(ctx.request.body)

  await course.save()

  ctx.body = {
    'resource': 'Cursos',
    'message': 'Adicionar curso',
    'data': course
  }
}
