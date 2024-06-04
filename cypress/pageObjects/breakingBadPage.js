class breakingBadPage {
    elements = {
      photos: () => cy.get('[data-testid="photos-title"] h3'),
    };
  
    clickphotos() {
      this.elements.photos().click();
    }
  }
  const breakingBad = new breakingBadPage();
  export default breakingBad;