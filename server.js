var express = require('express');
var app = express();

// Serve swagger ui
app.use('/', express.static(__dirname + '/swagger-ui'));
app.use('/yast.css', express.static(__dirname + '/yast.css'));

var port = process.env.PORT || 5000;
app.listen(port);
console.log('Magic happens on port ' + port);