'use strict'

var HalResponse = require('./lib/hal').HalResponse;
var Link = require('./lib/link').Link;
var SelfLink = require('./lib/link').SelfLink;


exports = module.exports = function(body,links){

    var halMediaType= 'application/hal+json';


    function addHeader(res){
        res.header('content-type',halMediaType);
    }

    function buildJson(body){
        var response = new HalResponse(body);
        response
            .withLink(new Link().from("other","demo","/person/1"))
            .withLink(new Link().from("people","next","/person/2"))
            .withLink(new SelfLink().from("next","/person/2"))
        return response;
    }

    addHeader(this);
    var response = buildJson(buildJson(body));
    this.json(response);

}


