'use strict';

angular.module('bookRentalShop').
    controller('borrowReturnBookCntrl', ['$routeParams','$scope','$window','customerData','customerBookData','$location','readJsonFile','bookId','$modalInstance',
                 function BookDetailController($routeParams,$scope,$window,
                   		 customerData,customerBookData,$location,readJsonFile,bookId,$modalInstance) {
    	
    	//$scope.bookId = $routeParams.bookId;
    	$scope.bookId = bookId;
    	$scope.bookObj = readJsonFile.getBookObject($scope.bookId);
    	$scope.bookTitle = $scope.bookObj.Title;
    	$scope.rentPerDay = $scope.bookObj.RentAmount;
    	$scope.customerEmail = customerData.getCustomerEmails();
    	$scope.showCustData = false;
    	$scope.displayTotalRent = false;
    	$scope.enableSubmit = true;
    	$scope.fromDate= new Date();    	
    	
    	$scope.showCustDetails = function(){
    			$scope.custDetail = customerData.getCustSpecificData($scope.custEmail);
    			$scope.showCustData = true;
    	}
    	
    	$scope.getBookRent = function(){
    		$scope.numberOfDays = $scope.dayDiff($scope.fromDate, $scope.toDate);
    		$scope.totalRent = $scope.rentPerDay * $scope.numberOfDays;
    		$scope.totalRent = $scope.totalRent + "$";
    		$scope.displayTotalRent = true;
    	}
    	
       	 $scope.dayDiff = function(fromdate,todate){
    	      var timeDiff = Math.abs(todate.getTime() - fromdate.getTime());   
    	      var diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24)); 
    	      return diffDays;
    	  }
    	 
    	 $scope.getDate =function(date){
    		 $scope.dateobj = date.getUTCFullYear()+"/"+(date.getUTCMonth()+1)+"/"+date.getUTCDate();
    		 return $scope.dateobj;
    	 }
    	 
    	 $scope.submitBorrowReturnBook = function(){
    		  $scope.fromDt = $scope.getDate($scope.fromDate);
    		  $scope.toDt = $scope.getDate($scope.toDate);
    		  $scope.bookStatus = 'Borrowed';
    		  $scope.bookData ={
    				  custTel:$scope.custTel,
    				  custName:$scope.custDetail.custName,
    				  custAdd:$scope.custDetail.custAdd,
    				  custEmail:$scope.custDetail.custEmail,
    				  bookId:$scope.bookId,
    				  bookTitle:$scope.bookTitle,
    				  fromDate:$scope.fromDt,
    				  toDate:$scope.toDt,
    				  totalRent:$scope.totalRent,
    				  bookStatus:$scope.bookStatus
    		  };
    		  
    		  customerBookData.saveCustBookStatus($scope.bookData);
    		  readJsonFile.updateBookStatus($scope.bookId,$scope.bookStatus);
    		  $location.url("/booksStatus/");
    		  $modalInstance.close();
    		  console.log("$location.url(): "+$location.url());
    	 }
    	 
    	$scope.cancel = function(){
     		$modalInstance.dismiss('cancel');
     	}

    }]);
