'use strict';
module.exports = function(app) {
  var ItemsController = require('../controllers/ItemsController');

  // todoList Routes
//app.route('/items/:keyword').get(ItemsController.get_items_from_keyword);
app.route('/items').get(ItemsController.get_all_items);
app.route('/items/:item').post(ItemsController.post_item);

app.route('/keywords').post(ItemsController.post_keyword);


};
