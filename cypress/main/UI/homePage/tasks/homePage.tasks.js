const homePageActions = require("../actions/homePage.actions");

async function userNavigatesToAuthenticationPage() {
  await homePageActions.clickLoginSignUpButton();
}

module.exports = {
  userNavigatesToAuthenticationPage,
};
