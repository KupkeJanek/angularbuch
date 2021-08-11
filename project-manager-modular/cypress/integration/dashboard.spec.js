context('Dashboard', function () {
    beforeEach(function () {
        cy.visit('');
    });
    it('should automatically redirect to the dashboard', function () {
        cy.url().should('include', 'dashboard');
    });
    it('should show the dashboard header', function () {
        cy.get('h1').should('contain', 'Dashboard');
    });
});
