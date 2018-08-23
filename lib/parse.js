'use strict';

/**
 * @memberof module:super-cookie
 * @param {string} string
 * @returns {object}
 */
function parse ( string ) {

  let pairs = string.split( '; ' );
  let result = {};

  for ( let i = 0, l = pairs.length; i < l; ++i ) {

    let pair = pairs[ i ].split( '=' );

    result[ pair[ 0 ] ] = pair[ 1 ] || true;

  }

  return result;

}

module.exports = parse;
