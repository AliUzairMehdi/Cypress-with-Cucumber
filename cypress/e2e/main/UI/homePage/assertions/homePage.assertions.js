const { softAssert } = require("soft-assert");
const homePageSelectors = require("../selectors/homePage.selectors");
const browserActions = require("../../../utils/browserActions.utils");
const browserAssertions = require("../../../utils/browserAssertions.utils");
const waits = require("../../../utils/waits.json");

function verifyHomePageIsAppearing(isLast) {
  cy.screenshot();
  let isExisting =
    cy.get(homePageSelectors.getHomePageSlider).its("length") > 0
      ? true
      : false;
  browserAssertions.verifyElementIsExisting(
    isExisting,
    "Home Page is not appearing",
    isLast
  );
}

module.exports = {
  verifyHomePageIsAppearing,
};
