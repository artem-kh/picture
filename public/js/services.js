(function (angular, app) {
    'use strict';

    app.factory('userService',['$rootScope', function($rootScope){
        var userService = {};
        userService.isLoggedIn = false;

        userService.updateLoginStatus = function (value) {
            userService.isLoggedIn = value;
            $rootScope.$broadcast("updated_loggedInStatus");
        };

        return userService;

    }]);
})(window.angular, window.angular.module('mainApp'));