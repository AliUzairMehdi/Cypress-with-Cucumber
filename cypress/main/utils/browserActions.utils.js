const waits = require("../../fixtures/waits.json");
const timeout = waits.maxTimeout / 60000;

function waitForDisplayed(selector, elementName) {
  let element = cy.get(selector, { timeout: waits.maxTimeout });
  element.scrollIntoView();
  try {
    element.should("be.visible");
  } catch (error) {
    throw new Error(
      `${elementName} is not visible after ${timeout} minutes: ${error}`
    );
  }
}

function click(selector, elementName) {
  let element = cy.get(selector, { timeout: waits.maxTimeout });
  element.scrollIntoView();
  try {
    element.click({ force: true });
  } catch {
    throw new Error(
      `${elementName} is not clicked after ${timeout} minutes: ${error}`
    );
  }
}

async function getElementText(selector, elementName) {
  waitForDisplayed(selector, elementName);
  return cy.get(selector).invoke("text");
}

async function getUrl() {
  return cy.url().then((url) => {
    return url;
  });
}

function getElementsLength(selector) {
  return cy.getLength(selector);
}

function getElementTextArray(selector, elementArrayName) {
  waitForDisplayed(selector, elementArrayName);
  textArray = "";
  cy.get(selector).then(($elements) => {
    return Array.from($elements)
      .map((element) => element.textContent.trim())
      .then((textArray) => {
        textArray = textArray;
        console.log(elementsArray);
      });
  });
  return textArray;
}

function enterValue(selector, value) {
  click(selector, selector);
  cy.get(selector).type(value);
}

function checkOption(selector, value) {
  if (value) cy.get(selector).check(value);
  else cy.get(selector).check();
}

function selectOptionFromDropdown(selector, optionText) {
  // cy.get(selector).click();
  cy.get(selector + " option")
    .contains(optionText)
    .then((option) => {
      cy.get(selector).select(option.text());
    });
  // cy.select()
}

module.exports = {
  click,
  waitForDisplayed,
  getElementText,
  getElementTextArray,
  getElementsLength,
  getUrl,
  enterValue,
  checkOption,
  selectOptionFromDropdown,
};
