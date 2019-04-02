const sms = require('./sms');
const models = require(__dirname+'/../server/models')
const http = require('http');
const express = require('express');
const bodyParser = require('body-parser');
const upcr = require('./updateorcreate')

module.exports.product = () =>{

console.log('let`s start!');

urlencoded = bodyParser.urlencoded({ extended: false });

var app = express();

app.post('/api/sendsms',urlencoded,(req,res) =>{

  console.log(req.body);
  sms.sms(req.body.to);
  res.end('sms sent');

  /*var toCreate = {

      phone_number : req.body.to,
      message_data: sms.msg,
      message_status : 'delivered'

    };*/

        //console.log(toCreate.phone_number);
    //upcr.updateOrCreate(models.otp,req.body.to,toCreate);
          //  console.log('req body - ' , toCreate);
          //  console.log('otp model - ', models.otp);
   /*models.otp.findOrCreate(toCreate)
  .then((user) => {
    debugger
    console.log(user);
    //console.log(my);
    console.log("created");
  });*/

});


http.createServer(app).listen(3000,()=>{
console.log('Listening on port 3000');
});
}
