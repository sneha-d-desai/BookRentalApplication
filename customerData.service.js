'use strict';

angular.module('bookRentalShop').
service('customerData',['$window', function($window) {

			var KEY = 'submitData';
			var INDEX_KEY = 'customerIndex';
			
			var addData = function(newObj) {
				var mydata = $window.sessionStorage.getItem(KEY);
				if (mydata) {
					mydata = JSON.parse(mydata);
				} else {
					mydata = [];
				}
				mydata.push(newObj);
				$window.sessionStorage.setItem(KEY, JSON.stringify(mydata));
			};

			var getData = function() {
				var mydata = $window.sessionStorage.getItem(KEY);
				if (mydata) {
					mydata = JSON.parse(mydata);
				}
				return mydata || [];
			};

			var getCustomerId = function(){
				var index = $window.sessionStorage.getItem(INDEX_KEY);
				if(index){
					return index;
				}
				else	
					{
					 return 1;
					}
					
			}
			var getCustSpecificData = function(CustTelNo) {
				var mydata = $window.sessionStorage.getItem(KEY);
				if (mydata) {
					mydata = JSON.parse(mydata);
					for(var i=0;i<mydata.length;i++){
						if(mydata[i].custTel == CustTelNo){
							return mydata[i];
						}
					}
					
				}
				return mydata || [];
			};
			
			var deleteData = function(index) {
				var mydata = $window.sessionStorage.getItem(KEY);
				if (mydata) {
					mydata = JSON.parse(mydata);
					var j, i;
					for (j = 0; j < index.length; j++) {
						for (i = 0; i < mydata.length; i++) {
							if (index[j] == mydata[i].index) {
								mydata.splice(i, 1);
								break;
							}
						}
					}
				}
				$window.sessionStorage.setItem(KEY, JSON.stringify(mydata));
				return getData();
			};

			var updateData = function(editObj) {
				var mydata = $window.sessionStorage.getItem(KEY);
				if (mydata) {
					mydata = JSON.parse(mydata);
					for (var i = 0; i < mydata.length; i++) {
						if (mydata[i].index == editObj.index) {
							mydata[i].custName = editObj.custName;
							mydata[i].custTel = editObj.custTel;
							mydata[i].custAdd = editObj.custAdd;
							mydata[i].custEmail = editObj.custEmail;
							break;
						}
					}
				}
				$window.sessionStorage.setItem(KEY, JSON.stringify(mydata));
				return getData();
			};
			var updateCustomerId = function(index){				
				$window.sessionStorage.setItem(INDEX_KEY,index+1);
			}
			return {
				addData : addData,
				getData : getData,
				deleteData : deleteData,
				updateData : updateData,
				getCustSpecificData: getCustSpecificData,
				getCustomerId : getCustomerId,
				updateCustomerId:updateCustomerId
			};

		} ]);