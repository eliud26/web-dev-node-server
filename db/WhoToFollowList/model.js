const mongoose = require('mongoose');
const schema = require('./schema');
const model = mongoose.model('WhoModel', schema);
module.exports = model;