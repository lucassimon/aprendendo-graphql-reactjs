'use strict'

let mongoose = require('mongoose')
let Model = require('./model')
let moment = require('moment')


exports.find_id = async (ctx, next) => {
  let id = ctx.params.id || null

  if (!id) {
    ctx.status = 404
    ctx.body = {
      'resource': 'Comissão',
      'message': 'Não foi encontrado um ID válido',
      'success': false,
      'data': []
    }
  }

  if (!mongoose.Types.ObjectId.isValid(ctx.params.id)) {
    ctx.status = 404
    ctx.body = {
      'resource': 'Comissões',
      'success': false,
      'message': 'Id do comissão inválido',
      'data': []
    }
  }

  await Model.findOne({_id: id}).select({password: 0}).then(
    (results) => {
      ctx.body = {
        'resource': 'Comissões',
        'success': true,
        'message': 'Lista todos as comissões',
        'data': results
      }
    }
  ).catch(
    (error) => {
      ctx.body = {
        'resource': 'Comissões',
        'success': false,
        'message': error,
        'data': []
      }
    }
  )
}

exports.find_per_page = async (ctx, next) => {
  let perPage = ctx.query.per_page || 10
  let page = ctx.params.page || 1
  let options = {
    lean: true,
    page: page,
    limit: perPage
  }

  await Model.paginate({}, options).then(

    (comissioning) => {
      ctx.body = {
        'resource': 'Comissões',
        'message': 'Lista as comissões paginados',
        'success': true,
        'total': comissioning.total,
        'page': parseInt(comissioning.page),
        'pages': comissioning.pages,
        'data': comissioning.docs
      }
    }
  ).catch(
    (error) => {
      ctx.body = {
        'resource': 'Comissões',
        'success': false,
        'message': error,
        'data': []
      }
    }
  )
}

exports.find_per_period = async (ctx, next) => {

  let start = moment(ctx.params.start, "YYYYMMDD").toDate() || moment().toDate()
  let end = moment(ctx.params.end, "YYYYMMDD").toDate() || moment(start).add(1, 'months').toDate()

  await Model.find(
    {
      "createdAt": {
        "$gte": start,
        "$lt": end
      }
    }
  ).exec().then(
    (results) => {
      ctx.body = {
        'resource': 'Comissões',
        'success': true,
        'message': 'Lista comissões por periodo',
        'data': results
      }
    }
  ).catch(
    (error) => {
      ctx.body = {
        'resource': 'Comissões',
        'success': false,
        'message': error,
        'data': []
      }
    }
  )
}

exports.add = async (ctx, next) => {
  let comissioning = new Model(ctx.request.body)

  await comissioning.save()

  ctx.body = {
    'resource': 'Comissões',
    'message': 'Adicionar comissão',
    'data': comissioning
  }
}

exports.update_by_id = async (ctx, next) => {
  let comissioning = await Model
    .findByIdAndUpdate(ctx.params.id, ctx.request.body)

  ctx.status = 204

  if (!comissioning) {
    ctx.status = 404
  }

  ctx.body = {
    'resource': 'Comissões',
    'message': 'Atualizar o comissão',
    'data': comissioning
  }
}

exports.delete_by_id = async (ctx, next) => {
  let comissioning = await Model
    .findByIdAndRemove(ctx.params.id)

  ctx.status = 204

  if (!comissioning) {
    ctx.status = 404
  }

  ctx.body = {
    'resource': 'Comissões',
    'message': 'Deletar comissão'
  }
}
