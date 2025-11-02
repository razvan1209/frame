import loginPage from '../../pages/loginPage';

describe('Login Page Tests', () => {
  beforeEach(() => {
    cy.visit('https://practicetestautomation.com/practice-test-login/');
  });

  it('should login successfully with valid credentials', () => {
    loginPage.typeUsername('student').should('contain.value', 'student');
    loginPage
      .typePassword('Password123')
      .should('contain.value', 'Password123');
    loginPage.clickLogin();

    cy.url().should('contain', 'logged-in-successfully');
  });

  it('should show error message with invalid credentials', () => {
    loginPage.typeUsername('wronguser');
    loginPage.typePassword('wrongpassword');
    loginPage.clickLogin();

    loginPage.getErrorMessage().should('be.visible').and('contain', 'invalid');
  });
});
