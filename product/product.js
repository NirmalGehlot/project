const sms = require('./sms');
const http = require('http');
const express = require('express');
module.exports.product = () =>{
console.log('let`s start!');

var app = express();
app.get('/api/sendsms',(req,res) =>{
  console.log(req.query);
  sms.sms(req.query.to);
  res.end('sms sent');
  });

http.createServer(app).listen(3000,()=>{
console.log('Listening on port 3000');
});
}
