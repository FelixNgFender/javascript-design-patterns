/**
 * @fileoverview Button component for adding a new project
 * @author Thinh Nguyen
 * @version 1.0.0
 */

"use strict";

import { addProject } from "../../index";

/**
 * Create an add project button component.
 * @return {HTMLElement} Add project button
 * @export
 */
export default function addProjectBtn() {
  const addProjectBtn = document.createElement("button");

  addProjectBtn.classList.add("main-addProjectBtn");
  addProjectBtn.textContent = "Add Project +";

  addProjectBtn.addEventListener("click", () => {
    if (document.getElementById("main-addProjectForm")) return;
    const projectList = document.getElementById("main-projectList");
    projectList.appendChild(addProjectPopup());
  });

  return addProjectBtn;
}

/**
 * Create an add project form component.
 * @return {HTMLElement} Add project form
 */
function addProjectPopup() {
  const addProjectForm = document.createElement("form");
  const projectTitle = document.createElement("input");
  const projectDescription = document.createElement("textarea");
  const confirmBtn = document.createElement("button");
  const cancelBtn = document.createElement("button");

  addProjectForm.classList.add("main-addProjectForm");
  addProjectForm.id = "main-addProjectForm";
  projectTitle.classList.add("main-addProjectForm-title");
  projectDescription.classList.add("main-addProjectForm-description");
  confirmBtn.classList.add("main-addProjectForm-confirm");
  cancelBtn.classList.add("main-addProjectForm-cancel");

  projectTitle.type = "text";
  projectTitle.placeholder = "Project Name";
  projectTitle.name = "title";
  projectTitle.required = true;
  projectDescription.placeholder = "Project Description";
  projectDescription.name = "description";
  confirmBtn.type = "submit";
  confirmBtn.textContent = "Confirm";
  cancelBtn.type = "button";
  cancelBtn.textContent = "Cancel";

  addProjectForm.onsubmit = (e) => {
    e.preventDefault();
    addProject();
    addProjectForm.remove();
  };
  cancelBtn.addEventListener("click", () => {
    addProjectForm.remove();
  });

  addProjectForm.appendChild(projectTitle);
  addProjectForm.appendChild(projectDescription);
  addProjectForm.appendChild(confirmBtn);
  addProjectForm.appendChild(cancelBtn);

  return addProjectForm;
}