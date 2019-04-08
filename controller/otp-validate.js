const models = require(__dirname+'/../db/models')

module.exports.otp_validate = (user_id,otp,req,res) =>{

      models.otp
      .findOne({where:{user_id : user_id}})
      .then((foundItem)=>{
          //console.log(foundItem.otp);
          if(foundItem.otp == otp){
          console.log('valid otp');
          //return 'valid otp';
          let myobj = {
            status : 'valid'
          }
          res.end(JSON.stringify(myobj));
           
        }
        else{
          console.log('Invalid otp');
        //  return 'Invalid otp';
          let myobj = {
            status : 'invalid'
          }
          res.end(JSON.stringify(myobj));

        }

    });


}
