class profilePage {
    elements = {
      upComingTab: () => cy.get('label[data-testid="accordion-item-actor-upcoming-projects"] li').eq(0),
      movieListLonglegs: () => cy.get('[data-testid="accordion-item-content-container"] ul li').contains("Longlegs"),

    };
  
    click_upcomingTab() {
      this.elements.upComingTab().click();
    }

    click_FirstCompletedMovie() {
      this.elements.movieListLonglegs().click();
    }

    verify_MovieTitle() {
    this.elements.movieTitle();
    }
  }
  const profile = new profilePage();
  export default profile;
  