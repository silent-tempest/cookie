'use strict';

/**
 * @memberof module:super-cookie
 * @param {string} string
 * @returns {object}
 */
function parse ( string ) {

  var pairs = string.split( '; ' );
  var result = {};
  var pair, i, l;

  for ( i = 0, l = pairs.length; i < l; ++i ) {

    pair = pairs[ i ].split( '=' );

    result[ pair[ 0 ] ] = pair[ 1 ] || true;

  }

  return result;

}

module.exports = parse;
