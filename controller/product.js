const sms = require('./sms');
const models = require(__dirname+'/../db/models')
const http = require('http');
const express = require('express');
const bodyParser = require('body-parser');
const  otp_val= require('./otp-validate')

module.exports.product = () =>{

console.log('let`s start!');

urlencoded = bodyParser.urlencoded({ extended: false });

var app = express();

app.post('/api/sendsms',urlencoded,(req,res) =>{

  console.log(req.body);
  global.phone_number=req.body.to
  sms.sms(req.body.to);
  res.end('sms sent');

});

app.post('/api/validate-otp',urlencoded, (req,res) => {
  console.log(req.body);
  otp_val.otp_validate(phone_number,req.body.otp)
res.end("otp sent")
});

http.createServer(app).listen(3000,()=>{
console.log('Listening on port 3000');
});
}
