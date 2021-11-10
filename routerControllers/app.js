var Express     = require('Express');
var bodyParser  = require('body-parser');
var router      = Express.Router();
var brandRoute   = require('./routerBrand');
var customerRoute   = require('./routerCustomer');
var app = Express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use('/', brandRoute);
app.use('/', customerRoute);

app.listen('4071', function(err) {
    if(err) {
        console.log(err);
    }
    console.log("Server listen on port 4071");
})