var express = require('express');
var app = express();
app.use(express.logger());
var fs = require('fs');
var message = fs.readFileSync('index.html');
var message = message.toString();

app.get('/', function(request, response) {
  response.send(message);
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
