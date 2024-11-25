// Toggle the nav tab
document.querySelectorAll('.nav-tabs input[type="radio"]').forEach(function (tab) {
  tab.addEventListener('change', function () {
    document.querySelectorAll('.tab-pane').forEach(function (pane) {
      pane.classList.remove('active');
    });
    document.getElementById(tab.id + '-content').classList.add('active');
  });
});
