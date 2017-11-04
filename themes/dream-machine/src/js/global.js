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
  }).addTo(controller).setTween(tween);
  var benefitsParalax = new TimelineMax().add([
    TweenMax.to(".benefits", 1, {backgroundPosition: "0% 0%", ease: Linear.easeNone})
  ]);
  var sceneBenefitsParalax = new ScrollMagic.Scene({
    triggerElement: ".benefits",
    duration: jQuery('.benefits').height(),
    offset: jQuery('.benefits').height() / 2,
  }).addTo(controller).setTween(benefitsParalax);
  var tipsParalax = new TimelineMax().add([
    TweenMax.to(".tips", 1, {backgroundPosition: "0% 0%", ease: Linear.easeNone})
  ]);
  var sceneTipsParalax = new ScrollMagic.Scene({
    triggerElement: ".tips",
    duration: jQuery('.tips').height(),
    offset: jQuery('.tips').height() / 2,
  }).addTo(controller).setTween(tipsParalax);
});
