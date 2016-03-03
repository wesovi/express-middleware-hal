(function (exports) {
  'use strict';

  function Link() {
    this.withTitle = function (title) {
      this.title = title;
      return this;
    };

    this.withHref = function (href) {
      this.href = href;
      return this;
    };

    this.withRel = function (rel) {
      this.rel = rel;
      return this;
    };

    this._relElement = function () {
      return {
        title: this.title,
        href: this.href,
      };
    };

    this.build = function () {
      const data = Object.create(null);
      data[this.rel] = this._relElement();
      return data;
    };
  }

  function SelfLink() {
    Link.call(this);
  }

  SelfLink.prototype = Object.create(Link.prototype);

  Link.prototype.from = function (rel, title, href) {
    return this.withRel(rel).withTitle(title).withHref(href).build();
  };

  SelfLink.prototype.from = function (title, href) {
    return this.withRel('self').withTitle(title).withHref(href).build();
  };

  exports.Link = Link;
  exports.SelfLink = SelfLink;
})(this);
