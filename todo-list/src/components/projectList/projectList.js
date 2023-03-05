/**
 * @fileoverview Project list component
 * @author Thinh Nguyen
 * @version 1.0.0
 */

"use strict";

import {removeProject as removeProject} from "../../index";

import deleteIcon from "./delete_FILL0_wght400_GRAD0_opsz48.svg";
import expandIconMore from "./expand_more_FILL0_wght400_GRAD0_opsz48.svg";
import expandIconLess from "./expand_less_FILL0_wght400_GRAD0_opsz48.svg";

/**
 * Create a task component.
 * @param {Object} taskObj Task object
 * @return {HTMLElement} Task element
 */
function task(taskObj) {
  const task = document.createElement("li");
  const taskCheckbox = document.createElement("input");
  const taskHeaderWrapper = document.createElement("div");
  const taskTitle = document.createElement("div");
  const taskDescription = document.createElement("div");
  const taskDate = document.createElement("span");
  const taskExpandBtn = document.createElement("button");
  const taskDeleteBtn = document.createElement("button");
  const taskExpandIcon = document.createElement("img");
  const taskDeleteIcon = document.createElement("img");

  task.classList.add("main-task");
  taskCheckbox.type = "checkbox";
  taskCheckbox.classList.add("main-task-checkbox");
  taskHeaderWrapper.classList.add("main-task-headerWrapper");
  taskTitle.classList.add("main-task-title");
  taskDescription.classList.add("main-task-description");
  taskDate.classList.add("main-task-date");
  taskExpandBtn.classList.add("main-task-expandBtn");
  taskDeleteBtn.classList.add("main-task-deleteBtn");
  taskExpandIcon.classList.add("main-icons");
  taskDeleteIcon.classList.add("main-icons");

  taskTitle.attributes["contenteditable"] = "true";
  taskDescription.attributes["contenteditable"] = "true";
  taskDate.attributes["contenteditable"] = "true";
  taskExpandBtn.textContent = "EXPAND";
  taskDeleteBtn.textContent = "DELETE";

  taskExpandIcon.src = expandIconMore;
  taskDeleteIcon.src = deleteIcon;

  taskCheckbox.checked = taskObj.completed;
  taskTitle.textContent = taskObj.title;
  taskDescription.textContent = taskObj.description;
  taskDate.textContent = taskObj.dueDate;

  task.appendChild(taskCheckbox);
  task.appendChild(taskHeaderWrapper);
  taskHeaderWrapper.appendChild(taskTitle);
  taskTitle.appendChild(taskDescription);
  taskHeaderWrapper.appendChild(taskDate);
  taskHeaderWrapper.appendChild(taskExpandBtn);
  taskExpandBtn.appendChild(taskExpandIcon);
  task.appendChild(taskDeleteBtn);
  taskDeleteBtn.appendChild(taskDeleteIcon);

  return task;
}

/**
 * Create a task list component with numTasks tasks.
 * @param {Array} tasks Number of tasks
 * @return {HTMLElement} Task list element
 */
function taskList(tasks) {
  const taskList = document.createElement("ul");
  taskList.classList.add("main-project-taskList");

  for (let i = 0; i < tasks.length; i++) {
    const taskComponent = task(tasks[i]);
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
 * @param {project} projectObj Associated project object
 * @return {HTMLElement} Project element
 */
function project(projectObj) {
  const project = document.createElement("li");
  const projectCheckbox = document.createElement("input");
  const projectTitle = document.createElement("div");
  const projectDescription = document.createElement("div");
  const projectExpandBtn = document.createElement("button");
  const projectDeleteBtn = document.createElement("button");
  const projectExpandIcon = document.createElement("img");
  const projectDeleteIcon = document.createElement("img");

  const sortTaskComponent = sortComponent();
  const projectTaskList = taskList(projectObj.tasks);

  project.classList.add("main-project");
  
  projectCheckbox.type = "checkbox";
  projectCheckbox.classList.add("main-project-checkbox");
  projectTitle.classList.add("main-project-title");
  projectDescription.classList.add("main-project-description");
  projectExpandBtn.classList.add("main-project-expandBtn");
  projectDeleteBtn.classList.add("main-project-deleteBtn");
  projectExpandIcon.classList.add("main-icons");
  projectDeleteIcon.classList.add("main-icons");

  project.dataset.priority = projectObj.priority;
  projectCheckbox.checked = projectObj.completed;
  projectTitle.textContent = projectObj.title;
  projectTitle.attributes["contenteditable"] = true;
  projectDescription.textContent = projectObj.description;
  projectDescription.attributes["contenteditable"] = true;
  projectExpandBtn.textContent = "EXPAND";
  projectDeleteBtn.textContent = "DELETE";
  projectDeleteBtn.addEventListener("click", () => {
    removeProject(project);
  });

  projectExpandIcon.src = expandIconMore;
  projectDeleteIcon.src = deleteIcon;

  project.appendChild(projectCheckbox);
  project.appendChild(projectTitle);
  projectTitle.appendChild(projectDescription);
  console.log(projectTitle);
  project.appendChild(projectExpandBtn);
  project.appendChild(projectDeleteBtn);
  projectExpandBtn.appendChild(projectExpandIcon);
  projectDeleteBtn.appendChild(projectDeleteIcon);
  project.appendChild(sortTaskComponent);
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
    const projectComponent = project(projectArr[i]);
    projectList.appendChild(projectComponent);
  }

  return projectList;
}
