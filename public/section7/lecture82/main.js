document.addEventListener("DOMContentLoaded", function () {
  const cb = function (element, isIntersecting) {
    if (isIntersecting) {
      const ta = new TextAnimation(element);
      ta.animate();
    }
  };
  const so = new ScrollObserver(".animate-title", cb, { once: true });
  so.destroy();
});

class ScrollObserver {
  constructor(elements, cb, options) {
    this.elements = document.querySelectorAll(elements);

    const defaultOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0,
      once: true,
    };
    this.cb = cb;
    this.options = Object.assign(defaultOptions, options);
    this.once = this.options.once;
    this.__init();
  }

  __init() {
    const callback = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // const ta = new TextAnimation(entry.target);
          // ta.animate();
          this.cb(entry.target, true);
          if (this.once) {
            observer.unobserve(entry.target);
          }
          observer.unobserve(entry.target);
        } else {
          this.cb(entry.target, false);
        }
      });
    };

    this.io = new IntersectionObserver(callback.bind(this), this.options);
    this.elements.forEach((e) => this.io.observe(e));
  }

  destroy() {
    this.io.disconnect();
  }
}
