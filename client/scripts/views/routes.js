'use strict'

if (window.location.pathname !== '/') {
  console.log('settin page based on location.pathname to handle nested path');
  page.base('/book-list-client');
}

// page('/', (ctx, next) => app.Book.fetchAll(app.bookView.initIndexPage));

page('/', ctx => app.Book.fetchAll(app.bookView.initIndexPage));

page('/books/new', ctx => app.bookView.initCreateFormPage(ctx));

page('/books/:book_id', ctx => app.Book.fetchOne(ctx, app.bookView.initDetailPage));

// page('/books/:book_id/update', ctx => app.Book.deleteOne(ctx, app.bookView.initIndexPage));

// page('/admin', (ctx) => app.Book.fetchOne(ctx,  app.bookView.initUpdateFormPage(ctx));


page();
