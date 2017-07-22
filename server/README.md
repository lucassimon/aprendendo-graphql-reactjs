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