var pickListApp = angular.module('pickListApp', []);

pickListApp.controller('PickListCtrl', function ($scope, $http) {
    $http.get('data.json').success(function(data) {
        $scope.availableItems = data;
    });
});