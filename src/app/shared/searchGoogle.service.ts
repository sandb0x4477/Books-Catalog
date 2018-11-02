import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class SearchGoogleService {
  // searchTerm: string = '+intitle';
  searchTerm = '&maxResults=40&printType=books';

  private apiUrl = 'https://www.googleapis.com/books/v1/volumes?q=';
  // private apiUrl: string = 'http://localhost:3000/search';

  constructor(private http: HttpClient) { }

  fetchData(query: string): Observable<any> {
    const url = `${this.apiUrl}${query}${this.searchTerm}`;
    // console.log(url);
    return this.http.get<any>(url).pipe(map(books => books.items || []));
  }
}
