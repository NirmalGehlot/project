
module.exports.otp  = (model, where, newItem) => {
    // First try to find the record
    return model.otp
    .findOne({where:{phone_number : where}})
    .then(function (foundItem) {
      //debugger
        if (!foundItem) {
            // Item not found, create a new one
            return model.otp
                .create(newItem)
                .then((user) => {

                  console.log(user);
                  console.log("otp created");
                });
        }
         // Found an item, update it
        return model.otp
            .update(newItem, {where: {phone_number : where}})
            .then((user)=>{
              console.log(user);
              console.log('otp updated');
            }) ;
    });


}



module.exports.smslog  = (model, where, newItem) => {
    // First try to find the record
    console.log("otp in smslog  " + newItem.message_otp,newItem.otp_status);

    return model.smslog
    .findOne({where:{phone_number : where}})
    .then(function (foundItem) {
      //debugger
        if (!foundItem) {
            // Item not found, create a new one
            return model.smslog
                .create(newItem)
                .then((user) => {

                  console.log(user);
                  console.log("smslog created");
                });
        }
         // Found an item, update it
        return model.smslog
            .update({otp:newItem.message_otp,otp_status:newItem.otp_status}, {where: {phone_number : where}})
            .then((user)=>{
              console.log(user);
              console.log('smslog updated');
            }) ;
    });


}
