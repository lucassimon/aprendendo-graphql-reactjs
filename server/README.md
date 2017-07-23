# Estudos GRAPHQL

Aplicação para aprender o uso do framework KOA2, GraphQL e JEST como ferramenta de teste.


## Requisitos

Ter o mongoDB instalado e configurar a sua URI para acesso dentro da variavel `DATABASE_URL`.

Por conveniencia, pode-se faze-lo alterando o arquivo `.env.example` para `.env`, edita-lo e configurar a variável `DATABASE_URL` para a uri correta.

Em seguida execute o comando `source .env` em seu terminal

## Como utilizar

Instalar os pacotes via `npm` ou `yarn`.

Executar o comando `npm run dev` para iniciar a aplicação em modo de desenvolvimento.

Esse modo contém a rota `/graphiql` para fazer as buscar com o apollo usando um interface no browser.

## Endpoints.

Lista de endpoints utilizados na aplicação

## Usuários.

Endpoint representando um `CRUD` básico de um modelo de usuário.

## Cursos

Endpoint representando somente um `Create` de um curso. As buscas está e mutations estão sendo implementadas seguindo a arquitetura `GRAPHQL`. Para isso e acesse a documentação gerada automáticamente, s2, na rota `/graphiql`

Para maiores detalhes desta `app` entre no [README](./courses/README.md)

## Testes com JEST

Utilizando o JEST como framework de testes

### Duvidas

* Como faço para que meu test watch funcione sem dar erro ao fazer reload?

Acho que fiz o export do app e inject no test errado.

* Como faço para configurar um banco de testes?

* Qual a melhor maneira de limpar a base do mongoDB para cada teste

* Como testar as minhas views da app users. por exemplo:

`view.js |       25 |        0 |    16.67 |       25 |... 149,150,153`

* Meu `npm run test:watch` esta com erro e não estou conseguindo entender onde corrijo.

```
RUNS  __tests__/user/api.test.js
events.js:163
      throw er; // Unhandled 'error' event
      ^

Error: listen EADDRINUSE :::3000
```

* Eu tenho um teste `__test__/user/api.test.js`. Como que faço para os dados gravados sejam salvos em um banco de teste? Hoje ele pega do banco que configurei no meu server.js


### Tutoriais

* [Escrever testes nunca foi tao divertido](https://medium.com/@oieduardorabelo/jest-escrever-testes-nunca-foi-t%C3%A3o-divertido-5f0e1950ba10)

* [Teste de aceitacao com react](https://braziljs.org/blog/teste-de-aceitacao-com-react-jest-e-nightmare/)