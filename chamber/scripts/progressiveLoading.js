const images = document.querySelectorAll("picture img.progressive-image");

  function preloadImage(img) {
    const src = img.getAttribute("data-src");
    const sources = img.parentNode.querySelectorAll("source");

    if (!src) {
      return;
    }

    img.src = src;

    if (sources) {
      sources.forEach(source => {
        const srcset = source.getAttribute("data-srcset");
        if (srcset) {
          source.setAttribute("srcset", srcset);
        }
      });
    }
  }

  const imgOptions = {
    threshold: 0,
    rootMargin: "0px 0px -200px 0px"
  };

  const imgObserver = new IntersectionObserver((entries, imgObserver) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) {
        return;
      } else {
        preloadImage(entry.target);
        imgObserver.unobserve(entry.target); // Stop observing after the first intersection
      }
    });
  }, imgOptions);

  images.forEach(image => {
    imgObserver.observe(image);
  });