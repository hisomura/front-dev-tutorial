const child = document.querySelector(".child");
const io = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("inview");
      } else {
        entry.target.classList.remove("inview");
      }
    });
  },
  {
    root: null,
    rootMargin: "-300px 0px",
    threshold: [0, 0.5, 1],
  }
);

io.observe(child);
