var express    = require('express');        // call express
var app        = express();                 // define our app using express
var hypermedia = require('./../../../express-middleware-hypermedia')

var hal = hypermedia.middleware;
var Link = hypermedia.Link;
var SelfLink = hypermedia.SelfLink;
var HalResponse = hypermedia.HalResponse;


var port = process.env.PORT || 8080;        // set our port

var router = express.Router();              // get an instance of the express Router

router.get('/shops/1', function(req, res) {
    var obj = {
        name:'Aldi',
        nationality:'German',
        offices:145,
        owner:'John O\'Melavo'
    };

    var halResponse = new HalResponse(obj)
        .withLink(new Link().from("products","show products","/shops/1/products"))
        .withLink(new Link().from("employees","show employees","/shops/1/employees"))
        .withLink(new SelfLink().from("shop","/shops/1"));

    hal.bind(res,halResponse)();


});


app.use('/api/v1', router);

app.listen(port);


module.exports = app;