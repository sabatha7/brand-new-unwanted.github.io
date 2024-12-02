  document.querySelectorAll('.ads-nav-option input').forEach(function (radio) {
    radio.addEventListener('change', function () {
      const adsStatusDivs = document.querySelectorAll('.ads-status-info');
      adsStatusDivs.forEach(function (div) {
        if (radio.checked) {
          if (radio.id === 'ads-status-online') {
            adsStatusDivs[1].classList.add('ads-status-info-inactive');
            adsStatusDivs[0].classList.remove('ads-status-info-inactive');

            document.querySelector('.ads-nav-option').classList.remove('ads-nav-option-non-available');
          } else if (radio.id === 'ads-status-offline') {
            adsStatusDivs[0].classList.add('ads-status-info-inactive');
            adsStatusDivs[1].classList.remove('ads-status-info-inactive');

            document.querySelector('.ads-nav-option').classList.add('ads-nav-option-non-available');
          }
        }
      });
    });
  });
