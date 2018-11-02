import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { IBook } from './book.model';

@Injectable()
export class BooksFirebaseService {

  bookList: AngularFireList<any>;
  // selectedBook: IBook = new IBook();

  constructor(private afb: AngularFireDatabase) { }


  // ref => ref.orderByChild('title')
  getBooks() {
    this.bookList = this.afb.list('/items');
    return this.bookList;
  }

  deleteBook($key: string) {
    this.bookList.remove($key);
  }

  addBook(book: IBook) {
    const afList = this.afb.list('items');
    // console.log('adding this: ' + book.title);
    afList.push(book);
  }

}
