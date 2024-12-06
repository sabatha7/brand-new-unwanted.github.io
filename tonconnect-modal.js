function openModal() {
    document.getElementById('connect-ton-wallet-modal').style.display = 'flex';
}

function closeModal() {
    document.getElementById('connect-ton-wallet-modal').style.display = 'none';
}

document.getElementById('connect-ton-wallet-button').addEventListener('click', function() {
    // Add logic to connect to the Ton wallet here
    closeModal();
});

if (!localStorage.getItem('oky-local-storage-session-info')) {
    openModal();
}
