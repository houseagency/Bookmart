const REDIS_KEY = 'bookmarks';

class BookmartHandlers {

    constructor(redis) {
        this.redis = redis;
    }

    get(req, res, next){
        this.redis.hgetall(REDIS_KEY)
            .then(bookmarks => {
                res.json(bookmarks);
            }).catch(error => {
                console.log(error);
                res.sendStatus(500);
            });
    }

    add(req, res, next){
        this.redis.hset(REDIS_KEY, req.params.name, req.body)
            .then(() => {
                res.sendStatus(200);
            })
            .catch(error => {
                console.log(error);
                res.sendStatus(500);
            });
    }

    remove(req, res, next){
        this.redis.hdel(REDIS_KEY, req.params.name)
            .then(() => {
                res.sendStatus(200);
            })
            .catch(error => {
                console.log(error);
                res.sendStatus(500);
            })
    }
}

module.exports = BookmartHandlers;