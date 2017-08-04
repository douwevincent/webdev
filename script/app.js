(function(){
	'use strict';
	angular.module('LunchCruncher', [])
			.controller('LunchController', ['$scope', function ($scope) {
				$scope.lunches = [];
				$scope.output = "";
				$scope.checkLunch = function(){
					var toto = $scope.lunches;
					if(toto.length == 0){
						$scope.output = "Please enter data first";
					}else{
						var liste = toto.split(",").filter(function(entry) { return entry.trim() != ''; });
						if (liste.length > 3){
							$scope.output = "Too much!";
						}else{
							$scope.output = "Enjoy!";
						}
					}
				};
			}]);
})();