'use strict';
var app = app || {};

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

  bookView.initCreateFormPage = function() {
    console.log('initCreateFormPage');
    resetView();
    $('.create-view').show();
    $('#create-form').on('submit', function(event) {
      event.preventDefault();

      let book = {
        title: event.target.title.value, // repeat for all attributes
        author: event.target.author.value,
        ibsn: event.target.ibsn.value,
        image_url: event.target.image_url.value,
        description: event.target.description.value
      };

      module.Book.create(book);
    })
  }


  module.bookView = bookView;
})(app);
