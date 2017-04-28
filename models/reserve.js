var mongoose = require('mongoose');

// User Schema
var Schema = mongoose.Schema({
    username: {type: String, required: true},
    laundry: {type: Boolean, required: true},
    premium: {type: Boolean, required: true},
    wifi: {type: Boolean, required: true},
    breakfast: {type: Boolean, required: true},
    pool: {type: Boolean, required: true}
});

var Reservations = module.exports = mongoose.model('Reserve', Schema);

module.exports.getReservationByUsername = function(username, callback){
	var query = {username: username};
	Reservations.find(query, callback);
}