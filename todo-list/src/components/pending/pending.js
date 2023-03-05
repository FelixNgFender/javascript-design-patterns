/**
 * @fileoverview Pending projects component
 * @author Thinh Nguyen
 * @version 1.0.0
 */

"use strict";
import projectListComponent from "../projectList/projectList";
import { addProjectBtn as addProjectBtnComponent } from "../addProjectPopup/addProjectPopup";

/**
 * Create a pending projects component and populate it with
 * the input array of pending projects.
 * @param {Array} pendingProjects Array of pending projects
 * @return {HTMLElement} Pending projects component
 */
export default function pending(pendingProjects) {
  const wrapper = document.createElement("div");
  const addProjectBtn = addProjectBtnComponent();
  const projectList = projectListComponent(pendingProjects);
  const projectItems = projectList.querySelectorAll(".main-project");

  projectItems.forEach((projectItem, index) => {
    const project = pendingProjects[index];
    const projectTitle = projectItem.querySelector(".main-project-title");
    const projectDescription = projectItem.querySelector(".main-project-description");

    projectTitle.textContent = project.title;
    projectDescription.textContent = project.description;
  });

  wrapper.classList.add("main-activeTab");
  
  wrapper.appendChild(addProjectBtn);
  wrapper.appendChild(projectList);
  
  return wrapper;
}
