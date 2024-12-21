document.querySelector('select[name="amount"]').addEventListener('focus', function() {
    const modal = document.querySelector('.modal-amount-option-select');
    modal.style.display = 'flex';
    this.blur();
  });
  
  function closeModalAmountOptionSelect() {
    document.querySelector('.modal-amount-option-select').style.display = 'none';
  }