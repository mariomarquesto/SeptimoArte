let nav = document.querySelector("nav");
window.addEventListener("scroll", () => {
  if (window.pageYOffset > 100) {
    nav.classList.add("bg-nav", "shadow");
  } else {
    nav.classList.remove("bg-nav", "shadow");
  }
});
