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

function saveP2pNavOptionsToLocalStorage(uniqueIdentifier, obj) {
  localStorage.setItem(`${uniqueIdentifier}-p2p-nav-options`, JSON.stringify(obj));
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

function saveAdsNavOptionsToLocalStorage(uniqueIdentifier, obj) {
  localStorage.setItem(`${uniqueIdentifier}-ads-nav-options`, JSON.stringify(obj));
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

function saveProfileNavOptionsToLocalStorage(uniqueIdentifier, obj) {
  localStorage.setItem(`${uniqueIdentifier}-profile-nav-options`, JSON.stringify(obj));
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

function saveOrdersNavOptionsToLocalStorage(uniqueIdentifier, obj) {
  localStorage.setItem(`${uniqueIdentifier}-orders-nav-options`, JSON.stringify(obj));
}

// todo: add event listen per each and every filters options including configs buttons

document.querySelectorAll('.p2p-nav-option input').forEach(function(input) {
  input.addEventListener('change', function() {
    const checkedOption = document.querySelector('input[name="p2p-nav-option-tab"]:checked');
    const uniqueIdentifier = checkedOption.id;
    
  });
});

document.querySelector('select[name="currency"]').addEventListener('change', function() {
  const selectedCurrency = this.value;
  // Add logic to handle currency option change
  //console.log('Currency option changed to:', selectedCurrency);
});

document.querySelectorAll('.p2p-row-filter select').forEach(function(select) {
  select.addEventListener('change', function() {
    const selectedValue = this.value;
    // Add logic to handle select option change
    // console.log(`${this.name} option changed to:`, selectedValue);
  });
});

document.querySelectorAll('.orders-nav-option input').forEach(function(input) {
  input.addEventListener('change', function() {
    const checkedOption = document.querySelector('input[name="orders-tab"]:checked');
    const uniqueIdentifier = checkedOption.id;
  });
});

document.querySelector('#pending-orders-content select[name="order-type-of-select"]').addEventListener('change', function() {
  const selectedOption = this.value;
  // Add logic to handle order-type-of option change
  // console.log('Order type of option changed to:', selectedOption);
});

document.querySelector('#completed-orders-content select[name="order-type-of-select"]').addEventListener('change', function() {
  const selectedOption = this.value;
  // Add logic to handle order-type-of option change
  // console.log('Order type of option changed to:', selectedOption);
});

document.querySelectorAll('.ads-nav-option input').forEach(function(input) {
  input.addEventListener('change', function() {
    const checkedOption = document.querySelector('input[name="ads-nav-option"]:checked');
    const uniqueIdentifier = checkedOption.id;
    // Add logic to handle top row ads-nav-option change
    // console.log('Top row ads-nav-option changed to:', uniqueIdentifier);
  });
});

document.querySelectorAll('.ads-selection-options select').forEach(function(select) {
  select.addEventListener('change', function() {
    const selectedValue = this.value;
    const selectName = this.name;
    // Add logic to handle select option change
    // console.log(`${selectName} option changed to:`, selectedValue);
  });
});
// todo: refreshing the page should fetch from the server tagging nav option or filter configs

// todo: there should be fall backs or adjustments for failing to fetch data i.e ui ton connect failure