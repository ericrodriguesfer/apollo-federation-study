# API GraphQL com Federation

Está api/back-end foi implementada para uso e aplicação da tecnologia de [federação/federation](https://www.apollographql.com/docs/federation/), que basicamente visa sanar o problema de ter uma diversidade de apis implementadas em GraphQL, e ter que acessa-lás de forma individual, ou seja, se existem cinco apis em GraphQL e para consumir os recursos de todas, tem-se que acessar cada uma de forma individual para a utilização dos recursos. A tecnologia de federação veio para suprir essa problemática, dado que usando o mesmo exemplo anterior, tendo cinco apis diferentes em GraphQL, com o uso da federação, pode-se criar uma sexta api GraphQL, que vai basicamente sincronizar nas outras cinco citadas anteriormente e com isso disponibilizar todos os recursos existentes nelas por uma única api. Assim necessitando acessar somente uma fonte de recursos para fazer a utilização de tudo e melhor, sem necessáriamente conhecer os acessos individuais das outras apis. Assim a dada api onde se aplica a federação fica como sendo um gateway GraphQL entre as demais apis distribuidas.

# Tecnologias e Boas práticas utilizadas
* NodeJs
* Javascript
* Apollo Server
* Apollo Gateway
* GraphQL

## CASO QUEIRA SABER MAIS SOBRE O PROJETO

Pode entrar em contato comigo pelo seguinte email: ericdesenvolvedor7@gmail.com