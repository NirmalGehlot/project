const sgMail = require('@sendgrid/mail');
const otp = require('./otp-gen');
const upcr = require('./updateorcreate')
const models = require(__dirname+'/../db/models')

module.exports.otp_email = (user_id,req,res) =>{
console.log('lets start');


sgMail.setApiKey('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');
let otpgen = otp.otp();
let body =  'Your OTP is: '+otpgen+'. Please use it to login';



models.User
.findOne({where:{id : user_id}})
.then((foundItem)=>{
 console.log(foundItem.email);
 to_email=foundItem.email;
 //module.exports.user_id = user_id;
 const msg = {
   to: to_email,
   from: 'nirmal.gehlot@cognitiveclouds.com',
   subject: 'FedRamp ONE TIME PASSWORD',
   text: body,
   html: '<strong>'+body+'</strong>',
 };
 sgMail.send(msg)
 .then((message)=>{
   console.log(message);
 //  console.log('otp sent');
 toOtp = {
   user_id : user_id,
   message_otp : otpgen,
 };
toSmslog ={
  user_id : user_id,
  message_data : body,
  message_status : 'delivered',
  req_type : 'email'
};

  upcr.smslog(models,user_id,toSmslog);
  upcr.otp(models,user_id,toOtp

    let myobj = {
      message : "otp sent to sms",
      status : 'delivered'
    };
    res.end(JSON.stringify(myobj));


 })


setTimeout(()=>{
  const deletes = require('./delete-otp');
  deletes.otp(models,user_id);
}, 300000);
})
.catch((error) => {
    console.log('error', error);
  });

}
