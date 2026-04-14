const titleInput = document.getElementById("title");
const descriptionInput = document.getElementById("description");
const addTaskBtn = document.getElementById("addTaskBtn");
const pendingTasksContainer = document.getElementById("pendingTasks");
const completedTasksContainer = document.getElementById("completedTasks");

let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

function saveTasks() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function formatDateTime(dateString) {
  const date = new Date(dateString);
  return date.toLocaleString();
}

function renderTasks() {
  pendingTasksContainer.innerHTML = "";
  completedTasksContainer.innerHTML = "";

  tasks.forEach((task, index) => {
    const taskCard = document.createElement("div");
    taskCard.classList.add("task-card");

    taskCard.innerHTML = `
      <h3>${task.title}</h3>
      <p>${task.description}</p>
      <p class="${task.completed ? "completed-label" : "pending-label"}">
        ${task.completed ? "Completed" : "Pending"}
      </p>
      <p class="task-time">Added: ${formatDateTime(task.createdAt)}</p>
      ${
        task.completedAt
          ? `<p class="task-time">Completed: ${formatDateTime(task.completedAt)}</p>`
          : ""
      }
      <div class="task-actions">
        ${
          !task.completed
            ? `<button class="complete-btn" onclick="completeTask(${index})">Complete</button>`
            : ""
        }
        <button class="edit-btn" onclick="editTask(${index})">Edit</button>
        <button class="delete-btn" onclick="deleteTask(${index})">Delete</button>
      </div>
    `;

    if (task.completed) {
      completedTasksContainer.appendChild(taskCard);
    } else {
      pendingTasksContainer.appendChild(taskCard);
    }
  });
}

function addTask() {
  const title = titleInput.value.trim();
  const description = descriptionInput.value.trim();

  if (title === "" || description === "") {
    alert("Please fill out both fields.");
    return;
  }

  const newTask = {
    title,
    description,
    completed: false,
    createdAt: new Date().toISOString(),
    completedAt: null
  };

  tasks.push(newTask);
  saveTasks();
  renderTasks();

  titleInput.value = "";
  descriptionInput.value = "";
  titleInput.focus();
}

function completeTask(index) {
  tasks[index].completed = true;
  tasks[index].completedAt = new Date().toISOString();
  saveTasks();
  renderTasks();
}

function deleteTask(index) {
  tasks.splice(index, 1);
  saveTasks();
  renderTasks();
}

function editTask(index) {
  const updatedTitle = prompt("Edit task title:", tasks[index].title);
  if (updatedTitle === null) return;

  const updatedDescription = prompt("Edit task description:", tasks[index].description);
  if (updatedDescription === null) return;

  if (updatedTitle.trim() === "" || updatedDescription.trim() === "") {
    alert("Task title and description cannot be empty.");
    return;
  }

  tasks[index].title = updatedTitle.trim();
  tasks[index].description = updatedDescription.trim();

  saveTasks();
  renderTasks();
}

addTaskBtn.addEventListener("click", addTask);

// Add Enter key support for quick submission
titleInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    descriptionInput.focus();
  }
});

descriptionInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter" && e.ctrlKey) {
    addTask();
  }
});

renderTasks();