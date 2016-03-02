;;(function(exports){

    "use strict"

    var Link = require('./link').Link;
    var SelfLink = require('./link').SelfLink;


    function HalResponse(body){
        this._links = [];
        this.body = body;

        return {
            body : this.body,
            _links : this._links,
            withLink : this.withLink,
            hal: this.hal
        };
    }

    HalResponse.prototype = new HalResponse();

    HalResponse.prototype.withLink = function(link){
        this._links.push(link);
        return this;
    }

    HalResponse.prototype.hal = function(){
        var output = this.body;
        output['_links'] = this._links;
        return output;
    }

    exports.HalResponse = HalResponse;

})(this);