'use strict';

angular.module('erisApp')
  .config(function ($stateProvider) {
      $stateProvider.state('master', {
          url: '/',
          templateUrl: 'master-page/master-page.html',
          controller: 'MasterPageController',
          resolve: {
              UserInfo: function ($log) {
               
                  if(1==1){
                    $log.debug('app start - get token');
                    
                     return null;
                  }
                  else {
                     return null;
                  }
              }
          }
      });
  });
