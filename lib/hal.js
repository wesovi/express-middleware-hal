(function (exports) {
  'use strict';

  function HalResponse(body) {
    this.links = [];
    this.body = body;

    return {
      body: this.body,
      links: this.links,
      withLink: this.withLink,
      hal: this.hal,
    };
  }

  HalResponse.prototype = new HalResponse();

  HalResponse.prototype.withLink = function (link) {
    this.links.push(link);
    return this;
  };

  HalResponse.prototype.hal = function () {
    const output = this.body;
    output.links = this.links;
    return output;
  };

  exports.HalResponse = HalResponse;
})(this);
