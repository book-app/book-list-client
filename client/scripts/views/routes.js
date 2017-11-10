'use strict'

page('/', ctx => app.Book.fetchAll(app.bookView.initIndexPage));

page('/books/new', ctx => app.bookView.initCreateFormPage(ctx));

page('/books/:book_id', ctx => app.Book.fetchOne(ctx, app.bookView.initDetailPage));

// page('/books/:book_id/delete', ctx => app.Book.deleteOne(ctx, app.bookView.initIndexPage));

// page('/books/:book_id/update', (ctx) => app.Book.fetchOne(ctx,  app.bookView.initUpdateFormPage(ctx));


page();
