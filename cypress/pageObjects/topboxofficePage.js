class topBoxOfficePage {
    elements = {
        secondMovie: () => cy.get(".ipc-title__text").contains('2. The Garfield Movie'),
    };
  
    clicksecondMovie() {
      this.elements.secondMovie().click();
    }
  }
  const topBoxOffice = new topBoxOfficePage();
  export default topBoxOffice;