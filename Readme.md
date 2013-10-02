# http-error

Creates common **node**  HTTP errors, useful with `express.js`.

## Example

```javascript
var error = require('http-error');

function middleware (req, res, next) {
  if (!req.body) return next(error(400, 'No body specified'));
  // ..
}
```

```javascript
error(502) instanceof error.BadGateway;
// true
```

## API

### error(status, message, context)

Returns a new error with a `status` and optional `message` and `context`.

### error[Name]

Returns an `error` constructor thats associated with that HTTP status.

## License

(The MIT License)

Copyright (c) 2013 segmentio &lt;friends@segment.io&gt;

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the 'Software'), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.