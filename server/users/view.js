
let User = require('./model')

exports.find = async (ctx, next) => {

  // Não entendi uma coisa no meu db.js quando coloco promiseLibrary para
  // bluebird não consigo realizar a pesquisa no mongo gerando timeout.
  // por conta disso estou utilizando o padrão do mongoose

  // todo: gerar ctx de resultados dentro retorno com sucesso da pesquisa

  // todo: gerar retorno do contexto dentro do bloco catch retornando a api
  // com erro

  await User.find({}).select({password:0}).exec().then(
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

  console.log(ctx.request.params)

  let id = ctx.request.params

  if (!id) {
    return ctx.body = {
      'resource': 'Usuários',
      'message': 'Não foi encontrado um ID válido',
      'success': false,
      'data': []
    }
  }

  await User.findOne({_id: id}).select({password:0}).exec().then(
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