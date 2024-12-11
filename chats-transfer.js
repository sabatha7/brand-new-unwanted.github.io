// Create a new PeerJS peer
const peer = new Peer();

const PEER_IDS = {
  'ced100c9-eb5d-4d96-9ac4-58d6afaea975': {
    'timeZone': 'SAST',
    'knockOn': '9h00',
    'knockOff': '16h00'
  }
};

function connectToPeer() {
  for (const peerId of Object.keys(PEER_IDS)) {
    try {
      const conn_ = peer.connect(peerId);
      conn_.on('open', function() {
        console.log('Connected to peer', peerId);
        return conn_;
      });

    } catch (err) {
      console.log('Error connecting to peer', peerId, err);
    }
  }
}

const conn = connectToPeer();

if(!conn) {
  console.log('nothing connection');
}

// Set up event listeners for the peer
peer.on('open', function(id) {
  console.log('My peer ID is: ' + id);
});

// Handle incoming connections
peer.on('connection', function(conn) {
  conn.on('data', function(data) {
    console.log('Received', data);
  });

  conn.on('open', function() {
    conn.send('Hello!');
  });
});

// Send a message to a peer
const sendToPeer = (conn, message) => {
  if (conn.open) {
    conn.send(message);
  } else {
    console.log('Connection is closed');
  }
};
