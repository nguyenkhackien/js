const counterMinus = document.querySelector(".counter-descrease");
const counterAdd = document.querySelector(".counter-increase");

let counterValue = 0;

counterMinus.addEventListener("click", (e) => {
  counterValue--;
  document.querySelector(".counter-number").textContent = counterValue;
  // custom attribute
  const name = e.currentTarget.dataset.fullName;
  console.log(name);
});
counterAdd.addEventListener("click", (e) => {
  counterValue++;
  document.querySelector(".counter-number").textContent = counterValue;
  // event.target.style.color ="red";
});
