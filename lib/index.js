
var util = require('util');
var errors = require('./errors');
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

for (var key in errors.map) {
  var name = pascal(errors.map[key]);
  error[name] = errors[key];
}