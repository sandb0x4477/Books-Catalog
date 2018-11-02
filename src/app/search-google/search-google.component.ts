import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { SearchGoogleService } from '../shared/searchGoogle.service';
import { IBook } from '../shared/book.model';
import { BooksFirebaseService } from '../shared/books-firebase.service';

@Component({
  selector: 'app-search-google',
  templateUrl: './search-google.component.html',
  styleUrls: ['./search-google.component.css']
})
export class SearchGoogleComponent implements OnInit {

  @ViewChild('f') searchForm: NgForm;
  query = '';
  searchResult: any = [];
  // searchResultsCleaned: Array<IBook> = [];
  searchResultsCleaned: Array<IBook> = [];
  // bookToAdd: IBook = new IBook();
  arrayTemp: any = [];
  // arr: any = [];

  key = 'searchResults';

  constructor(private searchService: SearchGoogleService,
  private bookService: BooksFirebaseService) {}

  ngOnInit() {
    if (localStorage.length > 0) {
      // We have items
      this.searchResultsCleaned = JSON.parse(localStorage.getItem(this.key));
    }
  }

  onSubmit(form: NgForm) {
    this.query = form.value.query;
    this.searchService.fetchData(this.query).subscribe(res => {
      this.searchResult = res;
      this.onClean();
      });
    this.searchForm.reset();
    }

    onAddItem(item: any) {
      console.log(item);
      this.bookService.addBook(item);
      this.searchResultsCleaned = this.searchResultsCleaned.filter(i => i !== item);
      localStorage.setItem(this.key, JSON.stringify(this.searchResultsCleaned));
    }


    onClean() {
      this.cleanSearchResults(this.searchResult);
    }

    cleanSearchResults(arr: Array<any>) {
      this.searchResultsCleaned = [];
      this.arrayTemp = arr;
      this.arrayTemp.forEach((value) => {
        if (
        (value.volumeInfo.hasOwnProperty('title')) &&
        (value.volumeInfo.hasOwnProperty('authors')) &&
        (value.volumeInfo.hasOwnProperty('description')) &&
        (value.volumeInfo.imageLinks.hasOwnProperty('smallThumbnail'))
        ) {
          const x = value.volumeInfo.title;
          const y = value.volumeInfo.authors[0];
          const z = value.volumeInfo.description;
          const i = value.volumeInfo.imageLinks.smallThumbnail;
          this.searchResultsCleaned.push({
            key: null,
            title: x,
            author: y,
            description: z,
            dateEnd: '',
            grade: 0,
            imageUrl: i,
            isbn: ''
          } as IBook);
        }
      });
    }
}
