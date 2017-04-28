var express = require('express');
var router = express.Router();
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;

//include db's
var Service = require('../models/service');
var Reserve = require('../models/reserve');

// Get Homepage
router.get('/', ensureAuthenticated, function(req, res) {
    //get currently logged in username
    if(req.isAuthenticated()){
        var cur_username = req.user.username;
    }
    Reserve.getReservationByUsername(cur_username, function(err, reservation_docs){
        if (!reservation_docs) {
            console.log("No Reservations for " + username);
        }
        console.log("Query Callback: ====");
        console.log(reservation_docs);
        console.log("====");
        Service.find(function(err, docs){
            res.render('reserve/index', {reserves: reservation_docs});
        });
    });
    
    
});

router.post('/', ensureAuthenticated, function(req, res){
    
    //get currently logged in username
    if(req.isAuthenticated()){
        var cur_username = req.user.username;
    }
    
    //get selected services
    var laundry2 = false;
    var premium2 = "false";
    var wifi2 = "false";
    var breakfast2 = "false";
    var pool2 = "false";
    
    if (req.body.laundry != undefined) laundry2 = true;
    if (req.body.premium != undefined) premium2 = "true";
    if (req.body.wifi != undefined) wifi2 = "true";
    if (req.body.breakfast != undefined) breakfast2 = "true";
    if (req.body.pool != undefined) pool2 = "true";
    
    //structure a new reservation
    var reserves =
        new Reserve({
            username: cur_username,
            laundry: laundry2,
            premium: premium2,
            wifi: wifi2,
            breakfast: breakfast2,
            pool: pool2
        });
    
    console.log("Created Reservation: ====");
    console.log(reserves);
    reserves.save();
    console.log("Saved");
    console.log("====");
    
    //redirect to show new reservation
    res.redirect('/');
    
})

function ensureAuthenticated(req, res, next){
	if(req.isAuthenticated()){
		return next();
	} else {
		//req.flash('error_msg','You are not logged in');
		res.redirect('/users/login');
	}
}



module.exports = router;