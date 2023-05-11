const tab = document.querySelectorAll(".tab-item");

function handle(event) {
  [...tab].forEach((item) => {
    item.classList.remove("active");
  });

  event.target.classList.add("active");

  const tabNumber = event.target.dataset.tab;
  const tabContent = document.querySelectorAll(".tab-content");

  [...tabContent].forEach((item) => {
    if (item.dataset.tab === tabNumber) {
      item.classList.add("active");
    } else {
      item.classList.remove("active");
    }
  });
}
[...tab].forEach((item) => item.addEventListener("click", handle));
