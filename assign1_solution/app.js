(function(){
'use strict';

angular.module('LunchCheck', [])

.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];

function LunchCheckController($scope){
    $scope.message  = "";
    $scope.lunch    = "";
    $scope.alert    = "";

    $scope.countLunch = function(){
    if($scope.lunch == "")
    {
        $scope.message = "Please enter some data first."
        $scope.alert   = "alert alert-danger";
    }
    else
    {
        var arr = String.split($scope.lunch, ",").length;
        $scope.message = arr <= 3 ? "Enjoy!" : "Too much!";
        $scope.alert   = "alert alert-success";
    }
};

    $scope.clearText = function(){
        $scope.lunch    = "";
        $scope.message  = "";
        $scope.alert    = "";
    };
}

})();
