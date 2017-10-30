{
  function initQAccordeon() {
    if(jQuery('.qaPage__tabs').length) {
      jQuery('.qaPage__tab').click(function() {
        jQuery('.qaPage__tab').removeClass('active');
        jQuery(this).addClass('active');
      });
    }
  }
  window.initQAccordeon = initQAccordeon;
}
