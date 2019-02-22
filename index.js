const express= require('express')
const knex = require('knex')
const knexConfig = require('./knexfile.js')

const server = express();



server.use(express.json())

server.get('/', (req, res) => {
    res.send('Cookbook API')
});
const port = 4000;
server.listen(port, function() {
  console.log(`\n=== Web API Listening on http://localhost:${port} ===\n`);
});