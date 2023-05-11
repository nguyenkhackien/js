const accordion = document.querySelectorAll(".accordion-header");
document.addEventListener("click", (event) => {
  console.log( event.clientX );
});
function handle(event) {
  const content = event.target.nextElementSibling;
  content.classList.toggle("is-active");
  event.target.querySelector(".icon").classList.toggle("fa-angle-down");
  event.target.querySelector(".icon").classList.toggle("fa-angle-up");

  const height = `${content.scrollHeight}px`;
  if (!content.classList.contains("is-active")) {
    content.style.height = "0px";
  } else {
    content.style.height = height;
  }
}
[...accordion].forEach((item) => {
  item.addEventListener("click", handle);
});
