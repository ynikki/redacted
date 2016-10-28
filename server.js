var express = require('express');
var PORT = 8080;
var app = express();
var bodyParser = require('body-parser');

var server = app.listen(PORT, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Listening on port', host, port);
});

var blackListed = {
  selfie: 'self-portrait',
  yummers: 'delicious',
  outchea: 'are out here',
  bruh: 'wow',
  doge: 'pug',
  cilantro: 'soap',
  bae: 'loved one',
  swag: 'style',
  yolo: 'carpe diem'
}

app.use(bodyParser.urlencoded({ extended: false}));

app.use(function (req, res, next) {
  for()
  console.log(req.body.message);
  next();
});

app.post('/', function (req, res) {
  console.log(req.body.message);
  res.send(req.body.message);
});

