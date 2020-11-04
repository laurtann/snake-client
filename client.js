const net = require('net');

/**
 * Establishes connection with the game server
 */
const connect = function() {
  const conn = net.createConnection({ 
    host: '135.23.222.131',
    port: 50542
  });
  // interpret incoming data as text
  conn.setEncoding('utf8'); 
  conn.on('connect', () => console.log("Successfully connected to game server"))
  conn.on('connect', () => conn.write("Name: LNT"))
  conn.on('connect', () => {
    conn.write("Say: snacks");
  });
  conn.on('data', (data) => {
    console.log('Server says: ', data);
  })
 


  // let interval = setInterval(() => conn.write("Move: up"), 50)
  // setTimeout(() => clearInterval(interval), 150);
  // conn.on('connect', () => setInterval(() => interval))
  
  // conn.on('connect', () => setTimeout(() => conn.write("Move: up"), 50))
  // conn.on('connect', () => setTimeout(() => conn.write("Move: up"), 50))

  return conn;
}

module.exports = { connect };