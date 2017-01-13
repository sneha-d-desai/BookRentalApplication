'use strict';

angular.module('bookRentalShop').
component('bookStatus',{
    templateUrl:'bookStatus.html',
    controller: ['$scope','customerBookData','$window','readJsonFile',
                 function bookStatusController($scope,customerBookData,$window,readJsonFile) {
    	
    	$scope.custBookStatusData = customerBookData.getCustBookStatus();
    	
    	$scope.returnBook = function(bookId){
    		$scope.updateStatus = "Returned";
    		$scope.custBookStatusData = customerBookData.updateCustBookStatToRet(bookId,$scope.updateStatus);
    		$window.alert("$scope.custBookStatusData.bookStatus : "+ $scope.updateStatus);
    		readJsonFile.updateBookStatus(bookId,$scope.updateStatus);
    		//$window.alert("Book is return Successfully.");
    	}
    }]
  });
