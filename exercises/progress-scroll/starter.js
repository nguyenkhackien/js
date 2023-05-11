const progress = document.querySelector(".progress");
const header = document.querySelector(".header");

window.addEventListener(
  "scroll",
  debounceFn(() => {
    const scrollTop = document.documentElement.scrollTop;
    // console.log(scrollTop);
    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    // console.log(height);
    const width = (scrollTop / height) * 100;
    progress.style.width = `${width}%`;

    const headerHeight = header && header.offsetHeight;
    if (scrollTop >= headerHeight) {
      header.classList.add("is-fixed");
      header.body.style.paddingTop = `${headerHeight}px`;
    } else {
      header.classList.remove("is-fixed");
      header.body.style.paddingTop = `0px`;
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
