import home from "../pageObjects/homePage";
import profile from "../pageObjects/profilePage";

describe("Navigation Test", () => {
  it("Test works on Chrome and firefox", () => {
    cy.visitWebsite();
    home.enter_SearchText("Nicolas Cage");
    home.click_SerachResult();
    profile.click_upcomingTab();
    profile.click_FirstCompletedMovie();
    cy.get('span[data-testid="hero__primary-text"]').should("have.text","Longlegs");
  });
});