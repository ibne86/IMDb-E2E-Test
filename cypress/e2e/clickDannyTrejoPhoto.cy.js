import menu from "../pageObjects/menuPage";
import top250TvShows from "../pageObjects/top250TvShowsPage";
import breakingBad from "../pageObjects/breakingBadPage";
import photos from "../pageObjects/photosPage";

describe('Photo Interaction Test', () => {
  it('Click second photo of Danny Trejo', () => {
    cy.visitWebsite();
    cy.expandMenuTab();
    menu.clicktop250TVShows();
    top250TvShows.clicktop250TVShows();
    breakingBad.clickphotos();
    photos.clickgallary();
    photos.clickfilterIcon();
    photos.clickselectActorFromDropDown();
    photos.clickcloseFilterModal();
    photos.clickphotoGallery_DannyTrejo();
    photos.verifyPhoto_DannyTrejo();
  });
});
