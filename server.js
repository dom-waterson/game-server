var express = require('express');
var app = express();

app.get('/', function (req, res) {
    res.type('text/plain');
    res.send('Hello World');
});

app.listen(process.env.PORT || 4730);
console.log('Server Listening on ' + 4730);
