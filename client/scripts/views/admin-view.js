'use strict';

//insert upper admin functionality here
adminView.initAdminPage = function (ctx, next) {
  //slide up
  //show
  $('#admin-form').on('submit', function(event) {
    event.preventDefault();
    let token = event.targer.passphrase.value;

    $.get(`${api}/api/v1/admin`, {token})
    .then(res => {
      localStorage.setItem('token', res);
      page('/');
    })
    .catch(() => page('/'));
  })
}//closing curely

//this part is ok.

adminView.verify = function(ctx, next) {
  //danger, LS stores as string so "false" becomes true
  const storedToken = JSON.parse(localStorage.getItem('token'));

  if (!storedToken) {
    $('.admin').addClass('admin-only');
  } else {
    $('.admin').show();
  }
  next();
}
