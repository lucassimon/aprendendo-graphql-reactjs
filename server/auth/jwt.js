'use strict'

const jwt = require('koa-jwt')
const SECRET = 'asdjnm3 n4293u58v cu8u9v0bugur902490523094234n vcxv'
const jwtInstance = jwt({secret: SECRET})
const Bcrypt = require('bcrypt')

function JWTErrorHandler(ctx, next) {
  return next().catch((err) => {
    if (401 == err.status) {
      ctx.status = 401
      ctx.body = {
        "error": "Not authorized"
      }
    } else {
      throw err
    }
  })
}

const comparePwd = (candidatePassword, user) => {

  return new Promise(function(resolve, reject) {
    Bcrypt.compare(candidatePassword, user.password, function(err, bool) {
      if (err) {
        const reason = new Error(err);
        reject(reason)
      }

      resolve({
        bool:bool,
        user:user._id
      })
    })
  })
}

module.exports.jwt = () => jwtInstance;
module.exports.errorHandler = () => JWTErrorHandler
module.exports.secret = SECRET
module.exports.comparePassword = comparePwd
