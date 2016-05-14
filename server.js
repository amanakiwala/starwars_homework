var express = require('express');
var bodyParser = require('body-parser');

//sets up express app
var app = express();
var PORT = process.env.PORT || 8080;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type:'application/vnd.api+json'}));


//routes
require("./app/routes/api-routes.js")(app)
require("./app/routes/html-routes.js")(app)


//server listening
app.listen(PORT, function(){
	console.log('App listening on PORT' + PORT);
})