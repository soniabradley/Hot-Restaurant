// api-routes are for our data, this is going to help determine what data the user sees
// and data the user is able to post to our server to store.
var tableData = require('../data/table-data.js');
var waitingListData = require ('../data/waitinglist-data.js');

module.exports = function (app) {

    app.get('/api/tables', function (req, res){
        res.json(tableData);
    })

    app.get('/api/waitlist', function (req, res){
        res.json(waitingListData);
    })
}