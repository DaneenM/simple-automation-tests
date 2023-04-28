# Alle Website Automation Tests

This repository contains automated tests for the Alle website, written in JavaScript using the WebdriverIO testing framework and Mocha test runner. The tests verify the functionality of the login page and registration page by checking that a user can successfully login with valid credentials and is shown the dashboard page, and that error messages are displayed when invalid credentials or phone numbers are entered on the login and registration pages.

## Getting Started

To run these tests on your local machine, you will need to have Node.js and npm installed. Then, follow these steps:

1. Clone this repository to your local machine.
2. Navigate to the repository directory in your terminal or command prompt.
3. Run `npm install` to install the necessary dependencies.
4. Run `npm test` to run the test suite.

## Test Structure

There are four tests included in this test suite:

1. `loginWithValidCredentials`: This test verifies that a user can successfully login with valid credentials and is shown the dashboard page.
2. `loginWithInvalidCredentials`: This test verifies that an error message is displayed when invalid credentials are entered on the login page.
3. `verifyVerificationInputAfterJoiningAlle`: This test verifies that a verification input is displayed after a user joins Alle on the registration page.
4. `verifyErrorMessageWhenUserEntersInvalidPhoneNumber`: This test verifies that an error message is displayed when an invalid phone number is entered on the registration page.

The tests use CSS selectors and `data-testid` attributes to locate and interact with page elements, and `waitForDisplayed()` and `waitForClickable()` commands to ensure that elements are loaded before interacting with them.

## Contributing

If you would like to contribute to this test suite, feel free to create a pull request with your changes. Please ensure that your changes are thoroughly tested and do not break any existing tests.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.

I hope this updated README.md file helps you showcase your automation tests on GitHub.
