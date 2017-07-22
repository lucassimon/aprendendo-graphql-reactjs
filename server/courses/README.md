# Courses in APOLLO SERVER GRAPHQL

App de cursos para ser utilizado como exercicio de aprendizado do GRAPHQL. Primeiro estou fazendo com o apollo e is types, queries e definições estou usando o pacote do `graphql-js`

Hoje 22/07/2017 consegui fazer a busca na base de dados do mongoose as queries, tipos, resolvers e mutations. [Melhor Tutorial Prático](https://www.youtube.com/playlist?list=PL5M9r-aWV-kolt6qNlICdpF-Ofv8cazDl)

Entendi que os resolvers são como nossos controllers ou metodos para busca de dados e que também pode ser usado para criar algum tipo de lógica ou tratamento desses dados.

Tive de criar um endpoint de cadastro através de REST pois estou aprendento como realiza as mutações.


## Dúvidas

* Como que faço paginação de resultados?

* Como faço para proteger a rota do graphql com autenticação JWT?

* Como faço para ter um root Query contendo o schema da app de cursos e depois de usuários?

* Posso ter vários root Query um para cada recurso do meu sistema? Como apelidar essa root query? cquery: CourseQuery, uquery: UserQuery

* Subscriptions? Não entendi o conceito nem como implementa-lo.

## Dados para teste

Criando um curso via endpoint.

`http -v -f POST http://localhost:4000/courses/ university="UniBH" campus="Cristiano Machado" category="Engenharia e Tecnologia" name="Sistemas de Informação" duration="08 semestres" modality="Graduação"`

Buscando todos os cursos

```
query {
  courses {
    id,
    name,
    university,
    campus,
    duration
  }
}
```


Buscando um curso

```
query {
  course(id:"597383642422e50fa28b83b6"){
    id,
    name,
    university,
    campus,
    duration
  }
}
```

## Tutorials

Tutoriais usados para aprendizado ao graphql.

* [Melhor Tutorial Prático](https://www.youtube.com/playlist?list=PL5M9r-aWV-kolt6qNlICdpF-Ofv8cazDl)

* [DOC](http://dev.apollodata.com/tools/graphql-server/setup.html)

* [HowToGraphQl](howtographql.com)

* [Introdução ao Graphql](https://medium.com/tableless/introdu%C3%A7%C3%A3o-ao-graphql-com-node-js-1106c17b9b97)

### Apollo Introduction

* [Spin AtomicObject Part 1](https://spin.atomicobject.com/2017/03/29/graphql-apollo-introduction/)

* [Spin AtomicObject Part 2](https://spin.atomicobject.com/2017/03/30/graphql-apollo-building-server/)

* [Spin AtomicObject Part 3](https://spin.atomicobject.com/2017/03/31/graphql-apollo-building-client/)

