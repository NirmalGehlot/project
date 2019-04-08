
module.exports.otp  = (model, where) => {
    // First try to find the record

    return model.otp
    .findOne({where:{user_id : where}})
    .then(function (foundItem) {
          return model.otp
          .destroy({
            where:{user_id : where},
            truncate: true /* this will ignore where and truncate the table instead */
          })
          .then(console.log('otp record deleted'))

    });


}
