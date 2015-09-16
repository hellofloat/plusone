'use strict';

var plusone = require( '../index.js' );
var test = require( 'tape' );

test( 'increments 0', function( t ) {
    t.equals( plusone( 0 ), 1 );
    t.end();
} );

test( 'increments a positive integer', function( t ) {
    t.equal( plusone( 10 ), 11 );
    t.end();
} );

test( 'increments a negative integer', function( t ) {
    t.equal( plusone( -10 ), -9 );
    t.end();
} );

test( 'increments a null value to 1', function( t ) {
    t.equal( plusone( null ), 1 );
    t.end();
} );

test( 'increments an undefined value to 1', function( t ) {
    t.equal( plusone( undefined ), 1 );
    t.end();
} );

test( 'increments an undefined value to 1', function( t ) {
    t.equal( plusone( undefined ), 1 );
    t.end();
} );

test( 'does not increment an object', function( t ) {
    t.deepEqual( plusone( { foo: true } ), { foo: true } );
    t.end();
} );

test( 'does not increment an array', function( t ) {
    t.deepEqual( plusone( [ 1, 2, 3 ] ), [ 1, 2, 3 ] );
    t.end();
} );
