<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

 
## Description

```c++

В .env.example ссылки, которые я использовал. Приложение запустится на данных из .env.example

Можно проверить, используя swagger-ui или собственноручно

Ниже указал API, а дальше запуск приложения

```

## API

```bash
# swagger
link /api/docs

# for evm-haqq
link { .../evm/block/:height, GET }
link { .../evm/transactions/:hash, GET }

#for cosmos.it-rocket
link { .../cosmos/block/:height, GET } 
link { .../cosmos/transactions/:hash, GET }
```


## Project setup

```bash
$ npm install
```

## Compile and run the project

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```