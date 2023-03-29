const mongoose = require('mongoose');
// require('dotenv').config();
// const params = {
//     useFindAndModify : false
// }
// later TODO env
// const uri = `mongodb+srv://admin:UhIZm18cy1BW3ZRS@cluster0.bwmlmyt.mongodb.net/mynewApp?retryWrites=true&w=majority`
// process.ad
const uri = 'mongodb+srv://dhanusheagle2:b6xj5RU6fD9g40gZ@cluster0.ogwvpfm.mongodb.net/fitpulsedb?retryWrites=true&w=majority'
const connection = mongoose.connect(uri).then(()=>console.log('connected to cloud')).catch(err=> console.log(err))




module.exports = connection