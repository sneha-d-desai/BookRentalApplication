'use strict';

angular.
module('bookRentalShop').
component('addCustomer', {
	templateUrl:'add-customer/addCustomer.html',
	controller:['$scope','$location','$window','customerData',
	            function bookDetailController($scope,$location,$window,customerData) {
		
		$scope.index = customerData.getCustomerId();
		
		$scope.submitAddCustomer=function(index){
		$scope.data = {
				custName:$scope.custName,
				custTel :$scope.custTel,
				custAdd:$scope.custAdd,
				custEmail:$scope.custEmail,
				index : $scope.index
                };
			
			customerData.addData($scope.data);
			customerData.updateCustomerId(parseInt($scope.index));
			$location.url('/customers/');
			console.log("$location.url():"+$location.url());
		}
    }]
});

