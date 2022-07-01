// run with "npm cypress open"

describe("The app's main page ", () => {
  it("should load", () => {
    cy.visit("http://localhost:3000/");
  });

  it("should ask the user how was their day", () => {
    cy.get('h1').should('have.text', 'How was your day?');
  });

  it("should have five options", () => {
    cy.contains('1');
    cy.contains('2');
    cy.contains('3');
    cy.contains('4');
    cy.contains('5');
  });

  it("should have a send button", () => {
    cy.contains("SEND");
  });

});
