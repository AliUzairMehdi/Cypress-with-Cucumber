const homePageSelectors = require("../selectors/homePage.selectors");
const browserAssertions = require("../../../utils/browserAssertions.utils");
const assertion = require("../../../../fixtures/assertionData.json");

function verifyHomePageIsAppearing(isLast = false) {
  browserAssertions.verifyPageIsOpened(
    assertion.urls.homePage,
    assertion.errorMessages.pages.homePage
  );
  browserAssertions.verifyElementIsExisting(
    homePageSelectors.getHomePageSlider,
    assertion.errorMessages.elements.homePageSlider,
    isLast
  );
}

module.exports = {
  verifyHomePageIsAppearing,
};
