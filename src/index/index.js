var express = require('express');
var app = express();
var path = require('path');

app.get('/', function (req, res) {
  console.log('You hit the base route')
  res.sendFile(path.join( __dirname + '/index.html' ));
});

app.listen(3000);