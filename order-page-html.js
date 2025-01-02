function updateOrdersTabPanes() {
    const pendingOrdersRadio =  document.querySelector('#pending-orders-radio');
    const completedOrdersRadio =  document.querySelector('#completed-orders-radio');
    const pendingOrdersContent = document.getElementById('order-page-html-tab-content-pending-orders-content');
    const completedOrdersContent = document.getElementById('order-page-html-tab-content-completed-orders-content');
  
    if (pendingOrdersRadio.checked) {
        completedOrdersContent.classList.remove('order-page-html-tab-content-tab-pane-active');
        completedOrdersContent.classList.add('order-page-html-tab-content-tab-pane-inactive');
        pendingOrdersContent.classList.remove('order-page-html-tab-content-tab-pane-inactive');
        pendingOrdersContent.classList.add('order-page-html-tab-content-tab-pane-active');
        document.querySelector('.orders-rows-filter-for-completed-orders').classList.add('disabled-orders-rows-filter');
        document.querySelector('.orders-rows-filter-for-pending-orders').classList.remove('disabled-orders-rows-filter');
    } else if (completedOrdersRadio.checked) {
        pendingOrdersContent.classList.remove('order-page-html-tab-content-tab-pane-active');
        pendingOrdersContent.classList.add('order-page-html-tab-content-tab-pane-inactive');
        completedOrdersContent.classList.remove('order-page-html-tab-content-tab-pane-inactive');
        completedOrdersContent.classList.add('order-page-html-tab-content-tab-pane-active');
        document.querySelector('.orders-rows-filter-for-pending-orders').classList.add('disabled-orders-rows-filter');
        document.querySelector('.orders-rows-filter-for-completed-orders').classList.remove('disabled-orders-rows-filter');
    }
  }
  
  document.querySelectorAll('input[name="orders-tabs-browser-tool"]').forEach(function (radio) {
    radio.addEventListener('change', updateOrdersTabPanes);
  });
