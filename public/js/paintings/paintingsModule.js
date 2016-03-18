(function (angular) {
    'use strict';
    angular.module('mainApp.paintings', [])
        .controller("paintingsCtrl", ['$scope','$http','$location','$timeout', function ($scope, $http, $location, $timeout) {
            //console.log("k;lk;k");
            var Paintings = this;

            Paintings.data = [];


            Paintings.counts = [{value: "1"},
                {value: "3"},
                {value: "5"},
                {value: "8"}];

            Paintings.count_value = Paintings.counts[0].value;



            Paintings.Math = Math;
            Paintings.pageSize = 1;
            Paintings.curPage = 0;
            Paintings.filtered_pictures = [];

            $http.get('/contactlist').then(function(response){
                console.log(response);
                Paintings.data = response.data;
                Paintings.pictureLength = Paintings.data.length;

            }, function(error){
                console.log(error);
            });


            $timeout(function(){
                $scope.$watch("Paintings.count_value", function () {
                    Paintings.pageSize = Paintings.count_value;
                    Paintings.countOfPages = Paintings.Math.ceil(Paintings.pictureLength / Paintings.pageSize);
                    console.log(Paintings.filtered_pictures);
                    console.log(Paintings.countOfPages)
                })

            }, 100);


            Paintings.add = function(obj){
                $http.post('/contactlist', obj).then(function(response){
                    $location.path('/paintings');

                }, function(error){
                    console.log(error);
                });
            };

            Paintings.remove = function(id){
                $http.delete('/contactlist/'+id);
            };

            Paintings.update = function(id, obj){
                console.log(id);
                console.log(obj);
                $http.put('/contactlist/' + id, obj);
            };


        }]);
})(window.angular);