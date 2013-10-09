
var pascal = require('to-pascal-case');
var util = require('util');


/**
 * HTTP error map.
 *
 * http://www.w3.org/Protocols/rfc2616/rfc2616-sec10.html
 */

var map = exports.map = {
  400: 'Bad Request',
  401: 'Unauthorized',
  402: 'Payment Required',
  403: 'Forbidden',
  404: 'Not Found',
  405: 'Not Allowed',
  406: 'Not Acceptable',
  407: 'Proxy Authentication Required',
  408: 'Request Timeout',
  409: 'Resource Conflict',
  410: 'Resource Gone',
  411: 'Length Required',
  412: 'Precondition Failed',
  413: 'Request Entity Too Large',
  414: 'Request-URI Too Long',
  415: 'Unsupported Media Type',
  416: 'Requested Range Not Satisfiable',
  417: 'Expectation Failed',
  418: 'I\'m a Teapot',
  420: 'Enhance Your Calm',
  428: 'Precondition Required',
  429: 'Too Many Requests',
  431: 'Request Header Fields Too Large',
  500: 'Internal Server Error',
  501: 'Not Implemented',
  502: 'Bad Gateway',
  503: 'Service Unavailable',
  504: 'Gateway Timeout',
  505: 'HTTP Version Not Supported',
  506: 'Variant Also Negotiates',
  511: 'Network Authentication Required'
};


/**
 * Expose all errors.
 */

for (var key in map) exports[key] = create(key);


/**
 * Generate an constructor for a given `status`.
 *
 * @param {String} status
 * @return {Function}
 */

function create (status) {
  function Constructor (code, message, context) {
    Error.apply(this, arguments);
    Error.captureStackTrace(this, arguments.callee);
    this.status = parseInt(status, 10);
    this.code = code || status;
    this.message = message || map[status];
    this.context = context || {};
  }

  util.inherits(Constructor, Error);
  return Constructor;
}