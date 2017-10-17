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
      type: String,
      required: 'need owner username'
  },
  items: {
      type: [String],
      default: []
  },
  followers: {
      type: [String],
      default:[]
  }

});



module.exports = mongoose.model('Trip', TripSchema);
