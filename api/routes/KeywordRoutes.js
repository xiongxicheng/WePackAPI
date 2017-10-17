'use strict';
module.exports = function(app) {
    var KeywordController = require('../controllers/KeywordController');


    //GET ALL KEYWORDS AND THEIR ITEM LISTS
    app.route('/keywords').get(KeywordController.get_all_keywords);

    //CREATE NEW KEYWORD LIST
    app.route('/keywords').post(KeywordController.create_new_keyword);


};
