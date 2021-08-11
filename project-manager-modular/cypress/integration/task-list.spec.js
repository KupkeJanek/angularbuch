"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
describe('Task-List', function () {
    beforeEach(function () {
        cy.visit('tasks');
    });
    it('should display the task list', function () {
        cy.get('.task-list-entry').its('length').should('be.at.least', 1);
    });
    it('should allow searching for tasks', function () {
        cy.get('#search-tasks').type('Ersten Prototyp').wait(500);
        cy.get('.task-list-entry').its('length').should('be.equal', 1);
    });
    it('should show the task-overview when clicking on a task', function () {
        cy.get('.task-list-entry:first').click();
        cy.get('.overview').contains('Task-Übersicht');
        cy.get('.overview').should('contain', 'Task-Übersicht');
        cy.get('.overview').then(function (element) {
            expect(element.text()).contains('Task-Übersicht');
        });
        cy.get('.overview').then(function (element) {
            expect(element).to.contain('Task-Übersicht');
        });
    });
    it('should allow searching for tasks (advanced)', function () {
        var searchTerm = 'Ersten Prototyp';
        cy.intercept('GET', '**/api/tasks/**').as('search');
        cy.get('#search-tasks').type(searchTerm);
        var interception = cy.wait('@search');
        interception
            .its('request.url')
            .should('contain', encodeURIComponent(searchTerm));
        interception.its('response.body').should('contain', searchTerm);
        cy.get('.task-list-entry').its('length').should('be.equal', 1);
    });
    it.only('should only return elements matching the search string', function () {
        var searchTerm = 'Ersten Prototyp';
        cy.intercept('GET', '**/api/tasks/**', function (request) {
            delete request.headers['if-none-match'];
        }).as('search');
        cy.get('#search-tasks').type(searchTerm);
        cy.wait('@search')
            .its('response.body')
            .should('have.length', 1)
            .its('0')
            .should(function (firstObject) { return expect(firstObject.title.includes(searchTerm)); });
    });
    it('should save the searchTerm in the form-component', function () {
        var searchTerm = 'Ersten Prototyp';
        cy.get('#search-tasks').type(searchTerm);
        var ng;
        cy.window()
            .then(function (win) {
            ng = win.ng; //
        })
            .then(function () { return cy.document(); })
            .then(function (doc) {
            var taskListInstance = ng.getComponent(doc.querySelector('pjm-task-list'));
            assert.equal(taskListInstance.searchTerm.value, searchTerm);
        });
    });
    it('should display a message when the list is empty', function () {
        cy.intercept('**/api/tasks/**', []);
        cy.visit('tasks');
        cy.get('.task-list').should('contain', 'Keine Aufgaben vorhanden');
    });
    it('should display the title of a task in the list', function () {
        cy.intercept('**/api/tasks/**', { fixture: 'tasks.json' });
        cy.visit('tasks');
        cy.get('.task-list-entry:first').should('contain', 'Ich bin ein Test-Task');
    });
});
