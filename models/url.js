var mongoose = require('mongoose');

var urlSchema = mongoose.Schema({
  original_url: {
    type: String
  },
  short_url: {
    type: String
  }
});

var Url = module.exports = mongoose.model('Url', urlSchema);