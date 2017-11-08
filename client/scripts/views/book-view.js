'use strict';
var app = {};

(function(module) {
  var bookView = {};
  bookView.initIndexPage = function() {
    console.log(bookView.initIndexPage);
    $('.container').hide();
    $('.book-view').show();
    app.Book.all.map(book => $('#book-list').append(book.toHtml()));
  };

  $(document).ready(function() {
    app.Book.fetchAll(bookView.initIndexPage);
  });

  module.bookView = bookView;
})(app);
