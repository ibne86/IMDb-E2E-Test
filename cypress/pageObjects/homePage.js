class homePage {
  elements = {
    searchBox: () => cy.get("#suggestion-search"),
    searchResult: () => cy.get(".searchResult__constTitle").contains("Nicolas Cage"),
  };

  enterSearchText(query) {
    this.elements.searchBox().type(query);
  }

  clickSerachResult() {
    this.elements.searchResult().click();
  }
}
const home = new homePage();
export default home;
