# 🎭 Playwright

[![npm version](https://img.shields.io/npm/v/playwright.svg)](https://www.npmjs.com/package/playwright) <!-- GEN:chromium-version-badge -->[![Chromium version](https://img.shields.io/badge/chromium-128.0.6613.36-blue.svg?logo=google-chrome)](https://www.chromium.org/Home)<!-- GEN:stop --> <!-- GEN:firefox-version-badge -->[![Firefox version](https://img.shields.io/badge/firefox-129.0-blue.svg?logo=firefoxbrowser)](https://www.mozilla.org/en-US/firefox/new/)<!-- GEN:stop --> <!-- GEN:webkit-version-badge -->[![WebKit version](https://img.shields.io/badge/webkit-18.0-blue.svg?logo=safari)](https://webkit.org/)<!-- GEN:stop --> [![Join Discord](https://img.shields.io/badge/join-discord-infomational)](https://aka.ms/playwright/discord)

## [Documentation](https://playwright.dev) | [API reference](https://playwright.dev/docs/api/class-playwright)

Playwright is a framework for Web Testing and Automation. It allows testing [Chromium](https://www.chromium.org/Home), [Firefox](https://www.mozilla.org/en-US/firefox/new/) and [WebKit](https://webkit.org/) with a single API. Playwright is built to enable cross-browser web automation that is **ever-green**, **capable**, **reliable** and **fast**.

|          | Linux | macOS | Windows |
|   :---   | :---: | :---: | :---:   |
| Chromium <!-- GEN:chromium-version -->128.0.6613.36<!-- GEN:stop --> | :white_check_mark: | :white_check_mark: | :white_check_mark: |
| WebKit <!-- GEN:webkit-version -->18.0<!-- GEN:stop --> | :white_check_mark: | :white_check_mark: | :white_check_mark: |
| Firefox <!-- GEN:firefox-version -->129.0<!-- GEN:stop --> | :white_check_mark: | :white_check_mark: | :white_check_mark: |

Headless execution is supported for all browsers on all platforms. Check out [system requirements](https://playwright.dev/docs/intro#system-requirements) for details.


# playwright-cucumber

This repository demonstrates how to set up Playwright with TypeScript and Cucumber for end-to-end testing.

## Prerequisites

- VS code
- Node.js (version 18 or higher)
- npm or yarn

## Table of Contents
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Installation](#installation)
- [Running Tests](#running-tests)
- [Mock API Testing](#mock-api-testing)
- [Continuous Integration](#continuous-integration)
- [Contributing](#contributing)
- [License](#license)


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

import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { Page } from 'playwright';

let page: Page;

Given('I open the homepage', async function () {
  await page.goto('https://example.com');
});

When('I click on the login button', async function () {
  await page.click('#login');
});

Then('I should see the login form', async function () {
  const loginForm = await page.$('#login-form');
  expect(loginForm).not.toBeNull();
});

Configuration
Playwright Configuration
The playwright.config.ts file contains configuration for Playwright. Example:

import { PlaywrightTestConfig } from '@playwright/test';

const config: PlaywrightTestConfig = {
  use: {
    headless: true,
    viewport: { width: 1280, height: 720 },
  },
};

export default config;

NPM Scripts
The following npm scripts are available for running and managing tests:

npm test: Runs all tests using Playwright.
npm run show-report: Generates and opens the HTML report after tests are executed.
npm run test:ci: Runs tests in headless mode for CI/CD environments.
To add these scripts to your package.json, include the following:

```Typescript
{
  "scripts": {
    "test": "npx playwright test",
    "show-report": "npx playwright show-report",
    "test:ci": "npx playwright test --ci"
  }
}
```


## Continuous Integration

[check playwright docs for ci](https://playwright.dev/docs/ci)


## Contributing
Contributions are welcome! Please open an issue or submit a pull request.

## License
