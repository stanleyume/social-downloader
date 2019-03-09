const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');
var Crawler = require("crawler");

const app = express();

const port = process.env.PORT || 5000;

app.get('/', function(req, res){
  // res.send('LOL');
  res.render('home');
});

app.get('/insta', (req, res) => {
  
});

app.get('/get_media', function(req, res) {

  var response = res;
  var c = new Crawler;
  c.direct({
    // uri: 'https://twitter.com/meetIbk/status/1104323669520777216',
    uri: 'https://www.instagram.com/p/BumRoEGnc_b/',
    maxConnections : 10,
    skipEventRequest: false, // default to true, direct requests won't trigger Event:'request'
    // This will be called for each crawled page
    callback : function (error, res, done) {
        if(error){
            console.log(error);
        }else{
            var $ = res.$;
            // $ is Cheerio by default
            //a lean implementation of core jQuery designed specifically for the server
            response.send($("video").attr('src'));
        }
        // done();
    }
  });
  // c.queue('https://twitter.com/meetIbk/status/1104323669520777216');
  // res.send(link);
});

// app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');
// Path where view files are saved
app.set('views', path.join(__dirname, 'views'));



app.listen(port, function(){
  console.log('It\'s running on port '+port);
});
