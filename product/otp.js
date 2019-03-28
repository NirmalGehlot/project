const otplib= require('otplib');

module.exports.otp = function(){

  const secret = otplib.authenticator.generateSecret();
  const token = otplib.authenticator.generate(secret);
  return token;
}
