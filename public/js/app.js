(function (angular) {
    'use strict';

    var app = angular.module('mainApp', [
        //'ngRoute'
        //'mainApp.login',
        'mainApp.paintings'
        //'mainApp.biography',
        //'mainApp.home',
        //'mainApp.representation'

    ])

    //.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
    //    $routeProvider
    //        .when('/login', {
    //            templateUrl: 'templates/login.html',
    //            controllerAs: 'Login',
    //            controller: 'loginCtrl',
    //            title: 'Login'
    //        })
    //        .when('/home', {
    //            templateUrl: 'templates/home.html',
    //            controllerAs: 'Home',
    //            controller: 'homeCtrl',
    //            title: 'Home'
    //        })
    //        .when('/paintings', {
    //            templateUrl: 'templates/paintings.html',
    //            controllerAs: 'Paintings',
    //            controller: 'paintingsCtrl',
    //            title: 'Paintings'
    //        })
    //        .when('/biography', {
    //            templateUrl: 'templates/biography.html',
    //            controllerAs: 'Biography',
    //            controller: 'biographyCtrl',
    //            title: 'Biography'
    //        })
    //        .when('/representation', {
    //            templateUrl: 'templates/representation.html',
    //            controllerAs: 'Representation',
    //            controller: 'representationCtrl',
    //            title: 'Representation'
    //        })
    //
    //        .when('/createPicture', {
    //            templateUrl: 'templates/create/createPicture.html',
    //            controllerAs: 'Paintings',
    //            controller: 'paintingsCtrl',
    //            title: 'Paintings'
    //        })
    //
    //        .otherwise({
    //            redirectTo: '/login'
    //        });
    //
    //    $locationProvider.hashPrefix = '!';
    //    $locationProvider.html5Mode({
    //        enabled: true,
    //        requireBase: false
    //    });
    //}])
    //    .config(['$routeProvider', '$compileProvider', function ($routeProvider, $compileProvider) {
    //        //configure routeProvider as usual
    //        $compileProvider.debugInfoEnabled(false);
    //    }])

    /*
     ###
     ### BOOTSTRAPING APP
     ###
     */
    angular.element(document).ready(function () {
        angular.bootstrap(document, ['mainApp']);
    });
})(window.angular);


