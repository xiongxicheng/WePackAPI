'use strict';


var mongoose = require('mongoose'),
User = mongoose.model('User'),
    Trip = mongoose.model('Trip');




exports.add_to_trip = function(req, res) {
    Trip.findOneAndUpdate({ _id : req.body._id }, {$push: {items: req.body.item}}, function(err, item) {
        if (err)
          res.send(err);
          //res.json(trip);
    });
};



exports.get_all_trips = function(req, res) {
    Trip.find({}, function(err, trips) {
        if (err)
            res.send(err);
            res.json(trips)
    });
};

exports.clear_all_trips = function(req, res) {
    Trip.remove({}, function(err, trips) {
        if (err)
            res.send(err);
            res.json(trips)
    });
};

//CREATE A NEW TRIP AND ADD THE TRIP TO OWNER'S ownedTrips
exports.create_a_trip = function(req, res) {
  var new_trip = new Trip(req.body);
  new_trip.save(function(err,trip) {
    if (err) {
        res.send(err);
    } else {
        res.json(trip);
        User.findOneAndUpdate({ username: trip.owner }, {$push: {ownedTrips: trip._id}}, function(err, trip) {
            if (err) {
                res.send(err);
            }
        });
    }


  });
};

//ADD FOLLOWER TO EXISTING TRIP
exports.add_follower_to_trip = function(req, res) {
    Trip.findOneAndUpdate({ _id : req.body._id }, {$push: {followers: req.body.username}}, function(err, trip) {
        if (err)
          res.send(err);
          res.json(trip);
    });
};
