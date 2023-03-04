/**
 * @fileoverview Project list component
 * @author Thinh Nguyen
 * @version 1.0.0
 */

"use strict";

import deleteIcon from "./delete_FILL0_wght400_GRAD0_opsz48.svg";
import expandIconMore from "./expand_more_FILL0_wght400_GRAD0_opsz48.svg";
import expandIconLess from "./expand_less_FILL0_wght400_GRAD0_opsz48.svg";

/**
 * Create a task element.
 * @return {HTMLElement} Task element
 */
function task() {
  const task = document.createElement("li");
  const taskCheckbox = document.createElement("input");
  const taskHeaderWrapper = document.createElement("div");
  const taskTitle = document.createElement("span");
  const taskDate = document.createElement("span");
  const taskExpandBtn = document.createElement("button");
  const taskDeleteBtn = document.createElement("button");
  const taskExpandIcon = document.createElement("svg");
  const taskDeleteIcon = document.createElement("svg");
  const expandIconPath = document.createElement("path");
  const deleteIconPath = document.createElement("path");

  task.classList.add("main-task");
  taskCheckbox.type = "checkbox";
  taskCheckbox.classList.add("main-task-checkbox");
  taskHeaderWrapper.classList.add("main-task-headerWrapper");
  taskTitle.classList.add("main-task-title");
  taskDate.classList.add("main-task-date");
  taskExpandBtn.classList.add("main-task-expandBtn");
  taskDeleteBtn.classList.add("main-task-deleteBtn");

  taskExpandBtn.textContent = "EXPAND";
  taskDeleteBtn.textContent = "DELETE";
  expandIconPath.setAttribute("d", expandIconMore);
  deleteIconPath.setAttribute("d", deleteIcon);

  task.appendChild(taskCheckbox);
  task.appendChild(taskHeaderWrapper);
  taskHeaderWrapper.appendChild(taskTitle);
  taskHeaderWrapper.appendChild(taskDate);
  taskHeaderWrapper.appendChild(taskExpandBtn);
  taskExpandBtn.appendChild(taskExpandIcon);
  taskExpandIcon.appendChild(expandIconPath);
  
  task.appendChild(taskDeleteBtn);

  return task;
}

/**
 * Create a task list element.
 * @return {HTMLElement} Task list element
 */
function taskList() {
  const taskList = document.createElement("ul");
  taskList.classList.add("main-project-taskList");
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

  sortTaskWrapper.appendChild(sortTaskByPriorityBtn);
  sortTaskWrapper.appendChild(sortTaskByDateBtn);

  return sortTaskWrapper;
}


/**
 * Create a project element.
 * @return {HTMLElement} Project element
 */
function project() {
  const project = document.createElement("li");
  const projectCheckbox = document.createElement("input");
  const projectTitle = document.createElement("span");
  const projectExpandBtn = document.createElement("button");
  const projectDeleteBtn = document.createElement("button");

  const sortTaskComponent = sortComponent();
  const projectTaskList = taskList();

  project.classList.add("main-project");
  projectCheckbox.type = "checkbox";
  projectCheckbox.classList.add("main-project-checkbox");
  projectTitle.classList.add("main-project-title");
  projectExpandBtn.classList.add("main-project-expandBtn");
  projectDeleteBtn.classList.add("main-project-deleteBtn");

  project.appendChild(projectCheckbox);
  project.appendChild(projectTitle);
  project.appendChild(projectExpandBtn);
  project.appendChild(projectDeleteBtn);
  project.appendChild(sortTaskComponent);
  project.appendChild(projectTaskList);

  return project;
}

/**
 * Create the project list component.
 * @return {HTMLElement} Project list element
 * @export
 */
export default function projectList() {
  const projectList = document.createElement("ul");
  
  const dummyProject = project();
  const dummyTask = task();

  projectList.classList.add("main-projectList");

  projectList.appendChild(dummyProject);
  dummyProject.querySelector(".main-project-taskList").appendChild(dummyTask);

  
  return projectList;
}
