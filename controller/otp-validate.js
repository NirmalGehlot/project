const models = require(__dirname+'/../db/models')

module.exports.otp_validate = (phone_number,otp) =>{
models.smslog
.findOne({where:{phone_number : phone_number}})
.then((foundItem)=>{
  //console.log(foundItem.otp);
  if(foundItem.otp.toString() == otp){

    return models.smslog
        .update({otp_status:"VALID"}, {where: {phone_number : phone_number}})
        .then((user)=>{
          console.log(user);
          console.log('otp valid');
        }) ;
  }
  else{
    return models.smslog
        .update({otp_status:"INVALID"}, {where: {phone_number : phone_number}})
        .then((user)=>{
          console.log(user);
          console.log('otp invalid');
  });
}
});
}
