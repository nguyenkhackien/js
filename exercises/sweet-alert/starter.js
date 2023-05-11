window.addEventListener("load",()=>{
    const button = document.querySelector( ".buton" );

    function renderSweetAlert(){ 
        const template = ` <div class="sweet-alert">
        <i class="fa fa-check sweet-icon"></i>
        <p class="sweet-text">Congratulations on learning JS</p>
        </div> `

        document.body.insertAdjacentHTML( "afterend", template );
    }
    button.addEventListener("click",(event)=>{
        renderSweetAlert();

        const sweetItem = document.querySelector( ".sweet-alert" );

        if(sweetItem){
            setTimeout(()=>{
                sweetItem.parentNode.removeChild( sweetItem );
            },2000);
        }
    })
})