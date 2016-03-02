;;(function(exports) {

    "use strict"

    var halMediaType = 'application/hal+json';

    exports.middleware = function (halResponse) {
        function mediaType(res) {
            res.header('content-type', halMediaType);
        }

        mediaType(this);
        this.json(halResponse.hal());
    }

    exports.HalResponse = require('./lib/hal').HalResponse;
    exports.Link = require('./lib/link').Link;
    exports.SelfLink = require('./lib/link').SelfLink;

})(this);