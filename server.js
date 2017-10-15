var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000,
  mongoose = require('mongoose'),
  Trip = require('./api/models/TripModel'),
  bodyParser = require('body-parser');


mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/apidb');


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var routes = require('./api/routes/TripRoutes'); //importing route
var itemsRoutes = require('./api/routes/ItemsRoutes');

routes(app); //register the route
itemsRoutes(app);

app.listen(port);

console.log('todo list RESTful API server started on: ' + port);
