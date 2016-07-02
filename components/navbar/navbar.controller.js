'use strict';

angular.module('erisApp').controller('NavbarController', function ($scope, $state, MenuService, DataUtility) {
    
    //$scope.username = $scope.base.UserInfo.ntAcct;
    
    $scope.menuItems = MenuService.menuItems;

    $scope.navigate = function (state) {
        if (DataUtility.isValidString(state)) {
            console.log('clicked');
            $state.go(state);
        }
    };
});