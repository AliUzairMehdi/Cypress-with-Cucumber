const authenticationPageSelectors = require("../selectors/authentication.selectors");
const browserActions = require("../../../utils/browserActions.utils");

function enterName(name = "") {
  browserActions.enterValue(authenticationPageSelectors.signUpFormName, name);
}

function enterEmail(email = "") {
  browserActions.enterValue(authenticationPageSelectors.signUpFormEmail, email);
}

function clickSignUpButton() {
  browserActions.click(
    authenticationPageSelectors.signUpButton,
    "Sign Up Button"
  );
}

module.exports = { enterEmail, enterName, clickSignUpButton };
