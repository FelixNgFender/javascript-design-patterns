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

const pendingProjects = getPendingProjects();

const completedProjects = getCompletedProjects();

/**
 * Swap the position of two projects in the input array. Update the priority
 * of the projects in the array. Refresh the project list in the active tab component.
 * Because of the project's implementation, priority is the index of the project.
 * @param {Array} projectArr Array of projects.
 * @param {Number} priority1 Index of the first project
 * @param {Number} priority2 Index of the second project
 */
export function swapProject(projectArr, priority1, priority2) {
  const temp = projectArr[priority1];
  projectArr[priority1] = projectArr[priority2];
  projectArr[priority2] = temp;
  resetPriority(projectArr);
  refreshProjectList(projectArr);
}

/**
 * Remove the project from the pending projects array and add it to the
 * completed projects array. Update the priority of the projects in the
 * both projects array. Refresh the project list in the pending tab component.
 * Context-sensitive: only works when the display mode is "pending".
 * @param {project} projectObj Project object
 * @return {void}
 * @export
 */
export function completeProject(projectObj) {
  if (getDisplayMode() !== "pending") return;
  const projectIndex = pendingProjects.findIndex(
    (project) => project.id === projectObj.id
  );
  if (projectIndex === -1) return;
  pendingProjects.splice(projectIndex, 1);
  projectObj.completed = true;
  projectObj.tasks.forEach((task) => (task.completed = true));
  completedProjects.push(projectObj);
  resetPriority(pendingProjects);
  resetPriority(completedProjects);
  refreshProjectList(pendingProjects);
}

/**
 * Change the status of the task to completed. Refresh the task list in the
 * project component. Context-sensitive: only works when the display mode is "pending".
 * @param {project} projectObj Project object
 * @param {Number} taskIndex Index of the task in the project object
 * @return {void}
 * @export
 */
export function completeTask(projectObj, taskIndex) {
  if (getDisplayMode() !== "pending") return;
  const projectIndex = pendingProjects.findIndex(
    (project) => project.id === projectObj.id
  );
  if (projectIndex === -1) return;
  const taskObj = projectObj.tasks[taskIndex];
  taskObj.completed = true;
  refreshTaskList(projectObj);
}

/**
 * Sort the tasks in the input array by due date. Tasks with no due date
 * are sorted by their priorities after the tasks with due dates. Tasks with earlier
 * due dates are sorted to the top of the list.
 * @param {Array} tasks Array of task objects
 * @return {void}
 */
export function sortTaskByDate(tasks) {
  tasks.sort((a, b) => {
    if (a.dueDate === "" && b.dueDate === "") {
      return a.priority - b.priority;
    } else if (a.dueDate === "") {
      return 1;
    } else if (b.dueDate === "") {
      return -1;
    } else {
      const aDate = new Date(a.dueDate);
      const bDate = new Date(b.dueDate);
      return aDate - bDate;
    }
  });
}

/**
 * Sort the objects in the input array by their priorities.
 * @param {Array} arr Array of project or task objects
 * @return {void}
 */
export function sortArrByPriority(arr) {
  arr.sort((a, b) => {
    return a.priority - b.priority;
  });
}

/**
 * Reset the priority of the projects/tasks in the input array.
 * @param {Array} arr Array of project or task objects
 * @return {void}
 */
export function resetPriority(arr) {
  arr.forEach((element, i) => {
    element.priority = i;
  });
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
 * Add a new task to the project object and refresh the task list in the project component.
 * @param {project} projectObj Associated project object
 * @return {void}
 */
export function addTask(projectObj) {
  const newTask = getTaskFromInput(projectObj);
  projectObj.tasks.push(newTask);
  if (getSortMode(projectObj) === "date") {
    sortTaskByDate(projectObj.tasks);
  }
  refreshTaskList(projectObj);
}

/**
 * Get the sort mode of the project object.
 * @param {project} projectObj Project object
 * @return {String} Sort mode ("priority"/"date")
 */
function getSortMode(projectObj) {
  const sortBtns = document.getElementsByName("sortTask-" + projectObj.id);
  let sortMode = "";
  sortBtns.forEach((btn) => {
    if (btn.checked) {
      sortMode = btn.value;
    }
  });
  return sortMode;
}

/**
 * Delete the underlying task object at taskIndex from the project object and refresh the task list in the project component.
 * @param {project} projectObj Project object
 * @param {Number} taskIndex Index of the task to be deleted
 */
export function deleteTask(projectObj, taskIndex) {
  const taskArr = projectObj.tasks;
  taskArr.splice(taskIndex, 1);
  if (getSortMode(projectObj) === "priority") {
    resetPriority(taskArr);
  } else {
    sortArrByPriority(taskArr);
    resetPriority(taskArr);
    sortTaskByDate(taskArr);
  }
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
 * Assume in pending tab.
 * @return {void}
 */
export function addProject() {
  const newProject = getProjectFromInput();
  pendingProjects.push(newProject);
  refreshProjectList(pendingProjects);
}

/**
 * Delete the underlying project object at projectIndex and refresh the project list.
 * Context-sensitive: if in pending tab, delete from pendingProjects; if in archive tab, delete from completedProjects.
 * @param {Number} projectIndex Index of the project to be deleted
 */
export function deleteProject(projectIndex) {
  const displayMode = getDisplayMode();
  let workArr = [];
  if (displayMode === "pending") {
    workArr = pendingProjects;
  } else if (displayMode === "archive") {
    workArr = completedProjects;
  }
  workArr.splice(projectIndex, 1);
  resetPriority(workArr);
  refreshProjectList(workArr);
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
  const tabBtns = document.getElementsByName("main-navbar");
  main.appendChild(renderPendingComponent(pendingProjects));
  tabBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      purgeActiveTab();
      switch (getDisplayMode()) {
        case "pending":
          main.appendChild(renderPendingComponent(pendingProjects));
          break;
        case "archive":
          main.appendChild(renderArchiveComponent(completedProjects));
          break;
      }
    });
  });
}

/**
 * Get the display mode of the main component.
 * @return {String} Display mode ("pending"/"archive")
 */
function getDisplayMode() {
  const tabBtns = document.getElementsByName("main-navbar");
  let displayMode = "";
  tabBtns.forEach((btn) => {
    if (btn.checked) {
      displayMode = btn.value;
    }
  });
  return displayMode;
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
saveProjects();

// Use localStorage to store pending projects and completed projects

/**
 * Get the pending projects from localStorage.
 * @return {Array} Array of project objects
 */
function getPendingProjects() {
  let pendingProjects = [];
  if (localStorage.getItem("pendingProjects")) {
    pendingProjects = JSON.parse(localStorage.getItem("pendingProjects"));
  }
  return pendingProjects;
}

/**
 * Get the completed projects from localStorage.
 * @return {Array} Array of project objects
 */
function getCompletedProjects() {
  let completedProjects = [];
  if (localStorage.getItem("completedProjects")) {
    completedProjects = JSON.parse(localStorage.getItem("completedProjects"));
  }
  return completedProjects;
}

/**
 * Save the pending projects to localStorage.
 * @param {Array} pendingProjects Array of project objects
 * @return {void}
 */
function savePendingProjects(pendingProjects) {
  localStorage.setItem("pendingProjects", JSON.stringify(pendingProjects));
}

/**
 * Save the completed projects to localStorage.
 * @param {Array} completedProjects Array of project objects
 * @return {void}
 */
function saveCompletedProjects(completedProjects) {
  localStorage.setItem("completedProjects", JSON.stringify(completedProjects));
}

/**
 * Save pending projects and completed projects to localStorage when the page is closed.
 * @return {void}
 */
function saveProjects() {
  window.addEventListener("beforeunload", () => {
    savePendingProjects(pendingProjects);
    saveCompletedProjects(completedProjects);
  });
}