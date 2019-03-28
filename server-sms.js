const http = require('http');
const express = require('express');
const MessagingResponse = require('twilio').twiml.MessagingResponse;

var app = express();

app.post('/sms',(req,res)=>{
  const twiml=new MessagingResponse();
  twiml.message('hello from twilio');
  re.writeHead(200,{'Content-Type':'text/xml'});
  res.end(twiml.tostring());

});

http.createServer(app).listen(3000,()=>{
  console.log('Listening on port 3000');
});
