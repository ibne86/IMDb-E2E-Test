class menuPage {
    elements = {
        topBoxOffice: () => cy.get('[data-testid="list-container"] ul > a').eq(4).find('span'),
        top250TVShows: () => cy.get('[data-testid="grouped-link-category"] a ').find('span').contains("Top 250 TV Shows"),
    };
  
    clicktopBoxOffice() {
      this.elements.topBoxOffice().click();
    }

    clicktop250TVShows() {
      this.elements.top250TVShows().click();
    }
  }
  const menu = new menuPage();
  export default menu;