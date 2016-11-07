'use strict'

var express = require('express');
let app = express();

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/', function (req, res) {
  let a = +req.query.a || 0;
  let b = +req.query.b || 0;
  let sum = a + b;
  console.log(sum);
  res.send(`${sum}`);
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})
