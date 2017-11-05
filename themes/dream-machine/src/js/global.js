import "../sass/global.sass";
import "./modules/main/parallax/config.js"
import "./modules/main/header/config.js"
import "./modules/main/how-it-works/config.js"
import "./modules/sidebar-navigation/config.js"
import "./modules/qa/config.js"
import "./modules/about/config.js"

let jQuery = require("jquery");

jQuery(document).ready(function() {
  window.setupMainPageHeaderSlider();
  window.howItWorksTabs();
  window.initSideBarMenu();
  window.initQAccordeon();
  window.mainPageParallax();
  window.aboutPageParallax();
});
