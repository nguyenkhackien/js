class Model {
    constructor() {
        this.todos = JSON.parse(localStorage.getItem("todoList")) ||[]
    }
    handlerTodoChange(handler) {
        this.todoListChange = handler
    }

    _reload(todos) {
        this.todoListChange( todos )
        localStorage.setItem("todoList",JSON.stringify(todos))
    }

    addTodo(todoText) {
        if (todoText.length > 0) {
            this.todos.push(todoText)
        }
        this._reload(this.todos)
    }

    removeTodo(todoText) {
        const index = this.todos.findIndex((item) => item === todoText)
        this.todos.splice(index, 1)
        this._reload(this.todos)
    }
}

class View {
    constructor() {
        this.app = this.getElement("body")

        this.todoWrapper = this.createElement("div", "todo")

        this.form = this.createElement("form", "todo-form")
        this.form.autocomplete = "off"

        this.input = this.createElement("input", "todo-input")
        this.input.type = "text"
        this.input.name = "todo"
        this.input.placeholder = "enter your task"

        this.button = this.createElement("button", "todo-submit")
        this.button.textContent = "add"

        this.form.append(this.input, this.button)

        this.todoList = this.createElement("div", "todo-list")

        this.todoWrapper.append(this.form, this.todoList)

        this.app.append(this.todoWrapper)
    }
    /**
     * create element
     * @param {*} tag name Node
     * @param {*} className class name
     * @returns element
     */
    createElement(tag, className) {
        const element = document.createElement(tag)
        if (className) element.classList.add(className)
        return element
    }
    /**
     * get element
     * @param {*} selector name slector
     * @returns node
     */
    getElement(selector) {
        const element = document.querySelector(selector)
        return element
    }

    get _todoValue() {
        return this.input.value
    }

    _resetValue() {
        this.input.value = ""
    }

    displayTodo(todos) {
        while(this.todoList.firstChild){
            this.todoList.removeChild( this.todoList.firstChild );
        }
        if (todos.length > 0) {
            todos.forEach((todoText) => {
                const div = this.createElement("div", "todo-item")
                const span = this.createElement("span", "todo-text")
                span.textContent = todoText
                const icon = this.createElement("i")
                icon.className = "fa fa-trash todo-remove";
                icon.setAttribute("data-value", todoText)
                div.append(span, icon)
                this.todoList.append(div)
            })
        }
    }

    viewAddTodo(handler) {
        this.form.addEventListener("submit", (e) => {
            e.preventDefault()
            if (this._todoValue) {
                handler(this._todoValue)
                this._resetValue()
            }
        })
    }

    viewRemoveTodo(handler) {
        this.todoList.addEventListener("click", (e) => {
            if (e.target.matches(".todo-remove")) {
                const todo = e.target.parentNode
                todo.parentNode.removeChild(todo)
                const value = e.target.dataset.value
                handler(value)
            }
        })
    }
}

class Controller {
    constructor(model, view) {
        this.model = model
        this.view = view

        this.model.handlerTodoChange(this.handlerTodoChange)
        this.view.viewAddTodo(this.handlerAddTodo)
        this.view.viewRemoveTodo(this.handlerRemoveTodo)

        this.handlerTodoChange(this.model.todos)
    }

    handlerAddTodo = (todoText) => {
        this.model.addTodo(todoText)
    }

    handlerRemoveTodo = (todoText) => {
        this.model.removeTodo(todoText)
    }

    handlerTodoChange = (todos) => {
        this.view.displayTodo(todos)
    }
}

const app = new Controller(new Model(), new View())
