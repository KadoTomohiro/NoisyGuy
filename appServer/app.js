var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var server = require('http').createServer(app);
var port = 8000;
app.set('jsonp callback name', 'callback');
app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ extended: true, limit: '50mb' }));
app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE, OPTION');
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});
// Start server
server.listen(port, function () { return console.log('Express server listening on %d, in %s mode', port, app.get('env')); });
// API definition
require('./api/sed/sed')(app);
exports = module.exports = app;
//# sourceMappingURL=app.js.map