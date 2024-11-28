function updateOrdersTabPanes() {
    const pendingOrdersRadio =  document.querySelector('#pending-orders-radio');
    const completedOrdersRadio =  document.querySelector('#completed-orders-radio');
    const pendingOrdersContent = document.getElementById('pending-orders-content');
    const completedOrdersContent = document.getElementById('completed-orders-content');
  
    if (pendingOrdersRadio.checked) {
      pendingOrdersContent.classList.add('active');
      completedOrdersContent.classList.remove('active');
    } else if (completedOrdersRadio.checked) {
      pendingOrdersContent.classList.remove('active');
      completedOrdersContent.classList.add('active');
    }
  }
  
  document.querySelectorAll('input[name="orders-tab"]').forEach(function (radio) {
    radio.addEventListener('change', updateOrdersTabPanes);
  });
