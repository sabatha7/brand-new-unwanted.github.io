const tonConnectUI = new TON_CONNECT_UI.TonConnectUI({
    manifestUrl: 'https://github.com/sabatha7/brand-new-unwanted.github.io/blob/main/tonconnect-manifest.json',
    buttonRootId: 'connect-ton-wallet-button'
});

window.addEventListener('ton-connect-ui-connection-completed', (event) => {
    console.log('connected');
});

tonConnectUI.uiOptions = {
    twaReturnUrl: 'https://t.me/okyexchange_bot/oky'
};
