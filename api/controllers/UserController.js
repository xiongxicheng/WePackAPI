'use strict';

var mongoose = require('mongoose'),
    User = mongoose.model('User');

exports.create_new_user = function(req, res) {
    var new_user = new User(req.body);
    new_user.save(function(err, user) {
        if (err)
            res.send(err);
            res.json(user)
    });
};

exports.get_all_users = function(req, res) {
    User.find({}, function(err, users) {
        if (err)
            res.send(err);
            res.json(users)
    });
};

exports.clear_all_users = function(req, res) {
    User.remove({}, function(err, users) {
        if (err)
            res.send(err);
            res.json(users)
    });
};
