'use strict';

angular.module('erisApp').controller('MasterPageController',
    function ($scope, $state, DataUtility) {

        
            $scope.base = {
                DataUtility: DataUtility,
                //AppConfig: appConfig,
                //UserInfo: UserInfo
            };
        
    });