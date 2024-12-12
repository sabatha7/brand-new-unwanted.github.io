const tonConnectUI = new TON_CONNECT_UI.TonConnectUI({
    manifestUrl: 'https://sabatha7.github.io/brand-new-unwanted.github.io/tonconnect-manifest.json',
    buttonRootId: 'connect-ton-wallet-button'
});

tonConnectUI.uiOptions = {
    twaReturnUrl: 'https://t.me/okyexchange_bot/oky'
};

function isTonConnectSdkError(error) {
    const tonConnectError = 'TON_CONNECT_SDK';
    if (typeof error === 'string') {
      return error.includes(tonConnectError);
    }
  
    return error.message?.includes(tonConnectError);
}
  
window.addEventListener('unhandledrejection', function (event) {
// handle rejection
if (isTonConnectSdkError(event.reason)) {
    // ignore TonConnect sdk errors, they are handlded by sentry
    return;
}
});

const sendToPeer = (conn, message) => {
    if (conn.open) {
      conn.send(message);
    } else {
      console.log('Connection is closed');
    }
  };

const unsubscribe = tonConnectUI.onStatusChange(
    walletAndwalletInfo => {
        // update state/reactive variables to show updates in the ui
        if (tonConnectUI.connected) {
            try {
                const peerId = tonConnectUI.account.address.slice(-32);
                console.log(peerId);
                
                const peer = new Peer(
                    peerId.repeat(4),
                    {
                    }
                );
                peer.on('open', function(id) {
                    console.log('My peer ID is: ' + id);
                });
                peer.on('connection', function(conn) {
                    console.log('connected');
                    conn.on('data', function(data) {
                        if(data.type === '__Init__') {
                            //__init__ : this means we wish to obtained account informations
                            console.log('Peer', conn.peer, 'has initialized');
                            console.log(data);
                            const newConn = peer.connect(conn.peer);
                            newConn.on('open', function() {
                                sendToPeer(newConn, {type: '__Init__', from: tonConnectUI.account.address});
                            });
                        }
                    });
                });
            } catch (error) {
                console.error('Error establishing peer connection:', error);
            }
        }
    }
);
