// run with "npm cypress open"

describe("The message page ", () => {
  it("should load by clicking option 5.", () => {
    cy.visit("http://localhost:3000/");
    cy.contains("5").click();
  });

  it("should allow the user to write a comment.", () => {
    cy.get("textarea").type("I am a Barbie princess");
  });

  it("should allow the user to click a button to send the message", () => {
    cy.contains("Send message to Daddy").click();
  });

  it("should show the user a message stating daddy will read the message", () => {
    cy.contains("I can't wait to read your message!!!").click();
  });

  it("should allow the user to click a message to not send a message", () => {
    cy.visit("http://localhost:3000/");
    cy.contains("5").click();
    cy.contains("No Comment").click();
  });

  it("should show the user a message stating daddy will read the message", () => {
    cy.contains("I understand. I LOVE YOU !!!").click();
  });
});
