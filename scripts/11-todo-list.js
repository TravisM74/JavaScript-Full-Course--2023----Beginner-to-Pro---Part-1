const todoList =[{
    name :'make dinner', 
    dueDate: '2023-08-15'
},{
    name:'wash dishes',
    dueDate:'2023-08-15'
}];

renderTodoList();


function renderTodoList(){
    let todoListHTML ='';
    for (let i = 0; i < todoList.length ; i++){
        const todoObject = todoList[i];
        //const name = todoObject.name;
        //--> destructuring const {name} = todoObject;
        //const {dueDate}= todoObject;
        //--> destructured ... the varible name is the same as the attribute name in the object.
        // could do both together --> 
        const {name,dueDate} = todoObject;

        const html = `
            <div>${name}</div>
            <div>${dueDate}</div>
            <button onclick="
                todoList.splice(${i},1);
                renderTodoList();
                "class="delete-todo-button">Delete
            </button>
        `;
            todoListHTML+=html;
    }
    document.querySelector('.js-todo-list')
        .innerHTML = todoListHTML;
}


function addTodo(){
    const inputElement = document.querySelector('.js-name-input');
    const name = inputElement.value;
    const dateInputElement = document.querySelector('.js-due-date-input');
    const dueDate = dateInputElement.value;
    todoList.push({
        //name:name,
        //dueDate:dueDate
        // <---short hand propery syntaxt if name and variable are the same cen just type it once -->
        name,
        dueDate
    });
    inputElement.value = '';
    renderTodoList();
};