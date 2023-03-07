/**
 * @fileoverview Archive projects component
 * @author Thinh Nguyen
 * @version 1.0.0
 */

"use strict";
import projectListComponent from "../projectList/projectList";

/**
 * Create an archived projects component.
 * @param {Array} completedProjects Array of completed projects
 * @return {HTMLElement} Archived projects component
 */
export default function archive(completedProjects) {
  const wrapper = document.createElement("div");
  const projectList = projectListComponent(completedProjects);

  wrapper.classList.add("main-activeTab");

  wrapper.appendChild(projectList);

  return wrapper;
}
