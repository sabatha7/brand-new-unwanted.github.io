// Create a new PeerJS peer
const peer = new Peer();

const PEER_IDS = {
  '99a979e5e8aca75b848f0533b0490ba7': {
    'timeZone': 'SAST',
    'knockOn': '9h00',
    'knockOff': '16h00'
  }
};

function connectToPeer() {
  for (const peerId of Object.keys(PEER_IDS)) {
    try {
      const conn_ = peer.connect(peerId.repeat(4));
      conn_.on('open', function() {
        console.log('Connected to peer', peerId);
        const customerAddr = tonConnectUI.account.address;
        sendToPeer(conn_, {type: '__Init__', from: tonConnectUI.account.address});
      });
      //return conn_;

    } catch (err) {
      console.log('Error connecting to peer', peerId, err);
    }
  }
  //return false;
}

// Set up event listeners for the peer
peer.on('open', function(id) {
  console.log('My peer ID is: ' + id);

  const conn = connectToPeer();
  //console.log(conn);
});

// Send a message to a peer
const sendToPeer = (conn, message) => {
  if (conn.open) {
    conn.send(message);
  } else {
    console.log('Connection is closed');
  }
};


// Handle incoming messages
peer.on('connection', function(conn) {
  conn.on('data', function(data) {
    if(data.type === '__Init__') {
      console.log('Peer', conn.peer, 'has initialized');
      console.log(data);
      //sendToPeer(conn, {type: '__Init__', from: tonConnectUI.account.address});
    } else if(data.type === '__Message__') {
      console.log('Peer', conn.peer, 'sent message', data.message);
    }
  });
});
