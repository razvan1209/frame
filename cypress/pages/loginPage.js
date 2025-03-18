class LoginPage {
  elements = {
    usernameInput: () => cy.get("#username"),
    passwordInput: () => cy.get("#password"),
    loginButton: () => cy.get('button[id="submit"]'),
    errorMessage: () => cy.get("#error"),
  };

  typeUsername(username) {
    return this.elements.usernameInput().clear().type(username);
  }

  typePassword(password) {
    return this.elements.passwordInput().clear().type(password);
  }

  clickLogin() {
    return this.elements.loginButton().click();
  }

  getErrorMessage() {
    return this.elements.errorMessage();
  }
}

export default new LoginPage();
