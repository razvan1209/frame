import practiceButtonsPage from '../../pages/practiceButtonsPage';

describe('Practice Check Buttons Page Tests', () => {
  beforeEach(() => {
    cy.visit('https://practicetestautomation.com/practice-test-table/');
  });

  it('should uncheck Begginer button', () => {
    practiceButtonsPage.elements.begginerCheckbox().should('be.checked');
    practiceButtonsPage.checkBegginerCheckbox();
    practiceButtonsPage.elements.begginerCheckbox().should('not.be.checked');
  });

  it('should uncheck intermediate checkbox', () => {
    practiceButtonsPage.elements.intermediateCheckbox().should('be.checked');
    practiceButtonsPage.checkIntermediateCheckbox();
    practiceButtonsPage.elements
      .intermediateCheckbox()
      .should('not.be.checked');
  });
});
