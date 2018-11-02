(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-nav-bar></app-nav-bar>\n<br>\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

let AppComponent = class AppComponent {
};
AppComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
        styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-pagination */ "./node_modules/ngx-pagination/dist/ngx-pagination.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var angularfire2__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angularfire2 */ "./node_modules/angularfire2/es2015/index.js");
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! angularfire2/database */ "./node_modules/angularfire2/database/es2015/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./nav-bar/nav-bar.component */ "./src/app/nav-bar/nav-bar.component.ts");
/* harmony import */ var _book_list_book_list_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./book-list/book-list.component */ "./src/app/book-list/book-list.component.ts");
/* harmony import */ var _search_google_search_google_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./search-google/search-google.component */ "./src/app/search-google/search-google.component.ts");
/* harmony import */ var _shared_searchGoogle_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./shared/searchGoogle.service */ "./src/app/shared/searchGoogle.service.ts");
/* harmony import */ var _shared_books_firebase_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./shared/books-firebase.service */ "./src/app/shared/books-firebase.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















const appRoutes = [
    { path: '', component: _book_list_book_list_component__WEBPACK_IMPORTED_MODULE_10__["BookListComponent"] },
    { path: 'search', component: _search_google_search_google_component__WEBPACK_IMPORTED_MODULE_11__["SearchGoogleComponent"] },
    { path: 'list', component: _book_list_book_list_component__WEBPACK_IMPORTED_MODULE_10__["BookListComponent"] }
];
let AppModule = class AppModule {
};
AppModule = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"],
            _nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_9__["NavBarComponent"],
            _book_list_book_list_component__WEBPACK_IMPORTED_MODULE_10__["BookListComponent"],
            _search_google_search_google_component__WEBPACK_IMPORTED_MODULE_11__["SearchGoogleComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            angularfire2__WEBPACK_IMPORTED_MODULE_5__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].firebaseConfig),
            angularfire2_database__WEBPACK_IMPORTED_MODULE_6__["AngularFireDatabaseModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_14__["RouterModule"].forRoot(appRoutes),
            ngx_pagination__WEBPACK_IMPORTED_MODULE_3__["NgxPaginationModule"]
        ],
        providers: [_shared_searchGoogle_service__WEBPACK_IMPORTED_MODULE_12__["SearchGoogleService"], _shared_books_firebase_service__WEBPACK_IMPORTED_MODULE_13__["BooksFirebaseService"]],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/book-list/book-list.component.css":
/*!***************************************************!*\
  !*** ./src/app/book-list/book-list.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".material-icons {\r\n  cursor: pointer;\r\n  }\r\n"

/***/ }),

/***/ "./src/app/book-list/book-list.component.html":
/*!****************************************************!*\
  !*** ./src/app/book-list/book-list.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n\n<div class=\"row\">\n  <div *ngFor=\"let book of booksList | paginate: { itemsPerPage: 10, currentPage: p }\">\n  <div class=\"col s12 m6\">\n      <div class=\"card horizontal hoverable\">\n        <div class=\"card-image\">\n          <img src=\"{{ book.imageUrl }}\" style=\"height: 196px; width: 128px;\">\n        </div>\n        <div class=\"card-stacked\">\n          <div class=\"card-content\">\n            <strong >{{ book.title}}</strong>\n            <p>{{ book.author}}</p>\n            <br/>\n            <!-- <p>{{ book.description}}</p> -->\n          </div>\n          <div class=\"card-action\">\n            <a (click)=\"onDelete(book.$key)\"><i class=\"material-icons right\">delete</i></a>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n<pagination-controls class=\"center\" (pageChange)=\"p = $event\"></pagination-controls>\n\n</div>\n"

/***/ }),

/***/ "./src/app/book-list/book-list.component.ts":
/*!**************************************************!*\
  !*** ./src/app/book-list/book-list.component.ts ***!
  \**************************************************/
/*! exports provided: BookListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookListComponent", function() { return BookListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _shared_books_firebase_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/books-firebase.service */ "./src/app/shared/books-firebase.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


let BookListComponent = class BookListComponent {
    constructor(booksService) {
        this.booksService = booksService;
        this.p = 1;
        this.booksList = [];
    }
    ngOnInit() {
        const x = this.booksService.getBooks();
        x.snapshotChanges().subscribe(item => {
            this.booksList = [];
            item.forEach(element => {
                const y = element.payload.toJSON();
                y['$key'] = element.key;
                this.booksList.push(y);
            });
        });
    }
    onDelete(key) {
        console.log('key');
        this.booksService.deleteBook(key);
    }
};
BookListComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-book-list',
        template: __webpack_require__(/*! ./book-list.component.html */ "./src/app/book-list/book-list.component.html"),
        styles: [__webpack_require__(/*! ./book-list.component.css */ "./src/app/book-list/book-list.component.css")]
    }),
    __metadata("design:paramtypes", [_shared_books_firebase_service__WEBPACK_IMPORTED_MODULE_1__["BooksFirebaseService"]])
], BookListComponent);



/***/ }),

/***/ "./src/app/nav-bar/nav-bar.component.css":
/*!***********************************************!*\
  !*** ./src/app/nav-bar/nav-bar.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/nav-bar/nav-bar.component.html":
/*!************************************************!*\
  !*** ./src/app/nav-bar/nav-bar.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav>\n  <div class=\"nav-wrapper teal\">\n\n    <a class=\"brand-logo\">\n      <i class=\"material-icons\">import_contacts</i>\n      My Books</a>\n\n    <ul class=\"right\">\n      <li><a routerLink=\"list\"><i class=\"material-icons\">view_module</i></a></li>\n      <li><a routerLink=\"search\"><i class=\"material-icons\">search</i></a></li>\n    </ul>\n  </div>\n</nav>\n"

/***/ }),

/***/ "./src/app/nav-bar/nav-bar.component.ts":
/*!**********************************************!*\
  !*** ./src/app/nav-bar/nav-bar.component.ts ***!
  \**********************************************/
/*! exports provided: NavBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavBarComponent", function() { return NavBarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

let NavBarComponent = class NavBarComponent {
    constructor() { }
    ngOnInit() {
    }
};
NavBarComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-nav-bar',
        template: __webpack_require__(/*! ./nav-bar.component.html */ "./src/app/nav-bar/nav-bar.component.html"),
        styles: [__webpack_require__(/*! ./nav-bar.component.css */ "./src/app/nav-bar/nav-bar.component.css")]
    }),
    __metadata("design:paramtypes", [])
], NavBarComponent);



/***/ }),

/***/ "./src/app/search-google/search-google.component.css":
/*!***********************************************************!*\
  !*** ./src/app/search-google/search-google.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/search-google/search-google.component.html":
/*!************************************************************!*\
  !*** ./src/app/search-google/search-google.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<br>\n<div class=\"container\">\n\n  <!-- SEARCH FORM -->\n  <div class=\"row\">\n    <form class=\"center\" (ngSubmit)=\"onSubmit(f)\" #f=\"ngForm\">\n      <div class=\"row\">\n        <div class=\"input-field col s8 m9\">\n          <i class=\"material-icons prefix\">search</i>\n\n          <input name=\"query\" id=\"query\" type=\"text\" class=\"form-control validate\" ngModel>\n\n          <label for=\"isbn\">Author, Title, ISBN</label>\n        </div>\n        <div class=\"input-field col s3\">\n          <button class=\"btn btn-primary\" type=\"submit\">Go</button>\n        </div>\n      </div>\n    </form>\n  </div>\n  <!-- SEARCH FORM -->\n\n  <!-- SEARCH RESULTS -->\n  <ul>\n    <li *ngFor=\"let item of searchResultsCleaned; let i = index\">\n      <!-- <div *ngIf=\"item.volumeInfo.imageLinks.smallThumbnail && item.volumeInfo.title &&\n      item.volumeInfo.authors && item.volumeInfo.description\"> -->\n\n      <hr>\n      <div class=\"row\">\n        <div class=\"col s9\">\n          <h5>{{ item.title }}</h5>\n          <h6>by: {{ item.author }}</h6>\n        </div>\n\n        <div class=\"col s3\">\n          <a (click)=\"onAddItem(item)\" class=\"btn-floating btn-large waves-effect waves-light right\"><i class=\"material-icons\">add</i></a>\n        </div>\n      </div>\n\n      <div class=\"row\">\n        <p class=\"col s12 m2  center\"><img src={{item.imageUrl}}/></p>\n        <!-- <p class=\"col m1\"></p> -->\n        <blockquote class=\"col s12 m9 right\">{{ item.description }}</blockquote>\n      </div>\n      <br>\n     <!-- </div> -->\n    </li>\n  </ul>\n<!-- SEARCH RESULTS -->\n\n</div> <!-- END OF CONTAINER -->\n"

/***/ }),

/***/ "./src/app/search-google/search-google.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/search-google/search-google.component.ts ***!
  \**********************************************************/
/*! exports provided: SearchGoogleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchGoogleComponent", function() { return SearchGoogleComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _shared_searchGoogle_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/searchGoogle.service */ "./src/app/shared/searchGoogle.service.ts");
/* harmony import */ var _shared_books_firebase_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/books-firebase.service */ "./src/app/shared/books-firebase.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




let SearchGoogleComponent = class SearchGoogleComponent {
    constructor(searchService, bookService) {
        this.searchService = searchService;
        this.bookService = bookService;
        this.query = '';
        this.searchResult = [];
        // searchResultsCleaned: Array<IBook> = [];
        this.searchResultsCleaned = [];
        // bookToAdd: IBook = new IBook();
        this.arrayTemp = [];
        // arr: any = [];
        this.key = 'searchResults';
    }
    ngOnInit() {
        if (localStorage.length > 0) {
            // We have items
            this.searchResultsCleaned = JSON.parse(localStorage.getItem(this.key));
        }
    }
    onSubmit(form) {
        this.query = form.value.query;
        this.searchService.fetchData(this.query).subscribe(res => {
            this.searchResult = res;
            this.onClean();
        });
        this.searchForm.reset();
    }
    onAddItem(item) {
        console.log(item);
        this.bookService.addBook(item);
        this.searchResultsCleaned = this.searchResultsCleaned.filter(i => i !== item);
        localStorage.setItem(this.key, JSON.stringify(this.searchResultsCleaned));
    }
    onClean() {
        this.cleanSearchResults(this.searchResult);
    }
    cleanSearchResults(arr) {
        this.searchResultsCleaned = [];
        this.arrayTemp = arr;
        this.arrayTemp.forEach((value) => {
            if ((value.volumeInfo.hasOwnProperty('title')) &&
                (value.volumeInfo.hasOwnProperty('authors')) &&
                (value.volumeInfo.hasOwnProperty('description')) &&
                (value.volumeInfo.imageLinks.hasOwnProperty('smallThumbnail'))) {
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
                });
            }
        });
    }
};
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('f'),
    __metadata("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgForm"])
], SearchGoogleComponent.prototype, "searchForm", void 0);
SearchGoogleComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-search-google',
        template: __webpack_require__(/*! ./search-google.component.html */ "./src/app/search-google/search-google.component.html"),
        styles: [__webpack_require__(/*! ./search-google.component.css */ "./src/app/search-google/search-google.component.css")]
    }),
    __metadata("design:paramtypes", [_shared_searchGoogle_service__WEBPACK_IMPORTED_MODULE_2__["SearchGoogleService"],
        _shared_books_firebase_service__WEBPACK_IMPORTED_MODULE_3__["BooksFirebaseService"]])
], SearchGoogleComponent);



/***/ }),

/***/ "./src/app/shared/books-firebase.service.ts":
/*!**************************************************!*\
  !*** ./src/app/shared/books-firebase.service.ts ***!
  \**************************************************/
/*! exports provided: BooksFirebaseService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BooksFirebaseService", function() { return BooksFirebaseService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angularfire2/database */ "./node_modules/angularfire2/database/es2015/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


let BooksFirebaseService = class BooksFirebaseService {
    // selectedBook: IBook = new IBook();
    constructor(afb) {
        this.afb = afb;
    }
    // ref => ref.orderByChild('title')
    getBooks() {
        this.bookList = this.afb.list('/items');
        return this.bookList;
    }
    deleteBook($key) {
        this.bookList.remove($key);
    }
    addBook(book) {
        const afList = this.afb.list('items');
        // console.log('adding this: ' + book.title);
        afList.push(book);
    }
};
BooksFirebaseService = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
    __metadata("design:paramtypes", [angularfire2_database__WEBPACK_IMPORTED_MODULE_1__["AngularFireDatabase"]])
], BooksFirebaseService);



/***/ }),

/***/ "./src/app/shared/searchGoogle.service.ts":
/*!************************************************!*\
  !*** ./src/app/shared/searchGoogle.service.ts ***!
  \************************************************/
/*! exports provided: SearchGoogleService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchGoogleService", function() { return SearchGoogleService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



let SearchGoogleService = class SearchGoogleService {
    // private apiUrl: string = 'http://localhost:3000/search';
    constructor(http) {
        this.http = http;
        // searchTerm: string = '+intitle';
        this.searchTerm = '&maxResults=40&printType=books';
        this.apiUrl = 'https://www.googleapis.com/books/v1/volumes?q=';
    }
    fetchData(query) {
        const url = `${this.apiUrl}${query}${this.searchTerm}`;
        // console.log(url);
        return this.http.get(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(books => books.items || []));
    }
};
SearchGoogleService = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
    __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
], SearchGoogleService);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
const environment = {
    production: false,
    firebaseConfig: {
        apiKey: 'AIzaSyBApD1-FhxPCZvSIjFRmsieGSbyOUGuBrs',
        authDomain: 'books-catalog-734fd.firebaseapp.com',
        databaseURL: 'https://books-catalog-734fd.firebaseio.com',
        projectId: 'books-catalog-734fd',
        storageBucket: 'books-catalog-734fd.appspot.com',
        messagingSenderId: '170396248613'
    }
};


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.log(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Angular_projects\Books-Catalog3\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map