const changeButton = document.querySelector(".change");

const color = ["red", "blue", "green", "pink"];
changeButton.addEventListener("click", (e) => {
  const newColor = color[Math.floor(Math.random() * color.length)];
  // cach 1
  changeButton.setAttribute("style", `background-color:${newColor}`);
  //c2
  // changeButton.style.backgroungColor("red");
});
