

const img = document.querySelector("img");

const io = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    entry.target.src = entry.target.getAttribute("data-src");
    io.unobserve(entry.target);
  })
});

io.observe(img);