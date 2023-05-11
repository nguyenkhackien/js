window.addEventListener("load", () => {
  const links = document.querySelectorAll(".menu-link");
  [...links].forEach((item) =>
    item.addEventListener("mouseenter", handleHoverLink)
  );

  const lineEffect = document.createElement(`div`);
  lineEffect.className = "line-effect";
  document.body.appendChild(lineEffect);
  function handleHoverLink(event) {
    const cords = event.target.getBoundingClientRect();
    const { top, left, width, height } = cords;
    lineEffect.style.top = `${top + height + 5}px`;
    lineEffect.style.left = `${left}px`;
    lineEffect.style.width = `${width}px`;
  }

    const menu = document.querySelector( ".menu" );
    menu.addEventListener( "mouseleave", ( event ) =>{
        lineEffect.style.width = 0;
    })
});
