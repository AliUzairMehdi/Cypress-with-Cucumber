const actions = require("../actions/demoqaActions");

describe("Cypress Automation Suite (Demoqa Website)", function () {
  it("should navigate to the Element page", function () {
    actions.navigateToAnyPage("elements");
    actions.clickTextBoxElement();
    cy.get("#userName").type(actions.generateRandomName());
    cy.get("#userEmail").type(actions.generateRandomEmail());
    cy.get("#submit").click();
  });

  it("should navigate to forms", function () {
    actions.navigateToAnyPage("forms");
  });

  it("should navigate to Interactions", function () {});

  // it("should navigate to Alerts", function () {});

  // it("should navigate to Widgets", function () {});

  // it("should navigate to Book Store Application", function () {});
});
