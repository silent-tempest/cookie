/* global describe, it */

'use strict';

var examples = require( './examples.internal' );

describe( "require('cookie')", function () {
  it( 'works', function () {
    require( '..' ).should.be.an( 'object' );
  } );
} );

[ 'serialize', 'parse' ].forEach( function ( name ) {
  describe( "require('cookie/lib/" + name + "')\n  require('cookie')." + name, function () {
    it( 'works', function () {
      require( '../lib/' + name ).should.be.a( 'function' ).equal( require( '..' )[ name ] );
    } );

    it( 'example works', function () {
      examples[ name ]( require( '../lib/' + name ) );
      examples[ name ]( require( '..' )[ name ] );
    } );
  } );
} );
