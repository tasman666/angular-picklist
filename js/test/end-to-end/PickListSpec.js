describe('PickList App', function() {

    describe('Pick List view', function() {

        beforeEach(function() {
            browser.get('http://localhost:63342/angular-picklist/html/pick-list.html');
        });


        it('should filter the phone list as user types into the search box', function() {

            var phoneList = element.all(by.repeater('phone in phones'));
            var query = element(by.model('query'));

            expect(phoneList.count()).toBe(3);

            query.sendKeys('nexus');
            expect(phoneList.count()).toBe(1);

            query.clear();
            query.sendKeys('motorola');
            expect(phoneList.count()).toBe(2);
        });
    });
});