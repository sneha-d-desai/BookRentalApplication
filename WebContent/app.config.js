angular.
module('bookRentalShop',['ngRoute']).
config(['$locationProvider','$routeProvider',
        function config($locationProvider,$routeProvider){
	//$locationProvider.hashPrefix('!');
	$routeProvider.
	when('/books',{
		//templateUrl:"getBookList.html"
		template: '<book-list></book-list>'
	}).
	when('/addCustomer',{
		//templateUrl:"addCustomer.html"
		template: '<add-customer></add-customer>'
	}).
	when('/customers',{
		//templateUrl:"addCustomer.html"
		template: '<customer-list></customer-list>'
	});

}]);