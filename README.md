<!--
title: 'Reto | Serverless swapi'
description: 'En esta aplicacion se implento la swapi para cargar información en una base de datos DynamoDB, para luego desplegarse en AWS.'
layout: Doc
framework: v3
platform: AWS
language: nodeJS
priority: 1
authorLink: 'https://github.com/serverless'
authorName: 'Serverless, inc.'
authorAvatar: 'https://avatars1.githubusercontent.com/u/13742415?s=200&v=4'
-->

# Swagger documentación de api

https://app.swaggerhub.com/apis-docs/Koogantz/srvlss-api/1.0.0

## Uso

### Despliegue

Instalar las dependencias con:

```
npm i
```

y luego desplegar con

```
npm run deploy
```

Luego de ejecutarse el despliegue, podrás ver algo como esto:

```bash
Deploying srvlss-api to stage dev (us-east-1)

✔ Service deployed to stack srvlss-api-dev (196s)

endpoint: ANY - https://xxxxxxxxxx.execute-api.us-east-1.amazonaws.com
functions:
  api: srvlss-api-dev-api (766 kB)
```

### Testing

Ejecutar las pruebas unitarias con:

```
npm run test
```

Luego de ejecutarse las pruebas, podrás ver algo como esto:

```bash
-------------------------|---------|----------|---------|---------|-------------------
File                     | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s
-------------------------|---------|----------|---------|---------|-------------------
All files                |   91.52 |       50 |      75 |   91.37 |
 srvlss-api              |     100 |      100 |     100 |     100 |
  datasource.js          |     100 |      100 |     100 |     100 |
 srvlss-api/src/services |   86.11 |       25 |   66.66 |   85.71 |
  load-data.services.js  |   86.11 |       25 |   66.66 |   85.71 | 16,44,53-55
 srvlss-api/src/utils    |     100 |      100 |     100 |     100 |
  constants.js           |     100 |      100 |     100 |     100 |
  translate.js           |     100 |      100 |     100 |     100 |
 srvlss-api/test/utils   |     100 |      100 |     100 |     100 |
  mocks.js               |     100 |      100 |     100 |     100 |
-------------------------|---------|----------|---------|---------|-------------------
Test Suites: 1 passed, 1 total
Tests:       12 passed, 12 total
Snapshots:   0 total
Time:        8.16 s, estimated 11 s
```

### Despliegue local

Instalar las dependencias con:

```
npm i
```

y luego desplegar con

```
npm run local
```

Luego de ejecutarse el despliegue, podrás ver algo como esto:

```bash
Starting Offline at stage dev (us-east-1)

Offline [http for lambda] listening on http://localhost:3002
Function names exposed for local invocation by aws-sdk:
           * api: srvlss-api-dev-api

   ┌───────────────────────────────────────────────────────────────────────┐
   │                                                                       │
   │   ANY | http://localhost:4000/{default*}                              │
   │   POST | http://localhost:4000/2015-03-31/functions/api/invocations   │
   │                                                                       │
   └───────────────────────────────────────────────────────────────────────┘

Server ready: http://localhost:4000 🚀
```
