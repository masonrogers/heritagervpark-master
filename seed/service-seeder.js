var Service = require('../models/service');
var mongoose = require('mongoose');

mongoose.connect('localhost:27017/loginapp');

var services = [
    new Service({
        serviceID: 0,
        serviceItem: 'Laundry Access',
        price: 5
    }),
    new Service({
        serviceID: 1,
        serviceItem: 'WiFi Access',
        price: 3
    }),
    new Service({
        serviceID: 2,
        serviceItem: 'Pool Access',
        price: 5
    }),
    new Service({
        serviceID: 3,
        serviceItem: 'Premium RV Site',
        price: 35
    }),
    new Service({
        serviceID: 4,
        serviceItem: 'Unlimited Breakfast Buffet',
        price: 20
    }),
];


for (var i=0; i < services.length; i++) {
    services[i].save();
}
