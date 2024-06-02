import home from "../pageObjects/homePage";
import menu from "../pageObjects/menuPage";
import topboxoffice from "../pageObjects/topboxofficePage";
import secondmovie from "../pageObjects/secondMoviePage";

describe("Movie Rating Test", () => {
  it("Rate the second movie from the list", () => {
    cy.visitWebsite();
    home.expandMenuTab();
    menu.clicktopBoxOffice();
    topboxoffice.clicksecondMovie();
    secondmovie.clickimdbRatingButton();
    secondmovie.clickratingButton();
    secondmovie.clicksettRating();
    secondmovie.clicksubmitRating();
    cy.get('#signin-options').contains('h1', 'Sign in')
  });
});
