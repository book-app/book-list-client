'use strict';
var app = app || {};

(function(module) {

  var bookView = {};

  bookView.initIndexPage = function() {
    bookView.resetView();
    $('.book-view').show();
    app.Book.all.map(book => $('#book-list').append(book.toHtml()));
  };

  bookView.initDetailPage = function() {
    bookView.resetView();
    $('.detail-view').show();
    $('.detail-view').empty();
    let template = Handlebars.compile($('$detail-view').text());
    $('.detail-view').append(tempalte(ctx));

  };


  $(document).ready(function() {
    app.Book.fetchAll(bookView.initIndexPage);
  });

  $('.book-view').on('click', '.details-button', function(event) {
    app.Book.fetchOne(ctx, bookView.initDetailPage);
  });

  bookView.initCreateFormPage = function() {
    bookView.resetView();
    $('.add-view').show();
    $('#add-form').on('submit', function(event) {
      event.preventDefault();

      let book = {
        author: event.target.author.value,
        title: event.target.title.value,
        isbn: event.target.isbn.value,
        image_url: event.target.image_url.value,
        description: event.target.description.value
      };

      module.Book.create(book);
    })
  }

  bookView.resetView = function() {
    $('.container').hide();
  };

  bookView.handleAddBook = function() {
    $('nav').on('click', '.add', bookView.initCreateFormPage());
  };

  module.bookView = bookView;
})(app);
