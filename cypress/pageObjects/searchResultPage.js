class searchResultPage {
  elements = {
    deafultSeachButton: () => cy.get('[data-testid="chip-list-test-id"] button'),
    birthdayTab: () =>  cy.get('[data-testid="accordion-item-birthdayAccordion"] > span').eq(1),
    birthdayInputField: () => cy.get('[data-testid="birthday-input-test-id"]'),
    searchResultButton: () => cy.get('[data-testid="adv-search-get-results"] span'),
    thirdcelebrity: () => cy.get('div[data-testid="nlib-title"] h3').eq(2),
    birthDateTab: () => cy.get('[data-testid="accordion-item-birthDateAccordion"] > span').eq(1),
    fromBirthDatePicker: () => cy.get('[data-testid="birthDate-start"]'),
    toBrithDateInputField: () => cy.get('[data-testid="birthYearMonth-end"]'),
    searchResultFirstLink: () => cy.get('[data-testid="nlib-title"] h3').eq(0),
    firstCelebrityDescription: () => cy.get('[data-testid="dli-bio"] div').eq(1),
  };

  delete_deafultSeachButton() {
    this.elements.deafultSeachButton().click();
  }

  expand_birthdayTab() {
    this.elements.birthdayTab().click();
  }

  click_birthdayInputField() {
    this.elements.birthdayInputField();
  }

  set_birthdayInputField(date) {
    this.elements.birthdayInputField().focus().type(date).type("{enter}");
  }

  click_searchResultButton() {
    this.elements.searchResultButton().click();
  }

  click_thirdcelebrity() {
    this.elements.thirdcelebrity().click();
  }

  take_screenshot() {
    cy.screenshot();     
}

  expand_birthDateTab() {
    this.elements.birthDateTab().click();
  }

  set_fromBirthDatePicker(fromDate) {
    this.elements
      .fromBirthDatePicker()
      .invoke("val", fromDate)
      .trigger("change");
  }

  set_toBrithDateInputField(currentDate) {
    this.elements
      .toBrithDateInputField()
      .focus()
      .type(currentDate)
      .type("{enter}");
  }

  click_searchResultFirstLink() {
    this.elements.searchResultFirstLink().click();
  }

  checkLink_firstCelebrityDescription() {
    this.elements.firstCelebrityDescription().within(() => {
      cy.get("a").first().click();
    });
  }
}
const searchResult = new searchResultPage();
export default searchResult;