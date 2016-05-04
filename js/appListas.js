angular.module('appListas', ['ngRoute'])
    .config(function($routeProvider, $locationProvider){
    	$routeProvider
    		.when('/listas', {
    			templateUrl:'../html/listas.html',
    			controller: 'listasController' 
    		})
    		.when('/comida', {
    			templateUrl:'../html/comida.html',
    			controller: 'comidaController'
    		})
    		.when('/estacionamento', {
    			templateUrl:'../html/estacionamento.html',
    			controller: 'estacionamentoController'
    		})
    		.when('/telefone', {
				templateUrl:'../html/telefone.html',
    			controller: 'telefoneController'
    		})
            .when('/sabespApi', {
                templateUrl:'../html/sabesp.html',
                controller: 'sabespApiController'
            })
    		.otherwise("/");
    });