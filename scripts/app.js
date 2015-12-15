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
    
    $http.get('api endpoint').success(function (resultat) {

        //sätt $scope.visibleItems till resultat   ^
        

    }).error(function (error) {

        //format C:

    });
    
    
    
    var jobs = [{ "id": 3, "organization_icon": "armada.png", "organization_title": "Business Committee-25", "job_title": "Business Committee are recruiting-3", "union_slug": "ths", "organization_slug": "business-committee-25", "job_slug": "business-committee-are-recruiting-3", "job_type": 1, "expires_at": "1 week from now" }, { "id": 5, "organization_icon": "armada.png", "organization_title": "Business Committee-1", "job_title": "Business Committee are recruiting-5", "union_slug": "ths", "organization_slug": "business-committee-1", "job_slug": "business-committee-are-recruiting-5", "job_type": 2, "expires_at": "1 week from now" }, { "id": 8, "organization_icon": "armada.png", "organization_title": "Business Committee-26", "job_title": "Business Committee are recruiting-8", "union_slug": "ths", "organization_slug": "business-committee-26", "job_slug": "business-committee-are-recruiting-8", "job_type": 1, "expires_at": "1 week from now" }, { "id": 10, "organization_icon": "armada.png", "organization_title": "Business Committee-20", "job_title": "Business Committee are recruiting-10", "union_slug": "ths", "organization_slug": "business-committee-20", "job_slug": "business-committee-are-recruiting-10", "job_type": 3, "expires_at": "1 week from now" }];
    
    $scope.visibleItems = [];
    
    $scope.includeJobType = function (nr) {
        if (existsInList(nr)) {
            removeFromList(nr);
        } else {
            addFromJobs(nr);
        }
    }
    
    function addFromJobs(nr) {
        for (var i = 0; i < jobs.length; i++) {
            console.log(i);
            if (jobs[i].job_type == nr) {
                console.log("addar" + nr);
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
