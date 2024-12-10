function openModal() {
    document.getElementById('connect-ton-wallet-modal').style.display = 'flex';
}

function closeModal() {
    document.getElementById('connect-ton-wallet-modal').style.display = 'none';
}

document.getElementById('close-ton-wallet-connect-button').addEventListener('click', function() {
    // Add logic to connect to the Ton wallet here
    closeModal();
});

if (!localStorage.getItem('oky-local-storage-session-info')) {
    openModal();
}
else {
    const telegramData = JSON.parse(Telegram.WebApp.initData);
    const localStorageData = JSON.parse(localStorage.getItem('oky-local-storage-session-info'));
    const data = {
        ...telegramData,
        ...localStorageData
    };

    if (!tonConnectUI.connected) {
        localStorage.removeItem('oky-local-storage-session-info');
        openModal();
    }
}

const observer = new MutationObserver(function(mutationsList, observer) {
    for (const mutation of mutationsList) {
        if (mutation.type === 'childList' && mutation.target.id === 'connect-ton-wallet-button' && mutation.addedNodes.length > 0) {
            const button = mutation.addedNodes[0];
            button.addEventListener('click', function() {
                closeModal();
            });
        }
    }
});
observer.observe(document.getElementById('connect-ton-wallet-button'), {childList: true});

const unsubscribe = tonConnectUI.onStatusChange(
    walletAndwalletInfo => {
        // update state/reactive variables to show updates in the ui
        if (tonConnectUI.connected) {
            closeModal();
        }
    } 
);
