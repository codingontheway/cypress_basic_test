class LoginPage {
  fillEmail(email) {
    cy.get('#email').clear().type(email)
    return this
  }

  fillPassword(password) {
    cy.get('#passwd').clear().type(password)
    return this
  }

  submit() {
    cy.get('#SubmitLogin').click()
  }
}

export default LoginPage
