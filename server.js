// server.js
// where your node app starts

// init project
var express = require('express');
var request = require('request');
var https = require('https');
var mongoose = require('mongoose');
var app = express();

// Mongodb
mongoose.connect(process.env.MLAB_URI);
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('Mongo connected to: ' + process.env.MLAB_URI);
});

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get('/new/*', function (req, res) {
  var result = {};
  var url = req.params[0];
  https.get(url, function(response) {
    
  });
  
  
});

// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
