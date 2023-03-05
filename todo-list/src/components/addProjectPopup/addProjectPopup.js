/**
 * @fileoverview Components for adding a new project
 * @author Thinh Nguyen
 * @version 1.0.0
 */

"use strict";

import { addProject } from "../../index";

/**
 * Attach an popup to add a new project to the project list if there is not one.
 * @return {void}
 * @export
 */
export function addProjectPopup() {
  const projectList = document.getElementById("main-projectList");

  if (document.getElementById("main-addProjectForm")) {
    return;
  }

  const addProjectForm = document.createElement("form");
  const projectName = document.createElement("input");
  const projectDescription = document.createElement("textarea");

  const confirmBtn = document.createElement("button");
  const cancelBtn = document.createElement("button");

  addProjectForm.classList.add("main-addProjectForm");
  addProjectForm.id = "main-addProjectForm";
  projectName.classList.add("main-addProjectForm-projectName");
  projectDescription.classList.add("main-addProjectForm-projectDescription");
  confirmBtn.classList.add("main-addProjectForm-confirmBtn");
  cancelBtn.classList.add("main-addProjectForm-cancelBtn");

  projectName.type = "text";
  projectName.placeholder = "Project Name";
  projectName.name = "title";
  projectName.required = true;
  projectDescription.placeholder = "Project Description";
  projectDescription.name = "description";
  confirmBtn.type = "submit";
  confirmBtn.textContent = "Confirm";
  cancelBtn.type = "button";
  cancelBtn.textContent = "Cancel";

  cancelBtn.addEventListener("click", () => {
    addProjectForm.remove();
  });

  addProjectForm.onsubmit = (e) => {
    e.preventDefault();
    addProject();
    addProjectForm.remove();
  };

  addProjectForm.appendChild(projectName);
  addProjectForm.appendChild(projectDescription);
  addProjectForm.appendChild(confirmBtn);
  addProjectForm.appendChild(cancelBtn);

  projectList.appendChild(addProjectForm);
}

/**
 * Create an add project button component.
 * @return {HTMLElement} Add project button
 * @export
 */
export function addProjectBtn() {
  const addProjectBtn = document.createElement("button");
  addProjectBtn.classList.add("main-addProjectBtn");
  addProjectBtn.textContent = "Add Project +";

  addProjectBtn.addEventListener("click", () => {
    addProjectPopup();
  });

  return addProjectBtn;
}
