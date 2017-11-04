import "../sass/global.sass";
import "./modules/main/header/config.js"
import "./modules/main/how-it-works/config.js"
import "./modules/sidebar-navigation/config.js"
import "./modules/qa/config.js"

let jQuery = require("jquery");

jQuery(document).ready(function() {
  window.setupMainPageHeaderSlider();
  window.howItWorksTabs();
  window.initSideBarMenu();
  window.initQAccordeon();
  var controller = new ScrollMagic.Controller();
  var tween = new TimelineMax().add([TweenMax.to(".mainPageHeader__innerShifted", 1, {
    top: "-80px",
    ease: Linear.easeNone
  })]);
  var scene = new ScrollMagic.Scene({
    triggerElement: ".mainPageHeader",
    duration: jQuery('.mainPageHeader').height(),
    offset: 300,
  }).addIndicators().addTo(controller).setTween(tween);

});
