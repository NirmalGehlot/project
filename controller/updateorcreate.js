
module.exports.otp  = (model, where, newItem) => {
    // First try to find the record
    console.log(newItem);
    return model.otp
    .findOne({where:{user_id : where}})
    .then(function (foundItem) {
      //debugger
        if (!foundItem) {
            // Item not found, create a new one
            return model.otp
                .create(
                  { user_id :newItem.user_id,
                    otp : newItem.message_otp,
                    })
                .then((user) => {

                //  console.log(user);
                  console.log("otp created");
                })
                .catch((error) => {
                    console.log('error', error);
                  });
        }
         // Found an item, update it
        return model.otp
            .update({otp:newItem.message_otp}, {where: {user_id : where}})
            .then((user)=>{
              //console.log(user);
              console.log('otp updated');
            })
            .catch((error) => {
                console.log('error', error);
              });
    });


}



module.exports.smslog  = (model, where, newItem) => {
    // First try to find the record
    //console.log("otp in smslog  " + newItem.message_otp,newItem.otp_status);

    return model.smslog
    .findOne({where:{user_id : where , req_type : newItem.req_type}})
    .then(function (foundItem) {
      //debugger
        if (!foundItem) {
            // Item not found, create a new one
            return model.smslog
                .create({
                  user_id:newItem.user_id,
                  message_data:newItem.message_data,
                  message_status:newItem.message_status,
                  req_type : newItem.req_type})
                .then((user) => {

                  //console.log(user);
                  console.log("smslog created");
                })
                .catch((error) => {
                    console.log('error', error);
                  });
        }
         // Found an item, update it
        return model.smslog
            .update({
              message_data :newItem.message_data,
              message_status:newItem.message_status,
             req_type: newItem.req_type},
              {where: {user_id : where,req_type:newItem.req_type}
            })
            .then((user)=>{
            //  console.log(user);
              console.log('smslog updated');
            })
            .catch((error) => {
                console.log('error', error);
              }) ;
    });


}
