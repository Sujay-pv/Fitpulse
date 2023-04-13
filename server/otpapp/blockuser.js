const mongoose = require('mongoose');
const schema = mongoose.Schema({
   
    email : 'String'
   
})
const blockmodel = mongoose.model('blockmodel',schema);
module.exports = blockmodel;