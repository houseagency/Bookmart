/**
 * Imports
 */

const server = require('express')();
const bodyParser = require('body-parser');
const { getBookmarts, addBookmart, deleteBookmart } = require('./handlers');

/**
 * Resolvers
 */

server.use(bodyParser.text());

server.get('/bookmarks', getBookmarts);
server.post('/bookmarks/:name', addBookmart);
server.delete('/bookmarks/:name', deleteBookmart);

/**
 * Start server
 */

server.listen(process.env.PORT, () => {
    console.log('Server running on port', process.env.PORT);
});