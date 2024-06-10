class photosPage {
    elements = {
      gallary: () => cy.get('[data-testid="mv-gallery-button"]'),
      filterIcon: () => cy.get('[data-testid="image-chip-dropdown-test-id"]'),
      selectActorFromDropDown: () => cy.get('#Person-filter-select-dropdown'),
      closeFilterModal: () => cy.get('[data-testid="promptable__x"] > .ipc-icon-button'),
      photoGallery_DannyTrejo: () => cy.get("#rm123229952-img-1"),
      dannyTrejoText: () => cy.get('[data-testid="media-sheet"] > div > div').eq(1).find('span').eq(1),
    };
  
    click_gallary() {
      this.elements.gallary().click();
    }

    click_filterIcon() {
        this.elements.filterIcon().click();
    }

    click_selectActorFromDropDown() {
        this.elements.selectActorFromDropDown().select('nm0001803');
    }
    click_closeFilterModal() {
        this.elements.closeFilterModal().click();
    }

    click_photoGallery_DannyTrejo() {
        this.elements.photoGallery_DannyTrejo().click();
    }
    get_dannyTrejoText() {
        return this.elements.dannyTrejoText();
    }
  }
  const photos = new photosPage();
  export default photos;