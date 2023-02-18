# Estudo da aplicação de federação do Apollo | Apollo Federation

Este projeto refere-se a aplicação dos meus conhecimentos a respeito do meu estudo sobre o [Apollo Federation](https://www.apollographql.com/docs/federation/), que basicamente é mais uma ferramenta do ecossistema apollo para construção de apis e backends em [GraphQL](https://graphql.org/), uma alternativa ao REST ou RESTful e até mesmo o GRPc entre outros. Onde existia-se ou ainda existe uma problemática a respeito de consumo de recursos em diversas api GraphQL, exemplo: existem duas apis onde cada uma executa uma domínio e suas rotinas, e uma aplicação cliente necessita de recursos de ambas as apis, nesse primeiro cenário essa aplicação cliente teria que conhecer as duas apis e consumir os recursos delas de forma separada e independente. O(A) Federation veio para suprir/sanar essa problemática, onde utilizando o mesmo exemplo com as duas apis, podemos criar uma terceira, que irá sincronizar nas outras duas citadas anteriormente, provendo todos os recursos contidos nelas, assim, nesse cenário a aplicação cliente só necessitária conhecer a ultima api citada, e por meio dela iria conseguir acessar o recurso das outras duas de forma paralela, conjunta, congruente ou seja como desejasse, onde o mais incrível é que a aplicação cliente não necessita saber da real existência das outras apis, assim essa ultima e terceira api do exemplo, implementada com a federação se torna uma espécie de api gateway entre inúmeras outras apis GraphQL.

# Entenda este projeto

Aqui segue uma breve descrição do conteúdo de estudo disponibilizado nesse repositório:

* API em GraphQL 01: [student-list](https://github.com/ericrodriguesfer/apollo-federation-study/tree/master/student-list)
    
    API que basicamente realiza partes de um CRUD de estudantes e seus hobbies, onde um estudante pode ter mais de hobbie associado a ele, e um hobbie só pode ter um aluno associado a si. Utilizando uma base de dados PostgreSQL e o ORM Sequelize para gerir a persistência.
* API em GraphQL 02: [school-list](https://github.com/ericrodriguesfer/apollo-federation-study/tree/master/school-list)

    API que basicamente realiza partes de um CRUD de escolas. Utilizando uma base de dados PostgreSQL e o ORM Sequelize para gerir a persistência. **Com a observação que essa API faz uso da mesma base de dados da API anteriormente citada, mas entre as mesmas não existe uma relação definida, a decição foi mais a nível de simplificar a complexidade do estudo.**
* Conjunto base de instruções PostgreSQL para o Docker: [setup inicial do PostgreSQL](https://github.com/ericrodriguesfer/apollo-federation-study/tree/master/postgres)

    Esse diretório contém um arquivo .sql com as instruções base para a criação da estrutura do banco de dados, como criação das tabelas e relacionamentos entre elas, quando assim houver, bem como a permissão ao PostgreSQL para manusear as tabelas. Como também contém um arquivo *Dockerfile* que faz o entrypoint inicial dessas instruções sql no container do banco de dados. **Essa parte da base de dados foi feita dessa forma para não dedicar tempo a migrations já que não é esse o foco desse estudo.**
* API em GraphQL 03: [federation-graphql](https://github.com/ericrodriguesfer/apollo-federation-study/tree/master/federation-graphql)

    API que basicamente é o core deste estudo, podemos assim dizer, pois é aqui que é aplicado o conceito de Federation do estudo, onde essa api sincroniza nas duas mostradas anteriormente, assumindo assim a posição de uma espécie de gateway entre elas e o possível cliente, assim dispondo todos os recursos das mesmas de forma única e sem complicação.

# Observações sobre o projeto

A API 03 citada acima, funciona/executa, sincronizada com as outras duas (API 01 e 02), assim necessita de atenção as definições como de url em que as mesmas estão sendo expostas e a porta também, pois caso a 03 entre em execução e não consiga sincronizar em alguma das outras duas, ela irá apresentar um erro e não irá 'subir' por completo.


Tanto a API 01 quanto a 02 rodam sobre o mesmo banco de dados, assim existe uma definição docker-compose na raiz do projeto para subir um serviço de banco de dados PostgreSQL que será usado pelas duas apis, assim as mesmas credencias passadas ao banco na criação/subida do Docker, tem que ser o mesmo repassado a cada uma das duas apis para que o Sequelize possa se conectar a base de dados sem mais problemas.

# Como executar o projeto

Por primeiro, deve clonar o projeto, depois de clonado acesso o projeto no devido local em que foi clonado em sua máquina.

Após os passos inicias de clone do projeto, ao acessar o projeto, logo na raiz do mesmo, vai haver um arquivo chamado .env.example [(clique aqui para acessar o mesmo)](https://github.com/ericrodriguesfer/apollo-federation-study/blob/master/.env.example), onde o mesmo contém o cabeçalho das variáveis de ambiente que o Docker espera para subir o container, assim copie esse arquivo o renomeando para .env e preencha os valores como preferir, lembrando que esses valores vão ser utilizados pelas APIs 01 e 02. Feito isso, basta executar o comando:

```bash
docker-compose up -d
```

Em seu terminal para o Docker subir o serviço do banco de dados. **Importante observar que nesse caso, o banco sempre estará rodando na porta 5432, caso não seja alterado nada no arquivo *docker-compose*.**

Feito isso, acesse a API 01 ou melhor dizendo [student-list](https://github.com/ericrodriguesfer/apollo-federation-study/tree/master/student-list), instale as dependências do projeto como preferir, tanto via npm quanto yarn, da seguinte forma:

```bash
// usando o npm pode-se usar essas formas
npm i
npm install

// usando o yarn pode-se usar essas formas
yarn
yarn install
```

Após isso, faça a mesma configuração do .env, semelhante ao feito no passo anterior, seguindo o arquivo .env.example contido no diretório da API 01 [(esse aqui)](https://github.com/ericrodriguesfer/apollo-federation-study/blob/master/student-list/.env.example), nesse caso, se atente que as informações do Sequelize contidas no env são as informações referente ao banco de dados, assim as mesmas tem que ter os mesmos valores do arquivo de env que você configurou anteriormente. Se atente também ao valor da variável PORT, pois ela define a porta em que vai ser executada sua api, e se a porta colocada por exemplo for 2222, sua api irá ficar disponível da url: http://localhost:2222/graphql. Com tudo isso configurado, basta executar o seguinte comando em seu terminal para rodar a api em modo de desenvolvimento:

```bash
// usando o npm
npm run dev

// usando o yarn
yarn dev
```

Feito isso, acesse a API 02 ou melhor dizendo [school-list](https://github.com/ericrodriguesfer/apollo-federation-study/tree/master/school-list), instale as dependências do projeto como preferir, tanto via npm quanto yarn, da seguinte forma:

```bash
// usando o npm pode-se usar essas formas
npm i
npm install

// usando o yarn pode-se usar essas formas
yarn
yarn install
```

Após isso, faça a mesma configuração do .env, semelhante ao feito no passo anterior (mesma forma como fez para a API 01), seguindo o arquivo .env.example contido no diretório da API 02 [(esse aqui)](https://github.com/ericrodriguesfer/apollo-federation-study/blob/master/school-list/.env.example), nesse caso, se atente que as informações do Sequelize contidas no env são as informações referente ao banco de dados, assim as mesmas tem que ter os mesmos valores do arquivo de env que você configurou anteriormente. Se atente também ao valor da variável PORT, pois ela define a porta em que vai ser executada sua api, e se a porta colocada por exemplo for 6666, sua api irá ficar disponível da url: http://localhost:6666/graphql. Observando bem que esta api não pode rodar na mesma porta da anterior, pois sendo as mesmas iguais, não haverá como rodar as mesmas em paralelo, atente-se para por portas diferentes nas APIs, e que nenhum seja 4000, logo mais explico o porque disso. Com tudo isso configurado, basta executar o seguinte comando em seu terminal para rodar a api em modo de desenvolvimento:

```bash
// usando o npm
npm run dev

// usando o yarn
yarn dev
```

Com tudo isso pronto, agora basta acessar a API 03 ou melhor dizendo [federation-graphql](https://github.com/ericrodriguesfer/apollo-federation-study/tree/master/federation-graphql), na mesma não necessita configurar env algum, apenas instalar as dependências, dessa forma:

```bash
// usando o npm pode-se usar essas formas
npm i
npm install

// usando o yarn pode-se usar essas formas
yarn
yarn install
```

Pós isso, confira no arquivo *app.js* contido no caminho *./src/app/app.js* do projeto [(esse aqui)](https://github.com/ericrodriguesfer/apollo-federation-study/blob/master/federation-graphql/src/app/app.js), observe as linhas 6 e 7 dele [(essas linhas aqui)](https://github.com/ericrodriguesfer/apollo-federation-study/blob/master/federation-graphql/src/app/app.js#L6-L7), e as preencha repassando a exata url onde estão sendo expostas as APIs 01 e 02 configuradas e colocadas para rodar anteriormente, para que essa possa sincronizar nelas e acessar e disponibilizar seus recursos. Feito isso, pode executar a api dessa forma:

```bash
// usando o npm
npm run dev

// usando o yarn
yarn dev
```
Após rodar um desses comandos de sua preferência, a api irá subir caso tudo tenha dado e sido configurado corretamente, e ela vai expor no console/terminal onde/url ela está sendo executada, mas digo que por padrão ela roda nessa url: http://localhost:4000/graphql, e a acessando você pode-rá acessar o recursos das outras duas unicamente por ela, sem necessáriamente as conhecer, tanto schemas, quanto querys, mutations e o que mais tiverem.


# Tecnologias e Boas práticas utilizadas
* NodeJs
* Javascript
* ExpressJs
* Sequelize
* Apollo Server
* Apollo Federation
* Apollo Gateway
* GraphQL
* PostgreSQL
* Docker
* Docker-compose

## CASO QUEIRA SABER MAIS SOBRE O PROJETO

Pode entrar em contato comigo pelo seguinte email: ericdesenvolvedor7@gmail.com