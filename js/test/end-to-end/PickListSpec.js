describe('PickList App', function() {

    describe('Pick List view', function() {

        beforeEach(function() {
            browser.get('http://localhost:63342/angular-picklist/html/pick-list.html');
        });


        it('should filter available items', function() {

            var availableItems = element.all(by.repeater('availableItem in availableItems'));
            var query = element(by.model('query'));

            expect(availableItems.count()).toBe(6);

            query.sendKeys('C');
            expect(availableItems.count()).toBe(2);

            query.clear();
            query.sendKeys('Kevin');
            expect(availableItems.count()).toBe(1);
        });
    });
});