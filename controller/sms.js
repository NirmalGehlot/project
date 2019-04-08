const upcr = require('./updateorcreate')
const models = require(__dirname+'/../db/models')
module.exports.sms = function(user_id,req,res){

const otp = require('./otp-gen');
var status;
const accountSid = 'ACcd84dd93c12b393b2db0abc8b22f6273';
const authToken = 'e4107082085e7f8ebc9f7b3ce2b0838f';
const client = require('twilio')(accountSid, authToken);

otpgen = otp.otp();
const body = 'FedRamp: Your OTP is:'+ otpgen +'. no reply';

  models.User
    .findOne({where:{id : user_id}})
    .then((foundItem)=>{
     console.log(foundItem.phone_number);
     phone_number = foundItem.phone_number;
     //module.exports.user_id = user_id;

    client.messages.create({
         from: '+17603015653',
         to: '+'+phone_number,
         body: body
       })
       .then((message) => {
         status = message.status;
         console.log(status);
         toOtp = {
           user_id : user_id,
           message_otp : otpgen,
         };
        toSmslog ={
          user_id : user_id,
          message_data : body,
          message_status : status,
          req_type : 'sms'
        };
      upcr.smslog(models,user_id,toSmslog);
      upcr.otp(models,user_id,toOtp);

      let myobj = {
        message : "otp sent to mobile",
        status : 'delivered'
      }
      res.end(JSON.stringify(myobj));
       

    setTimeout(()=>{
      const deletes = require('./delete-otp');
      deletes.otp(models,user_id);
    }, 300000);

  })
  .catch((error) => {
        console.log('error', error);
      });

}
