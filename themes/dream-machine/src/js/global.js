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
});
