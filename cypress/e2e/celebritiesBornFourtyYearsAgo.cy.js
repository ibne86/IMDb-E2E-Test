import menu from "../pageObjects/menuPage";
import searchResult from "../pageObjects/searchResultPage";
import { getFoutryYearDate } from "../support/dateUtils";
import { getCurrentDate } from "../support/dateUtils";

describe("search for celebrities born exactly 40 years ago", () => {
  it("Search for celebrities born born exactly 40 years ago and take screechot", () => {
    cy.visitWebsite();
    cy.expandMenuTab();
    menu.click_bornToday();
    searchResult.delete_deafultSeachButton();
    searchResult.expand_birthDateTab();

    const pastDate = getFoutryYearDate();
    searchResult.set_fromBirthDatePicker(pastDate);

    const currentDate = getCurrentDate();
    searchResult.set_toBrithDateInputField(currentDate);
    searchResult.click_searchResultButton();

    searchResult.checkLink_firstCelebrityDescription();
    cy.compareSnapshot('first-Celebrity-Description');

  });
});
