var express = require('express');
var request = require('request');
var app = express();

app.get('/', function(req, res) {
    request('http://jsonplaceholder.typicode.com/todos').pipe(res);
});

app.listen(3000, function() {
    console.log('App listening on: 3000');
});

module.exports = app;