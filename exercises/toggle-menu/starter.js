const toggle = document.querySelector(".menu-toggle");
const menu = document.querySelector(".menu");
toggle.addEventListener("click", () => {
  menu.classList.toggle("is-show");
  toggle.classList.toggle("fa-bars");
});

document.addEventListener("click", (event) => {
  if (
    !menu.classList.contains(event.target) &&
    !event.target.matches(".menu-toggle") &&
    !event.target.matches(".menu-link")
  ) {
    menu.classList.remove("is-show");
    menu.classList.add("fa-bars");
    menu.classList.remove("fa-times");
  }
});
