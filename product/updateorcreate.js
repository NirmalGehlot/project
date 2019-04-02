
module.exports.updateOrCreate  = (model, where, newItem) => {
    // First try to find the record
    return model
    .findOne({where:{phone_number : where}})
    .then(function (foundItem) {
      debugger
        if (!foundItem) {
            // Item not found, create a new one
            return model
                .create(newItem)
                .then((user) => {

                  console.log(user);
                  console.log("created");
                });
        }
         // Found an item, update it
        return model
            .update(newItem, {where: {phone_number : where}})
            .then((user)=>{
              console.log(user);
              console.log('updated');
            }) ;
    });
}
