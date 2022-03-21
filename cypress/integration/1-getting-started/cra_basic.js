// / <reference types="cypress" />

// Welcome to Cypress!
//
// This spec file contains a variety of sample tests
// for a todo list app that are designed to demonstrate
// the power of writing tests in Cypress.
//
// To learn more about how Cypress works and
// what makes it such an awesome testing tool,
// please read our getting started guide:
// https://on.cypress.io/introduction-to-cypress

describe('Examines a basic CRA app', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('displays the rotating react icon', () => {
    cy.get(`[data-cy=test]`).should('be.visible')
  })

  it('has basic instructions', () => {
    const basicInstruction = `Edit src/App.js and save to reload.`
    cy.get('[data-cy=basic-instructions]').should('have.text', basicInstruction)

    // // Now that we've typed our new item, let's check that it actually was added to the list.
    // // Since it's the newest item, it should exist as the last element in the list.
    // // In addition, with the two default items, we should have a total of 3 elements in the list.
    // // Since assertions yield the element that was asserted on,
    // // we can chain both of these assertions together into a single statement.
    // cy.get('.todo-list li')
    //   .should('have.length', 3)
    //   .last()
    //   .should('have.text', newItem)
  })

  it('has a link to official documentation', () => {
    // In addition to using the `get` command to get an element by selector,
    // we can also use the `contains` command to get an element by its contents.
    // However, this will yield the <label>, which is lowest-level element that contains the text.
    // In order to check the item, we'll find the <input> element for this <label>
    // by traversing up the dom to the parent element. From there, we can `find`
    // the child checkbox <input> element and use the `check` command to check it.
    cy.get('[data-cy=react-link]').should('have.text', 'Learn React').invoke('attr', 'href')
      .should('eq', 'https://reactjs.org')

    // // Now that we've checked the button, we can go ahead and make sure
    // // that the list element is now marked as completed.
    // // Again we'll use `contains` to find the <label> element and then use the `parents` command
    // // to traverse multiple levels up the dom until we find the corresponding <li> element.
    // // Once we get that element, we can assert that it has the completed class.
    // cy.contains('Pay electric bill')
    //   .parents('li')
    //   .should('have.class', 'completed')
  })
})
