window.addEventListener("load", () => {
  const input = document.querySelector(".input-search");
  const item = document.querySelectorAll(".dropdown-item");

  input.addEventListener("input", (event) => {
    const text = event.target.value.toLowerCase();
    const length = text.length;
    [...item].forEach((item) => {
      const value = item.textContent;
      const itemValue = value.toLowerCase();
      const index = itemValue.indexOf(text);
      if (index != -1) {
        item.innerHTML = `${value.substring(
          0,
          index
        )}<span class="primary">${value.substring(
          index,
          index + length
        )}</span>${value.substring(index + length)}`;
      } else {
        item.innerHTML = value;
      }
    });
  });
});
