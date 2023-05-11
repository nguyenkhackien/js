const dropdownSelect = document.querySelector(".dropdown__select");
const dropdownList = document.querySelector(".dropdown__list");
const dropdownItem = document.querySelectorAll(".dropdown__item");
console.log(dropdownSelect.contains("<span class="dropdown__selected">Call to action</span>");
dropdownSelect.addEventListener("click", (event) => {
  dropdownList.classList.toggle("show");
  dropdownSelect.children[1].classList.toggle("fa-caret-up");
});

dropdownItem.forEach((item) => {
    item.addEventListener("click", (event) => {
        const selected = event.target.querySelector(".dropdown__text").textContent;
        dropdownSelect.querySelector(".dropdown__selected").textContent = selected;
        dropdownList.classList.remove("show");
        dropdownSelect.children[1].classList.remove("fa-caret-up");
  });
});
