class PracticeButtonsPage {
  elements = {
    begginerCheckbox: () => cy.get('input[value="Beginner"]'),
    intermediateCheckbox: () => cy.get('input[value="Intermediate"]'),
  };

  checkBegginerCheckbox() {
    return this.elements.begginerCheckbox().click();
  }

  checkIntermediateCheckbox() {
    return this.elements.intermediateCheckbox().click();
  }
}

export default new PracticeButtonsPage();
