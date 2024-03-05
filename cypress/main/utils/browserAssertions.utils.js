const assert = require("soft-assert");

function verifyElementsAreEqual(actual, expected, message) {
  expect(actual).to.equal(expected, message);
}

function verifyPageIsOpened(expectedUrl, errorMessage, isLast) {
  cy.getUrl().then((url) => {
    assert.softAssert(url, expectedUrl, errorMessage);
    if (isLast) assert.softAssertAll();
  });
}

function verifyElementIsExisting(selector, errorMessage, isLast) {
  cy.getLength(selector).then((length) => {
    let status = length > 0;
    assert.softTrue(status, errorMessage);
    if (isLast) assert.softAssertAll();
  });
}

module.exports = {
  verifyElementIsExisting,
  verifyElementsAreEqual,
  verifyPageIsOpened,
};
