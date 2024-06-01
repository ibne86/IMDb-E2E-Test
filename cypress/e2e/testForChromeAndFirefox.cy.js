import home from "../pageObjects/homePage";
import profile from "../pageObjects/profilePage";

describe("Navigation Test", () => {
  it("Test works on Chrome and firefox ", () => {
    cy.visitWebsite();
    home.enterSearchText("Nicolas Cage");
    home.clickSerachResult();
    profile.clickupcomingTab();
    profile.clickFirstCompletedMovie();
    cy.get('span[data-testid="hero__primary-text"]').should("have.text","Longlegs");
  });
});