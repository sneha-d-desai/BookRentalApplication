angular.
module('bookRentalShop').
component('customerList',{
	templateUrl: 'customer-list/customerList.html',
	controller:['customerData', '$window','$scope',
	            function displayCustomerList(customerData,$window,$scope){
		$scope.customer = customerData.getData();
		$scope.showEditForm = false;
		$scope.showDeleteButton = false;
		$scope.user = {custIndex: []};
		
		if($scope.customer.length > 0){
			$scope.showDeleteButton = true;
		}
		$scope.deleteCustomer = function(){
			$scope.customer = customerData.deleteData($scope.user.custIndex);
		}
		
		$scope.editCustomer = function(index){
			$scope.showEditForm = true;
			$scope.custObj = $scope.customer.find(checkAdult);
			$scope.index = $scope.custObj.index;
			$scope.custName = $scope.custObj.custName;
			$scope.custTel = $scope.custObj.custTel;
			$scope.custEmail = $scope.custObj.custEmail;
			$scope.custAdd = $scope.custObj.custAdd;
			function checkAdult(customer1) {				
			    return customer1.index == index;
			}
		}
		
		$scope.submitEditCustomer = function(){
			$scope.data = {
					custName:$scope.custName,
					custTel :$scope.custTel,
					custAdd:$scope.custAdd,
					custEmail:$scope.custEmail,
					index:$scope.index
	                };
			$scope.customer = customerData.updateData($scope.data);
			$scope.showEditForm = false;
		}
	}]
});