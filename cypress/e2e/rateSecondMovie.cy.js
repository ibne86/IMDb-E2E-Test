import menu from "../pageObjects/menuPage";
import topBoxOffice from "../pageObjects/topboxofficePage";
import secondMovie from "../pageObjects/secondMoviePage";

describe("Movie Rating Test", () => {
  it("Rate the second movie from the list", () => {
    cy.visitWebsite();
    cy.expandMenuTab();
    menu.click_topBoxOffice();
    topBoxOffice.click_secondMovie();
    secondMovie.click_imdbRatingButton();
    secondMovie.click_ratingButton();
    secondMovie.click_settRating();
    secondMovie.click_submitRating();
    secondMovie.get_header().contains('h1', 'Sign in');
  });
});
