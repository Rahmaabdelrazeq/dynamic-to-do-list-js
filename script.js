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
