import home from "../pageObjects/homePage";
import menu from "../pageObjects/menuPage";
import topBoxOffice from "../pageObjects/topboxofficePage";
import secondMovie from "../pageObjects/secondMoviePage";

describe("Movie Rating Test", () => {
  it("Rate the second movie from the list", () => {
    cy.visitWebsite();
    home.expandMenuTab();
    menu.clicktopBoxOffice();
    topBoxOffice.clicksecondMovie();
    secondMovie.clickimdbRatingButton();
    secondMovie.clickratingButton();
    secondMovie.clicksettRating();
    secondMovie.clicksubmitRating();
    cy.get('#signin-options').contains('h1', 'Sign in')
  });
});
