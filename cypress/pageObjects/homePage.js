class homePage {
  elements = {
    searchBox: () => cy.get("#suggestion-search"),
    searchResult: () => cy.get(".searchResult__constTitle").contains("Nicolas Cage"),
    menuTab: () => cy.get('#imdbHeader-navDrawerOpen > span'),
  };

  enterSearchText(query) {
    this.elements.searchBox().type(query);
  }

  clickSerachResult() {
    this.elements.searchResult().click();
  }

  expandMenuTab() {
    this.elements.menuTab().click();
  }
}
const home = new homePage();
export default home;
