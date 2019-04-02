const upcr = require('./updateorcreate')
const models = require(__dirname+'/../server/models')
module.exports.sms = function(phone){

const otp = require('./otp')

const accountSid = 'ACcd84dd93c12b393b2db0abc8b22f6273';
const authToken = 'e4107082085e7f8ebc9f7b3ce2b0838f';
const client = require('twilio')(accountSid, authToken);
const body = 'FedRamp: Your OTP is:'+ otp.otp() +'. no reply';
  client.messages.create({
       from: '+17603015653',
       to: '+'+phone,
       statusCallback: 'http://postb.in/1234abcd',
       body: body
     })
    .then(message => console.log(message.sid))
    //.then(message => console.log(message.body))
    //.then(module.exports.msg = body)
    .then(
       toCreate = {

          phone_number : phone,
          message_data: body,
          message_status : 'delivered'

        })
      .then(upcr.updateOrCreate(models.otp,phone,toCreate))
    .done();

}
