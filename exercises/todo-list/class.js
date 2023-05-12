class Model{
    constructor(){}
}

class View{
    constructor () { 
        this.app = this.getElement( "body" );
        this.todoWrapper = this.createElement( "div", "todo" );
        this.form = this.createElement( "form", "todo-form" );
        this.form.autocomplete = "off";
    }
    /**
     * create element
     * @param {*} tag name Node
     * @param {*} className class name
     * @returns element
     */
    createElement(tag,className){
        const element = document.createElement( tag );
        if ( className ) element.classList.add( className );
        return element;
    }
    /**
     * get element
     * @param {*} selector name slector
     * @returns node
     */
    getElement(selector){
        const element = document.querySelector( selector );
        return element;
    }
}

class Controller{
    constructor(Model,View){
        
    }
}