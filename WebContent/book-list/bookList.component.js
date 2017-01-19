'use strict';

angular.module('bookRentalShop').
component('bookList',{
    templateUrl:'book-list/getBookList.html',
    controller: ['$http','$window','$scope','customerBookData','readJsonFile','$uibModal', '$log',
                 function BookListController($http,$window,$scope,customerBookData,readJsonFile,$uibModal, $log) {
    	 
    	 $scope.firstCall = readJsonFile.checkKeyExist();
    	 
    	 if($scope.firstCall == false){
    		 readJsonFile.getJsonFile().then(function(response) {
    		 $scope.books = response.data.books;
    		 
    		 readJsonFile.saveJsonData($scope.books);
    		 $scope.booksDataInJson = readJsonFile.getJsonData();
    	 
    	 })
    	 }
    	 
    	 $scope.booksDataInJson = readJsonFile.getJsonData();

    	 $scope.animationsEnabled = true;

    	 $scope.open = function (bookId) 
    	 {
    	    var modalInstance = $uibModal.open({
    	      animation: $scope.animationsEnabled,
    	      templateUrl: 'borrow-return-book/borrowReturnBook.html',
    	      controller: 'borrowReturnBookCntrl',
    	      backdrop : 'static',
    	      resolve: {
    	    	  bookId: function () {
    	          return bookId;
    	        }
    	      }
    	     });
    	 };

    	  $scope.toggleAnimation = function () {
    	    $scope.animationsEnabled = !$scope.animationsEnabled;
    	  };

    }]
  });

