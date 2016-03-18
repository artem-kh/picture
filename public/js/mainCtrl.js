(function (angular, app) {
    'use strict';

app.controller('mainCtrl',['$scope', '$http','userService','$rootScope','$location', function($scope, $http, userService, $rootScope, $location){

    var Main = this;


    Main.create = function(){
        switch($location.url()){
            case "/paintings":
            $location.path('/createPicture');
        }
    };
    //console.log($location.url());


    $rootScope.$on('$routeChangeStart', function (next, current) {
        //Main.path = current.originalPath;
        switch (current.originalPath) {
            case "/login":
                userService.updateLoginStatus(false);
                break;
            case "/paintings":
            case "/biography":
            case "/home":
            case "/representation":
            case "/createPicture":
                userService.updateLoginStatus(true);
                break;
        }
    });

    $rootScope.$on('updated_loggedInStatus', function(){
        Main.login = userService.isLoggedIn;
    });

}]);
})(window.angular, window.angular.module('mainApp'));