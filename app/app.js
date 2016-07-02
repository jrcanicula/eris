'use strict';

angular.module('erisApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'angularSpinner',
  'ngAnimate',
  'ngFileSaver',
  'ui.router',
  'ui.bootstrap',
  //'toastr',
]).config(function ($urlRouterProvider, $locationProvider, $httpProvider) {
        $urlRouterProvider.otherwise('/');
        $httpProvider.interceptors.push('httpInterceptor');
    })
    .config(function ($stateProvider) {
        $stateProvider.state('master.home', {
            url: 'home',
            template: '',
        });
    })
    /*.config(function (toastrConfig) {
        angular.extend(toastrConfig, {
            autoDismiss: true,
            containerId: 'toast-container',
            maxOpened: 8,
            newestOnTop: true,
            positionClass: 'toast-bottom-right',
            preventDuplicates: false,
            preventOpenDuplicates: false,
            target: 'body'
        });
    })*/
    .run(function ($window, $cookieStore, $log) {
        $window.addEventListener('beforeunload', function () {
            $cookieStore.remove('token');
            $log.debug('app unload - remove token');
        });
    })
    .filter('localTime', function (DataUtility) {
        return function (date) {
            return DataUtility.formatDate(date);
        };
    })
    .factory('httpInterceptor', function ($q, $cookieStore, $rootScope, usSpinnerService,$injector) {
        return {
            'request': function (config) {
                //usSpinnerService.spin('spinner-1');
                $rootScope.running = true;
                if (config.url.indexOf('api/') === 0) {
                    config.headers = config.headers || {};
                    var token = $cookieStore.get('token');
                    config.headers.TDSauthorization = token;
                }
                return config;
            },
            'response': function (response) {
                $rootScope.running = false;
                //usSpinnerService.stop('spinner-1');
                return response;
            },
            'requestError': function (error) {
                //usSpinnerService.stop('spinner-1');
                //$injector.get('toastr').error('An error(s) has occurred while processing the request', 'Error');
                //$rootScope.running = false;
                return $q.reject(error);
            },
            'responseError': function (error) {
                var status = error.status;
                var message = error.data;
                if (status === 499) {
                    $injector.get('toastr').error(message, 'Error');
                }
                else if (status === 404 && message === '') {
                    message = 'The data that you are requesting for was not found';
                }
                else if (status === 400 && message === '') {
                    message = 'Your request(s) could not be understood by the server due to malformed syntax';
                }
                else if (status === 403 && message === '') {
                    message = 'You are not allowed to access this information';
                }
                else if (status === 401 && message === '') {
                    message = 'Please refresh your page for authentication';
                }
                else {
                    message = 'An error(s) has occurred while processing your request';
                }

                //usSpinnerService.stop('spinner-1');
                //$injector.get('toastr').error(message, 'Error');
                $rootScope.running = false;
                return $q.reject(error);
            } 
        };
    }).config(['usSpinnerConfigProvider', function (usSpinnerConfigProvider) {
        usSpinnerConfigProvider.setTheme('bigBlue', { color: '#00aaea', radius: 20 });
    }]);    
