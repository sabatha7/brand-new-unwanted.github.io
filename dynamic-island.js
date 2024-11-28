document.querySelectorAll('.wrap-page:not(.wrap-p2p-page)').forEach(function (page) {
  page.classList.add('wrap-page-hidden');
});

document.querySelectorAll('.dynamic-island button').forEach(function (button) {
  button.addEventListener('click', function() {
    const targetPageClass = '.wrap-' + button.id + '-page';

    document.querySelectorAll('.wrap-page').forEach(function (page) {

      if (page.matches(targetPageClass)) {
        page.classList.remove('wrap-page-hidden');
        if (!page.matches('.wrap-p2p-page, .wrap-orders-page')) {
          page.querySelectorAll('.tab-content .tab-pane')[0].classList.add('active'); 
        }
      } else {
        page.classList.add('wrap-page-hidden');
        if (!page.matches('.wrap-p2p-page, .wrap-orders-page')) {
          page.querySelectorAll('.tab-content .tab-pane')[0].classList.add('active'); 

        }
      }
    });
  });
});

