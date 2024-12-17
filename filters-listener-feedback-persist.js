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

function doUpdateP2pPage(){
  let p2pNavOptions = {
    'login': tonConnectUI.account.address,
    'buy-sell-market-opt': document.querySelector('input[name="p2p-nav-option-tab"]:checked').id,
    'currency-opt': document.querySelector('select[name="currency"]').value,
    'row-filter': {
      'outlet': document.querySelector('select[name="outlet"]').value,
      'amount': document.querySelector('select[name="amount"]').value,
      'delivery-method': document.querySelector('select[name="delivery-method"]').value
    }
  };
  saveP2pNavOptionsToLocalStorage(tonConnectUI.account.address, p2pNavOptions);
  p2pNavOptions = {
    'login': tonConnectUI.account.address,
    'buy-sell-market-opt': document.querySelector('input[name="p2p-nav-option-tab"]:checked').id.split('-')[0],
    'currency-opt': document.querySelector('select[name="currency"]').value,
    'row-filter': {
      'outlet': document.querySelector('select[name="outlet"]').value,
      'amount': document.querySelector('select[name="amount"]').value,
      'delivery-method': document.querySelector('select[name="delivery-method"]').value
    },
    'request-type': 'p2p',
    'page': 'wrap-p2p'
  };
  const peerOnEvent = connectToPeerWithArgs(fetchP2pNavOptionsFromLocalStorage(p2pNavOptions));

}

document.querySelectorAll('.p2p-nav-option input').forEach(function(input) {
  input.addEventListener('change', function() {
    const checkedOption = document.querySelector('input[name="p2p-nav-option-tab"]:checked');
    const uniqueIdentifier = checkedOption.id;
    doUpdateP2pPage();
  });
});

document.querySelector('select[name="currency"]').addEventListener('change', function() {
  const selectedCurrency = this.value;
  doUpdateP2pPage();
});

document.getElementById('modal-amount-option-select-enter-button').addEventListener('click', function() {
  const amountOptionSelect = document.getElementById('amount-option-select');
  if (amountOptionSelect.value) {
    const selectAmount = document.querySelector('select[name="amount"]');

    const firstOption = selectAmount.options[0];

    firstOption.value = amountOptionSelect.value;
    firstOption.innerHTML = amountOptionSelect.value;
  }
});


document.querySelectorAll('.p2p-row-filter select').forEach(function(select) {
  select.addEventListener('change', function() {
    const selectedValue = this.value;
    doUpdateP2pPage();
  });
});

function doUpdateOrdersPage() {
  let ordersNavOptions = {
    'login': tonConnectUI.account.address,
    'pending-completed-orders-tab': document.querySelector('input[name="orders-tab"]:checked').id,
    'in-progress-in-dispute-fulfiled-canceled': document.querySelector('#pending-orders-content select[name="order-type-of-select"]').value
  };
  saveOrdersNavOptionsToLocalStorage(tonConnectUI.account.address, ordersNavOptions);

  ordersNavOptions = {
    'login': tonConnectUI.account.address,
    'pending-completed-orders-tab': document.querySelector('input[name="orders-tab"]:checked').id,
    'in-progress-in-dispute-fulfiled-canceled': document.querySelector('#pending-orders-content select[name="order-type-of-select"]').value,
    'request-type': 'orders',
    'page': 'wrap-orders'
  };

  const peerOnEvent = connectToPeerWithArgs(fetchOrdersNavOptionsFromLocalStorage(ordersNavOptions));
}

document.querySelectorAll('.orders-nav-option input').forEach(function(input) {
  input.addEventListener('change', function() {
    const checkedOption = document.querySelector('input[name="orders-tab"]:checked');
    const uniqueIdentifier = checkedOption.id;
    doUpdateOrdersPage();
  });
});

document.querySelector('#pending-orders-content select[name="order-type-of-select"]').addEventListener('change', function() {
  const selectedOption = this.value;
  doUpdateOrdersPage();
});

document.querySelector('#completed-orders-content select[name="order-type-of-select"]').addEventListener('change', function() {
  const selectedOption = this.value;
  doUpdateOrdersPage();
});

function doUpdateAdsPage() {
  let adsNavOptions = {
    'login': tonConnectUI.account.address,
    'ads-ad-type-option': document.querySelector('#ads-existing-content select[name="ads-ad-type-option"]').value,
    'ads-ads-activity-status-option': document.querySelector('#ads-existing-content select[name="ads-ads-activity-status-option"]').value
  };
  saveAdsNavOptionsToLocalStorage(tonConnectUI.account.address, adsNavOptions);

  adsNavOptions = {
    'login': tonConnectUI.account.address,
    'ads-ad-type-option': document.querySelector('#ads-existing-content select[name="ads-ad-type-option"]').value,
    'ads-ads-activity-status-option': document.querySelector('#ads-existing-content select[name="ads-ads-activity-status-option"]').value,
    'request-type': 'ads',
    'page': 'wrap-ads'
  };
  const peerOnEvent = connectToPeerWithArgs(fetchAdsNavOptionsFromLocalStorage(adsNavOptions));
}

document.querySelectorAll('.ads-nav-option input').forEach(function(input) {
  input.addEventListener('change', function() {
    const checkedOption = document.querySelector('input[name="ads-nav-option"]:checked');
    const uniqueIdentifier = checkedOption.id;
    doUpdateAdsPage();
  });
});

document.querySelectorAll('.ads-selection-options select').forEach(function(select) {
  select.addEventListener('change', function() {
    const selectedValue = this.value;
    const selectName = this.name;
    doUpdateAdsPage();
  });
});

// todo: refreshing the page should fetch from the server tagging nav option or filter configs


function appendBuyerInfo(buyerInfo) {
  const buyerList = document.querySelector('.buyer-list');
  if (!buyerList) return;

  const li = document.createElement('li');
  li.innerHTML = `
    <div class="buyer-info">
      <h3>${buyerInfo.name}</h3>
      <small>${buyerInfo.transactions} transactions · ${buyerInfo.completionRate}% completion rate · ${buyerInfo.goodRating}% good rating</small>
      <div class="buyer-info-details">
        <div class="buyer-info-inc-filters-and-amount">
          <small>${buyerInfo.outlet}</small>
          <p>Available <strong>${buyerInfo.amount}</strong></p>
          <p class="info-delivery-method">${buyerInfo.deliveryMethod}</p>
        </div>
        <div class="buyer-info-buttons">
          <div>
            <button>${buyerInfo.buttonText}</button>
          </div>
        </div>
      </div>
    </div>
  `;
  buyerList.appendChild(li);
}

function appendSellerInfo(sellerInfo) {
  const sellerList = document.querySelector('.seller-list');
  if (!sellerList) return;

  const li = document.createElement('li');
  li.innerHTML = `
    <div class="seller-info">
      <h3>${sellerInfo.name}</h3>
      <small>${sellerInfo.transactions} transactions · ${sellerInfo.completionRate}% completion rate · ${sellerInfo.goodRating}% good rating</small>
      <div class="seller-info-details">
        <div class="seller-info-inc-filters-and-amount">
          <small>${sellerInfo.outlet}</small>
          <p>Available <strong>${sellerInfo.amount}</strong></p>
          <p class="info-delivery-method">${sellerInfo.deliveryMethod}</p>
        </div>
        <div class="seller-info-buttons">
          <div>
            <button>${sellerInfo.buttonText}</button>
          </div>
        </div>
      </div>
    </div>
  `;
  sellerList.appendChild(li);
}

function appendAdsInfo(adsInfo) {
  const adsList = document.querySelector('.ads-list');
  if (!adsList) return;

  const li = document.createElement('li');
  li.innerHTML = `
    <div class="ads-info">
      <h3>${adsInfo.title}</h3>
      <small>${adsInfo.description}</small>
      <div class="ads-info-details">
        <div class="ads-info-inc-filters-and-amount">
          <p>Available <strong>${adsInfo.amount}</strong></p>
          <p class="info-delivery-method">${adsInfo.deliveryMethod}</p>
        </div>
        <div class="ads-info-buttons">
          <div>
            <button class="ads-info-active-indicator">${adsInfo.status === 'active' ? '· Active' : '· Inactive'}</button>
            <button>Edit</button>
          </div>
        </div>
      </div>
    </div>
  `;
  adsList.appendChild(li);
}

function appendChatInfo(chatInfo) {
  const chatList = document.querySelector('.chat-content-list');
  if (!chatList) return;

  const li = document.createElement('li');
  li.innerHTML = `
    <div class="chat-info">
      <div class="profile-picture-wrapper">
        <img class="profile-picture" src="${chatInfo.picture}" alt="profile picture">
      </div>
      <div class="chat-info-chat-details">
        <h3>${chatInfo.name}</h3>
        <small>${chatInfo.email}</small>
        <p>${chatInfo.message}</p>
      </div>
    </div>
  `;
  chatList.appendChild(li);
}

function appendProfileInfo(info1, info2, info3, info4) {
  const profileList = document.querySelector('.profile-content-list');
  if (!profileList) return;

  const li1 = document.createElement('li');
  li1.innerHTML = `
    <div class="profile-info">
      <h3>${info1.title}</h3>
      <small>${info1.description}</small>
    </div>
  `;
  profileList.appendChild(li1);

  const li2 = document.createElement('li');
  li2.innerHTML = `
    <div class="profile-info">
      <h3>${info2.title}</h3>
      <small>${info2.description}</small>
    </div>
  `;
  profileList.appendChild(li2);

  const li3 = document.createElement('li');
  li3.innerHTML = `
    <div class="profile-info">
      <h3>${info3.title}</h3>
      <small>${info3.description}</small>
    </div>
  `;
  profileList.appendChild(li3);

  const li4 = document.createElement('li');
  li4.innerHTML = `
    <div class="profile-info">
      <h3>${info4.title}</h3>
      <small>${info4.description}</small>
    </div>
  `;
  profileList.appendChild(li4);
}

function appendOrderInfo(orderInfo, orderListClass) {
  const orderList = document.querySelector(orderListClass);
  if (!orderList) return;

  const li = document.createElement('li');
  li.innerHTML = `
    <div class="order-info">
      <div class="order-header">
        <div class="order-title-container">
          <div class="order-title">${orderInfo.title}</div>
        </div>
        <div class="order-status-container">
          <div class="order-status">${orderInfo.status}</div>
        </div>
      </div>
      <small>${orderInfo.date}</small>
      <div class="order-details">
        <div class="order-quantity">
          <small>Quantity ${orderInfo.quantity}</small>
        </div>
        <div class="order-price">
          <small>${orderInfo.price}</small>
        </div>
      </div>
      <div class="order-chat-container">
        <div class="order-chat-info">
          <small>${orderInfo.email}</small>
        </div>
        <div class="order-chat-button">
          <button>chat</button>
        </div>
      </div>
    </div>
  `;
  orderList.appendChild(li);
}
