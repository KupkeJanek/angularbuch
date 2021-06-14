describe('Create Task', () => {

  const newTaskTitle = 'New Task ' + new Date().getTime();

  beforeEach(() => {
    cy.visit('tasks/new')
  });

  it('should display the correct title', () => {
    cy.get('h2').should('have.text', 'Neue Aufgabe anlegen')
  });

  it('should create new tasks', () => {
    cy.get('[name="title"]').type(newTaskTitle)
    cy.get('[name="description"]').type('This is a test task')

    cy.get('[type="submit"]').click()

    // Check Task was successfully saved
    cy.url().then(url => expect(url.endsWith('tasks')).equal(true))
    cy.get('.task-list').should('contain.text', newTaskTitle);
  });

  it('should stay on the page when discarding window.confirm', () => {
    cy.on('window:confirm', () => false);
    cy.get('[name="title"]').type(newTaskTitle)
    cy.get('#cancel').click()
    cy.url().should('contain', 'tasks/new')
  });

  it('should leave the page when accepting window.confirm', () => {
    cy.on('window:confirm', () => true);
    cy.get('[name="title"]').type(newTaskTitle)
    cy.get('#cancel').click()
    cy.url().then(url => expect(url.endsWith('tasks')).equal(true))
  });

});
