
const models = require(__dirname+'/../db/models')
const http = require('http');
const express = require('express');
const bodyParser = require('body-parser');


module.exports.product = () =>{

console.log('let`s start!');

urlencoded = bodyParser.urlencoded({ extended: false });

var app = express();

app.post('/api/otp',urlencoded,(req,res) =>{

  global.user_id = req.body.userid;
  res.writeHead(200,{'Content-Type' : 'application/json'});
  if(req.body.type == 'sms')
  {
  const sms = require('./sms');

  console.log(req.body);
  sms.sms(req.body.userid,req,res);
  //res.end('otp sent to phone number');
}
else if(req.body.type == 'email'){
  const email = require('./otp-email');

  console.log(req.body);
  email.otp_email(req.body.userid,req,res)
//  res.end("otp sent to email");
}
});




app.post('/api/otp-validate',urlencoded,(req,res) => {

  const  otp_val= require('./otp-validate');
  res.writeHead(200,{'Content-Type' : 'application/json'});
  console.log(req.body);
  response = otp_val.otp_validate(1,req.body.otp,req,res);
//  res.end("otp validate request"+response);
});

http.createServer(app).listen(3000,()=>{
console.log('Listening on port 3000');
});
}
