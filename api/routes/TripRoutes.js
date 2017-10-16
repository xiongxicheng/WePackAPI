'use strict';
module.exports = function(app) {
  var ListsController = require('../controllers/ListsController');

  // todoList Routes
app.route('/trip/:tripName').post(ListsController.create_a_trip);

app.route('/trip').get(ListsController.list_all_trips);

app.route('/trip/add/:item').post(ListsController.add_to_trip);



};
