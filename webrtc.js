import Peer from 'peerjs';

// Create a new Peer instance with a random ID
const peer = new Peer();

// Listen for the 'open' event which indicates the peer connection is ready
peer.on('open', (id) => {

});

// Listen for incoming connections
peer.on('connection', (conn) => {
  console.log('Connection established with: ' + conn.peer);

  // Listen for data received from the connected peer
  conn.on('data', (data) => {

  });


});

// Connect to another peer using their ID
const conn = peer.connect('another-peer-id'); // Replace 'another-peer-id' with the actual peer ID

// Listen for the connection open event
conn.on('open', () => {

});

// Send a JSON object to the connected peer
const sendJsonToPeer = (conn, obj) => {
  conn.send(JSON.stringify(obj));
};
