const { connect } = require('./play');

let connection;

const setupInput = function(conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  stdin.on('data', handleUserInput);
  return stdin;
};

const handleUserInput = function(key) {
  if (key === '\u0003') {
    process.exit();
  }
  //key code for w '87'
  if (key === "w") {
    connection.write("Move: up");
  }
  // a '65'
  if (key === 'a') {
    connection.write("Move: left");
  }
  // s
  if (key === 's') {
    connection.write("Move: down");
  }
  // d '68'
  if (key === 'd') {
    connection.write("Move: right");;
  }
};

module.exports = { setupInput };