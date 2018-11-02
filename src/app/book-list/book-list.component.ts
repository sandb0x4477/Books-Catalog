import { Component, OnInit } from '@angular/core';

import { IBook } from '../shared/book.model';
import { BooksFirebaseService } from '../shared/books-firebase.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})

export class BookListComponent implements OnInit {

  p = 1;
  booksList: IBook[] = [];

  constructor(private booksService: BooksFirebaseService) { }

  ngOnInit() {
    const x = this.booksService.getBooks();
    x.snapshotChanges().subscribe(item => {
      this.booksList = [];
      item.forEach(element => {
        const y = element.payload.toJSON();
        y['$key'] = element.key;
        this.booksList.push(y as IBook);
      });
    });
  }

  onDelete(key: string) {
    console.log('key');
    this.booksService.deleteBook(key);
  }

}
