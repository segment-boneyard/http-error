
var assert = require('assert');
var error = require('../lib');

describe('error', function () {

  it('should take a status', function () {
    var err = error(400);
    assert(err.status === 400);
  });

  it('should take a code', function () {
    var err = error(410, 'CODE');
    assert(err.code === 'CODE');
  });

  it('should take a messge', function () {
    var err = error(410, 'CODE', 'message');
    assert(err.message === 'message');
  });

  it('should take a context', function () {
    var err = error(418, 'CODE', 'message', { context: true });
    assert.deepEqual(err.context, { context: true });
  });

  it('should have a default code', function () {
    var err = error(410);
    assert(err.code === '410');
  });

  it('should have a default message', function () {
    var err = error(410);
    assert(err.message === 'Gone');
  });

  it('should have a stack trace', function () {
    assert(error(400).stack);
  });

  it('should respond to instanceof', function () {
    var err = error(502);
    assert(err instanceof error.BadGateway);
  });
});

