const {
  Given,
  When,
  Then,
} = require(`@badeball/cypress-cucumber-preprocessor`);

const homePageTasks = require(`../../main/UI/homePage/tasks/homePage.tasks`);
const homePageAssertions = require("../../main/UI/homePage/assertions/homePage.assertions");

Given("User navigates to automation excercise website", function () {
  cy.visit("/");
});

Then("Verify that home page is visible successfully", function () {
  homePageAssertions.verifyHomePageIsAppearing();
  cy.screenshot();
});

Given("User navigates to sign up page", function () {
  homePageTasks.userNavigatesToAuthenticationPage();
});

Then("Verify signup page is visible successfully", function () {});

When(
  "User fills the registration form with valid details and clicks signup",
  function () {}
);

Then("Verify user is registered successfully", function () {
  cy.wait(10000);
});
