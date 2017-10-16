'use strict';


var mongoose = require('mongoose'),
  Items = mongoose.model('Items');

exports.get_all_items = function(req, res) {
  Items.find({}, function(err, task) {
    if (err)
      res.send(err);
      res.json(task);
  });
};


//posts an item based on keyword
exports.post_item = function(req, res) {
    Items.findOneAndUpdate({keyword: req.body.keyword}, {$push: {items: req.body.item}}, function(err, item) {
        if(err) {
            res.send(err);
            res.json(item);
        } else {
            if (item == null) {
                var new_keyword = new Items(req.body);
                new_keyword.save(function(err,keyword) {
                  if (err) {
                      res.send(err);
                  } else {
                     Items.findOneAndUpdate({keyword: req.body.keyword}, {$push: {items: req.body.item}}, function(err, item) {
                     });
                  }
                });
            }
            res.sendStatus(200);
        }
    });
};

exports.post_keyword = function(req, res) {
    var new_keyword = new Items(req.body);
    new_keyword.save(function(err,keyword) {
      if (err)
        res.send(err);
        res.json(keyword);
    });
};
