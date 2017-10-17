'use strict';

var mongoose = require('mongoose'),
    Keyword = mongoose.model('Keyword');

exports.get_all_keywords = function(req, res) {
    Keyword.find({}, function(err, keywords) {
        if (err) {
            res.send(err);
        }
        res.json(keywords)
    });
};

exports.create_new_keyword = function(req, res) {
    var new_keyword = new Keyword(req.body);
    new_keyword.save(function(err, keyword) {
        if (err)
            res.send(err);
        res.json(keyword)
    });
};
