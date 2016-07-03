'use strict';

angular.module('erisApp').controller('AboutController',
    function ($scope, $state, $rootScope) {

            $scope.maintext = "About Page";
        	
        	$scope.save = function(){

        		console.log('save button clicked');
        	};

        	 $scope.delete = function(){

        		console.log('delete button clicked');
        	};

        	$scope.cancel = function(){

        		$state.go('master.home');
        	};

        	$rootScope.banner = "images/banner_image.jpg";

 });