Feature: Authentication Feature

    Authentication Feature for automation excercise website

    Scenario: User gets registered
        Given User navigates to automation excercise website
        Then Verify that home page is visible successfully
        Given User navigates to sign up page
        Then Verify signup page is visible successfully
        When  User fills the registration form with valid details and clicks signup
        When User fills the sign up form on user details page
        Then  Verify user is registered successfully
