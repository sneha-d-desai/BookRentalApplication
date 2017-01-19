'use strict';

angular.module('bookRentalShop').
service('readJsonFile',['$window','$http',function($window,$http){
	
	var KEY = 'booksData';
	
	var saveJsonData = function(booksArray){
		$window.sessionStorage.setItem(KEY,JSON.stringify(booksArray));
	};
	
	var getJsonFile = function(booksArray){
		return $http.get('books.json');
	}; 
	
	var checkKeyExist = function(){
		var books = $window.sessionStorage.getItem(KEY);
		if(books){
			return true;
		}
		return false;
	};
	
	var getJsonData = function(){
		var books=$window.sessionStorage.getItem(KEY);
		if(books){
			books=JSON.parse(books);
			return books;
		}
		return books || [];
	};
	
	var getBookObject = function(bookId){
		var books = getJsonData();
		for(var i=0;i<books.length;i++){
			if(books[i].BookId == bookId){
				return books[i];
			}
		}
		return books || [];
	};
	
	var updateBookStatus = function(bookId,bookStatus){
		var books = getJsonData();
		for(var i=0;i<books.length;i++){
			if(books[i].BookId == bookId && bookStatus == 'Borrowed'){
				books[i].Status = 'Rented Out'; 
				break;
			}else if(books[i].BookId == bookId && bookStatus == 'Returned'){
				books[i].Status = 'Available';
				break;
			}
		}
		$window.sessionStorage.setItem(KEY,JSON.stringify(books));
	};
	
	return{
		saveJsonData:saveJsonData,
		getJsonData:getJsonData,
		getBookObject:getBookObject,
		checkKeyExist:checkKeyExist,
		getJsonFile:getJsonFile,
		updateBookStatus:updateBookStatus
	};

}])