class profilePage {
  elements = {
    upComingTab: () => cy.get('label[data-testid="accordion-item-actor-upcoming-projects"] li').eq(0),
    movieListLonglegs: () => cy.get('[data-testid="accordion-item-content-container"] ul li').contains("Longlegs"),
    movieTitle: () => cy.get('span[data-testid="hero__primary-text"]'),
  };

  click_upcomingTab() {
    this.elements.upComingTab().click();
  }

  click_FirstCompletedMovie() {
    this.elements.movieListLonglegs().click();
  }

  get_movieTitle() {
  return this.elements.movieTitle();
  }
}
const profile = new profilePage();
export default profile;