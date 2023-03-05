/**
 * @fileoverview Todo list app
 * @author Thinh Nguyen
 * @version 1.0.0
 */

"use strict";

import pageLoad from "./components/pageLoad";
import createPendingComponent from "./components/pending/pending";
import createArchiveComponent from "./components/archive/archive";

import "./styles/styles.css";
import "./styles/styles-reset.css";

import faviconLink from "./assets/favicon.png";

/* DATA STRUCTURES */
const project = (title, description, priority, tasks, id, completed) => {
  return { title, description, priority, tasks, id, completed };
};

const task = (title, description, priority, project, projectId, dueDate, completed) => {
  return { title, description, priority, project, projectId, dueDate, completed };
};

const pendingProjects = [];

const completedProjects = [];

/**
 * Add a new task to the project
 * @param {project} projectObj Associated project object 
 */
export function addTask(projectObj) {
  const form = document.getElementById("main-addTaskForm" + projectObj.id);
  const newTask = getTaskFromInput(projectObj);
  projectObj.tasks.push(newTask);
  renderProjects();
  console.log(pendingProjects);
  form.reset();
}

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
  const form = document.getElementById("main-addProjectForm");
  const newProject = getProjectFromInput();
  pendingProjects.push(newProject);
  renderProjects();
  console.log(pendingProjects);
  form.reset();
}

/**
 * Remove a project from the pending project list and refresh the project list.
 * @param {HTMLElement} projectElement Project element to be removed
 */
export function removeProject(projectElement) {
  const projectPriority = projectElement.dataset.priority;
  pendingProjects.splice(projectPriority, 1);
  pendingProjects.forEach((project, index) => {
    project.priority = index;
  });
  renderProjects();
  console.log(pendingProjects);
}

/**
 * Render the project list.
 * @return {void}
 */
function renderProjects() {
  const main = document.getElementById("main");
  purgeActiveTab();
  main.appendChild(createPendingComponent(pendingProjects));
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
  main.appendChild(createPendingComponent(pendingProjects));
  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      purgeActiveTab();
      switch (tab.textContent) {
        case "Pending":
          main.appendChild(createPendingComponent(pendingProjects));
          break;
        case "Archive":
          main.appendChild(createArchiveComponent(completedProjects));
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
