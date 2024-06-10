import menu from "../pageObjects/menuPage";
import searchResult from "../pageObjects/searchResultPage";
import { getYesterdaysDate } from "../support/dateUtils";

describe("Birthday Search For Celebrities", () => {
  it("Search for celebrities born yesterday and take screechot of the third celebritie", () => {
    cy.visitWebsite();
    cy.expandMenuTab();
    menu.click_bornToday();
    searchResult.delete_deafultSeachButton();
    searchResult.expand_birthdayTab();
    searchResult.click_birthdayInputField();

    const yesterdaysDate = getYesterdaysDate();
    searchResult.set_birthdayInputField(yesterdaysDate);
    searchResult.click_searchResultButton();
    searchResult.click_thirdcelebrity();
    cy.compareSnapshot('third-celebrity');
  });
});
