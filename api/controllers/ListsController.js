'use strict';


var mongoose = require('mongoose'),
  Trip = mongoose.model('Trips');

exports.list_all_trips = function(req, res) {
    Trip.find({}, function(err, task) {
      if (err)
        res.send(err);
        res.json(task);
    });
};

exports.create_a_trip = function(req, res) {
  var new_trip = new Trip(req.body);
  new_trip.save(function(err,trip) {
    if (err)
      res.send(err);
      res.json(trip);
  });
};

exports.add_to_trip = function(req, res) {
    Trip.findOneAndUpdate({ _id : req.body._id }, {$push: {items: req.body.item}}, function(err, item) {
        if (err)
          res.send(err);
          //res.json(trip);
    });
};
