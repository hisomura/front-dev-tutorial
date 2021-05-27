document.addEventListener("DOMContentLoaded", function () {
  const elements = document.querySelectorAll(".animate-title");
  const io = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const ta = new TextAnimation(entry.target);
          ta.animate();
          observer.unobserve(entry.target);
        }
      });
    },
    {
      root: null,
      rootMargin: "0px",
      threshold: 0,
    }
  );

  elements.forEach((el) => io.observe(el));
});
