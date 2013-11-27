
var codes = require('http').STATUS_CODES;
var util = require('util');


/**
 * Expose all errors.
 */

for (var key in codes) exports[key] = create(key, codes[key]);


/**
 * Generate an constructor for a given `status`.
 *
 * @param {String} status
 * @param {String} description
 * @return {Function}
 */

function create (status, description) {
  function Constructor (code, message, context) {
    Error.apply(this, arguments);
    Error.captureStackTrace(this, arguments.callee);
    this.status = parseInt(status, 10);
    this.code = code || status;
    this.message = message || description;
    this.context = context || {};
  }

  util.inherits(Constructor, Error);
  return Constructor;
}