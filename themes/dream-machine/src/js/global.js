import "../sass/global.sass";
import slick from "slick-carousel";

let jQuery = require("jquery");

jQuery(document).ready(function() {
  jQuery('.mainPageHeader__slider').slick({
    arrows: false,
    fade: true,
    autoplay: true,
    speed: 1000,
    pauseOnHover: false,
    autoplaySpeed: 5000
  });
});
