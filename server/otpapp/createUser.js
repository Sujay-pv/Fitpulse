const mongoose = require("mongoose");
const schema = mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  email: "String",
  mobileNumber: {
    type: Number,
    require: true,
  },
  password: "String",
  // verificationotp : 'String',
  // isOTPVerfied : Boolean
});

schema.statics.isThisEmailInUse = async function (email) {
  try {
    const user = await this.findOne({ email });
    if (user) return false;
    return true;
  } catch (error) {
    console.log("error inside emailinuse function", error.message);
    return false;
  }
};
const usermodel = mongoose.model("usermodel", schema);
module.exports = usermodel;
