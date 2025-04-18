// const todoList = [{
//     name: '',
//     dueDate: ''
// }]


// function renderTodoList() {
//     let todoListHTML = ''
//     for (let i = 1; i < todoList.length; i++) {
//         const todoObject = todoList[i]
//         //const name = todoObject.name
//         // const dueDate = todoObject.dueDate
//         const { name, dueDate } = todoObject  //Destructuring Shortcut
//         const html = `
//         <div>${name}</div> 
//         <div>${dueDate}</div> 
//             <button class="delete-todo-btn" onclick="
//             todoList.splice(${i}, 1)
//             renderTodoList()
//             ">Delete</button>
//         `
//         todoListHTML += html
        
//     }
//     document.querySelector('.listItems').innerHTML = todoListHTML
// }


// function addTodo() {
//     const inputElement = document.querySelector('.name-input')
//     const name = inputElement.value
//     const dateInputElement = document.querySelector('.due-date-input')
//     const dueDate = dateInputElement.value
//     todoList.push({
//         //name: name,
//         //dueDate: dueDate
//         name,
//         dueDate
//     })
//     inputElement.value = ''
//     renderTodoList()
// }




// Retrieve todoList from local storage if available
let todoList = JSON.parse(localStorage.getItem('todoList')) || [];

function renderTodoList() {
    let todoListHTML = ''

    todoList.forEach((todoObject, index) => {
            const { name, dueDate } = todoObject
            const html = `
            <div>${name}</div> 
            <div>${dueDate}</div> 
            <button class="delete-todo-btn">Delete</button>
            `;
            todoListHTML += html;
        })
    document.querySelector('.listItems').innerHTML = todoListHTML;
    
    document.querySelectorAll('.delete-todo-btn').forEach((deleteBtn, index) => {
        deleteBtn.addEventListener('click', () => {
            todoList.splice(index, 1)           // index here is a closure
            localStorage.setItem('todoList', JSON.stringify(todoList))
            renderTodoList()
        })
    })
    
}

document.querySelector('.add-todo-btn').addEventListener('click', () => {
    addTodo()
})
function addTodo() {
    const inputElement = document.querySelector('.name-input');
    const name = inputElement.value;
    const dateInputElement = document.querySelector('.due-date-input');
    const dueDate = dateInputElement.value;
    todoList.push({
        name,
        dueDate
    });
    // Save todoList to local storage
    localStorage.setItem('todoList', JSON.stringify(todoList));
    inputElement.value = '';
    renderTodoList();
}

// Call renderTodoList to initially render the todoList from local storage
renderTodoList();
