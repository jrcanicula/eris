'use strict';

angular.module('erisApp').controller('MasterPageController',
    function ($scope, $state, DataUtility,$rootScope) {

        
            $scope.base = {
                DataUtility: DataUtility,
                //AppConfig: appConfig,
                //UserInfo: UserInfo
            };

        	$rootScope.banner = "images/custom-meals-category-banner.png";
    });	