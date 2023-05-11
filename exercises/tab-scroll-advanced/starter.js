

const tab = document.querySelector( ".tab" );
const tabList = document.querySelector( ".tab-list" );
const tabNext = document.querySelector( ".tab-next" );
const tabPrev = document.querySelector( ".tab-prev" );

let deltaScroll = 80;

const scrollWidth = tabList.scrollWidth - tabList.clientWidth;
let scroll = 0;
window.addEventListener( "load", () =>
{ 
    const tabItem = document.querySelectorAll( ".tab-item" );
    
    
    [ ...tabItem ].forEach( ( item ) => item.addEventListener( "click", handleClick ) );
    
    function handleClick(event){
        [ ...tabItem ].forEach( ( item ) => item.classList.remove( "active" ) );
        
        event.target.classList.add( "active" );

        let scrollLeft =event.target.offsetLeft-[...tabItem][0].offsetLeft;

        tabList.scroll( scrollLeft/2 + 10, 0 );
    }
    
    tabList.addEventListener("wheel",(e)=>{
        e.preventDefault();
        let delta = e.deltaY;
        tabList.scrollLeft -= delta;
        scroll -= delta;
        if(tabList.scrollLeft===0){
            tabPrev.classList.add( "disabled" );
        }else if(tabList.scrollLeft>=scrollWidth){
            tabNext.classList.add( "disabled" );
        }else{
            tabPrev.classList.remove( "disabled" );
            tabNext.classList.remove("disabled");
        }
    } )
    
    
    
    tabNext.addEventListener("click",(event)=>{
        event.preventDefault();
        scroll += deltaScroll;
        if(tabPrev.classList.contains("disabled")){
            tabPrev.classList.remove( "disabled" );
        }
        if(scroll< scrollWidth){
            tabList.scrollLeft = scroll;
        }else{
            tabList.scrollLeft = scrollWidth;
            scroll = scrollWidth;
            tabNext.classList.add( "disabled" );  
        }
    } )
    
    tabPrev.addEventListener("click", (event) => {
      event.preventDefault();
      scroll -= deltaScroll;
      if (tabNext.classList.contains("disabled")) {
        tabNext.classList.remove("disabled");
      }
      if (scroll >0) {
        tabList.scrollLeft = scroll;
      } else {
        tabList.scrollLeft = 0;
        scroll = 0;
        tabPrev.classList.add("disabled");
      }
    });
})