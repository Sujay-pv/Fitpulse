const mongoose = require("mongoose");
const schema = mongoose.Schema({
  otp: "String",
  // date: Date,
  mobileNumber: "String",
  isValidated: Boolean,
});
// schema.index({ createdAt: 1 }, { expireAfterSeconds: 10 });

const otpModel = mongoose.model("otpmodel", schema);
module.exports = otpModel;
