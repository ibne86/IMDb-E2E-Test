class topboxofficePage {
    elements = {
        secondMovie: () => cy.get(".ipc-title__text").contains('2. The Garfield Movie'),
    };
  
    clicksecondMovie() {
      this.elements.secondMovie().click();
    }
  }
  const topboxoffice = new topboxofficePage();
  export default topboxoffice;