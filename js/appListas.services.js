angular.module('appListas')
	.service('sabespApi', function($http){
		this.getInfo = function(){
			return $http.get("https://sabesp-api.herokuapp.com/v2");
		};
	})
;