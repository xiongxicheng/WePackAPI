'use strict';
module.exports = function(app) {

    var UserController = require('../controllers/UserController');

    //CREATE NEW USER
    app.route('/users').post(UserController.create_new_user);

    //GET ALL USERS
    app.route('/users').get(UserController.get_all_users);

    //REMOVE ALL USERS
    app.route('/users/clear').get(UserController.clear_all_users);


};
