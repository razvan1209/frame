class envPage {
  elements = {
    keywordInput: () => cy.get('textarea[name="q"]'),
  };

  typeKeyword(keyword) {
    return this.elements.keywordInput().clear().type(keyword);
  }
}
export default new envPage();
