import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './compnents/header/header.component';
import { BookComponent } from './compnents/book/book.component';
import { BooksComponent } from './compnents/books/books.component';
import { BookDetailComponent } from './compnents/book-detail/book-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BookComponent,
    BooksComponent,
    BookDetailComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
