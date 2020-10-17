/// <reference types="cypress" />
import LoginPage from '../../POM/loginPage'

const authPage = '.login'
const btn_logout = '.logout'

export default function login() {
  //inherit from login class
  const login = new LoginPage()
  //login user
  cy.get(authPage).click()
  cy.fixture('data').then((data) => {
    login.fillEmail(data.email)
    login.fillPassword(data.password)
  })
  login.submit()
  //validate correct login
  cy.get(btn_logout).should('be.visible')
}
