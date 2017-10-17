'use strict';
module.exports = function(app) {
    var TripController = require('../controllers/KeywordController');


    //CREATE NEW KEYWORD LIST
    app.route('/keywords').post(KeywordController.create_new_keyword);


};
