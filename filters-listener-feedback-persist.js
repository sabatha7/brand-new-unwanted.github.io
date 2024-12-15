document.querySelector('select[name="amount"]').addEventListener('focus', function() {
  const modal = document.querySelector('.modal-amount-option-select');
  modal.style.display = 'flex';
  this.blur();
});

function closeModalAmountOptionSelect() {
  document.querySelector('.modal-amount-option-select').style.display = 'none';
}

const p2pNavOptionsDefault = {
  'login': 'n/a',
  'buy-sell-market-opt': 'sell',
  'currency-opt': 'usd',
  'row-filter': {
    'outlet': 'usdt',
    'amount': 'n/a',
    'delivery-method': 'n/a'
  }
};

function isEqualToP2pNavOptionsDefault(obj) {
  return JSON.stringify(obj) === JSON.stringify(p2pNavOptionsDefault);
}

function fetchP2pNavOptionsFromLocalStorage(uniqueIdentifier) {
  const localStorageData = localStorage.getItem(`${uniqueIdentifier}-p2p-nav-options`);
  if (localStorageData) {
    return JSON.parse(localStorageData);
  } else {
    return p2pNavOptionsDefault;
  }
}


const adsNavOptionsDefault = {
  'login': 'n/a',
  'ads-ad-type-option': 'n/a',
  'ads-ad-activity-status-option': 'n/a'
};

function isEqualToAdsNavOptionsDefault(obj) {
  return JSON.stringify(obj) === JSON.stringify(adsNavOptionsDefault);
}

function fetchAdsNavOptionsFromLocalStorage(uniqueIdentifier) {
  const localStorageData = localStorage.getItem(`${uniqueIdentifier}-ads-nav-options`);
  if (localStorageData) {
    return JSON.parse(localStorageData);
  } else {
    return adsNavOptionsDefault;
  }
}

const profileNavOptionsDefault = {
  'login': 'n/a'
};

function isEqualToProfileNavOptionsDefault(obj) {
  return JSON.stringify(obj) === JSON.stringify(profileNavOptionsDefault);
}

function fetchProfileNavOptionsFromLocalStorage(uniqueIdentifier) {
  const localStorageData = localStorage.getItem(`${uniqueIdentifier}-profile-nav-options`);
  if (localStorageData) {
    return JSON.parse(localStorageData);
  } else {
    return profileNavOptionsDefault;
  }
}

const ordersNavOptionsDefault = {
  'login': 'n/a',
  'pending-completed-orders-tab': 'n/a',
  'in-progress-in-dispute-fulfiled-canceled': 'n/a'
};

function isEqualToOrdersNavOptionsDefault(obj) {
  return JSON.stringify(obj) === JSON.stringify(ordersNavOptionsDefault);
}

function fetchOrdersNavOptionsFromLocalStorage(uniqueIdentifier) {
  const localStorageData = localStorage.getItem(`${uniqueIdentifier}-orders-nav-options`);
  if (localStorageData) {
    return JSON.parse(localStorageData);
  } else {
    return ordersNavOptionsDefault;
  }
}