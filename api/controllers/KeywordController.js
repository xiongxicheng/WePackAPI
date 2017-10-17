'use strict';

var mongoose = require('mongoose'),
    User = mongoose.model('Keyword');


exports.create_new_keyword = function(req, res) {
    var new_keyword = new Keyword(req.body);
    new_keyword.save(function(err, keyword) {
        if (err)
            res.send(err);
        res.json(keyword)
    });
};
