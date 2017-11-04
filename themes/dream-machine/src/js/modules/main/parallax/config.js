{
  function mainPageParallax() {
    let controller = new ScrollMagic.Controller();
    if (jQuery('.mainPageHeader__innerShifted').length) {
      let tween = new TimelineMax().add([TweenMax.to(".mainPageHeader__innerShifted", 1, {
        top: "-80px",
        ease: Linear.easeNone
      })]);
      let scene = new ScrollMagic.Scene({
        triggerElement: ".mainPageHeader",
        duration: jQuery('.mainPageHeader').height(),
        offset: 300,
      }).addTo(controller).setTween(tween);
    }
    if (jQuery('.benefits').length) {
      let benefitsParalax = new TimelineMax().add([
        TweenMax.to(".benefits", 1, {
          backgroundPosition: "0% 0%",
          ease: Linear.easeNone
        })
      ]);
      let sceneBenefitsParalax = new ScrollMagic.Scene({
        triggerElement: ".benefits",
        duration: jQuery('.benefits').height(),
        offset: jQuery('.benefits').height() / 2,
      }).addTo(controller).setTween(benefitsParalax);
    }
    if (jQuery('.tips').length) {
      let tipsParalax = new TimelineMax().add([
        TweenMax.to(".tips", 1, {
          backgroundPosition: "0% 0%",
          ease: Linear.easeNone
        })
      ]);
      let sceneTipsParalax = new ScrollMagic.Scene({
        triggerElement: ".tips",
        duration: jQuery('.tips').height(),
        offset: jQuery('.tips').height() / 2,
      }).addTo(controller).setTween(tipsParalax);
    }
  }
}
