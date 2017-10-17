var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000,
  mongoose = require('mongoose'),
  Trip = require('./api/models/TripModel'),
  User = require('./api/models/UserModel'),
  Item = require('./api/models/ItemModel')
  bodyParser = require('body-parser');


mongoose.Promise = global.Promise;
//mongoose.connect('mongodb://localhost/apidb');
mongoose.connect('mongodb://user:pass@ds121535.mlab.com:21535/wepack');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var routes = require('./api/routes/TripRoutes');
var itemsRoutes = require('./api/routes/ItemRoutes');
var userRoutes = require('./api/routes/UserRoutes');

routes(app); //register the route
itemsRoutes(app);
userRoutes(app);

app.listen(port);

console.log('todo list RESTful API server started on: ' + port);
