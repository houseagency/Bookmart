const td = require('testdouble');
const { getBookmarts, addBookmart, deleteBookmart } = require('./handlers');


describe("Test handlers", () => {
    it("should have no bookmarts", (done) => {
        const res = td.object("response");    
        td.when(res.json(null)).thenDo(done);
        getBookmarts(null, res, null);
    });
});