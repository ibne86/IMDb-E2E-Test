class fourtyYearsCelebrityProfilePage {
    elements = {
      description: () => cy.get('[data-testid="nlib-title"] h3').eq(0),
    };
  
    delete_deafultSeachButton() {
      this.elements.deafultSeachButton().click();
    }
}
const fourtyYearsCelebrityProfile = new fourtyYearsCelebrityProfilePage();
export default fourtyYearsCelebrityProfile;