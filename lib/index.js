
var util = require('util');
var errors = require('./errors');
var pascal = require('to-pascal-case');


/**
 * Exports
 */

module.exports = error;


/**
 * Returns a new error with `status` and `message`.
 *
 * @params {Number} status
 * @params {String} message
 * @params {Object} context
 */

function error (status, message, context) {
  var Error = errors[status];
  if (!Error) throw new Error('No error with that status.');
  return new Error(message, context);
}


/**
 * Expose all errors.
 */

for (var key in errors.map) {
  var name = pascal(errors.map[key]);
  error[name] = errors[key];
}