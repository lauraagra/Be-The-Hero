const express = require('express'); // importando algo
const cors = require('cors');
const routes = require('./routes');

const app = express(); // criando aplicação (vai ter rotas e funcionalidades)

app.use(cors()); // quem pode acessar o backend
app.use(express.json()); // antes de todas as requisições, ir no corpo da requisição e converter json em objeto
app.use(routes);

// rota / recurso

/* 
 *Métodos HTTP:
 *
 * GET Buscar/listarget uma informação do backend
 * POST: Criar uma informação no backend
 * PUT: Alterar uma informação no backend
 * DELETE: Deletar uma informação no backend
*/


/*
 * Tipos de parametros:
 *
 * Query: parametros nomeados enviados na rota após o simbolo de "?" (filtros, paginação)
 * Route Params: parametros utlizados para identificar recursos /users/:id
 * Request Body: corpo da requisição utilizado para criar ou alterar recursos
 * 
*/

/*
 * SQL: MySQL, SQLite, PostgreSQL, Oracle, Microsoft SQL -- usar esse (SQLite)
 * NoSQL: MongoDB, CouchDB, etc -- não relacionais
 * 
*/

/*
 * Driver: SELECT * FROM users
 * Query Builder: table('user')
*/

app.listen(3333); // acessar aplicaçãp atraves da porta 3333(porta 8080 é problematica) - localhost - as portas seguem um padrão

