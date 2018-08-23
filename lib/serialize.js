'use strict';

var milliseconds = require( 'string-milliseconds' );

/**
 * @memberof module:super-cookie
 * @param {string} key
 * @param {string} value
 * @param {object} options
 * @param {number|string} [options.MaxAge]
 * @param {Date} [options.Expires]
 * @param {boolean} [options.HttpOnly=true]
 * @param {boolean} [options.Secure=true]
 * @param {string} [options.Domain]
 * @param {string} [options.Path]
 * @returns {string}
 * @example
 * serialize( 's_id', session, { Path: '/', MaxAge: '1 hour' } );
 * serialize( 'u_id', session, { Path: '/', MaxAge: 365 * 24 * 60 * 60 } );
 */
function serialize ( key, value, options ) {
  var result = key + '=' + value;
  var MaxAge, Expires;

  if ( typeof options.MaxAge !== 'undefined' || typeof options.Expires !== 'undefined' ) {
    if ( typeof options.MaxAge !== 'undefined' ) {
      MaxAge  = milliseconds( options.MaxAge );
      Expires = new Date( Date.now() + MaxAge );
    } else {
      MaxAge  = options.Expires - Date.now();
      Expires = options.Expires;
    }

    result += '; Expires=' + Expires.toGMTString() + '; Max-Age=' + MaxAge * 0.001;
  }

  if ( typeof options.HttpOnly === 'undefined' || options.HttpOnly ) {
    result += '; HttpOnly';
  }

  if ( typeof options.Secure === 'undefined' || options.Secure ) {
    result += '; Secure';
  }

  if ( typeof options.Domain !== 'undefined' ) {
    result += '; Domain=' + options.Domain;
  }

  if ( typeof options.Path !== 'undefined' ) {
    result += '; Path=' + options.Path;
  }

  return result;
}

module.exports = serialize;
