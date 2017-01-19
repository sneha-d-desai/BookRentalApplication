'use strict';

angular.module('bookRentalShop').
component('bookStatus',{
    templateUrl:'book-status/bookStatus.html',
    controller: ['$scope','customerBookData','$window','readJsonFile',
                 function bookStatusController($scope,customerBookData,$window,readJsonFile) {
    	
    	$scope.custBookStatusData = customerBookData.getCustBookStatus();
    	
    	$scope.returnBook = function(bookId){
    		$scope.updateStatus = "Returned";
    		$scope.custBookStatusData = customerBookData.updateCustBookStatToRet(bookId,$scope.updateStatus);
    		readJsonFile.updateBookStatus(bookId,$scope.updateStatus);
    	}
    }]
  });
