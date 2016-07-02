'use strict';

/**
*  discount-analysis.js is a configuration file the Indonesia's discount analysis
*  @param module sdafv2App
*  @param function $stateprovider
*/

angular.module('erisApp')
  .config(function ($stateProvider) {

/**
*  This method is responsible for setting the state's configuration of Indonesia's discount analysis
*  @params state discountAnalysis : an object that refers to the alias Indonesia's discount analysis
*/

      $stateProvider.state('master.about', {
          /**
          *@params url /indonesia/discount-analysis : the url used to visit Indonesia's discount analysis page
          *@params app/indonesia/discount-analysis/discount-analysis.html: the template of the Indonesia's discount analysis page
          *@params controller DiscountAnalysisController the controller to be used of Indonesia's discount analysis page
          *@params resolve contains promises that must resolve successfully before the route will change
          */

          url: 'about/',
          templateUrl: 'about/about.html',
          controller: 'AboutController',
          resolve: {
             
          }
      });
  });