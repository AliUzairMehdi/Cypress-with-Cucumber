const faker = require("faker");

function navigateToHomePagePage() {
  cy.visit("/");
}

function navigateToAnyPage(page) {
  navigateToHomePagePage();
  let index = 0;
  if (page == "elements") index = 0;
  else if (page == "forms") index = 1;
  else if (page == "alerts") index = 2;
  else if (page == "widgets") index = 3;
  else if (page == "interactions") index = 4;
  else if (page == "book store") index = 5;
  cy.get(".card.mt-4.top-card").eq(index).click();
}

function clickTextBoxElement() {
  cy.get(".menu-list #item-0").eq(0).click();
}

function generateRandomName() {
  return faker.name.findName();
}

function generateRandomEmail() {
  return faker.internet.email();
}

function fillTextBoxElement(randomName, randomEmail) {
  cy.get("#userName").type(randomName);
  cy.get("#userEmail").type(randomEmail);
  cy.get("#submit").click();
}

module.exports = {
  navigateToAnyPage,
  navigateToHomePagePage,
  fillTextBoxElement,
  clickTextBoxElement,
  generateRandomName,
  generateRandomEmail,
};
