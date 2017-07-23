'use strict'

exports.signin = async (ctx, next) => {
  ctx.body = {
    'resource': 'Auth',
    'message': 'Login to API'
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
