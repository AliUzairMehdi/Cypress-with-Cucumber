const authenticationPageActions = require("../actions/authentication.actions");
const testData = require("../../../../fixtures/testData.json");

function userEntersDetailsForSignUp() {
  authenticationPageActions.enterName(testData.credentials.correct.name);
  authenticationPageActions.enterEmail(testData.credentials.correct.email);
  authenticationPageActions.clickSignUpButton();
}

module.exports = { userEntersDetailsForSignUp };
