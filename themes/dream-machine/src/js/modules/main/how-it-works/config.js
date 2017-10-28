{
  function howItWorksTabs() {
    let item = jQuery('.howItWorksTabs__item'),
      first = jQuery('.howItWorksTabs__item').first().attr('data-tab');
    if (item) {
      addActive(first, item);
      item.click(function() {
        var index = jQuery(this).attr('data-tab');
        item.removeClass('active');
        addActive(index, item);
      });
    }
    function addActive(index, item) {
      item.each(function() {
        if (jQuery(this).attr('data-tab') === index) {
          jQuery(this).addClass('active');
        }
      });
    }
  }
  window.howItWorksTabs = howItWorksTabs;
}
