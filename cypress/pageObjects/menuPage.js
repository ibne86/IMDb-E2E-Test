class menuPage {
    elements = {
        topBoxOffice: () => cy.get('[data-testid="list-container"] ul > a').eq(4).find('span'),
    };
  
    clicktopBoxOffice() {
      this.elements.topBoxOffice().click();
    }
  }
  const menu = new menuPage();
  export default menu;