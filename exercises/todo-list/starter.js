window.addEventListener("load",function (){
    const form = document.querySelector( ".todo-form" );
    const todoList = document.querySelector( ".todo-list" );
    let todos = JSON.parse(localStorage.getItem("todoList")) || [];


    if(Array.isArray(todos) && todos.length>0){
        todos.forEach( ( item ) => createTodoItem( item ) );
    }
    function createTodoItem(title){
        const template = `<div class="todo-item">
          <span class="todo-text">${title}</span>
          <i class="fa fa-trash todo-remove" data-value="Learning english"></i>
        </div>`;

        todoList.insertAdjacentHTML( "afterbegin", template );
    }
    form.addEventListener("submit",function handle(event){
        event.preventDefault();

        const value = this.elements[ "todo" ].value;

        createTodoItem( value );
        todos.push( value );
        localStorage && localStorage.setItem( "todoList", JSON.stringify(todos) );
        this.elements[ "todo" ].value = "";
    } )

    todoList.addEventListener("click",(e)=>{
        if(e.target.matches(".todo-remove")){
            e.target.parentNode.parentNode.removeChild(e.target.parentNode);
        }

        const text = e.target.previousElementSibling.textContent;
        const textIndex = todos.findIndex( ( item ) => item === text );

        todos.splice( textIndex, 1 );

        localStorage.setItem( "todoList", JSON.stringify(todos) );
    })

    
})