/**
 * @fileoverview Todo list app
 * @author Thinh Nguyen
 * @version 1.0.0
 */

"use strict";

import pageLoad from "./components/pageLoad";
import renderPendingComponent, {
  refreshProjectList,
  refreshTaskList,
} from "./components/pending/pending";
import renderArchiveComponent from "./components/archive/archive";

import "./styles/styles.css";
import "./styles/styles-reset.css";

import faviconLink from "./assets/favicon.png";

/* DATA STRUCTURES */
const project = (title, description, priority, tasks, id, completed) => {
  return { title, description, priority, tasks, id, completed };
};

const task = (
  title,
  description,
  priority,
  project,
  projectId,
  dueDate,
  completed
) => {
  return {
    title,
    description,
    priority,
    project,
    projectId,
    dueDate,
    completed,
  };
};

const pendingProjects = [];

const completedProjects = [];

/**
 * Get task data from user-input form.
 * @param {project} projectObj Associated project object
 * @return {task} Task object
 */
function getTaskFromInput(projectObj) {
  const form = document.getElementById("main-addTaskForm-" + projectObj.id);
  const title = form.elements["title"].value;
  const description = form.elements["description"].value;
  const priority = projectObj.tasks.length;
  const projectId = projectObj.id;
  const id = Date.now();
  const dueDate = form.elements["dueDate"].value;
  const completed = false;
  return task(title, description, priority, projectId, id, dueDate, completed);
}

/**
 * Add a new task to the project object and refresh the task list in the project component.
 * @param {project} projectObj Associated project object
 * @return {void}
 */
export function addTask(projectObj) {
  const newTask = getTaskFromInput(projectObj);
  projectObj.tasks.push(newTask);
  refreshTaskList(projectObj);
}

/**
 * Delete the underlying task object at taskIndex from the project object and refresh the task list in the project component.
 * @param {project} projectObj Project object
 * @param {Number} taskIndex Index of the task to be deleted
 */
export function deleteTask(projectObj, taskIndex) {
  const taskArr = projectObj.tasks;
  taskArr.splice(taskIndex, 1);
  taskArr.forEach((task, i) => {
    task.priority = i;
  });
  refreshTaskList(projectObj);
}

/**
 * Get project data from user-input form.
 * @return {void}
 */
function getProjectFromInput() {
  const form = document.getElementById("main-addProjectForm");
  const title = form.elements["title"].value;
  const description = form.elements["description"].value;
  const priority = pendingProjects.length;
  const tasks = [];
  const id = Date.now();
  const completed = false;
  return project(title, description, priority, tasks, id, completed);
}

/**
 * Add a new project to the pending project list and refresh the project list.
 * @return {void}
 */
export function addProject() {
  const newProject = getProjectFromInput();
  pendingProjects.push(newProject);
  refreshProjectList(pendingProjects);
}

/**
 * Delete the underlying project object at projectIndex from the pending project list and refresh the project list.
 * @param {Number} projectIndex Index of the project to be deleted
 */
export function deleteProject(projectIndex) {
  pendingProjects.splice(projectIndex, 1);
  pendingProjects.forEach((project, i) => {
    project.priority = i;
  });
  refreshProjectList(pendingProjects);
}

/**
 * Create favicon.
 * @return {void}
 */
function createFavicon() {
  let iconLink = document.querySelector("link[rel*='icon']");
  if (!iconLink) {
    iconLink = document.createElement("link");
    iconLink.rel = "icon";
    document.head.appendChild(iconLink);
  }
  iconLink.href = faviconLink;
}

/**
 * Purge the content of the active tab in main.
 * @return {void}
 */
function purgeActiveTab() {
  const main = document.getElementById("main");
  if (main.children.length > 1) {
    main.removeChild(main.lastChild);
  }
}

/**
 * Switch between tabs.
 * @return {void}
 */
function tabSwitch() {
  const main = document.getElementById("main");
  const tabs = document.querySelectorAll(".main-navbar-item");
  main.appendChild(renderPendingComponent(pendingProjects));
  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      purgeActiveTab();
      switch (tab.textContent) {
        case "Pending":
          main.appendChild(renderPendingComponent(pendingProjects));
          break;
        case "Archive":
          main.appendChild(renderArchiveComponent(completedProjects));
          break;
      }
    });
  });
}

/**
 * Start the app.
 * @return {void}
 */
function startApp() {
  createFavicon();
  pageLoad();
  tabSwitch();
}

startApp();
