class menuPage {
    elements = {
        topBoxOffice: () => cy.get(".ipc-list-item__text").contains('Top Box Office'),
    };
  
    clicktopBoxOffice() {
      this.elements.topBoxOffice().click();
    }
  }
  const menu = new menuPage();
  export default menu;
  