describe('Home', () => {
  it('should show a defined message', () => {
    const definedMessage = 'Y si no quero hacer lo que me dices?';
    cy.visit('http://localhost:3000');
    cy.contains(definedMessage);
  })
  // it('should have a link that redirect to ORCE', () => {
  //   cy.contains('Ir a ORCE').click();
  //   cy.location('hostname').should((loc) => {
  //     expect(loc).to.eq('www.orce.uni.edu.pe');
  //   })
  // })
  it('should have an input for enter a todo task', () => {
    cy.get('input');
  })
  it('should not be disabled', () => {
    cy.get('input').should('be.enabled');
  })
  it('should receive a string as a todo task', () => {
    cy.get('input').type('Mi primera tarea');
  })
  it('should add the task type to the list', () => {
    cy.get('input').clear().type('Mi primera tarea{enter}');
    cy.get('li').should('have.text', 'Mi primera tarea');
  })
  it('should mark a task as done', () => {
    cy.get('li').click().should('have.class', 'done');
  })
  it('should mark a task as undone', () => {
    cy.get('li').click().should('not.have.class', 'done');
  })
})