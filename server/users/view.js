'use strict'

let User = require('./model')

exports.find = async (ctx, next) => {
  ctx.body = {
    'resource': 'Usuários',
    'message': 'Lista todos os usuários',
  }
}

exports.find_id = async (ctx, next) => {
  ctx.body = {
    'resource': 'Usuários',
    'message': 'Detalhes do usuário'
  }
}

exports.find_per_page = async (ctx, next) => {

  ctx.body = {
    'resource': 'Usuários',
    'message': 'Lista os usuários paginados'
  }

}

exports.add = async (ctx, next) => {

  let user = new User(ctx.request.body)

  await user.save()

  ctx.body = {
    'resource': 'Usuários',
    'message': 'Adicionar usuário',
    'data': user
  }
}

exports.update_by_id = async (ctx, next) => {
  ctx.body = {
    'resource': 'Usuários',
    'message': 'Atualizar o usuário'
  }
}

exports.delete_by_id = async (ctx, next) => {
  ctx.body = {
    'resource': 'Usuários',
    'message': 'Deletar usuário'
  }
}