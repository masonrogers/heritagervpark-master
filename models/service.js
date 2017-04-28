var mongoose = require('mongoose');

// User Schema
var Schema = mongoose.Schema({
    serviceID: {type: Number, required: true},
    serviceItem: {type: String, required: true},
    price: {type: Number, required: true}
});

module.exports = mongoose.model('Service', Schema);