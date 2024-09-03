# playwright-cucumber

This repository demonstrates how to set up Playwright with TypeScript and Cucumber for end-to-end testing.

## Prerequisites

- VS code
- Node.js (version 18 or higher)
- npm or yarn

## Table of Contents

- Installation
- Usage
- Project Structure
- Writing Tests
- Running Tests
- Configuration
- Contributing
- License

## Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/2021325/playwright-cucumber.git
    cd playwright-cucumber
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

## Usage

### Running Tests

To run all tests, use the following command:
```bash
npm test
```
## Project Structure

playwright-cucumber/
├── src/
│   ├── main/
│   │   ├── pages/          Contains page object models.
│   │   └── utils/          Contains utility functions.
│   └── test/
│       ├── features/       Contains feature files.
│       └── steps/          Contains step definitions.
├── playwright.config.ts    Configuration file for Playwright.
├── cucumber.json           Configuration file for Cucumber.
├── package.json            Project dependencies and scripts.
└── README.md

## Writing Tests
Feature Files
Feature files are written in Gherkin syntax and located in the src/test/features/ directory. Example

Feature: Example feature

  Scenario: Example scenario
    Given I open the homepage
    When I click on the login button
    Then I should see the login form

Step Definitions
Step definitions are located in the src/test/steps/ directory. Example:

