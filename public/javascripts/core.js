var scotchTodo = angular.module('scotchTodo', []);


scotchTodo.controller('mainCtrl', function($scope, $http) {
    $scope.formData = {};



    $http.get('/contactlist')
        .success(function(data) {
            console.log(data);

            $scope.todos = data;
        });
        //.error(function(data) {
        //    console.log('Error: ' + data);
        //});

    //$scope.createTodo = function() {
    //    $http.post('/contactlist', $scope.formData)
    //        .success(function(data) {
    //            $scope.formData = {}; // clear the form so our user is ready to enter another
    //            $scope.todos = data;
    //            console.log(data);
    //        })
    //        .error(function(data) {
    //            console.log('Error: ' + data);
    //        });
    //};
    //
    //$scope.deleteTodo = function(id) {
    //    $http.delete('/contactlist' + id)
    //        .success(function(data) {
    //            $scope.todos = data;
    //            console.log(data);
    //        })
    //        .error(function(data) {
    //            console.log('Error: ' + data);
    //        });
    //};

});
