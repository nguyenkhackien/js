// window.addEventListener("load", () => {
//   const image = document.querySelector(".image");
//   const imageCover = document.querySelector(".image-cover");
//   const imageWrapper = document.querySelector(".image-wrapper");
//   const imageWraperWidth = imageWrapper.offsetWidth;
//   const imageWraperHeight = imageWrapper.offsetHeight;
//   imageCover.addEventListener("mousemove", (event) => {
//     const pX = event.pageX;
//     const pY = event.pageY;
//     const imageWidth = image.offsetWidth;
//     const imageHeight = image.offsetHeight;
//     let x = pX;
//     let y = pY;
//     image.style = `width: auto; height: auto;max-height: unset;transform: none; left: ${-x}px; top: ${-y}px`;
//   });
// });

document.addEventListener("mousemove", (event) => {
  const image = document.querySelector(".image");
  const imageCover = document.querySelector(".image-cover");
  const imageWrapper = document.querySelector(".image-wrapper");
  imageCover.addEventListener("mousemove", (event) => {
    const pX = event.pageX;
    const pY = event.pageY;
    const ratioX = image.offsetWidth / imageWrapper.offsetWidth;
    const ratioY = image.offsetHeight / imageWrapper.offsetHeight;
    let top = (pY - 50) * (ratioX - 1);
    let left = (pX - 50) * (ratioY - 1);
    image.style = `width: auto; height: auto; max-height: unset; transform: none; left:${-left}px; top:${-top}px`;
  });
  imageCover.addEventListener("mouseleave", (event) => {
    image.style = "";
  });
});
