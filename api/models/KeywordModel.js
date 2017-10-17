'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var KeywordSchema = new Schema({
    keyword: {
        type: String,
        required: 'need keyword'
    },
    items: {
        type: [String],
        default: []
    }
});

module.exports = mongoose.model('Keyword', KeywordSchema);
