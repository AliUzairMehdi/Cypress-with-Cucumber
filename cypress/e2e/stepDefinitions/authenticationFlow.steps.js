const {
  Given,
  When,
  Then,
} = require(`@badeball/cypress-cucumber-preprocessor`);

const homePageTasks = require(`../../main/UI/homePage/tasks/homePage.tasks`);
const homePageAssertions = require("../../main/UI/homePage/assertions/homePage.assertions");
const authenticationPageAssertions = require(`../../main/UI/authenticationPage/assertions/authenticationFlow.assertions`);
const authenticationPageTasks = require("../../main/UI/authenticationPage/tasks/authentication.tasks");
const signUpPageTasks = require("../../main/UI/userDetails/tasks/userDetails.tasks");

Given("User navigates to automation excercise website", function () {
  cy.visit("/");
});

Then("Verify that home page is visible successfully", function () {
  homePageAssertions.verifyHomePageIsAppearing();
});

Given("User navigates to sign up page", function () {
  homePageTasks.userNavigatesToAuthenticationPage();
});

Then("Verify signup page is visible successfully", function () {
  authenticationPageAssertions.verifyAuthenticationPageIsAppearing();
});

When(
  "User fills the registration form with valid details and clicks signup",
  function () {
    authenticationPageTasks.userEntersDetailsForSignUp();
  }
);
When("User fills the sign up form on user details page", function () {
  signUpPageTasks.userEntersDetailsOnSignUpPage();
});

Then("Verify user is registered successfully", function () {});
