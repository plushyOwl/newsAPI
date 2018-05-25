let express = require('express');
let app = express();

app.get('/', function (req, res) {
  res.send('Hello World from backend!');
});

app.listen(3001, function () {
  console.log('Example app listening on port 3001!');
});

app.post('/', function (req, res) {
    res.send('Got a POST request');
  });