let Mongoose = require('mongoose')
let Schema = Mongoose.Schema
let MongoosePaginate = require('mongoose-paginate')
let Bcrypt = require('bcrypt')
let Joi = require('joi')

const SALT_WORK_FACTOR = 10

// Campos do schema do usuario

const User = new Mongoose.Schema({
  name: { type: String, required: true},
  email: { type: String, required: true, unique : true},
  password: {type: String, required: true},
  created: { type: Date },
  updated: { type: Date, default: Date.now }
})

User.pre(
  'save',
  function (next) {
    // busca a data atual
    let currentDate = new Date()

    // seta o usuario para o escopo atual
    let user = this;

    // seta o campo updated para a data atual
    user.updated = currentDate

    // se não existir uma data de criado entao seta a data atual
    if (!user.created) {
        user.created = currentDate;
    }

    // verifica se o campo password nao foi modificado
    if (!user.isModified('password')) {
        return next();
    }

    // gera o brypt de acordo com o salt

    Bcrypt.genSalt(SALT_WORK_FACTOR, function (err, salt) {
      if (err) {
        return next(err)
      }

      // gera o hash de acordo com a senha e o salt gerado
      Bcrypt.hash(user.password, salt, function (err, hash) {
        if (err) {
          return next(err)
        }

        user.password = hash
        next()
      })
    })
  }
)

// Cria um metodo para comparar senhas
User.methods.comparePassword = function (candidatePassword, cb) {
  let user = this
  Bcrypt.compare(
    candidatePassword,
    user.password,
    function (err, match) {
      if (err) {
        return cb(err)
      }

      cb(null, match)
    }
  )
}

// seta o plugin de paginação
User.plugin(MongoosePaginate)

module.exports = Mongoose.model('User', User);