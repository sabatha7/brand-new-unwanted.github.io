function updateTabPanes() {
  const buyOfferListRadio =  document.querySelector('#buy-market-opt');
  const sellOfferListRadio =  document.querySelector('#sell-market-opt');
  const buyOfferListContent = document.getElementById('buy-offer-list-content');
  const sellOfferListContent = document.getElementById('sell-offer-list-content');

  if (buyOfferListRadio.checked) {
    buyOfferListContent.classList.remove('inactive-hidden');
    sellOfferListContent.classList.add('inactive-hidden');
  } else if (sellOfferListRadio.checked) {
    buyOfferListContent.classList.add('inactive-hidden');
    sellOfferListContent.classList.remove('inactive-hidden');
  }
}

document.querySelectorAll('input[name="p2p-nav-option-tab"]').forEach(function (radio) {
  radio.addEventListener('change', updateTabPanes);
});