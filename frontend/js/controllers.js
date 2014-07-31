'use strict';

( function(){
	var app = angular.module('horseRaces', ['ngRoute', 'ngModal']);


	app.directive('ngEnter', function () {
	    return function (scope, element, attrs) {
	        element.bind("keydown keypress", function (event) {
	            if(event.which === 13) {
	                scope.$apply(function (){
	                    scope.$eval(attrs.ngEnter);
	                });
	                event.preventDefault();
	            }
	        });
	    };
	});

	app.controller("mainController", ['$scope', function($scope){

		$scope.horses = slider;
  		$scope.dialogShown = false;

		$scope.startButton = function(){
			var finished = false;
			function add(){
				_.each($scope.horses, function(value, index){
					
					$scope.horses[index][1] += Math.floor((Math.random() * 5) + 1);
					_.find($scope.horses, function(num){ if (num[1] >= 1000){num[1] = 1000; finished = true; done();}; });
			});
				if(finished === false){
					setTimeout(add, 10);
				};
				$scope.$apply();
			};
			add();

			function done(){
				var keysSorted = Object.keys($scope.horses).sort(function(a,b){return $scope.horses[b][1]-$scope.horses[a][1]});
				var outputText1 = "First place: racer "		+ 	$scope.horses[keysSorted[0]][0] + " with " + $scope.horses[keysSorted[0]][1] + " points!";
				var outputText2 = "Second place: racer " 	+ 	$scope.horses[keysSorted[1]][0] + " with " + $scope.horses[keysSorted[1]][1] + " points!";
				var outputText3 = "Third place: racer " 	+ 	$scope.horses[keysSorted[2]][0] + " with " + $scope.horses[keysSorted[2]][1] + " points!";
				switch ($scope.horses.length){
					case 1:
						$scope.outputText1 = outputText1; break;
					case 2:
						$scope.outputText1 = outputText1;
						$scope.outputText2 = outputText2; break;
					default:
						$scope.outputText1 = outputText1;
						$scope.outputText2 = outputText2;
						$scope.outputText3 = outputText3;
				}; 
				$scope.dialogShown = true;
			}
		}

		$scope.resetButton = function(){
			location.reload();
			$scope.horses = slider;
		};

		$scope.posButton = function(){
			for(var j = 0; j < $scope.horses.length; j++){
				$scope.horses[j][1] = 0;
			}
		};

		$scope.setButton = function(){
			var numberOfHorses = $scope.numHorses;
			if(numberOfHorses != undefined){
				$scope.horses = [];
				for(var i=0; i<numberOfHorses; i++){
					$scope.horses.push([i+1, 0]);
				}
			}
		};
	}]);

	var slider = [
		[1, 0], [2, 0], [3, 0], [4, 0], [5, 0]
	];

})();