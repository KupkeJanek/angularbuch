import { TaskListComponent } from './../../src/app/tasks/task-list/task-list.component';
describe('Task-List', () => {
  beforeEach(() => {
    cy.visit('tasks')
  });

  it('should display the task list', () => {
    cy.get('.task-list-entry').its('length').should('be.gte', 1)
  });

  it('should allow searching for tasks', () => {
    cy.get('#search-tasks').type('Ersten Prototyp').wait(500)
    cy.get('.task-list-entry').its('length').should('be.equal', 1)
  });

  it('should allow searching for tasks (advanced)', () => {

    const searchTerm = 'Ersten Prototyp';

    cy.intercept('GET', '**/api/tasks/**').as('search');
    cy.get('#search-tasks').type(searchTerm)

    cy.wait('@search').then((interception) => {
      const requestUrl = interception.request.url;
      assert.include(requestUrl, encodeURIComponent(searchTerm))
    })
    cy.get('.task-list-entry').its('length').should('be.equal', 1)
  });

  it('should save the searchTerm in the form-component', () => {
    const searchTerm = 'Ersten Prototyp';
    cy.get('#search-tasks').type(searchTerm)

    let ng!: any;

    cy.window()
      .then((win) => {
        ng = (win as any).ng; //
      })
      .then(() => cy.document())
      .then((doc) =>{
         const taskListInstance= ng
             .getComponent(doc.querySelector('pjm-task-list'))  as TaskListComponent;
        assert.equal(taskListInstance.searchTerm.value, searchTerm);
      });
  });


  it('should display a message when the list is empty', () => {
    cy.intercept('**/api/tasks/**', []);
    cy.visit('tasks')
    cy.get('.task-list').should('contain', 'Keine Aufgaben vorhanden')
  });

});
