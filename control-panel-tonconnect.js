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

const peerIds = [
    'ced100c9-eb5d-4d96-9ac4-58d6afaea975', '012fe631-370b-49f6-aab1-f46753b20dbe'
];

const unsubscribe = tonConnectUI.onStatusChange(
    walletAndwalletInfo => {
        // update state/reactive variables to show updates in the ui
        if (tonConnectUI.connected) {
            try {
                //const peerId = tonConnectUI.account.address.slice(-32);
                const peer = new Peer(peerIds[0]);
                peer.on('open', function(id) {
                    console.log('My peer ID is: ' + id);
                });
                peer.on('connection', function(conn) {
                    establishedPeer = true;
                    console.log('connected');
                });
            } catch (error) {
                console.error('Error establishing peer connection:', error);
            }
        }
    }
);
