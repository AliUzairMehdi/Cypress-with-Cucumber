const {
  Given,
  When,
  Then,
} = require(`@badeball/cypress-cucumber-preprocessor`);

const authenticationPageActions = require(`@main/authenticationPage/actions/authentication.actions`);

Given("User navigates to automation excercise website", function () {
  cy.visit("/");
});

Then("Verify that home page is visible successfully", () => {});

Given("User navigates to sign up page", () => {});

Then("Verify signup page is visible successfully", () => {});

When(
  "User fills the registration form with valid details and clicks signup",
  () => {}
);

Then("Verify user is registered successfully", () => {});
