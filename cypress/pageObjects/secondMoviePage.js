class secondmoviePage {
  elements = {
    imdbRatingButton: () =>
      cy
        .get('[data-testid="hero-rating-bar__aggregate-rating__score"] span').eq(0),
    ratingButton: () => cy.get('[data-testid="rating-button__user-rating__unrated"]'),
    setRating: () => cy.get(".ipc-starbar__rating button"),
    submitRating: () => cy.get(".ipc-rating-prompt__rating-container > .ipc-btn"),
  };

  clickimdbRatingButton() {
    this.elements.imdbRatingButton().click();
  }
  clickratingButton() {
    this.elements.ratingButton().click();
  }
  clicksettRating() {
    this.elements.setRating().then(($button) => {
      $button[4].click();
    });
  }
  clicksubmitRating() {
    this.elements.submitRating().click();
  }
}
const secondmovie = new secondmoviePage();
export default secondmovie;
