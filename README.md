# express-middleware-hypermedia

Express middleware which allows you implement  hypermedia REST api easily

[![Build Status](https://travis-ci.org/wesovi/express-middleware-hypermedia/builds)](https://travis-ci.org/wesovi/express-middleware-hypermedia/builds)

## Usage 

### Default Options 

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

## License

Apache 2.0

## To-do


This will be a good little project for me to start coding some utilities in node.js/javascript.

