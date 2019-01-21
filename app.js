var express = require('express');
var app = express();
var router = express.Router();

app.use(function(req, res, next) {
  console.log('Request URL: ' + req.url);
  res.setHeader('x-env', 'lambda')
  next();
});

app.get('/api', function(req, res) {
  res.send({
    "Output": "Hello World!!"
  });
});

app.post('/api', function(req, res) {
  res.send({
    "Output": "Hello World!!"
  });
});

app.use('/api', router);

// Export your Express configuration so that it can be consumed by the Lambda handler
module.exports = app
