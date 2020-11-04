const { connect } = require('./client');
const { setupInput } = require('./input');

console.log('Connecting ...');
// this is returning the conn obj

setupInput(connect());