'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var TripSchema = new Schema({
  name: {
    type: String,
    required: 'enter the name of the trip'
  },
  Created_date: {
    type: Date,
    default: Date.now
  },
  owner: {
      type: String
  },
  items: [String]

});

var ItemsSchema = new Schema({
  keyword: {
    type: String,
  },
  Created_date: {
    type: Date,
    default: Date.now
  },
  items: {
      type: [String],
      default: []
  }
});

module.exports = mongoose.model('Trips', TripSchema);
module.exports = mongoose.model('Items', ItemsSchema);
