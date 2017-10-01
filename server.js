// server.js
// where your node app starts

// init project
var express = require('express');
var request = require('request');
var url = require('url');
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
  var adr = req.params[0];
  var q = url.parse(adr, true);
  if ((q.protocol == 'https:' || q.protocol == 'http:') && (q.slashes == true)) {
    request(adr, function(err, response, body) {
      console.log(err);
      if (err) {
        res.send({error: 'Not a valid url..'});
      }
      
      result.original_url = adr;
      result.short_url = Math.floor(Math.random())
      
      res.send(result);
    });
    
    console.log('After request');
  } else {
    res.send({error: 'Not a valid url.'});
  }
  
});

// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
