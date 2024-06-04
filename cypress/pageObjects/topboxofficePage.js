class topBoxOfficePage {
    elements = {
        secondMovie: () => cy.get('div[data-testid="chart-layout-main-column"] h3').eq(1),
    };
  
    click_secondMovie() {
      this.elements.secondMovie().click();
    }
  }
  const topBoxOffice = new topBoxOfficePage();
  export default topBoxOffice;