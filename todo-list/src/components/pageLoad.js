/**
 * @fileoverview Initialize page load
 * @author Thinh Nguyen
 * @version 1.0.0
 */

"use strict";

/**
 * Create the header component.
 * @return {HTMLElement} Header element
 */
function header() {
  const header = document.createElement("header");
  const headerContainer = document.createElement("div");
  const headerTitle = document.createElement("h1");
  header.classList.add("header");
  headerContainer.classList.add("header-container");
  headerTitle.classList.add("header-title");
  headerTitle.textContent = "StackTasks";
  headerContainer.appendChild(headerTitle);
  header.appendChild(headerContainer);
  return header;
}

/**
 * Create the main component.
 * @return {HTMLElement} Main element
 */
function main() {
  const main = document.createElement("main");
  const mainNavbar = document.createElement("nav");
  const mainNavbarItems = ["Active", "Archive"];
  const projectList = document.createElement("ul");
  
  const dummyProjectCheckbox = document.createElement("input");
  const dummyProject = document.createElement("li");
  const dymmyProjectTitle = document.createElement("h2");
  const dummyProjectDeleteBtn = document.createElement("button");
  const sortTaskWrapper = document.createElement("div");
  const sortTaskByPriorityBtn = document.createElement("button");
  const sortTaskByDateBtn = document.createElement("button");
  const dymmyProjectTaskList = document.createElement("ul");

  const dymmyTask = document.createElement("li");
  const dummyTaskCheckbox = document.createElement("input");

  const dummyTaskTitle = document.createElement("span");
  const dummyTaskDate = document.createElement("span");
  const dummyTaskExpandBtn = document.createElement("button");

  const dummyTaskDeleteBtn = document.createElement("button");

  main.classList.add("main");
  main.id = "main";
  mainNavbar.classList.add("main-navbar");
  projectList.classList.add("main-projectList");

  dummyProjectCheckbox.classList.add("main-project-checkbox");
  dummyProjectCheckbox.type = "checkbox";
  dummyProject.classList.add("main-project");
  dymmyProjectTitle.classList.add("main-project-title");
  dummyProjectDeleteBtn.classList.add("main-project-deleteBtn");
  sortTaskWrapper.classList.add("main-project-sortTaskWrapper");
  sortTaskByPriorityBtn.classList.add("main-project-sortBtn");
  sortTaskByDateBtn.classList.add("main-project-sortBtn");
  dymmyProjectTaskList.classList.add("main-project-taskList");

  dymmyTask.classList.add("main-task");
  dummyTaskCheckbox.classList.add("main-task-checkbox");
  dummyTaskCheckbox.type = "checkbox";
  dummyTaskTitle.classList.add("main-task-title");
  dummyTaskDate.classList.add("main-task-date");
  dummyTaskExpandBtn.classList.add("main-task-expandBtn");
  dummyTaskDeleteBtn.classList.add("main-task-deleteBtn");

  mainNavbarItems.forEach((item) => {
    const mainNavbarItem = document.createElement("button");
    mainNavbarItem.classList.add("main-navbar-item");
    mainNavbarItem.textContent = item;
    mainNavbar.appendChild(mainNavbarItem);
  });
  main.appendChild(mainNavbar);
  
  dymmyProjectTitle.textContent = "Project 1";
  dummyProjectDeleteBtn.textContent = "Delete";
  sortTaskByPriorityBtn.textContent = "Sort by priority";
  sortTaskByDateBtn.textContent = "Sort by date";
  dummyTaskTitle.textContent = "Task 1";
  dummyTaskDate.textContent = "2020-01-01";
  dummyTaskExpandBtn.textContent = "Expand";
  dummyTaskDeleteBtn.textContent = "Delete";

  projectList.appendChild(dummyProject);
  dummyProject.appendChild(dummyProjectCheckbox);
  dummyProject.appendChild(dymmyProjectTitle);
  dummyProject.appendChild(dummyProjectDeleteBtn);
  dummyProject.appendChild(sortTaskWrapper);
  sortTaskWrapper.appendChild(sortTaskByPriorityBtn);
  sortTaskWrapper.appendChild(sortTaskByDateBtn);
  dummyProject.appendChild(dymmyProjectTaskList);
  dymmyProjectTaskList.appendChild(dymmyTask);
  dymmyTask.appendChild(dummyTaskCheckbox);
  dymmyTask.appendChild(dummyTaskTitle);
  dymmyTask.appendChild(dummyTaskDate);
  dymmyTask.appendChild(dummyTaskExpandBtn);
  dymmyTask.appendChild(dummyTaskDeleteBtn);

  main.appendChild(projectList);
  return main;
}

/**
 * Create the footer component.
 * @return {HTMLElement} Footer element
 */
function footer() {
  const footer = document.createElement("footer");
  const footerText = document.createElement("p");
  const footerLink = document.createElement("a");
  const footerIcon = document.createElement("i");
  footer.classList.add("footer");
  footerIcon.classList.add("fab", "fa-github");
  footerText.textContent =
    "Copyright © " + new Date().getFullYear() + " FelixNgFender";
  footerLink.href = "https://github.com/FelixNgFender";
  footerLink.target = "_blank";
  footerLink.rel = "noopener noreferrer";
  footerLink.appendChild(footerIcon);
  footer.appendChild(footerText);
  footer.appendChild(footerLink);
  return footer;
}

/**
 * Initialize page load.
 * @return {void}
 * @export
 */
export default function pageLoad() {
  const content = document.getElementById("content");
  content.appendChild(header());
  content.appendChild(main());
  content.appendChild(footer());
}