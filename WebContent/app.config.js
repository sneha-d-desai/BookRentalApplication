'use strict';

angular.module('bookRentalShop').
config(['$locationProvider','$routeProvider',
        function config($locationProvider,$routeProvider){
	//$locationProvider.hashPrefix('!');
	$routeProvider.
	when('/',{
		template: '<book-list></book-list>'
	}).
	when('/books',{
		template: '<book-list></book-list>'
	}).
	when('/booksStatus',{
		template: '<book-status></book-status>'
	}).
	when('/addCustomer',{
		template: '<add-customer></add-customer>'
	}).
	when('/customers',{
		template: '<customer-list></customer-list>'
	}).
	otherwise({redirectTo : '/'});
}]);