var express = require('express'),
app = module.exports = express(),
port = process.env.PORT || 300;
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

var routes = require('./api/routes/indexRoute');
app.use('/askfood', routes);


app.set('superSecret', 'b4t3uR4ng0'); // secret variable

app.listen(port);
console.log('ready on: ' + port);
