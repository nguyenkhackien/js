window.addEventListener("load",function(){
    
    const togglePassword = this.document.querySelector( ".toggle" );
    togglePassword.addEventListener("click",function(){
        
        const input = togglePassword.previousElementSibling;
        const inputType = input.getAttribute( "type" );         

        if(input.getAttribute("type") ==="password"){
            input.setAttribute( "type", "text" );
        }
        else{
            input.setAttribute( "type", "password" );
        }
    } )
    
})