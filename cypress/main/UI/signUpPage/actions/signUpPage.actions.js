const signUpPageSelectors = require("../selectors/signUpPage.selectors");
const browserActions = require("../../../utils/browserActions.utils");

function userEntersTitle() {
  browserActions.checkOption(signUpPageSelectors.getTitleForMale);
}

function userEntersFirstName(firstName) {
  browserActions.enterValue(
    signUpPageSelectors.getSignUpFormFirstName,
    firstName
  );
}

function userEntersLastName(lastName) {
  browserActions.enterValue(
    signUpPageSelectors.getSignUpFormLastName,
    lastName
  );
}

function userEntersPassword(password) {
  browserActions.enterValue(
    signUpPageSelectors.getSignUpFormPassword,
    password
  );
}

function userEntersDateOfBirth(dateOfBirth) {
  browserActions.selectOptionFromDropdown(
    signUpPageSelectors.getDayFromDateOfBirth,
    dateOfBirth["day"]
  );
  browserActions.selectOptionFromDropdown(
    signUpPageSelectors.getMonthFromDateOfBirth,
    dateOfBirth["month"]
  );
  browserActions.selectOptionFromDropdown(
    signUpPageSelectors.getYearFromDateOfBirth,
    dateOfBirth["year"]
  );
}

function userEntersAddress(address) {
  browserActions.enterValue(signUpPageSelectors.getSignUpFormAddress, address);
}

function userSelectsCountry(country) {
  browserActions.selectOptionFromDropdown(
    signUpPageSelectors.getSignUpFormCountry,
    country
  );
}

function userEntersState(state) {
  browserActions.enterValue(signUpPageSelectors.getSignUpFormState, state);
}

function userEntersZipCode(zipcode) {
  browserActions.enterValue(signUpPageSelectors.getSignUpZipCode, zipcode);
}

function userEntersCity(city) {
  browserActions.enterValue(signUpPageSelectors.getSignUpFormCity, city);
}

function userEntersMobileNumber(phone) {
  browserActions.enterValue(signUpPageSelectors.getSignUpMobileNumber, phone);
}

function clickCreateAccountButton() {
  browserActions.click(
    signUpPageSelectors.getCreateAccountButton,
    `Create Account Button`
  );
}

module.exports = {
  userEntersTitle,
  userEntersFirstName,
  userEntersLastName,
  userEntersPassword,
  userEntersDateOfBirth,
  userEntersAddress,
  userSelectsCountry,
  userEntersState,
  userEntersZipCode,
  userEntersMobileNumber,
  clickCreateAccountButton,
  userEntersCity,
};
