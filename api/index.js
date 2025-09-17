const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json'); // Path to your db.json
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use('/api', router); // Mount the router under /api

module.exports = server;