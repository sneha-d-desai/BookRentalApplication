'use strict';

angular.
module('bookRentalShop').
component('addCustomer', {
	templateUrl:'addCustomer.html',
	controller:['$scope','$location','$window','customerData',function bookDetailController($scope,$location,$window,customerData) {
		$scope.index=0;
		$scope.submitAddCustomer=function(index){
		$scope.data = {
				custName:$scope.custName,
				custTel :$scope.custTel,
				custAdd:$scope.custAdd,
				custEmail:$scope.custEmail
                };
			
			customerData.addData($scope.data);
			$location.url('/customers/');
			console.log("$location.url():"+$location.url());
		}
    }]
});