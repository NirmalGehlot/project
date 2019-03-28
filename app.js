const http = require('http');
const express = require('express');
const otplib= require('otplib');

const accountSid = 'AC1410519c0eeabcbdd7df1f34efc4c00d';
const authToken = '47a98759076489a673a530de89a45afd';
const client = require('twilio')(accountSid, authToken);

console.log('let`s start!');

var app = express();
app.get('/api/sendsms',(req,res) =>{
  console.log(req.query);
  const secret = otplib.authenticator.generateSecret();

  const token = otplib.authenticator.generate(secret);
/*  otplib.authenticator.options = {
  step: 300000,
  window: 1
};*/
  client.messages.create({
       from: '+12015968536',
       to: '+'+req.query.to,
       body: 'FedRamp: Your OTP is:'+ token +'. No reply'
     })
    .then(message => console.log(message.sid))
    .done();
    res.end('sms sent');
});

http.createServer(app).listen(3000,()=>{
  console.log('Listening on port 3000');
});
