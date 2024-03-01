const homePageSelectors = require("../selectors/homePage.selectors");
const browserActions = require("../../../utils/browserActions.utils");
const browserAssertions = require("../../../utils/browserAssertions.utils");
const waits = require("../../../../fixtures/waits.json");

async function verifyHomePageIsAppearing() {
  try {
    let numberOfElements = await browserActions.getElementsLength(
      homePageSelectors.getHomePageSlider
    );
    let status = numberOfElements > 0 ? true : false;
    browserAssertions.verifyElementIsExisting(
      status,
      `Home Page is not appearing`
    );
  } catch (error) {
    console.error(error);
    throw error;
  }
}

module.exports = {
  verifyHomePageIsAppearing,
};
