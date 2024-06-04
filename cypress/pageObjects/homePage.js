class homePage {
  elements = {
    searchBox: () => cy.get("#suggestion-search"),
    searchResult: () => cy.get(".searchResult__constTitle").contains("Nicolas Cage"),
  };

  enter_SearchText(query) {
    this.elements.searchBox().type(query);
  }

  click_SerachResult() {
    this.elements.searchResult().click();
  }
}
const home = new homePage();
export default home;
