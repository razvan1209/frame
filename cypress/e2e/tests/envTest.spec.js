import envPage from '../../pages/envPage';

describe('Environment Based Tests', () => {
  beforeEach(() => {
    const baseUrl = Cypress.env('baseUrl');
    cy.visit(baseUrl);
  });

  it('Should type the search keyword based on the environment', () => {
    const searchKeyword = Cypress.env('searchKeyword');
    envPage.typeKeyword(searchKeyword);
  });
});
