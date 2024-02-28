const assert = require("soft-assert");

function verifyElementsAreEqual(actual, expected, message, isLast) {
  assert.softAssert(actual, expected, message, []);
  if (isLast) assert.softAssertAll();
}

function verifyElementIsExisting(status, errorMessage, isLast) {
  assert.softTrue(status, errorMessage);
  if (isLast) assert.softAssertAll();
}

module.exports = {
  verifyElementIsExisting,
  verifyElementsAreEqual,
};
