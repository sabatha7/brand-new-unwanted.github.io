document.querySelectorAll('.seller-info-buttons button').forEach(button => {
    button.addEventListener('click', function(event) {
        openModalBuySellModal();
    });
});

document.querySelectorAll('.buyer-info-buttons button').forEach(button => {
    button.addEventListener('click', function(event) {
        openModalBuySellModal();
    });
});

function openModalBuySellModal() {
    document.getElementById('p2p-page-html-buy-sell-modal').style.display = 'flex';
}

function closeModalBuySellModal() {
    document.getElementById('p2p-page-html-buy-sell-modal').style.display = 'none';
}

document.querySelector('.p2p-page-html-buy-sell-modal-back-button button').addEventListener('click', function(event) {
    closeModalBuySellModal();
});

