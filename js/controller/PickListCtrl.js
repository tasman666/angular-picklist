var pickListApp = angular.module('pickListApp', []);

pickListApp.controller('PickListCtrl', function ($scope, $http) {

    $scope.selectedAvailableItems = [];

    $http.get('data.json').success(function(data) {
        $scope.availableItems = data;
    });

    $scope.changeSelectionForAvailableItem = function(availableItem) {
        if ($scope.isAvailableItemSelected(availableItem)) {
           $scope.selectedAvailableItems = _.without($scope.selectedAvailableItems, availableItem)
        } else {
            $scope.selectedAvailableItems.push(availableItem);
        }
    }

    $scope.isAvailableItemSelected = function(availableItem) {
        return _.contains($scope.selectedAvailableItems, availableItem);
    }
});