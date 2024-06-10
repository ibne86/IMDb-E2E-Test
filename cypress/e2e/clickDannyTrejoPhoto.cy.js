import menu from "../pageObjects/menuPage";
import top250TvShows from "../pageObjects/top250TvShowsPage";
import breakingBad from "../pageObjects/breakingBadPage";
import photos from "../pageObjects/photosPage";

describe('Photo Interaction Test', () => {
  it('Click second photo of Danny Trejo', () => {
    cy.visitWebsite();
    cy.expandMenuTab();
    menu.click_top250TVShows();
    top250TvShows.click_top250TVShows();
    breakingBad.click_photos();
    photos.click_gallary();
    photos.click_filterIcon();
    photos.click_selectActorFromDropDown();
    photos.click_closeFilterModal();
    photos.click_photoGallery_DannyTrejo();
    photos.get_dannyTrejoText().should("have.text", "Danny Trejo");    
  });
});
