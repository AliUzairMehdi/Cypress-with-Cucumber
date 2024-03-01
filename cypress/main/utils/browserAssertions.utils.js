const assert = require("soft-assert");

function verifyElementsAreEqual(actual, expected, message) {
  expect(actual).to.equal(expected, message);
}

function verifyElementIsExisting(status, errorMessage) {
  expect(status).to.equal(true, errorMessage);
}

module.exports = {
  verifyElementIsExisting,
  verifyElementsAreEqual,
};
