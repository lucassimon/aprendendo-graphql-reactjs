let logger = require('koa-logger')
let Router = require('koa-router')
let Koa = require('koa')
let bodyParser = require('koa-bodyparser')
let app = module.exports = new Koa()
let db = require('./configs/db')
let courses = require('./courses/urls')
let users = require('./users/urls.js')

// GraphQL
let graphQL = require('graphql-server-koa').graphqlKoa
let graphiQL = require('graphql-server-koa').graphiqlKoa
let courseSchema = require('./courses/schema')


app.use(logger())
app.use(bodyParser())

let home = Router()

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

// Utiliza as rotas
app.use(
  home.routes()
).use(
  home.allowedMethods()
).use(
  courses.routes()
).use(
  courses.allowedMethods()
).use(
  users.routes()
).use(
  users.allowedMethods()
)

// escuta a porta do servidor node.js

app.listen(
  process.env.PORT || 3000,
  () => {
    console.log('Iniciado')
    console.log(process.env.DATABASE_URL)

    db.once('open', function() {
      console.log('Mongoose iniciado')
    })

    db.on('error', console.error);
  }
)