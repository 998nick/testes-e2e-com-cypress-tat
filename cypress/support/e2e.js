// ***********************************************************
// This example support/e2e.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
import registerCypressGrep from '@cypress/grep/src/support'
registerCypressGrep()

import 'cypress-mailosaur'
import './commands'
import 'cypress-iframe'


