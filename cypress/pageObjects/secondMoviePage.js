class secondMoviePage {
  elements = {
    imdbRatingButton: () => cy.get('[data-testid="hero-rating-bar__aggregate-rating__score"] span').eq(0),
    ratingButton: () => cy.get('[data-testid="rating-button__user-rating__unrated"]'),
    setRating: () => cy.get(".ipc-starbar__rating button"),
    submitRating: () => cy.get(".ipc-rating-prompt__rating-container > .ipc-btn"),
  };

  click_imdbRatingButton() {
    this.elements.imdbRatingButton().click();
  }
  click_ratingButton() {
    this.elements.ratingButton().click();
  }
  click_settRating() {
    this.elements.setRating().then(($button) => {
      $button[4].click();
    });
  }
  click_submitRating() {
    this.elements.submitRating().click();
  }
}
const secondMovie = new secondMoviePage();
export default secondMovie;
