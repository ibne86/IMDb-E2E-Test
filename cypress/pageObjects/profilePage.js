class profilePage {
    elements = {
      upComingTab: () => cy.get("li.ipc-inline-list__item").contains("Upcoming"),
      movieListLonglegs: () => cy.get("a.ipc-metadata-list-summary-item__t").contains("Longlegs"),
    };
  
    clickupcomingTab() {
      this.elements.upComingTab().click();
    }
  
    clickupcomingTab() {
      this.elements.upComingTab().click();
    }
  
    clickFirstCompletedMovie() {
      this.elements.movieListLonglegs().click();
    }
  }
  const profile = new profilePage();
  export default profile;
  