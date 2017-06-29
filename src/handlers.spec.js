const q = require('q');
const td = require('testdouble');
const BookmartHandler = require('./handlers');

function whenWrapper(input) {
    const deferred = q.defer();
    td.when(input).thenDo(deferred.resolve());
    return deferred.promise;
}

function checkBookmarts(value, done) {
    const res = td.object("response");
    const redis = td.object("redis");
    const handler = new BookmartHandler(redis);

    td.when(redis.hgetall(td.matchers.isA(String)))
        .thenResolve(value);
    
    td.when(res.json(value)).thenDo(done);
    
    handler.get(null, res, null);
}

describe("Test handlers", () => {
    it("should have no bookmarts", (done) => {
        checkBookmarts(null, done);
    });
    it("should have bookmarts", (done) => {
        checkBookmarts({}, done);
    });
    it("should return error", (done) => {
        const res = td.object("response");
        const redis = td.object("redis");
        const handler = new BookmartHandler(redis);

        td.when(redis.hgetall(td.matchers.isA(String)))
            .thenReject(new Error('error'));
        
        td.when(res.sendStatus(500)).thenDo(done);
        
        handler.get(null, res, null);
    });
});