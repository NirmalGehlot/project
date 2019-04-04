const upcr = require('./updateorcreate')
const models = require(__dirname+'/../db/models')
module.exports.sms = function(phone_number){

const otp = require('./otp-gen')

const accountSid = 'ACcd84dd93c12b393b2db0abc8b22f6273';
const authToken = 'e4107082085e7f8ebc9f7b3ce2b0838f';
const client = require('twilio')(accountSid, authToken);
otpgen = otp.otp();
const body = 'FedRamp: Your OTP is:'+ otpgen +'. no reply';
  client.messages.create({
       from: '+17603015653',
       to: '+'+phone_number,
       body: body
     })
    .then(message => console.log(message.status))

    //.then(message => console.log(message.body))
    //.then(module.exports.msg = body)
    .then(
       toOtp = {

          phone_number : phone_number,
          message_data: body,
          message_status : 'delivered'

        },
      toSmslog ={
        phone_number : phone_number,
        message_otp : otpgen,
        otp_status : " "
      })
      .then(upcr.otp(models,phone_number,toOtp))
      .then(upcr.smslog(models,phone_number,toSmslog))
    .done();

}
