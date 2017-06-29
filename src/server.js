/**
 * Imports
 */

const server = require('express')();
const bodyParser = require('body-parser');
const redis = require('./redis');
const handler = new (require('./handlers'))(redis());

/**
 * Resolvers
 */

server.use(bodyParser.text());

server.get('/bookmarks', handler.get);
server.post('/bookmarks/:name', handler.add);
server.delete('/bookmarks/:name', handler.remove);

/**
 * Start server
 */

server.listen(process.env.PORT, () => {
    console.log('Server running on port', process.env.PORT);
});