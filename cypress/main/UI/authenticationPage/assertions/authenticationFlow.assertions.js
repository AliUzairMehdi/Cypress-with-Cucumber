const authenticationPageSelectors = require("../selectors/authentication.selectors");
const browserAssertions = require("../../../utils/browserAssertions.utils");
const assertion = require("../../../../fixtures/assertionData.json");

function verifyAuthenticationPageIsAppearing(isLast = false) {
  browserAssertions.verifyPageIsOpened(
    assertion.urls.authenticationPage,
    assertion.errorMessages.pages.authenticationPage
  );
  browserAssertions.verifyElementIsExisting(
    authenticationPageSelectors.signUpForm,
    assertion.errorMessages.elements.signUpForm
  );
  browserAssertions.verifyElementIsExisting(
    authenticationPageSelectors.loginForm,
    assertion.errorMessages.elements.loginForm,
    isLast
  );
  cy.screenshot();
}

module.exports = { verifyAuthenticationPageIsAppearing };
