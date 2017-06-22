
const { promisify } = require('util');

const redis = require('redis').createClient({
    host: process.env.REDIS_HOST
});

/**
 * Constants
 */

const REDIS_KEY = 'bookmarks';

const hset = promisify(redis.hset.bind(redis));
const hgetall = promisify(redis.hgetall.bind(redis));
const hdel = promisify(redis.hdel.bind(redis));

function getBookmarts(req, res, next){
    hgetall(REDIS_KEY)
        .then(bookmarks => {
            res.json(bookmarks);
        }).catch(error => {
            console.log(error);
            res.sendStatus(500);
        });
}

function addBookmart(req, res, next){
    hset(REDIS_KEY, req.params.name, req.body)
        .then(() => {
            res.sendStatus(200);
        })
        .catch(error => {
            console.log(error);
            res.sendStatus(500);
        });
}

function deleteBookmart(req, res, next){
    hdel(REDIS_KEY, req.params.name)
        .then(() => {
            res.sendStatus(200);
        })
        .catch(error => {
            console.log(error);
            res.sendStatus(500);
        })
}

module.exports = {
    getBookmarts,
    addBookmart,
    deleteBookmart
}