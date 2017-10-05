'use strict'

const jwt = require('./jwt')
const User = require('../users/model')
const jsonwebtoken = require("jsonwebtoken")


exports.signin = async (ctx, next) => {
  let email = ctx.request.body.email
  let password = ctx.request.body.password

  const user = await User.findOne({email:email}).then()

  if (!user) {

    ctx.status = 401;
    ctx.body = {error: "Não encontramos este usuário"}

  } else {

    const match = await jwt.comparePassword(password, user)

    if (match.bool) {
      ctx.body = {
        'resource': 'Auth',
        'message': 'Login to API',
        'token': jsonwebtoken.sign(
          {
            'id': user.id,
            'email': user.get('email'),
          },
          jwt.secret,
          { algorithm: 'HS256', expiresIn: '1h' }
        ),
        'is_admin': user.get('is_admin'),
        'is_active': user.get('active')
      }
    } else {
      ctx.status = 401;
      ctx.body = {error: "A senha informada não confere"}
    }
  }
}

exports.signout = async (ctx, next) => {
  ctx.body = {
    'resource': 'Auth',
    'message': 'Logout to API'
  }
}

exports.refresh = async (ctx, next) => {
  ctx.body = {
    'resource': 'Auth',
    'message': 'Refresh JWT'
  }
}
