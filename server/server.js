const logger = require('koa-logger')
const Router = require('koa-router')
const Koa = require('koa')
const bodyParser = require('koa-bodyparser')
const app = module.exports = new Koa()
const db = require('./configs/db')
const jwt = require("./auth/jwt")


// routes
const courses = require('./courses/urls')
const users = require('./users/urls.js')
const auth = require('./auth/urls.js')

// Cors
const cors = require('kcors')
let cors_whitelist = 'http://localhost:3000'

// GraphQL
const graphQL = require('graphql-server-koa').graphqlKoa
const graphiQL = require('graphql-server-koa').graphiqlKoa
const courseSchema = require('./graphql/schema')

app.use(logger())
app.use(bodyParser())

if (process.env === 'production') {
  cors_whitelist = 'https://graphqlcourse.herokuapp.com/'
}

app.use(cors({ origin: cors_whitelist }))


const home = Router()

home.use(async (ctx, next) => {
  console.log('This is a middleware start')
  await next()
  console.log('This is a middleware end')
})

// Cria a rota para a raiz da API
home.get('/', async (ctx, next) => {
  ctx.body = {
    'resource': 'Home'
  }
}).post(
  '/graphql',
  graphQL(
    { schema: courseSchema }
  )
)

if (process.env !== 'production') {
  home.get(
    '/graphiql',
    graphiQL(
      { endpointURL: '/graphql' }
    )
  )
}

// Utiliza as rotas liberadas
app.use(
  home.routes()
).use(
  home.allowedMethods()
).use(
  auth.routes()
).use(
  auth.allowedMethods()
)
// Utiliza as rotas seguras por jwt
app.use(jwt.errorHandler()).use(jwt.jwt())
app.use(
  courses.routes()
).use(
  courses.allowedMethods()
).use(
  users.routes()
).use(
  users.allowedMethods()
)

if (process.env === 'test') {
  module.exports = app
} else {

  // escuta a porta do servidor node.js
  console.log(process.env.PORT)

  app.listen(
    process.env.PORT,
    () => {

      db.once('open', function () {
        console.log('Mongoose iniciado')
      })

      db.on('error', console.error)
    }
  )
}
