const { promisify } = require('util');

const redis = require('redis');

function createRedisClient() {
    const client = redis.createClient({
        host: process.env.REDIS_HOST
    });
    return {
        hset: promisify(client.hset.bind(client)),
        hgetall: promisify(client.hgetall.bind(client)),
        hdel: promisify(client.hdel.bind(client))
    }
}

module.exports = createRedisClient;