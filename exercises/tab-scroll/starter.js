const tabList = document.querySelector( ".tab-list" );
const tabItems = document.querySelectorAll( ".tab-item" );
const tab = document.querySelector( ".tab" );
window.addEventListener( "load", () =>
{
  [ ...tabItems ].forEach( ( item ) => { item.addEventListener( "click", handleItem ) } );
  
  function handleItem( event ){
    [ ...tabItems ].forEach( ( item ) => item.classList.remove( "active" ) );

    event.target.classList.add( "active" );
    let scroll = event.target.offsetLeft - tab.offsetLeft;
    tabList.scroll( scroll / 2-30, 0 );
  }

          
  window.addEventListener(
      "scroll",
      debounceFn(function (event) {
      }, 50)
    );
} )

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