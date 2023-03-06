/**
 * @fileoverview Project list component
 * @author Thinh Nguyen
 * @version 1.0.0
 */

"use strict";

import { addTask as addTask } from "../../index";

import deleteIcon from "./delete_FILL0_wght400_GRAD0_opsz48.svg";
import expandIconMore from "./expand_more_FILL0_wght400_GRAD0_opsz48.svg";
import expandIconLess from "./expand_less_FILL0_wght400_GRAD0_opsz48.svg";
import { deleteTask, deleteProject } from "../../index";

/**
 * Create a task component from the associated project and the task index.
 * @param {project} projectObj Project object
 * @param {Number} taskIndex Index of the task in the project
 * @return {HTMLElement} Task component
 */
function task(projectObj, taskIndex) {
  const taskArr = projectObj.tasks;
  const taskObj = taskArr[taskIndex];
  const task = document.createElement("li");
  const taskCheckbox = document.createElement("input");
  const taskTitle = document.createElement("h4");
  const taskDescription = document.createElement("p");
  const taskDate = document.createElement("span");
  const taskExpandBtn = document.createElement("button");
  const taskExpandBtnText = document.createElement("span");
  const taskDeleteBtn = document.createElement("button");
  const taskDeleteBtnText = document.createElement("span");
  const taskExpandIcon = document.createElement("img");
  const taskDeleteIcon = document.createElement("img");

  task.classList.add("main-task");
  taskCheckbox.type = "checkbox";
  taskCheckbox.classList.add("main-task-checkbox");
  taskTitle.classList.add("main-task-title");
  taskDescription.classList.add("main-task-description");
  taskDate.classList.add("main-task-date");
  taskExpandBtn.classList.add("main-task-expandBtn");
  taskDeleteBtn.classList.add("main-task-deleteBtn");
  taskExpandIcon.classList.add("main-icons");
  taskDeleteIcon.classList.add("main-icons");

  task.dataset.priority = taskObj.priority;
  task.dataset.date = taskObj.date;
  taskTitle.contentEditable = true;
  taskTitle.spellcheck = false;
  taskDescription.contentEditable = true;
  taskDescription.spellcheck = false;
  taskDate.contentEditable = true;
  taskExpandBtnText.textContent = "EXPAND";
  taskExpandBtn.addEventListener("click", () => {
    if (taskExpandBtnText.textContent === "EXPAND") {
      taskExpandBtnText.textContent = "COLLAPSE";
      taskExpandIcon.src = expandIconLess;
      taskDescription.classList.add("active");
    } else {
      taskExpandBtnText.textContent = "EXPAND";
      taskExpandIcon.src = expandIconMore;
      taskDescription.classList.remove("active");
    }
  });

  taskDeleteBtnText.textContent = "DELETE";
  taskDeleteBtn.addEventListener("click", () => {
    deleteTask(projectObj, taskIndex);
  });

  taskExpandIcon.src = expandIconMore;
  taskDeleteIcon.src = deleteIcon;

  taskCheckbox.checked = taskObj.completed;
  taskTitle.textContent = taskObj.title;
  taskDescription.textContent = taskObj.description;
  taskDate.textContent = taskObj.dueDate;

  task.appendChild(taskCheckbox);
  task.appendChild(taskTitle);
  taskTitle.appendChild(taskDescription);
  task.appendChild(taskDate);
  task.appendChild(taskExpandBtn);
  taskExpandBtn.appendChild(taskExpandBtnText);
  taskExpandBtn.appendChild(taskExpandIcon);
  task.appendChild(taskDeleteBtn);
  taskDeleteBtn.appendChild(taskDeleteBtnText);
  taskDeleteBtn.appendChild(taskDeleteIcon);

  return task;
}

/**
 * Create a popup component to add a new task associated with
 * the input project object.
 * @param {project} projectObj Associated project object
 * @return {HTMLElement} Add task element
 */
function addTaskPopup(projectObj) {
  const addTaskForm = document.createElement("form");
  const taskTitle = document.createElement("input");
  const taskDescription = document.createElement("textarea");
  const taskDate = document.createElement("input");
  const confirmBtn = document.createElement("button");
  const cancelBtn = document.createElement("button");

  addTaskForm.classList.add("main-addTaskForm");
  addTaskForm.id = "main-addTaskForm-" + projectObj.id;
  taskTitle.classList.add("main-addTaskForm-title");
  taskDescription.classList.add("main-addTaskForm-description");
  taskDate.classList.add("main-addTaskForm-date");
  confirmBtn.classList.add("main-addTaskForm-confirm");
  cancelBtn.classList.add("main-addTaskForm-cancel");

  taskTitle.type = "text";
  taskTitle.placeholder = "Task Name";
  taskTitle.name = "title";
  taskTitle.required = true;
  taskDescription.placeholder = "Task Description";
  taskDescription.name = "description";
  taskDate.type = "date";
  taskDate.name = "dueDate";
  confirmBtn.type = "submit";
  confirmBtn.textContent = "Confirm";
  cancelBtn.type = "button";
  cancelBtn.textContent = "Cancel";

  addTaskForm.onsubmit = (e) => {
    e.preventDefault();
    addTask(projectObj);
    addTaskForm.remove();
  };
  cancelBtn.onclick = () => {
    addTaskForm.remove();
  };

  addTaskForm.appendChild(taskTitle);
  addTaskForm.appendChild(taskDescription);
  addTaskForm.appendChild(taskDate);
  addTaskForm.appendChild(confirmBtn);
  addTaskForm.appendChild(cancelBtn);

  return addTaskForm;
}

/**
 * Create an add task button component associated with a project.
 * @param {Array} projectObj Associated project object
 * @return {HTMLElement} Add task button
 */
function addTaskBtn(projectObj) {
  const addTaskBtn = document.createElement("button");

  addTaskBtn.classList.add("main-addTaskBtn");
  addTaskBtn.textContent = "Add Task +";

  addTaskBtn.addEventListener("click", () => {
    if (document.getElementById("main-addTaskForm-" + projectObj.id)) return;
    const taskList = document.getElementById(
      "main-project-taskList-" + projectObj.id
    );
    taskList.appendChild(addTaskPopup(projectObj));
  });

  return addTaskBtn;
}

/**
 * Create a task list component associated with a project.
 * @param {project} projectObj Associated project object
 * @return {HTMLElement} Task list element
 * @export
 */
export function taskList(projectObj) {
  const taskList = document.createElement("ul");
  const taskArr = projectObj.tasks;

  taskList.classList.add("main-project-taskList");
  taskList.id = "main-project-taskList-" + projectObj.id;

  for (let i = 0; i < taskArr.length; i++) {
    const taskComponent = task(projectObj, i);
    taskList.appendChild(taskComponent);
  }

  return taskList;
}

/**
 * Create a sort task component.
 * @return {HTMLElement} Sort task component
 */
function sortComponent() {
  const sortTaskWrapper = document.createElement("div");
  const sortTaskByPriorityBtn = document.createElement("button");
  const sortTaskByDateBtn = document.createElement("button");

  sortTaskWrapper.classList.add("main-project-sortTaskWrapper");
  sortTaskByPriorityBtn.classList.add("main-project-sortBtn");
  sortTaskByDateBtn.classList.add("main-project-sortBtn");

  sortTaskByPriorityBtn.textContent = "Sort by priority";
  sortTaskByDateBtn.textContent = "Sort by date";

  sortTaskWrapper.appendChild(sortTaskByPriorityBtn);
  sortTaskWrapper.appendChild(sortTaskByDateBtn);

  return sortTaskWrapper;
}

/**
 * Create a project component.
 * @param {number} index Index of project in project array
 * @param {Array} projectArr Associated project object array
 * @return {HTMLElement} Project element
 */
function project(index, projectArr) {
  const projectObj = projectArr[index];
  const project = document.createElement("li");
  const projectCheckbox = document.createElement("input");
  const projectTitle = document.createElement("h3");
  const projectDescription = document.createElement("p");
  const projectExpandBtn = document.createElement("button");
  const projectExpandBtnText = document.createElement("span");
  const projectDeleteBtn = document.createElement("button");
  const projectDeleteBtnText = document.createElement("span");
  const projectExpandIcon = document.createElement("img");
  const projectDeleteIcon = document.createElement("img");

  const sortTaskComponent = sortComponent();
  const addTaskBtnComponent = addTaskBtn(projectObj);
  const projectTaskList = taskList(projectObj);

  project.classList.add("main-project");
  projectCheckbox.type = "checkbox";
  projectCheckbox.classList.add("main-project-checkbox");
  projectTitle.classList.add("main-project-title");
  projectDescription.classList.add("main-project-description");
  projectExpandBtn.classList.add("main-project-expandBtn");
  projectDeleteBtn.classList.add("main-project-deleteBtn");
  projectExpandIcon.classList.add("main-icons");
  projectDeleteIcon.classList.add("main-icons");

  project.id = "main-project-" + projectObj.id;
  project.dataset.priority = projectObj.priority;
  projectCheckbox.checked = projectObj.completed;
  projectTitle.textContent = projectObj.title;
  projectTitle.contentEditable = true;
  projectTitle.spellcheck = false;
  projectDescription.textContent = projectObj.description;
  projectDescription.contentEditable = true;
  projectDescription.spellcheck = false;
  projectExpandBtnText.textContent = "EXPAND";
  projectExpandBtn.addEventListener("click", () => {
    if (projectExpandBtnText.textContent === "EXPAND") {
      projectExpandBtnText.textContent = "COLLAPSE";
      projectExpandIcon.src = expandIconLess;
      projectDescription.classList.add("active");
    } else {
      projectExpandBtnText.textContent = "EXPAND";
      projectExpandIcon.src = expandIconMore;
      projectDescription.classList.remove("active");
    }
  });
  projectDeleteBtnText.textContent = "DELETE";
  projectDeleteBtn.addEventListener("click", () => {
    deleteProject(index, projectArr);
  });

  projectExpandIcon.src = expandIconMore;
  projectDeleteIcon.src = deleteIcon;

  project.appendChild(projectCheckbox);
  project.appendChild(projectTitle);
  projectTitle.appendChild(projectDescription);
  project.appendChild(projectExpandBtn);
  project.appendChild(projectDeleteBtn);
  projectExpandBtn.appendChild(projectExpandBtnText);
  projectExpandBtn.appendChild(projectExpandIcon);
  projectDeleteBtn.appendChild(projectDeleteBtnText);
  projectDeleteBtn.appendChild(projectDeleteIcon);
  project.appendChild(sortTaskComponent);
  project.appendChild(addTaskBtnComponent);
  project.appendChild(projectTaskList);

  return project;
}

/**
 * Create a project list component with projects.
 * @param {Array} projectArr Array of projects
 * @return {HTMLElement} Project list element
 * @export
 */
export default function projectList(projectArr) {
  const projectList = document.createElement("ul");
  projectList.classList.add("main-projectList");
  projectList.id = "main-projectList";

  for (let i = 0; i < projectArr.length; i++) {
    const projectComponent = project(i, projectArr);
    projectList.appendChild(projectComponent);
  }

  return projectList;
}
