// script.js
const authContainer = document.getElementById("auth-container");
const todoContainer = document.getElementById("todo-container");
const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");
const loginBtn = document.getElementById("login-btn");
const registerBtn = document.getElementById("register-btn");
const logoutBtn = document.getElementById("logout-btn");
const loggedInUserSpan = document.getElementById("logged-in-user");
const todoInput = document.getElementById("todo-input");
const addButton = document.getElementById("add-btn");
const todoList = document.getElementById("todo-list");

let currentUser = null;

// Load users and login state from local storage
const users = JSON.parse(localStorage.getItem("users")) || [];
const loggedInUser = localStorage.getItem("loggedInUser");

// Check if a user is already logged in
if (loggedInUser) {
  const user = users.find((u) => u.username === loggedInUser);
  if (user) {
    currentUser = user;
    loggedInUserSpan.textContent = currentUser.username;
    authContainer.classList.add("hidden");
    todoContainer.classList.remove("hidden");
    loadTasks();
  }
}

// Event Listeners
loginBtn.addEventListener("click", login);
registerBtn.addEventListener("click", register);
logoutBtn.addEventListener("click", logout);
addButton.addEventListener("click", addTask);
todoInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") addTask();
});

// Function to register a new user
function register() {
  const username = usernameInput.value.trim();
  const password = passwordInput.value.trim();

  if (username && password) {
    const userExists = users.some((user) => user.username === username);
    if (userExists) {
      alert("Username already exists!");
    } else {
      users.push({ username, password, tasks: [] });
      localStorage.setItem("users", JSON.stringify(users));
      alert("Registration successful! Please login.");
    }
  } else {
    alert("Please enter a username and password.");
  }
}

// Function to login
function login() {
  const username = usernameInput.value.trim();
  const password = passwordInput.value.trim();

  const user = users.find((user) => user.username === username && user.password === password);
  if (user) {
    currentUser = user;
    loggedInUserSpan.textContent = currentUser.username;
    authContainer.classList.add("hidden");
    todoContainer.classList.remove("hidden");

    // Save the logged-in user to localStorage
    localStorage.setItem("loggedInUser", currentUser.username);

    // Load tasks for the logged-in user
    loadTasks();
  } else {
    alert("Invalid username or password.");
  }
}

// Function to logout
function logout() {
  currentUser = null;
  authContainer.classList.remove("hidden");
  todoContainer.classList.add("hidden");

  // Remove the logged-in user from localStorage
  localStorage.removeItem("loggedInUser");
}

// Function to add a new task
function addTask() {
  const taskText = todoInput.value.trim();
  if (taskText !== "") {
    const task = {
      id: Date.now(),
      text: taskText,
      completed: false,
    };
    currentUser.tasks.push(task);
    saveTasks();
    renderTask(task);
    todoInput.value = "";
  }
}

// Function to save tasks to local storage
function saveTasks() {
  localStorage.setItem("users", JSON.stringify(users));
}

// Function to load tasks for the current user
function loadTasks() {
  todoList.innerHTML = "";
  currentUser.tasks.forEach(renderTask);
}

// Function to render a task
function renderTask(task) {
  const li = document.createElement("li");
  li.dataset.id = task.id;

  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.checked = task.completed;
  checkbox.addEventListener("change", toggleTaskCompletion);

  const taskText = document.createElement("span");
  taskText.className = "task-text";
  taskText.textContent = task.text;

  if (task.completed) li.classList.add("completed");

  const deleteButton = document.createElement("button");
  deleteButton.textContent = "Delete";
  deleteButton.addEventListener("click", deleteTask);

  li.append(checkbox, taskText, deleteButton);
  todoList.appendChild(li);
}

// Function to toggle task completion
function toggleTaskCompletion(e) {
  const li = e.target.closest("li");
  const taskId = li.dataset.id;
  const task = currentUser.tasks.find((t) => t.id == taskId);
  task.completed = !task.completed;
  saveTasks();
  li.classList.toggle("completed");
}

// Function to delete a task
function deleteTask(e) {
  const li = e.target.closest("li");
  const taskId = li.dataset.id;
  currentUser.tasks = currentUser.tasks.filter((t) => t.id != taskId);
  saveTasks();
  li.remove();
}