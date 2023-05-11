window.addEventListener("load", () => {
  const text = document.querySelector(".text");
  text.addEventListener("mouseenter", (event) => {
    const tooltip = event.target.dataset.tooltip;
    const tooltipDiv = document.createElement(`div`);
    tooltipDiv.className = "tooltip-text";
    tooltipDiv.textContent = tooltip;
    document.body.appendChild(tooltipDiv);
    const cords = event.target.getBoundingClientRect();
    const { top, left, width } = cords;
    const tooltipHeight = tooltipDiv.offsetHeight;
    tooltipDiv.style.top = `${top - tooltipHeight - 20}px`;
    tooltipDiv.style.left = `${left- width/2}px`;
  });
  text.addEventListener("mouseleave",(event)=>{
    const tooltip = document.querySelector(".tooltip-text");
    if(!tooltip) return;
    tooltip.parentNode.removeChild(tooltip);
  })
});
