'use strict';
module.exports = function(app) {
  var TripController = require('../controllers/TripController');

  // todoList Routes
//app.route('/trip/:tripName').post(TripController.create_a_trip);


//app.route('/trip/add/:item').post(TripController.add_to_trip);

//CREATE NEW TRIP
app.route('/trips/trip').post(TripController.create_a_trip);

//GET ALL TRIPS
app.route('/trips').get(TripController.get_all_trips);

//CLEAR ALL TRIPS
app.route('/trips/clear').get(TripController.clear_all_trips);

//ADD FOLLOWER TO TRIP
app.route('/trips/trip/followers').post(TripController.add_follower_to_trip);



};
