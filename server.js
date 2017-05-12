var express = require('express'),
app = express(),
port = process.env.PORT || 300;
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

var routes = require('./api/routes/indexRoute');
app.use('/askfood', routes);

app.listen(port);
console.log('ready on: ' + port);