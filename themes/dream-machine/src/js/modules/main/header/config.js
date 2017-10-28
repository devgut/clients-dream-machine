import slick from "slick-carousel";
{
  function setupMainPageHeaderSlider() {
    if(jQuery('.mainPageHeader__slider').length) {
      jQuery('.mainPageHeader__slider').slick({
        arrows: false,
        fade: true,
        autoplay: true,
        speed: 1500,
        pauseOnHover: false,
        autoplaySpeed: 7000
      });
    }
  }
  window.setupMainPageHeaderSlider = setupMainPageHeaderSlider();
}
