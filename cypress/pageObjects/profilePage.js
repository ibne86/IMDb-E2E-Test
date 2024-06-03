class profilePage {
    elements = {
      upComingTab: () => cy.get('label[data-testid="accordion-item-actor-upcoming-projects"] li').eq(0),
      movieListLonglegs: () => cy.get('[data-testid="accordion-item-content-container"] ul li').contains("Longlegs"),

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
  