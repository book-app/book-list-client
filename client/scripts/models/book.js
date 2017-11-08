'use strict';
var app = app || {};
var __API_URL__ = 'https://wr-jm-booklist.herokuapp.com/';

(function(module) {
  function errorCallback(err) {
    module.errorView.initErrorPage(err);
  }

  function Book(bookObject) {
    Object.keys(bookObject).forEach(key => this[key] = taskObject[key]);
  }

  Book.prototype.toHtml = function() {
    let template = Handlebars.compile($('#book-list-template').text());
    return template(this);
  };

  Book.all = [];

  Book.loadAll = rows => {
    Book.all = rows.map(book => new Book(book));
  };

  Book.fetchAll = callback =>
    $.get(`${__API_URL__}/api/v1/books`).then(Book.loadAll).then(callback).catch(errorCallback);

  module.Book = Book;
})(app);
