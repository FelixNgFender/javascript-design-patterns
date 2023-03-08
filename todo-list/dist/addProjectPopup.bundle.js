/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./todo-list/src/components/archive/archive.js":
/*!*****************************************************!*\
  !*** ./todo-list/src/components/archive/archive.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ archive)
/* harmony export */ });
/* harmony import */ var _projectList_projectList__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../projectList/projectList */ "./todo-list/src/components/projectList/projectList.js");
/**
 * @fileoverview Archive projects component
 * @author Thinh Nguyen
 * @version 1.0.0
 */





/**
 * Create an archived projects component.
 * @param {Array} completedProjects Array of completed projects
 * @return {HTMLElement} Archived projects component
 */
function archive(completedProjects) {
  const wrapper = document.createElement("div");
  const projectList = (0,_projectList_projectList__WEBPACK_IMPORTED_MODULE_0__["default"])(completedProjects);
  wrapper.classList.add("main-activeTab");
  wrapper.appendChild(projectList);
  return wrapper;
}

/***/ }),

/***/ "./todo-list/src/components/pageLoad.js":
/*!**********************************************!*\
  !*** ./todo-list/src/components/pageLoad.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ pageLoad)
/* harmony export */ });
/**
 * @fileoverview Initialize page load
 * @author Thinh Nguyen
 * @version 1.0.0
 */



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
  const mainNavbarItems = ["Pending", "Archive"];
  main.classList.add("main");
  main.id = "main";
  mainNavbar.classList.add("main-navbar");
  mainNavbarItems.forEach(item => {
    const mainNavbarLabel = document.createElement("label");
    const mainNavbarItem = document.createElement("input");
    mainNavbarLabel.classList.add("main-navbar-itemLabel");
    mainNavbarItem.classList.add("main-navbar-item");
    mainNavbarLabel.textContent = item;
    mainNavbarLabel.htmlFor = "main-navbar-" + item.toLowerCase();
    mainNavbarItem.type = "radio";
    mainNavbarItem.name = "main-navbar";
    mainNavbarItem.value = item.toLowerCase();
    mainNavbarItem.id = "main-navbar-" + item.toLowerCase();
    mainNavbarItem.checked = item === "Pending";
    mainNavbar.appendChild(mainNavbarItem);
    mainNavbar.appendChild(mainNavbarLabel);
  });
  main.appendChild(mainNavbar);
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
  footerText.textContent = "Copyright © " + new Date().getFullYear() + " FelixNgFender";
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
function pageLoad() {
  const content = document.getElementById("content");
  content.appendChild(header());
  content.appendChild(main());
  content.appendChild(footer());
}

/***/ }),

/***/ "./todo-list/src/components/pending/addProjectPopup.js":
/*!*************************************************************!*\
  !*** ./todo-list/src/components/pending/addProjectPopup.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ addProjectBtn)
/* harmony export */ });
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../index */ "./todo-list/src/index.js");
/**
 * @fileoverview Button component for adding a new project
 * @author Thinh Nguyen
 * @version 1.0.0
 */





/**
 * Create an add project button component.
 * @return {HTMLElement} Add project button
 * @export
 */
function addProjectBtn() {
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
  addProjectForm.onsubmit = e => {
    e.preventDefault();
    (0,_index__WEBPACK_IMPORTED_MODULE_0__.addProject)();
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

/***/ }),

/***/ "./todo-list/src/components/pending/pending.js":
/*!*****************************************************!*\
  !*** ./todo-list/src/components/pending/pending.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ renderPendingComponent),
/* harmony export */   "refreshProjectList": () => (/* binding */ refreshProjectList),
/* harmony export */   "refreshTaskList": () => (/* binding */ refreshTaskList)
/* harmony export */ });
/* harmony import */ var _projectList_projectList__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../projectList/projectList */ "./todo-list/src/components/projectList/projectList.js");
/* harmony import */ var _addProjectPopup__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./addProjectPopup */ "./todo-list/src/components/pending/addProjectPopup.js");
/**
 * @fileoverview Pending projects component
 * @author Thinh Nguyen
 * @version 1.0.0
 */






/**
 * Create a pending projects component.
 * @param {Array} pendingProjects Array of pending projects
 * @return {HTMLElement} Pending projects component
 */
function renderPendingComponent(pendingProjects) {
  const wrapper = document.createElement("div");
  const addProjectBtn = (0,_addProjectPopup__WEBPACK_IMPORTED_MODULE_1__["default"])();
  const projectList = (0,_projectList_projectList__WEBPACK_IMPORTED_MODULE_0__["default"])(pendingProjects);
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
function refreshProjectList(projectArr) {
  clearProjectList();
  const activeTab = document.querySelector(".main-activeTab");
  const newProjectList = (0,_projectList_projectList__WEBPACK_IMPORTED_MODULE_0__["default"])(projectArr);
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
function refreshTaskList(projectObj) {
  clearTaskList(projectObj);
  const newTaskList = (0,_projectList_projectList__WEBPACK_IMPORTED_MODULE_0__.taskList)(projectObj);
  const projectElement = document.getElementById("main-project-" + projectObj.id);
  projectElement.appendChild(newTaskList);
}

/**
 * Clear the task list in the project component.
 * @param {project} projectObj Project object
 * @return {void}
 */
function clearTaskList(projectObj) {
  const taskList = document.getElementById("main-project-taskList-" + projectObj.id);
  if (!taskList) return;
  taskList.remove();
}

/***/ }),

/***/ "./todo-list/src/components/projectList/projectList.js":
/*!*************************************************************!*\
  !*** ./todo-list/src/components/projectList/projectList.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ projectList),
/* harmony export */   "taskList": () => (/* binding */ taskList)
/* harmony export */ });
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../index */ "./todo-list/src/index.js");
/* harmony import */ var _delete_FILL0_wght400_GRAD0_opsz48_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./delete_FILL0_wght400_GRAD0_opsz48.svg */ "./todo-list/src/components/projectList/delete_FILL0_wght400_GRAD0_opsz48.svg");
/* harmony import */ var _expand_more_FILL0_wght400_GRAD0_opsz48_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./expand_more_FILL0_wght400_GRAD0_opsz48.svg */ "./todo-list/src/components/projectList/expand_more_FILL0_wght400_GRAD0_opsz48.svg");
/* harmony import */ var _expand_less_FILL0_wght400_GRAD0_opsz48_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./expand_less_FILL0_wght400_GRAD0_opsz48.svg */ "./todo-list/src/components/projectList/expand_less_FILL0_wght400_GRAD0_opsz48.svg");
/* harmony import */ var _pending_pending__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../pending/pending */ "./todo-list/src/components/pending/pending.js");
/**
 * @fileoverview Project list component
 * @author Thinh Nguyen
 * @version 1.0.0
 */



/* IMPORTS */







/* PROJECT LIST COMPONENT */
/**
 * Create a project list component with projects.
 * @param {Array} projectArr Array of projects
 * @return {HTMLElement} Project list element
 * @export
 */
function projectList(projectArr) {
  const projectList = document.createElement("ul");
  projectList.classList.add("main-projectList");
  projectList.id = "main-projectList";
  for (let i = 0; i < projectArr.length; i++) {
    const projectComponent = project(i, projectArr);
    projectList.appendChild(projectComponent);
  }
  return projectList;
}

/* PROJECT COMPONENT */
/**
 * Create a project component.
 * @param {number} index Index of project in project array
 * @param {Array} projectArr Associated project object array
 * @return {HTMLElement} Project element
 */
function project(index, projectArr) {
  const projectObj = projectArr[index];
  const project = document.createElement("li");
  const projectCheckbox = document.createElement("input");
  const projectTitle = document.createElement("h3");
  const projectDescription = document.createElement("p");
  const projectExpandBtn = document.createElement("button");
  const projectExpandBtnText = document.createElement("span");
  const projectDeleteBtn = document.createElement("button");
  const projectDeleteBtnText = document.createElement("span");
  const projectExpandIcon = document.createElement("img");
  const projectDeleteIcon = document.createElement("img");
  const sortTaskComponent = sortComponent(projectObj);
  const addTaskBtnComponent = addTaskBtn(projectObj);
  const projectTaskList = taskList(projectObj);
  project.classList.add("main-project");
  projectCheckbox.type = "checkbox";
  projectCheckbox.classList.add("main-project-checkbox");
  projectTitle.classList.add("main-project-title");
  projectDescription.classList.add("main-project-description");
  projectExpandBtn.classList.add("main-project-expandBtn");
  projectDeleteBtn.classList.add("main-project-deleteBtn");
  projectExpandIcon.classList.add("main-icons");
  projectDeleteIcon.classList.add("main-icons");
  if (!projectObj.completed) {
    project.style.backgroundImage = "linear-gradient(to right, " + getObjColor(index, projectArr) + ", transparent 15%)";
  }
  project.draggable = true;
  project.addEventListener("dragstart", e => {
    e.dataTransfer.setData("text/plain", projectObj.priority);
    project.style.opacity = 0.5;
  });
  project.addEventListener("dragover", e => {
    e.preventDefault();
  });
  project.addEventListener("drop", e => {
    const draggedProjectPriority = e.dataTransfer.getData("text/plain");
    (0,_index__WEBPACK_IMPORTED_MODULE_0__.swapProject)(projectArr, draggedProjectPriority, projectObj.priority);
  });
  project.addEventListener("dragend", e => {
    project.style.opacity = 1;
  });
  project.id = "main-project-" + projectObj.id;
  project.dataset.priority = projectObj.priority;
  projectCheckbox.checked = projectObj.completed;
  if (projectObj.completed) projectCheckbox.disabled = true;
  projectCheckbox.addEventListener("click", () => {
    (0,_index__WEBPACK_IMPORTED_MODULE_0__.completeProject)(projectObj);
  });
  projectTitle.textContent = projectObj.title;
  projectTitle.spellcheck = false;
  projectDescription.textContent = projectObj.description;
  projectDescription.spellcheck = false;
  projectExpandBtnText.textContent = "EXPAND";
  projectExpandBtn.addEventListener("click", () => {
    if (projectExpandBtnText.textContent === "EXPAND") {
      projectExpandBtnText.textContent = "COLLAPSE";
      projectExpandIcon.src = _expand_less_FILL0_wght400_GRAD0_opsz48_svg__WEBPACK_IMPORTED_MODULE_3__;
      projectDescription.classList.add("active");
    } else {
      projectExpandBtnText.textContent = "EXPAND";
      projectExpandIcon.src = _expand_more_FILL0_wght400_GRAD0_opsz48_svg__WEBPACK_IMPORTED_MODULE_2__;
      projectDescription.classList.remove("active");
    }
  });
  projectDeleteBtnText.textContent = "DELETE";
  projectDeleteBtn.addEventListener("click", () => {
    (0,_index__WEBPACK_IMPORTED_MODULE_0__.deleteProject)(index, projectArr);
  });
  projectExpandIcon.src = _expand_more_FILL0_wght400_GRAD0_opsz48_svg__WEBPACK_IMPORTED_MODULE_2__;
  projectDeleteIcon.src = _delete_FILL0_wght400_GRAD0_opsz48_svg__WEBPACK_IMPORTED_MODULE_1__;
  project.appendChild(projectCheckbox);
  project.appendChild(projectTitle);
  projectTitle.appendChild(projectDescription);
  project.appendChild(projectExpandBtn);
  project.appendChild(projectDeleteBtn);
  projectExpandBtn.appendChild(projectExpandBtnText);
  projectExpandBtn.appendChild(projectExpandIcon);
  projectDeleteBtn.appendChild(projectDeleteBtnText);
  projectDeleteBtn.appendChild(projectDeleteIcon);
  project.appendChild(sortTaskComponent);
  project.appendChild(addTaskBtnComponent);
  project.appendChild(projectTaskList);
  return project;
}

/* TASK LIST COMPONENT */
/**
 * Create a task list component associated with a project.
 * @param {project} projectObj Associated project object
 * @return {HTMLElement} Task list element
 * @export
 */
function taskList(projectObj) {
  const taskList = document.createElement("ul");
  const taskArr = projectObj.tasks;
  taskList.classList.add("main-project-taskList");
  taskList.id = "main-project-taskList-" + projectObj.id;
  for (let i = 0; i < taskArr.length; i++) {
    const taskComponent = task(projectObj, i);
    taskList.appendChild(taskComponent);
  }
  return taskList;
}

/* TASK COMPONENT */
/**
 * Create a task component from the associated project and the task index.
 * @param {project} projectObj Project object
 * @param {Number} taskIndex Index of the task in the project
 * @return {HTMLElement} Task component
 */
function task(projectObj, taskIndex) {
  const taskArr = projectObj.tasks;
  const taskObj = taskArr[taskIndex];
  const task = document.createElement("li");
  const taskCheckbox = document.createElement("input");
  const taskTitle = document.createElement("h4");
  const taskDescription = document.createElement("p");
  const taskDate = document.createElement("span");
  const taskExpandBtn = document.createElement("button");
  const taskExpandBtnText = document.createElement("span");
  const taskDeleteBtn = document.createElement("button");
  const taskDeleteBtnText = document.createElement("span");
  const taskExpandIcon = document.createElement("img");
  const taskDeleteIcon = document.createElement("img");
  task.classList.add("main-task");
  taskCheckbox.type = "checkbox";
  taskCheckbox.classList.add("main-task-checkbox");
  taskTitle.classList.add("main-task-title");
  taskDescription.classList.add("main-task-description");
  taskDate.classList.add("main-task-date");
  taskExpandBtn.classList.add("main-task-expandBtn");
  taskDeleteBtn.classList.add("main-task-deleteBtn");
  taskExpandIcon.classList.add("main-icons");
  taskDeleteIcon.classList.add("main-icons");
  if (!taskObj.completed) {
    task.style.backgroundImage = "linear-gradient(to right, " + getObjColor(taskIndex, taskArr) + ", transparent 10%)";
  }
  task.dataset.priority = taskObj.priority;
  taskTitle.spellcheck = false;
  taskDescription.spellcheck = false;
  taskExpandBtnText.textContent = "EXPAND";
  taskExpandBtn.addEventListener("click", () => {
    if (taskExpandBtnText.textContent === "EXPAND") {
      taskExpandBtnText.textContent = "COLLAPSE";
      taskExpandIcon.src = _expand_less_FILL0_wght400_GRAD0_opsz48_svg__WEBPACK_IMPORTED_MODULE_3__;
      taskDescription.classList.add("active");
    } else {
      taskExpandBtnText.textContent = "EXPAND";
      taskExpandIcon.src = _expand_more_FILL0_wght400_GRAD0_opsz48_svg__WEBPACK_IMPORTED_MODULE_2__;
      taskDescription.classList.remove("active");
    }
  });
  taskDeleteBtnText.textContent = "DELETE";
  taskDeleteBtn.addEventListener("click", () => {
    (0,_index__WEBPACK_IMPORTED_MODULE_0__.deleteTask)(projectObj, taskIndex);
  });
  taskExpandIcon.src = _expand_more_FILL0_wght400_GRAD0_opsz48_svg__WEBPACK_IMPORTED_MODULE_2__;
  taskDeleteIcon.src = _delete_FILL0_wght400_GRAD0_opsz48_svg__WEBPACK_IMPORTED_MODULE_1__;
  taskCheckbox.checked = taskObj.completed || projectObj.completed;
  if (projectObj.completed) taskCheckbox.disabled = true;
  taskCheckbox.addEventListener("click", () => {
    (0,_index__WEBPACK_IMPORTED_MODULE_0__.completeTask)(projectObj, taskIndex);
  });
  taskTitle.textContent = taskObj.title;
  taskDescription.textContent = taskObj.description;
  taskDate.textContent = taskObj.dueDate;
  task.appendChild(taskCheckbox);
  task.appendChild(taskTitle);
  taskTitle.appendChild(taskDescription);
  task.appendChild(taskDate);
  task.appendChild(taskExpandBtn);
  taskExpandBtn.appendChild(taskExpandBtnText);
  taskExpandBtn.appendChild(taskExpandIcon);
  task.appendChild(taskDeleteBtn);
  taskDeleteBtn.appendChild(taskDeleteBtnText);
  taskDeleteBtn.appendChild(taskDeleteIcon);
  return task;
}

/**
 * Create a popup component to add a new task associated with
 * the input project object.
 * @param {project} projectObj Associated project object
 * @return {HTMLElement} Add task element
 */
function addTaskPopup(projectObj) {
  const addTaskForm = document.createElement("form");
  const taskTitle = document.createElement("input");
  const taskDescription = document.createElement("textarea");
  const taskDate = document.createElement("input");
  const confirmBtn = document.createElement("button");
  const cancelBtn = document.createElement("button");
  addTaskForm.classList.add("main-addTaskForm");
  addTaskForm.id = "main-addTaskForm-" + projectObj.id;
  taskTitle.classList.add("main-addTaskForm-title");
  taskDescription.classList.add("main-addTaskForm-description");
  taskDate.classList.add("main-addTaskForm-date");
  confirmBtn.classList.add("main-addTaskForm-confirm");
  cancelBtn.classList.add("main-addTaskForm-cancel");
  taskTitle.type = "text";
  taskTitle.placeholder = "Task Name";
  taskTitle.name = "title";
  taskTitle.required = true;
  taskDescription.placeholder = "Task Description";
  taskDescription.name = "description";
  taskDate.type = "date";
  taskDate.name = "dueDate";
  confirmBtn.type = "submit";
  confirmBtn.textContent = "Confirm";
  cancelBtn.type = "button";
  cancelBtn.textContent = "Cancel";
  addTaskForm.onsubmit = e => {
    e.preventDefault();
    (0,_index__WEBPACK_IMPORTED_MODULE_0__.addTask)(projectObj);
    addTaskForm.remove();
  };
  cancelBtn.onclick = () => {
    addTaskForm.remove();
  };
  addTaskForm.appendChild(taskTitle);
  addTaskForm.appendChild(taskDescription);
  addTaskForm.appendChild(taskDate);
  addTaskForm.appendChild(confirmBtn);
  addTaskForm.appendChild(cancelBtn);
  return addTaskForm;
}

/**
 * Create an add task button component associated with a project.
 * @param {Array} projectObj Associated project object
 * @return {HTMLElement} Add task button
 */
function addTaskBtn(projectObj) {
  const addTaskBtn = document.createElement("button");
  addTaskBtn.classList.add("main-addTaskBtn");
  addTaskBtn.textContent = "Add Task +";
  if (projectObj.completed) addTaskBtn.disabled = true;
  addTaskBtn.addEventListener("click", () => {
    if (document.getElementById("main-addTaskForm-" + projectObj.id)) return;
    const taskList = document.getElementById("main-project-taskList-" + projectObj.id);
    taskList.appendChild(addTaskPopup(projectObj));
  });
  return addTaskBtn;
}

/* SORT TASK COMPONENT */
/**
 * Create a sort task component associated with a project.
 * @param {project} projectObj Associated project object
 * @return {HTMLElement} Sort task component
 */
function sortComponent(projectObj) {
  const sortTaskWrapper = document.createElement("div");
  const sortTaskByPriorityLabel = document.createElement("label");
  const sortTaskByPriorityBtn = document.createElement("input");
  const sortTaskByDateLabel = document.createElement("label");
  const sortTaskByDateBtn = document.createElement("input");
  sortTaskWrapper.classList.add("main-project-sortTaskWrapper");
  sortTaskByPriorityLabel.classList.add("main-project-sortLabel");
  sortTaskByPriorityBtn.classList.add("main-project-sortBtn");
  sortTaskByDateLabel.classList.add("main-project-sortLabel");
  sortTaskByDateBtn.classList.add("main-project-sortBtn");
  sortTaskByPriorityLabel.textContent = "Sort by priority";
  sortTaskByPriorityLabel.htmlFor = "sortPriority-" + projectObj.id;
  sortTaskByDateLabel.textContent = "Sort by date";
  sortTaskByDateLabel.htmlFor = "sortDate-" + projectObj.id;
  sortTaskByPriorityBtn.type = "radio";
  sortTaskByPriorityBtn.name = "sortTask-" + projectObj.id;
  sortTaskByPriorityBtn.id = "sortPriority-" + projectObj.id;
  sortTaskByPriorityBtn.value = "priority";
  sortTaskByPriorityBtn.checked = true;
  sortTaskByDateBtn.type = "radio";
  sortTaskByDateBtn.name = "sortTask-" + projectObj.id;
  sortTaskByDateBtn.id = "sortDate-" + projectObj.id;
  sortTaskByDateBtn.value = "date";
  sortTaskByPriorityBtn.addEventListener("click", () => {
    (0,_index__WEBPACK_IMPORTED_MODULE_0__.sortArrByPriority)(projectObj.tasks);
    (0,_pending_pending__WEBPACK_IMPORTED_MODULE_4__.refreshTaskList)(projectObj);
  });
  sortTaskByDateBtn.addEventListener("click", () => {
    (0,_index__WEBPACK_IMPORTED_MODULE_0__.sortTaskByDate)(projectObj.tasks);
    (0,_pending_pending__WEBPACK_IMPORTED_MODULE_4__.refreshTaskList)(projectObj);
  });
  sortTaskWrapper.appendChild(sortTaskByPriorityBtn);
  sortTaskWrapper.appendChild(sortTaskByPriorityLabel);
  sortTaskWrapper.appendChild(sortTaskByDateBtn);
  sortTaskWrapper.appendChild(sortTaskByDateLabel);
  return sortTaskWrapper;
}

/**
 * Get the color of a project or task object based on its priority.
 * @param {Number} index Index of object in array
 * @param {Array} objArr Project or task array
 * @return {String} Color string
 */
function getObjColor(index, objArr) {
  const obj = objArr[index];
  const objPriority = obj.priority;
  const normalizedPriority = objPriority / (objArr.length - 1);
  const red = Math.round(255 * (1 - normalizedPriority));
  const green = Math.round(255 * normalizedPriority);
  return "rgb(" + red + "," + green + ",0)";
}

/***/ }),

/***/ "./todo-list/src/index.js":
/*!********************************!*\
  !*** ./todo-list/src/index.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addProject": () => (/* binding */ addProject),
/* harmony export */   "addTask": () => (/* binding */ addTask),
/* harmony export */   "completeProject": () => (/* binding */ completeProject),
/* harmony export */   "completeTask": () => (/* binding */ completeTask),
/* harmony export */   "deleteProject": () => (/* binding */ deleteProject),
/* harmony export */   "deleteTask": () => (/* binding */ deleteTask),
/* harmony export */   "resetPriority": () => (/* binding */ resetPriority),
/* harmony export */   "sortArrByPriority": () => (/* binding */ sortArrByPriority),
/* harmony export */   "sortTaskByDate": () => (/* binding */ sortTaskByDate),
/* harmony export */   "swapProject": () => (/* binding */ swapProject)
/* harmony export */ });
/* harmony import */ var _components_pageLoad__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/pageLoad */ "./todo-list/src/components/pageLoad.js");
/* harmony import */ var _components_pending_pending__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/pending/pending */ "./todo-list/src/components/pending/pending.js");
/* harmony import */ var _components_archive_archive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/archive/archive */ "./todo-list/src/components/archive/archive.js");
/* harmony import */ var _styles_styles_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles/styles.css */ "./todo-list/src/styles/styles.css");
/* harmony import */ var _styles_styles_reset_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styles/styles-reset.css */ "./todo-list/src/styles/styles-reset.css");
/* harmony import */ var _assets_favicon_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./assets/favicon.png */ "./todo-list/src/assets/favicon.png");
/**
 * @fileoverview Todo list app
 * @author Thinh Nguyen
 * @version 1.0.0
 */



/* IMPORTS */







/* LOCAL STORAGE */
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

/* DATA STRUCTURES */
/**
 * Create a project object.
 * @param {String} title Title of the project
 * @param {String} description Description of the project
 * @param {Number} priority Priority of the project
 * @param {Array} tasks Array of tasks
 * @param {Number} id Id of the project
 * @param {Boolean} completed Status of the project
 * @return {Object} Project object
 */
const project = (title, description, priority, tasks, id, completed) => {
  return {
    title,
    description,
    priority,
    tasks,
    id,
    completed
  };
};

/**
 * Create a task object.
 * @param {String} title Title of the task
 * @param {String} description Description of the task
 * @param {Number} priority Priority of the task
 * @param {String} project Project of the task
 * @param {Date} dueDate Due date of the task
 * @param {Boolean} completed Status of the task
 * @return {Object} Task object
 */
const task = (title, description, priority, project, dueDate, completed) => {
  return {
    title,
    description,
    priority,
    project,
    dueDate,
    completed
  };
};
const pendingProjects = getPendingProjects();
const completedProjects = getCompletedProjects();

/* DATA MANIPULATION */
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
function addProject() {
  const newProject = getProjectFromInput();
  pendingProjects.push(newProject);
  (0,_components_pending_pending__WEBPACK_IMPORTED_MODULE_1__.refreshProjectList)(pendingProjects);
}

/**
 * Delete the underlying project object at projectIndex and refresh the project list.
 * Context-sensitive: if in pending tab, delete from pendingProjects; if in archive tab, delete from completedProjects.
 * @param {Number} projectIndex Index of the project to be deleted
 */
function deleteProject(projectIndex) {
  const displayMode = getDisplayMode();
  let workArr = [];
  if (displayMode === "pending") {
    workArr = pendingProjects;
  } else if (displayMode === "archive") {
    workArr = completedProjects;
  }
  workArr.splice(projectIndex, 1);
  resetPriority(workArr);
  (0,_components_pending_pending__WEBPACK_IMPORTED_MODULE_1__.refreshProjectList)(workArr);
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
function completeProject(projectObj) {
  if (getDisplayMode() !== "pending") return;
  const projectIndex = pendingProjects.findIndex(project => project.id === projectObj.id);
  if (projectIndex === -1) return;
  pendingProjects.splice(projectIndex, 1);
  projectObj.completed = true;
  projectObj.tasks.forEach(task => task.completed = true);
  completedProjects.push(projectObj);
  resetPriority(pendingProjects);
  resetPriority(completedProjects);
  (0,_components_pending_pending__WEBPACK_IMPORTED_MODULE_1__.refreshProjectList)(pendingProjects);
}

/**
 * Swap the position of two projects in the input array. Update the priority
 * of the projects in the array. Refresh the project list in the active tab component.
 * Because of the project's implementation, priority is the index of the project.
 * @param {Array} projectArr Array of projects.
 * @param {Number} priority1 Index of the first project
 * @param {Number} priority2 Index of the second project
 */
function swapProject(projectArr, priority1, priority2) {
  const temp = projectArr[priority1];
  projectArr[priority1] = projectArr[priority2];
  projectArr[priority2] = temp;
  resetPriority(projectArr);
  (0,_components_pending_pending__WEBPACK_IMPORTED_MODULE_1__.refreshProjectList)(projectArr);
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
  const id = Date.now();
  const dueDate = form.elements["dueDate"].value;
  const completed = false;
  return task(title, description, priority, id, dueDate, completed);
}

/**
 * Add a new task to the project object and refresh the task list in the project component.
 * @param {project} projectObj Associated project object
 * @return {void}
 */
function addTask(projectObj) {
  const newTask = getTaskFromInput(projectObj);
  projectObj.tasks.push(newTask);
  if (getSortMode(projectObj) === "date") {
    sortTaskByDate(projectObj.tasks);
  }
  (0,_components_pending_pending__WEBPACK_IMPORTED_MODULE_1__.refreshTaskList)(projectObj);
}

/**
 * Delete the underlying task object at taskIndex from the project object and refresh the task list in the project component.
 * @param {project} projectObj Project object
 * @param {Number} taskIndex Index of the task to be deleted
 */
function deleteTask(projectObj, taskIndex) {
  const taskArr = projectObj.tasks;
  taskArr.splice(taskIndex, 1);
  if (getSortMode(projectObj) === "priority") {
    resetPriority(taskArr);
  } else {
    sortArrByPriority(taskArr);
    resetPriority(taskArr);
    sortTaskByDate(taskArr);
  }
  (0,_components_pending_pending__WEBPACK_IMPORTED_MODULE_1__.refreshTaskList)(projectObj);
}

/**
 * Change the status of the task to completed. Refresh the task list in the
 * project component. Context-sensitive: only works when the display mode is "pending".
 * @param {project} projectObj Project object
 * @param {Number} taskIndex Index of the task in the project object
 * @return {void}
 * @export
 */
function completeTask(projectObj, taskIndex) {
  if (getDisplayMode() !== "pending") return;
  const projectIndex = pendingProjects.findIndex(project => project.id === projectObj.id);
  if (projectIndex === -1) return;
  const taskObj = projectObj.tasks[taskIndex];
  taskObj.completed = true;
  (0,_components_pending_pending__WEBPACK_IMPORTED_MODULE_1__.refreshTaskList)(projectObj);
}

/**
 * Sort the tasks in the input array by due date. Tasks with no due date
 * are sorted by their priorities after the tasks with due dates. Tasks with earlier
 * due dates are sorted to the top of the list.
 * @param {Array} tasks Array of task objects
 * @return {void}
 */
function sortTaskByDate(tasks) {
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
function sortArrByPriority(arr) {
  arr.sort((a, b) => {
    return a.priority - b.priority;
  });
}

/**
 * Reset the priority of the projects/tasks in the input array.
 * @param {Array} arr Array of project or task objects
 * @return {void}
 */
function resetPriority(arr) {
  arr.forEach((element, i) => {
    element.priority = i;
  });
}

/**
 * Get the sort mode of the project object.
 * @param {project} projectObj Project object
 * @return {String} Sort mode ("priority"/"date")
 */
function getSortMode(projectObj) {
  const sortBtns = document.getElementsByName("sortTask-" + projectObj.id);
  let sortMode = "";
  sortBtns.forEach(btn => {
    if (btn.checked) {
      sortMode = btn.value;
    }
  });
  return sortMode;
}

/* MAIN APP */
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
  iconLink.href = _assets_favicon_png__WEBPACK_IMPORTED_MODULE_5__;
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
 * Get the display mode of the main component.
 * @return {String} Display mode ("pending"/"archive")
 */
function getDisplayMode() {
  const tabBtns = document.getElementsByName("main-navbar");
  let displayMode = "";
  tabBtns.forEach(btn => {
    if (btn.checked) {
      displayMode = btn.value;
    }
  });
  return displayMode;
}

/**
 * Switch between tabs.
 * @return {void}
 */
function tabSwitch() {
  const main = document.getElementById("main");
  const tabBtns = document.getElementsByName("main-navbar");
  main.appendChild((0,_components_pending_pending__WEBPACK_IMPORTED_MODULE_1__["default"])(pendingProjects));
  tabBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      purgeActiveTab();
      switch (getDisplayMode()) {
        case "pending":
          main.appendChild((0,_components_pending_pending__WEBPACK_IMPORTED_MODULE_1__["default"])(pendingProjects));
          break;
        case "archive":
          main.appendChild((0,_components_archive_archive__WEBPACK_IMPORTED_MODULE_2__["default"])(completedProjects));
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
  (0,_components_pageLoad__WEBPACK_IMPORTED_MODULE_0__["default"])();
  tabSwitch();
  saveProjects();
}
startApp();

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./todo-list/src/styles/styles-reset.css":
/*!*************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./todo-list/src/styles/styles-reset.css ***!
  \*************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/* http://meyerweb.com/eric/tools/css/reset/ \n   v2.0 | 20110126\n   License: none (public domain)\n*/\n\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed, \nfigure, figcaption, footer, header, hgroup, \nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n\tmargin: 0;\n\tpadding: 0;\n\tborder: 0;\n\tfont-size: 100%;\n\tfont: inherit;\n\tvertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure, \nfooter, header, hgroup, menu, nav, section {\n\tdisplay: block;\n}\nbody {\n\tline-height: 1;\n}\nol, ul {\n\tlist-style: none;\n}\nblockquote, q {\n\tquotes: none;\n}\nblockquote:before, blockquote:after,\nq:before, q:after {\n\tcontent: '';\n\tcontent: none;\n}\ntable {\n\tborder-collapse: collapse;\n\tborder-spacing: 0;\n}", "",{"version":3,"sources":["webpack://./todo-list/src/styles/styles-reset.css"],"names":[],"mappings":"AAAA;;;CAGC;;AAED;;;;;;;;;;;;;CAaC,SAAS;CACT,UAAU;CACV,SAAS;CACT,eAAe;CACf,aAAa;CACb,wBAAwB;AACzB;AACA,gDAAgD;AAChD;;CAEC,cAAc;AACf;AACA;CACC,cAAc;AACf;AACA;CACC,gBAAgB;AACjB;AACA;CACC,YAAY;AACb;AACA;;CAEC,WAAW;CACX,aAAa;AACd;AACA;CACC,yBAAyB;CACzB,iBAAiB;AAClB","sourcesContent":["/* http://meyerweb.com/eric/tools/css/reset/ \n   v2.0 | 20110126\n   License: none (public domain)\n*/\n\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed, \nfigure, figcaption, footer, header, hgroup, \nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n\tmargin: 0;\n\tpadding: 0;\n\tborder: 0;\n\tfont-size: 100%;\n\tfont: inherit;\n\tvertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure, \nfooter, header, hgroup, menu, nav, section {\n\tdisplay: block;\n}\nbody {\n\tline-height: 1;\n}\nol, ul {\n\tlist-style: none;\n}\nblockquote, q {\n\tquotes: none;\n}\nblockquote:before, blockquote:after,\nq:before, q:after {\n\tcontent: '';\n\tcontent: none;\n}\ntable {\n\tborder-collapse: collapse;\n\tborder-spacing: 0;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./todo-list/src/styles/styles.css":
/*!*******************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./todo-list/src/styles/styles.css ***!
  \*******************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n  --passionate-red: 191, 5, 55;\n  --nostalgic-yellow: 242, 233, 107;\n  --soft-gray: 237, 196, 178;\n  --yello-range: 242, 174, 114;\n  --dark-black: 89, 2, 2;\n  --sharp-white: 255, 255, 255;\n  --vista-blue: 138, 166, 198;\n  --steel-blue: 50, 129, 178;\n  --yinmn-blue: 57, 85, 158;\n  --border-radius: 8px;\n  --spacing-xs: 5px;\n  --spacing-sm: 10px;\n  --spacing-md: 15px;\n  --spacing-lg: 20px;\n  --spacing-xl: 40px;\n  --container-width: 1200px;\n  --footer-height: 40px;\n  --btn-height: 50px;\n  --popup-height: 300px;\n  --checkbox-size: 20px;\n  --fn-btn-width: 110px;\n  --shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;\n}\n\n/* GLOBAL */\nhtml {\n  box-sizing: border-box;\n  height: 100%;\n}\n\n*,\n*:before,\n*:after {\n  box-sizing: inherit;\n}\n\nbody {\n  min-height: 100%;\n  display: grid;\n  grid-template-rows: auto 1fr auto;\n}\n\n/* HEADER */\n.header {\n  display: flex;\n  justify-content: center;\n  background-color: rgba(var(--nostalgic-yellow), 0.8);\n  box-shadow: var(--shadow);\n}\n\n.header-container {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 100%;\n  max-width: var(--container-width);\n  padding: var(--spacing-lg);\n}\n\n.header-title {\n  font-family: \"Roboto\", sans-serif;\n  color: rgba(var(--yinmn-blue), 1);\n  font-size: 1.5rem;\n}\n\n/* MAIN */\n.main {\n  font-family: \"Roboto\", sans-serif;\n  font-size: 1.1rem;\n  color: rgba(var(--dark-black), 1);\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  width: 100%;\n  max-width: var(--container-width);\n  margin: 0 auto;\n  background-color: rgba(var(--yello-range), 0.8);\n}\n\n.main-icons {\n  position: relative;\n  top: 0.125em;\n  height: 1em;\n  width: 1em;\n  margin-left: var(--spacing-xs);\n}\n\n/* MAIN - NAVBAR */\n.main-navbar {\n  width: 100%;\n  height: var(--btn-height);\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  box-shadow: var(--shadow);\n}\n\n.main-navbar-item {\n  appearance: none;\n  display: none;\n}\n\n.main-navbar-itemLabel {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n}\n\n.main-navbar-item:checked + label {\n  background-color: rgba(var(--nostalgic-yellow), 0.8);\n}\n\n/* MAIN - ACTIVE TAB */\n.main-activeTab {\n  width: 100%;\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n/* MAIN - ADD PROJECT */\n.main-addProjectBtn {\n  height: var(--btn-height);\n  width: 100%;\n  font-family: \"Roboto\", sans-serif;\n  color: rgba(var(--yinmn-blue, 1));\n  font-size: 1.1rem;\n  cursor: pointer;\n  border: none;\n  background-color: rgba(var(--nostalgic-yellow), 0.5);\n  transition: all 0.3s ease-in-out;\n}\n\n.main-addProjectBtn:hover,\n.main-addProjectBtn:active,\n.main-addProjectBtn:focus {\n  background-color: rgba(var(--nostalgic-yellow), 0.8);\n}\n\n.main-addProjectForm {\n  width: 100%;\n  height: var(--popup-height);\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  grid-template-rows: auto 1fr auto;\n  gap: var(--spacing-sm);\n  padding: var(--spacing-sm);\n  background-color: rgba(var(--nostalgic-yellow), 0.8);\n}\n\n.main-addProjectForm-title,\n.main-addProjectForm-description {\n  grid-column: 1 / -1;\n  border: none;\n  padding: var(--spacing-sm);\n  background-color: rgba(var(--soft-gray), 0.8);\n  font-family: \"Roboto\", sans-serif;\n  color: rgba(var(--dark-black), 1);\n  font-size: 1.1rem;\n  transition: all 0.3s ease-in-out;\n}\n\n.main-addProjectForm-title:focus,\n.main-addProjectForm-title:active,\n.main-addProjectForm-description:focus,\n.main-addProjectForm-description:active {\n  background-color: rgba(var(--nostalgic-yellow), 0.8);\n}\n\n.main-addProjectForm-description {\n  resize: none;\n}\n\n.main-addProjectForm-confirm,\n.main-addProjectForm-cancel {\n  height: var(--btn-height);\n  border: none;\n  font-family: \"Roboto\", sans-serif;\n  color: rgba(var(--dark-black), 1);\n  font-size: 1.1rem;\n  cursor: pointer;\n  transition: all 0.3s ease-in-out;\n}\n\n.main-addProjectForm-confirm {\n  background-color: rgba(var(--yello-range), 0.5);\n}\n\n.main-addProjectForm-confirm:hover,\n.main-addProjectForm-confirm:active,\n.main-addProjectForm-confirm:focus {\n  background-color: rgba(var(--nostalgic-yellow), 0.8);\n}\n\n.main-addProjectForm-cancel {\n  background-color: rgba(var(--soft-gray), 0.8);\n}\n\n.main-addProjectForm-cancel:hover,\n.main-addProjectForm-cancel:active,\n.main-addProjectForm-cancel:focus {\n  background-color: rgba(var(--soft-gray), 1);\n}\n\n/* MAIN - ADD TASK */\n.main-addTaskForm {\n  width: 100%;\n  height: var(--popup-height);\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  grid-template-rows: auto 1fr auto auto;\n  gap: var(--spacing-sm);\n  padding: var(--spacing-sm);\n  background-color: rgba(var(--nostalgic-yellow), 0.8);\n}\n\n.main-addTaskForm-title,\n.main-addTaskForm-description,\n.main-addTaskForm-date {\n  grid-column: 1 / -1;\n  border: none;\n  padding: var(--spacing-sm);\n  background-color: rgba(var(--soft-gray), 0.8);\n  font-family: \"Roboto\", sans-serif;\n  color: rgba(var(--dark-black), 1);\n  font-size: 1rem;\n  transition: all 0.3s ease-in-out;\n}\n\n.main-addTaskForm-title:focus,\n.main-addTaskForm-title:active,\n.main-addTaskForm-description:focus,\n.main-addTaskForm-description:active {\n  background-color: rgba(var(--nostalgic-yellow), 0.8);\n}\n\n.main-addTaskForm-description {\n  resize: none;\n}\n\n.main-addTaskForm-confirm,\n.main-addTaskForm-cancel {\n  height: var(--btn-height);\n  border: none;\n  font-family: \"Roboto\", sans-serif;\n  color: rgba(var(--dark-black), 1);\n  font-size: 1rem;\n  cursor: pointer;\n  transition: all 0.3s ease-in-out;\n}\n\n.main-addTaskForm-confirm {\n  background-color: rgba(var(--yello-range), 0.5);\n}\n\n.main-addTaskForm-confirm:hover,\n.main-addTaskForm-confirm:active,\n.main-addTaskForm-confirm:focus {\n  background-color: rgba(var(--nostalgic-yellow), 0.8);\n}\n\n.main-addTaskForm-cancel {\n  background-color: rgba(var(--soft-gray), 0.8);\n}\n\n.main-addTaskForm-cancel:hover,\n.main-addTaskForm-cancel:active,\n.main-addTaskForm-cancel:focus {\n  background-color: rgba(var(--soft-gray), 1);\n}\n\n/* MAIN - TODO LIST */\n.main-projectList {\n  width: 100%;\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  gap: var(--spacing-lg);\n  background-color: rgba(var(--yello-range), 0.8);\n  padding: var(--spacing-lg);\n}\n\n.main-project {\n  width: 100%;\n  background-color: rgba(var(--soft-gray), 0.8);\n  display: grid;\n  grid-template-columns: auto 1fr auto auto;\n  align-items: start;\n  gap: var(--spacing-sm);\n  padding: var(--spacing-sm);\n  cursor: grab;\n}\n\n.main-project-title,\n.main-task-title,\n.main-task-date {\n  margin-top: 0.15em;\n  overflow-wrap: break-word;\n  font-family: \"Roboto\", sans-serif;\n  color: rgba(var(--dark-black), 1);\n  font-size: 1rem;\n  transition: all 0.3s ease-in-out;\n}\n\n.main-project-sortTaskWrapper {\n  width: 100%;\n  grid-column: 1 / -1;\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: var(--spacing-sm);\n  height: var(--btn-height);\n}\n\n.main-project-sortBtn {\n  display: none;\n  appearance: none;\n}\n\n.main-project-sortLabel {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  cursor: pointer;\n  border: none;\n  background-color: rgba(var(--nostalgic-yellow), 0.5);\n  transition: 0.3s ease-in-out;\n}\n\n.main-project-sortBtn:checked + .main-project-sortLabel {\n  background-color: rgba(var(--nostalgic-yellow), 0.8);\n  transition: 0.3s;\n}\n\n.main-addTaskBtn {\n  grid-column: 2 / -1;\n  height: calc(var(--btn-height) / 2);\n  width: 100%;\n  font-family: \"Roboto\", sans-serif;\n  color: rgba(var(--yinmn-blue, 1));\n  font-size: 0.8rem;\n  cursor: pointer;\n  border: none;\n  background-color: rgba(var(--nostalgic-yellow), 0.5);\n  transition: all 0.3s ease-in-out;\n}\n\n.main-addTaskBtn:hover,\n.main-addTaskBtn:active,\n.main-addTaskBtn:focus {\n  background-color: rgba(var(--nostalgic-yellow), 0.8);\n}\n\n.main-project-taskList {\n  grid-column: 2 / -1;\n  display: flex;\n  flex-direction: column;\n  gap: var(--spacing-sm);\n}\n\n.main-task {\n  display: grid;\n  grid-template-columns: auto 1fr auto auto auto;\n  align-items: start;\n  gap: var(--spacing-sm);\n}\n\n.main-project-description,\n.main-task-description {\n  display: none;\n  font-size: 0.9rem;\n}\n\n.main-project-description.active,\n.main-task-description.active {\n  display: block;\n}\n\n.main-project button {\n  font-family: \"Roboto\", sans-serif;\n  cursor: pointer;\n  border: none;\n  background-color: rgba(var(--nostalgic-yellow), 0.5);\n  transition: all 0.3s ease-in-out;\n}\n\n.main-project button:hover,\n.main-project button:active,\n.main-project button:focus {\n  background-color: rgba(var(--nostalgic-yellow), 0.8);\n}\n\n.main-project-expandBtn,\n.main-project-deleteBtn,\n.main-task-expandBtn,\n.main-task-deleteBtn {\n  width: var(--fn-btn-width);\n}\n\n.main-project-checkbox,\n.main-task-checkbox {\n  margin: 0;\n  width: var(--checkbox-size);\n  height: var(--checkbox-size);\n  border: 1px solid rgba(var(--dark-black), 1);\n  border-radius: var(--border-radius);\n  accent-color: rgba(var(--passionate-red), 1);\n  transition: all 0.3s ease-in-out;\n  cursor: pointer;\n}\n\n/* FOOTER */\n.footer {\n  padding-bottom: var(--spacing-xs);\n  height: var(--footer-height);\n  background-color: rgba(var(--soft-gray), 0.8);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 10px;\n  width: 100%;\n  grid-row: 3 / 4;\n}\n\n.fa-github {\n  font-size: 20px;\n  margin-top: 4px;\n  color: black;\n  transition: transform 0.3s ease-in-out;\n}\n\n.fa-github:hover {\n  transform: rotate(360deg) scale(1.2);\n}\n\n/* MEDIA QUERIES */\n@media screen and (max-width: 500px) {\n  .main-project-expandBtn span,\n  .main-project-deleteBtn span,\n  .main-task-expandBtn span,\n  .main-task-deleteBtn span {\n    display: none;\n  }\n\n  .main-icons {\n    margin: 0;\n  }\n\n  .main-project-expandBtn,\n  .main-project-deleteBtn,\n  .main-task-expandBtn,\n  .main-task-deleteBtn {\n    width: auto;\n  }\n}\n", "",{"version":3,"sources":["webpack://./todo-list/src/styles/styles.css"],"names":[],"mappings":"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","sourcesContent":[":root {\n  --passionate-red: 191, 5, 55;\n  --nostalgic-yellow: 242, 233, 107;\n  --soft-gray: 237, 196, 178;\n  --yello-range: 242, 174, 114;\n  --dark-black: 89, 2, 2;\n  --sharp-white: 255, 255, 255;\n  --vista-blue: 138, 166, 198;\n  --steel-blue: 50, 129, 178;\n  --yinmn-blue: 57, 85, 158;\n  --border-radius: 8px;\n  --spacing-xs: 5px;\n  --spacing-sm: 10px;\n  --spacing-md: 15px;\n  --spacing-lg: 20px;\n  --spacing-xl: 40px;\n  --container-width: 1200px;\n  --footer-height: 40px;\n  --btn-height: 50px;\n  --popup-height: 300px;\n  --checkbox-size: 20px;\n  --fn-btn-width: 110px;\n  --shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;\n}\n\n/* GLOBAL */\nhtml {\n  box-sizing: border-box;\n  height: 100%;\n}\n\n*,\n*:before,\n*:after {\n  box-sizing: inherit;\n}\n\nbody {\n  min-height: 100%;\n  display: grid;\n  grid-template-rows: auto 1fr auto;\n}\n\n/* HEADER */\n.header {\n  display: flex;\n  justify-content: center;\n  background-color: rgba(var(--nostalgic-yellow), 0.8);\n  box-shadow: var(--shadow);\n}\n\n.header-container {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 100%;\n  max-width: var(--container-width);\n  padding: var(--spacing-lg);\n}\n\n.header-title {\n  font-family: \"Roboto\", sans-serif;\n  color: rgba(var(--yinmn-blue), 1);\n  font-size: 1.5rem;\n}\n\n/* MAIN */\n.main {\n  font-family: \"Roboto\", sans-serif;\n  font-size: 1.1rem;\n  color: rgba(var(--dark-black), 1);\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  width: 100%;\n  max-width: var(--container-width);\n  margin: 0 auto;\n  background-color: rgba(var(--yello-range), 0.8);\n}\n\n.main-icons {\n  position: relative;\n  top: 0.125em;\n  height: 1em;\n  width: 1em;\n  margin-left: var(--spacing-xs);\n}\n\n/* MAIN - NAVBAR */\n.main-navbar {\n  width: 100%;\n  height: var(--btn-height);\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  box-shadow: var(--shadow);\n}\n\n.main-navbar-item {\n  appearance: none;\n  display: none;\n}\n\n.main-navbar-itemLabel {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n}\n\n.main-navbar-item:checked + label {\n  background-color: rgba(var(--nostalgic-yellow), 0.8);\n}\n\n/* MAIN - ACTIVE TAB */\n.main-activeTab {\n  width: 100%;\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n/* MAIN - ADD PROJECT */\n.main-addProjectBtn {\n  height: var(--btn-height);\n  width: 100%;\n  font-family: \"Roboto\", sans-serif;\n  color: rgba(var(--yinmn-blue, 1));\n  font-size: 1.1rem;\n  cursor: pointer;\n  border: none;\n  background-color: rgba(var(--nostalgic-yellow), 0.5);\n  transition: all 0.3s ease-in-out;\n}\n\n.main-addProjectBtn:hover,\n.main-addProjectBtn:active,\n.main-addProjectBtn:focus {\n  background-color: rgba(var(--nostalgic-yellow), 0.8);\n}\n\n.main-addProjectForm {\n  width: 100%;\n  height: var(--popup-height);\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  grid-template-rows: auto 1fr auto;\n  gap: var(--spacing-sm);\n  padding: var(--spacing-sm);\n  background-color: rgba(var(--nostalgic-yellow), 0.8);\n}\n\n.main-addProjectForm-title,\n.main-addProjectForm-description {\n  grid-column: 1 / -1;\n  border: none;\n  padding: var(--spacing-sm);\n  background-color: rgba(var(--soft-gray), 0.8);\n  font-family: \"Roboto\", sans-serif;\n  color: rgba(var(--dark-black), 1);\n  font-size: 1.1rem;\n  transition: all 0.3s ease-in-out;\n}\n\n.main-addProjectForm-title:focus,\n.main-addProjectForm-title:active,\n.main-addProjectForm-description:focus,\n.main-addProjectForm-description:active {\n  background-color: rgba(var(--nostalgic-yellow), 0.8);\n}\n\n.main-addProjectForm-description {\n  resize: none;\n}\n\n.main-addProjectForm-confirm,\n.main-addProjectForm-cancel {\n  height: var(--btn-height);\n  border: none;\n  font-family: \"Roboto\", sans-serif;\n  color: rgba(var(--dark-black), 1);\n  font-size: 1.1rem;\n  cursor: pointer;\n  transition: all 0.3s ease-in-out;\n}\n\n.main-addProjectForm-confirm {\n  background-color: rgba(var(--yello-range), 0.5);\n}\n\n.main-addProjectForm-confirm:hover,\n.main-addProjectForm-confirm:active,\n.main-addProjectForm-confirm:focus {\n  background-color: rgba(var(--nostalgic-yellow), 0.8);\n}\n\n.main-addProjectForm-cancel {\n  background-color: rgba(var(--soft-gray), 0.8);\n}\n\n.main-addProjectForm-cancel:hover,\n.main-addProjectForm-cancel:active,\n.main-addProjectForm-cancel:focus {\n  background-color: rgba(var(--soft-gray), 1);\n}\n\n/* MAIN - ADD TASK */\n.main-addTaskForm {\n  width: 100%;\n  height: var(--popup-height);\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  grid-template-rows: auto 1fr auto auto;\n  gap: var(--spacing-sm);\n  padding: var(--spacing-sm);\n  background-color: rgba(var(--nostalgic-yellow), 0.8);\n}\n\n.main-addTaskForm-title,\n.main-addTaskForm-description,\n.main-addTaskForm-date {\n  grid-column: 1 / -1;\n  border: none;\n  padding: var(--spacing-sm);\n  background-color: rgba(var(--soft-gray), 0.8);\n  font-family: \"Roboto\", sans-serif;\n  color: rgba(var(--dark-black), 1);\n  font-size: 1rem;\n  transition: all 0.3s ease-in-out;\n}\n\n.main-addTaskForm-title:focus,\n.main-addTaskForm-title:active,\n.main-addTaskForm-description:focus,\n.main-addTaskForm-description:active {\n  background-color: rgba(var(--nostalgic-yellow), 0.8);\n}\n\n.main-addTaskForm-description {\n  resize: none;\n}\n\n.main-addTaskForm-confirm,\n.main-addTaskForm-cancel {\n  height: var(--btn-height);\n  border: none;\n  font-family: \"Roboto\", sans-serif;\n  color: rgba(var(--dark-black), 1);\n  font-size: 1rem;\n  cursor: pointer;\n  transition: all 0.3s ease-in-out;\n}\n\n.main-addTaskForm-confirm {\n  background-color: rgba(var(--yello-range), 0.5);\n}\n\n.main-addTaskForm-confirm:hover,\n.main-addTaskForm-confirm:active,\n.main-addTaskForm-confirm:focus {\n  background-color: rgba(var(--nostalgic-yellow), 0.8);\n}\n\n.main-addTaskForm-cancel {\n  background-color: rgba(var(--soft-gray), 0.8);\n}\n\n.main-addTaskForm-cancel:hover,\n.main-addTaskForm-cancel:active,\n.main-addTaskForm-cancel:focus {\n  background-color: rgba(var(--soft-gray), 1);\n}\n\n/* MAIN - TODO LIST */\n.main-projectList {\n  width: 100%;\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  gap: var(--spacing-lg);\n  background-color: rgba(var(--yello-range), 0.8);\n  padding: var(--spacing-lg);\n}\n\n.main-project {\n  width: 100%;\n  background-color: rgba(var(--soft-gray), 0.8);\n  display: grid;\n  grid-template-columns: auto 1fr auto auto;\n  align-items: start;\n  gap: var(--spacing-sm);\n  padding: var(--spacing-sm);\n  cursor: grab;\n}\n\n.main-project-title,\n.main-task-title,\n.main-task-date {\n  margin-top: 0.15em;\n  overflow-wrap: break-word;\n  font-family: \"Roboto\", sans-serif;\n  color: rgba(var(--dark-black), 1);\n  font-size: 1rem;\n  transition: all 0.3s ease-in-out;\n}\n\n.main-project-sortTaskWrapper {\n  width: 100%;\n  grid-column: 1 / -1;\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: var(--spacing-sm);\n  height: var(--btn-height);\n}\n\n.main-project-sortBtn {\n  display: none;\n  appearance: none;\n}\n\n.main-project-sortLabel {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  cursor: pointer;\n  border: none;\n  background-color: rgba(var(--nostalgic-yellow), 0.5);\n  transition: 0.3s ease-in-out;\n}\n\n.main-project-sortBtn:checked + .main-project-sortLabel {\n  background-color: rgba(var(--nostalgic-yellow), 0.8);\n  transition: 0.3s;\n}\n\n.main-addTaskBtn {\n  grid-column: 2 / -1;\n  height: calc(var(--btn-height) / 2);\n  width: 100%;\n  font-family: \"Roboto\", sans-serif;\n  color: rgba(var(--yinmn-blue, 1));\n  font-size: 0.8rem;\n  cursor: pointer;\n  border: none;\n  background-color: rgba(var(--nostalgic-yellow), 0.5);\n  transition: all 0.3s ease-in-out;\n}\n\n.main-addTaskBtn:hover,\n.main-addTaskBtn:active,\n.main-addTaskBtn:focus {\n  background-color: rgba(var(--nostalgic-yellow), 0.8);\n}\n\n.main-project-taskList {\n  grid-column: 2 / -1;\n  display: flex;\n  flex-direction: column;\n  gap: var(--spacing-sm);\n}\n\n.main-task {\n  display: grid;\n  grid-template-columns: auto 1fr auto auto auto;\n  align-items: start;\n  gap: var(--spacing-sm);\n}\n\n.main-project-description,\n.main-task-description {\n  display: none;\n  font-size: 0.9rem;\n}\n\n.main-project-description.active,\n.main-task-description.active {\n  display: block;\n}\n\n.main-project button {\n  font-family: \"Roboto\", sans-serif;\n  cursor: pointer;\n  border: none;\n  background-color: rgba(var(--nostalgic-yellow), 0.5);\n  transition: all 0.3s ease-in-out;\n}\n\n.main-project button:hover,\n.main-project button:active,\n.main-project button:focus {\n  background-color: rgba(var(--nostalgic-yellow), 0.8);\n}\n\n.main-project-expandBtn,\n.main-project-deleteBtn,\n.main-task-expandBtn,\n.main-task-deleteBtn {\n  width: var(--fn-btn-width);\n}\n\n.main-project-checkbox,\n.main-task-checkbox {\n  margin: 0;\n  width: var(--checkbox-size);\n  height: var(--checkbox-size);\n  border: 1px solid rgba(var(--dark-black), 1);\n  border-radius: var(--border-radius);\n  accent-color: rgba(var(--passionate-red), 1);\n  transition: all 0.3s ease-in-out;\n  cursor: pointer;\n}\n\n/* FOOTER */\n.footer {\n  padding-bottom: var(--spacing-xs);\n  height: var(--footer-height);\n  background-color: rgba(var(--soft-gray), 0.8);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 10px;\n  width: 100%;\n  grid-row: 3 / 4;\n}\n\n.fa-github {\n  font-size: 20px;\n  margin-top: 4px;\n  color: black;\n  transition: transform 0.3s ease-in-out;\n}\n\n.fa-github:hover {\n  transform: rotate(360deg) scale(1.2);\n}\n\n/* MEDIA QUERIES */\n@media screen and (max-width: 500px) {\n  .main-project-expandBtn span,\n  .main-project-deleteBtn span,\n  .main-task-expandBtn span,\n  .main-task-deleteBtn span {\n    display: none;\n  }\n\n  .main-icons {\n    margin: 0;\n  }\n\n  .main-project-expandBtn,\n  .main-project-deleteBtn,\n  .main-task-expandBtn,\n  .main-task-deleteBtn {\n    width: auto;\n  }\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./todo-list/src/styles/styles-reset.css":
/*!***********************************************!*\
  !*** ./todo-list/src/styles/styles-reset.css ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_reset_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!./styles-reset.css */ "./node_modules/css-loader/dist/cjs.js!./todo-list/src/styles/styles-reset.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_reset_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_reset_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_styles_reset_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_styles_reset_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./todo-list/src/styles/styles.css":
/*!*****************************************!*\
  !*** ./todo-list/src/styles/styles.css ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!./styles.css */ "./node_modules/css-loader/dist/cjs.js!./todo-list/src/styles/styles.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./todo-list/src/assets/favicon.png":
/*!******************************************!*\
  !*** ./todo-list/src/assets/favicon.png ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "99e3c90d21869578028f.png";

/***/ }),

/***/ "./todo-list/src/components/projectList/delete_FILL0_wght400_GRAD0_opsz48.svg":
/*!************************************************************************************!*\
  !*** ./todo-list/src/components/projectList/delete_FILL0_wght400_GRAD0_opsz48.svg ***!
  \************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "24315ab37634d58b5ce3.svg";

/***/ }),

/***/ "./todo-list/src/components/projectList/expand_less_FILL0_wght400_GRAD0_opsz48.svg":
/*!*****************************************************************************************!*\
  !*** ./todo-list/src/components/projectList/expand_less_FILL0_wght400_GRAD0_opsz48.svg ***!
  \*****************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "bf169074e2c1dab27b9a.svg";

/***/ }),

/***/ "./todo-list/src/components/projectList/expand_more_FILL0_wght400_GRAD0_opsz48.svg":
/*!*****************************************************************************************!*\
  !*** ./todo-list/src/components/projectList/expand_more_FILL0_wght400_GRAD0_opsz48.svg ***!
  \*****************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "a0d7c76b47bf772d4197.svg";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./todo-list/src/components/pending/addProjectPopup.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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WSxhQUFhLFdBQVcsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsWUFBWSxPQUFPLFlBQVksTUFBTSxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxPQUFPLEtBQUssWUFBWSxPQUFPLFlBQVksTUFBTSxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxZQUFZLE1BQU0sWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsT0FBTyxPQUFPLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLE1BQU0sWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sUUFBUSxZQUFZLE9BQU8sS0FBSyxVQUFVLE1BQU0sTUFBTSxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sT0FBTyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sT0FBTyxZQUFZLE9BQU8sWUFBWSxNQUFNLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLE9BQU8sWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLE9BQU8sUUFBUSxZQUFZLE9BQU8sS0FBSyxVQUFVLE1BQU0sTUFBTSxZQUFZLFdBQVcsWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sT0FBTyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sT0FBTyxZQUFZLE9BQU8sWUFBWSxNQUFNLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxNQUFNLE9BQU8sWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksT0FB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Q0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7OztBQ3JFYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDZkE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDZkE7Ozs7O1VFQUE7VUFDQTtVQUNBO1VBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qYXZhc2NyaXB0LWRlc2lnbi1wYXR0ZXJucy8uL3RvZG8tbGlzdC9zcmMvY29tcG9uZW50cy9hcmNoaXZlL2FyY2hpdmUuanMiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdC1kZXNpZ24tcGF0dGVybnMvLi90b2RvLWxpc3Qvc3JjL2NvbXBvbmVudHMvcGFnZUxvYWQuanMiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdC1kZXNpZ24tcGF0dGVybnMvLi90b2RvLWxpc3Qvc3JjL2NvbXBvbmVudHMvcGVuZGluZy9hZGRQcm9qZWN0UG9wdXAuanMiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdC1kZXNpZ24tcGF0dGVybnMvLi90b2RvLWxpc3Qvc3JjL2NvbXBvbmVudHMvcGVuZGluZy9wZW5kaW5nLmpzIiwid2VicGFjazovL2phdmFzY3JpcHQtZGVzaWduLXBhdHRlcm5zLy4vdG9kby1saXN0L3NyYy9jb21wb25lbnRzL3Byb2plY3RMaXN0L3Byb2plY3RMaXN0LmpzIiwid2VicGFjazovL2phdmFzY3JpcHQtZGVzaWduLXBhdHRlcm5zLy4vdG9kby1saXN0L3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LWRlc2lnbi1wYXR0ZXJucy8uL3RvZG8tbGlzdC9zcmMvc3R5bGVzL3N0eWxlcy1yZXNldC5jc3MiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdC1kZXNpZ24tcGF0dGVybnMvLi90b2RvLWxpc3Qvc3JjL3N0eWxlcy9zdHlsZXMuY3NzIiwid2VicGFjazovL2phdmFzY3JpcHQtZGVzaWduLXBhdHRlcm5zLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LWRlc2lnbi1wYXR0ZXJucy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL2phdmFzY3JpcHQtZGVzaWduLXBhdHRlcm5zLy4vdG9kby1saXN0L3NyYy9zdHlsZXMvc3R5bGVzLXJlc2V0LmNzcz9jNTkwIiwid2VicGFjazovL2phdmFzY3JpcHQtZGVzaWduLXBhdHRlcm5zLy4vdG9kby1saXN0L3NyYy9zdHlsZXMvc3R5bGVzLmNzcz82Zjc5Iiwid2VicGFjazovL2phdmFzY3JpcHQtZGVzaWduLXBhdHRlcm5zLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2phdmFzY3JpcHQtZGVzaWduLXBhdHRlcm5zLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LWRlc2lnbi1wYXR0ZXJucy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LWRlc2lnbi1wYXR0ZXJucy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LWRlc2lnbi1wYXR0ZXJucy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL2phdmFzY3JpcHQtZGVzaWduLXBhdHRlcm5zLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdC1kZXNpZ24tcGF0dGVybnMvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdC1kZXNpZ24tcGF0dGVybnMvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdC1kZXNpZ24tcGF0dGVybnMvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2phdmFzY3JpcHQtZGVzaWduLXBhdHRlcm5zL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdC1kZXNpZ24tcGF0dGVybnMvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LWRlc2lnbi1wYXR0ZXJucy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2phdmFzY3JpcHQtZGVzaWduLXBhdHRlcm5zL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL2phdmFzY3JpcHQtZGVzaWduLXBhdHRlcm5zL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LWRlc2lnbi1wYXR0ZXJucy93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL2phdmFzY3JpcHQtZGVzaWduLXBhdHRlcm5zL3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LWRlc2lnbi1wYXR0ZXJucy93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAZmlsZW92ZXJ2aWV3IEFyY2hpdmUgcHJvamVjdHMgY29tcG9uZW50XG4gKiBAYXV0aG9yIFRoaW5oIE5ndXllblxuICogQHZlcnNpb24gMS4wLjBcbiAqL1xuXG5cInVzZSBzdHJpY3RcIjtcbmltcG9ydCBwcm9qZWN0TGlzdENvbXBvbmVudCBmcm9tIFwiLi4vcHJvamVjdExpc3QvcHJvamVjdExpc3RcIjtcblxuLyoqXG4gKiBDcmVhdGUgYW4gYXJjaGl2ZWQgcHJvamVjdHMgY29tcG9uZW50LlxuICogQHBhcmFtIHtBcnJheX0gY29tcGxldGVkUHJvamVjdHMgQXJyYXkgb2YgY29tcGxldGVkIHByb2plY3RzXG4gKiBAcmV0dXJuIHtIVE1MRWxlbWVudH0gQXJjaGl2ZWQgcHJvamVjdHMgY29tcG9uZW50XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGFyY2hpdmUoY29tcGxldGVkUHJvamVjdHMpIHtcbiAgY29uc3Qgd3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IHByb2plY3RMaXN0ID0gcHJvamVjdExpc3RDb21wb25lbnQoY29tcGxldGVkUHJvamVjdHMpO1xuXG4gIHdyYXBwZXIuY2xhc3NMaXN0LmFkZChcIm1haW4tYWN0aXZlVGFiXCIpO1xuXG4gIHdyYXBwZXIuYXBwZW5kQ2hpbGQocHJvamVjdExpc3QpO1xuXG4gIHJldHVybiB3cmFwcGVyO1xufVxuIiwiLyoqXG4gKiBAZmlsZW92ZXJ2aWV3IEluaXRpYWxpemUgcGFnZSBsb2FkXG4gKiBAYXV0aG9yIFRoaW5oIE5ndXllblxuICogQHZlcnNpb24gMS4wLjBcbiAqL1xuXG5cInVzZSBzdHJpY3RcIjtcblxuLyoqXG4gKiBDcmVhdGUgdGhlIGhlYWRlciBjb21wb25lbnQuXG4gKiBAcmV0dXJuIHtIVE1MRWxlbWVudH0gSGVhZGVyIGVsZW1lbnRcbiAqL1xuZnVuY3Rpb24gaGVhZGVyKCkge1xuICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaGVhZGVyXCIpO1xuICBjb25zdCBoZWFkZXJDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBoZWFkZXJUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcbiAgaGVhZGVyLmNsYXNzTGlzdC5hZGQoXCJoZWFkZXJcIik7XG4gIGhlYWRlckNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiaGVhZGVyLWNvbnRhaW5lclwiKTtcbiAgaGVhZGVyVGl0bGUuY2xhc3NMaXN0LmFkZChcImhlYWRlci10aXRsZVwiKTtcbiAgaGVhZGVyVGl0bGUudGV4dENvbnRlbnQgPSBcIlN0YWNrVGFza3NcIjtcbiAgaGVhZGVyQ29udGFpbmVyLmFwcGVuZENoaWxkKGhlYWRlclRpdGxlKTtcbiAgaGVhZGVyLmFwcGVuZENoaWxkKGhlYWRlckNvbnRhaW5lcik7XG4gIHJldHVybiBoZWFkZXI7XG59XG5cbi8qKlxuICogQ3JlYXRlIHRoZSBtYWluIGNvbXBvbmVudC5cbiAqIEByZXR1cm4ge0hUTUxFbGVtZW50fSBNYWluIGVsZW1lbnRcbiAqL1xuZnVuY3Rpb24gbWFpbigpIHtcbiAgY29uc3QgbWFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJtYWluXCIpO1xuICBjb25zdCBtYWluTmF2YmFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm5hdlwiKTtcbiAgY29uc3QgbWFpbk5hdmJhckl0ZW1zID0gW1wiUGVuZGluZ1wiLCBcIkFyY2hpdmVcIl07XG4gIG1haW4uY2xhc3NMaXN0LmFkZChcIm1haW5cIik7XG4gIG1haW4uaWQgPSBcIm1haW5cIjtcbiAgbWFpbk5hdmJhci5jbGFzc0xpc3QuYWRkKFwibWFpbi1uYXZiYXJcIik7XG4gIG1haW5OYXZiYXJJdGVtcy5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgY29uc3QgbWFpbk5hdmJhckxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICAgIGNvbnN0IG1haW5OYXZiYXJJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgIG1haW5OYXZiYXJMYWJlbC5jbGFzc0xpc3QuYWRkKFwibWFpbi1uYXZiYXItaXRlbUxhYmVsXCIpO1xuICAgIG1haW5OYXZiYXJJdGVtLmNsYXNzTGlzdC5hZGQoXCJtYWluLW5hdmJhci1pdGVtXCIpO1xuICAgIG1haW5OYXZiYXJMYWJlbC50ZXh0Q29udGVudCA9IGl0ZW07XG4gICAgbWFpbk5hdmJhckxhYmVsLmh0bWxGb3IgPSBcIm1haW4tbmF2YmFyLVwiICsgaXRlbS50b0xvd2VyQ2FzZSgpO1xuICAgIG1haW5OYXZiYXJJdGVtLnR5cGUgPSBcInJhZGlvXCI7XG4gICAgbWFpbk5hdmJhckl0ZW0ubmFtZSA9IFwibWFpbi1uYXZiYXJcIjtcbiAgICBtYWluTmF2YmFySXRlbS52YWx1ZSA9IGl0ZW0udG9Mb3dlckNhc2UoKTtcbiAgICBtYWluTmF2YmFySXRlbS5pZCA9IFwibWFpbi1uYXZiYXItXCIgKyBpdGVtLnRvTG93ZXJDYXNlKCk7XG4gICAgbWFpbk5hdmJhckl0ZW0uY2hlY2tlZCA9IGl0ZW0gPT09IFwiUGVuZGluZ1wiO1xuICAgIG1haW5OYXZiYXIuYXBwZW5kQ2hpbGQobWFpbk5hdmJhckl0ZW0pO1xuICAgIG1haW5OYXZiYXIuYXBwZW5kQ2hpbGQobWFpbk5hdmJhckxhYmVsKTtcbiAgfSk7XG4gIG1haW4uYXBwZW5kQ2hpbGQobWFpbk5hdmJhcik7XG4gIHJldHVybiBtYWluO1xufVxuXG4vKipcbiAqIENyZWF0ZSB0aGUgZm9vdGVyIGNvbXBvbmVudC5cbiAqIEByZXR1cm4ge0hUTUxFbGVtZW50fSBGb290ZXIgZWxlbWVudFxuICovXG5mdW5jdGlvbiBmb290ZXIoKSB7XG4gIGNvbnN0IGZvb3RlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmb290ZXJcIik7XG4gIGNvbnN0IGZvb3RlclRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgY29uc3QgZm9vdGVyTGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xuICBjb25zdCBmb290ZXJJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlcIik7XG4gIGZvb3Rlci5jbGFzc0xpc3QuYWRkKFwiZm9vdGVyXCIpO1xuICBmb290ZXJJY29uLmNsYXNzTGlzdC5hZGQoXCJmYWJcIiwgXCJmYS1naXRodWJcIik7XG4gIGZvb3RlclRleHQudGV4dENvbnRlbnQgPVxuICAgIFwiQ29weXJpZ2h0IMKpIFwiICsgbmV3IERhdGUoKS5nZXRGdWxsWWVhcigpICsgXCIgRmVsaXhOZ0ZlbmRlclwiO1xuICBmb290ZXJMaW5rLmhyZWYgPSBcImh0dHBzOi8vZ2l0aHViLmNvbS9GZWxpeE5nRmVuZGVyXCI7XG4gIGZvb3RlckxpbmsudGFyZ2V0ID0gXCJfYmxhbmtcIjtcbiAgZm9vdGVyTGluay5yZWwgPSBcIm5vb3BlbmVyIG5vcmVmZXJyZXJcIjtcbiAgZm9vdGVyTGluay5hcHBlbmRDaGlsZChmb290ZXJJY29uKTtcbiAgZm9vdGVyLmFwcGVuZENoaWxkKGZvb3RlclRleHQpO1xuICBmb290ZXIuYXBwZW5kQ2hpbGQoZm9vdGVyTGluayk7XG4gIHJldHVybiBmb290ZXI7XG59XG5cbi8qKlxuICogSW5pdGlhbGl6ZSBwYWdlIGxvYWQuXG4gKiBAcmV0dXJuIHt2b2lkfVxuICogQGV4cG9ydFxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBwYWdlTG9hZCgpIHtcbiAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udGVudFwiKTtcbiAgY29udGVudC5hcHBlbmRDaGlsZChoZWFkZXIoKSk7XG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQobWFpbigpKTtcbiAgY29udGVudC5hcHBlbmRDaGlsZChmb290ZXIoKSk7XG59XG4iLCIvKipcbiAqIEBmaWxlb3ZlcnZpZXcgQnV0dG9uIGNvbXBvbmVudCBmb3IgYWRkaW5nIGEgbmV3IHByb2plY3RcbiAqIEBhdXRob3IgVGhpbmggTmd1eWVuXG4gKiBAdmVyc2lvbiAxLjAuMFxuICovXG5cblwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBhZGRQcm9qZWN0IH0gZnJvbSBcIi4uLy4uL2luZGV4XCI7XG5cbi8qKlxuICogQ3JlYXRlIGFuIGFkZCBwcm9qZWN0IGJ1dHRvbiBjb21wb25lbnQuXG4gKiBAcmV0dXJuIHtIVE1MRWxlbWVudH0gQWRkIHByb2plY3QgYnV0dG9uXG4gKiBAZXhwb3J0XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGFkZFByb2plY3RCdG4oKSB7XG4gIGNvbnN0IGFkZFByb2plY3RCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuXG4gIGFkZFByb2plY3RCdG4uY2xhc3NMaXN0LmFkZChcIm1haW4tYWRkUHJvamVjdEJ0blwiKTtcbiAgYWRkUHJvamVjdEJ0bi50ZXh0Q29udGVudCA9IFwiQWRkIFByb2plY3QgK1wiO1xuXG4gIGFkZFByb2plY3RCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBpZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtYWluLWFkZFByb2plY3RGb3JtXCIpKSByZXR1cm47XG4gICAgY29uc3QgcHJvamVjdExpc3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1haW4tcHJvamVjdExpc3RcIik7XG4gICAgcHJvamVjdExpc3QuYXBwZW5kQ2hpbGQoYWRkUHJvamVjdFBvcHVwKCkpO1xuICB9KTtcblxuICByZXR1cm4gYWRkUHJvamVjdEJ0bjtcbn1cblxuLyoqXG4gKiBDcmVhdGUgYW4gYWRkIHByb2plY3QgZm9ybSBjb21wb25lbnQuXG4gKiBAcmV0dXJuIHtIVE1MRWxlbWVudH0gQWRkIHByb2plY3QgZm9ybVxuICovXG5mdW5jdGlvbiBhZGRQcm9qZWN0UG9wdXAoKSB7XG4gIGNvbnN0IGFkZFByb2plY3RGb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZvcm1cIik7XG4gIGNvbnN0IHByb2plY3RUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgY29uc3QgcHJvamVjdERlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRleHRhcmVhXCIpO1xuICBjb25zdCBjb25maXJtQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgY29uc3QgY2FuY2VsQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcblxuICBhZGRQcm9qZWN0Rm9ybS5jbGFzc0xpc3QuYWRkKFwibWFpbi1hZGRQcm9qZWN0Rm9ybVwiKTtcbiAgYWRkUHJvamVjdEZvcm0uaWQgPSBcIm1haW4tYWRkUHJvamVjdEZvcm1cIjtcbiAgcHJvamVjdFRpdGxlLmNsYXNzTGlzdC5hZGQoXCJtYWluLWFkZFByb2plY3RGb3JtLXRpdGxlXCIpO1xuICBwcm9qZWN0RGVzY3JpcHRpb24uY2xhc3NMaXN0LmFkZChcIm1haW4tYWRkUHJvamVjdEZvcm0tZGVzY3JpcHRpb25cIik7XG4gIGNvbmZpcm1CdG4uY2xhc3NMaXN0LmFkZChcIm1haW4tYWRkUHJvamVjdEZvcm0tY29uZmlybVwiKTtcbiAgY2FuY2VsQnRuLmNsYXNzTGlzdC5hZGQoXCJtYWluLWFkZFByb2plY3RGb3JtLWNhbmNlbFwiKTtcblxuICBwcm9qZWN0VGl0bGUudHlwZSA9IFwidGV4dFwiO1xuICBwcm9qZWN0VGl0bGUucGxhY2Vob2xkZXIgPSBcIlByb2plY3QgTmFtZVwiO1xuICBwcm9qZWN0VGl0bGUubmFtZSA9IFwidGl0bGVcIjtcbiAgcHJvamVjdFRpdGxlLnJlcXVpcmVkID0gdHJ1ZTtcbiAgcHJvamVjdERlc2NyaXB0aW9uLnBsYWNlaG9sZGVyID0gXCJQcm9qZWN0IERlc2NyaXB0aW9uXCI7XG4gIHByb2plY3REZXNjcmlwdGlvbi5uYW1lID0gXCJkZXNjcmlwdGlvblwiO1xuICBjb25maXJtQnRuLnR5cGUgPSBcInN1Ym1pdFwiO1xuICBjb25maXJtQnRuLnRleHRDb250ZW50ID0gXCJDb25maXJtXCI7XG4gIGNhbmNlbEJ0bi50eXBlID0gXCJidXR0b25cIjtcbiAgY2FuY2VsQnRuLnRleHRDb250ZW50ID0gXCJDYW5jZWxcIjtcblxuICBhZGRQcm9qZWN0Rm9ybS5vbnN1Ym1pdCA9IChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGFkZFByb2plY3QoKTtcbiAgICBhZGRQcm9qZWN0Rm9ybS5yZW1vdmUoKTtcbiAgfTtcbiAgY2FuY2VsQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgYWRkUHJvamVjdEZvcm0ucmVtb3ZlKCk7XG4gIH0pO1xuXG4gIGFkZFByb2plY3RGb3JtLmFwcGVuZENoaWxkKHByb2plY3RUaXRsZSk7XG4gIGFkZFByb2plY3RGb3JtLmFwcGVuZENoaWxkKHByb2plY3REZXNjcmlwdGlvbik7XG4gIGFkZFByb2plY3RGb3JtLmFwcGVuZENoaWxkKGNvbmZpcm1CdG4pO1xuICBhZGRQcm9qZWN0Rm9ybS5hcHBlbmRDaGlsZChjYW5jZWxCdG4pO1xuXG4gIHJldHVybiBhZGRQcm9qZWN0Rm9ybTtcbn0iLCIvKipcbiAqIEBmaWxlb3ZlcnZpZXcgUGVuZGluZyBwcm9qZWN0cyBjb21wb25lbnRcbiAqIEBhdXRob3IgVGhpbmggTmd1eWVuXG4gKiBAdmVyc2lvbiAxLjAuMFxuICovXG5cblwidXNlIHN0cmljdFwiO1xuaW1wb3J0IHByb2plY3RMaXN0Q29tcG9uZW50LCB7XG4gIHRhc2tMaXN0IGFzIHRhc2tMaXN0Q29tcG9uZW50LFxufSBmcm9tIFwiLi4vcHJvamVjdExpc3QvcHJvamVjdExpc3RcIjtcbmltcG9ydCBhZGRQcm9qZWN0QnRuQ29tcG9uZW50IGZyb20gXCIuL2FkZFByb2plY3RQb3B1cFwiO1xuXG4vKipcbiAqIENyZWF0ZSBhIHBlbmRpbmcgcHJvamVjdHMgY29tcG9uZW50LlxuICogQHBhcmFtIHtBcnJheX0gcGVuZGluZ1Byb2plY3RzIEFycmF5IG9mIHBlbmRpbmcgcHJvamVjdHNcbiAqIEByZXR1cm4ge0hUTUxFbGVtZW50fSBQZW5kaW5nIHByb2plY3RzIGNvbXBvbmVudFxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZW5kZXJQZW5kaW5nQ29tcG9uZW50KHBlbmRpbmdQcm9qZWN0cykge1xuICBjb25zdCB3cmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgYWRkUHJvamVjdEJ0biA9IGFkZFByb2plY3RCdG5Db21wb25lbnQoKTtcbiAgY29uc3QgcHJvamVjdExpc3QgPSBwcm9qZWN0TGlzdENvbXBvbmVudChwZW5kaW5nUHJvamVjdHMpO1xuXG4gIHdyYXBwZXIuY2xhc3NMaXN0LmFkZChcIm1haW4tYWN0aXZlVGFiXCIpO1xuXG4gIHdyYXBwZXIuYXBwZW5kQ2hpbGQoYWRkUHJvamVjdEJ0bik7XG4gIHdyYXBwZXIuYXBwZW5kQ2hpbGQocHJvamVjdExpc3QpO1xuXG4gIHJldHVybiB3cmFwcGVyO1xufVxuXG4vKipcbiAqIFJlZnJlc2ggdGhlIHByb2plY3QgbGlzdCBpbiB0aGUgYWN0aXZlIHRhYiBjb21wb25lbnQuXG4gKiBPbmx5IHVzZSBhZnRlciBpbml0aWFsaXphdGlvbiBvZiBhY3RpdmVUYWIuXG4gKiBAcGFyYW0ge0FycmF5fSBwcm9qZWN0QXJyIEFycmF5IG9mIHByb2plY3RzXG4gKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBhY3RpdmVUYWIgQWN0aXZlIHRhYiBlbGVtZW50XG4gKiBAcmV0dXJuIHt2b2lkfVxuICogQGV4cG9ydFxuICovXG5leHBvcnQgZnVuY3Rpb24gcmVmcmVzaFByb2plY3RMaXN0KHByb2plY3RBcnIpIHtcbiAgY2xlYXJQcm9qZWN0TGlzdCgpO1xuICBjb25zdCBhY3RpdmVUYWIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1haW4tYWN0aXZlVGFiXCIpO1xuICBjb25zdCBuZXdQcm9qZWN0TGlzdCA9IHByb2plY3RMaXN0Q29tcG9uZW50KHByb2plY3RBcnIpO1xuICBhY3RpdmVUYWIuYXBwZW5kQ2hpbGQobmV3UHJvamVjdExpc3QpO1xufVxuXG4vKipcbiAqIENsZWFyIHRoZSBwcm9qZWN0IGxpc3QgaW4gdGhlIGFjdGl2ZSB0YWIgY29tcG9uZW50LlxuICogQHJldHVybiB7dm9pZH1cbiAqL1xuZnVuY3Rpb24gY2xlYXJQcm9qZWN0TGlzdCgpIHtcbiAgY29uc3QgcHJvamVjdExpc3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1haW4tcHJvamVjdExpc3RcIik7XG4gIGlmICghcHJvamVjdExpc3QpIHJldHVybjtcbiAgcHJvamVjdExpc3QucmVtb3ZlKCk7XG59XG5cbi8qKlxuICogUmVmcmVzaCB0aGUgdGFzayBsaXN0IGluIHRoZSBwcm9qZWN0IGNvbXBvbmVudC5cbiAqIEBwYXJhbSB7cHJvamVjdH0gcHJvamVjdE9iaiBQcm9qZWN0IG9iamVjdFxuICogQHJldHVybiB7dm9pZH1cbiAqIEBleHBvcnRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJlZnJlc2hUYXNrTGlzdChwcm9qZWN0T2JqKSB7XG4gIGNsZWFyVGFza0xpc3QocHJvamVjdE9iaik7XG4gIGNvbnN0IG5ld1Rhc2tMaXN0ID0gdGFza0xpc3RDb21wb25lbnQocHJvamVjdE9iaik7XG4gIGNvbnN0IHByb2plY3RFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXG4gICAgXCJtYWluLXByb2plY3QtXCIgKyBwcm9qZWN0T2JqLmlkXG4gICk7XG4gIHByb2plY3RFbGVtZW50LmFwcGVuZENoaWxkKG5ld1Rhc2tMaXN0KTtcbn1cblxuLyoqXG4gKiBDbGVhciB0aGUgdGFzayBsaXN0IGluIHRoZSBwcm9qZWN0IGNvbXBvbmVudC5cbiAqIEBwYXJhbSB7cHJvamVjdH0gcHJvamVjdE9iaiBQcm9qZWN0IG9iamVjdFxuICogQHJldHVybiB7dm9pZH1cbiAqL1xuZnVuY3Rpb24gY2xlYXJUYXNrTGlzdChwcm9qZWN0T2JqKSB7XG4gIGNvbnN0IHRhc2tMaXN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXG4gICAgXCJtYWluLXByb2plY3QtdGFza0xpc3QtXCIgKyBwcm9qZWN0T2JqLmlkXG4gICk7XG4gIGlmICghdGFza0xpc3QpIHJldHVybjtcbiAgdGFza0xpc3QucmVtb3ZlKCk7XG59XG4iLCIvKipcbiAqIEBmaWxlb3ZlcnZpZXcgUHJvamVjdCBsaXN0IGNvbXBvbmVudFxuICogQGF1dGhvciBUaGluaCBOZ3V5ZW5cbiAqIEB2ZXJzaW9uIDEuMC4wXG4gKi9cblxuXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIElNUE9SVFMgKi9cbmltcG9ydCB7IGFkZFRhc2sgYXMgYWRkVGFzaywgY29tcGxldGVQcm9qZWN0LCBjb21wbGV0ZVRhc2sgfSBmcm9tIFwiLi4vLi4vaW5kZXhcIjtcbmltcG9ydCBkZWxldGVJY29uIGZyb20gXCIuL2RlbGV0ZV9GSUxMMF93Z2h0NDAwX0dSQUQwX29wc3o0OC5zdmdcIjtcbmltcG9ydCBleHBhbmRJY29uTW9yZSBmcm9tIFwiLi9leHBhbmRfbW9yZV9GSUxMMF93Z2h0NDAwX0dSQUQwX29wc3o0OC5zdmdcIjtcbmltcG9ydCBleHBhbmRJY29uTGVzcyBmcm9tIFwiLi9leHBhbmRfbGVzc19GSUxMMF93Z2h0NDAwX0dSQUQwX29wc3o0OC5zdmdcIjtcbmltcG9ydCB7XG4gIGRlbGV0ZVRhc2ssXG4gIGRlbGV0ZVByb2plY3QsXG4gIHNvcnRUYXNrQnlEYXRlLFxuICBzb3J0QXJyQnlQcmlvcml0eSxcbiAgc3dhcFByb2plY3QsXG59IGZyb20gXCIuLi8uLi9pbmRleFwiO1xuaW1wb3J0IHsgcmVmcmVzaFRhc2tMaXN0IH0gZnJvbSBcIi4uL3BlbmRpbmcvcGVuZGluZ1wiO1xuXG4vKiBQUk9KRUNUIExJU1QgQ09NUE9ORU5UICovXG4vKipcbiAqIENyZWF0ZSBhIHByb2plY3QgbGlzdCBjb21wb25lbnQgd2l0aCBwcm9qZWN0cy5cbiAqIEBwYXJhbSB7QXJyYXl9IHByb2plY3RBcnIgQXJyYXkgb2YgcHJvamVjdHNcbiAqIEByZXR1cm4ge0hUTUxFbGVtZW50fSBQcm9qZWN0IGxpc3QgZWxlbWVudFxuICogQGV4cG9ydFxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBwcm9qZWN0TGlzdChwcm9qZWN0QXJyKSB7XG4gIGNvbnN0IHByb2plY3RMaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInVsXCIpO1xuICBwcm9qZWN0TGlzdC5jbGFzc0xpc3QuYWRkKFwibWFpbi1wcm9qZWN0TGlzdFwiKTtcbiAgcHJvamVjdExpc3QuaWQgPSBcIm1haW4tcHJvamVjdExpc3RcIjtcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IHByb2plY3RBcnIubGVuZ3RoOyBpKyspIHtcbiAgICBjb25zdCBwcm9qZWN0Q29tcG9uZW50ID0gcHJvamVjdChpLCBwcm9qZWN0QXJyKTtcbiAgICBwcm9qZWN0TGlzdC5hcHBlbmRDaGlsZChwcm9qZWN0Q29tcG9uZW50KTtcbiAgfVxuXG4gIHJldHVybiBwcm9qZWN0TGlzdDtcbn1cblxuLyogUFJPSkVDVCBDT01QT05FTlQgKi9cbi8qKlxuICogQ3JlYXRlIGEgcHJvamVjdCBjb21wb25lbnQuXG4gKiBAcGFyYW0ge251bWJlcn0gaW5kZXggSW5kZXggb2YgcHJvamVjdCBpbiBwcm9qZWN0IGFycmF5XG4gKiBAcGFyYW0ge0FycmF5fSBwcm9qZWN0QXJyIEFzc29jaWF0ZWQgcHJvamVjdCBvYmplY3QgYXJyYXlcbiAqIEByZXR1cm4ge0hUTUxFbGVtZW50fSBQcm9qZWN0IGVsZW1lbnRcbiAqL1xuZnVuY3Rpb24gcHJvamVjdChpbmRleCwgcHJvamVjdEFycikge1xuICBjb25zdCBwcm9qZWN0T2JqID0gcHJvamVjdEFycltpbmRleF07XG4gIGNvbnN0IHByb2plY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gIGNvbnN0IHByb2plY3RDaGVja2JveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgY29uc3QgcHJvamVjdFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgzXCIpO1xuICBjb25zdCBwcm9qZWN0RGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgY29uc3QgcHJvamVjdEV4cGFuZEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIGNvbnN0IHByb2plY3RFeHBhbmRCdG5UZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gIGNvbnN0IHByb2plY3REZWxldGVCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICBjb25zdCBwcm9qZWN0RGVsZXRlQnRuVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICBjb25zdCBwcm9qZWN0RXhwYW5kSWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gIGNvbnN0IHByb2plY3REZWxldGVJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcblxuICBjb25zdCBzb3J0VGFza0NvbXBvbmVudCA9IHNvcnRDb21wb25lbnQocHJvamVjdE9iaik7XG4gIGNvbnN0IGFkZFRhc2tCdG5Db21wb25lbnQgPSBhZGRUYXNrQnRuKHByb2plY3RPYmopO1xuICBjb25zdCBwcm9qZWN0VGFza0xpc3QgPSB0YXNrTGlzdChwcm9qZWN0T2JqKTtcblxuICBwcm9qZWN0LmNsYXNzTGlzdC5hZGQoXCJtYWluLXByb2plY3RcIik7XG4gIHByb2plY3RDaGVja2JveC50eXBlID0gXCJjaGVja2JveFwiO1xuICBwcm9qZWN0Q2hlY2tib3guY2xhc3NMaXN0LmFkZChcIm1haW4tcHJvamVjdC1jaGVja2JveFwiKTtcbiAgcHJvamVjdFRpdGxlLmNsYXNzTGlzdC5hZGQoXCJtYWluLXByb2plY3QtdGl0bGVcIik7XG4gIHByb2plY3REZXNjcmlwdGlvbi5jbGFzc0xpc3QuYWRkKFwibWFpbi1wcm9qZWN0LWRlc2NyaXB0aW9uXCIpO1xuICBwcm9qZWN0RXhwYW5kQnRuLmNsYXNzTGlzdC5hZGQoXCJtYWluLXByb2plY3QtZXhwYW5kQnRuXCIpO1xuICBwcm9qZWN0RGVsZXRlQnRuLmNsYXNzTGlzdC5hZGQoXCJtYWluLXByb2plY3QtZGVsZXRlQnRuXCIpO1xuICBwcm9qZWN0RXhwYW5kSWNvbi5jbGFzc0xpc3QuYWRkKFwibWFpbi1pY29uc1wiKTtcbiAgcHJvamVjdERlbGV0ZUljb24uY2xhc3NMaXN0LmFkZChcIm1haW4taWNvbnNcIik7XG5cbiAgaWYgKCFwcm9qZWN0T2JqLmNvbXBsZXRlZCkge1xuICAgIHByb2plY3Quc3R5bGUuYmFja2dyb3VuZEltYWdlID1cbiAgICAgIFwibGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCBcIiArXG4gICAgICBnZXRPYmpDb2xvcihpbmRleCwgcHJvamVjdEFycikgK1xuICAgICAgXCIsIHRyYW5zcGFyZW50IDE1JSlcIjtcbiAgfVxuICBwcm9qZWN0LmRyYWdnYWJsZSA9IHRydWU7XG4gIHByb2plY3QuYWRkRXZlbnRMaXN0ZW5lcihcImRyYWdzdGFydFwiLCAoZSkgPT4ge1xuICAgIGUuZGF0YVRyYW5zZmVyLnNldERhdGEoXCJ0ZXh0L3BsYWluXCIsIHByb2plY3RPYmoucHJpb3JpdHkpO1xuICAgIHByb2plY3Quc3R5bGUub3BhY2l0eSA9IDAuNTtcbiAgfSk7XG4gIHByb2plY3QuYWRkRXZlbnRMaXN0ZW5lcihcImRyYWdvdmVyXCIsIChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICB9KTtcbiAgcHJvamVjdC5hZGRFdmVudExpc3RlbmVyKFwiZHJvcFwiLCAoZSkgPT4ge1xuICAgIGNvbnN0IGRyYWdnZWRQcm9qZWN0UHJpb3JpdHkgPSBlLmRhdGFUcmFuc2Zlci5nZXREYXRhKFwidGV4dC9wbGFpblwiKTtcbiAgICBzd2FwUHJvamVjdChwcm9qZWN0QXJyLCBkcmFnZ2VkUHJvamVjdFByaW9yaXR5LCBwcm9qZWN0T2JqLnByaW9yaXR5KTtcbiAgfSk7XG4gIHByb2plY3QuYWRkRXZlbnRMaXN0ZW5lcihcImRyYWdlbmRcIiwgKGUpID0+IHtcbiAgICBwcm9qZWN0LnN0eWxlLm9wYWNpdHkgPSAxO1xuICB9KTtcbiAgcHJvamVjdC5pZCA9IFwibWFpbi1wcm9qZWN0LVwiICsgcHJvamVjdE9iai5pZDtcbiAgcHJvamVjdC5kYXRhc2V0LnByaW9yaXR5ID0gcHJvamVjdE9iai5wcmlvcml0eTtcbiAgcHJvamVjdENoZWNrYm94LmNoZWNrZWQgPSBwcm9qZWN0T2JqLmNvbXBsZXRlZDtcbiAgaWYgKHByb2plY3RPYmouY29tcGxldGVkKSBwcm9qZWN0Q2hlY2tib3guZGlzYWJsZWQgPSB0cnVlO1xuICBwcm9qZWN0Q2hlY2tib3guYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBjb21wbGV0ZVByb2plY3QocHJvamVjdE9iaik7XG4gIH0pO1xuICBwcm9qZWN0VGl0bGUudGV4dENvbnRlbnQgPSBwcm9qZWN0T2JqLnRpdGxlO1xuICBwcm9qZWN0VGl0bGUuc3BlbGxjaGVjayA9IGZhbHNlO1xuICBwcm9qZWN0RGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSBwcm9qZWN0T2JqLmRlc2NyaXB0aW9uO1xuICBwcm9qZWN0RGVzY3JpcHRpb24uc3BlbGxjaGVjayA9IGZhbHNlO1xuICBwcm9qZWN0RXhwYW5kQnRuVGV4dC50ZXh0Q29udGVudCA9IFwiRVhQQU5EXCI7XG4gIHByb2plY3RFeHBhbmRCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBpZiAocHJvamVjdEV4cGFuZEJ0blRleHQudGV4dENvbnRlbnQgPT09IFwiRVhQQU5EXCIpIHtcbiAgICAgIHByb2plY3RFeHBhbmRCdG5UZXh0LnRleHRDb250ZW50ID0gXCJDT0xMQVBTRVwiO1xuICAgICAgcHJvamVjdEV4cGFuZEljb24uc3JjID0gZXhwYW5kSWNvbkxlc3M7XG4gICAgICBwcm9qZWN0RGVzY3JpcHRpb24uY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcHJvamVjdEV4cGFuZEJ0blRleHQudGV4dENvbnRlbnQgPSBcIkVYUEFORFwiO1xuICAgICAgcHJvamVjdEV4cGFuZEljb24uc3JjID0gZXhwYW5kSWNvbk1vcmU7XG4gICAgICBwcm9qZWN0RGVzY3JpcHRpb24uY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcbiAgICB9XG4gIH0pO1xuICBwcm9qZWN0RGVsZXRlQnRuVGV4dC50ZXh0Q29udGVudCA9IFwiREVMRVRFXCI7XG4gIHByb2plY3REZWxldGVCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBkZWxldGVQcm9qZWN0KGluZGV4LCBwcm9qZWN0QXJyKTtcbiAgfSk7XG5cbiAgcHJvamVjdEV4cGFuZEljb24uc3JjID0gZXhwYW5kSWNvbk1vcmU7XG4gIHByb2plY3REZWxldGVJY29uLnNyYyA9IGRlbGV0ZUljb247XG5cbiAgcHJvamVjdC5hcHBlbmRDaGlsZChwcm9qZWN0Q2hlY2tib3gpO1xuICBwcm9qZWN0LmFwcGVuZENoaWxkKHByb2plY3RUaXRsZSk7XG4gIHByb2plY3RUaXRsZS5hcHBlbmRDaGlsZChwcm9qZWN0RGVzY3JpcHRpb24pO1xuICBwcm9qZWN0LmFwcGVuZENoaWxkKHByb2plY3RFeHBhbmRCdG4pO1xuICBwcm9qZWN0LmFwcGVuZENoaWxkKHByb2plY3REZWxldGVCdG4pO1xuICBwcm9qZWN0RXhwYW5kQnRuLmFwcGVuZENoaWxkKHByb2plY3RFeHBhbmRCdG5UZXh0KTtcbiAgcHJvamVjdEV4cGFuZEJ0bi5hcHBlbmRDaGlsZChwcm9qZWN0RXhwYW5kSWNvbik7XG4gIHByb2plY3REZWxldGVCdG4uYXBwZW5kQ2hpbGQocHJvamVjdERlbGV0ZUJ0blRleHQpO1xuICBwcm9qZWN0RGVsZXRlQnRuLmFwcGVuZENoaWxkKHByb2plY3REZWxldGVJY29uKTtcbiAgcHJvamVjdC5hcHBlbmRDaGlsZChzb3J0VGFza0NvbXBvbmVudCk7XG4gIHByb2plY3QuYXBwZW5kQ2hpbGQoYWRkVGFza0J0bkNvbXBvbmVudCk7XG4gIHByb2plY3QuYXBwZW5kQ2hpbGQocHJvamVjdFRhc2tMaXN0KTtcblxuICByZXR1cm4gcHJvamVjdDtcbn1cblxuLyogVEFTSyBMSVNUIENPTVBPTkVOVCAqL1xuLyoqXG4gKiBDcmVhdGUgYSB0YXNrIGxpc3QgY29tcG9uZW50IGFzc29jaWF0ZWQgd2l0aCBhIHByb2plY3QuXG4gKiBAcGFyYW0ge3Byb2plY3R9IHByb2plY3RPYmogQXNzb2NpYXRlZCBwcm9qZWN0IG9iamVjdFxuICogQHJldHVybiB7SFRNTEVsZW1lbnR9IFRhc2sgbGlzdCBlbGVtZW50XG4gKiBAZXhwb3J0XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB0YXNrTGlzdChwcm9qZWN0T2JqKSB7XG4gIGNvbnN0IHRhc2tMaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInVsXCIpO1xuICBjb25zdCB0YXNrQXJyID0gcHJvamVjdE9iai50YXNrcztcblxuICB0YXNrTGlzdC5jbGFzc0xpc3QuYWRkKFwibWFpbi1wcm9qZWN0LXRhc2tMaXN0XCIpO1xuICB0YXNrTGlzdC5pZCA9IFwibWFpbi1wcm9qZWN0LXRhc2tMaXN0LVwiICsgcHJvamVjdE9iai5pZDtcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IHRhc2tBcnIubGVuZ3RoOyBpKyspIHtcbiAgICBjb25zdCB0YXNrQ29tcG9uZW50ID0gdGFzayhwcm9qZWN0T2JqLCBpKTtcbiAgICB0YXNrTGlzdC5hcHBlbmRDaGlsZCh0YXNrQ29tcG9uZW50KTtcbiAgfVxuXG4gIHJldHVybiB0YXNrTGlzdDtcbn1cblxuLyogVEFTSyBDT01QT05FTlQgKi9cbi8qKlxuICogQ3JlYXRlIGEgdGFzayBjb21wb25lbnQgZnJvbSB0aGUgYXNzb2NpYXRlZCBwcm9qZWN0IGFuZCB0aGUgdGFzayBpbmRleC5cbiAqIEBwYXJhbSB7cHJvamVjdH0gcHJvamVjdE9iaiBQcm9qZWN0IG9iamVjdFxuICogQHBhcmFtIHtOdW1iZXJ9IHRhc2tJbmRleCBJbmRleCBvZiB0aGUgdGFzayBpbiB0aGUgcHJvamVjdFxuICogQHJldHVybiB7SFRNTEVsZW1lbnR9IFRhc2sgY29tcG9uZW50XG4gKi9cbmZ1bmN0aW9uIHRhc2socHJvamVjdE9iaiwgdGFza0luZGV4KSB7XG4gIGNvbnN0IHRhc2tBcnIgPSBwcm9qZWN0T2JqLnRhc2tzO1xuICBjb25zdCB0YXNrT2JqID0gdGFza0Fyclt0YXNrSW5kZXhdO1xuICBjb25zdCB0YXNrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuICBjb25zdCB0YXNrQ2hlY2tib3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gIGNvbnN0IHRhc2tUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoNFwiKTtcbiAgY29uc3QgdGFza0Rlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIGNvbnN0IHRhc2tEYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gIGNvbnN0IHRhc2tFeHBhbmRCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICBjb25zdCB0YXNrRXhwYW5kQnRuVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICBjb25zdCB0YXNrRGVsZXRlQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgY29uc3QgdGFza0RlbGV0ZUJ0blRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgY29uc3QgdGFza0V4cGFuZEljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICBjb25zdCB0YXNrRGVsZXRlSWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG5cbiAgdGFzay5jbGFzc0xpc3QuYWRkKFwibWFpbi10YXNrXCIpO1xuICB0YXNrQ2hlY2tib3gudHlwZSA9IFwiY2hlY2tib3hcIjtcbiAgdGFza0NoZWNrYm94LmNsYXNzTGlzdC5hZGQoXCJtYWluLXRhc2stY2hlY2tib3hcIik7XG4gIHRhc2tUaXRsZS5jbGFzc0xpc3QuYWRkKFwibWFpbi10YXNrLXRpdGxlXCIpO1xuICB0YXNrRGVzY3JpcHRpb24uY2xhc3NMaXN0LmFkZChcIm1haW4tdGFzay1kZXNjcmlwdGlvblwiKTtcbiAgdGFza0RhdGUuY2xhc3NMaXN0LmFkZChcIm1haW4tdGFzay1kYXRlXCIpO1xuICB0YXNrRXhwYW5kQnRuLmNsYXNzTGlzdC5hZGQoXCJtYWluLXRhc2stZXhwYW5kQnRuXCIpO1xuICB0YXNrRGVsZXRlQnRuLmNsYXNzTGlzdC5hZGQoXCJtYWluLXRhc2stZGVsZXRlQnRuXCIpO1xuICB0YXNrRXhwYW5kSWNvbi5jbGFzc0xpc3QuYWRkKFwibWFpbi1pY29uc1wiKTtcbiAgdGFza0RlbGV0ZUljb24uY2xhc3NMaXN0LmFkZChcIm1haW4taWNvbnNcIik7XG5cbiAgaWYgKCF0YXNrT2JqLmNvbXBsZXRlZCkge1xuICAgIHRhc2suc3R5bGUuYmFja2dyb3VuZEltYWdlID1cbiAgICAgIFwibGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCBcIiArXG4gICAgICBnZXRPYmpDb2xvcih0YXNrSW5kZXgsIHRhc2tBcnIpICtcbiAgICAgIFwiLCB0cmFuc3BhcmVudCAxMCUpXCI7XG4gIH1cbiAgdGFzay5kYXRhc2V0LnByaW9yaXR5ID0gdGFza09iai5wcmlvcml0eTtcbiAgdGFza1RpdGxlLnNwZWxsY2hlY2sgPSBmYWxzZTtcbiAgdGFza0Rlc2NyaXB0aW9uLnNwZWxsY2hlY2sgPSBmYWxzZTtcbiAgdGFza0V4cGFuZEJ0blRleHQudGV4dENvbnRlbnQgPSBcIkVYUEFORFwiO1xuICB0YXNrRXhwYW5kQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgaWYgKHRhc2tFeHBhbmRCdG5UZXh0LnRleHRDb250ZW50ID09PSBcIkVYUEFORFwiKSB7XG4gICAgICB0YXNrRXhwYW5kQnRuVGV4dC50ZXh0Q29udGVudCA9IFwiQ09MTEFQU0VcIjtcbiAgICAgIHRhc2tFeHBhbmRJY29uLnNyYyA9IGV4cGFuZEljb25MZXNzO1xuICAgICAgdGFza0Rlc2NyaXB0aW9uLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRhc2tFeHBhbmRCdG5UZXh0LnRleHRDb250ZW50ID0gXCJFWFBBTkRcIjtcbiAgICAgIHRhc2tFeHBhbmRJY29uLnNyYyA9IGV4cGFuZEljb25Nb3JlO1xuICAgICAgdGFza0Rlc2NyaXB0aW9uLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XG4gICAgfVxuICB9KTtcblxuICB0YXNrRGVsZXRlQnRuVGV4dC50ZXh0Q29udGVudCA9IFwiREVMRVRFXCI7XG4gIHRhc2tEZWxldGVCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBkZWxldGVUYXNrKHByb2plY3RPYmosIHRhc2tJbmRleCk7XG4gIH0pO1xuXG4gIHRhc2tFeHBhbmRJY29uLnNyYyA9IGV4cGFuZEljb25Nb3JlO1xuICB0YXNrRGVsZXRlSWNvbi5zcmMgPSBkZWxldGVJY29uO1xuXG4gIHRhc2tDaGVja2JveC5jaGVja2VkID0gdGFza09iai5jb21wbGV0ZWQgfHwgcHJvamVjdE9iai5jb21wbGV0ZWQ7XG4gIGlmIChwcm9qZWN0T2JqLmNvbXBsZXRlZCkgdGFza0NoZWNrYm94LmRpc2FibGVkID0gdHJ1ZTtcbiAgdGFza0NoZWNrYm94LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgY29tcGxldGVUYXNrKHByb2plY3RPYmosIHRhc2tJbmRleCk7XG4gIH0pO1xuXG4gIHRhc2tUaXRsZS50ZXh0Q29udGVudCA9IHRhc2tPYmoudGl0bGU7XG4gIHRhc2tEZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9IHRhc2tPYmouZGVzY3JpcHRpb247XG4gIHRhc2tEYXRlLnRleHRDb250ZW50ID0gdGFza09iai5kdWVEYXRlO1xuXG4gIHRhc2suYXBwZW5kQ2hpbGQodGFza0NoZWNrYm94KTtcbiAgdGFzay5hcHBlbmRDaGlsZCh0YXNrVGl0bGUpO1xuICB0YXNrVGl0bGUuYXBwZW5kQ2hpbGQodGFza0Rlc2NyaXB0aW9uKTtcbiAgdGFzay5hcHBlbmRDaGlsZCh0YXNrRGF0ZSk7XG4gIHRhc2suYXBwZW5kQ2hpbGQodGFza0V4cGFuZEJ0bik7XG4gIHRhc2tFeHBhbmRCdG4uYXBwZW5kQ2hpbGQodGFza0V4cGFuZEJ0blRleHQpO1xuICB0YXNrRXhwYW5kQnRuLmFwcGVuZENoaWxkKHRhc2tFeHBhbmRJY29uKTtcbiAgdGFzay5hcHBlbmRDaGlsZCh0YXNrRGVsZXRlQnRuKTtcbiAgdGFza0RlbGV0ZUJ0bi5hcHBlbmRDaGlsZCh0YXNrRGVsZXRlQnRuVGV4dCk7XG4gIHRhc2tEZWxldGVCdG4uYXBwZW5kQ2hpbGQodGFza0RlbGV0ZUljb24pO1xuXG4gIHJldHVybiB0YXNrO1xufVxuXG4vKipcbiAqIENyZWF0ZSBhIHBvcHVwIGNvbXBvbmVudCB0byBhZGQgYSBuZXcgdGFzayBhc3NvY2lhdGVkIHdpdGhcbiAqIHRoZSBpbnB1dCBwcm9qZWN0IG9iamVjdC5cbiAqIEBwYXJhbSB7cHJvamVjdH0gcHJvamVjdE9iaiBBc3NvY2lhdGVkIHByb2plY3Qgb2JqZWN0XG4gKiBAcmV0dXJuIHtIVE1MRWxlbWVudH0gQWRkIHRhc2sgZWxlbWVudFxuICovXG5mdW5jdGlvbiBhZGRUYXNrUG9wdXAocHJvamVjdE9iaikge1xuICBjb25zdCBhZGRUYXNrRm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmb3JtXCIpO1xuICBjb25zdCB0YXNrVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gIGNvbnN0IHRhc2tEZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZXh0YXJlYVwiKTtcbiAgY29uc3QgdGFza0RhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gIGNvbnN0IGNvbmZpcm1CdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICBjb25zdCBjYW5jZWxCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuXG4gIGFkZFRhc2tGb3JtLmNsYXNzTGlzdC5hZGQoXCJtYWluLWFkZFRhc2tGb3JtXCIpO1xuICBhZGRUYXNrRm9ybS5pZCA9IFwibWFpbi1hZGRUYXNrRm9ybS1cIiArIHByb2plY3RPYmouaWQ7XG4gIHRhc2tUaXRsZS5jbGFzc0xpc3QuYWRkKFwibWFpbi1hZGRUYXNrRm9ybS10aXRsZVwiKTtcbiAgdGFza0Rlc2NyaXB0aW9uLmNsYXNzTGlzdC5hZGQoXCJtYWluLWFkZFRhc2tGb3JtLWRlc2NyaXB0aW9uXCIpO1xuICB0YXNrRGF0ZS5jbGFzc0xpc3QuYWRkKFwibWFpbi1hZGRUYXNrRm9ybS1kYXRlXCIpO1xuICBjb25maXJtQnRuLmNsYXNzTGlzdC5hZGQoXCJtYWluLWFkZFRhc2tGb3JtLWNvbmZpcm1cIik7XG4gIGNhbmNlbEJ0bi5jbGFzc0xpc3QuYWRkKFwibWFpbi1hZGRUYXNrRm9ybS1jYW5jZWxcIik7XG5cbiAgdGFza1RpdGxlLnR5cGUgPSBcInRleHRcIjtcbiAgdGFza1RpdGxlLnBsYWNlaG9sZGVyID0gXCJUYXNrIE5hbWVcIjtcbiAgdGFza1RpdGxlLm5hbWUgPSBcInRpdGxlXCI7XG4gIHRhc2tUaXRsZS5yZXF1aXJlZCA9IHRydWU7XG4gIHRhc2tEZXNjcmlwdGlvbi5wbGFjZWhvbGRlciA9IFwiVGFzayBEZXNjcmlwdGlvblwiO1xuICB0YXNrRGVzY3JpcHRpb24ubmFtZSA9IFwiZGVzY3JpcHRpb25cIjtcbiAgdGFza0RhdGUudHlwZSA9IFwiZGF0ZVwiO1xuICB0YXNrRGF0ZS5uYW1lID0gXCJkdWVEYXRlXCI7XG4gIGNvbmZpcm1CdG4udHlwZSA9IFwic3VibWl0XCI7XG4gIGNvbmZpcm1CdG4udGV4dENvbnRlbnQgPSBcIkNvbmZpcm1cIjtcbiAgY2FuY2VsQnRuLnR5cGUgPSBcImJ1dHRvblwiO1xuICBjYW5jZWxCdG4udGV4dENvbnRlbnQgPSBcIkNhbmNlbFwiO1xuXG4gIGFkZFRhc2tGb3JtLm9uc3VibWl0ID0gKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgYWRkVGFzayhwcm9qZWN0T2JqKTtcbiAgICBhZGRUYXNrRm9ybS5yZW1vdmUoKTtcbiAgfTtcbiAgY2FuY2VsQnRuLm9uY2xpY2sgPSAoKSA9PiB7XG4gICAgYWRkVGFza0Zvcm0ucmVtb3ZlKCk7XG4gIH07XG5cbiAgYWRkVGFza0Zvcm0uYXBwZW5kQ2hpbGQodGFza1RpdGxlKTtcbiAgYWRkVGFza0Zvcm0uYXBwZW5kQ2hpbGQodGFza0Rlc2NyaXB0aW9uKTtcbiAgYWRkVGFza0Zvcm0uYXBwZW5kQ2hpbGQodGFza0RhdGUpO1xuICBhZGRUYXNrRm9ybS5hcHBlbmRDaGlsZChjb25maXJtQnRuKTtcbiAgYWRkVGFza0Zvcm0uYXBwZW5kQ2hpbGQoY2FuY2VsQnRuKTtcblxuICByZXR1cm4gYWRkVGFza0Zvcm07XG59XG5cbi8qKlxuICogQ3JlYXRlIGFuIGFkZCB0YXNrIGJ1dHRvbiBjb21wb25lbnQgYXNzb2NpYXRlZCB3aXRoIGEgcHJvamVjdC5cbiAqIEBwYXJhbSB7QXJyYXl9IHByb2plY3RPYmogQXNzb2NpYXRlZCBwcm9qZWN0IG9iamVjdFxuICogQHJldHVybiB7SFRNTEVsZW1lbnR9IEFkZCB0YXNrIGJ1dHRvblxuICovXG5mdW5jdGlvbiBhZGRUYXNrQnRuKHByb2plY3RPYmopIHtcbiAgY29uc3QgYWRkVGFza0J0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG5cbiAgYWRkVGFza0J0bi5jbGFzc0xpc3QuYWRkKFwibWFpbi1hZGRUYXNrQnRuXCIpO1xuICBhZGRUYXNrQnRuLnRleHRDb250ZW50ID0gXCJBZGQgVGFzayArXCI7XG4gIGlmIChwcm9qZWN0T2JqLmNvbXBsZXRlZCkgYWRkVGFza0J0bi5kaXNhYmxlZCA9IHRydWU7XG5cbiAgYWRkVGFza0J0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIGlmIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1haW4tYWRkVGFza0Zvcm0tXCIgKyBwcm9qZWN0T2JqLmlkKSkgcmV0dXJuO1xuICAgIGNvbnN0IHRhc2tMaXN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXG4gICAgICBcIm1haW4tcHJvamVjdC10YXNrTGlzdC1cIiArIHByb2plY3RPYmouaWRcbiAgICApO1xuICAgIHRhc2tMaXN0LmFwcGVuZENoaWxkKGFkZFRhc2tQb3B1cChwcm9qZWN0T2JqKSk7XG4gIH0pO1xuXG4gIHJldHVybiBhZGRUYXNrQnRuO1xufVxuXG4vKiBTT1JUIFRBU0sgQ09NUE9ORU5UICovXG4vKipcbiAqIENyZWF0ZSBhIHNvcnQgdGFzayBjb21wb25lbnQgYXNzb2NpYXRlZCB3aXRoIGEgcHJvamVjdC5cbiAqIEBwYXJhbSB7cHJvamVjdH0gcHJvamVjdE9iaiBBc3NvY2lhdGVkIHByb2plY3Qgb2JqZWN0XG4gKiBAcmV0dXJuIHtIVE1MRWxlbWVudH0gU29ydCB0YXNrIGNvbXBvbmVudFxuICovXG5mdW5jdGlvbiBzb3J0Q29tcG9uZW50KHByb2plY3RPYmopIHtcbiAgY29uc3Qgc29ydFRhc2tXcmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3Qgc29ydFRhc2tCeVByaW9yaXR5TGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gIGNvbnN0IHNvcnRUYXNrQnlQcmlvcml0eUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgY29uc3Qgc29ydFRhc2tCeURhdGVMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgY29uc3Qgc29ydFRhc2tCeURhdGVCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG5cbiAgc29ydFRhc2tXcmFwcGVyLmNsYXNzTGlzdC5hZGQoXCJtYWluLXByb2plY3Qtc29ydFRhc2tXcmFwcGVyXCIpO1xuICBzb3J0VGFza0J5UHJpb3JpdHlMYWJlbC5jbGFzc0xpc3QuYWRkKFwibWFpbi1wcm9qZWN0LXNvcnRMYWJlbFwiKTtcbiAgc29ydFRhc2tCeVByaW9yaXR5QnRuLmNsYXNzTGlzdC5hZGQoXCJtYWluLXByb2plY3Qtc29ydEJ0blwiKTtcbiAgc29ydFRhc2tCeURhdGVMYWJlbC5jbGFzc0xpc3QuYWRkKFwibWFpbi1wcm9qZWN0LXNvcnRMYWJlbFwiKTtcbiAgc29ydFRhc2tCeURhdGVCdG4uY2xhc3NMaXN0LmFkZChcIm1haW4tcHJvamVjdC1zb3J0QnRuXCIpO1xuXG4gIHNvcnRUYXNrQnlQcmlvcml0eUxhYmVsLnRleHRDb250ZW50ID0gXCJTb3J0IGJ5IHByaW9yaXR5XCI7XG4gIHNvcnRUYXNrQnlQcmlvcml0eUxhYmVsLmh0bWxGb3IgPSBcInNvcnRQcmlvcml0eS1cIiArIHByb2plY3RPYmouaWQ7XG4gIHNvcnRUYXNrQnlEYXRlTGFiZWwudGV4dENvbnRlbnQgPSBcIlNvcnQgYnkgZGF0ZVwiO1xuICBzb3J0VGFza0J5RGF0ZUxhYmVsLmh0bWxGb3IgPSBcInNvcnREYXRlLVwiICsgcHJvamVjdE9iai5pZDtcblxuICBzb3J0VGFza0J5UHJpb3JpdHlCdG4udHlwZSA9IFwicmFkaW9cIjtcbiAgc29ydFRhc2tCeVByaW9yaXR5QnRuLm5hbWUgPSBcInNvcnRUYXNrLVwiICsgcHJvamVjdE9iai5pZDtcbiAgc29ydFRhc2tCeVByaW9yaXR5QnRuLmlkID0gXCJzb3J0UHJpb3JpdHktXCIgKyBwcm9qZWN0T2JqLmlkO1xuICBzb3J0VGFza0J5UHJpb3JpdHlCdG4udmFsdWUgPSBcInByaW9yaXR5XCI7XG4gIHNvcnRUYXNrQnlQcmlvcml0eUJ0bi5jaGVja2VkID0gdHJ1ZTtcblxuICBzb3J0VGFza0J5RGF0ZUJ0bi50eXBlID0gXCJyYWRpb1wiO1xuICBzb3J0VGFza0J5RGF0ZUJ0bi5uYW1lID0gXCJzb3J0VGFzay1cIiArIHByb2plY3RPYmouaWQ7XG4gIHNvcnRUYXNrQnlEYXRlQnRuLmlkID0gXCJzb3J0RGF0ZS1cIiArIHByb2plY3RPYmouaWQ7XG4gIHNvcnRUYXNrQnlEYXRlQnRuLnZhbHVlID0gXCJkYXRlXCI7XG5cbiAgc29ydFRhc2tCeVByaW9yaXR5QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgc29ydEFyckJ5UHJpb3JpdHkocHJvamVjdE9iai50YXNrcyk7XG4gICAgcmVmcmVzaFRhc2tMaXN0KHByb2plY3RPYmopO1xuICB9KTtcblxuICBzb3J0VGFza0J5RGF0ZUJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIHNvcnRUYXNrQnlEYXRlKHByb2plY3RPYmoudGFza3MpO1xuICAgIHJlZnJlc2hUYXNrTGlzdChwcm9qZWN0T2JqKTtcbiAgfSk7XG5cbiAgc29ydFRhc2tXcmFwcGVyLmFwcGVuZENoaWxkKHNvcnRUYXNrQnlQcmlvcml0eUJ0bik7XG4gIHNvcnRUYXNrV3JhcHBlci5hcHBlbmRDaGlsZChzb3J0VGFza0J5UHJpb3JpdHlMYWJlbCk7XG4gIHNvcnRUYXNrV3JhcHBlci5hcHBlbmRDaGlsZChzb3J0VGFza0J5RGF0ZUJ0bik7XG4gIHNvcnRUYXNrV3JhcHBlci5hcHBlbmRDaGlsZChzb3J0VGFza0J5RGF0ZUxhYmVsKTtcblxuICByZXR1cm4gc29ydFRhc2tXcmFwcGVyO1xufVxuXG4vKipcbiAqIEdldCB0aGUgY29sb3Igb2YgYSBwcm9qZWN0IG9yIHRhc2sgb2JqZWN0IGJhc2VkIG9uIGl0cyBwcmlvcml0eS5cbiAqIEBwYXJhbSB7TnVtYmVyfSBpbmRleCBJbmRleCBvZiBvYmplY3QgaW4gYXJyYXlcbiAqIEBwYXJhbSB7QXJyYXl9IG9iakFyciBQcm9qZWN0IG9yIHRhc2sgYXJyYXlcbiAqIEByZXR1cm4ge1N0cmluZ30gQ29sb3Igc3RyaW5nXG4gKi9cbmZ1bmN0aW9uIGdldE9iakNvbG9yKGluZGV4LCBvYmpBcnIpIHtcbiAgY29uc3Qgb2JqID0gb2JqQXJyW2luZGV4XTtcbiAgY29uc3Qgb2JqUHJpb3JpdHkgPSBvYmoucHJpb3JpdHk7XG4gIGNvbnN0IG5vcm1hbGl6ZWRQcmlvcml0eSA9IG9ialByaW9yaXR5IC8gKG9iakFyci5sZW5ndGggLSAxKTtcbiAgY29uc3QgcmVkID0gTWF0aC5yb3VuZCgyNTUgKiAoMSAtIG5vcm1hbGl6ZWRQcmlvcml0eSkpO1xuICBjb25zdCBncmVlbiA9IE1hdGgucm91bmQoMjU1ICogbm9ybWFsaXplZFByaW9yaXR5KTtcbiAgcmV0dXJuIFwicmdiKFwiICsgcmVkICsgXCIsXCIgKyBncmVlbiArIFwiLDApXCI7XG59XG5cblxuXG4iLCIvKipcbiAqIEBmaWxlb3ZlcnZpZXcgVG9kbyBsaXN0IGFwcFxuICogQGF1dGhvciBUaGluaCBOZ3V5ZW5cbiAqIEB2ZXJzaW9uIDEuMC4wXG4gKi9cblxuXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIElNUE9SVFMgKi9cbmltcG9ydCBwYWdlTG9hZCBmcm9tIFwiLi9jb21wb25lbnRzL3BhZ2VMb2FkXCI7XG5pbXBvcnQgcmVuZGVyUGVuZGluZ0NvbXBvbmVudCwge1xuICByZWZyZXNoUHJvamVjdExpc3QsXG4gIHJlZnJlc2hUYXNrTGlzdCxcbn0gZnJvbSBcIi4vY29tcG9uZW50cy9wZW5kaW5nL3BlbmRpbmdcIjtcbmltcG9ydCByZW5kZXJBcmNoaXZlQ29tcG9uZW50IGZyb20gXCIuL2NvbXBvbmVudHMvYXJjaGl2ZS9hcmNoaXZlXCI7XG5pbXBvcnQgXCIuL3N0eWxlcy9zdHlsZXMuY3NzXCI7XG5pbXBvcnQgXCIuL3N0eWxlcy9zdHlsZXMtcmVzZXQuY3NzXCI7XG5pbXBvcnQgZmF2aWNvbkxpbmsgZnJvbSBcIi4vYXNzZXRzL2Zhdmljb24ucG5nXCI7XG5cbi8qIExPQ0FMIFNUT1JBR0UgKi9cbi8qKlxuICogR2V0IHRoZSBwZW5kaW5nIHByb2plY3RzIGZyb20gbG9jYWxTdG9yYWdlLlxuICogQHJldHVybiB7QXJyYXl9IEFycmF5IG9mIHByb2plY3Qgb2JqZWN0c1xuICovXG5mdW5jdGlvbiBnZXRQZW5kaW5nUHJvamVjdHMoKSB7XG4gIGxldCBwZW5kaW5nUHJvamVjdHMgPSBbXTtcbiAgaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwicGVuZGluZ1Byb2plY3RzXCIpKSB7XG4gICAgcGVuZGluZ1Byb2plY3RzID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInBlbmRpbmdQcm9qZWN0c1wiKSk7XG4gIH1cbiAgcmV0dXJuIHBlbmRpbmdQcm9qZWN0cztcbn1cblxuLyoqXG4gKiBHZXQgdGhlIGNvbXBsZXRlZCBwcm9qZWN0cyBmcm9tIGxvY2FsU3RvcmFnZS5cbiAqIEByZXR1cm4ge0FycmF5fSBBcnJheSBvZiBwcm9qZWN0IG9iamVjdHNcbiAqL1xuZnVuY3Rpb24gZ2V0Q29tcGxldGVkUHJvamVjdHMoKSB7XG4gIGxldCBjb21wbGV0ZWRQcm9qZWN0cyA9IFtdO1xuICBpZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJjb21wbGV0ZWRQcm9qZWN0c1wiKSkge1xuICAgIGNvbXBsZXRlZFByb2plY3RzID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImNvbXBsZXRlZFByb2plY3RzXCIpKTtcbiAgfVxuICByZXR1cm4gY29tcGxldGVkUHJvamVjdHM7XG59XG5cbi8qKlxuICogU2F2ZSB0aGUgcGVuZGluZyBwcm9qZWN0cyB0byBsb2NhbFN0b3JhZ2UuXG4gKiBAcGFyYW0ge0FycmF5fSBwZW5kaW5nUHJvamVjdHMgQXJyYXkgb2YgcHJvamVjdCBvYmplY3RzXG4gKiBAcmV0dXJuIHt2b2lkfVxuICovXG5mdW5jdGlvbiBzYXZlUGVuZGluZ1Byb2plY3RzKHBlbmRpbmdQcm9qZWN0cykge1xuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInBlbmRpbmdQcm9qZWN0c1wiLCBKU09OLnN0cmluZ2lmeShwZW5kaW5nUHJvamVjdHMpKTtcbn1cblxuLyoqXG4gKiBTYXZlIHRoZSBjb21wbGV0ZWQgcHJvamVjdHMgdG8gbG9jYWxTdG9yYWdlLlxuICogQHBhcmFtIHtBcnJheX0gY29tcGxldGVkUHJvamVjdHMgQXJyYXkgb2YgcHJvamVjdCBvYmplY3RzXG4gKiBAcmV0dXJuIHt2b2lkfVxuICovXG5mdW5jdGlvbiBzYXZlQ29tcGxldGVkUHJvamVjdHMoY29tcGxldGVkUHJvamVjdHMpIHtcbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJjb21wbGV0ZWRQcm9qZWN0c1wiLCBKU09OLnN0cmluZ2lmeShjb21wbGV0ZWRQcm9qZWN0cykpO1xufVxuXG4vKipcbiAqIFNhdmUgcGVuZGluZyBwcm9qZWN0cyBhbmQgY29tcGxldGVkIHByb2plY3RzIHRvIGxvY2FsU3RvcmFnZSB3aGVuIHRoZSBwYWdlIGlzIGNsb3NlZC5cbiAqIEByZXR1cm4ge3ZvaWR9XG4gKi9cbmZ1bmN0aW9uIHNhdmVQcm9qZWN0cygpIHtcbiAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJiZWZvcmV1bmxvYWRcIiwgKCkgPT4ge1xuICAgIHNhdmVQZW5kaW5nUHJvamVjdHMocGVuZGluZ1Byb2plY3RzKTtcbiAgICBzYXZlQ29tcGxldGVkUHJvamVjdHMoY29tcGxldGVkUHJvamVjdHMpO1xuICB9KTtcbn1cblxuLyogREFUQSBTVFJVQ1RVUkVTICovXG4vKipcbiAqIENyZWF0ZSBhIHByb2plY3Qgb2JqZWN0LlxuICogQHBhcmFtIHtTdHJpbmd9IHRpdGxlIFRpdGxlIG9mIHRoZSBwcm9qZWN0XG4gKiBAcGFyYW0ge1N0cmluZ30gZGVzY3JpcHRpb24gRGVzY3JpcHRpb24gb2YgdGhlIHByb2plY3RcbiAqIEBwYXJhbSB7TnVtYmVyfSBwcmlvcml0eSBQcmlvcml0eSBvZiB0aGUgcHJvamVjdFxuICogQHBhcmFtIHtBcnJheX0gdGFza3MgQXJyYXkgb2YgdGFza3NcbiAqIEBwYXJhbSB7TnVtYmVyfSBpZCBJZCBvZiB0aGUgcHJvamVjdFxuICogQHBhcmFtIHtCb29sZWFufSBjb21wbGV0ZWQgU3RhdHVzIG9mIHRoZSBwcm9qZWN0XG4gKiBAcmV0dXJuIHtPYmplY3R9IFByb2plY3Qgb2JqZWN0XG4gKi9cbmNvbnN0IHByb2plY3QgPSAodGl0bGUsIGRlc2NyaXB0aW9uLCBwcmlvcml0eSwgdGFza3MsIGlkLCBjb21wbGV0ZWQpID0+IHtcbiAgcmV0dXJuIHsgdGl0bGUsIGRlc2NyaXB0aW9uLCBwcmlvcml0eSwgdGFza3MsIGlkLCBjb21wbGV0ZWQgfTtcbn07XG5cbi8qKlxuICogQ3JlYXRlIGEgdGFzayBvYmplY3QuXG4gKiBAcGFyYW0ge1N0cmluZ30gdGl0bGUgVGl0bGUgb2YgdGhlIHRhc2tcbiAqIEBwYXJhbSB7U3RyaW5nfSBkZXNjcmlwdGlvbiBEZXNjcmlwdGlvbiBvZiB0aGUgdGFza1xuICogQHBhcmFtIHtOdW1iZXJ9IHByaW9yaXR5IFByaW9yaXR5IG9mIHRoZSB0YXNrXG4gKiBAcGFyYW0ge1N0cmluZ30gcHJvamVjdCBQcm9qZWN0IG9mIHRoZSB0YXNrXG4gKiBAcGFyYW0ge0RhdGV9IGR1ZURhdGUgRHVlIGRhdGUgb2YgdGhlIHRhc2tcbiAqIEBwYXJhbSB7Qm9vbGVhbn0gY29tcGxldGVkIFN0YXR1cyBvZiB0aGUgdGFza1xuICogQHJldHVybiB7T2JqZWN0fSBUYXNrIG9iamVjdFxuICovXG5jb25zdCB0YXNrID0gKFxuICB0aXRsZSxcbiAgZGVzY3JpcHRpb24sXG4gIHByaW9yaXR5LFxuICBwcm9qZWN0LFxuICBkdWVEYXRlLFxuICBjb21wbGV0ZWRcbikgPT4ge1xuICByZXR1cm4ge1xuICAgIHRpdGxlLFxuICAgIGRlc2NyaXB0aW9uLFxuICAgIHByaW9yaXR5LFxuICAgIHByb2plY3QsXG4gICAgZHVlRGF0ZSxcbiAgICBjb21wbGV0ZWQsXG4gIH07XG59O1xuXG5jb25zdCBwZW5kaW5nUHJvamVjdHMgPSBnZXRQZW5kaW5nUHJvamVjdHMoKTtcblxuY29uc3QgY29tcGxldGVkUHJvamVjdHMgPSBnZXRDb21wbGV0ZWRQcm9qZWN0cygpO1xuXG4vKiBEQVRBIE1BTklQVUxBVElPTiAqL1xuLyoqXG4gKiBHZXQgcHJvamVjdCBkYXRhIGZyb20gdXNlci1pbnB1dCBmb3JtLlxuICogQHJldHVybiB7dm9pZH1cbiAqL1xuZnVuY3Rpb24gZ2V0UHJvamVjdEZyb21JbnB1dCgpIHtcbiAgY29uc3QgZm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWFpbi1hZGRQcm9qZWN0Rm9ybVwiKTtcbiAgY29uc3QgdGl0bGUgPSBmb3JtLmVsZW1lbnRzW1widGl0bGVcIl0udmFsdWU7XG4gIGNvbnN0IGRlc2NyaXB0aW9uID0gZm9ybS5lbGVtZW50c1tcImRlc2NyaXB0aW9uXCJdLnZhbHVlO1xuICBjb25zdCBwcmlvcml0eSA9IHBlbmRpbmdQcm9qZWN0cy5sZW5ndGg7XG4gIGNvbnN0IHRhc2tzID0gW107XG4gIGNvbnN0IGlkID0gRGF0ZS5ub3coKTtcbiAgY29uc3QgY29tcGxldGVkID0gZmFsc2U7XG4gIHJldHVybiBwcm9qZWN0KHRpdGxlLCBkZXNjcmlwdGlvbiwgcHJpb3JpdHksIHRhc2tzLCBpZCwgY29tcGxldGVkKTtcbn1cblxuLyoqXG4gKiBBZGQgYSBuZXcgcHJvamVjdCB0byB0aGUgcGVuZGluZyBwcm9qZWN0IGxpc3QgYW5kIHJlZnJlc2ggdGhlIHByb2plY3QgbGlzdC5cbiAqIEFzc3VtZSBpbiBwZW5kaW5nIHRhYi5cbiAqIEByZXR1cm4ge3ZvaWR9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBhZGRQcm9qZWN0KCkge1xuICBjb25zdCBuZXdQcm9qZWN0ID0gZ2V0UHJvamVjdEZyb21JbnB1dCgpO1xuICBwZW5kaW5nUHJvamVjdHMucHVzaChuZXdQcm9qZWN0KTtcbiAgcmVmcmVzaFByb2plY3RMaXN0KHBlbmRpbmdQcm9qZWN0cyk7XG59XG5cbi8qKlxuICogRGVsZXRlIHRoZSB1bmRlcmx5aW5nIHByb2plY3Qgb2JqZWN0IGF0IHByb2plY3RJbmRleCBhbmQgcmVmcmVzaCB0aGUgcHJvamVjdCBsaXN0LlxuICogQ29udGV4dC1zZW5zaXRpdmU6IGlmIGluIHBlbmRpbmcgdGFiLCBkZWxldGUgZnJvbSBwZW5kaW5nUHJvamVjdHM7IGlmIGluIGFyY2hpdmUgdGFiLCBkZWxldGUgZnJvbSBjb21wbGV0ZWRQcm9qZWN0cy5cbiAqIEBwYXJhbSB7TnVtYmVyfSBwcm9qZWN0SW5kZXggSW5kZXggb2YgdGhlIHByb2plY3QgdG8gYmUgZGVsZXRlZFxuICovXG5leHBvcnQgZnVuY3Rpb24gZGVsZXRlUHJvamVjdChwcm9qZWN0SW5kZXgpIHtcbiAgY29uc3QgZGlzcGxheU1vZGUgPSBnZXREaXNwbGF5TW9kZSgpO1xuICBsZXQgd29ya0FyciA9IFtdO1xuICBpZiAoZGlzcGxheU1vZGUgPT09IFwicGVuZGluZ1wiKSB7XG4gICAgd29ya0FyciA9IHBlbmRpbmdQcm9qZWN0cztcbiAgfSBlbHNlIGlmIChkaXNwbGF5TW9kZSA9PT0gXCJhcmNoaXZlXCIpIHtcbiAgICB3b3JrQXJyID0gY29tcGxldGVkUHJvamVjdHM7XG4gIH1cbiAgd29ya0Fyci5zcGxpY2UocHJvamVjdEluZGV4LCAxKTtcbiAgcmVzZXRQcmlvcml0eSh3b3JrQXJyKTtcbiAgcmVmcmVzaFByb2plY3RMaXN0KHdvcmtBcnIpO1xufVxuXG4vKipcbiAqIFJlbW92ZSB0aGUgcHJvamVjdCBmcm9tIHRoZSBwZW5kaW5nIHByb2plY3RzIGFycmF5IGFuZCBhZGQgaXQgdG8gdGhlXG4gKiBjb21wbGV0ZWQgcHJvamVjdHMgYXJyYXkuIFVwZGF0ZSB0aGUgcHJpb3JpdHkgb2YgdGhlIHByb2plY3RzIGluIHRoZVxuICogYm90aCBwcm9qZWN0cyBhcnJheS4gUmVmcmVzaCB0aGUgcHJvamVjdCBsaXN0IGluIHRoZSBwZW5kaW5nIHRhYiBjb21wb25lbnQuXG4gKiBDb250ZXh0LXNlbnNpdGl2ZTogb25seSB3b3JrcyB3aGVuIHRoZSBkaXNwbGF5IG1vZGUgaXMgXCJwZW5kaW5nXCIuXG4gKiBAcGFyYW0ge3Byb2plY3R9IHByb2plY3RPYmogUHJvamVjdCBvYmplY3RcbiAqIEByZXR1cm4ge3ZvaWR9XG4gKiBAZXhwb3J0XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjb21wbGV0ZVByb2plY3QocHJvamVjdE9iaikge1xuICBpZiAoZ2V0RGlzcGxheU1vZGUoKSAhPT0gXCJwZW5kaW5nXCIpIHJldHVybjtcbiAgY29uc3QgcHJvamVjdEluZGV4ID0gcGVuZGluZ1Byb2plY3RzLmZpbmRJbmRleChcbiAgICAocHJvamVjdCkgPT4gcHJvamVjdC5pZCA9PT0gcHJvamVjdE9iai5pZFxuICApO1xuICBpZiAocHJvamVjdEluZGV4ID09PSAtMSkgcmV0dXJuO1xuICBwZW5kaW5nUHJvamVjdHMuc3BsaWNlKHByb2plY3RJbmRleCwgMSk7XG4gIHByb2plY3RPYmouY29tcGxldGVkID0gdHJ1ZTtcbiAgcHJvamVjdE9iai50YXNrcy5mb3JFYWNoKCh0YXNrKSA9PiAodGFzay5jb21wbGV0ZWQgPSB0cnVlKSk7XG4gIGNvbXBsZXRlZFByb2plY3RzLnB1c2gocHJvamVjdE9iaik7XG4gIHJlc2V0UHJpb3JpdHkocGVuZGluZ1Byb2plY3RzKTtcbiAgcmVzZXRQcmlvcml0eShjb21wbGV0ZWRQcm9qZWN0cyk7XG4gIHJlZnJlc2hQcm9qZWN0TGlzdChwZW5kaW5nUHJvamVjdHMpO1xufVxuXG4vKipcbiAqIFN3YXAgdGhlIHBvc2l0aW9uIG9mIHR3byBwcm9qZWN0cyBpbiB0aGUgaW5wdXQgYXJyYXkuIFVwZGF0ZSB0aGUgcHJpb3JpdHlcbiAqIG9mIHRoZSBwcm9qZWN0cyBpbiB0aGUgYXJyYXkuIFJlZnJlc2ggdGhlIHByb2plY3QgbGlzdCBpbiB0aGUgYWN0aXZlIHRhYiBjb21wb25lbnQuXG4gKiBCZWNhdXNlIG9mIHRoZSBwcm9qZWN0J3MgaW1wbGVtZW50YXRpb24sIHByaW9yaXR5IGlzIHRoZSBpbmRleCBvZiB0aGUgcHJvamVjdC5cbiAqIEBwYXJhbSB7QXJyYXl9IHByb2plY3RBcnIgQXJyYXkgb2YgcHJvamVjdHMuXG4gKiBAcGFyYW0ge051bWJlcn0gcHJpb3JpdHkxIEluZGV4IG9mIHRoZSBmaXJzdCBwcm9qZWN0XG4gKiBAcGFyYW0ge051bWJlcn0gcHJpb3JpdHkyIEluZGV4IG9mIHRoZSBzZWNvbmQgcHJvamVjdFxuICovXG5leHBvcnQgZnVuY3Rpb24gc3dhcFByb2plY3QocHJvamVjdEFyciwgcHJpb3JpdHkxLCBwcmlvcml0eTIpIHtcbiAgY29uc3QgdGVtcCA9IHByb2plY3RBcnJbcHJpb3JpdHkxXTtcbiAgcHJvamVjdEFycltwcmlvcml0eTFdID0gcHJvamVjdEFycltwcmlvcml0eTJdO1xuICBwcm9qZWN0QXJyW3ByaW9yaXR5Ml0gPSB0ZW1wO1xuICByZXNldFByaW9yaXR5KHByb2plY3RBcnIpO1xuICByZWZyZXNoUHJvamVjdExpc3QocHJvamVjdEFycik7XG59XG5cbi8qKlxuICogR2V0IHRhc2sgZGF0YSBmcm9tIHVzZXItaW5wdXQgZm9ybS5cbiAqIEBwYXJhbSB7cHJvamVjdH0gcHJvamVjdE9iaiBBc3NvY2lhdGVkIHByb2plY3Qgb2JqZWN0XG4gKiBAcmV0dXJuIHt0YXNrfSBUYXNrIG9iamVjdFxuICovXG5mdW5jdGlvbiBnZXRUYXNrRnJvbUlucHV0KHByb2plY3RPYmopIHtcbiAgY29uc3QgZm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWFpbi1hZGRUYXNrRm9ybS1cIiArIHByb2plY3RPYmouaWQpO1xuICBjb25zdCB0aXRsZSA9IGZvcm0uZWxlbWVudHNbXCJ0aXRsZVwiXS52YWx1ZTtcbiAgY29uc3QgZGVzY3JpcHRpb24gPSBmb3JtLmVsZW1lbnRzW1wiZGVzY3JpcHRpb25cIl0udmFsdWU7XG4gIGNvbnN0IHByaW9yaXR5ID0gcHJvamVjdE9iai50YXNrcy5sZW5ndGg7XG4gIGNvbnN0IGlkID0gRGF0ZS5ub3coKTtcbiAgY29uc3QgZHVlRGF0ZSA9IGZvcm0uZWxlbWVudHNbXCJkdWVEYXRlXCJdLnZhbHVlO1xuICBjb25zdCBjb21wbGV0ZWQgPSBmYWxzZTtcbiAgcmV0dXJuIHRhc2sodGl0bGUsIGRlc2NyaXB0aW9uLCBwcmlvcml0eSwgaWQsIGR1ZURhdGUsIGNvbXBsZXRlZCk7XG59XG5cbi8qKlxuICogQWRkIGEgbmV3IHRhc2sgdG8gdGhlIHByb2plY3Qgb2JqZWN0IGFuZCByZWZyZXNoIHRoZSB0YXNrIGxpc3QgaW4gdGhlIHByb2plY3QgY29tcG9uZW50LlxuICogQHBhcmFtIHtwcm9qZWN0fSBwcm9qZWN0T2JqIEFzc29jaWF0ZWQgcHJvamVjdCBvYmplY3RcbiAqIEByZXR1cm4ge3ZvaWR9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBhZGRUYXNrKHByb2plY3RPYmopIHtcbiAgY29uc3QgbmV3VGFzayA9IGdldFRhc2tGcm9tSW5wdXQocHJvamVjdE9iaik7XG4gIHByb2plY3RPYmoudGFza3MucHVzaChuZXdUYXNrKTtcbiAgaWYgKGdldFNvcnRNb2RlKHByb2plY3RPYmopID09PSBcImRhdGVcIikge1xuICAgIHNvcnRUYXNrQnlEYXRlKHByb2plY3RPYmoudGFza3MpO1xuICB9XG4gIHJlZnJlc2hUYXNrTGlzdChwcm9qZWN0T2JqKTtcbn1cblxuLyoqXG4gKiBEZWxldGUgdGhlIHVuZGVybHlpbmcgdGFzayBvYmplY3QgYXQgdGFza0luZGV4IGZyb20gdGhlIHByb2plY3Qgb2JqZWN0IGFuZCByZWZyZXNoIHRoZSB0YXNrIGxpc3QgaW4gdGhlIHByb2plY3QgY29tcG9uZW50LlxuICogQHBhcmFtIHtwcm9qZWN0fSBwcm9qZWN0T2JqIFByb2plY3Qgb2JqZWN0XG4gKiBAcGFyYW0ge051bWJlcn0gdGFza0luZGV4IEluZGV4IG9mIHRoZSB0YXNrIHRvIGJlIGRlbGV0ZWRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGRlbGV0ZVRhc2socHJvamVjdE9iaiwgdGFza0luZGV4KSB7XG4gIGNvbnN0IHRhc2tBcnIgPSBwcm9qZWN0T2JqLnRhc2tzO1xuICB0YXNrQXJyLnNwbGljZSh0YXNrSW5kZXgsIDEpO1xuICBpZiAoZ2V0U29ydE1vZGUocHJvamVjdE9iaikgPT09IFwicHJpb3JpdHlcIikge1xuICAgIHJlc2V0UHJpb3JpdHkodGFza0Fycik7XG4gIH0gZWxzZSB7XG4gICAgc29ydEFyckJ5UHJpb3JpdHkodGFza0Fycik7XG4gICAgcmVzZXRQcmlvcml0eSh0YXNrQXJyKTtcbiAgICBzb3J0VGFza0J5RGF0ZSh0YXNrQXJyKTtcbiAgfVxuICByZWZyZXNoVGFza0xpc3QocHJvamVjdE9iaik7XG59XG5cbi8qKlxuICogQ2hhbmdlIHRoZSBzdGF0dXMgb2YgdGhlIHRhc2sgdG8gY29tcGxldGVkLiBSZWZyZXNoIHRoZSB0YXNrIGxpc3QgaW4gdGhlXG4gKiBwcm9qZWN0IGNvbXBvbmVudC4gQ29udGV4dC1zZW5zaXRpdmU6IG9ubHkgd29ya3Mgd2hlbiB0aGUgZGlzcGxheSBtb2RlIGlzIFwicGVuZGluZ1wiLlxuICogQHBhcmFtIHtwcm9qZWN0fSBwcm9qZWN0T2JqIFByb2plY3Qgb2JqZWN0XG4gKiBAcGFyYW0ge051bWJlcn0gdGFza0luZGV4IEluZGV4IG9mIHRoZSB0YXNrIGluIHRoZSBwcm9qZWN0IG9iamVjdFxuICogQHJldHVybiB7dm9pZH1cbiAqIEBleHBvcnRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNvbXBsZXRlVGFzayhwcm9qZWN0T2JqLCB0YXNrSW5kZXgpIHtcbiAgaWYgKGdldERpc3BsYXlNb2RlKCkgIT09IFwicGVuZGluZ1wiKSByZXR1cm47XG4gIGNvbnN0IHByb2plY3RJbmRleCA9IHBlbmRpbmdQcm9qZWN0cy5maW5kSW5kZXgoXG4gICAgKHByb2plY3QpID0+IHByb2plY3QuaWQgPT09IHByb2plY3RPYmouaWRcbiAgKTtcbiAgaWYgKHByb2plY3RJbmRleCA9PT0gLTEpIHJldHVybjtcbiAgY29uc3QgdGFza09iaiA9IHByb2plY3RPYmoudGFza3NbdGFza0luZGV4XTtcbiAgdGFza09iai5jb21wbGV0ZWQgPSB0cnVlO1xuICByZWZyZXNoVGFza0xpc3QocHJvamVjdE9iaik7XG59XG5cbi8qKlxuICogU29ydCB0aGUgdGFza3MgaW4gdGhlIGlucHV0IGFycmF5IGJ5IGR1ZSBkYXRlLiBUYXNrcyB3aXRoIG5vIGR1ZSBkYXRlXG4gKiBhcmUgc29ydGVkIGJ5IHRoZWlyIHByaW9yaXRpZXMgYWZ0ZXIgdGhlIHRhc2tzIHdpdGggZHVlIGRhdGVzLiBUYXNrcyB3aXRoIGVhcmxpZXJcbiAqIGR1ZSBkYXRlcyBhcmUgc29ydGVkIHRvIHRoZSB0b3Agb2YgdGhlIGxpc3QuXG4gKiBAcGFyYW0ge0FycmF5fSB0YXNrcyBBcnJheSBvZiB0YXNrIG9iamVjdHNcbiAqIEByZXR1cm4ge3ZvaWR9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzb3J0VGFza0J5RGF0ZSh0YXNrcykge1xuICB0YXNrcy5zb3J0KChhLCBiKSA9PiB7XG4gICAgaWYgKGEuZHVlRGF0ZSA9PT0gXCJcIiAmJiBiLmR1ZURhdGUgPT09IFwiXCIpIHtcbiAgICAgIHJldHVybiBhLnByaW9yaXR5IC0gYi5wcmlvcml0eTtcbiAgICB9IGVsc2UgaWYgKGEuZHVlRGF0ZSA9PT0gXCJcIikge1xuICAgICAgcmV0dXJuIDE7XG4gICAgfSBlbHNlIGlmIChiLmR1ZURhdGUgPT09IFwiXCIpIHtcbiAgICAgIHJldHVybiAtMTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgYURhdGUgPSBuZXcgRGF0ZShhLmR1ZURhdGUpO1xuICAgICAgY29uc3QgYkRhdGUgPSBuZXcgRGF0ZShiLmR1ZURhdGUpO1xuICAgICAgcmV0dXJuIGFEYXRlIC0gYkRhdGU7XG4gICAgfVxuICB9KTtcbn1cblxuLyoqXG4gKiBTb3J0IHRoZSBvYmplY3RzIGluIHRoZSBpbnB1dCBhcnJheSBieSB0aGVpciBwcmlvcml0aWVzLlxuICogQHBhcmFtIHtBcnJheX0gYXJyIEFycmF5IG9mIHByb2plY3Qgb3IgdGFzayBvYmplY3RzXG4gKiBAcmV0dXJuIHt2b2lkfVxuICovXG5leHBvcnQgZnVuY3Rpb24gc29ydEFyckJ5UHJpb3JpdHkoYXJyKSB7XG4gIGFyci5zb3J0KChhLCBiKSA9PiB7XG4gICAgcmV0dXJuIGEucHJpb3JpdHkgLSBiLnByaW9yaXR5O1xuICB9KTtcbn1cblxuLyoqXG4gKiBSZXNldCB0aGUgcHJpb3JpdHkgb2YgdGhlIHByb2plY3RzL3Rhc2tzIGluIHRoZSBpbnB1dCBhcnJheS5cbiAqIEBwYXJhbSB7QXJyYXl9IGFyciBBcnJheSBvZiBwcm9qZWN0IG9yIHRhc2sgb2JqZWN0c1xuICogQHJldHVybiB7dm9pZH1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJlc2V0UHJpb3JpdHkoYXJyKSB7XG4gIGFyci5mb3JFYWNoKChlbGVtZW50LCBpKSA9PiB7XG4gICAgZWxlbWVudC5wcmlvcml0eSA9IGk7XG4gIH0pO1xufVxuXG4vKipcbiAqIEdldCB0aGUgc29ydCBtb2RlIG9mIHRoZSBwcm9qZWN0IG9iamVjdC5cbiAqIEBwYXJhbSB7cHJvamVjdH0gcHJvamVjdE9iaiBQcm9qZWN0IG9iamVjdFxuICogQHJldHVybiB7U3RyaW5nfSBTb3J0IG1vZGUgKFwicHJpb3JpdHlcIi9cImRhdGVcIilcbiAqL1xuZnVuY3Rpb24gZ2V0U29ydE1vZGUocHJvamVjdE9iaikge1xuICBjb25zdCBzb3J0QnRucyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlOYW1lKFwic29ydFRhc2stXCIgKyBwcm9qZWN0T2JqLmlkKTtcbiAgbGV0IHNvcnRNb2RlID0gXCJcIjtcbiAgc29ydEJ0bnMuZm9yRWFjaCgoYnRuKSA9PiB7XG4gICAgaWYgKGJ0bi5jaGVja2VkKSB7XG4gICAgICBzb3J0TW9kZSA9IGJ0bi52YWx1ZTtcbiAgICB9XG4gIH0pO1xuICByZXR1cm4gc29ydE1vZGU7XG59XG5cbi8qIE1BSU4gQVBQICovXG4vKipcbiAqIENyZWF0ZSBmYXZpY29uLlxuICogQHJldHVybiB7dm9pZH1cbiAqL1xuZnVuY3Rpb24gY3JlYXRlRmF2aWNvbigpIHtcbiAgbGV0IGljb25MaW5rID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImxpbmtbcmVsKj0naWNvbiddXCIpO1xuICBpZiAoIWljb25MaW5rKSB7XG4gICAgaWNvbkxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlua1wiKTtcbiAgICBpY29uTGluay5yZWwgPSBcImljb25cIjtcbiAgICBkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKGljb25MaW5rKTtcbiAgfVxuICBpY29uTGluay5ocmVmID0gZmF2aWNvbkxpbms7XG59XG5cbi8qKlxuICogUHVyZ2UgdGhlIGNvbnRlbnQgb2YgdGhlIGFjdGl2ZSB0YWIgaW4gbWFpbi5cbiAqIEByZXR1cm4ge3ZvaWR9XG4gKi9cbmZ1bmN0aW9uIHB1cmdlQWN0aXZlVGFiKCkge1xuICBjb25zdCBtYWluID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtYWluXCIpO1xuICBpZiAobWFpbi5jaGlsZHJlbi5sZW5ndGggPiAxKSB7XG4gICAgbWFpbi5yZW1vdmVDaGlsZChtYWluLmxhc3RDaGlsZCk7XG4gIH1cbn1cblxuLyoqXG4gKiBHZXQgdGhlIGRpc3BsYXkgbW9kZSBvZiB0aGUgbWFpbiBjb21wb25lbnQuXG4gKiBAcmV0dXJuIHtTdHJpbmd9IERpc3BsYXkgbW9kZSAoXCJwZW5kaW5nXCIvXCJhcmNoaXZlXCIpXG4gKi9cbmZ1bmN0aW9uIGdldERpc3BsYXlNb2RlKCkge1xuICBjb25zdCB0YWJCdG5zID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeU5hbWUoXCJtYWluLW5hdmJhclwiKTtcbiAgbGV0IGRpc3BsYXlNb2RlID0gXCJcIjtcbiAgdGFiQnRucy5mb3JFYWNoKChidG4pID0+IHtcbiAgICBpZiAoYnRuLmNoZWNrZWQpIHtcbiAgICAgIGRpc3BsYXlNb2RlID0gYnRuLnZhbHVlO1xuICAgIH1cbiAgfSk7XG4gIHJldHVybiBkaXNwbGF5TW9kZTtcbn1cblxuLyoqXG4gKiBTd2l0Y2ggYmV0d2VlbiB0YWJzLlxuICogQHJldHVybiB7dm9pZH1cbiAqL1xuZnVuY3Rpb24gdGFiU3dpdGNoKCkge1xuICBjb25zdCBtYWluID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtYWluXCIpO1xuICBjb25zdCB0YWJCdG5zID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeU5hbWUoXCJtYWluLW5hdmJhclwiKTtcbiAgbWFpbi5hcHBlbmRDaGlsZChyZW5kZXJQZW5kaW5nQ29tcG9uZW50KHBlbmRpbmdQcm9qZWN0cykpO1xuICB0YWJCdG5zLmZvckVhY2goKGJ0bikgPT4ge1xuICAgIGJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgcHVyZ2VBY3RpdmVUYWIoKTtcbiAgICAgIHN3aXRjaCAoZ2V0RGlzcGxheU1vZGUoKSkge1xuICAgICAgICBjYXNlIFwicGVuZGluZ1wiOlxuICAgICAgICAgIG1haW4uYXBwZW5kQ2hpbGQocmVuZGVyUGVuZGluZ0NvbXBvbmVudChwZW5kaW5nUHJvamVjdHMpKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBcImFyY2hpdmVcIjpcbiAgICAgICAgICBtYWluLmFwcGVuZENoaWxkKHJlbmRlckFyY2hpdmVDb21wb25lbnQoY29tcGxldGVkUHJvamVjdHMpKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9KTtcbiAgfSk7XG59XG5cbi8qKlxuICogU3RhcnQgdGhlIGFwcC5cbiAqIEByZXR1cm4ge3ZvaWR9XG4gKi9cbmZ1bmN0aW9uIHN0YXJ0QXBwKCkge1xuICBjcmVhdGVGYXZpY29uKCk7XG4gIHBhZ2VMb2FkKCk7XG4gIHRhYlN3aXRjaCgpO1xuICBzYXZlUHJvamVjdHMoKTtcbn1cblxuc3RhcnRBcHAoKTsiLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi8qIGh0dHA6Ly9tZXllcndlYi5jb20vZXJpYy90b29scy9jc3MvcmVzZXQvIFxcbiAgIHYyLjAgfCAyMDExMDEyNlxcbiAgIExpY2Vuc2U6IG5vbmUgKHB1YmxpYyBkb21haW4pXFxuKi9cXG5cXG5odG1sLCBib2R5LCBkaXYsIHNwYW4sIGFwcGxldCwgb2JqZWN0LCBpZnJhbWUsXFxuaDEsIGgyLCBoMywgaDQsIGg1LCBoNiwgcCwgYmxvY2txdW90ZSwgcHJlLFxcbmEsIGFiYnIsIGFjcm9ueW0sIGFkZHJlc3MsIGJpZywgY2l0ZSwgY29kZSxcXG5kZWwsIGRmbiwgZW0sIGltZywgaW5zLCBrYmQsIHEsIHMsIHNhbXAsXFxuc21hbGwsIHN0cmlrZSwgc3Ryb25nLCBzdWIsIHN1cCwgdHQsIHZhcixcXG5iLCB1LCBpLCBjZW50ZXIsXFxuZGwsIGR0LCBkZCwgb2wsIHVsLCBsaSxcXG5maWVsZHNldCwgZm9ybSwgbGFiZWwsIGxlZ2VuZCxcXG50YWJsZSwgY2FwdGlvbiwgdGJvZHksIHRmb290LCB0aGVhZCwgdHIsIHRoLCB0ZCxcXG5hcnRpY2xlLCBhc2lkZSwgY2FudmFzLCBkZXRhaWxzLCBlbWJlZCwgXFxuZmlndXJlLCBmaWdjYXB0aW9uLCBmb290ZXIsIGhlYWRlciwgaGdyb3VwLCBcXG5tZW51LCBuYXYsIG91dHB1dCwgcnVieSwgc2VjdGlvbiwgc3VtbWFyeSxcXG50aW1lLCBtYXJrLCBhdWRpbywgdmlkZW8ge1xcblxcdG1hcmdpbjogMDtcXG5cXHRwYWRkaW5nOiAwO1xcblxcdGJvcmRlcjogMDtcXG5cXHRmb250LXNpemU6IDEwMCU7XFxuXFx0Zm9udDogaW5oZXJpdDtcXG5cXHR2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XFxufVxcbi8qIEhUTUw1IGRpc3BsYXktcm9sZSByZXNldCBmb3Igb2xkZXIgYnJvd3NlcnMgKi9cXG5hcnRpY2xlLCBhc2lkZSwgZGV0YWlscywgZmlnY2FwdGlvbiwgZmlndXJlLCBcXG5mb290ZXIsIGhlYWRlciwgaGdyb3VwLCBtZW51LCBuYXYsIHNlY3Rpb24ge1xcblxcdGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5ib2R5IHtcXG5cXHRsaW5lLWhlaWdodDogMTtcXG59XFxub2wsIHVsIHtcXG5cXHRsaXN0LXN0eWxlOiBub25lO1xcbn1cXG5ibG9ja3F1b3RlLCBxIHtcXG5cXHRxdW90ZXM6IG5vbmU7XFxufVxcbmJsb2NrcXVvdGU6YmVmb3JlLCBibG9ja3F1b3RlOmFmdGVyLFxcbnE6YmVmb3JlLCBxOmFmdGVyIHtcXG5cXHRjb250ZW50OiAnJztcXG5cXHRjb250ZW50OiBub25lO1xcbn1cXG50YWJsZSB7XFxuXFx0Ym9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcXG5cXHRib3JkZXItc3BhY2luZzogMDtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vdG9kby1saXN0L3NyYy9zdHlsZXMvc3R5bGVzLXJlc2V0LmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTs7O0NBR0M7O0FBRUQ7Ozs7Ozs7Ozs7Ozs7Q0FhQyxTQUFTO0NBQ1QsVUFBVTtDQUNWLFNBQVM7Q0FDVCxlQUFlO0NBQ2YsYUFBYTtDQUNiLHdCQUF3QjtBQUN6QjtBQUNBLGdEQUFnRDtBQUNoRDs7Q0FFQyxjQUFjO0FBQ2Y7QUFDQTtDQUNDLGNBQWM7QUFDZjtBQUNBO0NBQ0MsZ0JBQWdCO0FBQ2pCO0FBQ0E7Q0FDQyxZQUFZO0FBQ2I7QUFDQTs7Q0FFQyxXQUFXO0NBQ1gsYUFBYTtBQUNkO0FBQ0E7Q0FDQyx5QkFBeUI7Q0FDekIsaUJBQWlCO0FBQ2xCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi8qIGh0dHA6Ly9tZXllcndlYi5jb20vZXJpYy90b29scy9jc3MvcmVzZXQvIFxcbiAgIHYyLjAgfCAyMDExMDEyNlxcbiAgIExpY2Vuc2U6IG5vbmUgKHB1YmxpYyBkb21haW4pXFxuKi9cXG5cXG5odG1sLCBib2R5LCBkaXYsIHNwYW4sIGFwcGxldCwgb2JqZWN0LCBpZnJhbWUsXFxuaDEsIGgyLCBoMywgaDQsIGg1LCBoNiwgcCwgYmxvY2txdW90ZSwgcHJlLFxcbmEsIGFiYnIsIGFjcm9ueW0sIGFkZHJlc3MsIGJpZywgY2l0ZSwgY29kZSxcXG5kZWwsIGRmbiwgZW0sIGltZywgaW5zLCBrYmQsIHEsIHMsIHNhbXAsXFxuc21hbGwsIHN0cmlrZSwgc3Ryb25nLCBzdWIsIHN1cCwgdHQsIHZhcixcXG5iLCB1LCBpLCBjZW50ZXIsXFxuZGwsIGR0LCBkZCwgb2wsIHVsLCBsaSxcXG5maWVsZHNldCwgZm9ybSwgbGFiZWwsIGxlZ2VuZCxcXG50YWJsZSwgY2FwdGlvbiwgdGJvZHksIHRmb290LCB0aGVhZCwgdHIsIHRoLCB0ZCxcXG5hcnRpY2xlLCBhc2lkZSwgY2FudmFzLCBkZXRhaWxzLCBlbWJlZCwgXFxuZmlndXJlLCBmaWdjYXB0aW9uLCBmb290ZXIsIGhlYWRlciwgaGdyb3VwLCBcXG5tZW51LCBuYXYsIG91dHB1dCwgcnVieSwgc2VjdGlvbiwgc3VtbWFyeSxcXG50aW1lLCBtYXJrLCBhdWRpbywgdmlkZW8ge1xcblxcdG1hcmdpbjogMDtcXG5cXHRwYWRkaW5nOiAwO1xcblxcdGJvcmRlcjogMDtcXG5cXHRmb250LXNpemU6IDEwMCU7XFxuXFx0Zm9udDogaW5oZXJpdDtcXG5cXHR2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XFxufVxcbi8qIEhUTUw1IGRpc3BsYXktcm9sZSByZXNldCBmb3Igb2xkZXIgYnJvd3NlcnMgKi9cXG5hcnRpY2xlLCBhc2lkZSwgZGV0YWlscywgZmlnY2FwdGlvbiwgZmlndXJlLCBcXG5mb290ZXIsIGhlYWRlciwgaGdyb3VwLCBtZW51LCBuYXYsIHNlY3Rpb24ge1xcblxcdGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5ib2R5IHtcXG5cXHRsaW5lLWhlaWdodDogMTtcXG59XFxub2wsIHVsIHtcXG5cXHRsaXN0LXN0eWxlOiBub25lO1xcbn1cXG5ibG9ja3F1b3RlLCBxIHtcXG5cXHRxdW90ZXM6IG5vbmU7XFxufVxcbmJsb2NrcXVvdGU6YmVmb3JlLCBibG9ja3F1b3RlOmFmdGVyLFxcbnE6YmVmb3JlLCBxOmFmdGVyIHtcXG5cXHRjb250ZW50OiAnJztcXG5cXHRjb250ZW50OiBub25lO1xcbn1cXG50YWJsZSB7XFxuXFx0Ym9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcXG5cXHRib3JkZXItc3BhY2luZzogMDtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiOnJvb3Qge1xcbiAgLS1wYXNzaW9uYXRlLXJlZDogMTkxLCA1LCA1NTtcXG4gIC0tbm9zdGFsZ2ljLXllbGxvdzogMjQyLCAyMzMsIDEwNztcXG4gIC0tc29mdC1ncmF5OiAyMzcsIDE5NiwgMTc4O1xcbiAgLS15ZWxsby1yYW5nZTogMjQyLCAxNzQsIDExNDtcXG4gIC0tZGFyay1ibGFjazogODksIDIsIDI7XFxuICAtLXNoYXJwLXdoaXRlOiAyNTUsIDI1NSwgMjU1O1xcbiAgLS12aXN0YS1ibHVlOiAxMzgsIDE2NiwgMTk4O1xcbiAgLS1zdGVlbC1ibHVlOiA1MCwgMTI5LCAxNzg7XFxuICAtLXlpbm1uLWJsdWU6IDU3LCA4NSwgMTU4O1xcbiAgLS1ib3JkZXItcmFkaXVzOiA4cHg7XFxuICAtLXNwYWNpbmcteHM6IDVweDtcXG4gIC0tc3BhY2luZy1zbTogMTBweDtcXG4gIC0tc3BhY2luZy1tZDogMTVweDtcXG4gIC0tc3BhY2luZy1sZzogMjBweDtcXG4gIC0tc3BhY2luZy14bDogNDBweDtcXG4gIC0tY29udGFpbmVyLXdpZHRoOiAxMjAwcHg7XFxuICAtLWZvb3Rlci1oZWlnaHQ6IDQwcHg7XFxuICAtLWJ0bi1oZWlnaHQ6IDUwcHg7XFxuICAtLXBvcHVwLWhlaWdodDogMzAwcHg7XFxuICAtLWNoZWNrYm94LXNpemU6IDIwcHg7XFxuICAtLWZuLWJ0bi13aWR0aDogMTEwcHg7XFxuICAtLXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjE2KSAwcHggMXB4IDRweDtcXG59XFxuXFxuLyogR0xPQkFMICovXFxuaHRtbCB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgaGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG4qLFxcbio6YmVmb3JlLFxcbio6YWZ0ZXIge1xcbiAgYm94LXNpemluZzogaW5oZXJpdDtcXG59XFxuXFxuYm9keSB7XFxuICBtaW4taGVpZ2h0OiAxMDAlO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogYXV0byAxZnIgYXV0bztcXG59XFxuXFxuLyogSEVBREVSICovXFxuLmhlYWRlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKHZhcigtLW5vc3RhbGdpYy15ZWxsb3cpLCAwLjgpO1xcbiAgYm94LXNoYWRvdzogdmFyKC0tc2hhZG93KTtcXG59XFxuXFxuLmhlYWRlci1jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgbWF4LXdpZHRoOiB2YXIoLS1jb250YWluZXItd2lkdGgpO1xcbiAgcGFkZGluZzogdmFyKC0tc3BhY2luZy1sZyk7XFxufVxcblxcbi5oZWFkZXItdGl0bGUge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJSb2JvdG9cXFwiLCBzYW5zLXNlcmlmO1xcbiAgY29sb3I6IHJnYmEodmFyKC0teWlubW4tYmx1ZSksIDEpO1xcbiAgZm9udC1zaXplOiAxLjVyZW07XFxufVxcblxcbi8qIE1BSU4gKi9cXG4ubWFpbiB7XFxuICBmb250LWZhbWlseTogXFxcIlJvYm90b1xcXCIsIHNhbnMtc2VyaWY7XFxuICBmb250LXNpemU6IDEuMXJlbTtcXG4gIGNvbG9yOiByZ2JhKHZhcigtLWRhcmstYmxhY2spLCAxKTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgbWF4LXdpZHRoOiB2YXIoLS1jb250YWluZXItd2lkdGgpO1xcbiAgbWFyZ2luOiAwIGF1dG87XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKHZhcigtLXllbGxvLXJhbmdlKSwgMC44KTtcXG59XFxuXFxuLm1haW4taWNvbnMge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgdG9wOiAwLjEyNWVtO1xcbiAgaGVpZ2h0OiAxZW07XFxuICB3aWR0aDogMWVtO1xcbiAgbWFyZ2luLWxlZnQ6IHZhcigtLXNwYWNpbmcteHMpO1xcbn1cXG5cXG4vKiBNQUlOIC0gTkFWQkFSICovXFxuLm1haW4tbmF2YmFyIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiB2YXIoLS1idG4taGVpZ2h0KTtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCAxZnIpO1xcbiAgYm94LXNoYWRvdzogdmFyKC0tc2hhZG93KTtcXG59XFxuXFxuLm1haW4tbmF2YmFyLWl0ZW0ge1xcbiAgYXBwZWFyYW5jZTogbm9uZTtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5tYWluLW5hdmJhci1pdGVtTGFiZWwge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLm1haW4tbmF2YmFyLWl0ZW06Y2hlY2tlZCArIGxhYmVsIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEodmFyKC0tbm9zdGFsZ2ljLXllbGxvdyksIDAuOCk7XFxufVxcblxcbi8qIE1BSU4gLSBBQ1RJVkUgVEFCICovXFxuLm1haW4tYWN0aXZlVGFiIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgZmxleDogMTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLyogTUFJTiAtIEFERCBQUk9KRUNUICovXFxuLm1haW4tYWRkUHJvamVjdEJ0biB7XFxuICBoZWlnaHQ6IHZhcigtLWJ0bi1oZWlnaHQpO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBmb250LWZhbWlseTogXFxcIlJvYm90b1xcXCIsIHNhbnMtc2VyaWY7XFxuICBjb2xvcjogcmdiYSh2YXIoLS15aW5tbi1ibHVlLCAxKSk7XFxuICBmb250LXNpemU6IDEuMXJlbTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEodmFyKC0tbm9zdGFsZ2ljLXllbGxvdyksIDAuNSk7XFxuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dDtcXG59XFxuXFxuLm1haW4tYWRkUHJvamVjdEJ0bjpob3ZlcixcXG4ubWFpbi1hZGRQcm9qZWN0QnRuOmFjdGl2ZSxcXG4ubWFpbi1hZGRQcm9qZWN0QnRuOmZvY3VzIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEodmFyKC0tbm9zdGFsZ2ljLXllbGxvdyksIDAuOCk7XFxufVxcblxcbi5tYWluLWFkZFByb2plY3RGb3JtIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiB2YXIoLS1wb3B1cC1oZWlnaHQpO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogYXV0byAxZnIgYXV0bztcXG4gIGdhcDogdmFyKC0tc3BhY2luZy1zbSk7XFxuICBwYWRkaW5nOiB2YXIoLS1zcGFjaW5nLXNtKTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEodmFyKC0tbm9zdGFsZ2ljLXllbGxvdyksIDAuOCk7XFxufVxcblxcbi5tYWluLWFkZFByb2plY3RGb3JtLXRpdGxlLFxcbi5tYWluLWFkZFByb2plY3RGb3JtLWRlc2NyaXB0aW9uIHtcXG4gIGdyaWQtY29sdW1uOiAxIC8gLTE7XFxuICBib3JkZXI6IG5vbmU7XFxuICBwYWRkaW5nOiB2YXIoLS1zcGFjaW5nLXNtKTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEodmFyKC0tc29mdC1ncmF5KSwgMC44KTtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiUm9ib3RvXFxcIiwgc2Fucy1zZXJpZjtcXG4gIGNvbG9yOiByZ2JhKHZhcigtLWRhcmstYmxhY2spLCAxKTtcXG4gIGZvbnQtc2l6ZTogMS4xcmVtO1xcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7XFxufVxcblxcbi5tYWluLWFkZFByb2plY3RGb3JtLXRpdGxlOmZvY3VzLFxcbi5tYWluLWFkZFByb2plY3RGb3JtLXRpdGxlOmFjdGl2ZSxcXG4ubWFpbi1hZGRQcm9qZWN0Rm9ybS1kZXNjcmlwdGlvbjpmb2N1cyxcXG4ubWFpbi1hZGRQcm9qZWN0Rm9ybS1kZXNjcmlwdGlvbjphY3RpdmUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSh2YXIoLS1ub3N0YWxnaWMteWVsbG93KSwgMC44KTtcXG59XFxuXFxuLm1haW4tYWRkUHJvamVjdEZvcm0tZGVzY3JpcHRpb24ge1xcbiAgcmVzaXplOiBub25lO1xcbn1cXG5cXG4ubWFpbi1hZGRQcm9qZWN0Rm9ybS1jb25maXJtLFxcbi5tYWluLWFkZFByb2plY3RGb3JtLWNhbmNlbCB7XFxuICBoZWlnaHQ6IHZhcigtLWJ0bi1oZWlnaHQpO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJSb2JvdG9cXFwiLCBzYW5zLXNlcmlmO1xcbiAgY29sb3I6IHJnYmEodmFyKC0tZGFyay1ibGFjayksIDEpO1xcbiAgZm9udC1zaXplOiAxLjFyZW07XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dDtcXG59XFxuXFxuLm1haW4tYWRkUHJvamVjdEZvcm0tY29uZmlybSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKHZhcigtLXllbGxvLXJhbmdlKSwgMC41KTtcXG59XFxuXFxuLm1haW4tYWRkUHJvamVjdEZvcm0tY29uZmlybTpob3ZlcixcXG4ubWFpbi1hZGRQcm9qZWN0Rm9ybS1jb25maXJtOmFjdGl2ZSxcXG4ubWFpbi1hZGRQcm9qZWN0Rm9ybS1jb25maXJtOmZvY3VzIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEodmFyKC0tbm9zdGFsZ2ljLXllbGxvdyksIDAuOCk7XFxufVxcblxcbi5tYWluLWFkZFByb2plY3RGb3JtLWNhbmNlbCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKHZhcigtLXNvZnQtZ3JheSksIDAuOCk7XFxufVxcblxcbi5tYWluLWFkZFByb2plY3RGb3JtLWNhbmNlbDpob3ZlcixcXG4ubWFpbi1hZGRQcm9qZWN0Rm9ybS1jYW5jZWw6YWN0aXZlLFxcbi5tYWluLWFkZFByb2plY3RGb3JtLWNhbmNlbDpmb2N1cyB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKHZhcigtLXNvZnQtZ3JheSksIDEpO1xcbn1cXG5cXG4vKiBNQUlOIC0gQUREIFRBU0sgKi9cXG4ubWFpbi1hZGRUYXNrRm9ybSB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogdmFyKC0tcG9wdXAtaGVpZ2h0KTtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG8gMWZyIGF1dG8gYXV0bztcXG4gIGdhcDogdmFyKC0tc3BhY2luZy1zbSk7XFxuICBwYWRkaW5nOiB2YXIoLS1zcGFjaW5nLXNtKTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEodmFyKC0tbm9zdGFsZ2ljLXllbGxvdyksIDAuOCk7XFxufVxcblxcbi5tYWluLWFkZFRhc2tGb3JtLXRpdGxlLFxcbi5tYWluLWFkZFRhc2tGb3JtLWRlc2NyaXB0aW9uLFxcbi5tYWluLWFkZFRhc2tGb3JtLWRhdGUge1xcbiAgZ3JpZC1jb2x1bW46IDEgLyAtMTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIHBhZGRpbmc6IHZhcigtLXNwYWNpbmctc20pO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSh2YXIoLS1zb2Z0LWdyYXkpLCAwLjgpO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJSb2JvdG9cXFwiLCBzYW5zLXNlcmlmO1xcbiAgY29sb3I6IHJnYmEodmFyKC0tZGFyay1ibGFjayksIDEpO1xcbiAgZm9udC1zaXplOiAxcmVtO1xcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7XFxufVxcblxcbi5tYWluLWFkZFRhc2tGb3JtLXRpdGxlOmZvY3VzLFxcbi5tYWluLWFkZFRhc2tGb3JtLXRpdGxlOmFjdGl2ZSxcXG4ubWFpbi1hZGRUYXNrRm9ybS1kZXNjcmlwdGlvbjpmb2N1cyxcXG4ubWFpbi1hZGRUYXNrRm9ybS1kZXNjcmlwdGlvbjphY3RpdmUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSh2YXIoLS1ub3N0YWxnaWMteWVsbG93KSwgMC44KTtcXG59XFxuXFxuLm1haW4tYWRkVGFza0Zvcm0tZGVzY3JpcHRpb24ge1xcbiAgcmVzaXplOiBub25lO1xcbn1cXG5cXG4ubWFpbi1hZGRUYXNrRm9ybS1jb25maXJtLFxcbi5tYWluLWFkZFRhc2tGb3JtLWNhbmNlbCB7XFxuICBoZWlnaHQ6IHZhcigtLWJ0bi1oZWlnaHQpO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJSb2JvdG9cXFwiLCBzYW5zLXNlcmlmO1xcbiAgY29sb3I6IHJnYmEodmFyKC0tZGFyay1ibGFjayksIDEpO1xcbiAgZm9udC1zaXplOiAxcmVtO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7XFxufVxcblxcbi5tYWluLWFkZFRhc2tGb3JtLWNvbmZpcm0ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSh2YXIoLS15ZWxsby1yYW5nZSksIDAuNSk7XFxufVxcblxcbi5tYWluLWFkZFRhc2tGb3JtLWNvbmZpcm06aG92ZXIsXFxuLm1haW4tYWRkVGFza0Zvcm0tY29uZmlybTphY3RpdmUsXFxuLm1haW4tYWRkVGFza0Zvcm0tY29uZmlybTpmb2N1cyB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKHZhcigtLW5vc3RhbGdpYy15ZWxsb3cpLCAwLjgpO1xcbn1cXG5cXG4ubWFpbi1hZGRUYXNrRm9ybS1jYW5jZWwge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSh2YXIoLS1zb2Z0LWdyYXkpLCAwLjgpO1xcbn1cXG5cXG4ubWFpbi1hZGRUYXNrRm9ybS1jYW5jZWw6aG92ZXIsXFxuLm1haW4tYWRkVGFza0Zvcm0tY2FuY2VsOmFjdGl2ZSxcXG4ubWFpbi1hZGRUYXNrRm9ybS1jYW5jZWw6Zm9jdXMge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSh2YXIoLS1zb2Z0LWdyYXkpLCAxKTtcXG59XFxuXFxuLyogTUFJTiAtIFRPRE8gTElTVCAqL1xcbi5tYWluLXByb2plY3RMaXN0IHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgZmxleDogMTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiB2YXIoLS1zcGFjaW5nLWxnKTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEodmFyKC0teWVsbG8tcmFuZ2UpLCAwLjgpO1xcbiAgcGFkZGluZzogdmFyKC0tc3BhY2luZy1sZyk7XFxufVxcblxcbi5tYWluLXByb2plY3Qge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKHZhcigtLXNvZnQtZ3JheSksIDAuOCk7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvIDFmciBhdXRvIGF1dG87XFxuICBhbGlnbi1pdGVtczogc3RhcnQ7XFxuICBnYXA6IHZhcigtLXNwYWNpbmctc20pO1xcbiAgcGFkZGluZzogdmFyKC0tc3BhY2luZy1zbSk7XFxuICBjdXJzb3I6IGdyYWI7XFxufVxcblxcbi5tYWluLXByb2plY3QtdGl0bGUsXFxuLm1haW4tdGFzay10aXRsZSxcXG4ubWFpbi10YXNrLWRhdGUge1xcbiAgbWFyZ2luLXRvcDogMC4xNWVtO1xcbiAgb3ZlcmZsb3ctd3JhcDogYnJlYWstd29yZDtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiUm9ib3RvXFxcIiwgc2Fucy1zZXJpZjtcXG4gIGNvbG9yOiByZ2JhKHZhcigtLWRhcmstYmxhY2spLCAxKTtcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0O1xcbn1cXG5cXG4ubWFpbi1wcm9qZWN0LXNvcnRUYXNrV3JhcHBlciB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGdyaWQtY29sdW1uOiAxIC8gLTE7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xcbiAgZ2FwOiB2YXIoLS1zcGFjaW5nLXNtKTtcXG4gIGhlaWdodDogdmFyKC0tYnRuLWhlaWdodCk7XFxufVxcblxcbi5tYWluLXByb2plY3Qtc29ydEJ0biB7XFxuICBkaXNwbGF5OiBub25lO1xcbiAgYXBwZWFyYW5jZTogbm9uZTtcXG59XFxuXFxuLm1haW4tcHJvamVjdC1zb3J0TGFiZWwge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEodmFyKC0tbm9zdGFsZ2ljLXllbGxvdyksIDAuNSk7XFxuICB0cmFuc2l0aW9uOiAwLjNzIGVhc2UtaW4tb3V0O1xcbn1cXG5cXG4ubWFpbi1wcm9qZWN0LXNvcnRCdG46Y2hlY2tlZCArIC5tYWluLXByb2plY3Qtc29ydExhYmVsIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEodmFyKC0tbm9zdGFsZ2ljLXllbGxvdyksIDAuOCk7XFxuICB0cmFuc2l0aW9uOiAwLjNzO1xcbn1cXG5cXG4ubWFpbi1hZGRUYXNrQnRuIHtcXG4gIGdyaWQtY29sdW1uOiAyIC8gLTE7XFxuICBoZWlnaHQ6IGNhbGModmFyKC0tYnRuLWhlaWdodCkgLyAyKTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJSb2JvdG9cXFwiLCBzYW5zLXNlcmlmO1xcbiAgY29sb3I6IHJnYmEodmFyKC0teWlubW4tYmx1ZSwgMSkpO1xcbiAgZm9udC1zaXplOiAwLjhyZW07XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBib3JkZXI6IG5vbmU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKHZhcigtLW5vc3RhbGdpYy15ZWxsb3cpLCAwLjUpO1xcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7XFxufVxcblxcbi5tYWluLWFkZFRhc2tCdG46aG92ZXIsXFxuLm1haW4tYWRkVGFza0J0bjphY3RpdmUsXFxuLm1haW4tYWRkVGFza0J0bjpmb2N1cyB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKHZhcigtLW5vc3RhbGdpYy15ZWxsb3cpLCAwLjgpO1xcbn1cXG5cXG4ubWFpbi1wcm9qZWN0LXRhc2tMaXN0IHtcXG4gIGdyaWQtY29sdW1uOiAyIC8gLTE7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogdmFyKC0tc3BhY2luZy1zbSk7XFxufVxcblxcbi5tYWluLXRhc2sge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0byAxZnIgYXV0byBhdXRvIGF1dG87XFxuICBhbGlnbi1pdGVtczogc3RhcnQ7XFxuICBnYXA6IHZhcigtLXNwYWNpbmctc20pO1xcbn1cXG5cXG4ubWFpbi1wcm9qZWN0LWRlc2NyaXB0aW9uLFxcbi5tYWluLXRhc2stZGVzY3JpcHRpb24ge1xcbiAgZGlzcGxheTogbm9uZTtcXG4gIGZvbnQtc2l6ZTogMC45cmVtO1xcbn1cXG5cXG4ubWFpbi1wcm9qZWN0LWRlc2NyaXB0aW9uLmFjdGl2ZSxcXG4ubWFpbi10YXNrLWRlc2NyaXB0aW9uLmFjdGl2ZSB7XFxuICBkaXNwbGF5OiBibG9jaztcXG59XFxuXFxuLm1haW4tcHJvamVjdCBidXR0b24ge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJSb2JvdG9cXFwiLCBzYW5zLXNlcmlmO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSh2YXIoLS1ub3N0YWxnaWMteWVsbG93KSwgMC41KTtcXG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0O1xcbn1cXG5cXG4ubWFpbi1wcm9qZWN0IGJ1dHRvbjpob3ZlcixcXG4ubWFpbi1wcm9qZWN0IGJ1dHRvbjphY3RpdmUsXFxuLm1haW4tcHJvamVjdCBidXR0b246Zm9jdXMge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSh2YXIoLS1ub3N0YWxnaWMteWVsbG93KSwgMC44KTtcXG59XFxuXFxuLm1haW4tcHJvamVjdC1leHBhbmRCdG4sXFxuLm1haW4tcHJvamVjdC1kZWxldGVCdG4sXFxuLm1haW4tdGFzay1leHBhbmRCdG4sXFxuLm1haW4tdGFzay1kZWxldGVCdG4ge1xcbiAgd2lkdGg6IHZhcigtLWZuLWJ0bi13aWR0aCk7XFxufVxcblxcbi5tYWluLXByb2plY3QtY2hlY2tib3gsXFxuLm1haW4tdGFzay1jaGVja2JveCB7XFxuICBtYXJnaW46IDA7XFxuICB3aWR0aDogdmFyKC0tY2hlY2tib3gtc2l6ZSk7XFxuICBoZWlnaHQ6IHZhcigtLWNoZWNrYm94LXNpemUpO1xcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSh2YXIoLS1kYXJrLWJsYWNrKSwgMSk7XFxuICBib3JkZXItcmFkaXVzOiB2YXIoLS1ib3JkZXItcmFkaXVzKTtcXG4gIGFjY2VudC1jb2xvcjogcmdiYSh2YXIoLS1wYXNzaW9uYXRlLXJlZCksIDEpO1xcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi8qIEZPT1RFUiAqL1xcbi5mb290ZXIge1xcbiAgcGFkZGluZy1ib3R0b206IHZhcigtLXNwYWNpbmcteHMpO1xcbiAgaGVpZ2h0OiB2YXIoLS1mb290ZXItaGVpZ2h0KTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEodmFyKC0tc29mdC1ncmF5KSwgMC44KTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBnYXA6IDEwcHg7XFxuICB3aWR0aDogMTAwJTtcXG4gIGdyaWQtcm93OiAzIC8gNDtcXG59XFxuXFxuLmZhLWdpdGh1YiB7XFxuICBmb250LXNpemU6IDIwcHg7XFxuICBtYXJnaW4tdG9wOiA0cHg7XFxuICBjb2xvcjogYmxhY2s7XFxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4zcyBlYXNlLWluLW91dDtcXG59XFxuXFxuLmZhLWdpdGh1Yjpob3ZlciB7XFxuICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpIHNjYWxlKDEuMik7XFxufVxcblxcbi8qIE1FRElBIFFVRVJJRVMgKi9cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1MDBweCkge1xcbiAgLm1haW4tcHJvamVjdC1leHBhbmRCdG4gc3BhbixcXG4gIC5tYWluLXByb2plY3QtZGVsZXRlQnRuIHNwYW4sXFxuICAubWFpbi10YXNrLWV4cGFuZEJ0biBzcGFuLFxcbiAgLm1haW4tdGFzay1kZWxldGVCdG4gc3BhbiB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICB9XFxuXFxuICAubWFpbi1pY29ucyB7XFxuICAgIG1hcmdpbjogMDtcXG4gIH1cXG5cXG4gIC5tYWluLXByb2plY3QtZXhwYW5kQnRuLFxcbiAgLm1haW4tcHJvamVjdC1kZWxldGVCdG4sXFxuICAubWFpbi10YXNrLWV4cGFuZEJ0bixcXG4gIC5tYWluLXRhc2stZGVsZXRlQnRuIHtcXG4gICAgd2lkdGg6IGF1dG87XFxuICB9XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3RvZG8tbGlzdC9zcmMvc3R5bGVzL3N0eWxlcy5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSw0QkFBNEI7RUFDNUIsaUNBQWlDO0VBQ2pDLDBCQUEwQjtFQUMxQiw0QkFBNEI7RUFDNUIsc0JBQXNCO0VBQ3RCLDRCQUE0QjtFQUM1QiwyQkFBMkI7RUFDM0IsMEJBQTBCO0VBQzFCLHlCQUF5QjtFQUN6QixvQkFBb0I7RUFDcEIsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQix5QkFBeUI7RUFDekIscUJBQXFCO0VBQ3JCLGtCQUFrQjtFQUNsQixxQkFBcUI7RUFDckIscUJBQXFCO0VBQ3JCLHFCQUFxQjtFQUNyQix5Q0FBeUM7QUFDM0M7O0FBRUEsV0FBVztBQUNYO0VBQ0Usc0JBQXNCO0VBQ3RCLFlBQVk7QUFDZDs7QUFFQTs7O0VBR0UsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGFBQWE7RUFDYixpQ0FBaUM7QUFDbkM7O0FBRUEsV0FBVztBQUNYO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixvREFBb0Q7RUFDcEQseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsV0FBVztFQUNYLGlDQUFpQztFQUNqQywwQkFBMEI7QUFDNUI7O0FBRUE7RUFDRSxpQ0FBaUM7RUFDakMsaUNBQWlDO0VBQ2pDLGlCQUFpQjtBQUNuQjs7QUFFQSxTQUFTO0FBQ1Q7RUFDRSxpQ0FBaUM7RUFDakMsaUJBQWlCO0VBQ2pCLGlDQUFpQztFQUNqQyxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLG1CQUFtQjtFQUNuQixXQUFXO0VBQ1gsaUNBQWlDO0VBQ2pDLGNBQWM7RUFDZCwrQ0FBK0M7QUFDakQ7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIs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WTtFQUNaLHNDQUFzQztBQUN4Qzs7QUFFQTtFQUNFLG9DQUFvQztBQUN0Qzs7QUFFQSxrQkFBa0I7QUFDbEI7RUFDRTs7OztJQUlFLGFBQWE7RUFDZjs7RUFFQTtJQUNFLFNBQVM7RUFDWDs7RUFFQTs7OztJQUlFLFdBQVc7RUFDYjtBQUNGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIjpyb290IHtcXG4gIC0tcGFzc2lvbmF0ZS1yZWQ6IDE5MSwgNSwgNTU7XFxuICAtLW5vc3RhbGdpYy15ZWxsb3c6IDI0MiwgMjMzLCAxMDc7XFxuICAtLXNvZnQtZ3JheTogMjM3LCAxOTYsIDE3ODtcXG4gIC0teWVsbG8tcmFuZ2U6IDI0MiwgMTc0LCAxMTQ7XFxuICAtLWRhcmstYmxhY2s6IDg5LCAyLCAyO1xcbiAgLS1zaGFycC13aGl0ZTogMjU1LCAyNTUsIDI1NTtcXG4gIC0tdmlzdGEtYmx1ZTogMTM4LCAxNjYsIDE5ODtcXG4gIC0tc3RlZWwtYmx1ZTogNTAsIDEyOSwgMTc4O1xcbiAgLS15aW5tbi1ibHVlOiA1NywgODUsIDE1ODtcXG4gIC0tYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgLS1zcGFjaW5nLXhzOiA1cHg7XFxuICAtLXNwYWNpbmctc206IDEwcHg7XFxuICAtLXNwYWNpbmctbWQ6IDE1cHg7XFxuICAtLXNwYWNpbmctbGc6IDIwcHg7XFxuICAtLXNwYWNpbmcteGw6IDQwcHg7XFxuICAtLWNvbnRhaW5lci13aWR0aDogMTIwMHB4O1xcbiAgLS1mb290ZXItaGVpZ2h0OiA0MHB4O1xcbiAgLS1idG4taGVpZ2h0OiA1MHB4O1xcbiAgLS1wb3B1cC1oZWlnaHQ6IDMwMHB4O1xcbiAgLS1jaGVja2JveC1zaXplOiAyMHB4O1xcbiAgLS1mbi1idG4td2lkdGg6IDExMHB4O1xcbiAgLS1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4xNikgMHB4IDFweCA0cHg7XFxufVxcblxcbi8qIEdMT0JBTCAqL1xcbmh0bWwge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIGhlaWdodDogMTAwJTtcXG59XFxuXFxuKixcXG4qOmJlZm9yZSxcXG4qOmFmdGVyIHtcXG4gIGJveC1zaXppbmc6IGluaGVyaXQ7XFxufVxcblxcbmJvZHkge1xcbiAgbWluLWhlaWdodDogMTAwJTtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG8gMWZyIGF1dG87XFxufVxcblxcbi8qIEhFQURFUiAqL1xcbi5oZWFkZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSh2YXIoLS1ub3N0YWxnaWMteWVsbG93KSwgMC44KTtcXG4gIGJveC1zaGFkb3c6IHZhcigtLXNoYWRvdyk7XFxufVxcblxcbi5oZWFkZXItY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICB3aWR0aDogMTAwJTtcXG4gIG1heC13aWR0aDogdmFyKC0tY29udGFpbmVyLXdpZHRoKTtcXG4gIHBhZGRpbmc6IHZhcigtLXNwYWNpbmctbGcpO1xcbn1cXG5cXG4uaGVhZGVyLXRpdGxlIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiUm9ib3RvXFxcIiwgc2Fucy1zZXJpZjtcXG4gIGNvbG9yOiByZ2JhKHZhcigtLXlpbm1uLWJsdWUpLCAxKTtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbn1cXG5cXG4vKiBNQUlOICovXFxuLm1haW4ge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJSb2JvdG9cXFwiLCBzYW5zLXNlcmlmO1xcbiAgZm9udC1zaXplOiAxLjFyZW07XFxuICBjb2xvcjogcmdiYSh2YXIoLS1kYXJrLWJsYWNrKSwgMSk7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB3aWR0aDogMTAwJTtcXG4gIG1heC13aWR0aDogdmFyKC0tY29udGFpbmVyLXdpZHRoKTtcXG4gIG1hcmdpbjogMCBhdXRvO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSh2YXIoLS15ZWxsby1yYW5nZSksIDAuOCk7XFxufVxcblxcbi5tYWluLWljb25zIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHRvcDogMC4xMjVlbTtcXG4gIGhlaWdodDogMWVtO1xcbiAgd2lkdGg6IDFlbTtcXG4gIG1hcmdpbi1sZWZ0OiB2YXIoLS1zcGFjaW5nLXhzKTtcXG59XFxuXFxuLyogTUFJTiAtIE5BVkJBUiAqL1xcbi5tYWluLW5hdmJhciB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogdmFyKC0tYnRuLWhlaWdodCk7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgMWZyKTtcXG4gIGJveC1zaGFkb3c6IHZhcigtLXNoYWRvdyk7XFxufVxcblxcbi5tYWluLW5hdmJhci1pdGVtIHtcXG4gIGFwcGVhcmFuY2U6IG5vbmU7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4ubWFpbi1uYXZiYXItaXRlbUxhYmVsIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5tYWluLW5hdmJhci1pdGVtOmNoZWNrZWQgKyBsYWJlbCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKHZhcigtLW5vc3RhbGdpYy15ZWxsb3cpLCAwLjgpO1xcbn1cXG5cXG4vKiBNQUlOIC0gQUNUSVZFIFRBQiAqL1xcbi5tYWluLWFjdGl2ZVRhYiB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGZsZXg6IDE7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi8qIE1BSU4gLSBBREQgUFJPSkVDVCAqL1xcbi5tYWluLWFkZFByb2plY3RCdG4ge1xcbiAgaGVpZ2h0OiB2YXIoLS1idG4taGVpZ2h0KTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJSb2JvdG9cXFwiLCBzYW5zLXNlcmlmO1xcbiAgY29sb3I6IHJnYmEodmFyKC0teWlubW4tYmx1ZSwgMSkpO1xcbiAgZm9udC1zaXplOiAxLjFyZW07XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBib3JkZXI6IG5vbmU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKHZhcigtLW5vc3RhbGdpYy15ZWxsb3cpLCAwLjUpO1xcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7XFxufVxcblxcbi5tYWluLWFkZFByb2plY3RCdG46aG92ZXIsXFxuLm1haW4tYWRkUHJvamVjdEJ0bjphY3RpdmUsXFxuLm1haW4tYWRkUHJvamVjdEJ0bjpmb2N1cyB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKHZhcigtLW5vc3RhbGdpYy15ZWxsb3cpLCAwLjgpO1xcbn1cXG5cXG4ubWFpbi1hZGRQcm9qZWN0Rm9ybSB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogdmFyKC0tcG9wdXAtaGVpZ2h0KTtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG8gMWZyIGF1dG87XFxuICBnYXA6IHZhcigtLXNwYWNpbmctc20pO1xcbiAgcGFkZGluZzogdmFyKC0tc3BhY2luZy1zbSk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKHZhcigtLW5vc3RhbGdpYy15ZWxsb3cpLCAwLjgpO1xcbn1cXG5cXG4ubWFpbi1hZGRQcm9qZWN0Rm9ybS10aXRsZSxcXG4ubWFpbi1hZGRQcm9qZWN0Rm9ybS1kZXNjcmlwdGlvbiB7XFxuICBncmlkLWNvbHVtbjogMSAvIC0xO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgcGFkZGluZzogdmFyKC0tc3BhY2luZy1zbSk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKHZhcigtLXNvZnQtZ3JheSksIDAuOCk7XFxuICBmb250LWZhbWlseTogXFxcIlJvYm90b1xcXCIsIHNhbnMtc2VyaWY7XFxuICBjb2xvcjogcmdiYSh2YXIoLS1kYXJrLWJsYWNrKSwgMSk7XFxuICBmb250LXNpemU6IDEuMXJlbTtcXG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0O1xcbn1cXG5cXG4ubWFpbi1hZGRQcm9qZWN0Rm9ybS10aXRsZTpmb2N1cyxcXG4ubWFpbi1hZGRQcm9qZWN0Rm9ybS10aXRsZTphY3RpdmUsXFxuLm1haW4tYWRkUHJvamVjdEZvcm0tZGVzY3JpcHRpb246Zm9jdXMsXFxuLm1haW4tYWRkUHJvamVjdEZvcm0tZGVzY3JpcHRpb246YWN0aXZlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEodmFyKC0tbm9zdGFsZ2ljLXllbGxvdyksIDAuOCk7XFxufVxcblxcbi5tYWluLWFkZFByb2plY3RGb3JtLWRlc2NyaXB0aW9uIHtcXG4gIHJlc2l6ZTogbm9uZTtcXG59XFxuXFxuLm1haW4tYWRkUHJvamVjdEZvcm0tY29uZmlybSxcXG4ubWFpbi1hZGRQcm9qZWN0Rm9ybS1jYW5jZWwge1xcbiAgaGVpZ2h0OiB2YXIoLS1idG4taGVpZ2h0KTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiUm9ib3RvXFxcIiwgc2Fucy1zZXJpZjtcXG4gIGNvbG9yOiByZ2JhKHZhcigtLWRhcmstYmxhY2spLCAxKTtcXG4gIGZvbnQtc2l6ZTogMS4xcmVtO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7XFxufVxcblxcbi5tYWluLWFkZFByb2plY3RGb3JtLWNvbmZpcm0ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSh2YXIoLS15ZWxsby1yYW5nZSksIDAuNSk7XFxufVxcblxcbi5tYWluLWFkZFByb2plY3RGb3JtLWNvbmZpcm06aG92ZXIsXFxuLm1haW4tYWRkUHJvamVjdEZvcm0tY29uZmlybTphY3RpdmUsXFxuLm1haW4tYWRkUHJvamVjdEZvcm0tY29uZmlybTpmb2N1cyB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKHZhcigtLW5vc3RhbGdpYy15ZWxsb3cpLCAwLjgpO1xcbn1cXG5cXG4ubWFpbi1hZGRQcm9qZWN0Rm9ybS1jYW5jZWwge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSh2YXIoLS1zb2Z0LWdyYXkpLCAwLjgpO1xcbn1cXG5cXG4ubWFpbi1hZGRQcm9qZWN0Rm9ybS1jYW5jZWw6aG92ZXIsXFxuLm1haW4tYWRkUHJvamVjdEZvcm0tY2FuY2VsOmFjdGl2ZSxcXG4ubWFpbi1hZGRQcm9qZWN0Rm9ybS1jYW5jZWw6Zm9jdXMge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSh2YXIoLS1zb2Z0LWdyYXkpLCAxKTtcXG59XFxuXFxuLyogTUFJTiAtIEFERCBUQVNLICovXFxuLm1haW4tYWRkVGFza0Zvcm0ge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IHZhcigtLXBvcHVwLWhlaWdodCk7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvIDFmciBhdXRvIGF1dG87XFxuICBnYXA6IHZhcigtLXNwYWNpbmctc20pO1xcbiAgcGFkZGluZzogdmFyKC0tc3BhY2luZy1zbSk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKHZhcigtLW5vc3RhbGdpYy15ZWxsb3cpLCAwLjgpO1xcbn1cXG5cXG4ubWFpbi1hZGRUYXNrRm9ybS10aXRsZSxcXG4ubWFpbi1hZGRUYXNrRm9ybS1kZXNjcmlwdGlvbixcXG4ubWFpbi1hZGRUYXNrRm9ybS1kYXRlIHtcXG4gIGdyaWQtY29sdW1uOiAxIC8gLTE7XFxuICBib3JkZXI6IG5vbmU7XFxuICBwYWRkaW5nOiB2YXIoLS1zcGFjaW5nLXNtKTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEodmFyKC0tc29mdC1ncmF5KSwgMC44KTtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiUm9ib3RvXFxcIiwgc2Fucy1zZXJpZjtcXG4gIGNvbG9yOiByZ2JhKHZhcigtLWRhcmstYmxhY2spLCAxKTtcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0O1xcbn1cXG5cXG4ubWFpbi1hZGRUYXNrRm9ybS10aXRsZTpmb2N1cyxcXG4ubWFpbi1hZGRUYXNrRm9ybS10aXRsZTphY3RpdmUsXFxuLm1haW4tYWRkVGFza0Zvcm0tZGVzY3JpcHRpb246Zm9jdXMsXFxuLm1haW4tYWRkVGFza0Zvcm0tZGVzY3JpcHRpb246YWN0aXZlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEodmFyKC0tbm9zdGFsZ2ljLXllbGxvdyksIDAuOCk7XFxufVxcblxcbi5tYWluLWFkZFRhc2tGb3JtLWRlc2NyaXB0aW9uIHtcXG4gIHJlc2l6ZTogbm9uZTtcXG59XFxuXFxuLm1haW4tYWRkVGFza0Zvcm0tY29uZmlybSxcXG4ubWFpbi1hZGRUYXNrRm9ybS1jYW5jZWwge1xcbiAgaGVpZ2h0OiB2YXIoLS1idG4taGVpZ2h0KTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiUm9ib3RvXFxcIiwgc2Fucy1zZXJpZjtcXG4gIGNvbG9yOiByZ2JhKHZhcigtLWRhcmstYmxhY2spLCAxKTtcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0O1xcbn1cXG5cXG4ubWFpbi1hZGRUYXNrRm9ybS1jb25maXJtIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEodmFyKC0teWVsbG8tcmFuZ2UpLCAwLjUpO1xcbn1cXG5cXG4ubWFpbi1hZGRUYXNrRm9ybS1jb25maXJtOmhvdmVyLFxcbi5tYWluLWFkZFRhc2tGb3JtLWNvbmZpcm06YWN0aXZlLFxcbi5tYWluLWFkZFRhc2tGb3JtLWNvbmZpcm06Zm9jdXMge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSh2YXIoLS1ub3N0YWxnaWMteWVsbG93KSwgMC44KTtcXG59XFxuXFxuLm1haW4tYWRkVGFza0Zvcm0tY2FuY2VsIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEodmFyKC0tc29mdC1ncmF5KSwgMC44KTtcXG59XFxuXFxuLm1haW4tYWRkVGFza0Zvcm0tY2FuY2VsOmhvdmVyLFxcbi5tYWluLWFkZFRhc2tGb3JtLWNhbmNlbDphY3RpdmUsXFxuLm1haW4tYWRkVGFza0Zvcm0tY2FuY2VsOmZvY3VzIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEodmFyKC0tc29mdC1ncmF5KSwgMSk7XFxufVxcblxcbi8qIE1BSU4gLSBUT0RPIExJU1QgKi9cXG4ubWFpbi1wcm9qZWN0TGlzdCB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGZsZXg6IDE7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogdmFyKC0tc3BhY2luZy1sZyk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKHZhcigtLXllbGxvLXJhbmdlKSwgMC44KTtcXG4gIHBhZGRpbmc6IHZhcigtLXNwYWNpbmctbGcpO1xcbn1cXG5cXG4ubWFpbi1wcm9qZWN0IHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSh2YXIoLS1zb2Z0LWdyYXkpLCAwLjgpO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0byAxZnIgYXV0byBhdXRvO1xcbiAgYWxpZ24taXRlbXM6IHN0YXJ0O1xcbiAgZ2FwOiB2YXIoLS1zcGFjaW5nLXNtKTtcXG4gIHBhZGRpbmc6IHZhcigtLXNwYWNpbmctc20pO1xcbiAgY3Vyc29yOiBncmFiO1xcbn1cXG5cXG4ubWFpbi1wcm9qZWN0LXRpdGxlLFxcbi5tYWluLXRhc2stdGl0bGUsXFxuLm1haW4tdGFzay1kYXRlIHtcXG4gIG1hcmdpbi10b3A6IDAuMTVlbTtcXG4gIG92ZXJmbG93LXdyYXA6IGJyZWFrLXdvcmQ7XFxuICBmb250LWZhbWlseTogXFxcIlJvYm90b1xcXCIsIHNhbnMtc2VyaWY7XFxuICBjb2xvcjogcmdiYSh2YXIoLS1kYXJrLWJsYWNrKSwgMSk7XFxuICBmb250LXNpemU6IDFyZW07XFxuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dDtcXG59XFxuXFxuLm1haW4tcHJvamVjdC1zb3J0VGFza1dyYXBwZXIge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBncmlkLWNvbHVtbjogMSAvIC0xO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcXG4gIGdhcDogdmFyKC0tc3BhY2luZy1zbSk7XFxuICBoZWlnaHQ6IHZhcigtLWJ0bi1oZWlnaHQpO1xcbn1cXG5cXG4ubWFpbi1wcm9qZWN0LXNvcnRCdG4ge1xcbiAgZGlzcGxheTogbm9uZTtcXG4gIGFwcGVhcmFuY2U6IG5vbmU7XFxufVxcblxcbi5tYWluLXByb2plY3Qtc29ydExhYmVsIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBib3JkZXI6IG5vbmU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKHZhcigtLW5vc3RhbGdpYy15ZWxsb3cpLCAwLjUpO1xcbiAgdHJhbnNpdGlvbjogMC4zcyBlYXNlLWluLW91dDtcXG59XFxuXFxuLm1haW4tcHJvamVjdC1zb3J0QnRuOmNoZWNrZWQgKyAubWFpbi1wcm9qZWN0LXNvcnRMYWJlbCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKHZhcigtLW5vc3RhbGdpYy15ZWxsb3cpLCAwLjgpO1xcbiAgdHJhbnNpdGlvbjogMC4zcztcXG59XFxuXFxuLm1haW4tYWRkVGFza0J0biB7XFxuICBncmlkLWNvbHVtbjogMiAvIC0xO1xcbiAgaGVpZ2h0OiBjYWxjKHZhcigtLWJ0bi1oZWlnaHQpIC8gMik7XFxuICB3aWR0aDogMTAwJTtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiUm9ib3RvXFxcIiwgc2Fucy1zZXJpZjtcXG4gIGNvbG9yOiByZ2JhKHZhcigtLXlpbm1uLWJsdWUsIDEpKTtcXG4gIGZvbnQtc2l6ZTogMC44cmVtO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSh2YXIoLS1ub3N0YWxnaWMteWVsbG93KSwgMC41KTtcXG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0O1xcbn1cXG5cXG4ubWFpbi1hZGRUYXNrQnRuOmhvdmVyLFxcbi5tYWluLWFkZFRhc2tCdG46YWN0aXZlLFxcbi5tYWluLWFkZFRhc2tCdG46Zm9jdXMge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSh2YXIoLS1ub3N0YWxnaWMteWVsbG93KSwgMC44KTtcXG59XFxuXFxuLm1haW4tcHJvamVjdC10YXNrTGlzdCB7XFxuICBncmlkLWNvbHVtbjogMiAvIC0xO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IHZhcigtLXNwYWNpbmctc20pO1xcbn1cXG5cXG4ubWFpbi10YXNrIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG8gMWZyIGF1dG8gYXV0byBhdXRvO1xcbiAgYWxpZ24taXRlbXM6IHN0YXJ0O1xcbiAgZ2FwOiB2YXIoLS1zcGFjaW5nLXNtKTtcXG59XFxuXFxuLm1haW4tcHJvamVjdC1kZXNjcmlwdGlvbixcXG4ubWFpbi10YXNrLWRlc2NyaXB0aW9uIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxuICBmb250LXNpemU6IDAuOXJlbTtcXG59XFxuXFxuLm1haW4tcHJvamVjdC1kZXNjcmlwdGlvbi5hY3RpdmUsXFxuLm1haW4tdGFzay1kZXNjcmlwdGlvbi5hY3RpdmUge1xcbiAgZGlzcGxheTogYmxvY2s7XFxufVxcblxcbi5tYWluLXByb2plY3QgYnV0dG9uIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiUm9ib3RvXFxcIiwgc2Fucy1zZXJpZjtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEodmFyKC0tbm9zdGFsZ2ljLXllbGxvdyksIDAuNSk7XFxuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dDtcXG59XFxuXFxuLm1haW4tcHJvamVjdCBidXR0b246aG92ZXIsXFxuLm1haW4tcHJvamVjdCBidXR0b246YWN0aXZlLFxcbi5tYWluLXByb2plY3QgYnV0dG9uOmZvY3VzIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEodmFyKC0tbm9zdGFsZ2ljLXllbGxvdyksIDAuOCk7XFxufVxcblxcbi5tYWluLXByb2plY3QtZXhwYW5kQnRuLFxcbi5tYWluLXByb2plY3QtZGVsZXRlQnRuLFxcbi5tYWluLXRhc2stZXhwYW5kQnRuLFxcbi5tYWluLXRhc2stZGVsZXRlQnRuIHtcXG4gIHdpZHRoOiB2YXIoLS1mbi1idG4td2lkdGgpO1xcbn1cXG5cXG4ubWFpbi1wcm9qZWN0LWNoZWNrYm94LFxcbi5tYWluLXRhc2stY2hlY2tib3gge1xcbiAgbWFyZ2luOiAwO1xcbiAgd2lkdGg6IHZhcigtLWNoZWNrYm94LXNpemUpO1xcbiAgaGVpZ2h0OiB2YXIoLS1jaGVja2JveC1zaXplKTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEodmFyKC0tZGFyay1ibGFjayksIDEpO1xcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tYm9yZGVyLXJhZGl1cyk7XFxuICBhY2NlbnQtY29sb3I6IHJnYmEodmFyKC0tcGFzc2lvbmF0ZS1yZWQpLCAxKTtcXG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4vKiBGT09URVIgKi9cXG4uZm9vdGVyIHtcXG4gIHBhZGRpbmctYm90dG9tOiB2YXIoLS1zcGFjaW5nLXhzKTtcXG4gIGhlaWdodDogdmFyKC0tZm9vdGVyLWhlaWdodCk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKHZhcigtLXNvZnQtZ3JheSksIDAuOCk7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZ2FwOiAxMHB4O1xcbiAgd2lkdGg6IDEwMCU7XFxuICBncmlkLXJvdzogMyAvIDQ7XFxufVxcblxcbi5mYS1naXRodWIge1xcbiAgZm9udC1zaXplOiAyMHB4O1xcbiAgbWFyZ2luLXRvcDogNHB4O1xcbiAgY29sb3I6IGJsYWNrO1xcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuM3MgZWFzZS1pbi1vdXQ7XFxufVxcblxcbi5mYS1naXRodWI6aG92ZXIge1xcbiAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKSBzY2FsZSgxLjIpO1xcbn1cXG5cXG4vKiBNRURJQSBRVUVSSUVTICovXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTAwcHgpIHtcXG4gIC5tYWluLXByb2plY3QtZXhwYW5kQnRuIHNwYW4sXFxuICAubWFpbi1wcm9qZWN0LWRlbGV0ZUJ0biBzcGFuLFxcbiAgLm1haW4tdGFzay1leHBhbmRCdG4gc3BhbixcXG4gIC5tYWluLXRhc2stZGVsZXRlQnRuIHNwYW4ge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgfVxcblxcbiAgLm1haW4taWNvbnMge1xcbiAgICBtYXJnaW46IDA7XFxuICB9XFxuXFxuICAubWFpbi1wcm9qZWN0LWV4cGFuZEJ0bixcXG4gIC5tYWluLXByb2plY3QtZGVsZXRlQnRuLFxcbiAgLm1haW4tdGFzay1leHBhbmRCdG4sXFxuICAubWFpbi10YXNrLWRlbGV0ZUJ0biB7XFxuICAgIHdpZHRoOiBhdXRvO1xcbiAgfVxcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMtcmVzZXQuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMtcmVzZXQuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgaXMgcmVmZXJlbmNlZCBieSBvdGhlciBtb2R1bGVzIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vdG9kby1saXN0L3NyYy9jb21wb25lbnRzL3BlbmRpbmcvYWRkUHJvamVjdFBvcHVwLmpzXCIpO1xuIiwiIl0sIm5hbWVzIjpbInByb2plY3RMaXN0Q29tcG9uZW50IiwiYXJjaGl2ZSIsImNvbXBsZXRlZFByb2plY3RzIiwid3JhcHBlciIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsInByb2plY3RMaXN0IiwiY2xhc3NMaXN0IiwiYWRkIiwiYXBwZW5kQ2hpbGQiLCJoZWFkZXIiLCJoZWFkZXJDb250YWluZXIiLCJoZWFkZXJUaXRsZSIsInRleHRDb250ZW50IiwibWFpbiIsIm1haW5OYXZiYXIiLCJtYWluTmF2YmFySXRlbXMiLCJpZCIsImZvckVhY2giLCJpdGVtIiwibWFpbk5hdmJhckxhYmVsIiwibWFpbk5hdmJhckl0ZW0iLCJodG1sRm9yIiwidG9Mb3dlckNhc2UiLCJ0eXBlIiwibmFtZSIsInZhbHVlIiwiY2hlY2tlZCIsImZvb3RlciIsImZvb3RlclRleHQiLCJmb290ZXJMaW5rIiwiZm9vdGVySWNvbiIsIkRhdGUiLCJnZXRGdWxsWWVhciIsImhyZWYiLCJ0YXJnZXQiLCJyZWwiLCJwYWdlTG9hZCIsImNvbnRlbnQiLCJnZXRFbGVtZW50QnlJZCIsImFkZFByb2plY3QiLCJhZGRQcm9qZWN0QnRuIiwiYWRkRXZlbnRMaXN0ZW5lciIsImFkZFByb2plY3RQb3B1cCIsImFkZFByb2plY3RGb3JtIiwicHJvamVjdFRpdGxlIiwicHJvamVjdERlc2NyaXB0aW9uIiwiY29uZmlybUJ0biIsImNhbmNlbEJ0biIsInBsYWNlaG9sZGVyIiwicmVxdWlyZWQiLCJvbnN1Ym1pdCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInJlbW92ZSIsInRhc2tMaXN0IiwidGFza0xpc3RDb21wb25lbnQiLCJhZGRQcm9qZWN0QnRuQ29tcG9uZW50IiwicmVuZGVyUGVuZGluZ0NvbXBvbmVudCIsInBlbmRpbmdQcm9qZWN0cyIsInJlZnJlc2hQcm9qZWN0TGlzdCIsInByb2plY3RBcnIiLCJjbGVhclByb2plY3RMaXN0IiwiYWN0aXZlVGFiIiwicXVlcnlTZWxlY3RvciIsIm5ld1Byb2plY3RMaXN0IiwicmVmcmVzaFRhc2tMaXN0IiwicHJvamVjdE9iaiIsImNsZWFyVGFza0xpc3QiLCJuZXdUYXNrTGlzdCIsInByb2plY3RFbGVtZW50IiwiYWRkVGFzayIsImNvbXBsZXRlUHJvamVjdCIsImNvbXBsZXRlVGFzayIsImRlbGV0ZUljb24iLCJleHBhbmRJY29uTW9yZSIsImV4cGFuZEljb25MZXNzIiwiZGVsZXRlVGFzayIsImRlbGV0ZVByb2plY3QiLCJzb3J0VGFza0J5RGF0ZSIsInNvcnRBcnJCeVByaW9yaXR5Iiwic3dhcFByb2plY3QiLCJpIiwibGVuZ3RoIiwicHJvamVjdENvbXBvbmVudCIsInByb2plY3QiLCJpbmRleCIsInByb2plY3RDaGVja2JveCIsInByb2plY3RFeHBhbmRCdG4iLCJwcm9qZWN0RXhwYW5kQnRuVGV4dCIsInByb2plY3REZWxldGVCdG4iLCJwcm9qZWN0RGVsZXRlQnRuVGV4dCIsInByb2plY3RFeHBhbmRJY29uIiwicHJvamVjdERlbGV0ZUljb24iLCJzb3J0VGFza0NvbXBvbmVudCIsInNvcnRDb21wb25lbnQiLCJhZGRUYXNrQnRuQ29tcG9uZW50IiwiYWRkVGFza0J0biIsInByb2plY3RUYXNrTGlzdCIsImNvbXBsZXRlZCIsInN0eWxlIiwiYmFja2dyb3VuZEltYWdlIiwiZ2V0T2JqQ29sb3IiLCJkcmFnZ2FibGUiLCJkYXRhVHJhbnNmZXIiLCJzZXREYXRhIiwicHJpb3JpdHkiLCJvcGFjaXR5IiwiZHJhZ2dlZFByb2plY3RQcmlvcml0eSIsImdldERhdGEiLCJkYXRhc2V0IiwiZGlzYWJsZWQiLCJ0aXRsZSIsInNwZWxsY2hlY2siLCJkZXNjcmlwdGlvbiIsInNyYyIsInRhc2tBcnIiLCJ0YXNrcyIsInRhc2tDb21wb25lbnQiLCJ0YXNrIiwidGFza0luZGV4IiwidGFza09iaiIsInRhc2tDaGVja2JveCIsInRhc2tUaXRsZSIsInRhc2tEZXNjcmlwdGlvbiIsInRhc2tEYXRlIiwidGFza0V4cGFuZEJ0biIsInRhc2tFeHBhbmRCdG5UZXh0IiwidGFza0RlbGV0ZUJ0biIsInRhc2tEZWxldGVCdG5UZXh0IiwidGFza0V4cGFuZEljb24iLCJ0YXNrRGVsZXRlSWNvbiIsImR1ZURhdGUiLCJhZGRUYXNrUG9wdXAiLCJhZGRUYXNrRm9ybSIsIm9uY2xpY2siLCJzb3J0VGFza1dyYXBwZXIiLCJzb3J0VGFza0J5UHJpb3JpdHlMYWJlbCIsInNvcnRUYXNrQnlQcmlvcml0eUJ0biIsInNvcnRUYXNrQnlEYXRlTGFiZWwiLCJzb3J0VGFza0J5RGF0ZUJ0biIsIm9iakFyciIsIm9iaiIsIm9ialByaW9yaXR5Iiwibm9ybWFsaXplZFByaW9yaXR5IiwicmVkIiwiTWF0aCIsInJvdW5kIiwiZ3JlZW4iLCJyZW5kZXJBcmNoaXZlQ29tcG9uZW50IiwiZmF2aWNvbkxpbmsiLCJnZXRQZW5kaW5nUHJvamVjdHMiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiSlNPTiIsInBhcnNlIiwiZ2V0Q29tcGxldGVkUHJvamVjdHMiLCJzYXZlUGVuZGluZ1Byb2plY3RzIiwic2V0SXRlbSIsInN0cmluZ2lmeSIsInNhdmVDb21wbGV0ZWRQcm9qZWN0cyIsInNhdmVQcm9qZWN0cyIsIndpbmRvdyIsImdldFByb2plY3RGcm9tSW5wdXQiLCJmb3JtIiwiZWxlbWVudHMiLCJub3ciLCJuZXdQcm9qZWN0IiwicHVzaCIsInByb2plY3RJbmRleCIsImRpc3BsYXlNb2RlIiwiZ2V0RGlzcGxheU1vZGUiLCJ3b3JrQXJyIiwic3BsaWNlIiwicmVzZXRQcmlvcml0eSIsImZpbmRJbmRleCIsInByaW9yaXR5MSIsInByaW9yaXR5MiIsInRlbXAiLCJnZXRUYXNrRnJvbUlucHV0IiwibmV3VGFzayIsImdldFNvcnRNb2RlIiwic29ydCIsImEiLCJiIiwiYURhdGUiLCJiRGF0ZSIsImFyciIsImVsZW1lbnQiLCJzb3J0QnRucyIsImdldEVsZW1lbnRzQnlOYW1lIiwic29ydE1vZGUiLCJidG4iLCJjcmVhdGVGYXZpY29uIiwiaWNvbkxpbmsiLCJoZWFkIiwicHVyZ2VBY3RpdmVUYWIiLCJjaGlsZHJlbiIsInJlbW92ZUNoaWxkIiwibGFzdENoaWxkIiwidGFiQnRucyIsInRhYlN3aXRjaCIsInN0YXJ0QXBwIl0sInNvdXJjZVJvb3QiOiIifQ==