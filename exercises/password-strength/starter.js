const input = document.querySelector( ".input" );

const checkLengthClass = document.querySelector( ".check-length" );
const checkNumberClass = document.querySelector( ".check-number" );
const checkSpecialClass = document.querySelector( ".check-special" );
const checkUpperClass = document.querySelector( ".check-upper" );
const checkItems = document.querySelectorAll( ".check-item" );


input.addEventListener( "input", function ( event ){

    function passwordInputValidation(selector,value,regex){
        if(regex.test(value)){
            selector.classList.add( "active" );
            selector.classList.remove( "unactive" );
        }else{
            selector.classList.remove("active");
            selector.classList.add("unactive");
        }
    }
    const passwordInput = event.target.value;


    if ( passwordInput.length >8){
        checkLengthClass.classList.remove( "unactive" );
        checkLengthClass.classList.add( "active" );
    }else{
        checkLengthClass.classList.add("unactive");
        checkLengthClass.classList.remove("active");
    }

    passwordInputValidation( checkNumberClass, passwordInput, /[0-9]/ );
    passwordInputValidation(checkSpecialClass, passwordInput, /[$@%^&*()}{[\]}!]/);
    passwordInputValidation( checkUpperClass, passwordInput, /^[A-Z]/ );
    
    if (!passwordInput) {
      [...checkItems].forEach((item) => {
        item.classList.remove("active");
        item.classList.remove("unactive");
      });

      input.classList.remove("invalid");
      input.classList.remove("valid");

      return;
    }
})