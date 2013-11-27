
var util = require('util');
var errors = require('./errors');
var codes = require('http').STATUS_CODES;
var pascal = require('to-pascal-case');


/**
 * Exports
 */

module.exports = error;


/**
 * Returns a new error with `status`, `code` and `message`, and
 * optional `context`.
 *
 * @param {Number} status
 * @param {String} code
 * @param {String} message
 * @param {Object} context (optional)
 */

function error (status, code, message, context) {
  var Error = errors[status];
  if (!Error) throw new Error('No error with that status.');
  return new Error(code, message, context);
}


/**
 * Expose all errors.
 */

for (var key in codes) {
  var name = pascal(codes[key]);
  error[name] = errors[key];
}