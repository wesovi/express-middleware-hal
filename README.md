# express-middleware-hypermedia

Express middleware which allows you implement  hypermedia REST api easily

[![Build Status](https://travis-ci.org/wesovi/express-middleware-hypermedia.svg?branch=master)](https://travis-ci.org/wesovi/express-middleware-hypermedia)


## Usage 

```javaScript
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
```

Above we can find an example of how we can build the body response


## Links
- **Documentation** [github.com](http://www.wesovi.com/express-middleware-hypermedia/)
- **Build status** [travis-ci.org](https://travis-ci.org/wesovi/express-middleware-hypermedia/builds)]
- **Source code** [github.com](https://github.com/wesovi/express-middleware-hypermedia.git)]
- **Bugs** [github.com](https://github.com/wesovi/express-middleware-hypermedia/issues)]
- **npmjs** [npmnjs.org](https://www.npmjs.com/package/express-middleware-hypermedia)

## License

Apache 2.0

## To-do

This will be a good little project for me to start coding some utilities in node.js/javascript.


## Contributors

**Iván Corrales Solera** <developer@wesovi.com>