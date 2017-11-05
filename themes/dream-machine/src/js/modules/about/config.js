{
  function aboutPageParallax() {
    let controller = new ScrollMagic.Controller();
    if (jQuery('.aboutPage__brainEntrainment__additionalContainer').length) {
      let aboutPage__brainEntrainment__additionalContainerParalax = new TimelineMax().add([
        TweenMax.to(".aboutPage__brainEntrainment__additionalContainer", 1, {
          backgroundPosition: "100% 100%",
          ease: Linear.easeNone
        })
      ]);
      let sceneTipsParalax = new ScrollMagic.Scene({
        triggerElement: ".aboutPage__brainEntrainment__additionalContainer",
        duration: jQuery('.aboutPage__brainEntrainment__additionalContainer').height(),
        offset: jQuery('.aboutPage__brainEntrainment__additionalContainer').height() / 2,
      }).addTo(controller).setTween(aboutPage__brainEntrainment__additionalContainerParalax);
    }
  }
  window.aboutPageParallax = aboutPageParallax;
}
