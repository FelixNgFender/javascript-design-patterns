/**
 * @fileoverview Project list component
 * @author Thinh Nguyen
 * @version 1.0.0
 */

"use strict";

import { addTask as addTask, completeProject, completeTask } from "../../index";

import deleteIcon from "./delete_FILL0_wght400_GRAD0_opsz48.svg";
import expandIconMore from "./expand_more_FILL0_wght400_GRAD0_opsz48.svg";
import expandIconLess from "./expand_less_FILL0_wght400_GRAD0_opsz48.svg";
import {
  deleteTask,
  deleteProject,
  sortTaskByDate,
  sortArrByPriority,
  swapProject,
} from "../../index";
import { refreshTaskList } from "../pending/pending";

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

  if (!taskObj.completed) {
    task.style.backgroundImage =
      "linear-gradient(to right, " +
      getObjColor(taskIndex, taskArr) +
      ", transparent 10%)";
  }
  task.dataset.priority = taskObj.priority;
  taskTitle.spellcheck = false;
  taskDescription.spellcheck = false;
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

  taskCheckbox.checked = taskObj.completed || projectObj.completed;
  if (projectObj.completed) taskCheckbox.disabled = true;
  taskCheckbox.addEventListener("click", () => {
    completeTask(projectObj, taskIndex);
  });

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
  if (projectObj.completed) addTaskBtn.disabled = true;

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
 * Create a sort task component associated with a project.
 * @param {project} projectObj Associated project object
 * @return {HTMLElement} Sort task component
 */
function sortComponent(projectObj) {
  const sortTaskWrapper = document.createElement("div");
  const sortTaskByPriorityLabel = document.createElement("label");
  const sortTaskByPriorityBtn = document.createElement("input");
  const sortTaskByDateLabel = document.createElement("label");
  const sortTaskByDateBtn = document.createElement("input");

  sortTaskWrapper.classList.add("main-project-sortTaskWrapper");
  sortTaskByPriorityLabel.classList.add("main-project-sortLabel");
  sortTaskByPriorityBtn.classList.add("main-project-sortBtn");
  sortTaskByDateLabel.classList.add("main-project-sortLabel");
  sortTaskByDateBtn.classList.add("main-project-sortBtn");

  sortTaskByPriorityLabel.textContent = "Sort by priority";
  sortTaskByPriorityLabel.htmlFor = "sortPriority-" + projectObj.id;
  sortTaskByDateLabel.textContent = "Sort by date";
  sortTaskByDateLabel.htmlFor = "sortDate-" + projectObj.id;

  sortTaskByPriorityBtn.type = "radio";
  sortTaskByPriorityBtn.name = "sortTask-" + projectObj.id;
  sortTaskByPriorityBtn.id = "sortPriority-" + projectObj.id;
  sortTaskByPriorityBtn.value = "priority";
  // Default is sort by priority, checked is a boolean attribute
  sortTaskByPriorityBtn.checked = true;

  sortTaskByDateBtn.type = "radio";
  sortTaskByDateBtn.name = "sortTask-" + projectObj.id;
  sortTaskByDateBtn.id = "sortDate-" + projectObj.id;
  sortTaskByDateBtn.value = "date";

  sortTaskByPriorityBtn.addEventListener("click", () => {
    sortArrByPriority(projectObj.tasks);
    refreshTaskList(projectObj);
  });

  sortTaskByDateBtn.addEventListener("click", () => {
    sortTaskByDate(projectObj.tasks);
    refreshTaskList(projectObj);
  });

  sortTaskWrapper.appendChild(sortTaskByPriorityBtn);
  sortTaskWrapper.appendChild(sortTaskByPriorityLabel);
  sortTaskWrapper.appendChild(sortTaskByDateBtn);
  sortTaskWrapper.appendChild(sortTaskByDateLabel);

  return sortTaskWrapper;
}

/**
 * Get the color of a project or task object based on its priority.
 * @param {Number} index Index of object in array
 * @param {Array} objArr Project or task array
 * @return {String} Color string
 */
function getObjColor(index, objArr) {
  const obj = objArr[index];
  const objPriority = obj.priority;
  const normalizedPriority = objPriority / (objArr.length - 1);
  const red = Math.round(255 * (1 - normalizedPriority));
  const green = Math.round(255 * normalizedPriority);
  return "rgb(" + red + "," + green + ",0)";
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

  const sortTaskComponent = sortComponent(projectObj);
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

  if (!projectObj.completed) {
    project.style.backgroundImage =
      "linear-gradient(to right, " +
      getObjColor(index, projectArr) +
      ", transparent 15%)";
  }
  project.draggable = true;
  project.addEventListener("dragstart", (e) => {
    e.dataTransfer.setData("text/plain", projectObj.priority);
    // Lower opacity when dragging
    project.style.opacity = 0.5;
  });
  project.addEventListener("dragover", (e) => {
    e.preventDefault();
  });
  project.addEventListener("drop", (e) => {
    const draggedProjectPriority = e.dataTransfer.getData("text/plain");
    swapProject(projectArr, draggedProjectPriority, projectObj.priority);
  });
  project.addEventListener("dragend", (e) => {
    project.style.opacity = 1;
  });
  project.id = "main-project-" + projectObj.id;
  project.dataset.priority = projectObj.priority;
  projectCheckbox.checked = projectObj.completed;
  if (projectObj.completed) projectCheckbox.disabled = true;
  projectCheckbox.addEventListener("click", () => {
    completeProject(projectObj);
  });
  projectTitle.textContent = projectObj.title;
  projectTitle.spellcheck = false;
  projectDescription.textContent = projectObj.description;
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
