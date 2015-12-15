'use strict';

/**
 * @ngdoc overview
 * @name tradingApp
 * @description
 * # tradingApp
 *
 * Main module of the application.
 */
var app = angular
  .module('tradingApp', []);

app.controller('SortCtrl', function ($scope, $http) {
    var jobs = [];
    $http.get('../scripts/jobs.json').success(function (resultat) {
		
		jobs = resultat;
		for(var i = 0; i < jobs.length; i++){
		$scope.visibleItems.push(jobs[i]);
		sortThisMother();
	}
       //sätt $scope.visibleItems till resultat   ^
        

    }).error(function (error) {

       //format C:

    });
    
    $scope.visibleItems = [];



    
    
    $scope.includeJobType = function (nr) {
        if (existsInList(nr)) {
            removeFromList(nr);
        } else {
            addFromJobs(nr);
        }
		sortThisMother();
    }
	
	function sortThisMother() {
		$scope.visibleItems.sort(function(a,b) {
			return b.id - a.id;
		});
	}
	
	sortThisMother();
	
    function addFromJobs(nr) {
        for (var i = 0; i < jobs.length; i++) {
            if (jobs[i].job_type == nr) {
                $scope.visibleItems.push(jobs[i]);
            }
        }
    }
    
    function existsInList(nr) {
        for (var i = 0; i < $scope.visibleItems.length; i++) {
            if ($scope.visibleItems[i].job_type == nr) {
                return true;
            }
        }
        return false;
    }
    
    function removeFromList(nr) {
        var i = $scope.visibleItems.length;
        while (i--) {
            if ($scope.visibleItems[i].job_type == nr) {
                $scope.visibleItems.splice(i, 1);
            }
        }
    }










});
