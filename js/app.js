gsap.registerPlugin(ScrollTrigger);

gsap.utils.toArray(".page").forEach((panel, i) => {
  ScrollTrigger.create({
    trigger: panel,
    start: "top top", 
    pin: true, 
    pinSpacing: false 
  });
});


ScrollTrigger.create({
  snap: 1 / 7 // snap whole page to the closest section!
});

