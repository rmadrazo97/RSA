var express = require('express'),
    app = express(),
    port = process.env.PORT || 3000;
    Task = require('./api/models/rsaModel');
    bodyParser = require('body-parser');


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var routes = require('./api/routes/rsaRoutes'); //importing route
routes(app); //register the route

app.listen(port);

console.log('RSA RESTful API server started on:'+port)