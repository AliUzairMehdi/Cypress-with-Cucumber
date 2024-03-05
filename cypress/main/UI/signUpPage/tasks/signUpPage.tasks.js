const signUpPageActions = require("../actions/signUpPage.actions");
const testData = require("../../../../fixtures/testData.json");

function userEntersDetailsOnSignUpPage() {
  signUpPageActions.userEntersTitle();
  signUpPageActions.userEntersPassword(testData.user.password);
  signUpPageActions.userEntersFirstName(testData.user.firstName);
  signUpPageActions.userEntersLastName(testData.user.lastName);
  signUpPageActions.userEntersDateOfBirth(testData.user.dateOfBirth);
  signUpPageActions.userEntersAddress(testData.user.address);
  signUpPageActions.userSelectsCountry(testData.user.country);
  signUpPageActions.userEntersState(testData.user.state);
  signUpPageActions.userEntersZipCode(testData.user.zipcode);
  signUpPageActions.userEntersCity(testData.user.city);
  signUpPageActions.userEntersMobileNumber(testData.user.phone);
  signUpPageActions.clickCreateAccountButton();
}

module.exports = {
  userEntersDetailsOnSignUpPage,
};
