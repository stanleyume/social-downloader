const express = require('express');

const app = express();

const port = process.env.PORT || 5000;
app.listen(port, function(){
  console.log('It\'s running...');
});

app.get('/', function(req, res){
  res.send('LOL');
});
