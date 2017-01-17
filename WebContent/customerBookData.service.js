'use strict';

angular.module('bookRentalShop').
service('customerBookData',['$window', function($window) {
	
	var KEY = 'submitBookStatus';
	
	var saveCustBookStatus = function(custBookDataObj){
		var bookStatusObj = $window.sessionStorage.getItem(KEY);
		if(bookStatusObj){
			bookStatusObj = JSON.parse(bookStatusObj);
		}else{
			bookStatusObj = [];
		}
		bookStatusObj.push(custBookDataObj);
		$window.sessionStorage.setItem(KEY,JSON.stringify(bookStatusObj));
	};
	
	var getCustBookStatus = function(){
		var bookStatusObj = $window.sessionStorage.getItem(KEY);
		if(bookStatusObj){
			bookStatusObj = JSON.parse(bookStatusObj);
			return bookStatusObj;
		}
		return bookStatusObj || [];
	};
	
	var updateCustBookStatToRet = function(bookId,returnBookStat){
		//var bookStatus = getCustBookStatus();
		var bookStatusObj = $window.sessionStorage.getItem(KEY);
		if(bookStatusObj){
			bookStatusObj = JSON.parse(bookStatusObj);
			var i=0;
			for(i=0;i<bookStatusObj.length;i++){
				if(bookStatusObj[i].bookId == bookId && bookStatusObj[i].bookStatus == "Borrowed"){
					bookStatusObj[i].bookStatus = returnBookStat;
					break;
				}
			}
		}
		$window.sessionStorage.setItem(KEY,JSON.stringify(bookStatusObj));
		return getCustBookStatus();
	};
	
	return {
		saveCustBookStatus : saveCustBookStatus,
		getCustBookStatus :getCustBookStatus,
		updateCustBookStatToRet:updateCustBookStatToRet
	};
}]
);