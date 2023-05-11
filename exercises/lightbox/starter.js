const lightbox =document.querySelectorAll(".content img");

function handleZoomIn(event){
    const image = event.target.getAttribute("src"); 
    const template = `
   <div class="lightbox">
     <div class="lightbox-content">
       <i class="fa fa-angle-left lightbox-prev"></i>
       <img
         src="${image}"
         alt=""
         class="lightbox-image"
       />
       <i class="fa fa-angle-right lightbox-next"></i>
     </div>
   </div>`;
   document.body.insertAdjacentHTML("beforeend",template);
}
[...lightbox].forEach((item)=>item.addEventListener("click",handleZoomIn));

document.body.addEventListener("click",(event)=>{
    // console.log(event.target);
    const lightboxImg = document.querySelector(".lightbox-image");
    if(!lightboxImg) return;
    const lightboxSrc = lightboxImg.getAttribute("src");
    // console.log(lightSrc);
    let index = [...lightbox].findIndex((item)=> item.getAttribute("src")===lightboxSrc);
    if(event.target.matches(".lightbox")){
        event.target.parentNode.removeChild(event.target);
    }
    if(event.target.matches(".fa-angle-left")){
        if(index===0){
            index=[...lightbox].length;
        }
        lightboxImg.setAttribute("src",[...lightbox][(index-1)%[...lightbox].length].getAttribute("src"));
    }
    if(event.target.matches(".fa-angle-right")){
        lightboxImg.setAttribute("src",[...lightbox][(index+1)%[...lightbox].length].getAttribute("src"));
    }
})