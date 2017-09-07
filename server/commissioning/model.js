let Mongoose = require('mongoose')
let MongoosePaginate = require('mongoose-paginate')

const status = [
  'pendente', 'processado', 'aprovado', 'pago', 'cancelado'
]

const History = new Mongoose.Schema({
  status: {type: String, enum: status},
  description: {type: String, required: true},
  created: {type: Date, default: Date.now}
})

const Comission = new Mongoose.Schema({
  origin: {
    app: {
      url: {type: String, required: true, trim: true},
      name: {type: String, required: true, trim: true}
    },
    company: {
      name: {type: String, required: true, trim: true},
      id: {type: String, trim: true},
      cnpj: {type: String, trim: true}
    }
  },
  commissioned: {
    name: {type: String, required: true, trim: true},
    email: {type: String, required: true, lowercase: true},
    cpf_cnpj: {type: String, required: true, trim: true},
    phone: {type: String, required: true, trim: true},
    level: {type: Number, required: true},
  },
  product: {
    name: {type: String, required: true, trim: true},
    category: {type: String, required: true, trim: true},
    matricula: {type: Number, required: true},
    mensalidade: {type: Number, required: true},
  },
  rule: { any: Object },
  commission: {
    amount: {type: Number},
    status: {type: String, enum: status},
    historico: [History]
    // payment_voucher: {type: String}
  },
},
{
  timestamps: true
});

// seta o plugin de paginação
Comission.plugin(MongoosePaginate)
module.exports = Mongoose.model('Comission', Comission)