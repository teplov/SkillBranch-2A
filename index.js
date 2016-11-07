'use strict'

var express = require('express');
let app = express();


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
