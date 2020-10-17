/// <reference types="cypress" />

const accountPage = '.account'
const orders = 'a[title=Orders]'
const ordersTable = '#order-list'
export default function blouseValidation() {
  //open personal page
  cy.get(accountPage).click()
  //open orders
  cy.get(orders).click()
  //validate order status
  cy.get(ordersTable)
    .find('tbody tr:first')
    .find('td')
    .eq(4)
    .should('contain', 'On backorder')
  //validate order price
  cy.get(ordersTable)
    .find('tbody tr:first')
    .find('td')
    .eq(2)
    .should('contain', '$29.00')
}
