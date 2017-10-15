'use strict';
module.exports = function(app) {
  var firstController = require('../controllers/firstController');

  // todoList Routes
app.route('/trip/:tripName').post(firstController.create_a_trip);

app.route('/trip').get(firstController.list_all_trips);



};
