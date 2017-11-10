'use strict';
var app = app || {};

(function(module) {
  var bookView = {};
  bookView.initIndexPage = function() {
    // console.log(bookView.initIndexPage);
    $('.container').hide();
    $('.book-view').show();
    app.Book.all.map(book => $('#book-list').append(book.toHtml()));
  };

  bookView.initDetailPage = function() {
    console.log('init detail page working');
    $('.container').hide();
    $('.detail-view').show();
    // bookView.map(book => $('#detail-view').append(book.toHtml()));
  };


  $(document).ready(function() {
    app.Book.fetchAll(bookView.initIndexPage);
  });

  $('section').on('click', '.details', function() {
    app.Book.fetchOne(bookView.initDetailPage);
  });

  bookView.initCreateFormPage = function() {
    console.log('initCreateFormPage');
    bookView.resetView();
    $('.add-view').show();
    $('#add-form').on('submit', function(event) {
      console.log('clicked!');
      event.preventDefault();

      let book = {
        author: event.target.author.value,
        title: event.target.title.value, // repeat for all attributes
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
