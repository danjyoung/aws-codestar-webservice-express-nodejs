var express = require('express');
var app = express();
var router = express.Router();

app.get('/', function(req, res) {
  res.send({
    "Output": "Hello World!"
  });
});

app.post('/', function(req, res) {
  res.send({
    "Output": "Hello World!"
  });
});

app.use('/api', router);

// Export your Express configuration so that it can be consumed by the Lambda handler
module.exports = app
