![plusone](/plusone.jpg?raw=true)

plusone
=========

plusone is a simple function that will return the increment of a value. What makes it special?
It will increment undefined to be 1 (null already increments to 1 just fine).

Why would you need that? Because of this:

```javascript
var obj = {};

obj.foo = obj.foo + 1; // this results in undefined + 1 === NaN

obj.count = plusone( obj.count ); // this results in 1, as we hoped

```

## Installation

```
npm install plusone --save
```

## Usage

```
var plusone = require( 'plusone' );

var i = 0;
i = plusone( i );

var obj = {};
obj.count = plusone( obj.count );
```

## Contributing

Pull requests are very welcome! Just make sure your code:

1) Passes jshint given the included .jshintrc

2) Is beautified using jsbeautifier and the included .jsbeautifyrc

3) Has tests and passes them.

# CHANGELOG

0.0.1
------
- Initial release.
