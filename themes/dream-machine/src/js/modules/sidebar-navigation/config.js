{
  function initSideBarMenu() {
    let caller = jQuery(`.header__navigation__callMenu__button,
        .sidebarMenu__closeMenu, .overlayCloseMenu`),
      target = jQuery('.sidebarMenu, .overlayCloseMenu');
      caller.click(function() {
        let _this = jQuery(this);
        if(_this.hasClass('active')) {
          caller.removeClass('active');
          target.removeClass('active');
        }else {
          caller.addClass('active');
          target.addClass('active');
        }
      });
  }
  window.initSideBarMenu = initSideBarMenu;
}
