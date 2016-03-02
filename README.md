# express-middleware-readme.md

Express middleware which allows you implement  hypermedia REST api easily

[![Build Status](https://travis-ci.org/wesovi/express-middleware-hypermedia/builds)](https://travis-ci.org/wesovi/express-middleware-hypermedia/builds)

## Usage 

### Default Options 

```javaScript
app.use(require('express-middleware-readme.md').run)
```

This will expose your README.md at the the path '/readme.md'.

### Set options

```javaScript
var readme = require('express-middleware-readme.md')
readme.setOptions({
    endpoint: [ '/readme.md', '/README.html' ],
    htmlWrap: {
        scripts: '/js/main.js',
        styles: '/css/style.css',
        meta: [
            { charset: 'utf-8' }
        ],
        title: 'This is my github README.md'
    }
})
app.use(readme.run)
```

Notes: 

* Each of 'endpoint', 'scripts', and 'styles' can be string values or arrays
* An empty object as 'htmlWrap' results in just doctype, html, head, and body tags added
* 'meta' can be made up of 'content', 'charset', 'http-equiv', and 'name' attributes
* 'filename' is the location of your README.md relative to project root (defaults to ./README.md)
* 'endpoint' defaults to '/readme.html'

## License

Apache 2.0, please let me know if this doesn't suit :-)

## To-do

Add tests, all code is crap without.

This will be a good little project for me to translate my unit testing skills over to node.js/javascript.


[![Bitdeli Badge](https://d2weczhvl823v0.cloudfront.net/lloydwatkin/express-middleware-readme.md/trend.png)](https://bitdeli.com/free "Bitdeli Badge")
