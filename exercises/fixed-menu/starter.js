const header = document.querySelector(".header");

window.addEventListener(
  "scroll",
  debounceFn((event) => {
    const pY = window.pageYOffset;
    const headerHeight = header && header.offsetHeight;
    // console.log( pY );
    if (pY >= headerHeight) {
      header && header.classList.add("is-fixed");
      document.body.style.paddingTop = `${headerHeight}px`;
    } else {
      header && header.classList.remove("is-fixed");
      document.body.style.paddingTop = `0px`;
    }
  }),
  50
);

function debounceFn(func, wait, immediate) {
  let timeout;
  return function () {
    let context = this,
      args = arguments;
    let later = function () {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    let callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}
