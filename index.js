const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');

const app = express();

const port = process.env.PORT || 5000;

app.get('/', function(req, res){
  // res.send('LOL');
  res.render('home');
});

// app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');
// Path where view files are saved
app.set('views', path.join(__dirname, 'views'));



app.listen(port, function(){
  console.log('It\'s running...');
});
