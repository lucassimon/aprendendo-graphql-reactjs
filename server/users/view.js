let mongoose = require('mongoose')
let User = require('./model')

exports.find = async (ctx, next) => {
  // Não entendi uma coisa no meu db.js quando coloco promiseLibrary para
  // bluebird não consigo realizar a pesquisa no mongo gerando timeout.
  // por conta disso estou utilizando o padrão do mongoose

  // todo: gerar ctx de resultados dentro retorno com sucesso da pesquisa

  // todo: gerar retorno do contexto dentro do bloco catch retornando a api
  // com erro

  await User.find({}).select({password: 0}).exec().then(
    (results) => {
      ctx.body = {
        'resource': 'Usuários',
        'success': true,
        'message': 'Lista todos os usuários',
        'data': results
      }
    }
  ).catch(
    (error) => {
      ctx.body = {
        'resource': 'Usuários',
        'success': false,
        'message': error,
        'data': []
      }
    }
  )
}

exports.find_id = async (ctx, next) => {
  let id = ctx.params.id || null

  if (!id) {
    ctx.status = 404
    ctx.body = {
      'resource': 'Usuários',
      'message': 'Não foi encontrado um ID válido',
      'success': false,
      'data': []
    }
  }

  if (!mongoose.Types.ObjectId.isValid(ctx.params.id)) {
    ctx.status = 404
    ctx.body = {
      'resource': 'Usuários',
      'success': false,
      'message': 'Id do usuário inválido',
      'data': []
    }
  }

  await User.findOne({_id: id}).select({password: 0}).then(
    (results) => {
      ctx.body = {
        'resource': 'Usuários',
        'success': true,
        'message': 'Lista todos os usuários',
        'data': results
      }
    }
  ).catch(
    (error) => {
      ctx.body = {
        'resource': 'Usuários',
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
    select: {password: 0},
    lean: true,
    page: page,
    limit: perPage
  }

  await User.paginate({}, options).then(

    (users) => {
      ctx.body = {
        'resource': 'Usuários',
        'message': 'Lista os usuários paginados',
        'success': true,
        'total': users.total,
        'page': parseInt(users.page),
        'pages': users.pages,
        'data': users.docs
      }
    }
  ).catch(
    (error) => {
      ctx.body = {
        'resource': 'Usuários',
        'success': false,
        'message': error,
        'data': []
      }
    }
  )
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
  let user = await User
    .findByIdAndUpdate(ctx.params.id, ctx.request.body)

  ctx.status = 204

  if (!user) {
    ctx.status = 404
  }

  ctx.body = {
    'resource': 'Usuários',
    'message': 'Atualizar o usuário',
    'data': user
  }
}

exports.delete_by_id = async (ctx, next) => {
  let user = await User
    .findByIdAndRemove(ctx.params.id)

  ctx.status = 204

  if (!user) {
    ctx.status = 404
  }

  ctx.body = {
    'resource': 'Usuários',
    'message': 'Deletar usuário'
  }
}
