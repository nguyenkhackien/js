const input = document.querySelector( ".input" );

input.addEventListener("input",function(event){
    const email = event.target.value;

    const regexEmail =
        /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    
    if ( regexEmail.test( email.trim() )){
        input.classList.add( "valid" );
        input.classList.remove( "invalid" );
    }else{
        input.classList.remove("valid");
        input.classList.add("invalid");
    }

    if(!email){
        input.classList.remove("invalid");
    }
})