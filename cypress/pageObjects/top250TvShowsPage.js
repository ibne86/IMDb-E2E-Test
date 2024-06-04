class top250TvShowsPage {
  elements = {
    top250TVShows: () => cy.get('[data-testid="chart-layout-main-column"] ul > li')
        .eq(0)
        .find("h3")
        .contains("1. Breaking Bad"),
  };

  clicktop250TVShows() {
    this.elements.top250TVShows().click();
  }
}
const top250TvShows = new top250TvShowsPage();
export default top250TvShows;
