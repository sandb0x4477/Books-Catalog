import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import {NgxPaginationModule} from 'ngx-pagination';

import { HttpClientModule } from '@angular/common/http';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { environment } from '../environments/environment';

import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { BookListComponent } from './book-list/book-list.component';
import { SearchGoogleComponent } from './search-google/search-google.component';

import { SearchGoogleService } from './shared/searchGoogle.service';
import { BooksFirebaseService } from './shared/books-firebase.service';

import { Routes, RouterModule } from '@angular/router';

const appRoutes: Routes = [
  { path: '', component: BookListComponent },
  { path: 'search', component: SearchGoogleComponent },
  { path: 'list', component: BookListComponent }
  ];


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    BookListComponent,
    SearchGoogleComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    NgxPaginationModule
  ],
  providers: [SearchGoogleService, BooksFirebaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
