'use strict'

let request = require('supertest-as-promised')
let server = require('../../server')
let faker = require('faker')

describe('GET users', () => {
  it('Endpoint (/users) para listagem de usuários deve responder 200', async () => {
    let res = await request(
      server.listen(
        process.env.PORT
      )
    ).get(
      '/users'
    )

    expect(res.statusCode).toBe(200)
  })
})

describe('POST users', () => {
  it('Endpoint (/users) deve criar um registro no banco de dados', async () => {

    let payload = {
      name: `${faker.name.findName()}`,
      email: `${faker.internet.email()}`,
      password: 'superteste'
    }

    let res = await request(
      server.listen(
        process.env.PORT
      )
    ).post(
      '/users'
    ).send(
      payload
    )

    console.log(res.body)

    expect(res.statusCode).toBe(200)
  })
})