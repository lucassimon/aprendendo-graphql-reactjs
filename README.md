# sibelius


## Servidor Backend KOA.JS

Entrar no diretório do servidor

`cd server; npm install`

### Configurações

Configurar os dados para banco de dados e variaveis de ambiente.

Copiar o arquivo `.env.example` para `.env`

Edite o arquivo e adicione as valores correspondentes. Exemplo o `DATABASE_URL=mongodb://localhost:27017/courses`

Em seguida execute: `source .env`

### Executar servidor de desenvolvimento

Executar o comando `npm run dev`

### Recursos

* Auth

Login na API utilizando JWT

* Users

CRUD de usuários via API

`$ http -v -f POST http://localhost:3000/users/ name="Lucas" email="lucassrod@gmail.com" password="lucas"`

* Courses

CRUD de cursos via GRAPHQL

### Testes

Executanto os testes

`npm run test`