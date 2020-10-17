/// <reference types="cypress" />

import login from '../modules/auth/login'
import purchaseBlouse from '../modules/purchases/purchaseBlouse'
import blouseValidation from '../modules/validations/blouseValidation'

context('purchase an item', () => {
  beforeEach(() => {
    cy.visit('http://automationpractice.com/index.php')
    cy.title().should('eq', 'My Store')
    cy.viewport(1024, 768)
  })

  it('purchase blouse', () => {
    login()
    purchaseBlouse()
    blouseValidation()
  })
})
