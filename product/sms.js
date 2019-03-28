module.exports.sms = function(phone){

const otp = require('./otp.js')

const accountSid = 'AC1410519c0eeabcbdd7df1f34efc4c00d';
const authToken = '47a98759076489a673a530de89a45afd';
const client = require('twilio')(accountSid, authToken);

  client.messages.create({
       from: '+12015968536',
       to: '+'+phone,
       body: 'FedRamp: Your OTP is:'+ otp.otp() +'. no reply'
     })
    .then(message => console.log(message.sid))
    .done();

}
