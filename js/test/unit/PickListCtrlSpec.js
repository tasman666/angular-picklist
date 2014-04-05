describe('Pick List Controller should', function(){

    var scope, ctrl, $httpBackend;
    beforeEach(module('pickListApp'));
    beforeEach(inject(function(_$httpBackend_, $rootScope, $controller) {
        $httpBackend = _$httpBackend_;
        scope = $rootScope.$new();
        ctrl = $controller('PickListCtrl', {$scope: scope});
    }));

    it('fetch objects and assign to available items', function() {
        var data = [
            {id: 1, name: 'Nexus S'},
            {id: 2, name: 'Motorola DROID'}
        ];
        $httpBackend.expectGET('data.json').respond(data);

        $httpBackend.flush();

        expect(scope.availableItems).toEqual(data);
    });

    it('select available item', function() {
        scope.selectedAvailableItems = [];
        var item = {name: 'one'};

        scope.changeSelectionForAvailableItem(item);

        expect(scope.selectedAvailableItems).toEqual([item]);
    });

    it('deselect available item', function() {
        var item = {name: 'one'};
        scope.selectedAvailableItems = [item];

        scope.changeSelectionForAvailableItem(item);

        expect(scope.selectedAvailableItems).toEqual([]);
    });

    it('available item selected', function() {
        var item = {name: 'one'};
        scope.selectedAvailableItems = [item];

        var result = scope.isAvailableItemSelected(item);

        expect(result).toBeTruthy();
    });

    it('available item not selected', function() {
        scope.selectedAvailableItems = [];

        var result = scope.isAvailableItemSelected({name: 'one'});

        expect(result).toBeFalsy();
    });
});