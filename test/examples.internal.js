'use strict';

var examples = {
  serialize: function serialize ( serialize )
  {
    serialize( 'theme', 'light', { Path: '/', MaxAge: 'year', HttpOnly: false } ).should.match( /^theme=light; Expires=[a-z]+, \d\d [a-z]+ \d+ \d\d:\d\d:\d\d GMT; Max-Age=\d+; Secure; Path=\/$/i );
  },

  parse: function parse ( parse )
  {
    parse( 'theme=light; something' ).should.deep.equal( { theme: 'light', something: true } );
  }
};

module.exports = examples;
