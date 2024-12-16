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

// todo: we could attempt to edit the tonconnectui var itself when moving it from const to a regular var or a let then we could have a ton connect button on the profile section

