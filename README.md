# playwright-cucumber

This repository demonstrates how to set up Playwright with TypeScript and Cucumber for end-to-end testing.

## Prerequisites

- VS code
- Node.js (version 18 or higher)
- npm or yarn

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/2021325/playwright-cucumber.git
   cd playwright-typescript-cucumber

2.Install the dependencies:
   npm install
# or
yarn install

Project Structure

.
├── features
│   ├── example.feature
├── src
│   ├── steps
│   │   ├── example.steps.ts
│   ├── support
│   │   ├── world.ts
├── playwright.config.ts
├── cucumber.js
├── tsconfig.json
└── package.json



Configuration
Playwright Configuration
The playwright.config.ts file contains the Playwright configuration. Adjust it according to your needs.

Cucumber Configuration
The cucumber.js file contains the Cucumber configuration. Adjust it according to your needs.

Writing Tests
Create a feature file in the features directory:

Feature: Example feature

Scenario: Example scenario
  Given I open the homepage
  Then I should see the title "Example"


  Running Tests
To run the tests, use the following command:

npx cucumber-js
# or
yarn cucumber-js





