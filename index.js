'use strict';

module.exports = function( val ) {
    return typeof val === 'number' ? val + 1 : val === null || val === undefined ? 1 : val;
};
