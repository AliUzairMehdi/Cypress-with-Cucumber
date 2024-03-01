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

function getElementText(selector, elementName) {
  waitForDisplayed(selector, elementName);
  return cy.get(selector).invoke("text");
}

async function getElementsLength(selector) {
  cy.get(selector).first().scrollIntoView();
  return cy
    .get(selector)
    .its("length")
    .then((length) => {
      return length;
    });
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

module.exports = {
  click,
  waitForDisplayed,
  getElementText,
  getElementTextArray,
  getElementsLength,
};
