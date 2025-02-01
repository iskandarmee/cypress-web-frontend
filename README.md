
# Cypress Testing Framework

This repository contains end-to-end tests for our web application using [Cypress](https://www.cypress.io/).

## Table of Contents

- [Installation](#installation)
- [Folder Structure](#folder-structure)
- [Running Tests](#running-tests)
- [Configuration](#configuration)
- [Writing Tests](#writing-tests)

## Installation

Follow these steps to get the Cypress testing framework up and running locally:

1. Clone the repository:
   ```bash
   git clone https://github.com/iskandarmee/cypress-web-frontend.git
   ```

2. Navigate into the project directory:
   ```bash
   cd your-repo
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Install Cypress:
   ```bash
   npx cypress install
   ```

## Folder Structure

The default folder structure for Cypress tests:

```
your-repo/
├── cypress/
│   ├── fixtures/            # Sample data files for tests
│   ├── integration/         # Your test files go here
│   ├── plugins/             # Custom plugins
│   ├── support/             # Custom commands and global settings
├── node_modules/            # Node dependencies
├── cypress.config.js        # Cypress configuration file
└── package.json             # NPM package manager file
```

## Running Tests

You can run Cypress tests either in the interactive mode or headlessly.

### Interactive Mode

To open the Cypress Test Runner:

```bash
npx cypress open
```

This will open a GUI where you can select and run individual tests.

### Headless Mode

To run tests in headless mode (no GUI):

```bash
npx cypress run
```

You can also specify which browser to use with the `--browser` flag:

```bash
npx cypress run --browser chrome
```

## Configuration

You can customize Cypress settings in the `cypress.config.js` file. Here's an example configuration:

```js
const { defineConfig } = require("cypress");


module.exports = defineConfig({
  e2e: {
    specPattern: 'cypress/integration/**/*.cy.js',
    supportFile: 'cypress/support/integration.js',

    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
```

## Writing Tests

Create test files in the `cypress/integration` folder. Each test file should contain one or more test cases.

Example of a simple test:

```javascript
describe('My First Test', () => {
  it('Visits the app and checks the title', () => {
    cy.visit('http://localhost:3000');
    cy.contains('Welcome to the app');
  });
});
```

## Additional Resources

- [Cypress Documentation](https://docs.cypress.io/)
- [Cypress Examples](https://github.com/cypress-io/cypress-example-kitchensink)
