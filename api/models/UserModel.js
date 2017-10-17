'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
    username: {
        type: String,
        required: 'needusername'
    },
    password: {
        type: String,
        required: 'need password'
    },
    email: {
        type: String,
        required: 'need email'
    },
    ownedTrips: {
        type: [String],
        default: []
    },
    followingTrips: {
        type: [String],
        default: []
    }
});

module.exports = mongoose.model('User', UserSchema);
