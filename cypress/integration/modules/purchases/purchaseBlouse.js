/// <reference types="cypress" />

const blousesMenuItem = 'li > a[title=Blouses]'
const btn_addToCart = '.ajax_add_to_cart_button'
const btn_processToCheckoutPopup =
  '.button-container > a[title="Proceed to checkout"]'
const btn_proceed_chekout_summary =
  '.cart_navigation > a[title="Proceed to checkout"]'
const textarea_comment = 'textarea[name=message]'
const btn_confirmAddress = 'button[name=processAddress]'
const checkboxAcceptTerms = 'input[name=cgv]'
const btnProcessCarrier = 'button[name=processCarrier]'
const payByWire = 'a[title="Pay by bank wire"]'
const btnConfirmOrder = '.button > span'

export default function purchaseBlouse() {
  //open blouses section
  cy.get(blousesMenuItem).click({ force: true })
  //select item
  cy.get(btn_addToCart).click()
  //purchasing process
  cy.get(btn_processToCheckoutPopup).should('be.visible').click()
  cy.get(btn_proceed_chekout_summary).click()
  cy.get(textarea_comment).type('this is test buy')
  cy.get(btn_confirmAddress).click()
  cy.get(checkboxAcceptTerms).check()
  cy.get(btnProcessCarrier).click()
  cy.get(payByWire).click()
  cy.get(btnConfirmOrder).contains('I confirm my order').click()
  //order is successfull
  cy.get('.cheque-indent > strong.dark').should(
    'have.text',
    'Your order on My Store is complete.'
  )
}
