const mongoose = require('mongoose');
const schema = mongoose.Schema({
    otp : 'String',
    mobileNumber : 'String',
    isValidated : Boolean
})
const otpModel = mongoose.model('otpmodel',schema);
module.exports = otpModel;