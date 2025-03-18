import registerPage from "../../pages/registerPage";

describe("Register Page Tests", () => {
  beforeEach(() => {
    cy.visit("https://practicetestautomation.com/practice-test-login/");
  });

  it("should login successfully with valid credentials", () => {
    registerPage.typeUsername("student").should("contain.value", "student");
    registerPage
      .typePassword("Password123")
      .should("contain.value", "Password123");
    registerPage.clickLogin();

    cy.url().should("contain", "logged-in-successfully");
  });

  it("should show error message with invalid credentials", () => {
    registerPage.typeUsername("wronguser");
    registerPage.typePassword("wrongpassword");
    registerPage.clickLogin();

    registerPage
      .getErrorMessage()
      .should("be.visible")
      .and("contain", "invalid");
  });
});
