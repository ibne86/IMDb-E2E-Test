import home from "../pageObjects/homePage";
import profile from "../pageObjects/profilePage";

describe("Navigation Test", () => {
  it("Test runs on Chrome and firefox", () => {
    cy.fixture("searchText").then((searchData) => {
      // Access data from fixtures
      const searchText = searchData.name;

      cy.fixture("movieTitle").then((movieTitleData) => {
        const movieTitle = movieTitleData.title;

        cy.visitWebsite();
        home.enter_SearchText(searchText);
        home.click_SerachResult();
        profile.click_upcomingTab();
        profile.click_FirstCompletedMovie();
        profile.get_movieTitle().should('have.text', movieTitle);
      });
    });
  });
});