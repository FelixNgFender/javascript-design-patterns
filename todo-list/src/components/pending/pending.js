/**
 * @fileoverview Pending projects component
 * @author Thinh Nguyen
 * @version 1.0.0
 */

"use strict";
import projectListComponent, {
  taskList as taskListComponent,
} from "../projectList/projectList";
import { addProjectBtn as addProjectBtnComponent } from "./addProjectPopup";

/**
 * Create a pending projects component.
 * @param {Array} pendingProjects Array of pending projects
 * @return {HTMLElement} Pending projects component
 */
export default function renderPendingComponent(pendingProjects) {
  const wrapper = document.createElement("div");
  const addProjectBtn = addProjectBtnComponent();
  const projectList = projectListComponent(pendingProjects);

  wrapper.classList.add("main-activeTab");

  wrapper.appendChild(addProjectBtn);
  wrapper.appendChild(projectList);

  return wrapper;
}

/**
 * Refresh the project list in the active tab component.
 * Only use after initialization of activeTab.
 * @param {Array} projectArr Array of projects
 * @param {HTMLElement} activeTab Active tab element
 * @return {void}
 * @export
 */
export function refreshProjectList(projectArr) {
  clearProjectList();
  const activeTab = document.querySelector(".main-activeTab");
  const newProjectList = projectListComponent(projectArr);
  activeTab.appendChild(newProjectList);
}

/**
 * Clear the project list in the active tab component.
 * @return {void}
 */
function clearProjectList() {
  const projectList = document.getElementById("main-projectList");
  if (!projectList) return;
  projectList.remove();
}

/**
 * Refresh the task list in the project component.
 * @param {project} projectObj Project object
 * @return {void}
 * @export
 */
export function refreshTaskList(projectObj) {
  clearTaskList(projectObj);
  const newTaskList = taskListComponent(projectObj);
  const projectElement = document.getElementById(
    "main-project-" + projectObj.id
  );
  projectElement.appendChild(newTaskList);
}

/**
 * Clear the task list in the project component.
 * @param {project} projectObj Project object
 * @return {void}
 */
function clearTaskList(projectObj) {
  const taskList = document.getElementById(
    "main-project-taskList-" + projectObj.id
  );
  if (!taskList) return;
  taskList.remove();
}
