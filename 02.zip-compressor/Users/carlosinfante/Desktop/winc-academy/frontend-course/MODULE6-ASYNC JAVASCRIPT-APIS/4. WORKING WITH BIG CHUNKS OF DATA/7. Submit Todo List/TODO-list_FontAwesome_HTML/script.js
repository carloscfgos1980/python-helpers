const addTask = document.querySelector('#add-task ul');

const newTask = document.querySelector('#new-task ul');

const forms = document.forms;



// add books
const addForm = forms['add-task'];
addForm.addEventListener('submit', function (e) {
    e.preventDefault();

    const value = addForm.querySelector('input[type="text"]').value;
    console.log(value)

    const li = document.createElement('li');
    const task = document.createElement('span');
    const deleteBtn = document.createElement('button');

    task.innerHTML = value;
    deleteBtn.innerHTML = '<i class="fa-solid fa-trash-arrow-up">';

    task.classList.add('task');
    deleteBtn.classList.add('delete');

    li.appendChild(task);
    li.appendChild(deleteBtn);
    newTask.appendChild(li);
});

newTask.addEventListener('click', (e) => {
    if (e.target.className === 'delete') {
        const li = e.target.parentElement;
        li.parentNode.removeChild(li);
    }
});
