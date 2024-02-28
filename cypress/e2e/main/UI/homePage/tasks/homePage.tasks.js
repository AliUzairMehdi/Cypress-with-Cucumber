const homePageActions = require("../actions/homePage.actions");

function userNavigatesToAuthenticationPage() {
  homePageActions.clickLoginSignUpButton();
}

module.exports = {
  userNavigatesToAuthenticationPage,
};
