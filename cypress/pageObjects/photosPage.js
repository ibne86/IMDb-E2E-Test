class photosPage {
    elements = {
      gallary: () => cy.get('[data-testid="mv-gallery-button"]'),
      filterIcon: () => cy.get('[data-testid="image-chip-dropdown-test-id"]'),
      selectActorFromDropDown: () => cy.get('#Person-filter-select-dropdown'),
      closeFilterModal: () => cy.get('[data-testid="promptable__x"] > .ipc-icon-button'),
      photoGallery_DannyTrejo: () => cy.get("#rm123229952-img-1"),
      Photo_DannyTrejo: () => cy.get('[data-testid="media-sheet"] > div > div').eq(1).find('span').eq(1),
    };
  
    clickgallary() {
      this.elements.gallary().click();
    }

    clickfilterIcon() {
        this.elements.filterIcon().click();
    }

    clickselectActorFromDropDown() {
        this.elements.selectActorFromDropDown().select('nm0001803');
    }
    clickcloseFilterModal() {
        this.elements.closeFilterModal().click();
    }

    clickphotoGallery_DannyTrejo() {
        this.elements.photoGallery_DannyTrejo().click();
    }
    verifyPhoto_DannyTrejo() {
        this.elements.Photo_DannyTrejo().should("have.text","Danny Trejo");
    }
  }
  const photos = new photosPage();
  export default photos;