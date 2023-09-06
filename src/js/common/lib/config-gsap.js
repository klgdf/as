export function gsap1() {
  let global_depth = 7;

  const depthScreen = (attr, item) => {
    if (item.getAttribute(`data-${attr}`)) {
      let depth = item.getAttribute(`data-${attr}`);
      item.removeAttribute(`data-${attr}`);
      for (let i = 1; i <= depth; i++) {
        let element = i != depth ? item.cloneNode(true) : item;
        element.querySelectorAll(`*:not(.z${i})`).forEach((el) => {
          if (!el.tagName === "PICTURE") {
            el.classList.add("hidden");
          }
        });
        if (i != depth) {
          item.parentNode.insertBefore(element, item.nextSibling);
        }
      }
    }
  };

  const depthPause = (attr, item) => {
    if (item.getAttribute(`data-${attr}`)) {
      let depth = item.getAttribute(`data-${attr}`);
      depth = depth * global_depth;
      item.removeAttribute(`data-${attr}`);
      for (let i = 1; i < depth; i++) {
        let element = item.cloneNode(true);
        item.parentNode.insertBefore(element, item.nextSibling);
      }
    }
  };

  const depthRepeat = (attr, item) => {
    if (item.getAttribute(`data-${attr}`)) {
      let depth = item.getAttribute(`data-${attr}`);
      item.removeAttribute(`data-${attr}`);
      for (let i = 1; i < depth; i++) {
        let element = item.cloneNode(true);
        item.parentNode.insertBefore(element, item.nextSibling);
      }
    }
  };

  let screens = document.querySelectorAll(".screen");
  screens.forEach((item) => {
    depthScreen("depth", item);
    depthPause("pause", item);
    depthRepeat("repeat", item);
  });

  var items = gsap.utils.toArray(".screen"),
    wrap = gsap.utils.wrap(items);

  let startCarousel = gsap.timeline({
    scrollTrigger: {
      start: 0,
      end: "+=8000",
      pin: ".depth",
      scrub: 1,
      anticipatePin: 1,
    },
  });
  for (let i = 0, j = items.length; i < items.length; i++) {
    let z = j;
    j--;
    let el = wrap(i);
    let tl = gsap.timeline();
    tl.to(el, {
      transform: "translate3d(0px, 0px, -1000px) scale(2)",
      opacity: 0.1,
      zIndex: z,
      duration: 1,
      ease: "none",
      onStart: () => {
        if (el.dataset.opacity) {
          console.log(this);
          el.classList.add("opacity-on");
          el.classList.remove("opacity-off");
        }
      },
      onReverseComplete: () => {
        if (el.dataset.opacity) {
          el.classList.add("opacity-off");
          el.classList.remove("opacity-on");
        }
      },
    });
    tl.to(el, {
      transform: "translate3d(0px, 0px, -775px) scale(2)",
      opacity: 0.3,
      duration: 1,
      ease: "none",
    });
    tl.to(el, {
      transform: "translate3d(0px, 0px, -550px) scale(2)",
      opacity: 0.5,
      duration: 1,
      ease: "none",
    });
    tl.to(el, {
      transform: "translate3d(0px, 0px, -325px) scale(2)",
      opacity: 0.7,
      duration: 1,
      ease: "none",
    });
    tl.to(el, {
      transform: "translate3d(0px, 0px, -100px) scale(2)",
      opacity: 0.9,
      duration: 1,
      ease: "none",
    });
    tl.to(el, {
      transform: "translate3d(0px, 0px, 125px) scale(2)",
      opacity: 1,
      duration: 1,
      ease: "none",
    });
    tl.to(el, {
      transform: "translate3d(0px, 0px, 350px) scale(2)",
      opacity: 0,
      duration: 1,
      ease: "none",
    });
    tl.to(el, {
      transform: "translate3d(0px, 0px, 575px) scale(2)",
      opacity: 0,
      duration: 1,
      ease: "none",
      visibility: "hidden",
    });
    startCarousel.add(tl, `-=${global_depth}.5`);
  }
}
