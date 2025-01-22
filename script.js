// Wait for the DOM to fully load before executing any code
document.addEventListener('DOMContentLoaded', () => {
    // Select DOM elements
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // Function to add a new task to the list
    function addTask() {
        const taskText = taskInput.value.trim();

        // If the input field is empty, alert the user to enter a task
        if (taskText === "") {
            alert("Please enter a task.");
            return;
        }

        // Create a new list item (li) element for the task
        const taskItem = document.createElement('li');
        taskItem.textContent = taskText;

        // Create a "Remove" button
        const removeButton = document.createElement('button');
        removeButton.textContent = "Remove";
        removeButton.classList.add('remove-btn');
        
        // Add event listener to remove the task when the button is clicked
        removeButton.addEventListener('click', () => {
            taskItem.remove();  // Remove the task item from the list
        });

        // Append the remove button to the task item
        taskItem.appendChild(removeButton);

        // Append the task item to the task list
        taskList.appendChild(taskItem);

        // Clear the input field after adding the task
        taskInput.value = "";
    }

    // Event listener for the "Add Task" button click
    addButton.addEventListener('click', addTask);

    // Allow tasks to be added by pressing "Enter" in the input field
    taskInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            addTask();
        }
    });
});
// Wait for the DOM to fully load before executing any code
document.addEventListener('DOMContentLoaded', () => {
    // Select DOM elements
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // Load tasks from Local Storage when the page loads
    loadTasks();

    // Function to add a new task to the list
    function addTask(taskText, save = true) {
        if (taskText.trim() === "") {
            alert("Please enter a task.");
            return;
        }

        // Create a new list item (li) element for the task
        const taskItem = document.createElement('li');
        taskItem.textContent = taskText;

        // Create a "Remove" button
        const removeButton = document.createElement('button');
        removeButton.textContent = "Remove";
        removeButton.classList.add('remove-btn');
        
        // Add event listener to remove the task when the button is clicked
        removeButton.addEventListener('click', () => {
            taskItem.remove();  // Remove the task item from the list
            removeTaskFromStorage(taskText);  // Remove the task from Local Storage
        });

        // Append the remove button to the task item
        taskItem.appendChild(removeButton);

        // Append the task item to the task list
        taskList.appendChild(taskItem);

        // Save to Local Storage if required
        if (save) {
            saveTaskToStorage(taskText);
        }

        // Clear the input field after adding the task
        taskInput.value = "";
    }

    // Function to save task to Local Storage
    function saveTaskToStorage(taskText) {
        const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
        storedTasks.push(taskText);
        localStorage.setItem('tasks', JSON.stringify(storedTasks));
    }

    // Function to remove task from Local Storage
    function removeTaskFromStorage(taskText) {
        const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
        const updatedTasks = storedTasks.filter(task => task !== taskText);
        localStorage.setItem('tasks', JSON.stringify(updatedTasks));
    }

    // Function to load tasks from Local Storage and display them
    function loadTasks() {
        const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
        storedTasks.forEach(taskText => {
            addTask(taskText, false); // False indicates don't save again to Local Storage
        });
    }

    // Event listener for the "Add Task" button click
    addButton.addEventListener('click', () => {
        const taskText = taskInput.value.trim();
        addTask(taskText);
    });

    // Allow tasks to be added by pressing "Enter" in the input field
    taskInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            const taskText = taskInput.value.trim();
            addTask(taskText);
        }
    });
});
