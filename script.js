let taskInput = document.getElementById('taskInput');
let addTaskBtn = document.getElementById('addTaskBtn');
let toggleCompletedBtn = document.getElementById('toggleCompletedBtn');
let clearTasksBtn = document.getElementById('clearTasksBtn');
let taskList = document.getElementById('taskList');

taskInput.addEventListener('input', () => {
  if (taskInput.value.trim() === '') {
    addTaskBtn.disabled = true; 
  } else {
    addTaskBtn.disabled = false; 
  }
});

addTaskBtn.addEventListener('click', () => {
  let taskText = taskInput.value.trim();

  if (taskText !== '') {
    let listItem = document.createElement('li');
    listItem.textContent = taskText;

    let completeBtn = document.createElement('button');
    completeBtn.textContent = 'Complete';
    listItem.appendChild(completeBtn);

    let deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    listItem.appendChild(deleteBtn);

    taskList.appendChild(listItem);

    taskInput.value = '';
    addTaskBtn.disabled = true;

    completeBtn.addEventListener('click', () => {
      listItem.classList.toggle('completed'); // Use class to manage completed state
    });

    deleteBtn.addEventListener('click', () => {
      taskList.removeChild(listItem);
    });
  }
});

toggleCompletedBtn.addEventListener('click', () => {
  let tasks = document.querySelectorAll('li'); 
  
  tasks.forEach(task => {
    if (task.classList.contains('completed')) {
      task.classList.toggle('hidden'); // Use class to manage visibility
    }
  });

  if (toggleCompletedBtn.textContent === 'Hide Completed') {
    toggleCompletedBtn.textContent = 'Show Completed';
  } else {
    toggleCompletedBtn.textContent = 'Hide Completed';
  }
});


clearTasksBtn.addEventListener('click', () => {
  taskList.innerHTML = '';
});
