'use strict';

angular.module('bookRentalShop').
component('bookList',{
    templateUrl:'getBookList.html',
    controller: ['$http',function BookListController($http) {
    	var self = this;
    	 $http.get('books.json').then(function(response) {
    	        self.books = response.data.books;
    	 });
    }]
  });
