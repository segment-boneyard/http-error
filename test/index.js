
var assert = require('assert');
var error = require('../lib');

describe('error', function () {

  it('should have a status', function () {
    var err = error(400);
    assert(err.status === 400);
  });

  it('should have a stack trace', function () {
    assert(error(400).stack);
  });

  it('should have a default message', function () {
    var err = error(410);
    assert(err.message === 'Resource Gone');
  });

  it('should have a code', function () {
    var err = error(410);
    assert(err.code === 'Resource Gone');
  });

  it('should have an overrided messge', function () {
    var err = error(410, 'message');
    assert(err.message === 'message');
  });

  it('should have context', function () {
    var err = error(418, 'message', { a: 1 });
    assert.deepEqual(err.context, { a: 1 });
  });

  it('should respond to instanceof', function () {
    var err = error(502);
    assert(err instanceof error.BadGateway);
  });
});

