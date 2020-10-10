/** @format */

var express = require('express');
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io')(server);

io.on('connection', (client) => {
  console.log('Client connected...');

  client.on('answer', function (question, answer) {
    client.broadcast.emit('answer', question, answer);
  });

  client.on('question', function (question) {
    if (client.question_asked) {
      client.question_asked = true;
      client.broadcast.emit('question', question);
    }
  });
});

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

server.listen(8080);
