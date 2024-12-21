document.querySelector('select[name="amount"]').addEventListener('focus', function() {
    const modal = document.querySelector('.modal-amount-option-select');
    modal.style.display = 'flex';
    this.blur();
    document.querySelector('.dynamic-island').style.display = 'none';
  });
  
  function closeModalAmountOptionSelect() {
    document.querySelector('.dynamic-island').style.display = 'flex';
    document.querySelector('.modal-amount-option-select').style.display = 'none';
  }