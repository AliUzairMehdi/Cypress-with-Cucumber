# Cypress Integration with Cucumber Boilerplate

## Repository

This repository is a basic boilerplate of cypress integrated with cucumber following a BDD approach.

## Cypress and Cucumber

Cypress is an open-source end-to-end JavaScript testing framework for web applications. It is built on top of Mocha and Chai, and offers features like command-line interface, headless browsers and many more. Cypress is designed to help developers test their applications in a more seamless and streamlined way.
Cucumber is a well-known Behavior-Driven Development (BDD) framework that lets developers implement (or perform) end-to-end testing. The framework is so popular as a BDD testing tool is that the framework uses a language called Gherkin. Gherkin is the language used by Cucumber developers to define tests. Since it is written in plain English, it is easy to understand even for a non-technical user.

The combination of Cypress and Cucumber provides a robust framework that permits you to form purposeful tests in a simple method.

### Setting up your Cypress Project from this boilerplate

### Prerequisites

For setting up you must have `node js` installed. For `node` installation, please visit: https://nodejs.org/en/download/.

### Setup your Cypress Project

You need to follow these steps in order to set up your own Cypress project integrated with Cucumber:

1. Clone this git repository by the command: `git clone .git`

2. Once you have successfully cloned the repository, navigate into it using the terminal or cmd and install all the dependencies by: `npm i`

All the necessary dependencies would be installed.

### Customize the project:

You can customize the project according to your needs by following these instructions:

1. Change the `baseUrl` from `cypress.config.js` file to your website URL or application under test. For example: `baseUrl: "https://your-website-URl.com"`.

2. Replace your `.feature` files under `/cypress/e2e/features`.

3. Replace your `.step.js` steps files under `/cypress/e2e/stepDefinions`.

4. The folder `/cyppress/main/UI` contains some sample UI components which you may use, replace them as per your use case.

You can read in details about these folders in docs.

## Executing Cypress Project

For executing the single flow or all flows you can use the following command:

For example: `npx cypress run --env flowName=<example-flow-you-want-to-run> --browser <browser-you-want-to-run-your-tests-in>`

In repository's case, the command is : `npx cypress run --env flowName=authenticationFlow --browser chrome --headed`

You can use as many options as you want for how you want to execute your automation scripts. For exploring different options, please visit: https://docs.cypress.io/guides/guides/command-line.

### Reporting

For test report, mocha-awesomeware-reporter is used
