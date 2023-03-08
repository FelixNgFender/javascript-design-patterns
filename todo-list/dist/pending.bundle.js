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
/******/ 	var __webpack_exports__ = __webpack_require__("./todo-list/src/components/pending/pending.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFXLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFlBQVksT0FBTyxZQUFZLE1BQU0sVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsT0FBTyxLQUFLLFlBQVksT0FBTyxZQUFZLE1BQU0sVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sWUFBWSxNQUFNLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsWUFBWSxhQUFhLE9BQU8sT0FBTyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxNQUFNLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLFFBQVEsWUFBWSxPQUFPLEtBQUssVUFBVSxNQUFNLE1BQU0sWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLE9BQU8sWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLE9BQU8sWUFBWSxPQUFPLFlBQVksTUFBTSxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxPQUFPLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxPQUFPLFFBQVEsWUFBWSxPQUFPLEtBQUssVUFBVSxNQUFNLE1BQU0sWUFBWSxXQUFXLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLE9BQU8sWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLE9BQU8sWUFBWSxPQUFPLFlBQVksTUFBTSxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsTUFBTSxPQUFPLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxV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QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7QUNyRWE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQ2ZBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQ2ZBOzs7OztVRUFBO1VBQ0E7VUFDQTtVQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vamF2YXNjcmlwdC1kZXNpZ24tcGF0dGVybnMvLi90b2RvLWxpc3Qvc3JjL2NvbXBvbmVudHMvYXJjaGl2ZS9hcmNoaXZlLmpzIiwid2VicGFjazovL2phdmFzY3JpcHQtZGVzaWduLXBhdHRlcm5zLy4vdG9kby1saXN0L3NyYy9jb21wb25lbnRzL3BhZ2VMb2FkLmpzIiwid2VicGFjazovL2phdmFzY3JpcHQtZGVzaWduLXBhdHRlcm5zLy4vdG9kby1saXN0L3NyYy9jb21wb25lbnRzL3BlbmRpbmcvYWRkUHJvamVjdFBvcHVwLmpzIiwid2VicGFjazovL2phdmFzY3JpcHQtZGVzaWduLXBhdHRlcm5zLy4vdG9kby1saXN0L3NyYy9jb21wb25lbnRzL3BlbmRpbmcvcGVuZGluZy5qcyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LWRlc2lnbi1wYXR0ZXJucy8uL3RvZG8tbGlzdC9zcmMvY29tcG9uZW50cy9wcm9qZWN0TGlzdC9wcm9qZWN0TGlzdC5qcyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LWRlc2lnbi1wYXR0ZXJucy8uL3RvZG8tbGlzdC9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdC1kZXNpZ24tcGF0dGVybnMvLi90b2RvLWxpc3Qvc3JjL3N0eWxlcy9zdHlsZXMtcmVzZXQuY3NzIiwid2VicGFjazovL2phdmFzY3JpcHQtZGVzaWduLXBhdHRlcm5zLy4vdG9kby1saXN0L3NyYy9zdHlsZXMvc3R5bGVzLmNzcyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LWRlc2lnbi1wYXR0ZXJucy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdC1kZXNpZ24tcGF0dGVybnMvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LWRlc2lnbi1wYXR0ZXJucy8uL3RvZG8tbGlzdC9zcmMvc3R5bGVzL3N0eWxlcy1yZXNldC5jc3M/YzU5MCIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LWRlc2lnbi1wYXR0ZXJucy8uL3RvZG8tbGlzdC9zcmMvc3R5bGVzL3N0eWxlcy5jc3M/NmY3OSIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LWRlc2lnbi1wYXR0ZXJucy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LWRlc2lnbi1wYXR0ZXJucy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdC1kZXNpZ24tcGF0dGVybnMvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdC1kZXNpZ24tcGF0dGVybnMvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdC1kZXNpZ24tcGF0dGVybnMvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LWRlc2lnbi1wYXR0ZXJucy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL2phdmFzY3JpcHQtZGVzaWduLXBhdHRlcm5zL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2phdmFzY3JpcHQtZGVzaWduLXBhdHRlcm5zL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2phdmFzY3JpcHQtZGVzaWduLXBhdHRlcm5zL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LWRlc2lnbi1wYXR0ZXJucy93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL2phdmFzY3JpcHQtZGVzaWduLXBhdHRlcm5zL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdC1kZXNpZ24tcGF0dGVybnMvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LWRlc2lnbi1wYXR0ZXJucy93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LWRlc2lnbi1wYXR0ZXJucy93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdC1kZXNpZ24tcGF0dGVybnMvd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LWRlc2lnbi1wYXR0ZXJucy93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdC1kZXNpZ24tcGF0dGVybnMvd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGZpbGVvdmVydmlldyBBcmNoaXZlIHByb2plY3RzIGNvbXBvbmVudFxuICogQGF1dGhvciBUaGluaCBOZ3V5ZW5cbiAqIEB2ZXJzaW9uIDEuMC4wXG4gKi9cblxuXCJ1c2Ugc3RyaWN0XCI7XG5pbXBvcnQgcHJvamVjdExpc3RDb21wb25lbnQgZnJvbSBcIi4uL3Byb2plY3RMaXN0L3Byb2plY3RMaXN0XCI7XG5cbi8qKlxuICogQ3JlYXRlIGFuIGFyY2hpdmVkIHByb2plY3RzIGNvbXBvbmVudC5cbiAqIEBwYXJhbSB7QXJyYXl9IGNvbXBsZXRlZFByb2plY3RzIEFycmF5IG9mIGNvbXBsZXRlZCBwcm9qZWN0c1xuICogQHJldHVybiB7SFRNTEVsZW1lbnR9IEFyY2hpdmVkIHByb2plY3RzIGNvbXBvbmVudFxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBhcmNoaXZlKGNvbXBsZXRlZFByb2plY3RzKSB7XG4gIGNvbnN0IHdyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBwcm9qZWN0TGlzdCA9IHByb2plY3RMaXN0Q29tcG9uZW50KGNvbXBsZXRlZFByb2plY3RzKTtcblxuICB3cmFwcGVyLmNsYXNzTGlzdC5hZGQoXCJtYWluLWFjdGl2ZVRhYlwiKTtcblxuICB3cmFwcGVyLmFwcGVuZENoaWxkKHByb2plY3RMaXN0KTtcblxuICByZXR1cm4gd3JhcHBlcjtcbn1cbiIsIi8qKlxuICogQGZpbGVvdmVydmlldyBJbml0aWFsaXplIHBhZ2UgbG9hZFxuICogQGF1dGhvciBUaGluaCBOZ3V5ZW5cbiAqIEB2ZXJzaW9uIDEuMC4wXG4gKi9cblxuXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qKlxuICogQ3JlYXRlIHRoZSBoZWFkZXIgY29tcG9uZW50LlxuICogQHJldHVybiB7SFRNTEVsZW1lbnR9IEhlYWRlciBlbGVtZW50XG4gKi9cbmZ1bmN0aW9uIGhlYWRlcigpIHtcbiAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImhlYWRlclwiKTtcbiAgY29uc3QgaGVhZGVyQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgaGVhZGVyVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XG4gIGhlYWRlci5jbGFzc0xpc3QuYWRkKFwiaGVhZGVyXCIpO1xuICBoZWFkZXJDb250YWluZXIuY2xhc3NMaXN0LmFkZChcImhlYWRlci1jb250YWluZXJcIik7XG4gIGhlYWRlclRpdGxlLmNsYXNzTGlzdC5hZGQoXCJoZWFkZXItdGl0bGVcIik7XG4gIGhlYWRlclRpdGxlLnRleHRDb250ZW50ID0gXCJTdGFja1Rhc2tzXCI7XG4gIGhlYWRlckNvbnRhaW5lci5hcHBlbmRDaGlsZChoZWFkZXJUaXRsZSk7XG4gIGhlYWRlci5hcHBlbmRDaGlsZChoZWFkZXJDb250YWluZXIpO1xuICByZXR1cm4gaGVhZGVyO1xufVxuXG4vKipcbiAqIENyZWF0ZSB0aGUgbWFpbiBjb21wb25lbnQuXG4gKiBAcmV0dXJuIHtIVE1MRWxlbWVudH0gTWFpbiBlbGVtZW50XG4gKi9cbmZ1bmN0aW9uIG1haW4oKSB7XG4gIGNvbnN0IG1haW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibWFpblwiKTtcbiAgY29uc3QgbWFpbk5hdmJhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJuYXZcIik7XG4gIGNvbnN0IG1haW5OYXZiYXJJdGVtcyA9IFtcIlBlbmRpbmdcIiwgXCJBcmNoaXZlXCJdO1xuICBtYWluLmNsYXNzTGlzdC5hZGQoXCJtYWluXCIpO1xuICBtYWluLmlkID0gXCJtYWluXCI7XG4gIG1haW5OYXZiYXIuY2xhc3NMaXN0LmFkZChcIm1haW4tbmF2YmFyXCIpO1xuICBtYWluTmF2YmFySXRlbXMuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgIGNvbnN0IG1haW5OYXZiYXJMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgICBjb25zdCBtYWluTmF2YmFySXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICBtYWluTmF2YmFyTGFiZWwuY2xhc3NMaXN0LmFkZChcIm1haW4tbmF2YmFyLWl0ZW1MYWJlbFwiKTtcbiAgICBtYWluTmF2YmFySXRlbS5jbGFzc0xpc3QuYWRkKFwibWFpbi1uYXZiYXItaXRlbVwiKTtcbiAgICBtYWluTmF2YmFyTGFiZWwudGV4dENvbnRlbnQgPSBpdGVtO1xuICAgIG1haW5OYXZiYXJMYWJlbC5odG1sRm9yID0gXCJtYWluLW5hdmJhci1cIiArIGl0ZW0udG9Mb3dlckNhc2UoKTtcbiAgICBtYWluTmF2YmFySXRlbS50eXBlID0gXCJyYWRpb1wiO1xuICAgIG1haW5OYXZiYXJJdGVtLm5hbWUgPSBcIm1haW4tbmF2YmFyXCI7XG4gICAgbWFpbk5hdmJhckl0ZW0udmFsdWUgPSBpdGVtLnRvTG93ZXJDYXNlKCk7XG4gICAgbWFpbk5hdmJhckl0ZW0uaWQgPSBcIm1haW4tbmF2YmFyLVwiICsgaXRlbS50b0xvd2VyQ2FzZSgpO1xuICAgIG1haW5OYXZiYXJJdGVtLmNoZWNrZWQgPSBpdGVtID09PSBcIlBlbmRpbmdcIjtcbiAgICBtYWluTmF2YmFyLmFwcGVuZENoaWxkKG1haW5OYXZiYXJJdGVtKTtcbiAgICBtYWluTmF2YmFyLmFwcGVuZENoaWxkKG1haW5OYXZiYXJMYWJlbCk7XG4gIH0pO1xuICBtYWluLmFwcGVuZENoaWxkKG1haW5OYXZiYXIpO1xuICByZXR1cm4gbWFpbjtcbn1cblxuLyoqXG4gKiBDcmVhdGUgdGhlIGZvb3RlciBjb21wb25lbnQuXG4gKiBAcmV0dXJuIHtIVE1MRWxlbWVudH0gRm9vdGVyIGVsZW1lbnRcbiAqL1xuZnVuY3Rpb24gZm9vdGVyKCkge1xuICBjb25zdCBmb290ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZm9vdGVyXCIpO1xuICBjb25zdCBmb290ZXJUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIGNvbnN0IGZvb3RlckxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcbiAgY29uc3QgZm9vdGVySWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpXCIpO1xuICBmb290ZXIuY2xhc3NMaXN0LmFkZChcImZvb3RlclwiKTtcbiAgZm9vdGVySWNvbi5jbGFzc0xpc3QuYWRkKFwiZmFiXCIsIFwiZmEtZ2l0aHViXCIpO1xuICBmb290ZXJUZXh0LnRleHRDb250ZW50ID1cbiAgICBcIkNvcHlyaWdodCDCqSBcIiArIG5ldyBEYXRlKCkuZ2V0RnVsbFllYXIoKSArIFwiIEZlbGl4TmdGZW5kZXJcIjtcbiAgZm9vdGVyTGluay5ocmVmID0gXCJodHRwczovL2dpdGh1Yi5jb20vRmVsaXhOZ0ZlbmRlclwiO1xuICBmb290ZXJMaW5rLnRhcmdldCA9IFwiX2JsYW5rXCI7XG4gIGZvb3RlckxpbmsucmVsID0gXCJub29wZW5lciBub3JlZmVycmVyXCI7XG4gIGZvb3RlckxpbmsuYXBwZW5kQ2hpbGQoZm9vdGVySWNvbik7XG4gIGZvb3Rlci5hcHBlbmRDaGlsZChmb290ZXJUZXh0KTtcbiAgZm9vdGVyLmFwcGVuZENoaWxkKGZvb3RlckxpbmspO1xuICByZXR1cm4gZm9vdGVyO1xufVxuXG4vKipcbiAqIEluaXRpYWxpemUgcGFnZSBsb2FkLlxuICogQHJldHVybiB7dm9pZH1cbiAqIEBleHBvcnRcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcGFnZUxvYWQoKSB7XG4gIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbnRlbnRcIik7XG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQoaGVhZGVyKCkpO1xuICBjb250ZW50LmFwcGVuZENoaWxkKG1haW4oKSk7XG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQoZm9vdGVyKCkpO1xufVxuIiwiLyoqXG4gKiBAZmlsZW92ZXJ2aWV3IEJ1dHRvbiBjb21wb25lbnQgZm9yIGFkZGluZyBhIG5ldyBwcm9qZWN0XG4gKiBAYXV0aG9yIFRoaW5oIE5ndXllblxuICogQHZlcnNpb24gMS4wLjBcbiAqL1xuXG5cInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgYWRkUHJvamVjdCB9IGZyb20gXCIuLi8uLi9pbmRleFwiO1xuXG4vKipcbiAqIENyZWF0ZSBhbiBhZGQgcHJvamVjdCBidXR0b24gY29tcG9uZW50LlxuICogQHJldHVybiB7SFRNTEVsZW1lbnR9IEFkZCBwcm9qZWN0IGJ1dHRvblxuICogQGV4cG9ydFxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBhZGRQcm9qZWN0QnRuKCkge1xuICBjb25zdCBhZGRQcm9qZWN0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcblxuICBhZGRQcm9qZWN0QnRuLmNsYXNzTGlzdC5hZGQoXCJtYWluLWFkZFByb2plY3RCdG5cIik7XG4gIGFkZFByb2plY3RCdG4udGV4dENvbnRlbnQgPSBcIkFkZCBQcm9qZWN0ICtcIjtcblxuICBhZGRQcm9qZWN0QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgaWYgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWFpbi1hZGRQcm9qZWN0Rm9ybVwiKSkgcmV0dXJuO1xuICAgIGNvbnN0IHByb2plY3RMaXN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtYWluLXByb2plY3RMaXN0XCIpO1xuICAgIHByb2plY3RMaXN0LmFwcGVuZENoaWxkKGFkZFByb2plY3RQb3B1cCgpKTtcbiAgfSk7XG5cbiAgcmV0dXJuIGFkZFByb2plY3RCdG47XG59XG5cbi8qKlxuICogQ3JlYXRlIGFuIGFkZCBwcm9qZWN0IGZvcm0gY29tcG9uZW50LlxuICogQHJldHVybiB7SFRNTEVsZW1lbnR9IEFkZCBwcm9qZWN0IGZvcm1cbiAqL1xuZnVuY3Rpb24gYWRkUHJvamVjdFBvcHVwKCkge1xuICBjb25zdCBhZGRQcm9qZWN0Rm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmb3JtXCIpO1xuICBjb25zdCBwcm9qZWN0VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gIGNvbnN0IHByb2plY3REZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZXh0YXJlYVwiKTtcbiAgY29uc3QgY29uZmlybUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIGNvbnN0IGNhbmNlbEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG5cbiAgYWRkUHJvamVjdEZvcm0uY2xhc3NMaXN0LmFkZChcIm1haW4tYWRkUHJvamVjdEZvcm1cIik7XG4gIGFkZFByb2plY3RGb3JtLmlkID0gXCJtYWluLWFkZFByb2plY3RGb3JtXCI7XG4gIHByb2plY3RUaXRsZS5jbGFzc0xpc3QuYWRkKFwibWFpbi1hZGRQcm9qZWN0Rm9ybS10aXRsZVwiKTtcbiAgcHJvamVjdERlc2NyaXB0aW9uLmNsYXNzTGlzdC5hZGQoXCJtYWluLWFkZFByb2plY3RGb3JtLWRlc2NyaXB0aW9uXCIpO1xuICBjb25maXJtQnRuLmNsYXNzTGlzdC5hZGQoXCJtYWluLWFkZFByb2plY3RGb3JtLWNvbmZpcm1cIik7XG4gIGNhbmNlbEJ0bi5jbGFzc0xpc3QuYWRkKFwibWFpbi1hZGRQcm9qZWN0Rm9ybS1jYW5jZWxcIik7XG5cbiAgcHJvamVjdFRpdGxlLnR5cGUgPSBcInRleHRcIjtcbiAgcHJvamVjdFRpdGxlLnBsYWNlaG9sZGVyID0gXCJQcm9qZWN0IE5hbWVcIjtcbiAgcHJvamVjdFRpdGxlLm5hbWUgPSBcInRpdGxlXCI7XG4gIHByb2plY3RUaXRsZS5yZXF1aXJlZCA9IHRydWU7XG4gIHByb2plY3REZXNjcmlwdGlvbi5wbGFjZWhvbGRlciA9IFwiUHJvamVjdCBEZXNjcmlwdGlvblwiO1xuICBwcm9qZWN0RGVzY3JpcHRpb24ubmFtZSA9IFwiZGVzY3JpcHRpb25cIjtcbiAgY29uZmlybUJ0bi50eXBlID0gXCJzdWJtaXRcIjtcbiAgY29uZmlybUJ0bi50ZXh0Q29udGVudCA9IFwiQ29uZmlybVwiO1xuICBjYW5jZWxCdG4udHlwZSA9IFwiYnV0dG9uXCI7XG4gIGNhbmNlbEJ0bi50ZXh0Q29udGVudCA9IFwiQ2FuY2VsXCI7XG5cbiAgYWRkUHJvamVjdEZvcm0ub25zdWJtaXQgPSAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBhZGRQcm9qZWN0KCk7XG4gICAgYWRkUHJvamVjdEZvcm0ucmVtb3ZlKCk7XG4gIH07XG4gIGNhbmNlbEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIGFkZFByb2plY3RGb3JtLnJlbW92ZSgpO1xuICB9KTtcblxuICBhZGRQcm9qZWN0Rm9ybS5hcHBlbmRDaGlsZChwcm9qZWN0VGl0bGUpO1xuICBhZGRQcm9qZWN0Rm9ybS5hcHBlbmRDaGlsZChwcm9qZWN0RGVzY3JpcHRpb24pO1xuICBhZGRQcm9qZWN0Rm9ybS5hcHBlbmRDaGlsZChjb25maXJtQnRuKTtcbiAgYWRkUHJvamVjdEZvcm0uYXBwZW5kQ2hpbGQoY2FuY2VsQnRuKTtcblxuICByZXR1cm4gYWRkUHJvamVjdEZvcm07XG59IiwiLyoqXG4gKiBAZmlsZW92ZXJ2aWV3IFBlbmRpbmcgcHJvamVjdHMgY29tcG9uZW50XG4gKiBAYXV0aG9yIFRoaW5oIE5ndXllblxuICogQHZlcnNpb24gMS4wLjBcbiAqL1xuXG5cInVzZSBzdHJpY3RcIjtcbmltcG9ydCBwcm9qZWN0TGlzdENvbXBvbmVudCwge1xuICB0YXNrTGlzdCBhcyB0YXNrTGlzdENvbXBvbmVudCxcbn0gZnJvbSBcIi4uL3Byb2plY3RMaXN0L3Byb2plY3RMaXN0XCI7XG5pbXBvcnQgYWRkUHJvamVjdEJ0bkNvbXBvbmVudCBmcm9tIFwiLi9hZGRQcm9qZWN0UG9wdXBcIjtcblxuLyoqXG4gKiBDcmVhdGUgYSBwZW5kaW5nIHByb2plY3RzIGNvbXBvbmVudC5cbiAqIEBwYXJhbSB7QXJyYXl9IHBlbmRpbmdQcm9qZWN0cyBBcnJheSBvZiBwZW5kaW5nIHByb2plY3RzXG4gKiBAcmV0dXJuIHtIVE1MRWxlbWVudH0gUGVuZGluZyBwcm9qZWN0cyBjb21wb25lbnRcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVuZGVyUGVuZGluZ0NvbXBvbmVudChwZW5kaW5nUHJvamVjdHMpIHtcbiAgY29uc3Qgd3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IGFkZFByb2plY3RCdG4gPSBhZGRQcm9qZWN0QnRuQ29tcG9uZW50KCk7XG4gIGNvbnN0IHByb2plY3RMaXN0ID0gcHJvamVjdExpc3RDb21wb25lbnQocGVuZGluZ1Byb2plY3RzKTtcblxuICB3cmFwcGVyLmNsYXNzTGlzdC5hZGQoXCJtYWluLWFjdGl2ZVRhYlwiKTtcblxuICB3cmFwcGVyLmFwcGVuZENoaWxkKGFkZFByb2plY3RCdG4pO1xuICB3cmFwcGVyLmFwcGVuZENoaWxkKHByb2plY3RMaXN0KTtcblxuICByZXR1cm4gd3JhcHBlcjtcbn1cblxuLyoqXG4gKiBSZWZyZXNoIHRoZSBwcm9qZWN0IGxpc3QgaW4gdGhlIGFjdGl2ZSB0YWIgY29tcG9uZW50LlxuICogT25seSB1c2UgYWZ0ZXIgaW5pdGlhbGl6YXRpb24gb2YgYWN0aXZlVGFiLlxuICogQHBhcmFtIHtBcnJheX0gcHJvamVjdEFyciBBcnJheSBvZiBwcm9qZWN0c1xuICogQHBhcmFtIHtIVE1MRWxlbWVudH0gYWN0aXZlVGFiIEFjdGl2ZSB0YWIgZWxlbWVudFxuICogQHJldHVybiB7dm9pZH1cbiAqIEBleHBvcnRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJlZnJlc2hQcm9qZWN0TGlzdChwcm9qZWN0QXJyKSB7XG4gIGNsZWFyUHJvamVjdExpc3QoKTtcbiAgY29uc3QgYWN0aXZlVGFiID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tYWluLWFjdGl2ZVRhYlwiKTtcbiAgY29uc3QgbmV3UHJvamVjdExpc3QgPSBwcm9qZWN0TGlzdENvbXBvbmVudChwcm9qZWN0QXJyKTtcbiAgYWN0aXZlVGFiLmFwcGVuZENoaWxkKG5ld1Byb2plY3RMaXN0KTtcbn1cblxuLyoqXG4gKiBDbGVhciB0aGUgcHJvamVjdCBsaXN0IGluIHRoZSBhY3RpdmUgdGFiIGNvbXBvbmVudC5cbiAqIEByZXR1cm4ge3ZvaWR9XG4gKi9cbmZ1bmN0aW9uIGNsZWFyUHJvamVjdExpc3QoKSB7XG4gIGNvbnN0IHByb2plY3RMaXN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtYWluLXByb2plY3RMaXN0XCIpO1xuICBpZiAoIXByb2plY3RMaXN0KSByZXR1cm47XG4gIHByb2plY3RMaXN0LnJlbW92ZSgpO1xufVxuXG4vKipcbiAqIFJlZnJlc2ggdGhlIHRhc2sgbGlzdCBpbiB0aGUgcHJvamVjdCBjb21wb25lbnQuXG4gKiBAcGFyYW0ge3Byb2plY3R9IHByb2plY3RPYmogUHJvamVjdCBvYmplY3RcbiAqIEByZXR1cm4ge3ZvaWR9XG4gKiBAZXhwb3J0XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiByZWZyZXNoVGFza0xpc3QocHJvamVjdE9iaikge1xuICBjbGVhclRhc2tMaXN0KHByb2plY3RPYmopO1xuICBjb25zdCBuZXdUYXNrTGlzdCA9IHRhc2tMaXN0Q29tcG9uZW50KHByb2plY3RPYmopO1xuICBjb25zdCBwcm9qZWN0RWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFxuICAgIFwibWFpbi1wcm9qZWN0LVwiICsgcHJvamVjdE9iai5pZFxuICApO1xuICBwcm9qZWN0RWxlbWVudC5hcHBlbmRDaGlsZChuZXdUYXNrTGlzdCk7XG59XG5cbi8qKlxuICogQ2xlYXIgdGhlIHRhc2sgbGlzdCBpbiB0aGUgcHJvamVjdCBjb21wb25lbnQuXG4gKiBAcGFyYW0ge3Byb2plY3R9IHByb2plY3RPYmogUHJvamVjdCBvYmplY3RcbiAqIEByZXR1cm4ge3ZvaWR9XG4gKi9cbmZ1bmN0aW9uIGNsZWFyVGFza0xpc3QocHJvamVjdE9iaikge1xuICBjb25zdCB0YXNrTGlzdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFxuICAgIFwibWFpbi1wcm9qZWN0LXRhc2tMaXN0LVwiICsgcHJvamVjdE9iai5pZFxuICApO1xuICBpZiAoIXRhc2tMaXN0KSByZXR1cm47XG4gIHRhc2tMaXN0LnJlbW92ZSgpO1xufVxuIiwiLyoqXG4gKiBAZmlsZW92ZXJ2aWV3IFByb2plY3QgbGlzdCBjb21wb25lbnRcbiAqIEBhdXRob3IgVGhpbmggTmd1eWVuXG4gKiBAdmVyc2lvbiAxLjAuMFxuICovXG5cblwidXNlIHN0cmljdFwiO1xuXG4vKiBJTVBPUlRTICovXG5pbXBvcnQgeyBhZGRUYXNrIGFzIGFkZFRhc2ssIGNvbXBsZXRlUHJvamVjdCwgY29tcGxldGVUYXNrIH0gZnJvbSBcIi4uLy4uL2luZGV4XCI7XG5pbXBvcnQgZGVsZXRlSWNvbiBmcm9tIFwiLi9kZWxldGVfRklMTDBfd2dodDQwMF9HUkFEMF9vcHN6NDguc3ZnXCI7XG5pbXBvcnQgZXhwYW5kSWNvbk1vcmUgZnJvbSBcIi4vZXhwYW5kX21vcmVfRklMTDBfd2dodDQwMF9HUkFEMF9vcHN6NDguc3ZnXCI7XG5pbXBvcnQgZXhwYW5kSWNvbkxlc3MgZnJvbSBcIi4vZXhwYW5kX2xlc3NfRklMTDBfd2dodDQwMF9HUkFEMF9vcHN6NDguc3ZnXCI7XG5pbXBvcnQge1xuICBkZWxldGVUYXNrLFxuICBkZWxldGVQcm9qZWN0LFxuICBzb3J0VGFza0J5RGF0ZSxcbiAgc29ydEFyckJ5UHJpb3JpdHksXG4gIHN3YXBQcm9qZWN0LFxufSBmcm9tIFwiLi4vLi4vaW5kZXhcIjtcbmltcG9ydCB7IHJlZnJlc2hUYXNrTGlzdCB9IGZyb20gXCIuLi9wZW5kaW5nL3BlbmRpbmdcIjtcblxuLyogUFJPSkVDVCBMSVNUIENPTVBPTkVOVCAqL1xuLyoqXG4gKiBDcmVhdGUgYSBwcm9qZWN0IGxpc3QgY29tcG9uZW50IHdpdGggcHJvamVjdHMuXG4gKiBAcGFyYW0ge0FycmF5fSBwcm9qZWN0QXJyIEFycmF5IG9mIHByb2plY3RzXG4gKiBAcmV0dXJuIHtIVE1MRWxlbWVudH0gUHJvamVjdCBsaXN0IGVsZW1lbnRcbiAqIEBleHBvcnRcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcHJvamVjdExpc3QocHJvamVjdEFycikge1xuICBjb25zdCBwcm9qZWN0TGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ1bFwiKTtcbiAgcHJvamVjdExpc3QuY2xhc3NMaXN0LmFkZChcIm1haW4tcHJvamVjdExpc3RcIik7XG4gIHByb2plY3RMaXN0LmlkID0gXCJtYWluLXByb2plY3RMaXN0XCI7XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBwcm9qZWN0QXJyLmxlbmd0aDsgaSsrKSB7XG4gICAgY29uc3QgcHJvamVjdENvbXBvbmVudCA9IHByb2plY3QoaSwgcHJvamVjdEFycik7XG4gICAgcHJvamVjdExpc3QuYXBwZW5kQ2hpbGQocHJvamVjdENvbXBvbmVudCk7XG4gIH1cblxuICByZXR1cm4gcHJvamVjdExpc3Q7XG59XG5cbi8qIFBST0pFQ1QgQ09NUE9ORU5UICovXG4vKipcbiAqIENyZWF0ZSBhIHByb2plY3QgY29tcG9uZW50LlxuICogQHBhcmFtIHtudW1iZXJ9IGluZGV4IEluZGV4IG9mIHByb2plY3QgaW4gcHJvamVjdCBhcnJheVxuICogQHBhcmFtIHtBcnJheX0gcHJvamVjdEFyciBBc3NvY2lhdGVkIHByb2plY3Qgb2JqZWN0IGFycmF5XG4gKiBAcmV0dXJuIHtIVE1MRWxlbWVudH0gUHJvamVjdCBlbGVtZW50XG4gKi9cbmZ1bmN0aW9uIHByb2plY3QoaW5kZXgsIHByb2plY3RBcnIpIHtcbiAgY29uc3QgcHJvamVjdE9iaiA9IHByb2plY3RBcnJbaW5kZXhdO1xuICBjb25zdCBwcm9qZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuICBjb25zdCBwcm9qZWN0Q2hlY2tib3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gIGNvbnN0IHByb2plY3RUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoM1wiKTtcbiAgY29uc3QgcHJvamVjdERlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIGNvbnN0IHByb2plY3RFeHBhbmRCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICBjb25zdCBwcm9qZWN0RXhwYW5kQnRuVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICBjb25zdCBwcm9qZWN0RGVsZXRlQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgY29uc3QgcHJvamVjdERlbGV0ZUJ0blRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgY29uc3QgcHJvamVjdEV4cGFuZEljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICBjb25zdCBwcm9qZWN0RGVsZXRlSWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG5cbiAgY29uc3Qgc29ydFRhc2tDb21wb25lbnQgPSBzb3J0Q29tcG9uZW50KHByb2plY3RPYmopO1xuICBjb25zdCBhZGRUYXNrQnRuQ29tcG9uZW50ID0gYWRkVGFza0J0bihwcm9qZWN0T2JqKTtcbiAgY29uc3QgcHJvamVjdFRhc2tMaXN0ID0gdGFza0xpc3QocHJvamVjdE9iaik7XG5cbiAgcHJvamVjdC5jbGFzc0xpc3QuYWRkKFwibWFpbi1wcm9qZWN0XCIpO1xuICBwcm9qZWN0Q2hlY2tib3gudHlwZSA9IFwiY2hlY2tib3hcIjtcbiAgcHJvamVjdENoZWNrYm94LmNsYXNzTGlzdC5hZGQoXCJtYWluLXByb2plY3QtY2hlY2tib3hcIik7XG4gIHByb2plY3RUaXRsZS5jbGFzc0xpc3QuYWRkKFwibWFpbi1wcm9qZWN0LXRpdGxlXCIpO1xuICBwcm9qZWN0RGVzY3JpcHRpb24uY2xhc3NMaXN0LmFkZChcIm1haW4tcHJvamVjdC1kZXNjcmlwdGlvblwiKTtcbiAgcHJvamVjdEV4cGFuZEJ0bi5jbGFzc0xpc3QuYWRkKFwibWFpbi1wcm9qZWN0LWV4cGFuZEJ0blwiKTtcbiAgcHJvamVjdERlbGV0ZUJ0bi5jbGFzc0xpc3QuYWRkKFwibWFpbi1wcm9qZWN0LWRlbGV0ZUJ0blwiKTtcbiAgcHJvamVjdEV4cGFuZEljb24uY2xhc3NMaXN0LmFkZChcIm1haW4taWNvbnNcIik7XG4gIHByb2plY3REZWxldGVJY29uLmNsYXNzTGlzdC5hZGQoXCJtYWluLWljb25zXCIpO1xuXG4gIGlmICghcHJvamVjdE9iai5jb21wbGV0ZWQpIHtcbiAgICBwcm9qZWN0LnN0eWxlLmJhY2tncm91bmRJbWFnZSA9XG4gICAgICBcImxpbmVhci1ncmFkaWVudCh0byByaWdodCwgXCIgK1xuICAgICAgZ2V0T2JqQ29sb3IoaW5kZXgsIHByb2plY3RBcnIpICtcbiAgICAgIFwiLCB0cmFuc3BhcmVudCAxNSUpXCI7XG4gIH1cbiAgcHJvamVjdC5kcmFnZ2FibGUgPSB0cnVlO1xuICBwcm9qZWN0LmFkZEV2ZW50TGlzdGVuZXIoXCJkcmFnc3RhcnRcIiwgKGUpID0+IHtcbiAgICBlLmRhdGFUcmFuc2Zlci5zZXREYXRhKFwidGV4dC9wbGFpblwiLCBwcm9qZWN0T2JqLnByaW9yaXR5KTtcbiAgICBwcm9qZWN0LnN0eWxlLm9wYWNpdHkgPSAwLjU7XG4gIH0pO1xuICBwcm9qZWN0LmFkZEV2ZW50TGlzdGVuZXIoXCJkcmFnb3ZlclwiLCAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgfSk7XG4gIHByb2plY3QuYWRkRXZlbnRMaXN0ZW5lcihcImRyb3BcIiwgKGUpID0+IHtcbiAgICBjb25zdCBkcmFnZ2VkUHJvamVjdFByaW9yaXR5ID0gZS5kYXRhVHJhbnNmZXIuZ2V0RGF0YShcInRleHQvcGxhaW5cIik7XG4gICAgc3dhcFByb2plY3QocHJvamVjdEFyciwgZHJhZ2dlZFByb2plY3RQcmlvcml0eSwgcHJvamVjdE9iai5wcmlvcml0eSk7XG4gIH0pO1xuICBwcm9qZWN0LmFkZEV2ZW50TGlzdGVuZXIoXCJkcmFnZW5kXCIsIChlKSA9PiB7XG4gICAgcHJvamVjdC5zdHlsZS5vcGFjaXR5ID0gMTtcbiAgfSk7XG4gIHByb2plY3QuaWQgPSBcIm1haW4tcHJvamVjdC1cIiArIHByb2plY3RPYmouaWQ7XG4gIHByb2plY3QuZGF0YXNldC5wcmlvcml0eSA9IHByb2plY3RPYmoucHJpb3JpdHk7XG4gIHByb2plY3RDaGVja2JveC5jaGVja2VkID0gcHJvamVjdE9iai5jb21wbGV0ZWQ7XG4gIGlmIChwcm9qZWN0T2JqLmNvbXBsZXRlZCkgcHJvamVjdENoZWNrYm94LmRpc2FibGVkID0gdHJ1ZTtcbiAgcHJvamVjdENoZWNrYm94LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgY29tcGxldGVQcm9qZWN0KHByb2plY3RPYmopO1xuICB9KTtcbiAgcHJvamVjdFRpdGxlLnRleHRDb250ZW50ID0gcHJvamVjdE9iai50aXRsZTtcbiAgcHJvamVjdFRpdGxlLnNwZWxsY2hlY2sgPSBmYWxzZTtcbiAgcHJvamVjdERlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gcHJvamVjdE9iai5kZXNjcmlwdGlvbjtcbiAgcHJvamVjdERlc2NyaXB0aW9uLnNwZWxsY2hlY2sgPSBmYWxzZTtcbiAgcHJvamVjdEV4cGFuZEJ0blRleHQudGV4dENvbnRlbnQgPSBcIkVYUEFORFwiO1xuICBwcm9qZWN0RXhwYW5kQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgaWYgKHByb2plY3RFeHBhbmRCdG5UZXh0LnRleHRDb250ZW50ID09PSBcIkVYUEFORFwiKSB7XG4gICAgICBwcm9qZWN0RXhwYW5kQnRuVGV4dC50ZXh0Q29udGVudCA9IFwiQ09MTEFQU0VcIjtcbiAgICAgIHByb2plY3RFeHBhbmRJY29uLnNyYyA9IGV4cGFuZEljb25MZXNzO1xuICAgICAgcHJvamVjdERlc2NyaXB0aW9uLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHByb2plY3RFeHBhbmRCdG5UZXh0LnRleHRDb250ZW50ID0gXCJFWFBBTkRcIjtcbiAgICAgIHByb2plY3RFeHBhbmRJY29uLnNyYyA9IGV4cGFuZEljb25Nb3JlO1xuICAgICAgcHJvamVjdERlc2NyaXB0aW9uLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XG4gICAgfVxuICB9KTtcbiAgcHJvamVjdERlbGV0ZUJ0blRleHQudGV4dENvbnRlbnQgPSBcIkRFTEVURVwiO1xuICBwcm9qZWN0RGVsZXRlQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgZGVsZXRlUHJvamVjdChpbmRleCwgcHJvamVjdEFycik7XG4gIH0pO1xuXG4gIHByb2plY3RFeHBhbmRJY29uLnNyYyA9IGV4cGFuZEljb25Nb3JlO1xuICBwcm9qZWN0RGVsZXRlSWNvbi5zcmMgPSBkZWxldGVJY29uO1xuXG4gIHByb2plY3QuYXBwZW5kQ2hpbGQocHJvamVjdENoZWNrYm94KTtcbiAgcHJvamVjdC5hcHBlbmRDaGlsZChwcm9qZWN0VGl0bGUpO1xuICBwcm9qZWN0VGl0bGUuYXBwZW5kQ2hpbGQocHJvamVjdERlc2NyaXB0aW9uKTtcbiAgcHJvamVjdC5hcHBlbmRDaGlsZChwcm9qZWN0RXhwYW5kQnRuKTtcbiAgcHJvamVjdC5hcHBlbmRDaGlsZChwcm9qZWN0RGVsZXRlQnRuKTtcbiAgcHJvamVjdEV4cGFuZEJ0bi5hcHBlbmRDaGlsZChwcm9qZWN0RXhwYW5kQnRuVGV4dCk7XG4gIHByb2plY3RFeHBhbmRCdG4uYXBwZW5kQ2hpbGQocHJvamVjdEV4cGFuZEljb24pO1xuICBwcm9qZWN0RGVsZXRlQnRuLmFwcGVuZENoaWxkKHByb2plY3REZWxldGVCdG5UZXh0KTtcbiAgcHJvamVjdERlbGV0ZUJ0bi5hcHBlbmRDaGlsZChwcm9qZWN0RGVsZXRlSWNvbik7XG4gIHByb2plY3QuYXBwZW5kQ2hpbGQoc29ydFRhc2tDb21wb25lbnQpO1xuICBwcm9qZWN0LmFwcGVuZENoaWxkKGFkZFRhc2tCdG5Db21wb25lbnQpO1xuICBwcm9qZWN0LmFwcGVuZENoaWxkKHByb2plY3RUYXNrTGlzdCk7XG5cbiAgcmV0dXJuIHByb2plY3Q7XG59XG5cbi8qIFRBU0sgTElTVCBDT01QT05FTlQgKi9cbi8qKlxuICogQ3JlYXRlIGEgdGFzayBsaXN0IGNvbXBvbmVudCBhc3NvY2lhdGVkIHdpdGggYSBwcm9qZWN0LlxuICogQHBhcmFtIHtwcm9qZWN0fSBwcm9qZWN0T2JqIEFzc29jaWF0ZWQgcHJvamVjdCBvYmplY3RcbiAqIEByZXR1cm4ge0hUTUxFbGVtZW50fSBUYXNrIGxpc3QgZWxlbWVudFxuICogQGV4cG9ydFxuICovXG5leHBvcnQgZnVuY3Rpb24gdGFza0xpc3QocHJvamVjdE9iaikge1xuICBjb25zdCB0YXNrTGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ1bFwiKTtcbiAgY29uc3QgdGFza0FyciA9IHByb2plY3RPYmoudGFza3M7XG5cbiAgdGFza0xpc3QuY2xhc3NMaXN0LmFkZChcIm1haW4tcHJvamVjdC10YXNrTGlzdFwiKTtcbiAgdGFza0xpc3QuaWQgPSBcIm1haW4tcHJvamVjdC10YXNrTGlzdC1cIiArIHByb2plY3RPYmouaWQ7XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCB0YXNrQXJyLmxlbmd0aDsgaSsrKSB7XG4gICAgY29uc3QgdGFza0NvbXBvbmVudCA9IHRhc2socHJvamVjdE9iaiwgaSk7XG4gICAgdGFza0xpc3QuYXBwZW5kQ2hpbGQodGFza0NvbXBvbmVudCk7XG4gIH1cblxuICByZXR1cm4gdGFza0xpc3Q7XG59XG5cbi8qIFRBU0sgQ09NUE9ORU5UICovXG4vKipcbiAqIENyZWF0ZSBhIHRhc2sgY29tcG9uZW50IGZyb20gdGhlIGFzc29jaWF0ZWQgcHJvamVjdCBhbmQgdGhlIHRhc2sgaW5kZXguXG4gKiBAcGFyYW0ge3Byb2plY3R9IHByb2plY3RPYmogUHJvamVjdCBvYmplY3RcbiAqIEBwYXJhbSB7TnVtYmVyfSB0YXNrSW5kZXggSW5kZXggb2YgdGhlIHRhc2sgaW4gdGhlIHByb2plY3RcbiAqIEByZXR1cm4ge0hUTUxFbGVtZW50fSBUYXNrIGNvbXBvbmVudFxuICovXG5mdW5jdGlvbiB0YXNrKHByb2plY3RPYmosIHRhc2tJbmRleCkge1xuICBjb25zdCB0YXNrQXJyID0gcHJvamVjdE9iai50YXNrcztcbiAgY29uc3QgdGFza09iaiA9IHRhc2tBcnJbdGFza0luZGV4XTtcbiAgY29uc3QgdGFzayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgY29uc3QgdGFza0NoZWNrYm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICBjb25zdCB0YXNrVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDRcIik7XG4gIGNvbnN0IHRhc2tEZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICBjb25zdCB0YXNrRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICBjb25zdCB0YXNrRXhwYW5kQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgY29uc3QgdGFza0V4cGFuZEJ0blRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgY29uc3QgdGFza0RlbGV0ZUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIGNvbnN0IHRhc2tEZWxldGVCdG5UZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gIGNvbnN0IHRhc2tFeHBhbmRJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgY29uc3QgdGFza0RlbGV0ZUljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuXG4gIHRhc2suY2xhc3NMaXN0LmFkZChcIm1haW4tdGFza1wiKTtcbiAgdGFza0NoZWNrYm94LnR5cGUgPSBcImNoZWNrYm94XCI7XG4gIHRhc2tDaGVja2JveC5jbGFzc0xpc3QuYWRkKFwibWFpbi10YXNrLWNoZWNrYm94XCIpO1xuICB0YXNrVGl0bGUuY2xhc3NMaXN0LmFkZChcIm1haW4tdGFzay10aXRsZVwiKTtcbiAgdGFza0Rlc2NyaXB0aW9uLmNsYXNzTGlzdC5hZGQoXCJtYWluLXRhc2stZGVzY3JpcHRpb25cIik7XG4gIHRhc2tEYXRlLmNsYXNzTGlzdC5hZGQoXCJtYWluLXRhc2stZGF0ZVwiKTtcbiAgdGFza0V4cGFuZEJ0bi5jbGFzc0xpc3QuYWRkKFwibWFpbi10YXNrLWV4cGFuZEJ0blwiKTtcbiAgdGFza0RlbGV0ZUJ0bi5jbGFzc0xpc3QuYWRkKFwibWFpbi10YXNrLWRlbGV0ZUJ0blwiKTtcbiAgdGFza0V4cGFuZEljb24uY2xhc3NMaXN0LmFkZChcIm1haW4taWNvbnNcIik7XG4gIHRhc2tEZWxldGVJY29uLmNsYXNzTGlzdC5hZGQoXCJtYWluLWljb25zXCIpO1xuXG4gIGlmICghdGFza09iai5jb21wbGV0ZWQpIHtcbiAgICB0YXNrLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9XG4gICAgICBcImxpbmVhci1ncmFkaWVudCh0byByaWdodCwgXCIgK1xuICAgICAgZ2V0T2JqQ29sb3IodGFza0luZGV4LCB0YXNrQXJyKSArXG4gICAgICBcIiwgdHJhbnNwYXJlbnQgMTAlKVwiO1xuICB9XG4gIHRhc2suZGF0YXNldC5wcmlvcml0eSA9IHRhc2tPYmoucHJpb3JpdHk7XG4gIHRhc2tUaXRsZS5zcGVsbGNoZWNrID0gZmFsc2U7XG4gIHRhc2tEZXNjcmlwdGlvbi5zcGVsbGNoZWNrID0gZmFsc2U7XG4gIHRhc2tFeHBhbmRCdG5UZXh0LnRleHRDb250ZW50ID0gXCJFWFBBTkRcIjtcbiAgdGFza0V4cGFuZEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIGlmICh0YXNrRXhwYW5kQnRuVGV4dC50ZXh0Q29udGVudCA9PT0gXCJFWFBBTkRcIikge1xuICAgICAgdGFza0V4cGFuZEJ0blRleHQudGV4dENvbnRlbnQgPSBcIkNPTExBUFNFXCI7XG4gICAgICB0YXNrRXhwYW5kSWNvbi5zcmMgPSBleHBhbmRJY29uTGVzcztcbiAgICAgIHRhc2tEZXNjcmlwdGlvbi5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0YXNrRXhwYW5kQnRuVGV4dC50ZXh0Q29udGVudCA9IFwiRVhQQU5EXCI7XG4gICAgICB0YXNrRXhwYW5kSWNvbi5zcmMgPSBleHBhbmRJY29uTW9yZTtcbiAgICAgIHRhc2tEZXNjcmlwdGlvbi5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xuICAgIH1cbiAgfSk7XG5cbiAgdGFza0RlbGV0ZUJ0blRleHQudGV4dENvbnRlbnQgPSBcIkRFTEVURVwiO1xuICB0YXNrRGVsZXRlQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgZGVsZXRlVGFzayhwcm9qZWN0T2JqLCB0YXNrSW5kZXgpO1xuICB9KTtcblxuICB0YXNrRXhwYW5kSWNvbi5zcmMgPSBleHBhbmRJY29uTW9yZTtcbiAgdGFza0RlbGV0ZUljb24uc3JjID0gZGVsZXRlSWNvbjtcblxuICB0YXNrQ2hlY2tib3guY2hlY2tlZCA9IHRhc2tPYmouY29tcGxldGVkIHx8IHByb2plY3RPYmouY29tcGxldGVkO1xuICBpZiAocHJvamVjdE9iai5jb21wbGV0ZWQpIHRhc2tDaGVja2JveC5kaXNhYmxlZCA9IHRydWU7XG4gIHRhc2tDaGVja2JveC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIGNvbXBsZXRlVGFzayhwcm9qZWN0T2JqLCB0YXNrSW5kZXgpO1xuICB9KTtcblxuICB0YXNrVGl0bGUudGV4dENvbnRlbnQgPSB0YXNrT2JqLnRpdGxlO1xuICB0YXNrRGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSB0YXNrT2JqLmRlc2NyaXB0aW9uO1xuICB0YXNrRGF0ZS50ZXh0Q29udGVudCA9IHRhc2tPYmouZHVlRGF0ZTtcblxuICB0YXNrLmFwcGVuZENoaWxkKHRhc2tDaGVja2JveCk7XG4gIHRhc2suYXBwZW5kQ2hpbGQodGFza1RpdGxlKTtcbiAgdGFza1RpdGxlLmFwcGVuZENoaWxkKHRhc2tEZXNjcmlwdGlvbik7XG4gIHRhc2suYXBwZW5kQ2hpbGQodGFza0RhdGUpO1xuICB0YXNrLmFwcGVuZENoaWxkKHRhc2tFeHBhbmRCdG4pO1xuICB0YXNrRXhwYW5kQnRuLmFwcGVuZENoaWxkKHRhc2tFeHBhbmRCdG5UZXh0KTtcbiAgdGFza0V4cGFuZEJ0bi5hcHBlbmRDaGlsZCh0YXNrRXhwYW5kSWNvbik7XG4gIHRhc2suYXBwZW5kQ2hpbGQodGFza0RlbGV0ZUJ0bik7XG4gIHRhc2tEZWxldGVCdG4uYXBwZW5kQ2hpbGQodGFza0RlbGV0ZUJ0blRleHQpO1xuICB0YXNrRGVsZXRlQnRuLmFwcGVuZENoaWxkKHRhc2tEZWxldGVJY29uKTtcblxuICByZXR1cm4gdGFzaztcbn1cblxuLyoqXG4gKiBDcmVhdGUgYSBwb3B1cCBjb21wb25lbnQgdG8gYWRkIGEgbmV3IHRhc2sgYXNzb2NpYXRlZCB3aXRoXG4gKiB0aGUgaW5wdXQgcHJvamVjdCBvYmplY3QuXG4gKiBAcGFyYW0ge3Byb2plY3R9IHByb2plY3RPYmogQXNzb2NpYXRlZCBwcm9qZWN0IG9iamVjdFxuICogQHJldHVybiB7SFRNTEVsZW1lbnR9IEFkZCB0YXNrIGVsZW1lbnRcbiAqL1xuZnVuY3Rpb24gYWRkVGFza1BvcHVwKHByb2plY3RPYmopIHtcbiAgY29uc3QgYWRkVGFza0Zvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZm9ybVwiKTtcbiAgY29uc3QgdGFza1RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICBjb25zdCB0YXNrRGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGV4dGFyZWFcIik7XG4gIGNvbnN0IHRhc2tEYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICBjb25zdCBjb25maXJtQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgY29uc3QgY2FuY2VsQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcblxuICBhZGRUYXNrRm9ybS5jbGFzc0xpc3QuYWRkKFwibWFpbi1hZGRUYXNrRm9ybVwiKTtcbiAgYWRkVGFza0Zvcm0uaWQgPSBcIm1haW4tYWRkVGFza0Zvcm0tXCIgKyBwcm9qZWN0T2JqLmlkO1xuICB0YXNrVGl0bGUuY2xhc3NMaXN0LmFkZChcIm1haW4tYWRkVGFza0Zvcm0tdGl0bGVcIik7XG4gIHRhc2tEZXNjcmlwdGlvbi5jbGFzc0xpc3QuYWRkKFwibWFpbi1hZGRUYXNrRm9ybS1kZXNjcmlwdGlvblwiKTtcbiAgdGFza0RhdGUuY2xhc3NMaXN0LmFkZChcIm1haW4tYWRkVGFza0Zvcm0tZGF0ZVwiKTtcbiAgY29uZmlybUJ0bi5jbGFzc0xpc3QuYWRkKFwibWFpbi1hZGRUYXNrRm9ybS1jb25maXJtXCIpO1xuICBjYW5jZWxCdG4uY2xhc3NMaXN0LmFkZChcIm1haW4tYWRkVGFza0Zvcm0tY2FuY2VsXCIpO1xuXG4gIHRhc2tUaXRsZS50eXBlID0gXCJ0ZXh0XCI7XG4gIHRhc2tUaXRsZS5wbGFjZWhvbGRlciA9IFwiVGFzayBOYW1lXCI7XG4gIHRhc2tUaXRsZS5uYW1lID0gXCJ0aXRsZVwiO1xuICB0YXNrVGl0bGUucmVxdWlyZWQgPSB0cnVlO1xuICB0YXNrRGVzY3JpcHRpb24ucGxhY2Vob2xkZXIgPSBcIlRhc2sgRGVzY3JpcHRpb25cIjtcbiAgdGFza0Rlc2NyaXB0aW9uLm5hbWUgPSBcImRlc2NyaXB0aW9uXCI7XG4gIHRhc2tEYXRlLnR5cGUgPSBcImRhdGVcIjtcbiAgdGFza0RhdGUubmFtZSA9IFwiZHVlRGF0ZVwiO1xuICBjb25maXJtQnRuLnR5cGUgPSBcInN1Ym1pdFwiO1xuICBjb25maXJtQnRuLnRleHRDb250ZW50ID0gXCJDb25maXJtXCI7XG4gIGNhbmNlbEJ0bi50eXBlID0gXCJidXR0b25cIjtcbiAgY2FuY2VsQnRuLnRleHRDb250ZW50ID0gXCJDYW5jZWxcIjtcblxuICBhZGRUYXNrRm9ybS5vbnN1Ym1pdCA9IChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGFkZFRhc2socHJvamVjdE9iaik7XG4gICAgYWRkVGFza0Zvcm0ucmVtb3ZlKCk7XG4gIH07XG4gIGNhbmNlbEJ0bi5vbmNsaWNrID0gKCkgPT4ge1xuICAgIGFkZFRhc2tGb3JtLnJlbW92ZSgpO1xuICB9O1xuXG4gIGFkZFRhc2tGb3JtLmFwcGVuZENoaWxkKHRhc2tUaXRsZSk7XG4gIGFkZFRhc2tGb3JtLmFwcGVuZENoaWxkKHRhc2tEZXNjcmlwdGlvbik7XG4gIGFkZFRhc2tGb3JtLmFwcGVuZENoaWxkKHRhc2tEYXRlKTtcbiAgYWRkVGFza0Zvcm0uYXBwZW5kQ2hpbGQoY29uZmlybUJ0bik7XG4gIGFkZFRhc2tGb3JtLmFwcGVuZENoaWxkKGNhbmNlbEJ0bik7XG5cbiAgcmV0dXJuIGFkZFRhc2tGb3JtO1xufVxuXG4vKipcbiAqIENyZWF0ZSBhbiBhZGQgdGFzayBidXR0b24gY29tcG9uZW50IGFzc29jaWF0ZWQgd2l0aCBhIHByb2plY3QuXG4gKiBAcGFyYW0ge0FycmF5fSBwcm9qZWN0T2JqIEFzc29jaWF0ZWQgcHJvamVjdCBvYmplY3RcbiAqIEByZXR1cm4ge0hUTUxFbGVtZW50fSBBZGQgdGFzayBidXR0b25cbiAqL1xuZnVuY3Rpb24gYWRkVGFza0J0bihwcm9qZWN0T2JqKSB7XG4gIGNvbnN0IGFkZFRhc2tCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuXG4gIGFkZFRhc2tCdG4uY2xhc3NMaXN0LmFkZChcIm1haW4tYWRkVGFza0J0blwiKTtcbiAgYWRkVGFza0J0bi50ZXh0Q29udGVudCA9IFwiQWRkIFRhc2sgK1wiO1xuICBpZiAocHJvamVjdE9iai5jb21wbGV0ZWQpIGFkZFRhc2tCdG4uZGlzYWJsZWQgPSB0cnVlO1xuXG4gIGFkZFRhc2tCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBpZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtYWluLWFkZFRhc2tGb3JtLVwiICsgcHJvamVjdE9iai5pZCkpIHJldHVybjtcbiAgICBjb25zdCB0YXNrTGlzdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFxuICAgICAgXCJtYWluLXByb2plY3QtdGFza0xpc3QtXCIgKyBwcm9qZWN0T2JqLmlkXG4gICAgKTtcbiAgICB0YXNrTGlzdC5hcHBlbmRDaGlsZChhZGRUYXNrUG9wdXAocHJvamVjdE9iaikpO1xuICB9KTtcblxuICByZXR1cm4gYWRkVGFza0J0bjtcbn1cblxuLyogU09SVCBUQVNLIENPTVBPTkVOVCAqL1xuLyoqXG4gKiBDcmVhdGUgYSBzb3J0IHRhc2sgY29tcG9uZW50IGFzc29jaWF0ZWQgd2l0aCBhIHByb2plY3QuXG4gKiBAcGFyYW0ge3Byb2plY3R9IHByb2plY3RPYmogQXNzb2NpYXRlZCBwcm9qZWN0IG9iamVjdFxuICogQHJldHVybiB7SFRNTEVsZW1lbnR9IFNvcnQgdGFzayBjb21wb25lbnRcbiAqL1xuZnVuY3Rpb24gc29ydENvbXBvbmVudChwcm9qZWN0T2JqKSB7XG4gIGNvbnN0IHNvcnRUYXNrV3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IHNvcnRUYXNrQnlQcmlvcml0eUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICBjb25zdCBzb3J0VGFza0J5UHJpb3JpdHlCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gIGNvbnN0IHNvcnRUYXNrQnlEYXRlTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gIGNvbnN0IHNvcnRUYXNrQnlEYXRlQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuXG4gIHNvcnRUYXNrV3JhcHBlci5jbGFzc0xpc3QuYWRkKFwibWFpbi1wcm9qZWN0LXNvcnRUYXNrV3JhcHBlclwiKTtcbiAgc29ydFRhc2tCeVByaW9yaXR5TGFiZWwuY2xhc3NMaXN0LmFkZChcIm1haW4tcHJvamVjdC1zb3J0TGFiZWxcIik7XG4gIHNvcnRUYXNrQnlQcmlvcml0eUJ0bi5jbGFzc0xpc3QuYWRkKFwibWFpbi1wcm9qZWN0LXNvcnRCdG5cIik7XG4gIHNvcnRUYXNrQnlEYXRlTGFiZWwuY2xhc3NMaXN0LmFkZChcIm1haW4tcHJvamVjdC1zb3J0TGFiZWxcIik7XG4gIHNvcnRUYXNrQnlEYXRlQnRuLmNsYXNzTGlzdC5hZGQoXCJtYWluLXByb2plY3Qtc29ydEJ0blwiKTtcblxuICBzb3J0VGFza0J5UHJpb3JpdHlMYWJlbC50ZXh0Q29udGVudCA9IFwiU29ydCBieSBwcmlvcml0eVwiO1xuICBzb3J0VGFza0J5UHJpb3JpdHlMYWJlbC5odG1sRm9yID0gXCJzb3J0UHJpb3JpdHktXCIgKyBwcm9qZWN0T2JqLmlkO1xuICBzb3J0VGFza0J5RGF0ZUxhYmVsLnRleHRDb250ZW50ID0gXCJTb3J0IGJ5IGRhdGVcIjtcbiAgc29ydFRhc2tCeURhdGVMYWJlbC5odG1sRm9yID0gXCJzb3J0RGF0ZS1cIiArIHByb2plY3RPYmouaWQ7XG5cbiAgc29ydFRhc2tCeVByaW9yaXR5QnRuLnR5cGUgPSBcInJhZGlvXCI7XG4gIHNvcnRUYXNrQnlQcmlvcml0eUJ0bi5uYW1lID0gXCJzb3J0VGFzay1cIiArIHByb2plY3RPYmouaWQ7XG4gIHNvcnRUYXNrQnlQcmlvcml0eUJ0bi5pZCA9IFwic29ydFByaW9yaXR5LVwiICsgcHJvamVjdE9iai5pZDtcbiAgc29ydFRhc2tCeVByaW9yaXR5QnRuLnZhbHVlID0gXCJwcmlvcml0eVwiO1xuICBzb3J0VGFza0J5UHJpb3JpdHlCdG4uY2hlY2tlZCA9IHRydWU7XG5cbiAgc29ydFRhc2tCeURhdGVCdG4udHlwZSA9IFwicmFkaW9cIjtcbiAgc29ydFRhc2tCeURhdGVCdG4ubmFtZSA9IFwic29ydFRhc2stXCIgKyBwcm9qZWN0T2JqLmlkO1xuICBzb3J0VGFza0J5RGF0ZUJ0bi5pZCA9IFwic29ydERhdGUtXCIgKyBwcm9qZWN0T2JqLmlkO1xuICBzb3J0VGFza0J5RGF0ZUJ0bi52YWx1ZSA9IFwiZGF0ZVwiO1xuXG4gIHNvcnRUYXNrQnlQcmlvcml0eUJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIHNvcnRBcnJCeVByaW9yaXR5KHByb2plY3RPYmoudGFza3MpO1xuICAgIHJlZnJlc2hUYXNrTGlzdChwcm9qZWN0T2JqKTtcbiAgfSk7XG5cbiAgc29ydFRhc2tCeURhdGVCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBzb3J0VGFza0J5RGF0ZShwcm9qZWN0T2JqLnRhc2tzKTtcbiAgICByZWZyZXNoVGFza0xpc3QocHJvamVjdE9iaik7XG4gIH0pO1xuXG4gIHNvcnRUYXNrV3JhcHBlci5hcHBlbmRDaGlsZChzb3J0VGFza0J5UHJpb3JpdHlCdG4pO1xuICBzb3J0VGFza1dyYXBwZXIuYXBwZW5kQ2hpbGQoc29ydFRhc2tCeVByaW9yaXR5TGFiZWwpO1xuICBzb3J0VGFza1dyYXBwZXIuYXBwZW5kQ2hpbGQoc29ydFRhc2tCeURhdGVCdG4pO1xuICBzb3J0VGFza1dyYXBwZXIuYXBwZW5kQ2hpbGQoc29ydFRhc2tCeURhdGVMYWJlbCk7XG5cbiAgcmV0dXJuIHNvcnRUYXNrV3JhcHBlcjtcbn1cblxuLyoqXG4gKiBHZXQgdGhlIGNvbG9yIG9mIGEgcHJvamVjdCBvciB0YXNrIG9iamVjdCBiYXNlZCBvbiBpdHMgcHJpb3JpdHkuXG4gKiBAcGFyYW0ge051bWJlcn0gaW5kZXggSW5kZXggb2Ygb2JqZWN0IGluIGFycmF5XG4gKiBAcGFyYW0ge0FycmF5fSBvYmpBcnIgUHJvamVjdCBvciB0YXNrIGFycmF5XG4gKiBAcmV0dXJuIHtTdHJpbmd9IENvbG9yIHN0cmluZ1xuICovXG5mdW5jdGlvbiBnZXRPYmpDb2xvcihpbmRleCwgb2JqQXJyKSB7XG4gIGNvbnN0IG9iaiA9IG9iakFycltpbmRleF07XG4gIGNvbnN0IG9ialByaW9yaXR5ID0gb2JqLnByaW9yaXR5O1xuICBjb25zdCBub3JtYWxpemVkUHJpb3JpdHkgPSBvYmpQcmlvcml0eSAvIChvYmpBcnIubGVuZ3RoIC0gMSk7XG4gIGNvbnN0IHJlZCA9IE1hdGgucm91bmQoMjU1ICogKDEgLSBub3JtYWxpemVkUHJpb3JpdHkpKTtcbiAgY29uc3QgZ3JlZW4gPSBNYXRoLnJvdW5kKDI1NSAqIG5vcm1hbGl6ZWRQcmlvcml0eSk7XG4gIHJldHVybiBcInJnYihcIiArIHJlZCArIFwiLFwiICsgZ3JlZW4gKyBcIiwwKVwiO1xufVxuXG5cblxuIiwiLyoqXG4gKiBAZmlsZW92ZXJ2aWV3IFRvZG8gbGlzdCBhcHBcbiAqIEBhdXRob3IgVGhpbmggTmd1eWVuXG4gKiBAdmVyc2lvbiAxLjAuMFxuICovXG5cblwidXNlIHN0cmljdFwiO1xuXG4vKiBJTVBPUlRTICovXG5pbXBvcnQgcGFnZUxvYWQgZnJvbSBcIi4vY29tcG9uZW50cy9wYWdlTG9hZFwiO1xuaW1wb3J0IHJlbmRlclBlbmRpbmdDb21wb25lbnQsIHtcbiAgcmVmcmVzaFByb2plY3RMaXN0LFxuICByZWZyZXNoVGFza0xpc3QsXG59IGZyb20gXCIuL2NvbXBvbmVudHMvcGVuZGluZy9wZW5kaW5nXCI7XG5pbXBvcnQgcmVuZGVyQXJjaGl2ZUNvbXBvbmVudCBmcm9tIFwiLi9jb21wb25lbnRzL2FyY2hpdmUvYXJjaGl2ZVwiO1xuaW1wb3J0IFwiLi9zdHlsZXMvc3R5bGVzLmNzc1wiO1xuaW1wb3J0IFwiLi9zdHlsZXMvc3R5bGVzLXJlc2V0LmNzc1wiO1xuaW1wb3J0IGZhdmljb25MaW5rIGZyb20gXCIuL2Fzc2V0cy9mYXZpY29uLnBuZ1wiO1xuXG4vKiBMT0NBTCBTVE9SQUdFICovXG4vKipcbiAqIEdldCB0aGUgcGVuZGluZyBwcm9qZWN0cyBmcm9tIGxvY2FsU3RvcmFnZS5cbiAqIEByZXR1cm4ge0FycmF5fSBBcnJheSBvZiBwcm9qZWN0IG9iamVjdHNcbiAqL1xuZnVuY3Rpb24gZ2V0UGVuZGluZ1Byb2plY3RzKCkge1xuICBsZXQgcGVuZGluZ1Byb2plY3RzID0gW107XG4gIGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInBlbmRpbmdQcm9qZWN0c1wiKSkge1xuICAgIHBlbmRpbmdQcm9qZWN0cyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJwZW5kaW5nUHJvamVjdHNcIikpO1xuICB9XG4gIHJldHVybiBwZW5kaW5nUHJvamVjdHM7XG59XG5cbi8qKlxuICogR2V0IHRoZSBjb21wbGV0ZWQgcHJvamVjdHMgZnJvbSBsb2NhbFN0b3JhZ2UuXG4gKiBAcmV0dXJuIHtBcnJheX0gQXJyYXkgb2YgcHJvamVjdCBvYmplY3RzXG4gKi9cbmZ1bmN0aW9uIGdldENvbXBsZXRlZFByb2plY3RzKCkge1xuICBsZXQgY29tcGxldGVkUHJvamVjdHMgPSBbXTtcbiAgaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiY29tcGxldGVkUHJvamVjdHNcIikpIHtcbiAgICBjb21wbGV0ZWRQcm9qZWN0cyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJjb21wbGV0ZWRQcm9qZWN0c1wiKSk7XG4gIH1cbiAgcmV0dXJuIGNvbXBsZXRlZFByb2plY3RzO1xufVxuXG4vKipcbiAqIFNhdmUgdGhlIHBlbmRpbmcgcHJvamVjdHMgdG8gbG9jYWxTdG9yYWdlLlxuICogQHBhcmFtIHtBcnJheX0gcGVuZGluZ1Byb2plY3RzIEFycmF5IG9mIHByb2plY3Qgb2JqZWN0c1xuICogQHJldHVybiB7dm9pZH1cbiAqL1xuZnVuY3Rpb24gc2F2ZVBlbmRpbmdQcm9qZWN0cyhwZW5kaW5nUHJvamVjdHMpIHtcbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJwZW5kaW5nUHJvamVjdHNcIiwgSlNPTi5zdHJpbmdpZnkocGVuZGluZ1Byb2plY3RzKSk7XG59XG5cbi8qKlxuICogU2F2ZSB0aGUgY29tcGxldGVkIHByb2plY3RzIHRvIGxvY2FsU3RvcmFnZS5cbiAqIEBwYXJhbSB7QXJyYXl9IGNvbXBsZXRlZFByb2plY3RzIEFycmF5IG9mIHByb2plY3Qgb2JqZWN0c1xuICogQHJldHVybiB7dm9pZH1cbiAqL1xuZnVuY3Rpb24gc2F2ZUNvbXBsZXRlZFByb2plY3RzKGNvbXBsZXRlZFByb2plY3RzKSB7XG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiY29tcGxldGVkUHJvamVjdHNcIiwgSlNPTi5zdHJpbmdpZnkoY29tcGxldGVkUHJvamVjdHMpKTtcbn1cblxuLyoqXG4gKiBTYXZlIHBlbmRpbmcgcHJvamVjdHMgYW5kIGNvbXBsZXRlZCBwcm9qZWN0cyB0byBsb2NhbFN0b3JhZ2Ugd2hlbiB0aGUgcGFnZSBpcyBjbG9zZWQuXG4gKiBAcmV0dXJuIHt2b2lkfVxuICovXG5mdW5jdGlvbiBzYXZlUHJvamVjdHMoKSB7XG4gIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwiYmVmb3JldW5sb2FkXCIsICgpID0+IHtcbiAgICBzYXZlUGVuZGluZ1Byb2plY3RzKHBlbmRpbmdQcm9qZWN0cyk7XG4gICAgc2F2ZUNvbXBsZXRlZFByb2plY3RzKGNvbXBsZXRlZFByb2plY3RzKTtcbiAgfSk7XG59XG5cbi8qIERBVEEgU1RSVUNUVVJFUyAqL1xuLyoqXG4gKiBDcmVhdGUgYSBwcm9qZWN0IG9iamVjdC5cbiAqIEBwYXJhbSB7U3RyaW5nfSB0aXRsZSBUaXRsZSBvZiB0aGUgcHJvamVjdFxuICogQHBhcmFtIHtTdHJpbmd9IGRlc2NyaXB0aW9uIERlc2NyaXB0aW9uIG9mIHRoZSBwcm9qZWN0XG4gKiBAcGFyYW0ge051bWJlcn0gcHJpb3JpdHkgUHJpb3JpdHkgb2YgdGhlIHByb2plY3RcbiAqIEBwYXJhbSB7QXJyYXl9IHRhc2tzIEFycmF5IG9mIHRhc2tzXG4gKiBAcGFyYW0ge051bWJlcn0gaWQgSWQgb2YgdGhlIHByb2plY3RcbiAqIEBwYXJhbSB7Qm9vbGVhbn0gY29tcGxldGVkIFN0YXR1cyBvZiB0aGUgcHJvamVjdFxuICogQHJldHVybiB7T2JqZWN0fSBQcm9qZWN0IG9iamVjdFxuICovXG5jb25zdCBwcm9qZWN0ID0gKHRpdGxlLCBkZXNjcmlwdGlvbiwgcHJpb3JpdHksIHRhc2tzLCBpZCwgY29tcGxldGVkKSA9PiB7XG4gIHJldHVybiB7IHRpdGxlLCBkZXNjcmlwdGlvbiwgcHJpb3JpdHksIHRhc2tzLCBpZCwgY29tcGxldGVkIH07XG59O1xuXG4vKipcbiAqIENyZWF0ZSBhIHRhc2sgb2JqZWN0LlxuICogQHBhcmFtIHtTdHJpbmd9IHRpdGxlIFRpdGxlIG9mIHRoZSB0YXNrXG4gKiBAcGFyYW0ge1N0cmluZ30gZGVzY3JpcHRpb24gRGVzY3JpcHRpb24gb2YgdGhlIHRhc2tcbiAqIEBwYXJhbSB7TnVtYmVyfSBwcmlvcml0eSBQcmlvcml0eSBvZiB0aGUgdGFza1xuICogQHBhcmFtIHtTdHJpbmd9IHByb2plY3QgUHJvamVjdCBvZiB0aGUgdGFza1xuICogQHBhcmFtIHtEYXRlfSBkdWVEYXRlIER1ZSBkYXRlIG9mIHRoZSB0YXNrXG4gKiBAcGFyYW0ge0Jvb2xlYW59IGNvbXBsZXRlZCBTdGF0dXMgb2YgdGhlIHRhc2tcbiAqIEByZXR1cm4ge09iamVjdH0gVGFzayBvYmplY3RcbiAqL1xuY29uc3QgdGFzayA9IChcbiAgdGl0bGUsXG4gIGRlc2NyaXB0aW9uLFxuICBwcmlvcml0eSxcbiAgcHJvamVjdCxcbiAgZHVlRGF0ZSxcbiAgY29tcGxldGVkXG4pID0+IHtcbiAgcmV0dXJuIHtcbiAgICB0aXRsZSxcbiAgICBkZXNjcmlwdGlvbixcbiAgICBwcmlvcml0eSxcbiAgICBwcm9qZWN0LFxuICAgIGR1ZURhdGUsXG4gICAgY29tcGxldGVkLFxuICB9O1xufTtcblxuY29uc3QgcGVuZGluZ1Byb2plY3RzID0gZ2V0UGVuZGluZ1Byb2plY3RzKCk7XG5cbmNvbnN0IGNvbXBsZXRlZFByb2plY3RzID0gZ2V0Q29tcGxldGVkUHJvamVjdHMoKTtcblxuLyogREFUQSBNQU5JUFVMQVRJT04gKi9cbi8qKlxuICogR2V0IHByb2plY3QgZGF0YSBmcm9tIHVzZXItaW5wdXQgZm9ybS5cbiAqIEByZXR1cm4ge3ZvaWR9XG4gKi9cbmZ1bmN0aW9uIGdldFByb2plY3RGcm9tSW5wdXQoKSB7XG4gIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1haW4tYWRkUHJvamVjdEZvcm1cIik7XG4gIGNvbnN0IHRpdGxlID0gZm9ybS5lbGVtZW50c1tcInRpdGxlXCJdLnZhbHVlO1xuICBjb25zdCBkZXNjcmlwdGlvbiA9IGZvcm0uZWxlbWVudHNbXCJkZXNjcmlwdGlvblwiXS52YWx1ZTtcbiAgY29uc3QgcHJpb3JpdHkgPSBwZW5kaW5nUHJvamVjdHMubGVuZ3RoO1xuICBjb25zdCB0YXNrcyA9IFtdO1xuICBjb25zdCBpZCA9IERhdGUubm93KCk7XG4gIGNvbnN0IGNvbXBsZXRlZCA9IGZhbHNlO1xuICByZXR1cm4gcHJvamVjdCh0aXRsZSwgZGVzY3JpcHRpb24sIHByaW9yaXR5LCB0YXNrcywgaWQsIGNvbXBsZXRlZCk7XG59XG5cbi8qKlxuICogQWRkIGEgbmV3IHByb2plY3QgdG8gdGhlIHBlbmRpbmcgcHJvamVjdCBsaXN0IGFuZCByZWZyZXNoIHRoZSBwcm9qZWN0IGxpc3QuXG4gKiBBc3N1bWUgaW4gcGVuZGluZyB0YWIuXG4gKiBAcmV0dXJuIHt2b2lkfVxuICovXG5leHBvcnQgZnVuY3Rpb24gYWRkUHJvamVjdCgpIHtcbiAgY29uc3QgbmV3UHJvamVjdCA9IGdldFByb2plY3RGcm9tSW5wdXQoKTtcbiAgcGVuZGluZ1Byb2plY3RzLnB1c2gobmV3UHJvamVjdCk7XG4gIHJlZnJlc2hQcm9qZWN0TGlzdChwZW5kaW5nUHJvamVjdHMpO1xufVxuXG4vKipcbiAqIERlbGV0ZSB0aGUgdW5kZXJseWluZyBwcm9qZWN0IG9iamVjdCBhdCBwcm9qZWN0SW5kZXggYW5kIHJlZnJlc2ggdGhlIHByb2plY3QgbGlzdC5cbiAqIENvbnRleHQtc2Vuc2l0aXZlOiBpZiBpbiBwZW5kaW5nIHRhYiwgZGVsZXRlIGZyb20gcGVuZGluZ1Byb2plY3RzOyBpZiBpbiBhcmNoaXZlIHRhYiwgZGVsZXRlIGZyb20gY29tcGxldGVkUHJvamVjdHMuXG4gKiBAcGFyYW0ge051bWJlcn0gcHJvamVjdEluZGV4IEluZGV4IG9mIHRoZSBwcm9qZWN0IHRvIGJlIGRlbGV0ZWRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGRlbGV0ZVByb2plY3QocHJvamVjdEluZGV4KSB7XG4gIGNvbnN0IGRpc3BsYXlNb2RlID0gZ2V0RGlzcGxheU1vZGUoKTtcbiAgbGV0IHdvcmtBcnIgPSBbXTtcbiAgaWYgKGRpc3BsYXlNb2RlID09PSBcInBlbmRpbmdcIikge1xuICAgIHdvcmtBcnIgPSBwZW5kaW5nUHJvamVjdHM7XG4gIH0gZWxzZSBpZiAoZGlzcGxheU1vZGUgPT09IFwiYXJjaGl2ZVwiKSB7XG4gICAgd29ya0FyciA9IGNvbXBsZXRlZFByb2plY3RzO1xuICB9XG4gIHdvcmtBcnIuc3BsaWNlKHByb2plY3RJbmRleCwgMSk7XG4gIHJlc2V0UHJpb3JpdHkod29ya0Fycik7XG4gIHJlZnJlc2hQcm9qZWN0TGlzdCh3b3JrQXJyKTtcbn1cblxuLyoqXG4gKiBSZW1vdmUgdGhlIHByb2plY3QgZnJvbSB0aGUgcGVuZGluZyBwcm9qZWN0cyBhcnJheSBhbmQgYWRkIGl0IHRvIHRoZVxuICogY29tcGxldGVkIHByb2plY3RzIGFycmF5LiBVcGRhdGUgdGhlIHByaW9yaXR5IG9mIHRoZSBwcm9qZWN0cyBpbiB0aGVcbiAqIGJvdGggcHJvamVjdHMgYXJyYXkuIFJlZnJlc2ggdGhlIHByb2plY3QgbGlzdCBpbiB0aGUgcGVuZGluZyB0YWIgY29tcG9uZW50LlxuICogQ29udGV4dC1zZW5zaXRpdmU6IG9ubHkgd29ya3Mgd2hlbiB0aGUgZGlzcGxheSBtb2RlIGlzIFwicGVuZGluZ1wiLlxuICogQHBhcmFtIHtwcm9qZWN0fSBwcm9qZWN0T2JqIFByb2plY3Qgb2JqZWN0XG4gKiBAcmV0dXJuIHt2b2lkfVxuICogQGV4cG9ydFxuICovXG5leHBvcnQgZnVuY3Rpb24gY29tcGxldGVQcm9qZWN0KHByb2plY3RPYmopIHtcbiAgaWYgKGdldERpc3BsYXlNb2RlKCkgIT09IFwicGVuZGluZ1wiKSByZXR1cm47XG4gIGNvbnN0IHByb2plY3RJbmRleCA9IHBlbmRpbmdQcm9qZWN0cy5maW5kSW5kZXgoXG4gICAgKHByb2plY3QpID0+IHByb2plY3QuaWQgPT09IHByb2plY3RPYmouaWRcbiAgKTtcbiAgaWYgKHByb2plY3RJbmRleCA9PT0gLTEpIHJldHVybjtcbiAgcGVuZGluZ1Byb2plY3RzLnNwbGljZShwcm9qZWN0SW5kZXgsIDEpO1xuICBwcm9qZWN0T2JqLmNvbXBsZXRlZCA9IHRydWU7XG4gIHByb2plY3RPYmoudGFza3MuZm9yRWFjaCgodGFzaykgPT4gKHRhc2suY29tcGxldGVkID0gdHJ1ZSkpO1xuICBjb21wbGV0ZWRQcm9qZWN0cy5wdXNoKHByb2plY3RPYmopO1xuICByZXNldFByaW9yaXR5KHBlbmRpbmdQcm9qZWN0cyk7XG4gIHJlc2V0UHJpb3JpdHkoY29tcGxldGVkUHJvamVjdHMpO1xuICByZWZyZXNoUHJvamVjdExpc3QocGVuZGluZ1Byb2plY3RzKTtcbn1cblxuLyoqXG4gKiBTd2FwIHRoZSBwb3NpdGlvbiBvZiB0d28gcHJvamVjdHMgaW4gdGhlIGlucHV0IGFycmF5LiBVcGRhdGUgdGhlIHByaW9yaXR5XG4gKiBvZiB0aGUgcHJvamVjdHMgaW4gdGhlIGFycmF5LiBSZWZyZXNoIHRoZSBwcm9qZWN0IGxpc3QgaW4gdGhlIGFjdGl2ZSB0YWIgY29tcG9uZW50LlxuICogQmVjYXVzZSBvZiB0aGUgcHJvamVjdCdzIGltcGxlbWVudGF0aW9uLCBwcmlvcml0eSBpcyB0aGUgaW5kZXggb2YgdGhlIHByb2plY3QuXG4gKiBAcGFyYW0ge0FycmF5fSBwcm9qZWN0QXJyIEFycmF5IG9mIHByb2plY3RzLlxuICogQHBhcmFtIHtOdW1iZXJ9IHByaW9yaXR5MSBJbmRleCBvZiB0aGUgZmlyc3QgcHJvamVjdFxuICogQHBhcmFtIHtOdW1iZXJ9IHByaW9yaXR5MiBJbmRleCBvZiB0aGUgc2Vjb25kIHByb2plY3RcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHN3YXBQcm9qZWN0KHByb2plY3RBcnIsIHByaW9yaXR5MSwgcHJpb3JpdHkyKSB7XG4gIGNvbnN0IHRlbXAgPSBwcm9qZWN0QXJyW3ByaW9yaXR5MV07XG4gIHByb2plY3RBcnJbcHJpb3JpdHkxXSA9IHByb2plY3RBcnJbcHJpb3JpdHkyXTtcbiAgcHJvamVjdEFycltwcmlvcml0eTJdID0gdGVtcDtcbiAgcmVzZXRQcmlvcml0eShwcm9qZWN0QXJyKTtcbiAgcmVmcmVzaFByb2plY3RMaXN0KHByb2plY3RBcnIpO1xufVxuXG4vKipcbiAqIEdldCB0YXNrIGRhdGEgZnJvbSB1c2VyLWlucHV0IGZvcm0uXG4gKiBAcGFyYW0ge3Byb2plY3R9IHByb2plY3RPYmogQXNzb2NpYXRlZCBwcm9qZWN0IG9iamVjdFxuICogQHJldHVybiB7dGFza30gVGFzayBvYmplY3RcbiAqL1xuZnVuY3Rpb24gZ2V0VGFza0Zyb21JbnB1dChwcm9qZWN0T2JqKSB7XG4gIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1haW4tYWRkVGFza0Zvcm0tXCIgKyBwcm9qZWN0T2JqLmlkKTtcbiAgY29uc3QgdGl0bGUgPSBmb3JtLmVsZW1lbnRzW1widGl0bGVcIl0udmFsdWU7XG4gIGNvbnN0IGRlc2NyaXB0aW9uID0gZm9ybS5lbGVtZW50c1tcImRlc2NyaXB0aW9uXCJdLnZhbHVlO1xuICBjb25zdCBwcmlvcml0eSA9IHByb2plY3RPYmoudGFza3MubGVuZ3RoO1xuICBjb25zdCBpZCA9IERhdGUubm93KCk7XG4gIGNvbnN0IGR1ZURhdGUgPSBmb3JtLmVsZW1lbnRzW1wiZHVlRGF0ZVwiXS52YWx1ZTtcbiAgY29uc3QgY29tcGxldGVkID0gZmFsc2U7XG4gIHJldHVybiB0YXNrKHRpdGxlLCBkZXNjcmlwdGlvbiwgcHJpb3JpdHksIGlkLCBkdWVEYXRlLCBjb21wbGV0ZWQpO1xufVxuXG4vKipcbiAqIEFkZCBhIG5ldyB0YXNrIHRvIHRoZSBwcm9qZWN0IG9iamVjdCBhbmQgcmVmcmVzaCB0aGUgdGFzayBsaXN0IGluIHRoZSBwcm9qZWN0IGNvbXBvbmVudC5cbiAqIEBwYXJhbSB7cHJvamVjdH0gcHJvamVjdE9iaiBBc3NvY2lhdGVkIHByb2plY3Qgb2JqZWN0XG4gKiBAcmV0dXJuIHt2b2lkfVxuICovXG5leHBvcnQgZnVuY3Rpb24gYWRkVGFzayhwcm9qZWN0T2JqKSB7XG4gIGNvbnN0IG5ld1Rhc2sgPSBnZXRUYXNrRnJvbUlucHV0KHByb2plY3RPYmopO1xuICBwcm9qZWN0T2JqLnRhc2tzLnB1c2gobmV3VGFzayk7XG4gIGlmIChnZXRTb3J0TW9kZShwcm9qZWN0T2JqKSA9PT0gXCJkYXRlXCIpIHtcbiAgICBzb3J0VGFza0J5RGF0ZShwcm9qZWN0T2JqLnRhc2tzKTtcbiAgfVxuICByZWZyZXNoVGFza0xpc3QocHJvamVjdE9iaik7XG59XG5cbi8qKlxuICogRGVsZXRlIHRoZSB1bmRlcmx5aW5nIHRhc2sgb2JqZWN0IGF0IHRhc2tJbmRleCBmcm9tIHRoZSBwcm9qZWN0IG9iamVjdCBhbmQgcmVmcmVzaCB0aGUgdGFzayBsaXN0IGluIHRoZSBwcm9qZWN0IGNvbXBvbmVudC5cbiAqIEBwYXJhbSB7cHJvamVjdH0gcHJvamVjdE9iaiBQcm9qZWN0IG9iamVjdFxuICogQHBhcmFtIHtOdW1iZXJ9IHRhc2tJbmRleCBJbmRleCBvZiB0aGUgdGFzayB0byBiZSBkZWxldGVkXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBkZWxldGVUYXNrKHByb2plY3RPYmosIHRhc2tJbmRleCkge1xuICBjb25zdCB0YXNrQXJyID0gcHJvamVjdE9iai50YXNrcztcbiAgdGFza0Fyci5zcGxpY2UodGFza0luZGV4LCAxKTtcbiAgaWYgKGdldFNvcnRNb2RlKHByb2plY3RPYmopID09PSBcInByaW9yaXR5XCIpIHtcbiAgICByZXNldFByaW9yaXR5KHRhc2tBcnIpO1xuICB9IGVsc2Uge1xuICAgIHNvcnRBcnJCeVByaW9yaXR5KHRhc2tBcnIpO1xuICAgIHJlc2V0UHJpb3JpdHkodGFza0Fycik7XG4gICAgc29ydFRhc2tCeURhdGUodGFza0Fycik7XG4gIH1cbiAgcmVmcmVzaFRhc2tMaXN0KHByb2plY3RPYmopO1xufVxuXG4vKipcbiAqIENoYW5nZSB0aGUgc3RhdHVzIG9mIHRoZSB0YXNrIHRvIGNvbXBsZXRlZC4gUmVmcmVzaCB0aGUgdGFzayBsaXN0IGluIHRoZVxuICogcHJvamVjdCBjb21wb25lbnQuIENvbnRleHQtc2Vuc2l0aXZlOiBvbmx5IHdvcmtzIHdoZW4gdGhlIGRpc3BsYXkgbW9kZSBpcyBcInBlbmRpbmdcIi5cbiAqIEBwYXJhbSB7cHJvamVjdH0gcHJvamVjdE9iaiBQcm9qZWN0IG9iamVjdFxuICogQHBhcmFtIHtOdW1iZXJ9IHRhc2tJbmRleCBJbmRleCBvZiB0aGUgdGFzayBpbiB0aGUgcHJvamVjdCBvYmplY3RcbiAqIEByZXR1cm4ge3ZvaWR9XG4gKiBAZXhwb3J0XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjb21wbGV0ZVRhc2socHJvamVjdE9iaiwgdGFza0luZGV4KSB7XG4gIGlmIChnZXREaXNwbGF5TW9kZSgpICE9PSBcInBlbmRpbmdcIikgcmV0dXJuO1xuICBjb25zdCBwcm9qZWN0SW5kZXggPSBwZW5kaW5nUHJvamVjdHMuZmluZEluZGV4KFxuICAgIChwcm9qZWN0KSA9PiBwcm9qZWN0LmlkID09PSBwcm9qZWN0T2JqLmlkXG4gICk7XG4gIGlmIChwcm9qZWN0SW5kZXggPT09IC0xKSByZXR1cm47XG4gIGNvbnN0IHRhc2tPYmogPSBwcm9qZWN0T2JqLnRhc2tzW3Rhc2tJbmRleF07XG4gIHRhc2tPYmouY29tcGxldGVkID0gdHJ1ZTtcbiAgcmVmcmVzaFRhc2tMaXN0KHByb2plY3RPYmopO1xufVxuXG4vKipcbiAqIFNvcnQgdGhlIHRhc2tzIGluIHRoZSBpbnB1dCBhcnJheSBieSBkdWUgZGF0ZS4gVGFza3Mgd2l0aCBubyBkdWUgZGF0ZVxuICogYXJlIHNvcnRlZCBieSB0aGVpciBwcmlvcml0aWVzIGFmdGVyIHRoZSB0YXNrcyB3aXRoIGR1ZSBkYXRlcy4gVGFza3Mgd2l0aCBlYXJsaWVyXG4gKiBkdWUgZGF0ZXMgYXJlIHNvcnRlZCB0byB0aGUgdG9wIG9mIHRoZSBsaXN0LlxuICogQHBhcmFtIHtBcnJheX0gdGFza3MgQXJyYXkgb2YgdGFzayBvYmplY3RzXG4gKiBAcmV0dXJuIHt2b2lkfVxuICovXG5leHBvcnQgZnVuY3Rpb24gc29ydFRhc2tCeURhdGUodGFza3MpIHtcbiAgdGFza3Muc29ydCgoYSwgYikgPT4ge1xuICAgIGlmIChhLmR1ZURhdGUgPT09IFwiXCIgJiYgYi5kdWVEYXRlID09PSBcIlwiKSB7XG4gICAgICByZXR1cm4gYS5wcmlvcml0eSAtIGIucHJpb3JpdHk7XG4gICAgfSBlbHNlIGlmIChhLmR1ZURhdGUgPT09IFwiXCIpIHtcbiAgICAgIHJldHVybiAxO1xuICAgIH0gZWxzZSBpZiAoYi5kdWVEYXRlID09PSBcIlwiKSB7XG4gICAgICByZXR1cm4gLTE7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IGFEYXRlID0gbmV3IERhdGUoYS5kdWVEYXRlKTtcbiAgICAgIGNvbnN0IGJEYXRlID0gbmV3IERhdGUoYi5kdWVEYXRlKTtcbiAgICAgIHJldHVybiBhRGF0ZSAtIGJEYXRlO1xuICAgIH1cbiAgfSk7XG59XG5cbi8qKlxuICogU29ydCB0aGUgb2JqZWN0cyBpbiB0aGUgaW5wdXQgYXJyYXkgYnkgdGhlaXIgcHJpb3JpdGllcy5cbiAqIEBwYXJhbSB7QXJyYXl9IGFyciBBcnJheSBvZiBwcm9qZWN0IG9yIHRhc2sgb2JqZWN0c1xuICogQHJldHVybiB7dm9pZH1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHNvcnRBcnJCeVByaW9yaXR5KGFycikge1xuICBhcnIuc29ydCgoYSwgYikgPT4ge1xuICAgIHJldHVybiBhLnByaW9yaXR5IC0gYi5wcmlvcml0eTtcbiAgfSk7XG59XG5cbi8qKlxuICogUmVzZXQgdGhlIHByaW9yaXR5IG9mIHRoZSBwcm9qZWN0cy90YXNrcyBpbiB0aGUgaW5wdXQgYXJyYXkuXG4gKiBAcGFyYW0ge0FycmF5fSBhcnIgQXJyYXkgb2YgcHJvamVjdCBvciB0YXNrIG9iamVjdHNcbiAqIEByZXR1cm4ge3ZvaWR9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiByZXNldFByaW9yaXR5KGFycikge1xuICBhcnIuZm9yRWFjaCgoZWxlbWVudCwgaSkgPT4ge1xuICAgIGVsZW1lbnQucHJpb3JpdHkgPSBpO1xuICB9KTtcbn1cblxuLyoqXG4gKiBHZXQgdGhlIHNvcnQgbW9kZSBvZiB0aGUgcHJvamVjdCBvYmplY3QuXG4gKiBAcGFyYW0ge3Byb2plY3R9IHByb2plY3RPYmogUHJvamVjdCBvYmplY3RcbiAqIEByZXR1cm4ge1N0cmluZ30gU29ydCBtb2RlIChcInByaW9yaXR5XCIvXCJkYXRlXCIpXG4gKi9cbmZ1bmN0aW9uIGdldFNvcnRNb2RlKHByb2plY3RPYmopIHtcbiAgY29uc3Qgc29ydEJ0bnMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5TmFtZShcInNvcnRUYXNrLVwiICsgcHJvamVjdE9iai5pZCk7XG4gIGxldCBzb3J0TW9kZSA9IFwiXCI7XG4gIHNvcnRCdG5zLmZvckVhY2goKGJ0bikgPT4ge1xuICAgIGlmIChidG4uY2hlY2tlZCkge1xuICAgICAgc29ydE1vZGUgPSBidG4udmFsdWU7XG4gICAgfVxuICB9KTtcbiAgcmV0dXJuIHNvcnRNb2RlO1xufVxuXG4vKiBNQUlOIEFQUCAqL1xuLyoqXG4gKiBDcmVhdGUgZmF2aWNvbi5cbiAqIEByZXR1cm4ge3ZvaWR9XG4gKi9cbmZ1bmN0aW9uIGNyZWF0ZUZhdmljb24oKSB7XG4gIGxldCBpY29uTGluayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJsaW5rW3JlbCo9J2ljb24nXVwiKTtcbiAgaWYgKCFpY29uTGluaykge1xuICAgIGljb25MaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpbmtcIik7XG4gICAgaWNvbkxpbmsucmVsID0gXCJpY29uXCI7XG4gICAgZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChpY29uTGluayk7XG4gIH1cbiAgaWNvbkxpbmsuaHJlZiA9IGZhdmljb25MaW5rO1xufVxuXG4vKipcbiAqIFB1cmdlIHRoZSBjb250ZW50IG9mIHRoZSBhY3RpdmUgdGFiIGluIG1haW4uXG4gKiBAcmV0dXJuIHt2b2lkfVxuICovXG5mdW5jdGlvbiBwdXJnZUFjdGl2ZVRhYigpIHtcbiAgY29uc3QgbWFpbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWFpblwiKTtcbiAgaWYgKG1haW4uY2hpbGRyZW4ubGVuZ3RoID4gMSkge1xuICAgIG1haW4ucmVtb3ZlQ2hpbGQobWFpbi5sYXN0Q2hpbGQpO1xuICB9XG59XG5cbi8qKlxuICogR2V0IHRoZSBkaXNwbGF5IG1vZGUgb2YgdGhlIG1haW4gY29tcG9uZW50LlxuICogQHJldHVybiB7U3RyaW5nfSBEaXNwbGF5IG1vZGUgKFwicGVuZGluZ1wiL1wiYXJjaGl2ZVwiKVxuICovXG5mdW5jdGlvbiBnZXREaXNwbGF5TW9kZSgpIHtcbiAgY29uc3QgdGFiQnRucyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlOYW1lKFwibWFpbi1uYXZiYXJcIik7XG4gIGxldCBkaXNwbGF5TW9kZSA9IFwiXCI7XG4gIHRhYkJ0bnMuZm9yRWFjaCgoYnRuKSA9PiB7XG4gICAgaWYgKGJ0bi5jaGVja2VkKSB7XG4gICAgICBkaXNwbGF5TW9kZSA9IGJ0bi52YWx1ZTtcbiAgICB9XG4gIH0pO1xuICByZXR1cm4gZGlzcGxheU1vZGU7XG59XG5cbi8qKlxuICogU3dpdGNoIGJldHdlZW4gdGFicy5cbiAqIEByZXR1cm4ge3ZvaWR9XG4gKi9cbmZ1bmN0aW9uIHRhYlN3aXRjaCgpIHtcbiAgY29uc3QgbWFpbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWFpblwiKTtcbiAgY29uc3QgdGFiQnRucyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlOYW1lKFwibWFpbi1uYXZiYXJcIik7XG4gIG1haW4uYXBwZW5kQ2hpbGQocmVuZGVyUGVuZGluZ0NvbXBvbmVudChwZW5kaW5nUHJvamVjdHMpKTtcbiAgdGFiQnRucy5mb3JFYWNoKChidG4pID0+IHtcbiAgICBidG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgIHB1cmdlQWN0aXZlVGFiKCk7XG4gICAgICBzd2l0Y2ggKGdldERpc3BsYXlNb2RlKCkpIHtcbiAgICAgICAgY2FzZSBcInBlbmRpbmdcIjpcbiAgICAgICAgICBtYWluLmFwcGVuZENoaWxkKHJlbmRlclBlbmRpbmdDb21wb25lbnQocGVuZGluZ1Byb2plY3RzKSk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgXCJhcmNoaXZlXCI6XG4gICAgICAgICAgbWFpbi5hcHBlbmRDaGlsZChyZW5kZXJBcmNoaXZlQ29tcG9uZW50KGNvbXBsZXRlZFByb2plY3RzKSk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfSk7XG4gIH0pO1xufVxuXG4vKipcbiAqIFN0YXJ0IHRoZSBhcHAuXG4gKiBAcmV0dXJuIHt2b2lkfVxuICovXG5mdW5jdGlvbiBzdGFydEFwcCgpIHtcbiAgY3JlYXRlRmF2aWNvbigpO1xuICBwYWdlTG9hZCgpO1xuICB0YWJTd2l0Y2goKTtcbiAgc2F2ZVByb2plY3RzKCk7XG59XG5cbnN0YXJ0QXBwKCk7IiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIvKiBodHRwOi8vbWV5ZXJ3ZWIuY29tL2VyaWMvdG9vbHMvY3NzL3Jlc2V0LyBcXG4gICB2Mi4wIHwgMjAxMTAxMjZcXG4gICBMaWNlbnNlOiBub25lIChwdWJsaWMgZG9tYWluKVxcbiovXFxuXFxuaHRtbCwgYm9keSwgZGl2LCBzcGFuLCBhcHBsZXQsIG9iamVjdCwgaWZyYW1lLFxcbmgxLCBoMiwgaDMsIGg0LCBoNSwgaDYsIHAsIGJsb2NrcXVvdGUsIHByZSxcXG5hLCBhYmJyLCBhY3JvbnltLCBhZGRyZXNzLCBiaWcsIGNpdGUsIGNvZGUsXFxuZGVsLCBkZm4sIGVtLCBpbWcsIGlucywga2JkLCBxLCBzLCBzYW1wLFxcbnNtYWxsLCBzdHJpa2UsIHN0cm9uZywgc3ViLCBzdXAsIHR0LCB2YXIsXFxuYiwgdSwgaSwgY2VudGVyLFxcbmRsLCBkdCwgZGQsIG9sLCB1bCwgbGksXFxuZmllbGRzZXQsIGZvcm0sIGxhYmVsLCBsZWdlbmQsXFxudGFibGUsIGNhcHRpb24sIHRib2R5LCB0Zm9vdCwgdGhlYWQsIHRyLCB0aCwgdGQsXFxuYXJ0aWNsZSwgYXNpZGUsIGNhbnZhcywgZGV0YWlscywgZW1iZWQsIFxcbmZpZ3VyZSwgZmlnY2FwdGlvbiwgZm9vdGVyLCBoZWFkZXIsIGhncm91cCwgXFxubWVudSwgbmF2LCBvdXRwdXQsIHJ1YnksIHNlY3Rpb24sIHN1bW1hcnksXFxudGltZSwgbWFyaywgYXVkaW8sIHZpZGVvIHtcXG5cXHRtYXJnaW46IDA7XFxuXFx0cGFkZGluZzogMDtcXG5cXHRib3JkZXI6IDA7XFxuXFx0Zm9udC1zaXplOiAxMDAlO1xcblxcdGZvbnQ6IGluaGVyaXQ7XFxuXFx0dmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xcbn1cXG4vKiBIVE1MNSBkaXNwbGF5LXJvbGUgcmVzZXQgZm9yIG9sZGVyIGJyb3dzZXJzICovXFxuYXJ0aWNsZSwgYXNpZGUsIGRldGFpbHMsIGZpZ2NhcHRpb24sIGZpZ3VyZSwgXFxuZm9vdGVyLCBoZWFkZXIsIGhncm91cCwgbWVudSwgbmF2LCBzZWN0aW9uIHtcXG5cXHRkaXNwbGF5OiBibG9jaztcXG59XFxuYm9keSB7XFxuXFx0bGluZS1oZWlnaHQ6IDE7XFxufVxcbm9sLCB1bCB7XFxuXFx0bGlzdC1zdHlsZTogbm9uZTtcXG59XFxuYmxvY2txdW90ZSwgcSB7XFxuXFx0cXVvdGVzOiBub25lO1xcbn1cXG5ibG9ja3F1b3RlOmJlZm9yZSwgYmxvY2txdW90ZTphZnRlcixcXG5xOmJlZm9yZSwgcTphZnRlciB7XFxuXFx0Y29udGVudDogJyc7XFxuXFx0Y29udGVudDogbm9uZTtcXG59XFxudGFibGUge1xcblxcdGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XFxuXFx0Ym9yZGVyLXNwYWNpbmc6IDA7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3RvZG8tbGlzdC9zcmMvc3R5bGVzL3N0eWxlcy1yZXNldC5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7OztDQUdDOztBQUVEOzs7Ozs7Ozs7Ozs7O0NBYUMsU0FBUztDQUNULFVBQVU7Q0FDVixTQUFTO0NBQ1QsZUFBZTtDQUNmLGFBQWE7Q0FDYix3QkFBd0I7QUFDekI7QUFDQSxnREFBZ0Q7QUFDaEQ7O0NBRUMsY0FBYztBQUNmO0FBQ0E7Q0FDQyxjQUFjO0FBQ2Y7QUFDQTtDQUNDLGdCQUFnQjtBQUNqQjtBQUNBO0NBQ0MsWUFBWTtBQUNiO0FBQ0E7O0NBRUMsV0FBVztDQUNYLGFBQWE7QUFDZDtBQUNBO0NBQ0MseUJBQXlCO0NBQ3pCLGlCQUFpQjtBQUNsQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIvKiBodHRwOi8vbWV5ZXJ3ZWIuY29tL2VyaWMvdG9vbHMvY3NzL3Jlc2V0LyBcXG4gICB2Mi4wIHwgMjAxMTAxMjZcXG4gICBMaWNlbnNlOiBub25lIChwdWJsaWMgZG9tYWluKVxcbiovXFxuXFxuaHRtbCwgYm9keSwgZGl2LCBzcGFuLCBhcHBsZXQsIG9iamVjdCwgaWZyYW1lLFxcbmgxLCBoMiwgaDMsIGg0LCBoNSwgaDYsIHAsIGJsb2NrcXVvdGUsIHByZSxcXG5hLCBhYmJyLCBhY3JvbnltLCBhZGRyZXNzLCBiaWcsIGNpdGUsIGNvZGUsXFxuZGVsLCBkZm4sIGVtLCBpbWcsIGlucywga2JkLCBxLCBzLCBzYW1wLFxcbnNtYWxsLCBzdHJpa2UsIHN0cm9uZywgc3ViLCBzdXAsIHR0LCB2YXIsXFxuYiwgdSwgaSwgY2VudGVyLFxcbmRsLCBkdCwgZGQsIG9sLCB1bCwgbGksXFxuZmllbGRzZXQsIGZvcm0sIGxhYmVsLCBsZWdlbmQsXFxudGFibGUsIGNhcHRpb24sIHRib2R5LCB0Zm9vdCwgdGhlYWQsIHRyLCB0aCwgdGQsXFxuYXJ0aWNsZSwgYXNpZGUsIGNhbnZhcywgZGV0YWlscywgZW1iZWQsIFxcbmZpZ3VyZSwgZmlnY2FwdGlvbiwgZm9vdGVyLCBoZWFkZXIsIGhncm91cCwgXFxubWVudSwgbmF2LCBvdXRwdXQsIHJ1YnksIHNlY3Rpb24sIHN1bW1hcnksXFxudGltZSwgbWFyaywgYXVkaW8sIHZpZGVvIHtcXG5cXHRtYXJnaW46IDA7XFxuXFx0cGFkZGluZzogMDtcXG5cXHRib3JkZXI6IDA7XFxuXFx0Zm9udC1zaXplOiAxMDAlO1xcblxcdGZvbnQ6IGluaGVyaXQ7XFxuXFx0dmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xcbn1cXG4vKiBIVE1MNSBkaXNwbGF5LXJvbGUgcmVzZXQgZm9yIG9sZGVyIGJyb3dzZXJzICovXFxuYXJ0aWNsZSwgYXNpZGUsIGRldGFpbHMsIGZpZ2NhcHRpb24sIGZpZ3VyZSwgXFxuZm9vdGVyLCBoZWFkZXIsIGhncm91cCwgbWVudSwgbmF2LCBzZWN0aW9uIHtcXG5cXHRkaXNwbGF5OiBibG9jaztcXG59XFxuYm9keSB7XFxuXFx0bGluZS1oZWlnaHQ6IDE7XFxufVxcbm9sLCB1bCB7XFxuXFx0bGlzdC1zdHlsZTogbm9uZTtcXG59XFxuYmxvY2txdW90ZSwgcSB7XFxuXFx0cXVvdGVzOiBub25lO1xcbn1cXG5ibG9ja3F1b3RlOmJlZm9yZSwgYmxvY2txdW90ZTphZnRlcixcXG5xOmJlZm9yZSwgcTphZnRlciB7XFxuXFx0Y29udGVudDogJyc7XFxuXFx0Y29udGVudDogbm9uZTtcXG59XFxudGFibGUge1xcblxcdGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XFxuXFx0Ym9yZGVyLXNwYWNpbmc6IDA7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIjpyb290IHtcXG4gIC0tcGFzc2lvbmF0ZS1yZWQ6IDE5MSwgNSwgNTU7XFxuICAtLW5vc3RhbGdpYy15ZWxsb3c6IDI0MiwgMjMzLCAxMDc7XFxuICAtLXNvZnQtZ3JheTogMjM3LCAxOTYsIDE3ODtcXG4gIC0teWVsbG8tcmFuZ2U6IDI0MiwgMTc0LCAxMTQ7XFxuICAtLWRhcmstYmxhY2s6IDg5LCAyLCAyO1xcbiAgLS1zaGFycC13aGl0ZTogMjU1LCAyNTUsIDI1NTtcXG4gIC0tdmlzdGEtYmx1ZTogMTM4LCAxNjYsIDE5ODtcXG4gIC0tc3RlZWwtYmx1ZTogNTAsIDEyOSwgMTc4O1xcbiAgLS15aW5tbi1ibHVlOiA1NywgODUsIDE1ODtcXG4gIC0tYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgLS1zcGFjaW5nLXhzOiA1cHg7XFxuICAtLXNwYWNpbmctc206IDEwcHg7XFxuICAtLXNwYWNpbmctbWQ6IDE1cHg7XFxuICAtLXNwYWNpbmctbGc6IDIwcHg7XFxuICAtLXNwYWNpbmcteGw6IDQwcHg7XFxuICAtLWNvbnRhaW5lci13aWR0aDogMTIwMHB4O1xcbiAgLS1mb290ZXItaGVpZ2h0OiA0MHB4O1xcbiAgLS1idG4taGVpZ2h0OiA1MHB4O1xcbiAgLS1wb3B1cC1oZWlnaHQ6IDMwMHB4O1xcbiAgLS1jaGVja2JveC1zaXplOiAyMHB4O1xcbiAgLS1mbi1idG4td2lkdGg6IDExMHB4O1xcbiAgLS1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4xNikgMHB4IDFweCA0cHg7XFxufVxcblxcbi8qIEdMT0JBTCAqL1xcbmh0bWwge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIGhlaWdodDogMTAwJTtcXG59XFxuXFxuKixcXG4qOmJlZm9yZSxcXG4qOmFmdGVyIHtcXG4gIGJveC1zaXppbmc6IGluaGVyaXQ7XFxufVxcblxcbmJvZHkge1xcbiAgbWluLWhlaWdodDogMTAwJTtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG8gMWZyIGF1dG87XFxufVxcblxcbi8qIEhFQURFUiAqL1xcbi5oZWFkZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSh2YXIoLS1ub3N0YWxnaWMteWVsbG93KSwgMC44KTtcXG4gIGJveC1zaGFkb3c6IHZhcigtLXNoYWRvdyk7XFxufVxcblxcbi5oZWFkZXItY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICB3aWR0aDogMTAwJTtcXG4gIG1heC13aWR0aDogdmFyKC0tY29udGFpbmVyLXdpZHRoKTtcXG4gIHBhZGRpbmc6IHZhcigtLXNwYWNpbmctbGcpO1xcbn1cXG5cXG4uaGVhZGVyLXRpdGxlIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiUm9ib3RvXFxcIiwgc2Fucy1zZXJpZjtcXG4gIGNvbG9yOiByZ2JhKHZhcigtLXlpbm1uLWJsdWUpLCAxKTtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbn1cXG5cXG4vKiBNQUlOICovXFxuLm1haW4ge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJSb2JvdG9cXFwiLCBzYW5zLXNlcmlmO1xcbiAgZm9udC1zaXplOiAxLjFyZW07XFxuICBjb2xvcjogcmdiYSh2YXIoLS1kYXJrLWJsYWNrKSwgMSk7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB3aWR0aDogMTAwJTtcXG4gIG1heC13aWR0aDogdmFyKC0tY29udGFpbmVyLXdpZHRoKTtcXG4gIG1hcmdpbjogMCBhdXRvO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSh2YXIoLS15ZWxsby1yYW5nZSksIDAuOCk7XFxufVxcblxcbi5tYWluLWljb25zIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHRvcDogMC4xMjVlbTtcXG4gIGhlaWdodDogMWVtO1xcbiAgd2lkdGg6IDFlbTtcXG4gIG1hcmdpbi1sZWZ0OiB2YXIoLS1zcGFjaW5nLXhzKTtcXG59XFxuXFxuLyogTUFJTiAtIE5BVkJBUiAqL1xcbi5tYWluLW5hdmJhciB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogdmFyKC0tYnRuLWhlaWdodCk7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgMWZyKTtcXG4gIGJveC1zaGFkb3c6IHZhcigtLXNoYWRvdyk7XFxufVxcblxcbi5tYWluLW5hdmJhci1pdGVtIHtcXG4gIGFwcGVhcmFuY2U6IG5vbmU7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4ubWFpbi1uYXZiYXItaXRlbUxhYmVsIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5tYWluLW5hdmJhci1pdGVtOmNoZWNrZWQgKyBsYWJlbCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKHZhcigtLW5vc3RhbGdpYy15ZWxsb3cpLCAwLjgpO1xcbn1cXG5cXG4vKiBNQUlOIC0gQUNUSVZFIFRBQiAqL1xcbi5tYWluLWFjdGl2ZVRhYiB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGZsZXg6IDE7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi8qIE1BSU4gLSBBREQgUFJPSkVDVCAqL1xcbi5tYWluLWFkZFByb2plY3RCdG4ge1xcbiAgaGVpZ2h0OiB2YXIoLS1idG4taGVpZ2h0KTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJSb2JvdG9cXFwiLCBzYW5zLXNlcmlmO1xcbiAgY29sb3I6IHJnYmEodmFyKC0teWlubW4tYmx1ZSwgMSkpO1xcbiAgZm9udC1zaXplOiAxLjFyZW07XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBib3JkZXI6IG5vbmU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKHZhcigtLW5vc3RhbGdpYy15ZWxsb3cpLCAwLjUpO1xcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7XFxufVxcblxcbi5tYWluLWFkZFByb2plY3RCdG46aG92ZXIsXFxuLm1haW4tYWRkUHJvamVjdEJ0bjphY3RpdmUsXFxuLm1haW4tYWRkUHJvamVjdEJ0bjpmb2N1cyB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKHZhcigtLW5vc3RhbGdpYy15ZWxsb3cpLCAwLjgpO1xcbn1cXG5cXG4ubWFpbi1hZGRQcm9qZWN0Rm9ybSB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogdmFyKC0tcG9wdXAtaGVpZ2h0KTtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG8gMWZyIGF1dG87XFxuICBnYXA6IHZhcigtLXNwYWNpbmctc20pO1xcbiAgcGFkZGluZzogdmFyKC0tc3BhY2luZy1zbSk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKHZhcigtLW5vc3RhbGdpYy15ZWxsb3cpLCAwLjgpO1xcbn1cXG5cXG4ubWFpbi1hZGRQcm9qZWN0Rm9ybS10aXRsZSxcXG4ubWFpbi1hZGRQcm9qZWN0Rm9ybS1kZXNjcmlwdGlvbiB7XFxuICBncmlkLWNvbHVtbjogMSAvIC0xO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgcGFkZGluZzogdmFyKC0tc3BhY2luZy1zbSk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKHZhcigtLXNvZnQtZ3JheSksIDAuOCk7XFxuICBmb250LWZhbWlseTogXFxcIlJvYm90b1xcXCIsIHNhbnMtc2VyaWY7XFxuICBjb2xvcjogcmdiYSh2YXIoLS1kYXJrLWJsYWNrKSwgMSk7XFxuICBmb250LXNpemU6IDEuMXJlbTtcXG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0O1xcbn1cXG5cXG4ubWFpbi1hZGRQcm9qZWN0Rm9ybS10aXRsZTpmb2N1cyxcXG4ubWFpbi1hZGRQcm9qZWN0Rm9ybS10aXRsZTphY3RpdmUsXFxuLm1haW4tYWRkUHJvamVjdEZvcm0tZGVzY3JpcHRpb246Zm9jdXMsXFxuLm1haW4tYWRkUHJvamVjdEZvcm0tZGVzY3JpcHRpb246YWN0aXZlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEodmFyKC0tbm9zdGFsZ2ljLXllbGxvdyksIDAuOCk7XFxufVxcblxcbi5tYWluLWFkZFByb2plY3RGb3JtLWRlc2NyaXB0aW9uIHtcXG4gIHJlc2l6ZTogbm9uZTtcXG59XFxuXFxuLm1haW4tYWRkUHJvamVjdEZvcm0tY29uZmlybSxcXG4ubWFpbi1hZGRQcm9qZWN0Rm9ybS1jYW5jZWwge1xcbiAgaGVpZ2h0OiB2YXIoLS1idG4taGVpZ2h0KTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiUm9ib3RvXFxcIiwgc2Fucy1zZXJpZjtcXG4gIGNvbG9yOiByZ2JhKHZhcigtLWRhcmstYmxhY2spLCAxKTtcXG4gIGZvbnQtc2l6ZTogMS4xcmVtO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7XFxufVxcblxcbi5tYWluLWFkZFByb2plY3RGb3JtLWNvbmZpcm0ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSh2YXIoLS15ZWxsby1yYW5nZSksIDAuNSk7XFxufVxcblxcbi5tYWluLWFkZFByb2plY3RGb3JtLWNvbmZpcm06aG92ZXIsXFxuLm1haW4tYWRkUHJvamVjdEZvcm0tY29uZmlybTphY3RpdmUsXFxuLm1haW4tYWRkUHJvamVjdEZvcm0tY29uZmlybTpmb2N1cyB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKHZhcigtLW5vc3RhbGdpYy15ZWxsb3cpLCAwLjgpO1xcbn1cXG5cXG4ubWFpbi1hZGRQcm9qZWN0Rm9ybS1jYW5jZWwge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSh2YXIoLS1zb2Z0LWdyYXkpLCAwLjgpO1xcbn1cXG5cXG4ubWFpbi1hZGRQcm9qZWN0Rm9ybS1jYW5jZWw6aG92ZXIsXFxuLm1haW4tYWRkUHJvamVjdEZvcm0tY2FuY2VsOmFjdGl2ZSxcXG4ubWFpbi1hZGRQcm9qZWN0Rm9ybS1jYW5jZWw6Zm9jdXMge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSh2YXIoLS1zb2Z0LWdyYXkpLCAxKTtcXG59XFxuXFxuLyogTUFJTiAtIEFERCBUQVNLICovXFxuLm1haW4tYWRkVGFza0Zvcm0ge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IHZhcigtLXBvcHVwLWhlaWdodCk7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvIDFmciBhdXRvIGF1dG87XFxuICBnYXA6IHZhcigtLXNwYWNpbmctc20pO1xcbiAgcGFkZGluZzogdmFyKC0tc3BhY2luZy1zbSk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKHZhcigtLW5vc3RhbGdpYy15ZWxsb3cpLCAwLjgpO1xcbn1cXG5cXG4ubWFpbi1hZGRUYXNrRm9ybS10aXRsZSxcXG4ubWFpbi1hZGRUYXNrRm9ybS1kZXNjcmlwdGlvbixcXG4ubWFpbi1hZGRUYXNrRm9ybS1kYXRlIHtcXG4gIGdyaWQtY29sdW1uOiAxIC8gLTE7XFxuICBib3JkZXI6IG5vbmU7XFxuICBwYWRkaW5nOiB2YXIoLS1zcGFjaW5nLXNtKTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEodmFyKC0tc29mdC1ncmF5KSwgMC44KTtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiUm9ib3RvXFxcIiwgc2Fucy1zZXJpZjtcXG4gIGNvbG9yOiByZ2JhKHZhcigtLWRhcmstYmxhY2spLCAxKTtcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0O1xcbn1cXG5cXG4ubWFpbi1hZGRUYXNrRm9ybS10aXRsZTpmb2N1cyxcXG4ubWFpbi1hZGRUYXNrRm9ybS10aXRsZTphY3RpdmUsXFxuLm1haW4tYWRkVGFza0Zvcm0tZGVzY3JpcHRpb246Zm9jdXMsXFxuLm1haW4tYWRkVGFza0Zvcm0tZGVzY3JpcHRpb246YWN0aXZlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEodmFyKC0tbm9zdGFsZ2ljLXllbGxvdyksIDAuOCk7XFxufVxcblxcbi5tYWluLWFkZFRhc2tGb3JtLWRlc2NyaXB0aW9uIHtcXG4gIHJlc2l6ZTogbm9uZTtcXG59XFxuXFxuLm1haW4tYWRkVGFza0Zvcm0tY29uZmlybSxcXG4ubWFpbi1hZGRUYXNrRm9ybS1jYW5jZWwge1xcbiAgaGVpZ2h0OiB2YXIoLS1idG4taGVpZ2h0KTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiUm9ib3RvXFxcIiwgc2Fucy1zZXJpZjtcXG4gIGNvbG9yOiByZ2JhKHZhcigtLWRhcmstYmxhY2spLCAxKTtcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0O1xcbn1cXG5cXG4ubWFpbi1hZGRUYXNrRm9ybS1jb25maXJtIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEodmFyKC0teWVsbG8tcmFuZ2UpLCAwLjUpO1xcbn1cXG5cXG4ubWFpbi1hZGRUYXNrRm9ybS1jb25maXJtOmhvdmVyLFxcbi5tYWluLWFkZFRhc2tGb3JtLWNvbmZpcm06YWN0aXZlLFxcbi5tYWluLWFkZFRhc2tGb3JtLWNvbmZpcm06Zm9jdXMge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSh2YXIoLS1ub3N0YWxnaWMteWVsbG93KSwgMC44KTtcXG59XFxuXFxuLm1haW4tYWRkVGFza0Zvcm0tY2FuY2VsIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEodmFyKC0tc29mdC1ncmF5KSwgMC44KTtcXG59XFxuXFxuLm1haW4tYWRkVGFza0Zvcm0tY2FuY2VsOmhvdmVyLFxcbi5tYWluLWFkZFRhc2tGb3JtLWNhbmNlbDphY3RpdmUsXFxuLm1haW4tYWRkVGFza0Zvcm0tY2FuY2VsOmZvY3VzIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEodmFyKC0tc29mdC1ncmF5KSwgMSk7XFxufVxcblxcbi8qIE1BSU4gLSBUT0RPIExJU1QgKi9cXG4ubWFpbi1wcm9qZWN0TGlzdCB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGZsZXg6IDE7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogdmFyKC0tc3BhY2luZy1sZyk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKHZhcigtLXllbGxvLXJhbmdlKSwgMC44KTtcXG4gIHBhZGRpbmc6IHZhcigtLXNwYWNpbmctbGcpO1xcbn1cXG5cXG4ubWFpbi1wcm9qZWN0IHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSh2YXIoLS1zb2Z0LWdyYXkpLCAwLjgpO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0byAxZnIgYXV0byBhdXRvO1xcbiAgYWxpZ24taXRlbXM6IHN0YXJ0O1xcbiAgZ2FwOiB2YXIoLS1zcGFjaW5nLXNtKTtcXG4gIHBhZGRpbmc6IHZhcigtLXNwYWNpbmctc20pO1xcbiAgY3Vyc29yOiBncmFiO1xcbn1cXG5cXG4ubWFpbi1wcm9qZWN0LXRpdGxlLFxcbi5tYWluLXRhc2stdGl0bGUsXFxuLm1haW4tdGFzay1kYXRlIHtcXG4gIG1hcmdpbi10b3A6IDAuMTVlbTtcXG4gIG92ZXJmbG93LXdyYXA6IGJyZWFrLXdvcmQ7XFxuICBmb250LWZhbWlseTogXFxcIlJvYm90b1xcXCIsIHNhbnMtc2VyaWY7XFxuICBjb2xvcjogcmdiYSh2YXIoLS1kYXJrLWJsYWNrKSwgMSk7XFxuICBmb250LXNpemU6IDFyZW07XFxuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dDtcXG59XFxuXFxuLm1haW4tcHJvamVjdC1zb3J0VGFza1dyYXBwZXIge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBncmlkLWNvbHVtbjogMSAvIC0xO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcXG4gIGdhcDogdmFyKC0tc3BhY2luZy1zbSk7XFxuICBoZWlnaHQ6IHZhcigtLWJ0bi1oZWlnaHQpO1xcbn1cXG5cXG4ubWFpbi1wcm9qZWN0LXNvcnRCdG4ge1xcbiAgZGlzcGxheTogbm9uZTtcXG4gIGFwcGVhcmFuY2U6IG5vbmU7XFxufVxcblxcbi5tYWluLXByb2plY3Qtc29ydExhYmVsIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBib3JkZXI6IG5vbmU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKHZhcigtLW5vc3RhbGdpYy15ZWxsb3cpLCAwLjUpO1xcbiAgdHJhbnNpdGlvbjogMC4zcyBlYXNlLWluLW91dDtcXG59XFxuXFxuLm1haW4tcHJvamVjdC1zb3J0QnRuOmNoZWNrZWQgKyAubWFpbi1wcm9qZWN0LXNvcnRMYWJlbCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKHZhcigtLW5vc3RhbGdpYy15ZWxsb3cpLCAwLjgpO1xcbiAgdHJhbnNpdGlvbjogMC4zcztcXG59XFxuXFxuLm1haW4tYWRkVGFza0J0biB7XFxuICBncmlkLWNvbHVtbjogMiAvIC0xO1xcbiAgaGVpZ2h0OiBjYWxjKHZhcigtLWJ0bi1oZWlnaHQpIC8gMik7XFxuICB3aWR0aDogMTAwJTtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiUm9ib3RvXFxcIiwgc2Fucy1zZXJpZjtcXG4gIGNvbG9yOiByZ2JhKHZhcigtLXlpbm1uLWJsdWUsIDEpKTtcXG4gIGZvbnQtc2l6ZTogMC44cmVtO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSh2YXIoLS1ub3N0YWxnaWMteWVsbG93KSwgMC41KTtcXG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0O1xcbn1cXG5cXG4ubWFpbi1hZGRUYXNrQnRuOmhvdmVyLFxcbi5tYWluLWFkZFRhc2tCdG46YWN0aXZlLFxcbi5tYWluLWFkZFRhc2tCdG46Zm9jdXMge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSh2YXIoLS1ub3N0YWxnaWMteWVsbG93KSwgMC44KTtcXG59XFxuXFxuLm1haW4tcHJvamVjdC10YXNrTGlzdCB7XFxuICBncmlkLWNvbHVtbjogMiAvIC0xO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IHZhcigtLXNwYWNpbmctc20pO1xcbn1cXG5cXG4ubWFpbi10YXNrIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG8gMWZyIGF1dG8gYXV0byBhdXRvO1xcbiAgYWxpZ24taXRlbXM6IHN0YXJ0O1xcbiAgZ2FwOiB2YXIoLS1zcGFjaW5nLXNtKTtcXG59XFxuXFxuLm1haW4tcHJvamVjdC1kZXNjcmlwdGlvbixcXG4ubWFpbi10YXNrLWRlc2NyaXB0aW9uIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxuICBmb250LXNpemU6IDAuOXJlbTtcXG59XFxuXFxuLm1haW4tcHJvamVjdC1kZXNjcmlwdGlvbi5hY3RpdmUsXFxuLm1haW4tdGFzay1kZXNjcmlwdGlvbi5hY3RpdmUge1xcbiAgZGlzcGxheTogYmxvY2s7XFxufVxcblxcbi5tYWluLXByb2plY3QgYnV0dG9uIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiUm9ib3RvXFxcIiwgc2Fucy1zZXJpZjtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEodmFyKC0tbm9zdGFsZ2ljLXllbGxvdyksIDAuNSk7XFxuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dDtcXG59XFxuXFxuLm1haW4tcHJvamVjdCBidXR0b246aG92ZXIsXFxuLm1haW4tcHJvamVjdCBidXR0b246YWN0aXZlLFxcbi5tYWluLXByb2plY3QgYnV0dG9uOmZvY3VzIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEodmFyKC0tbm9zdGFsZ2ljLXllbGxvdyksIDAuOCk7XFxufVxcblxcbi5tYWluLXByb2plY3QtZXhwYW5kQnRuLFxcbi5tYWluLXByb2plY3QtZGVsZXRlQnRuLFxcbi5tYWluLXRhc2stZXhwYW5kQnRuLFxcbi5tYWluLXRhc2stZGVsZXRlQnRuIHtcXG4gIHdpZHRoOiB2YXIoLS1mbi1idG4td2lkdGgpO1xcbn1cXG5cXG4ubWFpbi1wcm9qZWN0LWNoZWNrYm94LFxcbi5tYWluLXRhc2stY2hlY2tib3gge1xcbiAgbWFyZ2luOiAwO1xcbiAgd2lkdGg6IHZhcigtLWNoZWNrYm94LXNpemUpO1xcbiAgaGVpZ2h0OiB2YXIoLS1jaGVja2JveC1zaXplKTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEodmFyKC0tZGFyay1ibGFjayksIDEpO1xcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tYm9yZGVyLXJhZGl1cyk7XFxuICBhY2NlbnQtY29sb3I6IHJnYmEodmFyKC0tcGFzc2lvbmF0ZS1yZWQpLCAxKTtcXG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4vKiBGT09URVIgKi9cXG4uZm9vdGVyIHtcXG4gIHBhZGRpbmctYm90dG9tOiB2YXIoLS1zcGFjaW5nLXhzKTtcXG4gIGhlaWdodDogdmFyKC0tZm9vdGVyLWhlaWdodCk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKHZhcigtLXNvZnQtZ3JheSksIDAuOCk7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZ2FwOiAxMHB4O1xcbiAgd2lkdGg6IDEwMCU7XFxuICBncmlkLXJvdzogMyAvIDQ7XFxufVxcblxcbi5mYS1naXRodWIge1xcbiAgZm9udC1zaXplOiAyMHB4O1xcbiAgbWFyZ2luLXRvcDogNHB4O1xcbiAgY29sb3I6IGJsYWNrO1xcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuM3MgZWFzZS1pbi1vdXQ7XFxufVxcblxcbi5mYS1naXRodWI6aG92ZXIge1xcbiAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKSBzY2FsZSgxLjIpO1xcbn1cXG5cXG4vKiBNRURJQSBRVUVSSUVTICovXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTAwcHgpIHtcXG4gIC5tYWluLXByb2plY3QtZXhwYW5kQnRuIHNwYW4sXFxuICAubWFpbi1wcm9qZWN0LWRlbGV0ZUJ0biBzcGFuLFxcbiAgLm1haW4tdGFzay1leHBhbmRCdG4gc3BhbixcXG4gIC5tYWluLXRhc2stZGVsZXRlQnRuIHNwYW4ge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgfVxcblxcbiAgLm1haW4taWNvbnMge1xcbiAgICBtYXJnaW46IDA7XFxuICB9XFxuXFxuICAubWFpbi1wcm9qZWN0LWV4cGFuZEJ0bixcXG4gIC5tYWluLXByb2plY3QtZGVsZXRlQnRuLFxcbiAgLm1haW4tdGFzay1leHBhbmRCdG4sXFxuICAubWFpbi10YXNrLWRlbGV0ZUJ0biB7XFxuICAgIHdpZHRoOiBhdXRvO1xcbiAgfVxcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi90b2RvLWxpc3Qvc3JjL3N0eWxlcy9zdHlsZXMuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsNEJBQTRCO0VBQzVCLGlDQUFpQztFQUNqQywwQkFBMEI7RUFDMUIsNEJBQTRCO0VBQzVCLHNCQUFzQjtFQUN0Qiw0QkFBNEI7RUFDNUIsMkJBQTJCO0VBQzNCLDBCQUEwQjtFQUMxQix5QkFBeUI7RUFDekIsb0JBQW9CO0VBQ3BCLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIseUJBQXlCO0VBQ3pCLHFCQUFxQjtFQUNyQixrQkFBa0I7RUFDbEIscUJBQXFCO0VBQ3JCLHFCQUFxQjtFQUNyQixxQkFBcUI7RUFDckIseUNBQXlDO0FBQzNDOztBQUVBLFdBQVc7QUFDWDtFQUNFLHNCQUFzQjtFQUN0QixZQUFZO0FBQ2Q7O0FBRUE7OztFQUdFLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixhQUFhO0VBQ2IsaUNBQWlDO0FBQ25DOztBQUVBLFdBQVc7QUFDWDtFQUNFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsb0RBQW9EO0VBQ3BELHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLFdBQVc7RUFDWCxpQ0FBaUM7RUFDakMsMEJBQTBCO0FBQzVCOztBQUVBO0VBQ0UsaUNBQWlDO0VBQ2pDLGlDQUFpQztFQUNqQyxpQkFBaUI7QUFDbkI7O0FBRUEsU0FBUztBQUNUO0VBQ0UsaUNBQWlDO0VBQ2pDLGlCQUFpQjtFQUNqQixpQ0FBaUM7RUFDakMsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixtQkFBbUI7RUFDbkIsV0FBVztFQUNYLGlDQUFpQztFQUNqQyxjQUFjO0VBQ2QsK0NBQStDO0FBQ2pEOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFlBQVk7RUFD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Q0FBc0M7QUFDeEM7O0FBRUE7RUFDRSxvQ0FBb0M7QUFDdEM7O0FBRUEsa0JBQWtCO0FBQ2xCO0VBQ0U7Ozs7SUFJRSxhQUFhO0VBQ2Y7O0VBRUE7SUFDRSxTQUFTO0VBQ1g7O0VBRUE7Ozs7SUFJRSxXQUFXO0VBQ2I7QUFDRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCI6cm9vdCB7XFxuICAtLXBhc3Npb25hdGUtcmVkOiAxOTEsIDUsIDU1O1xcbiAgLS1ub3N0YWxnaWMteWVsbG93OiAyNDIsIDIzMywgMTA3O1xcbiAgLS1zb2Z0LWdyYXk6IDIzNywgMTk2LCAxNzg7XFxuICAtLXllbGxvLXJhbmdlOiAyNDIsIDE3NCwgMTE0O1xcbiAgLS1kYXJrLWJsYWNrOiA4OSwgMiwgMjtcXG4gIC0tc2hhcnAtd2hpdGU6IDI1NSwgMjU1LCAyNTU7XFxuICAtLXZpc3RhLWJsdWU6IDEzOCwgMTY2LCAxOTg7XFxuICAtLXN0ZWVsLWJsdWU6IDUwLCAxMjksIDE3ODtcXG4gIC0teWlubW4tYmx1ZTogNTcsIDg1LCAxNTg7XFxuICAtLWJvcmRlci1yYWRpdXM6IDhweDtcXG4gIC0tc3BhY2luZy14czogNXB4O1xcbiAgLS1zcGFjaW5nLXNtOiAxMHB4O1xcbiAgLS1zcGFjaW5nLW1kOiAxNXB4O1xcbiAgLS1zcGFjaW5nLWxnOiAyMHB4O1xcbiAgLS1zcGFjaW5nLXhsOiA0MHB4O1xcbiAgLS1jb250YWluZXItd2lkdGg6IDEyMDBweDtcXG4gIC0tZm9vdGVyLWhlaWdodDogNDBweDtcXG4gIC0tYnRuLWhlaWdodDogNTBweDtcXG4gIC0tcG9wdXAtaGVpZ2h0OiAzMDBweDtcXG4gIC0tY2hlY2tib3gtc2l6ZTogMjBweDtcXG4gIC0tZm4tYnRuLXdpZHRoOiAxMTBweDtcXG4gIC0tc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMTYpIDBweCAxcHggNHB4O1xcbn1cXG5cXG4vKiBHTE9CQUwgKi9cXG5odG1sIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBoZWlnaHQ6IDEwMCU7XFxufVxcblxcbiosXFxuKjpiZWZvcmUsXFxuKjphZnRlciB7XFxuICBib3gtc2l6aW5nOiBpbmhlcml0O1xcbn1cXG5cXG5ib2R5IHtcXG4gIG1pbi1oZWlnaHQ6IDEwMCU7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvIDFmciBhdXRvO1xcbn1cXG5cXG4vKiBIRUFERVIgKi9cXG4uaGVhZGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEodmFyKC0tbm9zdGFsZ2ljLXllbGxvdyksIDAuOCk7XFxuICBib3gtc2hhZG93OiB2YXIoLS1zaGFkb3cpO1xcbn1cXG5cXG4uaGVhZGVyLWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBtYXgtd2lkdGg6IHZhcigtLWNvbnRhaW5lci13aWR0aCk7XFxuICBwYWRkaW5nOiB2YXIoLS1zcGFjaW5nLWxnKTtcXG59XFxuXFxuLmhlYWRlci10aXRsZSB7XFxuICBmb250LWZhbWlseTogXFxcIlJvYm90b1xcXCIsIHNhbnMtc2VyaWY7XFxuICBjb2xvcjogcmdiYSh2YXIoLS15aW5tbi1ibHVlKSwgMSk7XFxuICBmb250LXNpemU6IDEuNXJlbTtcXG59XFxuXFxuLyogTUFJTiAqL1xcbi5tYWluIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiUm9ib3RvXFxcIiwgc2Fucy1zZXJpZjtcXG4gIGZvbnQtc2l6ZTogMS4xcmVtO1xcbiAgY29sb3I6IHJnYmEodmFyKC0tZGFyay1ibGFjayksIDEpO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBtYXgtd2lkdGg6IHZhcigtLWNvbnRhaW5lci13aWR0aCk7XFxuICBtYXJnaW46IDAgYXV0bztcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEodmFyKC0teWVsbG8tcmFuZ2UpLCAwLjgpO1xcbn1cXG5cXG4ubWFpbi1pY29ucyB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB0b3A6IDAuMTI1ZW07XFxuICBoZWlnaHQ6IDFlbTtcXG4gIHdpZHRoOiAxZW07XFxuICBtYXJnaW4tbGVmdDogdmFyKC0tc3BhY2luZy14cyk7XFxufVxcblxcbi8qIE1BSU4gLSBOQVZCQVIgKi9cXG4ubWFpbi1uYXZiYXIge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IHZhcigtLWJ0bi1oZWlnaHQpO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIDFmcik7XFxuICBib3gtc2hhZG93OiB2YXIoLS1zaGFkb3cpO1xcbn1cXG5cXG4ubWFpbi1uYXZiYXItaXRlbSB7XFxuICBhcHBlYXJhbmNlOiBub25lO1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLm1haW4tbmF2YmFyLWl0ZW1MYWJlbCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4ubWFpbi1uYXZiYXItaXRlbTpjaGVja2VkICsgbGFiZWwge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSh2YXIoLS1ub3N0YWxnaWMteWVsbG93KSwgMC44KTtcXG59XFxuXFxuLyogTUFJTiAtIEFDVElWRSBUQUIgKi9cXG4ubWFpbi1hY3RpdmVUYWIge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBmbGV4OiAxO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4vKiBNQUlOIC0gQUREIFBST0pFQ1QgKi9cXG4ubWFpbi1hZGRQcm9qZWN0QnRuIHtcXG4gIGhlaWdodDogdmFyKC0tYnRuLWhlaWdodCk7XFxuICB3aWR0aDogMTAwJTtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiUm9ib3RvXFxcIiwgc2Fucy1zZXJpZjtcXG4gIGNvbG9yOiByZ2JhKHZhcigtLXlpbm1uLWJsdWUsIDEpKTtcXG4gIGZvbnQtc2l6ZTogMS4xcmVtO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSh2YXIoLS1ub3N0YWxnaWMteWVsbG93KSwgMC41KTtcXG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0O1xcbn1cXG5cXG4ubWFpbi1hZGRQcm9qZWN0QnRuOmhvdmVyLFxcbi5tYWluLWFkZFByb2plY3RCdG46YWN0aXZlLFxcbi5tYWluLWFkZFByb2plY3RCdG46Zm9jdXMge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSh2YXIoLS1ub3N0YWxnaWMteWVsbG93KSwgMC44KTtcXG59XFxuXFxuLm1haW4tYWRkUHJvamVjdEZvcm0ge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IHZhcigtLXBvcHVwLWhlaWdodCk7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvIDFmciBhdXRvO1xcbiAgZ2FwOiB2YXIoLS1zcGFjaW5nLXNtKTtcXG4gIHBhZGRpbmc6IHZhcigtLXNwYWNpbmctc20pO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSh2YXIoLS1ub3N0YWxnaWMteWVsbG93KSwgMC44KTtcXG59XFxuXFxuLm1haW4tYWRkUHJvamVjdEZvcm0tdGl0bGUsXFxuLm1haW4tYWRkUHJvamVjdEZvcm0tZGVzY3JpcHRpb24ge1xcbiAgZ3JpZC1jb2x1bW46IDEgLyAtMTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIHBhZGRpbmc6IHZhcigtLXNwYWNpbmctc20pO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSh2YXIoLS1zb2Z0LWdyYXkpLCAwLjgpO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJSb2JvdG9cXFwiLCBzYW5zLXNlcmlmO1xcbiAgY29sb3I6IHJnYmEodmFyKC0tZGFyay1ibGFjayksIDEpO1xcbiAgZm9udC1zaXplOiAxLjFyZW07XFxuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dDtcXG59XFxuXFxuLm1haW4tYWRkUHJvamVjdEZvcm0tdGl0bGU6Zm9jdXMsXFxuLm1haW4tYWRkUHJvamVjdEZvcm0tdGl0bGU6YWN0aXZlLFxcbi5tYWluLWFkZFByb2plY3RGb3JtLWRlc2NyaXB0aW9uOmZvY3VzLFxcbi5tYWluLWFkZFByb2plY3RGb3JtLWRlc2NyaXB0aW9uOmFjdGl2ZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKHZhcigtLW5vc3RhbGdpYy15ZWxsb3cpLCAwLjgpO1xcbn1cXG5cXG4ubWFpbi1hZGRQcm9qZWN0Rm9ybS1kZXNjcmlwdGlvbiB7XFxuICByZXNpemU6IG5vbmU7XFxufVxcblxcbi5tYWluLWFkZFByb2plY3RGb3JtLWNvbmZpcm0sXFxuLm1haW4tYWRkUHJvamVjdEZvcm0tY2FuY2VsIHtcXG4gIGhlaWdodDogdmFyKC0tYnRuLWhlaWdodCk7XFxuICBib3JkZXI6IG5vbmU7XFxuICBmb250LWZhbWlseTogXFxcIlJvYm90b1xcXCIsIHNhbnMtc2VyaWY7XFxuICBjb2xvcjogcmdiYSh2YXIoLS1kYXJrLWJsYWNrKSwgMSk7XFxuICBmb250LXNpemU6IDEuMXJlbTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0O1xcbn1cXG5cXG4ubWFpbi1hZGRQcm9qZWN0Rm9ybS1jb25maXJtIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEodmFyKC0teWVsbG8tcmFuZ2UpLCAwLjUpO1xcbn1cXG5cXG4ubWFpbi1hZGRQcm9qZWN0Rm9ybS1jb25maXJtOmhvdmVyLFxcbi5tYWluLWFkZFByb2plY3RGb3JtLWNvbmZpcm06YWN0aXZlLFxcbi5tYWluLWFkZFByb2plY3RGb3JtLWNvbmZpcm06Zm9jdXMge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSh2YXIoLS1ub3N0YWxnaWMteWVsbG93KSwgMC44KTtcXG59XFxuXFxuLm1haW4tYWRkUHJvamVjdEZvcm0tY2FuY2VsIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEodmFyKC0tc29mdC1ncmF5KSwgMC44KTtcXG59XFxuXFxuLm1haW4tYWRkUHJvamVjdEZvcm0tY2FuY2VsOmhvdmVyLFxcbi5tYWluLWFkZFByb2plY3RGb3JtLWNhbmNlbDphY3RpdmUsXFxuLm1haW4tYWRkUHJvamVjdEZvcm0tY2FuY2VsOmZvY3VzIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEodmFyKC0tc29mdC1ncmF5KSwgMSk7XFxufVxcblxcbi8qIE1BSU4gLSBBREQgVEFTSyAqL1xcbi5tYWluLWFkZFRhc2tGb3JtIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiB2YXIoLS1wb3B1cC1oZWlnaHQpO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogYXV0byAxZnIgYXV0byBhdXRvO1xcbiAgZ2FwOiB2YXIoLS1zcGFjaW5nLXNtKTtcXG4gIHBhZGRpbmc6IHZhcigtLXNwYWNpbmctc20pO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSh2YXIoLS1ub3N0YWxnaWMteWVsbG93KSwgMC44KTtcXG59XFxuXFxuLm1haW4tYWRkVGFza0Zvcm0tdGl0bGUsXFxuLm1haW4tYWRkVGFza0Zvcm0tZGVzY3JpcHRpb24sXFxuLm1haW4tYWRkVGFza0Zvcm0tZGF0ZSB7XFxuICBncmlkLWNvbHVtbjogMSAvIC0xO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgcGFkZGluZzogdmFyKC0tc3BhY2luZy1zbSk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKHZhcigtLXNvZnQtZ3JheSksIDAuOCk7XFxuICBmb250LWZhbWlseTogXFxcIlJvYm90b1xcXCIsIHNhbnMtc2VyaWY7XFxuICBjb2xvcjogcmdiYSh2YXIoLS1kYXJrLWJsYWNrKSwgMSk7XFxuICBmb250LXNpemU6IDFyZW07XFxuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dDtcXG59XFxuXFxuLm1haW4tYWRkVGFza0Zvcm0tdGl0bGU6Zm9jdXMsXFxuLm1haW4tYWRkVGFza0Zvcm0tdGl0bGU6YWN0aXZlLFxcbi5tYWluLWFkZFRhc2tGb3JtLWRlc2NyaXB0aW9uOmZvY3VzLFxcbi5tYWluLWFkZFRhc2tGb3JtLWRlc2NyaXB0aW9uOmFjdGl2ZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKHZhcigtLW5vc3RhbGdpYy15ZWxsb3cpLCAwLjgpO1xcbn1cXG5cXG4ubWFpbi1hZGRUYXNrRm9ybS1kZXNjcmlwdGlvbiB7XFxuICByZXNpemU6IG5vbmU7XFxufVxcblxcbi5tYWluLWFkZFRhc2tGb3JtLWNvbmZpcm0sXFxuLm1haW4tYWRkVGFza0Zvcm0tY2FuY2VsIHtcXG4gIGhlaWdodDogdmFyKC0tYnRuLWhlaWdodCk7XFxuICBib3JkZXI6IG5vbmU7XFxuICBmb250LWZhbWlseTogXFxcIlJvYm90b1xcXCIsIHNhbnMtc2VyaWY7XFxuICBjb2xvcjogcmdiYSh2YXIoLS1kYXJrLWJsYWNrKSwgMSk7XFxuICBmb250LXNpemU6IDFyZW07XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dDtcXG59XFxuXFxuLm1haW4tYWRkVGFza0Zvcm0tY29uZmlybSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKHZhcigtLXllbGxvLXJhbmdlKSwgMC41KTtcXG59XFxuXFxuLm1haW4tYWRkVGFza0Zvcm0tY29uZmlybTpob3ZlcixcXG4ubWFpbi1hZGRUYXNrRm9ybS1jb25maXJtOmFjdGl2ZSxcXG4ubWFpbi1hZGRUYXNrRm9ybS1jb25maXJtOmZvY3VzIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEodmFyKC0tbm9zdGFsZ2ljLXllbGxvdyksIDAuOCk7XFxufVxcblxcbi5tYWluLWFkZFRhc2tGb3JtLWNhbmNlbCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKHZhcigtLXNvZnQtZ3JheSksIDAuOCk7XFxufVxcblxcbi5tYWluLWFkZFRhc2tGb3JtLWNhbmNlbDpob3ZlcixcXG4ubWFpbi1hZGRUYXNrRm9ybS1jYW5jZWw6YWN0aXZlLFxcbi5tYWluLWFkZFRhc2tGb3JtLWNhbmNlbDpmb2N1cyB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKHZhcigtLXNvZnQtZ3JheSksIDEpO1xcbn1cXG5cXG4vKiBNQUlOIC0gVE9ETyBMSVNUICovXFxuLm1haW4tcHJvamVjdExpc3Qge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBmbGV4OiAxO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IHZhcigtLXNwYWNpbmctbGcpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSh2YXIoLS15ZWxsby1yYW5nZSksIDAuOCk7XFxuICBwYWRkaW5nOiB2YXIoLS1zcGFjaW5nLWxnKTtcXG59XFxuXFxuLm1haW4tcHJvamVjdCB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEodmFyKC0tc29mdC1ncmF5KSwgMC44KTtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG8gMWZyIGF1dG8gYXV0bztcXG4gIGFsaWduLWl0ZW1zOiBzdGFydDtcXG4gIGdhcDogdmFyKC0tc3BhY2luZy1zbSk7XFxuICBwYWRkaW5nOiB2YXIoLS1zcGFjaW5nLXNtKTtcXG4gIGN1cnNvcjogZ3JhYjtcXG59XFxuXFxuLm1haW4tcHJvamVjdC10aXRsZSxcXG4ubWFpbi10YXNrLXRpdGxlLFxcbi5tYWluLXRhc2stZGF0ZSB7XFxuICBtYXJnaW4tdG9wOiAwLjE1ZW07XFxuICBvdmVyZmxvdy13cmFwOiBicmVhay13b3JkO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJSb2JvdG9cXFwiLCBzYW5zLXNlcmlmO1xcbiAgY29sb3I6IHJnYmEodmFyKC0tZGFyay1ibGFjayksIDEpO1xcbiAgZm9udC1zaXplOiAxcmVtO1xcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7XFxufVxcblxcbi5tYWluLXByb2plY3Qtc29ydFRhc2tXcmFwcGVyIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgZ3JpZC1jb2x1bW46IDEgLyAtMTtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XFxuICBnYXA6IHZhcigtLXNwYWNpbmctc20pO1xcbiAgaGVpZ2h0OiB2YXIoLS1idG4taGVpZ2h0KTtcXG59XFxuXFxuLm1haW4tcHJvamVjdC1zb3J0QnRuIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxuICBhcHBlYXJhbmNlOiBub25lO1xcbn1cXG5cXG4ubWFpbi1wcm9qZWN0LXNvcnRMYWJlbCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSh2YXIoLS1ub3N0YWxnaWMteWVsbG93KSwgMC41KTtcXG4gIHRyYW5zaXRpb246IDAuM3MgZWFzZS1pbi1vdXQ7XFxufVxcblxcbi5tYWluLXByb2plY3Qtc29ydEJ0bjpjaGVja2VkICsgLm1haW4tcHJvamVjdC1zb3J0TGFiZWwge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSh2YXIoLS1ub3N0YWxnaWMteWVsbG93KSwgMC44KTtcXG4gIHRyYW5zaXRpb246IDAuM3M7XFxufVxcblxcbi5tYWluLWFkZFRhc2tCdG4ge1xcbiAgZ3JpZC1jb2x1bW46IDIgLyAtMTtcXG4gIGhlaWdodDogY2FsYyh2YXIoLS1idG4taGVpZ2h0KSAvIDIpO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBmb250LWZhbWlseTogXFxcIlJvYm90b1xcXCIsIHNhbnMtc2VyaWY7XFxuICBjb2xvcjogcmdiYSh2YXIoLS15aW5tbi1ibHVlLCAxKSk7XFxuICBmb250LXNpemU6IDAuOHJlbTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEodmFyKC0tbm9zdGFsZ2ljLXllbGxvdyksIDAuNSk7XFxuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dDtcXG59XFxuXFxuLm1haW4tYWRkVGFza0J0bjpob3ZlcixcXG4ubWFpbi1hZGRUYXNrQnRuOmFjdGl2ZSxcXG4ubWFpbi1hZGRUYXNrQnRuOmZvY3VzIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEodmFyKC0tbm9zdGFsZ2ljLXllbGxvdyksIDAuOCk7XFxufVxcblxcbi5tYWluLXByb2plY3QtdGFza0xpc3Qge1xcbiAgZ3JpZC1jb2x1bW46IDIgLyAtMTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiB2YXIoLS1zcGFjaW5nLXNtKTtcXG59XFxuXFxuLm1haW4tdGFzayB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvIDFmciBhdXRvIGF1dG8gYXV0bztcXG4gIGFsaWduLWl0ZW1zOiBzdGFydDtcXG4gIGdhcDogdmFyKC0tc3BhY2luZy1zbSk7XFxufVxcblxcbi5tYWluLXByb2plY3QtZGVzY3JpcHRpb24sXFxuLm1haW4tdGFzay1kZXNjcmlwdGlvbiB7XFxuICBkaXNwbGF5OiBub25lO1xcbiAgZm9udC1zaXplOiAwLjlyZW07XFxufVxcblxcbi5tYWluLXByb2plY3QtZGVzY3JpcHRpb24uYWN0aXZlLFxcbi5tYWluLXRhc2stZGVzY3JpcHRpb24uYWN0aXZlIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cXG4ubWFpbi1wcm9qZWN0IGJ1dHRvbiB7XFxuICBmb250LWZhbWlseTogXFxcIlJvYm90b1xcXCIsIHNhbnMtc2VyaWY7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBib3JkZXI6IG5vbmU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKHZhcigtLW5vc3RhbGdpYy15ZWxsb3cpLCAwLjUpO1xcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7XFxufVxcblxcbi5tYWluLXByb2plY3QgYnV0dG9uOmhvdmVyLFxcbi5tYWluLXByb2plY3QgYnV0dG9uOmFjdGl2ZSxcXG4ubWFpbi1wcm9qZWN0IGJ1dHRvbjpmb2N1cyB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKHZhcigtLW5vc3RhbGdpYy15ZWxsb3cpLCAwLjgpO1xcbn1cXG5cXG4ubWFpbi1wcm9qZWN0LWV4cGFuZEJ0bixcXG4ubWFpbi1wcm9qZWN0LWRlbGV0ZUJ0bixcXG4ubWFpbi10YXNrLWV4cGFuZEJ0bixcXG4ubWFpbi10YXNrLWRlbGV0ZUJ0biB7XFxuICB3aWR0aDogdmFyKC0tZm4tYnRuLXdpZHRoKTtcXG59XFxuXFxuLm1haW4tcHJvamVjdC1jaGVja2JveCxcXG4ubWFpbi10YXNrLWNoZWNrYm94IHtcXG4gIG1hcmdpbjogMDtcXG4gIHdpZHRoOiB2YXIoLS1jaGVja2JveC1zaXplKTtcXG4gIGhlaWdodDogdmFyKC0tY2hlY2tib3gtc2l6ZSk7XFxuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKHZhcigtLWRhcmstYmxhY2spLCAxKTtcXG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLWJvcmRlci1yYWRpdXMpO1xcbiAgYWNjZW50LWNvbG9yOiByZ2JhKHZhcigtLXBhc3Npb25hdGUtcmVkKSwgMSk7XFxuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLyogRk9PVEVSICovXFxuLmZvb3RlciB7XFxuICBwYWRkaW5nLWJvdHRvbTogdmFyKC0tc3BhY2luZy14cyk7XFxuICBoZWlnaHQ6IHZhcigtLWZvb3Rlci1oZWlnaHQpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSh2YXIoLS1zb2Z0LWdyYXkpLCAwLjgpO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGdhcDogMTBweDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgZ3JpZC1yb3c6IDMgLyA0O1xcbn1cXG5cXG4uZmEtZ2l0aHViIHtcXG4gIGZvbnQtc2l6ZTogMjBweDtcXG4gIG1hcmdpbi10b3A6IDRweDtcXG4gIGNvbG9yOiBibGFjaztcXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjNzIGVhc2UtaW4tb3V0O1xcbn1cXG5cXG4uZmEtZ2l0aHViOmhvdmVyIHtcXG4gIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZykgc2NhbGUoMS4yKTtcXG59XFxuXFxuLyogTUVESUEgUVVFUklFUyAqL1xcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDUwMHB4KSB7XFxuICAubWFpbi1wcm9qZWN0LWV4cGFuZEJ0biBzcGFuLFxcbiAgLm1haW4tcHJvamVjdC1kZWxldGVCdG4gc3BhbixcXG4gIC5tYWluLXRhc2stZXhwYW5kQnRuIHNwYW4sXFxuICAubWFpbi10YXNrLWRlbGV0ZUJ0biBzcGFuIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gIH1cXG5cXG4gIC5tYWluLWljb25zIHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgfVxcblxcbiAgLm1haW4tcHJvamVjdC1leHBhbmRCdG4sXFxuICAubWFpbi1wcm9qZWN0LWRlbGV0ZUJ0bixcXG4gIC5tYWluLXRhc2stZXhwYW5kQnRuLFxcbiAgLm1haW4tdGFzay1kZWxldGVCdG4ge1xcbiAgICB3aWR0aDogYXV0bztcXG4gIH1cXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLXJlc2V0LmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLXJlc2V0LmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCIiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGlzIHJlZmVyZW5jZWQgYnkgb3RoZXIgbW9kdWxlcyBzbyBpdCBjYW4ndCBiZSBpbmxpbmVkXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18oXCIuL3RvZG8tbGlzdC9zcmMvY29tcG9uZW50cy9wZW5kaW5nL3BlbmRpbmcuanNcIik7XG4iLCIiXSwibmFtZXMiOlsicHJvamVjdExpc3RDb21wb25lbnQiLCJhcmNoaXZlIiwiY29tcGxldGVkUHJvamVjdHMiLCJ3cmFwcGVyIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwicHJvamVjdExpc3QiLCJjbGFzc0xpc3QiLCJhZGQiLCJhcHBlbmRDaGlsZCIsImhlYWRlciIsImhlYWRlckNvbnRhaW5lciIsImhlYWRlclRpdGxlIiwidGV4dENvbnRlbnQiLCJtYWluIiwibWFpbk5hdmJhciIsIm1haW5OYXZiYXJJdGVtcyIsImlkIiwiZm9yRWFjaCIsIml0ZW0iLCJtYWluTmF2YmFyTGFiZWwiLCJtYWluTmF2YmFySXRlbSIsImh0bWxGb3IiLCJ0b0xvd2VyQ2FzZSIsInR5cGUiLCJuYW1lIiwidmFsdWUiLCJjaGVja2VkIiwiZm9vdGVyIiwiZm9vdGVyVGV4dCIsImZvb3RlckxpbmsiLCJmb290ZXJJY29uIiwiRGF0ZSIsImdldEZ1bGxZZWFyIiwiaHJlZiIsInRhcmdldCIsInJlbCIsInBhZ2VMb2FkIiwiY29udGVudCIsImdldEVsZW1lbnRCeUlkIiwiYWRkUHJvamVjdCIsImFkZFByb2plY3RCdG4iLCJhZGRFdmVudExpc3RlbmVyIiwiYWRkUHJvamVjdFBvcHVwIiwiYWRkUHJvamVjdEZvcm0iLCJwcm9qZWN0VGl0bGUiLCJwcm9qZWN0RGVzY3JpcHRpb24iLCJjb25maXJtQnRuIiwiY2FuY2VsQnRuIiwicGxhY2Vob2xkZXIiLCJyZXF1aXJlZCIsIm9uc3VibWl0IiwiZSIsInByZXZlbnREZWZhdWx0IiwicmVtb3ZlIiwidGFza0xpc3QiLCJ0YXNrTGlzdENvbXBvbmVudCIsImFkZFByb2plY3RCdG5Db21wb25lbnQiLCJyZW5kZXJQZW5kaW5nQ29tcG9uZW50IiwicGVuZGluZ1Byb2plY3RzIiwicmVmcmVzaFByb2plY3RMaXN0IiwicHJvamVjdEFyciIsImNsZWFyUHJvamVjdExpc3QiLCJhY3RpdmVUYWIiLCJxdWVyeVNlbGVjdG9yIiwibmV3UHJvamVjdExpc3QiLCJyZWZyZXNoVGFza0xpc3QiLCJwcm9qZWN0T2JqIiwiY2xlYXJUYXNrTGlzdCIsIm5ld1Rhc2tMaXN0IiwicHJvamVjdEVsZW1lbnQiLCJhZGRUYXNrIiwiY29tcGxldGVQcm9qZWN0IiwiY29tcGxldGVUYXNrIiwiZGVsZXRlSWNvbiIsImV4cGFuZEljb25Nb3JlIiwiZXhwYW5kSWNvbkxlc3MiLCJkZWxldGVUYXNrIiwiZGVsZXRlUHJvamVjdCIsInNvcnRUYXNrQnlEYXRlIiwic29ydEFyckJ5UHJpb3JpdHkiLCJzd2FwUHJvamVjdCIsImkiLCJsZW5ndGgiLCJwcm9qZWN0Q29tcG9uZW50IiwicHJvamVjdCIsImluZGV4IiwicHJvamVjdENoZWNrYm94IiwicHJvamVjdEV4cGFuZEJ0biIsInByb2plY3RFeHBhbmRCdG5UZXh0IiwicHJvamVjdERlbGV0ZUJ0biIsInByb2plY3REZWxldGVCdG5UZXh0IiwicHJvamVjdEV4cGFuZEljb24iLCJwcm9qZWN0RGVsZXRlSWNvbiIsInNvcnRUYXNrQ29tcG9uZW50Iiwic29ydENvbXBvbmVudCIsImFkZFRhc2tCdG5Db21wb25lbnQiLCJhZGRUYXNrQnRuIiwicHJvamVjdFRhc2tMaXN0IiwiY29tcGxldGVkIiwic3R5bGUiLCJiYWNrZ3JvdW5kSW1hZ2UiLCJnZXRPYmpDb2xvciIsImRyYWdnYWJsZSIsImRhdGFUcmFuc2ZlciIsInNldERhdGEiLCJwcmlvcml0eSIsIm9wYWNpdHkiLCJkcmFnZ2VkUHJvamVjdFByaW9yaXR5IiwiZ2V0RGF0YSIsImRhdGFzZXQiLCJkaXNhYmxlZCIsInRpdGxlIiwic3BlbGxjaGVjayIsImRlc2NyaXB0aW9uIiwic3JjIiwidGFza0FyciIsInRhc2tzIiwidGFza0NvbXBvbmVudCIsInRhc2siLCJ0YXNrSW5kZXgiLCJ0YXNrT2JqIiwidGFza0NoZWNrYm94IiwidGFza1RpdGxlIiwidGFza0Rlc2NyaXB0aW9uIiwidGFza0RhdGUiLCJ0YXNrRXhwYW5kQnRuIiwidGFza0V4cGFuZEJ0blRleHQiLCJ0YXNrRGVsZXRlQnRuIiwidGFza0RlbGV0ZUJ0blRleHQiLCJ0YXNrRXhwYW5kSWNvbiIsInRhc2tEZWxldGVJY29uIiwiZHVlRGF0ZSIsImFkZFRhc2tQb3B1cCIsImFkZFRhc2tGb3JtIiwib25jbGljayIsInNvcnRUYXNrV3JhcHBlciIsInNvcnRUYXNrQnlQcmlvcml0eUxhYmVsIiwic29ydFRhc2tCeVByaW9yaXR5QnRuIiwic29ydFRhc2tCeURhdGVMYWJlbCIsInNvcnRUYXNrQnlEYXRlQnRuIiwib2JqQXJyIiwib2JqIiwib2JqUHJpb3JpdHkiLCJub3JtYWxpemVkUHJpb3JpdHkiLCJyZWQiLCJNYXRoIiwicm91bmQiLCJncmVlbiIsInJlbmRlckFyY2hpdmVDb21wb25lbnQiLCJmYXZpY29uTGluayIsImdldFBlbmRpbmdQcm9qZWN0cyIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJKU09OIiwicGFyc2UiLCJnZXRDb21wbGV0ZWRQcm9qZWN0cyIsInNhdmVQZW5kaW5nUHJvamVjdHMiLCJzZXRJdGVtIiwic3RyaW5naWZ5Iiwic2F2ZUNvbXBsZXRlZFByb2plY3RzIiwic2F2ZVByb2plY3RzIiwid2luZG93IiwiZ2V0UHJvamVjdEZyb21JbnB1dCIsImZvcm0iLCJlbGVtZW50cyIsIm5vdyIsIm5ld1Byb2plY3QiLCJwdXNoIiwicHJvamVjdEluZGV4IiwiZGlzcGxheU1vZGUiLCJnZXREaXNwbGF5TW9kZSIsIndvcmtBcnIiLCJzcGxpY2UiLCJyZXNldFByaW9yaXR5IiwiZmluZEluZGV4IiwicHJpb3JpdHkxIiwicHJpb3JpdHkyIiwidGVtcCIsImdldFRhc2tGcm9tSW5wdXQiLCJuZXdUYXNrIiwiZ2V0U29ydE1vZGUiLCJzb3J0IiwiYSIsImIiLCJhRGF0ZSIsImJEYXRlIiwiYXJyIiwiZWxlbWVudCIsInNvcnRCdG5zIiwiZ2V0RWxlbWVudHNCeU5hbWUiLCJzb3J0TW9kZSIsImJ0biIsImNyZWF0ZUZhdmljb24iLCJpY29uTGluayIsImhlYWQiLCJwdXJnZUFjdGl2ZVRhYiIsImNoaWxkcmVuIiwicmVtb3ZlQ2hpbGQiLCJsYXN0Q2hpbGQiLCJ0YWJCdG5zIiwidGFiU3dpdGNoIiwic3RhcnRBcHAiXSwic291cmNlUm9vdCI6IiJ9