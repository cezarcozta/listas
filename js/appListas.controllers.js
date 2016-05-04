angular.module('appListas')
	.controller("listasController", function($scope) {
		$scope.titulo = "Listas";

		$scope.links = [
			{
				nome: 'Lista Comida',
				path: '/comida'
			},{
				nome: 'Lista Estacionamento',
				path: '/estacionamento'
			},{
				nome: 'Lista Telefone',
				path: '/telefone'
			},{
				nome: 'Lista SabespApi',
				path: '/sabespApi'
			}
		];
	})
	.controller("comidaController", function($scope) {
		$scope.titulo = "Comida";

		$scope.comidas = [
			{
				nome: 'Acerola',
				medida: '1 unidade',
				peso: '5g',
				calorias: '3C'
			},{
				nome: 'Banana Nanica',
				medida: '1 unidade',
				peso: '120g',
				calorias: '116C'
			},{
				nome: 'Caju',
				medida: '1 unidade',
				peso: '150g',
				calorias: '55C'
			},{
				nome: 'Laranja Pera',
				medida: '1 unidade',
				peso: '100g',
				calorias: '43C'
			},{
				nome: 'Graviola',
				medida: '1 unidade',
				peso: '100g',
				calorias: '60C'
			}
		];

		$scope.adicionar = function(formComida) {
			if(formComida.$valid === false) {
				return ;
			}else{
				$scope.comidas.push($scope.novaComida);
				$scope.novaComida = {};
			}
		};

		$scope.remover = function(index, comidas) {
			var mensagem = "Deseja remover " + comidas.nome + " ?";
			if(confirm(mensagem)) {
				$scope.comidas.splice(index, 1);
			}
		};
	})
	.controller("estacionamentoController", function($scope) {
		$scope.titulo = "Estacionamento";

		$scope.carros = [
			{
				nome: 'Corolla',
				cor: 'Prata',
				placa: 'ABC - 0000',
				marca: 'Toyota',
				entrada: new Date(2016, 05, 04, 11, 15, 23, 02),
				saida: new Date(2016, 05, 04, 13, 22, 45, 07)
			},{
				nome: 'Space Fox',
				cor: 'Verde',
				placa: 'DEF - 1111',
				marca: 'Volksvagem',
				entrada: new Date(2016, 05, 04, 12, 01, 32, 20),
				saida: new Date(2016, 05, 04, 22, 22, 54, 70)
			},{
				nome: 'HB20',
				cor: 'Branco',
				placa: 'GHI - 2222',
				marca: 'Hyunday',
				entrada: new Date(2016, 05, 04, 10, 51, 33, 11),
				saida: new Date(2016, 05, 04, 11, 22, 42, 07)
			},{
				nome: '435i',
				cor: 'Azul Marinho',
				placa: 'JKL - 3333',
				marca: 'BMW',
				entrada: new Date(2016, 05, 04, 02, 52, 12, 22),
				saida: new Date(2016, 05, 04, 04, 44, 45, 07)
			},{
				nome: 'CaliforniaT',
				cor: 'Preta',
				placa: 'MNO - 4444',
				marca: 'Ferrari',
				entrada: new Date(2016, 05, 04, 11, 15, 23, 02),
				saida: new Date(2016, 05, 04, 04, 20, 00, 00)
			}
		];

		$scope.adicionar = function(formEstac) {
			if(formEstac.$valid === false) {
				return ;
			}else{
				$scope.carros.push($scope.novoCarro);
				$scope.novoCarro = {};
			}
		};

		$scope.remover = function(index, carros) {
			var mensagem = "Deseja remover " + carros.nome + " ?";
			if(confirm(mensagem)) {
				$scope.carros.splice(index, 1);
			}
		};
	})
	.controller("telefoneController", function($scope) {
		$scope.titulo = "Telefone";

		$scope.telefones = [
			{
				nome: 'João',
				ddd: '11',
				numero: '999924168',
				operadora: 'Vivo'
			},{
				nome: 'Pedro',
				ddd: '15',
				numero: '974709134',
				operadora: 'Claro'
			},{
				nome: 'Ana',
				ddd: '13',
				numero: '996063199',
				operadora: 'Oi'
			},{
				nome: 'Maria',
				ddd: '19',
				numero: '999198745',
				operadora: 'Tim'
			},{
				nome: 'José',
				ddd: '16',
				numero: '976089111',
				operadora: 'Nextel'
			},
		];

		$scope.adicionar = function(formTel) {
			if(formTel.$valid === false) {
				return ;
			}else{
				$scope.telefones.push($scope.novoTel);
				$scope.novoTel = {};
			}
		};

		$scope.remover = function(index, telefones) {
			var mensagem = "Deseja remover " + telefones.nome + " ?";
			if(confirm(mensagem)) {
				$scope.telefones.splice(index, 1);
			}
		};
	})
	.controller("sabespApiController", function($scope, sabespApi) {
		$scope.titulo = "SabespAPI";

		sabespApi.getInfo()
    	.then(function(response) {
      		$scope.data = response.data;
    	});
	})
;