class searchResultPage {
  elements = {
    deafultSeachButton: () => cy.get('[data-testid="chip-list-test-id"] button'),
    birthdayTab: () =>  cy.get('[data-testid="accordion-item-birthdayAccordion"] > span').eq(1),
    birthdayInputField: () => cy.get('[data-testid="birthday-input-test-id"]'),
    searchResultButton: () => cy.get('[data-testid="adv-search-get-results"] span'),
    thirdcelebrity: () => cy.get('div[data-testid="nlib-title"] h3').eq(2),
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
}
const searchResult = new searchResultPage();
export default searchResult;
