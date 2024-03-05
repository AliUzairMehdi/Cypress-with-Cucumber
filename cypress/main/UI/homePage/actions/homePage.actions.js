const homePageSelectors = require("../selectors/homePage.selectors");
const browserActions = require("../../../utils/browserActions.utils");

async function clickLoginSignUpButton() {
  browserActions.click(
    homePageSelectors.getHomePageLoginButton,
    "Login button"
  );
}

module.exports = { clickLoginSignUpButton };
