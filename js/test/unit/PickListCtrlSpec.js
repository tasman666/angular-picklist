describe('Pick List Controller should', function(){
    beforeEach(module('pickListApp'));
    it('should create "phones" model with 3 phones', inject(function($controller) {
        var scope = {},
            ctrl = $controller('PickListCtrl', { $scope: scope });

        expect(scope.phones.length).toBe(3);
    }));
});