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
/******/ 	var __webpack_exports__ = __webpack_require__("./todo-list/src/components/projectList/projectList.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QWEsV0FBVyxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxZQUFZLE9BQU8sWUFBWSxNQUFNLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLE9BQU8sS0FBSyxZQUFZLE9BQU8sWUFBWSxNQUFNLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLFlBQVksTUFBTSxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLFlBQVksYUFBYSxPQUFPLE9BQU8sWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sTUFBTSxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxRQUFRLFlBQVksT0FBTyxLQUFLLFVBQVUsTUFBTSxNQUFNLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxPQUFPLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxPQUFPLFlBQVksT0FBTyxZQUFZLE1BQU0sVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sT0FBTyxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksT0FBTyxRQUFRLFlBQVksT0FBTyxLQUFLLFVBQVUsTUFBTSxNQUFNLFlBQVksV0FBVyxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxPQUFPLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxPQUFPLFlBQVksT0FBTyxZQUFZLE1BQU0sVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLE1BQU0sT0FBTyxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtB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QUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7O0FDckVhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNmQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NmQTs7Ozs7VUVBQTtVQUNBO1VBQ0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2phdmFzY3JpcHQtZGVzaWduLXBhdHRlcm5zLy4vdG9kby1saXN0L3NyYy9jb21wb25lbnRzL2FyY2hpdmUvYXJjaGl2ZS5qcyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LWRlc2lnbi1wYXR0ZXJucy8uL3RvZG8tbGlzdC9zcmMvY29tcG9uZW50cy9wYWdlTG9hZC5qcyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LWRlc2lnbi1wYXR0ZXJucy8uL3RvZG8tbGlzdC9zcmMvY29tcG9uZW50cy9wZW5kaW5nL2FkZFByb2plY3RQb3B1cC5qcyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LWRlc2lnbi1wYXR0ZXJucy8uL3RvZG8tbGlzdC9zcmMvY29tcG9uZW50cy9wZW5kaW5nL3BlbmRpbmcuanMiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdC1kZXNpZ24tcGF0dGVybnMvLi90b2RvLWxpc3Qvc3JjL2NvbXBvbmVudHMvcHJvamVjdExpc3QvcHJvamVjdExpc3QuanMiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdC1kZXNpZ24tcGF0dGVybnMvLi90b2RvLWxpc3Qvc3JjL2luZGV4LmpzIiwid2VicGFjazovL2phdmFzY3JpcHQtZGVzaWduLXBhdHRlcm5zLy4vdG9kby1saXN0L3NyYy9zdHlsZXMvc3R5bGVzLXJlc2V0LmNzcyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LWRlc2lnbi1wYXR0ZXJucy8uL3RvZG8tbGlzdC9zcmMvc3R5bGVzL3N0eWxlcy5jc3MiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdC1kZXNpZ24tcGF0dGVybnMvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2phdmFzY3JpcHQtZGVzaWduLXBhdHRlcm5zLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdC1kZXNpZ24tcGF0dGVybnMvLi90b2RvLWxpc3Qvc3JjL3N0eWxlcy9zdHlsZXMtcmVzZXQuY3NzP2M1OTAiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdC1kZXNpZ24tcGF0dGVybnMvLi90b2RvLWxpc3Qvc3JjL3N0eWxlcy9zdHlsZXMuY3NzPzZmNzkiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdC1kZXNpZ24tcGF0dGVybnMvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdC1kZXNpZ24tcGF0dGVybnMvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2phdmFzY3JpcHQtZGVzaWduLXBhdHRlcm5zLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL2phdmFzY3JpcHQtZGVzaWduLXBhdHRlcm5zLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL2phdmFzY3JpcHQtZGVzaWduLXBhdHRlcm5zLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdC1kZXNpZ24tcGF0dGVybnMvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LWRlc2lnbi1wYXR0ZXJucy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LWRlc2lnbi1wYXR0ZXJucy93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LWRlc2lnbi1wYXR0ZXJucy93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdC1kZXNpZ24tcGF0dGVybnMvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LWRlc2lnbi1wYXR0ZXJucy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2phdmFzY3JpcHQtZGVzaWduLXBhdHRlcm5zL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdC1kZXNpZ24tcGF0dGVybnMvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdC1kZXNpZ24tcGF0dGVybnMvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL2phdmFzY3JpcHQtZGVzaWduLXBhdHRlcm5zL3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdC1kZXNpZ24tcGF0dGVybnMvd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL2phdmFzY3JpcHQtZGVzaWduLXBhdHRlcm5zL3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBmaWxlb3ZlcnZpZXcgQXJjaGl2ZSBwcm9qZWN0cyBjb21wb25lbnRcbiAqIEBhdXRob3IgVGhpbmggTmd1eWVuXG4gKiBAdmVyc2lvbiAxLjAuMFxuICovXG5cblwidXNlIHN0cmljdFwiO1xuaW1wb3J0IHByb2plY3RMaXN0Q29tcG9uZW50IGZyb20gXCIuLi9wcm9qZWN0TGlzdC9wcm9qZWN0TGlzdFwiO1xuXG4vKipcbiAqIENyZWF0ZSBhbiBhcmNoaXZlZCBwcm9qZWN0cyBjb21wb25lbnQuXG4gKiBAcGFyYW0ge0FycmF5fSBjb21wbGV0ZWRQcm9qZWN0cyBBcnJheSBvZiBjb21wbGV0ZWQgcHJvamVjdHNcbiAqIEByZXR1cm4ge0hUTUxFbGVtZW50fSBBcmNoaXZlZCBwcm9qZWN0cyBjb21wb25lbnRcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYXJjaGl2ZShjb21wbGV0ZWRQcm9qZWN0cykge1xuICBjb25zdCB3cmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgcHJvamVjdExpc3QgPSBwcm9qZWN0TGlzdENvbXBvbmVudChjb21wbGV0ZWRQcm9qZWN0cyk7XG5cbiAgd3JhcHBlci5jbGFzc0xpc3QuYWRkKFwibWFpbi1hY3RpdmVUYWJcIik7XG5cbiAgd3JhcHBlci5hcHBlbmRDaGlsZChwcm9qZWN0TGlzdCk7XG5cbiAgcmV0dXJuIHdyYXBwZXI7XG59XG4iLCIvKipcbiAqIEBmaWxlb3ZlcnZpZXcgSW5pdGlhbGl6ZSBwYWdlIGxvYWRcbiAqIEBhdXRob3IgVGhpbmggTmd1eWVuXG4gKiBAdmVyc2lvbiAxLjAuMFxuICovXG5cblwidXNlIHN0cmljdFwiO1xuXG4vKipcbiAqIENyZWF0ZSB0aGUgaGVhZGVyIGNvbXBvbmVudC5cbiAqIEByZXR1cm4ge0hUTUxFbGVtZW50fSBIZWFkZXIgZWxlbWVudFxuICovXG5mdW5jdGlvbiBoZWFkZXIoKSB7XG4gIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoZWFkZXJcIik7XG4gIGNvbnN0IGhlYWRlckNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IGhlYWRlclRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xuICBoZWFkZXIuY2xhc3NMaXN0LmFkZChcImhlYWRlclwiKTtcbiAgaGVhZGVyQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJoZWFkZXItY29udGFpbmVyXCIpO1xuICBoZWFkZXJUaXRsZS5jbGFzc0xpc3QuYWRkKFwiaGVhZGVyLXRpdGxlXCIpO1xuICBoZWFkZXJUaXRsZS50ZXh0Q29udGVudCA9IFwiU3RhY2tUYXNrc1wiO1xuICBoZWFkZXJDb250YWluZXIuYXBwZW5kQ2hpbGQoaGVhZGVyVGl0bGUpO1xuICBoZWFkZXIuYXBwZW5kQ2hpbGQoaGVhZGVyQ29udGFpbmVyKTtcbiAgcmV0dXJuIGhlYWRlcjtcbn1cblxuLyoqXG4gKiBDcmVhdGUgdGhlIG1haW4gY29tcG9uZW50LlxuICogQHJldHVybiB7SFRNTEVsZW1lbnR9IE1haW4gZWxlbWVudFxuICovXG5mdW5jdGlvbiBtYWluKCkge1xuICBjb25zdCBtYWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm1haW5cIik7XG4gIGNvbnN0IG1haW5OYXZiYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibmF2XCIpO1xuICBjb25zdCBtYWluTmF2YmFySXRlbXMgPSBbXCJQZW5kaW5nXCIsIFwiQXJjaGl2ZVwiXTtcbiAgbWFpbi5jbGFzc0xpc3QuYWRkKFwibWFpblwiKTtcbiAgbWFpbi5pZCA9IFwibWFpblwiO1xuICBtYWluTmF2YmFyLmNsYXNzTGlzdC5hZGQoXCJtYWluLW5hdmJhclwiKTtcbiAgbWFpbk5hdmJhckl0ZW1zLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICBjb25zdCBtYWluTmF2YmFyTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gICAgY29uc3QgbWFpbk5hdmJhckl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgbWFpbk5hdmJhckxhYmVsLmNsYXNzTGlzdC5hZGQoXCJtYWluLW5hdmJhci1pdGVtTGFiZWxcIik7XG4gICAgbWFpbk5hdmJhckl0ZW0uY2xhc3NMaXN0LmFkZChcIm1haW4tbmF2YmFyLWl0ZW1cIik7XG4gICAgbWFpbk5hdmJhckxhYmVsLnRleHRDb250ZW50ID0gaXRlbTtcbiAgICBtYWluTmF2YmFyTGFiZWwuaHRtbEZvciA9IFwibWFpbi1uYXZiYXItXCIgKyBpdGVtLnRvTG93ZXJDYXNlKCk7XG4gICAgbWFpbk5hdmJhckl0ZW0udHlwZSA9IFwicmFkaW9cIjtcbiAgICBtYWluTmF2YmFySXRlbS5uYW1lID0gXCJtYWluLW5hdmJhclwiO1xuICAgIG1haW5OYXZiYXJJdGVtLnZhbHVlID0gaXRlbS50b0xvd2VyQ2FzZSgpO1xuICAgIG1haW5OYXZiYXJJdGVtLmlkID0gXCJtYWluLW5hdmJhci1cIiArIGl0ZW0udG9Mb3dlckNhc2UoKTtcbiAgICBtYWluTmF2YmFySXRlbS5jaGVja2VkID0gaXRlbSA9PT0gXCJQZW5kaW5nXCI7XG4gICAgbWFpbk5hdmJhci5hcHBlbmRDaGlsZChtYWluTmF2YmFySXRlbSk7XG4gICAgbWFpbk5hdmJhci5hcHBlbmRDaGlsZChtYWluTmF2YmFyTGFiZWwpO1xuICB9KTtcbiAgbWFpbi5hcHBlbmRDaGlsZChtYWluTmF2YmFyKTtcbiAgcmV0dXJuIG1haW47XG59XG5cbi8qKlxuICogQ3JlYXRlIHRoZSBmb290ZXIgY29tcG9uZW50LlxuICogQHJldHVybiB7SFRNTEVsZW1lbnR9IEZvb3RlciBlbGVtZW50XG4gKi9cbmZ1bmN0aW9uIGZvb3RlcigpIHtcbiAgY29uc3QgZm9vdGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZvb3RlclwiKTtcbiAgY29uc3QgZm9vdGVyVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICBjb25zdCBmb290ZXJMaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XG4gIGNvbnN0IGZvb3Rlckljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaVwiKTtcbiAgZm9vdGVyLmNsYXNzTGlzdC5hZGQoXCJmb290ZXJcIik7XG4gIGZvb3Rlckljb24uY2xhc3NMaXN0LmFkZChcImZhYlwiLCBcImZhLWdpdGh1YlwiKTtcbiAgZm9vdGVyVGV4dC50ZXh0Q29udGVudCA9XG4gICAgXCJDb3B5cmlnaHQgwqkgXCIgKyBuZXcgRGF0ZSgpLmdldEZ1bGxZZWFyKCkgKyBcIiBGZWxpeE5nRmVuZGVyXCI7XG4gIGZvb3RlckxpbmsuaHJlZiA9IFwiaHR0cHM6Ly9naXRodWIuY29tL0ZlbGl4TmdGZW5kZXJcIjtcbiAgZm9vdGVyTGluay50YXJnZXQgPSBcIl9ibGFua1wiO1xuICBmb290ZXJMaW5rLnJlbCA9IFwibm9vcGVuZXIgbm9yZWZlcnJlclwiO1xuICBmb290ZXJMaW5rLmFwcGVuZENoaWxkKGZvb3Rlckljb24pO1xuICBmb290ZXIuYXBwZW5kQ2hpbGQoZm9vdGVyVGV4dCk7XG4gIGZvb3Rlci5hcHBlbmRDaGlsZChmb290ZXJMaW5rKTtcbiAgcmV0dXJuIGZvb3Rlcjtcbn1cblxuLyoqXG4gKiBJbml0aWFsaXplIHBhZ2UgbG9hZC5cbiAqIEByZXR1cm4ge3ZvaWR9XG4gKiBAZXhwb3J0XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHBhZ2VMb2FkKCkge1xuICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb250ZW50XCIpO1xuICBjb250ZW50LmFwcGVuZENoaWxkKGhlYWRlcigpKTtcbiAgY29udGVudC5hcHBlbmRDaGlsZChtYWluKCkpO1xuICBjb250ZW50LmFwcGVuZENoaWxkKGZvb3RlcigpKTtcbn1cbiIsIi8qKlxuICogQGZpbGVvdmVydmlldyBCdXR0b24gY29tcG9uZW50IGZvciBhZGRpbmcgYSBuZXcgcHJvamVjdFxuICogQGF1dGhvciBUaGluaCBOZ3V5ZW5cbiAqIEB2ZXJzaW9uIDEuMC4wXG4gKi9cblxuXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGFkZFByb2plY3QgfSBmcm9tIFwiLi4vLi4vaW5kZXhcIjtcblxuLyoqXG4gKiBDcmVhdGUgYW4gYWRkIHByb2plY3QgYnV0dG9uIGNvbXBvbmVudC5cbiAqIEByZXR1cm4ge0hUTUxFbGVtZW50fSBBZGQgcHJvamVjdCBidXR0b25cbiAqIEBleHBvcnRcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYWRkUHJvamVjdEJ0bigpIHtcbiAgY29uc3QgYWRkUHJvamVjdEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG5cbiAgYWRkUHJvamVjdEJ0bi5jbGFzc0xpc3QuYWRkKFwibWFpbi1hZGRQcm9qZWN0QnRuXCIpO1xuICBhZGRQcm9qZWN0QnRuLnRleHRDb250ZW50ID0gXCJBZGQgUHJvamVjdCArXCI7XG5cbiAgYWRkUHJvamVjdEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIGlmIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1haW4tYWRkUHJvamVjdEZvcm1cIikpIHJldHVybjtcbiAgICBjb25zdCBwcm9qZWN0TGlzdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWFpbi1wcm9qZWN0TGlzdFwiKTtcbiAgICBwcm9qZWN0TGlzdC5hcHBlbmRDaGlsZChhZGRQcm9qZWN0UG9wdXAoKSk7XG4gIH0pO1xuXG4gIHJldHVybiBhZGRQcm9qZWN0QnRuO1xufVxuXG4vKipcbiAqIENyZWF0ZSBhbiBhZGQgcHJvamVjdCBmb3JtIGNvbXBvbmVudC5cbiAqIEByZXR1cm4ge0hUTUxFbGVtZW50fSBBZGQgcHJvamVjdCBmb3JtXG4gKi9cbmZ1bmN0aW9uIGFkZFByb2plY3RQb3B1cCgpIHtcbiAgY29uc3QgYWRkUHJvamVjdEZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZm9ybVwiKTtcbiAgY29uc3QgcHJvamVjdFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICBjb25zdCBwcm9qZWN0RGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGV4dGFyZWFcIik7XG4gIGNvbnN0IGNvbmZpcm1CdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICBjb25zdCBjYW5jZWxCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuXG4gIGFkZFByb2plY3RGb3JtLmNsYXNzTGlzdC5hZGQoXCJtYWluLWFkZFByb2plY3RGb3JtXCIpO1xuICBhZGRQcm9qZWN0Rm9ybS5pZCA9IFwibWFpbi1hZGRQcm9qZWN0Rm9ybVwiO1xuICBwcm9qZWN0VGl0bGUuY2xhc3NMaXN0LmFkZChcIm1haW4tYWRkUHJvamVjdEZvcm0tdGl0bGVcIik7XG4gIHByb2plY3REZXNjcmlwdGlvbi5jbGFzc0xpc3QuYWRkKFwibWFpbi1hZGRQcm9qZWN0Rm9ybS1kZXNjcmlwdGlvblwiKTtcbiAgY29uZmlybUJ0bi5jbGFzc0xpc3QuYWRkKFwibWFpbi1hZGRQcm9qZWN0Rm9ybS1jb25maXJtXCIpO1xuICBjYW5jZWxCdG4uY2xhc3NMaXN0LmFkZChcIm1haW4tYWRkUHJvamVjdEZvcm0tY2FuY2VsXCIpO1xuXG4gIHByb2plY3RUaXRsZS50eXBlID0gXCJ0ZXh0XCI7XG4gIHByb2plY3RUaXRsZS5wbGFjZWhvbGRlciA9IFwiUHJvamVjdCBOYW1lXCI7XG4gIHByb2plY3RUaXRsZS5uYW1lID0gXCJ0aXRsZVwiO1xuICBwcm9qZWN0VGl0bGUucmVxdWlyZWQgPSB0cnVlO1xuICBwcm9qZWN0RGVzY3JpcHRpb24ucGxhY2Vob2xkZXIgPSBcIlByb2plY3QgRGVzY3JpcHRpb25cIjtcbiAgcHJvamVjdERlc2NyaXB0aW9uLm5hbWUgPSBcImRlc2NyaXB0aW9uXCI7XG4gIGNvbmZpcm1CdG4udHlwZSA9IFwic3VibWl0XCI7XG4gIGNvbmZpcm1CdG4udGV4dENvbnRlbnQgPSBcIkNvbmZpcm1cIjtcbiAgY2FuY2VsQnRuLnR5cGUgPSBcImJ1dHRvblwiO1xuICBjYW5jZWxCdG4udGV4dENvbnRlbnQgPSBcIkNhbmNlbFwiO1xuXG4gIGFkZFByb2plY3RGb3JtLm9uc3VibWl0ID0gKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgYWRkUHJvamVjdCgpO1xuICAgIGFkZFByb2plY3RGb3JtLnJlbW92ZSgpO1xuICB9O1xuICBjYW5jZWxCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBhZGRQcm9qZWN0Rm9ybS5yZW1vdmUoKTtcbiAgfSk7XG5cbiAgYWRkUHJvamVjdEZvcm0uYXBwZW5kQ2hpbGQocHJvamVjdFRpdGxlKTtcbiAgYWRkUHJvamVjdEZvcm0uYXBwZW5kQ2hpbGQocHJvamVjdERlc2NyaXB0aW9uKTtcbiAgYWRkUHJvamVjdEZvcm0uYXBwZW5kQ2hpbGQoY29uZmlybUJ0bik7XG4gIGFkZFByb2plY3RGb3JtLmFwcGVuZENoaWxkKGNhbmNlbEJ0bik7XG5cbiAgcmV0dXJuIGFkZFByb2plY3RGb3JtO1xufSIsIi8qKlxuICogQGZpbGVvdmVydmlldyBQZW5kaW5nIHByb2plY3RzIGNvbXBvbmVudFxuICogQGF1dGhvciBUaGluaCBOZ3V5ZW5cbiAqIEB2ZXJzaW9uIDEuMC4wXG4gKi9cblxuXCJ1c2Ugc3RyaWN0XCI7XG5pbXBvcnQgcHJvamVjdExpc3RDb21wb25lbnQsIHtcbiAgdGFza0xpc3QgYXMgdGFza0xpc3RDb21wb25lbnQsXG59IGZyb20gXCIuLi9wcm9qZWN0TGlzdC9wcm9qZWN0TGlzdFwiO1xuaW1wb3J0IGFkZFByb2plY3RCdG5Db21wb25lbnQgZnJvbSBcIi4vYWRkUHJvamVjdFBvcHVwXCI7XG5cbi8qKlxuICogQ3JlYXRlIGEgcGVuZGluZyBwcm9qZWN0cyBjb21wb25lbnQuXG4gKiBAcGFyYW0ge0FycmF5fSBwZW5kaW5nUHJvamVjdHMgQXJyYXkgb2YgcGVuZGluZyBwcm9qZWN0c1xuICogQHJldHVybiB7SFRNTEVsZW1lbnR9IFBlbmRpbmcgcHJvamVjdHMgY29tcG9uZW50XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlbmRlclBlbmRpbmdDb21wb25lbnQocGVuZGluZ1Byb2plY3RzKSB7XG4gIGNvbnN0IHdyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBhZGRQcm9qZWN0QnRuID0gYWRkUHJvamVjdEJ0bkNvbXBvbmVudCgpO1xuICBjb25zdCBwcm9qZWN0TGlzdCA9IHByb2plY3RMaXN0Q29tcG9uZW50KHBlbmRpbmdQcm9qZWN0cyk7XG5cbiAgd3JhcHBlci5jbGFzc0xpc3QuYWRkKFwibWFpbi1hY3RpdmVUYWJcIik7XG5cbiAgd3JhcHBlci5hcHBlbmRDaGlsZChhZGRQcm9qZWN0QnRuKTtcbiAgd3JhcHBlci5hcHBlbmRDaGlsZChwcm9qZWN0TGlzdCk7XG5cbiAgcmV0dXJuIHdyYXBwZXI7XG59XG5cbi8qKlxuICogUmVmcmVzaCB0aGUgcHJvamVjdCBsaXN0IGluIHRoZSBhY3RpdmUgdGFiIGNvbXBvbmVudC5cbiAqIE9ubHkgdXNlIGFmdGVyIGluaXRpYWxpemF0aW9uIG9mIGFjdGl2ZVRhYi5cbiAqIEBwYXJhbSB7QXJyYXl9IHByb2plY3RBcnIgQXJyYXkgb2YgcHJvamVjdHNcbiAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGFjdGl2ZVRhYiBBY3RpdmUgdGFiIGVsZW1lbnRcbiAqIEByZXR1cm4ge3ZvaWR9XG4gKiBAZXhwb3J0XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiByZWZyZXNoUHJvamVjdExpc3QocHJvamVjdEFycikge1xuICBjbGVhclByb2plY3RMaXN0KCk7XG4gIGNvbnN0IGFjdGl2ZVRhYiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWFpbi1hY3RpdmVUYWJcIik7XG4gIGNvbnN0IG5ld1Byb2plY3RMaXN0ID0gcHJvamVjdExpc3RDb21wb25lbnQocHJvamVjdEFycik7XG4gIGFjdGl2ZVRhYi5hcHBlbmRDaGlsZChuZXdQcm9qZWN0TGlzdCk7XG59XG5cbi8qKlxuICogQ2xlYXIgdGhlIHByb2plY3QgbGlzdCBpbiB0aGUgYWN0aXZlIHRhYiBjb21wb25lbnQuXG4gKiBAcmV0dXJuIHt2b2lkfVxuICovXG5mdW5jdGlvbiBjbGVhclByb2plY3RMaXN0KCkge1xuICBjb25zdCBwcm9qZWN0TGlzdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWFpbi1wcm9qZWN0TGlzdFwiKTtcbiAgaWYgKCFwcm9qZWN0TGlzdCkgcmV0dXJuO1xuICBwcm9qZWN0TGlzdC5yZW1vdmUoKTtcbn1cblxuLyoqXG4gKiBSZWZyZXNoIHRoZSB0YXNrIGxpc3QgaW4gdGhlIHByb2plY3QgY29tcG9uZW50LlxuICogQHBhcmFtIHtwcm9qZWN0fSBwcm9qZWN0T2JqIFByb2plY3Qgb2JqZWN0XG4gKiBAcmV0dXJuIHt2b2lkfVxuICogQGV4cG9ydFxuICovXG5leHBvcnQgZnVuY3Rpb24gcmVmcmVzaFRhc2tMaXN0KHByb2plY3RPYmopIHtcbiAgY2xlYXJUYXNrTGlzdChwcm9qZWN0T2JqKTtcbiAgY29uc3QgbmV3VGFza0xpc3QgPSB0YXNrTGlzdENvbXBvbmVudChwcm9qZWN0T2JqKTtcbiAgY29uc3QgcHJvamVjdEVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcbiAgICBcIm1haW4tcHJvamVjdC1cIiArIHByb2plY3RPYmouaWRcbiAgKTtcbiAgcHJvamVjdEVsZW1lbnQuYXBwZW5kQ2hpbGQobmV3VGFza0xpc3QpO1xufVxuXG4vKipcbiAqIENsZWFyIHRoZSB0YXNrIGxpc3QgaW4gdGhlIHByb2plY3QgY29tcG9uZW50LlxuICogQHBhcmFtIHtwcm9qZWN0fSBwcm9qZWN0T2JqIFByb2plY3Qgb2JqZWN0XG4gKiBAcmV0dXJuIHt2b2lkfVxuICovXG5mdW5jdGlvbiBjbGVhclRhc2tMaXN0KHByb2plY3RPYmopIHtcbiAgY29uc3QgdGFza0xpc3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcbiAgICBcIm1haW4tcHJvamVjdC10YXNrTGlzdC1cIiArIHByb2plY3RPYmouaWRcbiAgKTtcbiAgaWYgKCF0YXNrTGlzdCkgcmV0dXJuO1xuICB0YXNrTGlzdC5yZW1vdmUoKTtcbn1cbiIsIi8qKlxuICogQGZpbGVvdmVydmlldyBQcm9qZWN0IGxpc3QgY29tcG9uZW50XG4gKiBAYXV0aG9yIFRoaW5oIE5ndXllblxuICogQHZlcnNpb24gMS4wLjBcbiAqL1xuXG5cInVzZSBzdHJpY3RcIjtcblxuLyogSU1QT1JUUyAqL1xuaW1wb3J0IHsgYWRkVGFzayBhcyBhZGRUYXNrLCBjb21wbGV0ZVByb2plY3QsIGNvbXBsZXRlVGFzayB9IGZyb20gXCIuLi8uLi9pbmRleFwiO1xuaW1wb3J0IGRlbGV0ZUljb24gZnJvbSBcIi4vZGVsZXRlX0ZJTEwwX3dnaHQ0MDBfR1JBRDBfb3BzejQ4LnN2Z1wiO1xuaW1wb3J0IGV4cGFuZEljb25Nb3JlIGZyb20gXCIuL2V4cGFuZF9tb3JlX0ZJTEwwX3dnaHQ0MDBfR1JBRDBfb3BzejQ4LnN2Z1wiO1xuaW1wb3J0IGV4cGFuZEljb25MZXNzIGZyb20gXCIuL2V4cGFuZF9sZXNzX0ZJTEwwX3dnaHQ0MDBfR1JBRDBfb3BzejQ4LnN2Z1wiO1xuaW1wb3J0IHtcbiAgZGVsZXRlVGFzayxcbiAgZGVsZXRlUHJvamVjdCxcbiAgc29ydFRhc2tCeURhdGUsXG4gIHNvcnRBcnJCeVByaW9yaXR5LFxuICBzd2FwUHJvamVjdCxcbn0gZnJvbSBcIi4uLy4uL2luZGV4XCI7XG5pbXBvcnQgeyByZWZyZXNoVGFza0xpc3QgfSBmcm9tIFwiLi4vcGVuZGluZy9wZW5kaW5nXCI7XG5cbi8qIFBST0pFQ1QgTElTVCBDT01QT05FTlQgKi9cbi8qKlxuICogQ3JlYXRlIGEgcHJvamVjdCBsaXN0IGNvbXBvbmVudCB3aXRoIHByb2plY3RzLlxuICogQHBhcmFtIHtBcnJheX0gcHJvamVjdEFyciBBcnJheSBvZiBwcm9qZWN0c1xuICogQHJldHVybiB7SFRNTEVsZW1lbnR9IFByb2plY3QgbGlzdCBlbGVtZW50XG4gKiBAZXhwb3J0XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHByb2plY3RMaXN0KHByb2plY3RBcnIpIHtcbiAgY29uc3QgcHJvamVjdExpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidWxcIik7XG4gIHByb2plY3RMaXN0LmNsYXNzTGlzdC5hZGQoXCJtYWluLXByb2plY3RMaXN0XCIpO1xuICBwcm9qZWN0TGlzdC5pZCA9IFwibWFpbi1wcm9qZWN0TGlzdFwiO1xuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgcHJvamVjdEFyci5sZW5ndGg7IGkrKykge1xuICAgIGNvbnN0IHByb2plY3RDb21wb25lbnQgPSBwcm9qZWN0KGksIHByb2plY3RBcnIpO1xuICAgIHByb2plY3RMaXN0LmFwcGVuZENoaWxkKHByb2plY3RDb21wb25lbnQpO1xuICB9XG5cbiAgcmV0dXJuIHByb2plY3RMaXN0O1xufVxuXG4vKiBQUk9KRUNUIENPTVBPTkVOVCAqL1xuLyoqXG4gKiBDcmVhdGUgYSBwcm9qZWN0IGNvbXBvbmVudC5cbiAqIEBwYXJhbSB7bnVtYmVyfSBpbmRleCBJbmRleCBvZiBwcm9qZWN0IGluIHByb2plY3QgYXJyYXlcbiAqIEBwYXJhbSB7QXJyYXl9IHByb2plY3RBcnIgQXNzb2NpYXRlZCBwcm9qZWN0IG9iamVjdCBhcnJheVxuICogQHJldHVybiB7SFRNTEVsZW1lbnR9IFByb2plY3QgZWxlbWVudFxuICovXG5mdW5jdGlvbiBwcm9qZWN0KGluZGV4LCBwcm9qZWN0QXJyKSB7XG4gIGNvbnN0IHByb2plY3RPYmogPSBwcm9qZWN0QXJyW2luZGV4XTtcbiAgY29uc3QgcHJvamVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgY29uc3QgcHJvamVjdENoZWNrYm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICBjb25zdCBwcm9qZWN0VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDNcIik7XG4gIGNvbnN0IHByb2plY3REZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICBjb25zdCBwcm9qZWN0RXhwYW5kQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgY29uc3QgcHJvamVjdEV4cGFuZEJ0blRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgY29uc3QgcHJvamVjdERlbGV0ZUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIGNvbnN0IHByb2plY3REZWxldGVCdG5UZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gIGNvbnN0IHByb2plY3RFeHBhbmRJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgY29uc3QgcHJvamVjdERlbGV0ZUljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuXG4gIGNvbnN0IHNvcnRUYXNrQ29tcG9uZW50ID0gc29ydENvbXBvbmVudChwcm9qZWN0T2JqKTtcbiAgY29uc3QgYWRkVGFza0J0bkNvbXBvbmVudCA9IGFkZFRhc2tCdG4ocHJvamVjdE9iaik7XG4gIGNvbnN0IHByb2plY3RUYXNrTGlzdCA9IHRhc2tMaXN0KHByb2plY3RPYmopO1xuXG4gIHByb2plY3QuY2xhc3NMaXN0LmFkZChcIm1haW4tcHJvamVjdFwiKTtcbiAgcHJvamVjdENoZWNrYm94LnR5cGUgPSBcImNoZWNrYm94XCI7XG4gIHByb2plY3RDaGVja2JveC5jbGFzc0xpc3QuYWRkKFwibWFpbi1wcm9qZWN0LWNoZWNrYm94XCIpO1xuICBwcm9qZWN0VGl0bGUuY2xhc3NMaXN0LmFkZChcIm1haW4tcHJvamVjdC10aXRsZVwiKTtcbiAgcHJvamVjdERlc2NyaXB0aW9uLmNsYXNzTGlzdC5hZGQoXCJtYWluLXByb2plY3QtZGVzY3JpcHRpb25cIik7XG4gIHByb2plY3RFeHBhbmRCdG4uY2xhc3NMaXN0LmFkZChcIm1haW4tcHJvamVjdC1leHBhbmRCdG5cIik7XG4gIHByb2plY3REZWxldGVCdG4uY2xhc3NMaXN0LmFkZChcIm1haW4tcHJvamVjdC1kZWxldGVCdG5cIik7XG4gIHByb2plY3RFeHBhbmRJY29uLmNsYXNzTGlzdC5hZGQoXCJtYWluLWljb25zXCIpO1xuICBwcm9qZWN0RGVsZXRlSWNvbi5jbGFzc0xpc3QuYWRkKFwibWFpbi1pY29uc1wiKTtcblxuICBpZiAoIXByb2plY3RPYmouY29tcGxldGVkKSB7XG4gICAgcHJvamVjdC5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPVxuICAgICAgXCJsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIFwiICtcbiAgICAgIGdldE9iakNvbG9yKGluZGV4LCBwcm9qZWN0QXJyKSArXG4gICAgICBcIiwgdHJhbnNwYXJlbnQgMTUlKVwiO1xuICB9XG4gIHByb2plY3QuZHJhZ2dhYmxlID0gdHJ1ZTtcbiAgcHJvamVjdC5hZGRFdmVudExpc3RlbmVyKFwiZHJhZ3N0YXJ0XCIsIChlKSA9PiB7XG4gICAgZS5kYXRhVHJhbnNmZXIuc2V0RGF0YShcInRleHQvcGxhaW5cIiwgcHJvamVjdE9iai5wcmlvcml0eSk7XG4gICAgcHJvamVjdC5zdHlsZS5vcGFjaXR5ID0gMC41O1xuICB9KTtcbiAgcHJvamVjdC5hZGRFdmVudExpc3RlbmVyKFwiZHJhZ292ZXJcIiwgKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gIH0pO1xuICBwcm9qZWN0LmFkZEV2ZW50TGlzdGVuZXIoXCJkcm9wXCIsIChlKSA9PiB7XG4gICAgY29uc3QgZHJhZ2dlZFByb2plY3RQcmlvcml0eSA9IGUuZGF0YVRyYW5zZmVyLmdldERhdGEoXCJ0ZXh0L3BsYWluXCIpO1xuICAgIHN3YXBQcm9qZWN0KHByb2plY3RBcnIsIGRyYWdnZWRQcm9qZWN0UHJpb3JpdHksIHByb2plY3RPYmoucHJpb3JpdHkpO1xuICB9KTtcbiAgcHJvamVjdC5hZGRFdmVudExpc3RlbmVyKFwiZHJhZ2VuZFwiLCAoZSkgPT4ge1xuICAgIHByb2plY3Quc3R5bGUub3BhY2l0eSA9IDE7XG4gIH0pO1xuICBwcm9qZWN0LmlkID0gXCJtYWluLXByb2plY3QtXCIgKyBwcm9qZWN0T2JqLmlkO1xuICBwcm9qZWN0LmRhdGFzZXQucHJpb3JpdHkgPSBwcm9qZWN0T2JqLnByaW9yaXR5O1xuICBwcm9qZWN0Q2hlY2tib3guY2hlY2tlZCA9IHByb2plY3RPYmouY29tcGxldGVkO1xuICBpZiAocHJvamVjdE9iai5jb21wbGV0ZWQpIHByb2plY3RDaGVja2JveC5kaXNhYmxlZCA9IHRydWU7XG4gIHByb2plY3RDaGVja2JveC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIGNvbXBsZXRlUHJvamVjdChwcm9qZWN0T2JqKTtcbiAgfSk7XG4gIHByb2plY3RUaXRsZS50ZXh0Q29udGVudCA9IHByb2plY3RPYmoudGl0bGU7XG4gIHByb2plY3RUaXRsZS5zcGVsbGNoZWNrID0gZmFsc2U7XG4gIHByb2plY3REZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9IHByb2plY3RPYmouZGVzY3JpcHRpb247XG4gIHByb2plY3REZXNjcmlwdGlvbi5zcGVsbGNoZWNrID0gZmFsc2U7XG4gIHByb2plY3RFeHBhbmRCdG5UZXh0LnRleHRDb250ZW50ID0gXCJFWFBBTkRcIjtcbiAgcHJvamVjdEV4cGFuZEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIGlmIChwcm9qZWN0RXhwYW5kQnRuVGV4dC50ZXh0Q29udGVudCA9PT0gXCJFWFBBTkRcIikge1xuICAgICAgcHJvamVjdEV4cGFuZEJ0blRleHQudGV4dENvbnRlbnQgPSBcIkNPTExBUFNFXCI7XG4gICAgICBwcm9qZWN0RXhwYW5kSWNvbi5zcmMgPSBleHBhbmRJY29uTGVzcztcbiAgICAgIHByb2plY3REZXNjcmlwdGlvbi5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xuICAgIH0gZWxzZSB7XG4gICAgICBwcm9qZWN0RXhwYW5kQnRuVGV4dC50ZXh0Q29udGVudCA9IFwiRVhQQU5EXCI7XG4gICAgICBwcm9qZWN0RXhwYW5kSWNvbi5zcmMgPSBleHBhbmRJY29uTW9yZTtcbiAgICAgIHByb2plY3REZXNjcmlwdGlvbi5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xuICAgIH1cbiAgfSk7XG4gIHByb2plY3REZWxldGVCdG5UZXh0LnRleHRDb250ZW50ID0gXCJERUxFVEVcIjtcbiAgcHJvamVjdERlbGV0ZUJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIGRlbGV0ZVByb2plY3QoaW5kZXgsIHByb2plY3RBcnIpO1xuICB9KTtcblxuICBwcm9qZWN0RXhwYW5kSWNvbi5zcmMgPSBleHBhbmRJY29uTW9yZTtcbiAgcHJvamVjdERlbGV0ZUljb24uc3JjID0gZGVsZXRlSWNvbjtcblxuICBwcm9qZWN0LmFwcGVuZENoaWxkKHByb2plY3RDaGVja2JveCk7XG4gIHByb2plY3QuYXBwZW5kQ2hpbGQocHJvamVjdFRpdGxlKTtcbiAgcHJvamVjdFRpdGxlLmFwcGVuZENoaWxkKHByb2plY3REZXNjcmlwdGlvbik7XG4gIHByb2plY3QuYXBwZW5kQ2hpbGQocHJvamVjdEV4cGFuZEJ0bik7XG4gIHByb2plY3QuYXBwZW5kQ2hpbGQocHJvamVjdERlbGV0ZUJ0bik7XG4gIHByb2plY3RFeHBhbmRCdG4uYXBwZW5kQ2hpbGQocHJvamVjdEV4cGFuZEJ0blRleHQpO1xuICBwcm9qZWN0RXhwYW5kQnRuLmFwcGVuZENoaWxkKHByb2plY3RFeHBhbmRJY29uKTtcbiAgcHJvamVjdERlbGV0ZUJ0bi5hcHBlbmRDaGlsZChwcm9qZWN0RGVsZXRlQnRuVGV4dCk7XG4gIHByb2plY3REZWxldGVCdG4uYXBwZW5kQ2hpbGQocHJvamVjdERlbGV0ZUljb24pO1xuICBwcm9qZWN0LmFwcGVuZENoaWxkKHNvcnRUYXNrQ29tcG9uZW50KTtcbiAgcHJvamVjdC5hcHBlbmRDaGlsZChhZGRUYXNrQnRuQ29tcG9uZW50KTtcbiAgcHJvamVjdC5hcHBlbmRDaGlsZChwcm9qZWN0VGFza0xpc3QpO1xuXG4gIHJldHVybiBwcm9qZWN0O1xufVxuXG4vKiBUQVNLIExJU1QgQ09NUE9ORU5UICovXG4vKipcbiAqIENyZWF0ZSBhIHRhc2sgbGlzdCBjb21wb25lbnQgYXNzb2NpYXRlZCB3aXRoIGEgcHJvamVjdC5cbiAqIEBwYXJhbSB7cHJvamVjdH0gcHJvamVjdE9iaiBBc3NvY2lhdGVkIHByb2plY3Qgb2JqZWN0XG4gKiBAcmV0dXJuIHtIVE1MRWxlbWVudH0gVGFzayBsaXN0IGVsZW1lbnRcbiAqIEBleHBvcnRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHRhc2tMaXN0KHByb2plY3RPYmopIHtcbiAgY29uc3QgdGFza0xpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidWxcIik7XG4gIGNvbnN0IHRhc2tBcnIgPSBwcm9qZWN0T2JqLnRhc2tzO1xuXG4gIHRhc2tMaXN0LmNsYXNzTGlzdC5hZGQoXCJtYWluLXByb2plY3QtdGFza0xpc3RcIik7XG4gIHRhc2tMaXN0LmlkID0gXCJtYWluLXByb2plY3QtdGFza0xpc3QtXCIgKyBwcm9qZWN0T2JqLmlkO1xuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgdGFza0Fyci5sZW5ndGg7IGkrKykge1xuICAgIGNvbnN0IHRhc2tDb21wb25lbnQgPSB0YXNrKHByb2plY3RPYmosIGkpO1xuICAgIHRhc2tMaXN0LmFwcGVuZENoaWxkKHRhc2tDb21wb25lbnQpO1xuICB9XG5cbiAgcmV0dXJuIHRhc2tMaXN0O1xufVxuXG4vKiBUQVNLIENPTVBPTkVOVCAqL1xuLyoqXG4gKiBDcmVhdGUgYSB0YXNrIGNvbXBvbmVudCBmcm9tIHRoZSBhc3NvY2lhdGVkIHByb2plY3QgYW5kIHRoZSB0YXNrIGluZGV4LlxuICogQHBhcmFtIHtwcm9qZWN0fSBwcm9qZWN0T2JqIFByb2plY3Qgb2JqZWN0XG4gKiBAcGFyYW0ge051bWJlcn0gdGFza0luZGV4IEluZGV4IG9mIHRoZSB0YXNrIGluIHRoZSBwcm9qZWN0XG4gKiBAcmV0dXJuIHtIVE1MRWxlbWVudH0gVGFzayBjb21wb25lbnRcbiAqL1xuZnVuY3Rpb24gdGFzayhwcm9qZWN0T2JqLCB0YXNrSW5kZXgpIHtcbiAgY29uc3QgdGFza0FyciA9IHByb2plY3RPYmoudGFza3M7XG4gIGNvbnN0IHRhc2tPYmogPSB0YXNrQXJyW3Rhc2tJbmRleF07XG4gIGNvbnN0IHRhc2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gIGNvbnN0IHRhc2tDaGVja2JveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgY29uc3QgdGFza1RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImg0XCIpO1xuICBjb25zdCB0YXNrRGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgY29uc3QgdGFza0RhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgY29uc3QgdGFza0V4cGFuZEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIGNvbnN0IHRhc2tFeHBhbmRCdG5UZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gIGNvbnN0IHRhc2tEZWxldGVCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICBjb25zdCB0YXNrRGVsZXRlQnRuVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICBjb25zdCB0YXNrRXhwYW5kSWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gIGNvbnN0IHRhc2tEZWxldGVJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcblxuICB0YXNrLmNsYXNzTGlzdC5hZGQoXCJtYWluLXRhc2tcIik7XG4gIHRhc2tDaGVja2JveC50eXBlID0gXCJjaGVja2JveFwiO1xuICB0YXNrQ2hlY2tib3guY2xhc3NMaXN0LmFkZChcIm1haW4tdGFzay1jaGVja2JveFwiKTtcbiAgdGFza1RpdGxlLmNsYXNzTGlzdC5hZGQoXCJtYWluLXRhc2stdGl0bGVcIik7XG4gIHRhc2tEZXNjcmlwdGlvbi5jbGFzc0xpc3QuYWRkKFwibWFpbi10YXNrLWRlc2NyaXB0aW9uXCIpO1xuICB0YXNrRGF0ZS5jbGFzc0xpc3QuYWRkKFwibWFpbi10YXNrLWRhdGVcIik7XG4gIHRhc2tFeHBhbmRCdG4uY2xhc3NMaXN0LmFkZChcIm1haW4tdGFzay1leHBhbmRCdG5cIik7XG4gIHRhc2tEZWxldGVCdG4uY2xhc3NMaXN0LmFkZChcIm1haW4tdGFzay1kZWxldGVCdG5cIik7XG4gIHRhc2tFeHBhbmRJY29uLmNsYXNzTGlzdC5hZGQoXCJtYWluLWljb25zXCIpO1xuICB0YXNrRGVsZXRlSWNvbi5jbGFzc0xpc3QuYWRkKFwibWFpbi1pY29uc1wiKTtcblxuICBpZiAoIXRhc2tPYmouY29tcGxldGVkKSB7XG4gICAgdGFzay5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPVxuICAgICAgXCJsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIFwiICtcbiAgICAgIGdldE9iakNvbG9yKHRhc2tJbmRleCwgdGFza0FycikgK1xuICAgICAgXCIsIHRyYW5zcGFyZW50IDEwJSlcIjtcbiAgfVxuICB0YXNrLmRhdGFzZXQucHJpb3JpdHkgPSB0YXNrT2JqLnByaW9yaXR5O1xuICB0YXNrVGl0bGUuc3BlbGxjaGVjayA9IGZhbHNlO1xuICB0YXNrRGVzY3JpcHRpb24uc3BlbGxjaGVjayA9IGZhbHNlO1xuICB0YXNrRXhwYW5kQnRuVGV4dC50ZXh0Q29udGVudCA9IFwiRVhQQU5EXCI7XG4gIHRhc2tFeHBhbmRCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBpZiAodGFza0V4cGFuZEJ0blRleHQudGV4dENvbnRlbnQgPT09IFwiRVhQQU5EXCIpIHtcbiAgICAgIHRhc2tFeHBhbmRCdG5UZXh0LnRleHRDb250ZW50ID0gXCJDT0xMQVBTRVwiO1xuICAgICAgdGFza0V4cGFuZEljb24uc3JjID0gZXhwYW5kSWNvbkxlc3M7XG4gICAgICB0YXNrRGVzY3JpcHRpb24uY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGFza0V4cGFuZEJ0blRleHQudGV4dENvbnRlbnQgPSBcIkVYUEFORFwiO1xuICAgICAgdGFza0V4cGFuZEljb24uc3JjID0gZXhwYW5kSWNvbk1vcmU7XG4gICAgICB0YXNrRGVzY3JpcHRpb24uY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcbiAgICB9XG4gIH0pO1xuXG4gIHRhc2tEZWxldGVCdG5UZXh0LnRleHRDb250ZW50ID0gXCJERUxFVEVcIjtcbiAgdGFza0RlbGV0ZUJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIGRlbGV0ZVRhc2socHJvamVjdE9iaiwgdGFza0luZGV4KTtcbiAgfSk7XG5cbiAgdGFza0V4cGFuZEljb24uc3JjID0gZXhwYW5kSWNvbk1vcmU7XG4gIHRhc2tEZWxldGVJY29uLnNyYyA9IGRlbGV0ZUljb247XG5cbiAgdGFza0NoZWNrYm94LmNoZWNrZWQgPSB0YXNrT2JqLmNvbXBsZXRlZCB8fCBwcm9qZWN0T2JqLmNvbXBsZXRlZDtcbiAgaWYgKHByb2plY3RPYmouY29tcGxldGVkKSB0YXNrQ2hlY2tib3guZGlzYWJsZWQgPSB0cnVlO1xuICB0YXNrQ2hlY2tib3guYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBjb21wbGV0ZVRhc2socHJvamVjdE9iaiwgdGFza0luZGV4KTtcbiAgfSk7XG5cbiAgdGFza1RpdGxlLnRleHRDb250ZW50ID0gdGFza09iai50aXRsZTtcbiAgdGFza0Rlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gdGFza09iai5kZXNjcmlwdGlvbjtcbiAgdGFza0RhdGUudGV4dENvbnRlbnQgPSB0YXNrT2JqLmR1ZURhdGU7XG5cbiAgdGFzay5hcHBlbmRDaGlsZCh0YXNrQ2hlY2tib3gpO1xuICB0YXNrLmFwcGVuZENoaWxkKHRhc2tUaXRsZSk7XG4gIHRhc2tUaXRsZS5hcHBlbmRDaGlsZCh0YXNrRGVzY3JpcHRpb24pO1xuICB0YXNrLmFwcGVuZENoaWxkKHRhc2tEYXRlKTtcbiAgdGFzay5hcHBlbmRDaGlsZCh0YXNrRXhwYW5kQnRuKTtcbiAgdGFza0V4cGFuZEJ0bi5hcHBlbmRDaGlsZCh0YXNrRXhwYW5kQnRuVGV4dCk7XG4gIHRhc2tFeHBhbmRCdG4uYXBwZW5kQ2hpbGQodGFza0V4cGFuZEljb24pO1xuICB0YXNrLmFwcGVuZENoaWxkKHRhc2tEZWxldGVCdG4pO1xuICB0YXNrRGVsZXRlQnRuLmFwcGVuZENoaWxkKHRhc2tEZWxldGVCdG5UZXh0KTtcbiAgdGFza0RlbGV0ZUJ0bi5hcHBlbmRDaGlsZCh0YXNrRGVsZXRlSWNvbik7XG5cbiAgcmV0dXJuIHRhc2s7XG59XG5cbi8qKlxuICogQ3JlYXRlIGEgcG9wdXAgY29tcG9uZW50IHRvIGFkZCBhIG5ldyB0YXNrIGFzc29jaWF0ZWQgd2l0aFxuICogdGhlIGlucHV0IHByb2plY3Qgb2JqZWN0LlxuICogQHBhcmFtIHtwcm9qZWN0fSBwcm9qZWN0T2JqIEFzc29jaWF0ZWQgcHJvamVjdCBvYmplY3RcbiAqIEByZXR1cm4ge0hUTUxFbGVtZW50fSBBZGQgdGFzayBlbGVtZW50XG4gKi9cbmZ1bmN0aW9uIGFkZFRhc2tQb3B1cChwcm9qZWN0T2JqKSB7XG4gIGNvbnN0IGFkZFRhc2tGb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZvcm1cIik7XG4gIGNvbnN0IHRhc2tUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgY29uc3QgdGFza0Rlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRleHRhcmVhXCIpO1xuICBjb25zdCB0YXNrRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgY29uc3QgY29uZmlybUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIGNvbnN0IGNhbmNlbEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG5cbiAgYWRkVGFza0Zvcm0uY2xhc3NMaXN0LmFkZChcIm1haW4tYWRkVGFza0Zvcm1cIik7XG4gIGFkZFRhc2tGb3JtLmlkID0gXCJtYWluLWFkZFRhc2tGb3JtLVwiICsgcHJvamVjdE9iai5pZDtcbiAgdGFza1RpdGxlLmNsYXNzTGlzdC5hZGQoXCJtYWluLWFkZFRhc2tGb3JtLXRpdGxlXCIpO1xuICB0YXNrRGVzY3JpcHRpb24uY2xhc3NMaXN0LmFkZChcIm1haW4tYWRkVGFza0Zvcm0tZGVzY3JpcHRpb25cIik7XG4gIHRhc2tEYXRlLmNsYXNzTGlzdC5hZGQoXCJtYWluLWFkZFRhc2tGb3JtLWRhdGVcIik7XG4gIGNvbmZpcm1CdG4uY2xhc3NMaXN0LmFkZChcIm1haW4tYWRkVGFza0Zvcm0tY29uZmlybVwiKTtcbiAgY2FuY2VsQnRuLmNsYXNzTGlzdC5hZGQoXCJtYWluLWFkZFRhc2tGb3JtLWNhbmNlbFwiKTtcblxuICB0YXNrVGl0bGUudHlwZSA9IFwidGV4dFwiO1xuICB0YXNrVGl0bGUucGxhY2Vob2xkZXIgPSBcIlRhc2sgTmFtZVwiO1xuICB0YXNrVGl0bGUubmFtZSA9IFwidGl0bGVcIjtcbiAgdGFza1RpdGxlLnJlcXVpcmVkID0gdHJ1ZTtcbiAgdGFza0Rlc2NyaXB0aW9uLnBsYWNlaG9sZGVyID0gXCJUYXNrIERlc2NyaXB0aW9uXCI7XG4gIHRhc2tEZXNjcmlwdGlvbi5uYW1lID0gXCJkZXNjcmlwdGlvblwiO1xuICB0YXNrRGF0ZS50eXBlID0gXCJkYXRlXCI7XG4gIHRhc2tEYXRlLm5hbWUgPSBcImR1ZURhdGVcIjtcbiAgY29uZmlybUJ0bi50eXBlID0gXCJzdWJtaXRcIjtcbiAgY29uZmlybUJ0bi50ZXh0Q29udGVudCA9IFwiQ29uZmlybVwiO1xuICBjYW5jZWxCdG4udHlwZSA9IFwiYnV0dG9uXCI7XG4gIGNhbmNlbEJ0bi50ZXh0Q29udGVudCA9IFwiQ2FuY2VsXCI7XG5cbiAgYWRkVGFza0Zvcm0ub25zdWJtaXQgPSAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBhZGRUYXNrKHByb2plY3RPYmopO1xuICAgIGFkZFRhc2tGb3JtLnJlbW92ZSgpO1xuICB9O1xuICBjYW5jZWxCdG4ub25jbGljayA9ICgpID0+IHtcbiAgICBhZGRUYXNrRm9ybS5yZW1vdmUoKTtcbiAgfTtcblxuICBhZGRUYXNrRm9ybS5hcHBlbmRDaGlsZCh0YXNrVGl0bGUpO1xuICBhZGRUYXNrRm9ybS5hcHBlbmRDaGlsZCh0YXNrRGVzY3JpcHRpb24pO1xuICBhZGRUYXNrRm9ybS5hcHBlbmRDaGlsZCh0YXNrRGF0ZSk7XG4gIGFkZFRhc2tGb3JtLmFwcGVuZENoaWxkKGNvbmZpcm1CdG4pO1xuICBhZGRUYXNrRm9ybS5hcHBlbmRDaGlsZChjYW5jZWxCdG4pO1xuXG4gIHJldHVybiBhZGRUYXNrRm9ybTtcbn1cblxuLyoqXG4gKiBDcmVhdGUgYW4gYWRkIHRhc2sgYnV0dG9uIGNvbXBvbmVudCBhc3NvY2lhdGVkIHdpdGggYSBwcm9qZWN0LlxuICogQHBhcmFtIHtBcnJheX0gcHJvamVjdE9iaiBBc3NvY2lhdGVkIHByb2plY3Qgb2JqZWN0XG4gKiBAcmV0dXJuIHtIVE1MRWxlbWVudH0gQWRkIHRhc2sgYnV0dG9uXG4gKi9cbmZ1bmN0aW9uIGFkZFRhc2tCdG4ocHJvamVjdE9iaikge1xuICBjb25zdCBhZGRUYXNrQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcblxuICBhZGRUYXNrQnRuLmNsYXNzTGlzdC5hZGQoXCJtYWluLWFkZFRhc2tCdG5cIik7XG4gIGFkZFRhc2tCdG4udGV4dENvbnRlbnQgPSBcIkFkZCBUYXNrICtcIjtcbiAgaWYgKHByb2plY3RPYmouY29tcGxldGVkKSBhZGRUYXNrQnRuLmRpc2FibGVkID0gdHJ1ZTtcblxuICBhZGRUYXNrQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgaWYgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWFpbi1hZGRUYXNrRm9ybS1cIiArIHByb2plY3RPYmouaWQpKSByZXR1cm47XG4gICAgY29uc3QgdGFza0xpc3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcbiAgICAgIFwibWFpbi1wcm9qZWN0LXRhc2tMaXN0LVwiICsgcHJvamVjdE9iai5pZFxuICAgICk7XG4gICAgdGFza0xpc3QuYXBwZW5kQ2hpbGQoYWRkVGFza1BvcHVwKHByb2plY3RPYmopKTtcbiAgfSk7XG5cbiAgcmV0dXJuIGFkZFRhc2tCdG47XG59XG5cbi8qIFNPUlQgVEFTSyBDT01QT05FTlQgKi9cbi8qKlxuICogQ3JlYXRlIGEgc29ydCB0YXNrIGNvbXBvbmVudCBhc3NvY2lhdGVkIHdpdGggYSBwcm9qZWN0LlxuICogQHBhcmFtIHtwcm9qZWN0fSBwcm9qZWN0T2JqIEFzc29jaWF0ZWQgcHJvamVjdCBvYmplY3RcbiAqIEByZXR1cm4ge0hUTUxFbGVtZW50fSBTb3J0IHRhc2sgY29tcG9uZW50XG4gKi9cbmZ1bmN0aW9uIHNvcnRDb21wb25lbnQocHJvamVjdE9iaikge1xuICBjb25zdCBzb3J0VGFza1dyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBzb3J0VGFza0J5UHJpb3JpdHlMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgY29uc3Qgc29ydFRhc2tCeVByaW9yaXR5QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICBjb25zdCBzb3J0VGFza0J5RGF0ZUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICBjb25zdCBzb3J0VGFza0J5RGF0ZUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcblxuICBzb3J0VGFza1dyYXBwZXIuY2xhc3NMaXN0LmFkZChcIm1haW4tcHJvamVjdC1zb3J0VGFza1dyYXBwZXJcIik7XG4gIHNvcnRUYXNrQnlQcmlvcml0eUxhYmVsLmNsYXNzTGlzdC5hZGQoXCJtYWluLXByb2plY3Qtc29ydExhYmVsXCIpO1xuICBzb3J0VGFza0J5UHJpb3JpdHlCdG4uY2xhc3NMaXN0LmFkZChcIm1haW4tcHJvamVjdC1zb3J0QnRuXCIpO1xuICBzb3J0VGFza0J5RGF0ZUxhYmVsLmNsYXNzTGlzdC5hZGQoXCJtYWluLXByb2plY3Qtc29ydExhYmVsXCIpO1xuICBzb3J0VGFza0J5RGF0ZUJ0bi5jbGFzc0xpc3QuYWRkKFwibWFpbi1wcm9qZWN0LXNvcnRCdG5cIik7XG5cbiAgc29ydFRhc2tCeVByaW9yaXR5TGFiZWwudGV4dENvbnRlbnQgPSBcIlNvcnQgYnkgcHJpb3JpdHlcIjtcbiAgc29ydFRhc2tCeVByaW9yaXR5TGFiZWwuaHRtbEZvciA9IFwic29ydFByaW9yaXR5LVwiICsgcHJvamVjdE9iai5pZDtcbiAgc29ydFRhc2tCeURhdGVMYWJlbC50ZXh0Q29udGVudCA9IFwiU29ydCBieSBkYXRlXCI7XG4gIHNvcnRUYXNrQnlEYXRlTGFiZWwuaHRtbEZvciA9IFwic29ydERhdGUtXCIgKyBwcm9qZWN0T2JqLmlkO1xuXG4gIHNvcnRUYXNrQnlQcmlvcml0eUJ0bi50eXBlID0gXCJyYWRpb1wiO1xuICBzb3J0VGFza0J5UHJpb3JpdHlCdG4ubmFtZSA9IFwic29ydFRhc2stXCIgKyBwcm9qZWN0T2JqLmlkO1xuICBzb3J0VGFza0J5UHJpb3JpdHlCdG4uaWQgPSBcInNvcnRQcmlvcml0eS1cIiArIHByb2plY3RPYmouaWQ7XG4gIHNvcnRUYXNrQnlQcmlvcml0eUJ0bi52YWx1ZSA9IFwicHJpb3JpdHlcIjtcbiAgc29ydFRhc2tCeVByaW9yaXR5QnRuLmNoZWNrZWQgPSB0cnVlO1xuXG4gIHNvcnRUYXNrQnlEYXRlQnRuLnR5cGUgPSBcInJhZGlvXCI7XG4gIHNvcnRUYXNrQnlEYXRlQnRuLm5hbWUgPSBcInNvcnRUYXNrLVwiICsgcHJvamVjdE9iai5pZDtcbiAgc29ydFRhc2tCeURhdGVCdG4uaWQgPSBcInNvcnREYXRlLVwiICsgcHJvamVjdE9iai5pZDtcbiAgc29ydFRhc2tCeURhdGVCdG4udmFsdWUgPSBcImRhdGVcIjtcblxuICBzb3J0VGFza0J5UHJpb3JpdHlCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBzb3J0QXJyQnlQcmlvcml0eShwcm9qZWN0T2JqLnRhc2tzKTtcbiAgICByZWZyZXNoVGFza0xpc3QocHJvamVjdE9iaik7XG4gIH0pO1xuXG4gIHNvcnRUYXNrQnlEYXRlQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgc29ydFRhc2tCeURhdGUocHJvamVjdE9iai50YXNrcyk7XG4gICAgcmVmcmVzaFRhc2tMaXN0KHByb2plY3RPYmopO1xuICB9KTtcblxuICBzb3J0VGFza1dyYXBwZXIuYXBwZW5kQ2hpbGQoc29ydFRhc2tCeVByaW9yaXR5QnRuKTtcbiAgc29ydFRhc2tXcmFwcGVyLmFwcGVuZENoaWxkKHNvcnRUYXNrQnlQcmlvcml0eUxhYmVsKTtcbiAgc29ydFRhc2tXcmFwcGVyLmFwcGVuZENoaWxkKHNvcnRUYXNrQnlEYXRlQnRuKTtcbiAgc29ydFRhc2tXcmFwcGVyLmFwcGVuZENoaWxkKHNvcnRUYXNrQnlEYXRlTGFiZWwpO1xuXG4gIHJldHVybiBzb3J0VGFza1dyYXBwZXI7XG59XG5cbi8qKlxuICogR2V0IHRoZSBjb2xvciBvZiBhIHByb2plY3Qgb3IgdGFzayBvYmplY3QgYmFzZWQgb24gaXRzIHByaW9yaXR5LlxuICogQHBhcmFtIHtOdW1iZXJ9IGluZGV4IEluZGV4IG9mIG9iamVjdCBpbiBhcnJheVxuICogQHBhcmFtIHtBcnJheX0gb2JqQXJyIFByb2plY3Qgb3IgdGFzayBhcnJheVxuICogQHJldHVybiB7U3RyaW5nfSBDb2xvciBzdHJpbmdcbiAqL1xuZnVuY3Rpb24gZ2V0T2JqQ29sb3IoaW5kZXgsIG9iakFycikge1xuICBjb25zdCBvYmogPSBvYmpBcnJbaW5kZXhdO1xuICBjb25zdCBvYmpQcmlvcml0eSA9IG9iai5wcmlvcml0eTtcbiAgY29uc3Qgbm9ybWFsaXplZFByaW9yaXR5ID0gb2JqUHJpb3JpdHkgLyAob2JqQXJyLmxlbmd0aCAtIDEpO1xuICBjb25zdCByZWQgPSBNYXRoLnJvdW5kKDI1NSAqICgxIC0gbm9ybWFsaXplZFByaW9yaXR5KSk7XG4gIGNvbnN0IGdyZWVuID0gTWF0aC5yb3VuZCgyNTUgKiBub3JtYWxpemVkUHJpb3JpdHkpO1xuICByZXR1cm4gXCJyZ2IoXCIgKyByZWQgKyBcIixcIiArIGdyZWVuICsgXCIsMClcIjtcbn1cblxuXG5cbiIsIi8qKlxuICogQGZpbGVvdmVydmlldyBUb2RvIGxpc3QgYXBwXG4gKiBAYXV0aG9yIFRoaW5oIE5ndXllblxuICogQHZlcnNpb24gMS4wLjBcbiAqL1xuXG5cInVzZSBzdHJpY3RcIjtcblxuLyogSU1QT1JUUyAqL1xuaW1wb3J0IHBhZ2VMb2FkIGZyb20gXCIuL2NvbXBvbmVudHMvcGFnZUxvYWRcIjtcbmltcG9ydCByZW5kZXJQZW5kaW5nQ29tcG9uZW50LCB7XG4gIHJlZnJlc2hQcm9qZWN0TGlzdCxcbiAgcmVmcmVzaFRhc2tMaXN0LFxufSBmcm9tIFwiLi9jb21wb25lbnRzL3BlbmRpbmcvcGVuZGluZ1wiO1xuaW1wb3J0IHJlbmRlckFyY2hpdmVDb21wb25lbnQgZnJvbSBcIi4vY29tcG9uZW50cy9hcmNoaXZlL2FyY2hpdmVcIjtcbmltcG9ydCBcIi4vc3R5bGVzL3N0eWxlcy5jc3NcIjtcbmltcG9ydCBcIi4vc3R5bGVzL3N0eWxlcy1yZXNldC5jc3NcIjtcbmltcG9ydCBmYXZpY29uTGluayBmcm9tIFwiLi9hc3NldHMvZmF2aWNvbi5wbmdcIjtcblxuLyogTE9DQUwgU1RPUkFHRSAqL1xuLyoqXG4gKiBHZXQgdGhlIHBlbmRpbmcgcHJvamVjdHMgZnJvbSBsb2NhbFN0b3JhZ2UuXG4gKiBAcmV0dXJuIHtBcnJheX0gQXJyYXkgb2YgcHJvamVjdCBvYmplY3RzXG4gKi9cbmZ1bmN0aW9uIGdldFBlbmRpbmdQcm9qZWN0cygpIHtcbiAgbGV0IHBlbmRpbmdQcm9qZWN0cyA9IFtdO1xuICBpZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJwZW5kaW5nUHJvamVjdHNcIikpIHtcbiAgICBwZW5kaW5nUHJvamVjdHMgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwicGVuZGluZ1Byb2plY3RzXCIpKTtcbiAgfVxuICByZXR1cm4gcGVuZGluZ1Byb2plY3RzO1xufVxuXG4vKipcbiAqIEdldCB0aGUgY29tcGxldGVkIHByb2plY3RzIGZyb20gbG9jYWxTdG9yYWdlLlxuICogQHJldHVybiB7QXJyYXl9IEFycmF5IG9mIHByb2plY3Qgb2JqZWN0c1xuICovXG5mdW5jdGlvbiBnZXRDb21wbGV0ZWRQcm9qZWN0cygpIHtcbiAgbGV0IGNvbXBsZXRlZFByb2plY3RzID0gW107XG4gIGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImNvbXBsZXRlZFByb2plY3RzXCIpKSB7XG4gICAgY29tcGxldGVkUHJvamVjdHMgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiY29tcGxldGVkUHJvamVjdHNcIikpO1xuICB9XG4gIHJldHVybiBjb21wbGV0ZWRQcm9qZWN0cztcbn1cblxuLyoqXG4gKiBTYXZlIHRoZSBwZW5kaW5nIHByb2plY3RzIHRvIGxvY2FsU3RvcmFnZS5cbiAqIEBwYXJhbSB7QXJyYXl9IHBlbmRpbmdQcm9qZWN0cyBBcnJheSBvZiBwcm9qZWN0IG9iamVjdHNcbiAqIEByZXR1cm4ge3ZvaWR9XG4gKi9cbmZ1bmN0aW9uIHNhdmVQZW5kaW5nUHJvamVjdHMocGVuZGluZ1Byb2plY3RzKSB7XG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwicGVuZGluZ1Byb2plY3RzXCIsIEpTT04uc3RyaW5naWZ5KHBlbmRpbmdQcm9qZWN0cykpO1xufVxuXG4vKipcbiAqIFNhdmUgdGhlIGNvbXBsZXRlZCBwcm9qZWN0cyB0byBsb2NhbFN0b3JhZ2UuXG4gKiBAcGFyYW0ge0FycmF5fSBjb21wbGV0ZWRQcm9qZWN0cyBBcnJheSBvZiBwcm9qZWN0IG9iamVjdHNcbiAqIEByZXR1cm4ge3ZvaWR9XG4gKi9cbmZ1bmN0aW9uIHNhdmVDb21wbGV0ZWRQcm9qZWN0cyhjb21wbGV0ZWRQcm9qZWN0cykge1xuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImNvbXBsZXRlZFByb2plY3RzXCIsIEpTT04uc3RyaW5naWZ5KGNvbXBsZXRlZFByb2plY3RzKSk7XG59XG5cbi8qKlxuICogU2F2ZSBwZW5kaW5nIHByb2plY3RzIGFuZCBjb21wbGV0ZWQgcHJvamVjdHMgdG8gbG9jYWxTdG9yYWdlIHdoZW4gdGhlIHBhZ2UgaXMgY2xvc2VkLlxuICogQHJldHVybiB7dm9pZH1cbiAqL1xuZnVuY3Rpb24gc2F2ZVByb2plY3RzKCkge1xuICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImJlZm9yZXVubG9hZFwiLCAoKSA9PiB7XG4gICAgc2F2ZVBlbmRpbmdQcm9qZWN0cyhwZW5kaW5nUHJvamVjdHMpO1xuICAgIHNhdmVDb21wbGV0ZWRQcm9qZWN0cyhjb21wbGV0ZWRQcm9qZWN0cyk7XG4gIH0pO1xufVxuXG4vKiBEQVRBIFNUUlVDVFVSRVMgKi9cbi8qKlxuICogQ3JlYXRlIGEgcHJvamVjdCBvYmplY3QuXG4gKiBAcGFyYW0ge1N0cmluZ30gdGl0bGUgVGl0bGUgb2YgdGhlIHByb2plY3RcbiAqIEBwYXJhbSB7U3RyaW5nfSBkZXNjcmlwdGlvbiBEZXNjcmlwdGlvbiBvZiB0aGUgcHJvamVjdFxuICogQHBhcmFtIHtOdW1iZXJ9IHByaW9yaXR5IFByaW9yaXR5IG9mIHRoZSBwcm9qZWN0XG4gKiBAcGFyYW0ge0FycmF5fSB0YXNrcyBBcnJheSBvZiB0YXNrc1xuICogQHBhcmFtIHtOdW1iZXJ9IGlkIElkIG9mIHRoZSBwcm9qZWN0XG4gKiBAcGFyYW0ge0Jvb2xlYW59IGNvbXBsZXRlZCBTdGF0dXMgb2YgdGhlIHByb2plY3RcbiAqIEByZXR1cm4ge09iamVjdH0gUHJvamVjdCBvYmplY3RcbiAqL1xuY29uc3QgcHJvamVjdCA9ICh0aXRsZSwgZGVzY3JpcHRpb24sIHByaW9yaXR5LCB0YXNrcywgaWQsIGNvbXBsZXRlZCkgPT4ge1xuICByZXR1cm4geyB0aXRsZSwgZGVzY3JpcHRpb24sIHByaW9yaXR5LCB0YXNrcywgaWQsIGNvbXBsZXRlZCB9O1xufTtcblxuLyoqXG4gKiBDcmVhdGUgYSB0YXNrIG9iamVjdC5cbiAqIEBwYXJhbSB7U3RyaW5nfSB0aXRsZSBUaXRsZSBvZiB0aGUgdGFza1xuICogQHBhcmFtIHtTdHJpbmd9IGRlc2NyaXB0aW9uIERlc2NyaXB0aW9uIG9mIHRoZSB0YXNrXG4gKiBAcGFyYW0ge051bWJlcn0gcHJpb3JpdHkgUHJpb3JpdHkgb2YgdGhlIHRhc2tcbiAqIEBwYXJhbSB7U3RyaW5nfSBwcm9qZWN0IFByb2plY3Qgb2YgdGhlIHRhc2tcbiAqIEBwYXJhbSB7RGF0ZX0gZHVlRGF0ZSBEdWUgZGF0ZSBvZiB0aGUgdGFza1xuICogQHBhcmFtIHtCb29sZWFufSBjb21wbGV0ZWQgU3RhdHVzIG9mIHRoZSB0YXNrXG4gKiBAcmV0dXJuIHtPYmplY3R9IFRhc2sgb2JqZWN0XG4gKi9cbmNvbnN0IHRhc2sgPSAoXG4gIHRpdGxlLFxuICBkZXNjcmlwdGlvbixcbiAgcHJpb3JpdHksXG4gIHByb2plY3QsXG4gIGR1ZURhdGUsXG4gIGNvbXBsZXRlZFxuKSA9PiB7XG4gIHJldHVybiB7XG4gICAgdGl0bGUsXG4gICAgZGVzY3JpcHRpb24sXG4gICAgcHJpb3JpdHksXG4gICAgcHJvamVjdCxcbiAgICBkdWVEYXRlLFxuICAgIGNvbXBsZXRlZCxcbiAgfTtcbn07XG5cbmNvbnN0IHBlbmRpbmdQcm9qZWN0cyA9IGdldFBlbmRpbmdQcm9qZWN0cygpO1xuXG5jb25zdCBjb21wbGV0ZWRQcm9qZWN0cyA9IGdldENvbXBsZXRlZFByb2plY3RzKCk7XG5cbi8qIERBVEEgTUFOSVBVTEFUSU9OICovXG4vKipcbiAqIEdldCBwcm9qZWN0IGRhdGEgZnJvbSB1c2VyLWlucHV0IGZvcm0uXG4gKiBAcmV0dXJuIHt2b2lkfVxuICovXG5mdW5jdGlvbiBnZXRQcm9qZWN0RnJvbUlucHV0KCkge1xuICBjb25zdCBmb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtYWluLWFkZFByb2plY3RGb3JtXCIpO1xuICBjb25zdCB0aXRsZSA9IGZvcm0uZWxlbWVudHNbXCJ0aXRsZVwiXS52YWx1ZTtcbiAgY29uc3QgZGVzY3JpcHRpb24gPSBmb3JtLmVsZW1lbnRzW1wiZGVzY3JpcHRpb25cIl0udmFsdWU7XG4gIGNvbnN0IHByaW9yaXR5ID0gcGVuZGluZ1Byb2plY3RzLmxlbmd0aDtcbiAgY29uc3QgdGFza3MgPSBbXTtcbiAgY29uc3QgaWQgPSBEYXRlLm5vdygpO1xuICBjb25zdCBjb21wbGV0ZWQgPSBmYWxzZTtcbiAgcmV0dXJuIHByb2plY3QodGl0bGUsIGRlc2NyaXB0aW9uLCBwcmlvcml0eSwgdGFza3MsIGlkLCBjb21wbGV0ZWQpO1xufVxuXG4vKipcbiAqIEFkZCBhIG5ldyBwcm9qZWN0IHRvIHRoZSBwZW5kaW5nIHByb2plY3QgbGlzdCBhbmQgcmVmcmVzaCB0aGUgcHJvamVjdCBsaXN0LlxuICogQXNzdW1lIGluIHBlbmRpbmcgdGFiLlxuICogQHJldHVybiB7dm9pZH1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGFkZFByb2plY3QoKSB7XG4gIGNvbnN0IG5ld1Byb2plY3QgPSBnZXRQcm9qZWN0RnJvbUlucHV0KCk7XG4gIHBlbmRpbmdQcm9qZWN0cy5wdXNoKG5ld1Byb2plY3QpO1xuICByZWZyZXNoUHJvamVjdExpc3QocGVuZGluZ1Byb2plY3RzKTtcbn1cblxuLyoqXG4gKiBEZWxldGUgdGhlIHVuZGVybHlpbmcgcHJvamVjdCBvYmplY3QgYXQgcHJvamVjdEluZGV4IGFuZCByZWZyZXNoIHRoZSBwcm9qZWN0IGxpc3QuXG4gKiBDb250ZXh0LXNlbnNpdGl2ZTogaWYgaW4gcGVuZGluZyB0YWIsIGRlbGV0ZSBmcm9tIHBlbmRpbmdQcm9qZWN0czsgaWYgaW4gYXJjaGl2ZSB0YWIsIGRlbGV0ZSBmcm9tIGNvbXBsZXRlZFByb2plY3RzLlxuICogQHBhcmFtIHtOdW1iZXJ9IHByb2plY3RJbmRleCBJbmRleCBvZiB0aGUgcHJvamVjdCB0byBiZSBkZWxldGVkXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBkZWxldGVQcm9qZWN0KHByb2plY3RJbmRleCkge1xuICBjb25zdCBkaXNwbGF5TW9kZSA9IGdldERpc3BsYXlNb2RlKCk7XG4gIGxldCB3b3JrQXJyID0gW107XG4gIGlmIChkaXNwbGF5TW9kZSA9PT0gXCJwZW5kaW5nXCIpIHtcbiAgICB3b3JrQXJyID0gcGVuZGluZ1Byb2plY3RzO1xuICB9IGVsc2UgaWYgKGRpc3BsYXlNb2RlID09PSBcImFyY2hpdmVcIikge1xuICAgIHdvcmtBcnIgPSBjb21wbGV0ZWRQcm9qZWN0cztcbiAgfVxuICB3b3JrQXJyLnNwbGljZShwcm9qZWN0SW5kZXgsIDEpO1xuICByZXNldFByaW9yaXR5KHdvcmtBcnIpO1xuICByZWZyZXNoUHJvamVjdExpc3Qod29ya0Fycik7XG59XG5cbi8qKlxuICogUmVtb3ZlIHRoZSBwcm9qZWN0IGZyb20gdGhlIHBlbmRpbmcgcHJvamVjdHMgYXJyYXkgYW5kIGFkZCBpdCB0byB0aGVcbiAqIGNvbXBsZXRlZCBwcm9qZWN0cyBhcnJheS4gVXBkYXRlIHRoZSBwcmlvcml0eSBvZiB0aGUgcHJvamVjdHMgaW4gdGhlXG4gKiBib3RoIHByb2plY3RzIGFycmF5LiBSZWZyZXNoIHRoZSBwcm9qZWN0IGxpc3QgaW4gdGhlIHBlbmRpbmcgdGFiIGNvbXBvbmVudC5cbiAqIENvbnRleHQtc2Vuc2l0aXZlOiBvbmx5IHdvcmtzIHdoZW4gdGhlIGRpc3BsYXkgbW9kZSBpcyBcInBlbmRpbmdcIi5cbiAqIEBwYXJhbSB7cHJvamVjdH0gcHJvamVjdE9iaiBQcm9qZWN0IG9iamVjdFxuICogQHJldHVybiB7dm9pZH1cbiAqIEBleHBvcnRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNvbXBsZXRlUHJvamVjdChwcm9qZWN0T2JqKSB7XG4gIGlmIChnZXREaXNwbGF5TW9kZSgpICE9PSBcInBlbmRpbmdcIikgcmV0dXJuO1xuICBjb25zdCBwcm9qZWN0SW5kZXggPSBwZW5kaW5nUHJvamVjdHMuZmluZEluZGV4KFxuICAgIChwcm9qZWN0KSA9PiBwcm9qZWN0LmlkID09PSBwcm9qZWN0T2JqLmlkXG4gICk7XG4gIGlmIChwcm9qZWN0SW5kZXggPT09IC0xKSByZXR1cm47XG4gIHBlbmRpbmdQcm9qZWN0cy5zcGxpY2UocHJvamVjdEluZGV4LCAxKTtcbiAgcHJvamVjdE9iai5jb21wbGV0ZWQgPSB0cnVlO1xuICBwcm9qZWN0T2JqLnRhc2tzLmZvckVhY2goKHRhc2spID0+ICh0YXNrLmNvbXBsZXRlZCA9IHRydWUpKTtcbiAgY29tcGxldGVkUHJvamVjdHMucHVzaChwcm9qZWN0T2JqKTtcbiAgcmVzZXRQcmlvcml0eShwZW5kaW5nUHJvamVjdHMpO1xuICByZXNldFByaW9yaXR5KGNvbXBsZXRlZFByb2plY3RzKTtcbiAgcmVmcmVzaFByb2plY3RMaXN0KHBlbmRpbmdQcm9qZWN0cyk7XG59XG5cbi8qKlxuICogU3dhcCB0aGUgcG9zaXRpb24gb2YgdHdvIHByb2plY3RzIGluIHRoZSBpbnB1dCBhcnJheS4gVXBkYXRlIHRoZSBwcmlvcml0eVxuICogb2YgdGhlIHByb2plY3RzIGluIHRoZSBhcnJheS4gUmVmcmVzaCB0aGUgcHJvamVjdCBsaXN0IGluIHRoZSBhY3RpdmUgdGFiIGNvbXBvbmVudC5cbiAqIEJlY2F1c2Ugb2YgdGhlIHByb2plY3QncyBpbXBsZW1lbnRhdGlvbiwgcHJpb3JpdHkgaXMgdGhlIGluZGV4IG9mIHRoZSBwcm9qZWN0LlxuICogQHBhcmFtIHtBcnJheX0gcHJvamVjdEFyciBBcnJheSBvZiBwcm9qZWN0cy5cbiAqIEBwYXJhbSB7TnVtYmVyfSBwcmlvcml0eTEgSW5kZXggb2YgdGhlIGZpcnN0IHByb2plY3RcbiAqIEBwYXJhbSB7TnVtYmVyfSBwcmlvcml0eTIgSW5kZXggb2YgdGhlIHNlY29uZCBwcm9qZWN0XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzd2FwUHJvamVjdChwcm9qZWN0QXJyLCBwcmlvcml0eTEsIHByaW9yaXR5Mikge1xuICBjb25zdCB0ZW1wID0gcHJvamVjdEFycltwcmlvcml0eTFdO1xuICBwcm9qZWN0QXJyW3ByaW9yaXR5MV0gPSBwcm9qZWN0QXJyW3ByaW9yaXR5Ml07XG4gIHByb2plY3RBcnJbcHJpb3JpdHkyXSA9IHRlbXA7XG4gIHJlc2V0UHJpb3JpdHkocHJvamVjdEFycik7XG4gIHJlZnJlc2hQcm9qZWN0TGlzdChwcm9qZWN0QXJyKTtcbn1cblxuLyoqXG4gKiBHZXQgdGFzayBkYXRhIGZyb20gdXNlci1pbnB1dCBmb3JtLlxuICogQHBhcmFtIHtwcm9qZWN0fSBwcm9qZWN0T2JqIEFzc29jaWF0ZWQgcHJvamVjdCBvYmplY3RcbiAqIEByZXR1cm4ge3Rhc2t9IFRhc2sgb2JqZWN0XG4gKi9cbmZ1bmN0aW9uIGdldFRhc2tGcm9tSW5wdXQocHJvamVjdE9iaikge1xuICBjb25zdCBmb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtYWluLWFkZFRhc2tGb3JtLVwiICsgcHJvamVjdE9iai5pZCk7XG4gIGNvbnN0IHRpdGxlID0gZm9ybS5lbGVtZW50c1tcInRpdGxlXCJdLnZhbHVlO1xuICBjb25zdCBkZXNjcmlwdGlvbiA9IGZvcm0uZWxlbWVudHNbXCJkZXNjcmlwdGlvblwiXS52YWx1ZTtcbiAgY29uc3QgcHJpb3JpdHkgPSBwcm9qZWN0T2JqLnRhc2tzLmxlbmd0aDtcbiAgY29uc3QgaWQgPSBEYXRlLm5vdygpO1xuICBjb25zdCBkdWVEYXRlID0gZm9ybS5lbGVtZW50c1tcImR1ZURhdGVcIl0udmFsdWU7XG4gIGNvbnN0IGNvbXBsZXRlZCA9IGZhbHNlO1xuICByZXR1cm4gdGFzayh0aXRsZSwgZGVzY3JpcHRpb24sIHByaW9yaXR5LCBpZCwgZHVlRGF0ZSwgY29tcGxldGVkKTtcbn1cblxuLyoqXG4gKiBBZGQgYSBuZXcgdGFzayB0byB0aGUgcHJvamVjdCBvYmplY3QgYW5kIHJlZnJlc2ggdGhlIHRhc2sgbGlzdCBpbiB0aGUgcHJvamVjdCBjb21wb25lbnQuXG4gKiBAcGFyYW0ge3Byb2plY3R9IHByb2plY3RPYmogQXNzb2NpYXRlZCBwcm9qZWN0IG9iamVjdFxuICogQHJldHVybiB7dm9pZH1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGFkZFRhc2socHJvamVjdE9iaikge1xuICBjb25zdCBuZXdUYXNrID0gZ2V0VGFza0Zyb21JbnB1dChwcm9qZWN0T2JqKTtcbiAgcHJvamVjdE9iai50YXNrcy5wdXNoKG5ld1Rhc2spO1xuICBpZiAoZ2V0U29ydE1vZGUocHJvamVjdE9iaikgPT09IFwiZGF0ZVwiKSB7XG4gICAgc29ydFRhc2tCeURhdGUocHJvamVjdE9iai50YXNrcyk7XG4gIH1cbiAgcmVmcmVzaFRhc2tMaXN0KHByb2plY3RPYmopO1xufVxuXG4vKipcbiAqIERlbGV0ZSB0aGUgdW5kZXJseWluZyB0YXNrIG9iamVjdCBhdCB0YXNrSW5kZXggZnJvbSB0aGUgcHJvamVjdCBvYmplY3QgYW5kIHJlZnJlc2ggdGhlIHRhc2sgbGlzdCBpbiB0aGUgcHJvamVjdCBjb21wb25lbnQuXG4gKiBAcGFyYW0ge3Byb2plY3R9IHByb2plY3RPYmogUHJvamVjdCBvYmplY3RcbiAqIEBwYXJhbSB7TnVtYmVyfSB0YXNrSW5kZXggSW5kZXggb2YgdGhlIHRhc2sgdG8gYmUgZGVsZXRlZFxuICovXG5leHBvcnQgZnVuY3Rpb24gZGVsZXRlVGFzayhwcm9qZWN0T2JqLCB0YXNrSW5kZXgpIHtcbiAgY29uc3QgdGFza0FyciA9IHByb2plY3RPYmoudGFza3M7XG4gIHRhc2tBcnIuc3BsaWNlKHRhc2tJbmRleCwgMSk7XG4gIGlmIChnZXRTb3J0TW9kZShwcm9qZWN0T2JqKSA9PT0gXCJwcmlvcml0eVwiKSB7XG4gICAgcmVzZXRQcmlvcml0eSh0YXNrQXJyKTtcbiAgfSBlbHNlIHtcbiAgICBzb3J0QXJyQnlQcmlvcml0eSh0YXNrQXJyKTtcbiAgICByZXNldFByaW9yaXR5KHRhc2tBcnIpO1xuICAgIHNvcnRUYXNrQnlEYXRlKHRhc2tBcnIpO1xuICB9XG4gIHJlZnJlc2hUYXNrTGlzdChwcm9qZWN0T2JqKTtcbn1cblxuLyoqXG4gKiBDaGFuZ2UgdGhlIHN0YXR1cyBvZiB0aGUgdGFzayB0byBjb21wbGV0ZWQuIFJlZnJlc2ggdGhlIHRhc2sgbGlzdCBpbiB0aGVcbiAqIHByb2plY3QgY29tcG9uZW50LiBDb250ZXh0LXNlbnNpdGl2ZTogb25seSB3b3JrcyB3aGVuIHRoZSBkaXNwbGF5IG1vZGUgaXMgXCJwZW5kaW5nXCIuXG4gKiBAcGFyYW0ge3Byb2plY3R9IHByb2plY3RPYmogUHJvamVjdCBvYmplY3RcbiAqIEBwYXJhbSB7TnVtYmVyfSB0YXNrSW5kZXggSW5kZXggb2YgdGhlIHRhc2sgaW4gdGhlIHByb2plY3Qgb2JqZWN0XG4gKiBAcmV0dXJuIHt2b2lkfVxuICogQGV4cG9ydFxuICovXG5leHBvcnQgZnVuY3Rpb24gY29tcGxldGVUYXNrKHByb2plY3RPYmosIHRhc2tJbmRleCkge1xuICBpZiAoZ2V0RGlzcGxheU1vZGUoKSAhPT0gXCJwZW5kaW5nXCIpIHJldHVybjtcbiAgY29uc3QgcHJvamVjdEluZGV4ID0gcGVuZGluZ1Byb2plY3RzLmZpbmRJbmRleChcbiAgICAocHJvamVjdCkgPT4gcHJvamVjdC5pZCA9PT0gcHJvamVjdE9iai5pZFxuICApO1xuICBpZiAocHJvamVjdEluZGV4ID09PSAtMSkgcmV0dXJuO1xuICBjb25zdCB0YXNrT2JqID0gcHJvamVjdE9iai50YXNrc1t0YXNrSW5kZXhdO1xuICB0YXNrT2JqLmNvbXBsZXRlZCA9IHRydWU7XG4gIHJlZnJlc2hUYXNrTGlzdChwcm9qZWN0T2JqKTtcbn1cblxuLyoqXG4gKiBTb3J0IHRoZSB0YXNrcyBpbiB0aGUgaW5wdXQgYXJyYXkgYnkgZHVlIGRhdGUuIFRhc2tzIHdpdGggbm8gZHVlIGRhdGVcbiAqIGFyZSBzb3J0ZWQgYnkgdGhlaXIgcHJpb3JpdGllcyBhZnRlciB0aGUgdGFza3Mgd2l0aCBkdWUgZGF0ZXMuIFRhc2tzIHdpdGggZWFybGllclxuICogZHVlIGRhdGVzIGFyZSBzb3J0ZWQgdG8gdGhlIHRvcCBvZiB0aGUgbGlzdC5cbiAqIEBwYXJhbSB7QXJyYXl9IHRhc2tzIEFycmF5IG9mIHRhc2sgb2JqZWN0c1xuICogQHJldHVybiB7dm9pZH1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHNvcnRUYXNrQnlEYXRlKHRhc2tzKSB7XG4gIHRhc2tzLnNvcnQoKGEsIGIpID0+IHtcbiAgICBpZiAoYS5kdWVEYXRlID09PSBcIlwiICYmIGIuZHVlRGF0ZSA9PT0gXCJcIikge1xuICAgICAgcmV0dXJuIGEucHJpb3JpdHkgLSBiLnByaW9yaXR5O1xuICAgIH0gZWxzZSBpZiAoYS5kdWVEYXRlID09PSBcIlwiKSB7XG4gICAgICByZXR1cm4gMTtcbiAgICB9IGVsc2UgaWYgKGIuZHVlRGF0ZSA9PT0gXCJcIikge1xuICAgICAgcmV0dXJuIC0xO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBhRGF0ZSA9IG5ldyBEYXRlKGEuZHVlRGF0ZSk7XG4gICAgICBjb25zdCBiRGF0ZSA9IG5ldyBEYXRlKGIuZHVlRGF0ZSk7XG4gICAgICByZXR1cm4gYURhdGUgLSBiRGF0ZTtcbiAgICB9XG4gIH0pO1xufVxuXG4vKipcbiAqIFNvcnQgdGhlIG9iamVjdHMgaW4gdGhlIGlucHV0IGFycmF5IGJ5IHRoZWlyIHByaW9yaXRpZXMuXG4gKiBAcGFyYW0ge0FycmF5fSBhcnIgQXJyYXkgb2YgcHJvamVjdCBvciB0YXNrIG9iamVjdHNcbiAqIEByZXR1cm4ge3ZvaWR9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzb3J0QXJyQnlQcmlvcml0eShhcnIpIHtcbiAgYXJyLnNvcnQoKGEsIGIpID0+IHtcbiAgICByZXR1cm4gYS5wcmlvcml0eSAtIGIucHJpb3JpdHk7XG4gIH0pO1xufVxuXG4vKipcbiAqIFJlc2V0IHRoZSBwcmlvcml0eSBvZiB0aGUgcHJvamVjdHMvdGFza3MgaW4gdGhlIGlucHV0IGFycmF5LlxuICogQHBhcmFtIHtBcnJheX0gYXJyIEFycmF5IG9mIHByb2plY3Qgb3IgdGFzayBvYmplY3RzXG4gKiBAcmV0dXJuIHt2b2lkfVxuICovXG5leHBvcnQgZnVuY3Rpb24gcmVzZXRQcmlvcml0eShhcnIpIHtcbiAgYXJyLmZvckVhY2goKGVsZW1lbnQsIGkpID0+IHtcbiAgICBlbGVtZW50LnByaW9yaXR5ID0gaTtcbiAgfSk7XG59XG5cbi8qKlxuICogR2V0IHRoZSBzb3J0IG1vZGUgb2YgdGhlIHByb2plY3Qgb2JqZWN0LlxuICogQHBhcmFtIHtwcm9qZWN0fSBwcm9qZWN0T2JqIFByb2plY3Qgb2JqZWN0XG4gKiBAcmV0dXJuIHtTdHJpbmd9IFNvcnQgbW9kZSAoXCJwcmlvcml0eVwiL1wiZGF0ZVwiKVxuICovXG5mdW5jdGlvbiBnZXRTb3J0TW9kZShwcm9qZWN0T2JqKSB7XG4gIGNvbnN0IHNvcnRCdG5zID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeU5hbWUoXCJzb3J0VGFzay1cIiArIHByb2plY3RPYmouaWQpO1xuICBsZXQgc29ydE1vZGUgPSBcIlwiO1xuICBzb3J0QnRucy5mb3JFYWNoKChidG4pID0+IHtcbiAgICBpZiAoYnRuLmNoZWNrZWQpIHtcbiAgICAgIHNvcnRNb2RlID0gYnRuLnZhbHVlO1xuICAgIH1cbiAgfSk7XG4gIHJldHVybiBzb3J0TW9kZTtcbn1cblxuLyogTUFJTiBBUFAgKi9cbi8qKlxuICogQ3JlYXRlIGZhdmljb24uXG4gKiBAcmV0dXJuIHt2b2lkfVxuICovXG5mdW5jdGlvbiBjcmVhdGVGYXZpY29uKCkge1xuICBsZXQgaWNvbkxpbmsgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwibGlua1tyZWwqPSdpY29uJ11cIik7XG4gIGlmICghaWNvbkxpbmspIHtcbiAgICBpY29uTGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaW5rXCIpO1xuICAgIGljb25MaW5rLnJlbCA9IFwiaWNvblwiO1xuICAgIGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQoaWNvbkxpbmspO1xuICB9XG4gIGljb25MaW5rLmhyZWYgPSBmYXZpY29uTGluaztcbn1cblxuLyoqXG4gKiBQdXJnZSB0aGUgY29udGVudCBvZiB0aGUgYWN0aXZlIHRhYiBpbiBtYWluLlxuICogQHJldHVybiB7dm9pZH1cbiAqL1xuZnVuY3Rpb24gcHVyZ2VBY3RpdmVUYWIoKSB7XG4gIGNvbnN0IG1haW4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1haW5cIik7XG4gIGlmIChtYWluLmNoaWxkcmVuLmxlbmd0aCA+IDEpIHtcbiAgICBtYWluLnJlbW92ZUNoaWxkKG1haW4ubGFzdENoaWxkKTtcbiAgfVxufVxuXG4vKipcbiAqIEdldCB0aGUgZGlzcGxheSBtb2RlIG9mIHRoZSBtYWluIGNvbXBvbmVudC5cbiAqIEByZXR1cm4ge1N0cmluZ30gRGlzcGxheSBtb2RlIChcInBlbmRpbmdcIi9cImFyY2hpdmVcIilcbiAqL1xuZnVuY3Rpb24gZ2V0RGlzcGxheU1vZGUoKSB7XG4gIGNvbnN0IHRhYkJ0bnMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5TmFtZShcIm1haW4tbmF2YmFyXCIpO1xuICBsZXQgZGlzcGxheU1vZGUgPSBcIlwiO1xuICB0YWJCdG5zLmZvckVhY2goKGJ0bikgPT4ge1xuICAgIGlmIChidG4uY2hlY2tlZCkge1xuICAgICAgZGlzcGxheU1vZGUgPSBidG4udmFsdWU7XG4gICAgfVxuICB9KTtcbiAgcmV0dXJuIGRpc3BsYXlNb2RlO1xufVxuXG4vKipcbiAqIFN3aXRjaCBiZXR3ZWVuIHRhYnMuXG4gKiBAcmV0dXJuIHt2b2lkfVxuICovXG5mdW5jdGlvbiB0YWJTd2l0Y2goKSB7XG4gIGNvbnN0IG1haW4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1haW5cIik7XG4gIGNvbnN0IHRhYkJ0bnMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5TmFtZShcIm1haW4tbmF2YmFyXCIpO1xuICBtYWluLmFwcGVuZENoaWxkKHJlbmRlclBlbmRpbmdDb21wb25lbnQocGVuZGluZ1Byb2plY3RzKSk7XG4gIHRhYkJ0bnMuZm9yRWFjaCgoYnRuKSA9PiB7XG4gICAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICBwdXJnZUFjdGl2ZVRhYigpO1xuICAgICAgc3dpdGNoIChnZXREaXNwbGF5TW9kZSgpKSB7XG4gICAgICAgIGNhc2UgXCJwZW5kaW5nXCI6XG4gICAgICAgICAgbWFpbi5hcHBlbmRDaGlsZChyZW5kZXJQZW5kaW5nQ29tcG9uZW50KHBlbmRpbmdQcm9qZWN0cykpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFwiYXJjaGl2ZVwiOlxuICAgICAgICAgIG1haW4uYXBwZW5kQ2hpbGQocmVuZGVyQXJjaGl2ZUNvbXBvbmVudChjb21wbGV0ZWRQcm9qZWN0cykpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH0pO1xuICB9KTtcbn1cblxuLyoqXG4gKiBTdGFydCB0aGUgYXBwLlxuICogQHJldHVybiB7dm9pZH1cbiAqL1xuZnVuY3Rpb24gc3RhcnRBcHAoKSB7XG4gIGNyZWF0ZUZhdmljb24oKTtcbiAgcGFnZUxvYWQoKTtcbiAgdGFiU3dpdGNoKCk7XG4gIHNhdmVQcm9qZWN0cygpO1xufVxuXG5zdGFydEFwcCgpOyIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLyogaHR0cDovL21leWVyd2ViLmNvbS9lcmljL3Rvb2xzL2Nzcy9yZXNldC8gXFxuICAgdjIuMCB8IDIwMTEwMTI2XFxuICAgTGljZW5zZTogbm9uZSAocHVibGljIGRvbWFpbilcXG4qL1xcblxcbmh0bWwsIGJvZHksIGRpdiwgc3BhbiwgYXBwbGV0LCBvYmplY3QsIGlmcmFtZSxcXG5oMSwgaDIsIGgzLCBoNCwgaDUsIGg2LCBwLCBibG9ja3F1b3RlLCBwcmUsXFxuYSwgYWJiciwgYWNyb255bSwgYWRkcmVzcywgYmlnLCBjaXRlLCBjb2RlLFxcbmRlbCwgZGZuLCBlbSwgaW1nLCBpbnMsIGtiZCwgcSwgcywgc2FtcCxcXG5zbWFsbCwgc3RyaWtlLCBzdHJvbmcsIHN1Yiwgc3VwLCB0dCwgdmFyLFxcbmIsIHUsIGksIGNlbnRlcixcXG5kbCwgZHQsIGRkLCBvbCwgdWwsIGxpLFxcbmZpZWxkc2V0LCBmb3JtLCBsYWJlbCwgbGVnZW5kLFxcbnRhYmxlLCBjYXB0aW9uLCB0Ym9keSwgdGZvb3QsIHRoZWFkLCB0ciwgdGgsIHRkLFxcbmFydGljbGUsIGFzaWRlLCBjYW52YXMsIGRldGFpbHMsIGVtYmVkLCBcXG5maWd1cmUsIGZpZ2NhcHRpb24sIGZvb3RlciwgaGVhZGVyLCBoZ3JvdXAsIFxcbm1lbnUsIG5hdiwgb3V0cHV0LCBydWJ5LCBzZWN0aW9uLCBzdW1tYXJ5LFxcbnRpbWUsIG1hcmssIGF1ZGlvLCB2aWRlbyB7XFxuXFx0bWFyZ2luOiAwO1xcblxcdHBhZGRpbmc6IDA7XFxuXFx0Ym9yZGVyOiAwO1xcblxcdGZvbnQtc2l6ZTogMTAwJTtcXG5cXHRmb250OiBpbmhlcml0O1xcblxcdHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcXG59XFxuLyogSFRNTDUgZGlzcGxheS1yb2xlIHJlc2V0IGZvciBvbGRlciBicm93c2VycyAqL1xcbmFydGljbGUsIGFzaWRlLCBkZXRhaWxzLCBmaWdjYXB0aW9uLCBmaWd1cmUsIFxcbmZvb3RlciwgaGVhZGVyLCBoZ3JvdXAsIG1lbnUsIG5hdiwgc2VjdGlvbiB7XFxuXFx0ZGlzcGxheTogYmxvY2s7XFxufVxcbmJvZHkge1xcblxcdGxpbmUtaGVpZ2h0OiAxO1xcbn1cXG5vbCwgdWwge1xcblxcdGxpc3Qtc3R5bGU6IG5vbmU7XFxufVxcbmJsb2NrcXVvdGUsIHEge1xcblxcdHF1b3Rlczogbm9uZTtcXG59XFxuYmxvY2txdW90ZTpiZWZvcmUsIGJsb2NrcXVvdGU6YWZ0ZXIsXFxucTpiZWZvcmUsIHE6YWZ0ZXIge1xcblxcdGNvbnRlbnQ6ICcnO1xcblxcdGNvbnRlbnQ6IG5vbmU7XFxufVxcbnRhYmxlIHtcXG5cXHRib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xcblxcdGJvcmRlci1zcGFjaW5nOiAwO1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi90b2RvLWxpc3Qvc3JjL3N0eWxlcy9zdHlsZXMtcmVzZXQuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBOzs7Q0FHQzs7QUFFRDs7Ozs7Ozs7Ozs7OztDQWFDLFNBQVM7Q0FDVCxVQUFVO0NBQ1YsU0FBUztDQUNULGVBQWU7Q0FDZixhQUFhO0NBQ2Isd0JBQXdCO0FBQ3pCO0FBQ0EsZ0RBQWdEO0FBQ2hEOztDQUVDLGNBQWM7QUFDZjtBQUNBO0NBQ0MsY0FBYztBQUNmO0FBQ0E7Q0FDQyxnQkFBZ0I7QUFDakI7QUFDQTtDQUNDLFlBQVk7QUFDYjtBQUNBOztDQUVDLFdBQVc7Q0FDWCxhQUFhO0FBQ2Q7QUFDQTtDQUNDLHlCQUF5QjtDQUN6QixpQkFBaUI7QUFDbEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLyogaHR0cDovL21leWVyd2ViLmNvbS9lcmljL3Rvb2xzL2Nzcy9yZXNldC8gXFxuICAgdjIuMCB8IDIwMTEwMTI2XFxuICAgTGljZW5zZTogbm9uZSAocHVibGljIGRvbWFpbilcXG4qL1xcblxcbmh0bWwsIGJvZHksIGRpdiwgc3BhbiwgYXBwbGV0LCBvYmplY3QsIGlmcmFtZSxcXG5oMSwgaDIsIGgzLCBoNCwgaDUsIGg2LCBwLCBibG9ja3F1b3RlLCBwcmUsXFxuYSwgYWJiciwgYWNyb255bSwgYWRkcmVzcywgYmlnLCBjaXRlLCBjb2RlLFxcbmRlbCwgZGZuLCBlbSwgaW1nLCBpbnMsIGtiZCwgcSwgcywgc2FtcCxcXG5zbWFsbCwgc3RyaWtlLCBzdHJvbmcsIHN1Yiwgc3VwLCB0dCwgdmFyLFxcbmIsIHUsIGksIGNlbnRlcixcXG5kbCwgZHQsIGRkLCBvbCwgdWwsIGxpLFxcbmZpZWxkc2V0LCBmb3JtLCBsYWJlbCwgbGVnZW5kLFxcbnRhYmxlLCBjYXB0aW9uLCB0Ym9keSwgdGZvb3QsIHRoZWFkLCB0ciwgdGgsIHRkLFxcbmFydGljbGUsIGFzaWRlLCBjYW52YXMsIGRldGFpbHMsIGVtYmVkLCBcXG5maWd1cmUsIGZpZ2NhcHRpb24sIGZvb3RlciwgaGVhZGVyLCBoZ3JvdXAsIFxcbm1lbnUsIG5hdiwgb3V0cHV0LCBydWJ5LCBzZWN0aW9uLCBzdW1tYXJ5LFxcbnRpbWUsIG1hcmssIGF1ZGlvLCB2aWRlbyB7XFxuXFx0bWFyZ2luOiAwO1xcblxcdHBhZGRpbmc6IDA7XFxuXFx0Ym9yZGVyOiAwO1xcblxcdGZvbnQtc2l6ZTogMTAwJTtcXG5cXHRmb250OiBpbmhlcml0O1xcblxcdHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcXG59XFxuLyogSFRNTDUgZGlzcGxheS1yb2xlIHJlc2V0IGZvciBvbGRlciBicm93c2VycyAqL1xcbmFydGljbGUsIGFzaWRlLCBkZXRhaWxzLCBmaWdjYXB0aW9uLCBmaWd1cmUsIFxcbmZvb3RlciwgaGVhZGVyLCBoZ3JvdXAsIG1lbnUsIG5hdiwgc2VjdGlvbiB7XFxuXFx0ZGlzcGxheTogYmxvY2s7XFxufVxcbmJvZHkge1xcblxcdGxpbmUtaGVpZ2h0OiAxO1xcbn1cXG5vbCwgdWwge1xcblxcdGxpc3Qtc3R5bGU6IG5vbmU7XFxufVxcbmJsb2NrcXVvdGUsIHEge1xcblxcdHF1b3Rlczogbm9uZTtcXG59XFxuYmxvY2txdW90ZTpiZWZvcmUsIGJsb2NrcXVvdGU6YWZ0ZXIsXFxucTpiZWZvcmUsIHE6YWZ0ZXIge1xcblxcdGNvbnRlbnQ6ICcnO1xcblxcdGNvbnRlbnQ6IG5vbmU7XFxufVxcbnRhYmxlIHtcXG5cXHRib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xcblxcdGJvcmRlci1zcGFjaW5nOiAwO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCI6cm9vdCB7XFxuICAtLXBhc3Npb25hdGUtcmVkOiAxOTEsIDUsIDU1O1xcbiAgLS1ub3N0YWxnaWMteWVsbG93OiAyNDIsIDIzMywgMTA3O1xcbiAgLS1zb2Z0LWdyYXk6IDIzNywgMTk2LCAxNzg7XFxuICAtLXllbGxvLXJhbmdlOiAyNDIsIDE3NCwgMTE0O1xcbiAgLS1kYXJrLWJsYWNrOiA4OSwgMiwgMjtcXG4gIC0tc2hhcnAtd2hpdGU6IDI1NSwgMjU1LCAyNTU7XFxuICAtLXZpc3RhLWJsdWU6IDEzOCwgMTY2LCAxOTg7XFxuICAtLXN0ZWVsLWJsdWU6IDUwLCAxMjksIDE3ODtcXG4gIC0teWlubW4tYmx1ZTogNTcsIDg1LCAxNTg7XFxuICAtLWJvcmRlci1yYWRpdXM6IDhweDtcXG4gIC0tc3BhY2luZy14czogNXB4O1xcbiAgLS1zcGFjaW5nLXNtOiAxMHB4O1xcbiAgLS1zcGFjaW5nLW1kOiAxNXB4O1xcbiAgLS1zcGFjaW5nLWxnOiAyMHB4O1xcbiAgLS1zcGFjaW5nLXhsOiA0MHB4O1xcbiAgLS1jb250YWluZXItd2lkdGg6IDEyMDBweDtcXG4gIC0tZm9vdGVyLWhlaWdodDogNDBweDtcXG4gIC0tYnRuLWhlaWdodDogNTBweDtcXG4gIC0tcG9wdXAtaGVpZ2h0OiAzMDBweDtcXG4gIC0tY2hlY2tib3gtc2l6ZTogMjBweDtcXG4gIC0tZm4tYnRuLXdpZHRoOiAxMTBweDtcXG4gIC0tc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMTYpIDBweCAxcHggNHB4O1xcbn1cXG5cXG4vKiBHTE9CQUwgKi9cXG5odG1sIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBoZWlnaHQ6IDEwMCU7XFxufVxcblxcbiosXFxuKjpiZWZvcmUsXFxuKjphZnRlciB7XFxuICBib3gtc2l6aW5nOiBpbmhlcml0O1xcbn1cXG5cXG5ib2R5IHtcXG4gIG1pbi1oZWlnaHQ6IDEwMCU7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvIDFmciBhdXRvO1xcbn1cXG5cXG4vKiBIRUFERVIgKi9cXG4uaGVhZGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEodmFyKC0tbm9zdGFsZ2ljLXllbGxvdyksIDAuOCk7XFxuICBib3gtc2hhZG93OiB2YXIoLS1zaGFkb3cpO1xcbn1cXG5cXG4uaGVhZGVyLWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBtYXgtd2lkdGg6IHZhcigtLWNvbnRhaW5lci13aWR0aCk7XFxuICBwYWRkaW5nOiB2YXIoLS1zcGFjaW5nLWxnKTtcXG59XFxuXFxuLmhlYWRlci10aXRsZSB7XFxuICBmb250LWZhbWlseTogXFxcIlJvYm90b1xcXCIsIHNhbnMtc2VyaWY7XFxuICBjb2xvcjogcmdiYSh2YXIoLS15aW5tbi1ibHVlKSwgMSk7XFxuICBmb250LXNpemU6IDEuNXJlbTtcXG59XFxuXFxuLyogTUFJTiAqL1xcbi5tYWluIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiUm9ib3RvXFxcIiwgc2Fucy1zZXJpZjtcXG4gIGZvbnQtc2l6ZTogMS4xcmVtO1xcbiAgY29sb3I6IHJnYmEodmFyKC0tZGFyay1ibGFjayksIDEpO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBtYXgtd2lkdGg6IHZhcigtLWNvbnRhaW5lci13aWR0aCk7XFxuICBtYXJnaW46IDAgYXV0bztcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEodmFyKC0teWVsbG8tcmFuZ2UpLCAwLjgpO1xcbn1cXG5cXG4ubWFpbi1pY29ucyB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB0b3A6IDAuMTI1ZW07XFxuICBoZWlnaHQ6IDFlbTtcXG4gIHdpZHRoOiAxZW07XFxuICBtYXJnaW4tbGVmdDogdmFyKC0tc3BhY2luZy14cyk7XFxufVxcblxcbi8qIE1BSU4gLSBOQVZCQVIgKi9cXG4ubWFpbi1uYXZiYXIge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IHZhcigtLWJ0bi1oZWlnaHQpO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIDFmcik7XFxuICBib3gtc2hhZG93OiB2YXIoLS1zaGFkb3cpO1xcbn1cXG5cXG4ubWFpbi1uYXZiYXItaXRlbSB7XFxuICBhcHBlYXJhbmNlOiBub25lO1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLm1haW4tbmF2YmFyLWl0ZW1MYWJlbCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4ubWFpbi1uYXZiYXItaXRlbTpjaGVja2VkICsgbGFiZWwge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSh2YXIoLS1ub3N0YWxnaWMteWVsbG93KSwgMC44KTtcXG59XFxuXFxuLyogTUFJTiAtIEFDVElWRSBUQUIgKi9cXG4ubWFpbi1hY3RpdmVUYWIge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBmbGV4OiAxO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4vKiBNQUlOIC0gQUREIFBST0pFQ1QgKi9cXG4ubWFpbi1hZGRQcm9qZWN0QnRuIHtcXG4gIGhlaWdodDogdmFyKC0tYnRuLWhlaWdodCk7XFxuICB3aWR0aDogMTAwJTtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiUm9ib3RvXFxcIiwgc2Fucy1zZXJpZjtcXG4gIGNvbG9yOiByZ2JhKHZhcigtLXlpbm1uLWJsdWUsIDEpKTtcXG4gIGZvbnQtc2l6ZTogMS4xcmVtO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSh2YXIoLS1ub3N0YWxnaWMteWVsbG93KSwgMC41KTtcXG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0O1xcbn1cXG5cXG4ubWFpbi1hZGRQcm9qZWN0QnRuOmhvdmVyLFxcbi5tYWluLWFkZFByb2plY3RCdG46YWN0aXZlLFxcbi5tYWluLWFkZFByb2plY3RCdG46Zm9jdXMge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSh2YXIoLS1ub3N0YWxnaWMteWVsbG93KSwgMC44KTtcXG59XFxuXFxuLm1haW4tYWRkUHJvamVjdEZvcm0ge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IHZhcigtLXBvcHVwLWhlaWdodCk7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvIDFmciBhdXRvO1xcbiAgZ2FwOiB2YXIoLS1zcGFjaW5nLXNtKTtcXG4gIHBhZGRpbmc6IHZhcigtLXNwYWNpbmctc20pO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSh2YXIoLS1ub3N0YWxnaWMteWVsbG93KSwgMC44KTtcXG59XFxuXFxuLm1haW4tYWRkUHJvamVjdEZvcm0tdGl0bGUsXFxuLm1haW4tYWRkUHJvamVjdEZvcm0tZGVzY3JpcHRpb24ge1xcbiAgZ3JpZC1jb2x1bW46IDEgLyAtMTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIHBhZGRpbmc6IHZhcigtLXNwYWNpbmctc20pO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSh2YXIoLS1zb2Z0LWdyYXkpLCAwLjgpO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJSb2JvdG9cXFwiLCBzYW5zLXNlcmlmO1xcbiAgY29sb3I6IHJnYmEodmFyKC0tZGFyay1ibGFjayksIDEpO1xcbiAgZm9udC1zaXplOiAxLjFyZW07XFxuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dDtcXG59XFxuXFxuLm1haW4tYWRkUHJvamVjdEZvcm0tdGl0bGU6Zm9jdXMsXFxuLm1haW4tYWRkUHJvamVjdEZvcm0tdGl0bGU6YWN0aXZlLFxcbi5tYWluLWFkZFByb2plY3RGb3JtLWRlc2NyaXB0aW9uOmZvY3VzLFxcbi5tYWluLWFkZFByb2plY3RGb3JtLWRlc2NyaXB0aW9uOmFjdGl2ZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKHZhcigtLW5vc3RhbGdpYy15ZWxsb3cpLCAwLjgpO1xcbn1cXG5cXG4ubWFpbi1hZGRQcm9qZWN0Rm9ybS1kZXNjcmlwdGlvbiB7XFxuICByZXNpemU6IG5vbmU7XFxufVxcblxcbi5tYWluLWFkZFByb2plY3RGb3JtLWNvbmZpcm0sXFxuLm1haW4tYWRkUHJvamVjdEZvcm0tY2FuY2VsIHtcXG4gIGhlaWdodDogdmFyKC0tYnRuLWhlaWdodCk7XFxuICBib3JkZXI6IG5vbmU7XFxuICBmb250LWZhbWlseTogXFxcIlJvYm90b1xcXCIsIHNhbnMtc2VyaWY7XFxuICBjb2xvcjogcmdiYSh2YXIoLS1kYXJrLWJsYWNrKSwgMSk7XFxuICBmb250LXNpemU6IDEuMXJlbTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0O1xcbn1cXG5cXG4ubWFpbi1hZGRQcm9qZWN0Rm9ybS1jb25maXJtIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEodmFyKC0teWVsbG8tcmFuZ2UpLCAwLjUpO1xcbn1cXG5cXG4ubWFpbi1hZGRQcm9qZWN0Rm9ybS1jb25maXJtOmhvdmVyLFxcbi5tYWluLWFkZFByb2plY3RGb3JtLWNvbmZpcm06YWN0aXZlLFxcbi5tYWluLWFkZFByb2plY3RGb3JtLWNvbmZpcm06Zm9jdXMge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSh2YXIoLS1ub3N0YWxnaWMteWVsbG93KSwgMC44KTtcXG59XFxuXFxuLm1haW4tYWRkUHJvamVjdEZvcm0tY2FuY2VsIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEodmFyKC0tc29mdC1ncmF5KSwgMC44KTtcXG59XFxuXFxuLm1haW4tYWRkUHJvamVjdEZvcm0tY2FuY2VsOmhvdmVyLFxcbi5tYWluLWFkZFByb2plY3RGb3JtLWNhbmNlbDphY3RpdmUsXFxuLm1haW4tYWRkUHJvamVjdEZvcm0tY2FuY2VsOmZvY3VzIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEodmFyKC0tc29mdC1ncmF5KSwgMSk7XFxufVxcblxcbi8qIE1BSU4gLSBBREQgVEFTSyAqL1xcbi5tYWluLWFkZFRhc2tGb3JtIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiB2YXIoLS1wb3B1cC1oZWlnaHQpO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogYXV0byAxZnIgYXV0byBhdXRvO1xcbiAgZ2FwOiB2YXIoLS1zcGFjaW5nLXNtKTtcXG4gIHBhZGRpbmc6IHZhcigtLXNwYWNpbmctc20pO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSh2YXIoLS1ub3N0YWxnaWMteWVsbG93KSwgMC44KTtcXG59XFxuXFxuLm1haW4tYWRkVGFza0Zvcm0tdGl0bGUsXFxuLm1haW4tYWRkVGFza0Zvcm0tZGVzY3JpcHRpb24sXFxuLm1haW4tYWRkVGFza0Zvcm0tZGF0ZSB7XFxuICBncmlkLWNvbHVtbjogMSAvIC0xO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgcGFkZGluZzogdmFyKC0tc3BhY2luZy1zbSk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKHZhcigtLXNvZnQtZ3JheSksIDAuOCk7XFxuICBmb250LWZhbWlseTogXFxcIlJvYm90b1xcXCIsIHNhbnMtc2VyaWY7XFxuICBjb2xvcjogcmdiYSh2YXIoLS1kYXJrLWJsYWNrKSwgMSk7XFxuICBmb250LXNpemU6IDFyZW07XFxuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dDtcXG59XFxuXFxuLm1haW4tYWRkVGFza0Zvcm0tdGl0bGU6Zm9jdXMsXFxuLm1haW4tYWRkVGFza0Zvcm0tdGl0bGU6YWN0aXZlLFxcbi5tYWluLWFkZFRhc2tGb3JtLWRlc2NyaXB0aW9uOmZvY3VzLFxcbi5tYWluLWFkZFRhc2tGb3JtLWRlc2NyaXB0aW9uOmFjdGl2ZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKHZhcigtLW5vc3RhbGdpYy15ZWxsb3cpLCAwLjgpO1xcbn1cXG5cXG4ubWFpbi1hZGRUYXNrRm9ybS1kZXNjcmlwdGlvbiB7XFxuICByZXNpemU6IG5vbmU7XFxufVxcblxcbi5tYWluLWFkZFRhc2tGb3JtLWNvbmZpcm0sXFxuLm1haW4tYWRkVGFza0Zvcm0tY2FuY2VsIHtcXG4gIGhlaWdodDogdmFyKC0tYnRuLWhlaWdodCk7XFxuICBib3JkZXI6IG5vbmU7XFxuICBmb250LWZhbWlseTogXFxcIlJvYm90b1xcXCIsIHNhbnMtc2VyaWY7XFxuICBjb2xvcjogcmdiYSh2YXIoLS1kYXJrLWJsYWNrKSwgMSk7XFxuICBmb250LXNpemU6IDFyZW07XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dDtcXG59XFxuXFxuLm1haW4tYWRkVGFza0Zvcm0tY29uZmlybSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKHZhcigtLXllbGxvLXJhbmdlKSwgMC41KTtcXG59XFxuXFxuLm1haW4tYWRkVGFza0Zvcm0tY29uZmlybTpob3ZlcixcXG4ubWFpbi1hZGRUYXNrRm9ybS1jb25maXJtOmFjdGl2ZSxcXG4ubWFpbi1hZGRUYXNrRm9ybS1jb25maXJtOmZvY3VzIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEodmFyKC0tbm9zdGFsZ2ljLXllbGxvdyksIDAuOCk7XFxufVxcblxcbi5tYWluLWFkZFRhc2tGb3JtLWNhbmNlbCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKHZhcigtLXNvZnQtZ3JheSksIDAuOCk7XFxufVxcblxcbi5tYWluLWFkZFRhc2tGb3JtLWNhbmNlbDpob3ZlcixcXG4ubWFpbi1hZGRUYXNrRm9ybS1jYW5jZWw6YWN0aXZlLFxcbi5tYWluLWFkZFRhc2tGb3JtLWNhbmNlbDpmb2N1cyB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKHZhcigtLXNvZnQtZ3JheSksIDEpO1xcbn1cXG5cXG4vKiBNQUlOIC0gVE9ETyBMSVNUICovXFxuLm1haW4tcHJvamVjdExpc3Qge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBmbGV4OiAxO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IHZhcigtLXNwYWNpbmctbGcpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSh2YXIoLS15ZWxsby1yYW5nZSksIDAuOCk7XFxuICBwYWRkaW5nOiB2YXIoLS1zcGFjaW5nLWxnKTtcXG59XFxuXFxuLm1haW4tcHJvamVjdCB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEodmFyKC0tc29mdC1ncmF5KSwgMC44KTtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG8gMWZyIGF1dG8gYXV0bztcXG4gIGFsaWduLWl0ZW1zOiBzdGFydDtcXG4gIGdhcDogdmFyKC0tc3BhY2luZy1zbSk7XFxuICBwYWRkaW5nOiB2YXIoLS1zcGFjaW5nLXNtKTtcXG4gIGN1cnNvcjogZ3JhYjtcXG59XFxuXFxuLm1haW4tcHJvamVjdC10aXRsZSxcXG4ubWFpbi10YXNrLXRpdGxlLFxcbi5tYWluLXRhc2stZGF0ZSB7XFxuICBtYXJnaW4tdG9wOiAwLjE1ZW07XFxuICBvdmVyZmxvdy13cmFwOiBicmVhay13b3JkO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJSb2JvdG9cXFwiLCBzYW5zLXNlcmlmO1xcbiAgY29sb3I6IHJnYmEodmFyKC0tZGFyay1ibGFjayksIDEpO1xcbiAgZm9udC1zaXplOiAxcmVtO1xcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7XFxufVxcblxcbi5tYWluLXByb2plY3Qtc29ydFRhc2tXcmFwcGVyIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgZ3JpZC1jb2x1bW46IDEgLyAtMTtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XFxuICBnYXA6IHZhcigtLXNwYWNpbmctc20pO1xcbiAgaGVpZ2h0OiB2YXIoLS1idG4taGVpZ2h0KTtcXG59XFxuXFxuLm1haW4tcHJvamVjdC1zb3J0QnRuIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxuICBhcHBlYXJhbmNlOiBub25lO1xcbn1cXG5cXG4ubWFpbi1wcm9qZWN0LXNvcnRMYWJlbCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSh2YXIoLS1ub3N0YWxnaWMteWVsbG93KSwgMC41KTtcXG4gIHRyYW5zaXRpb246IDAuM3MgZWFzZS1pbi1vdXQ7XFxufVxcblxcbi5tYWluLXByb2plY3Qtc29ydEJ0bjpjaGVja2VkICsgLm1haW4tcHJvamVjdC1zb3J0TGFiZWwge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSh2YXIoLS1ub3N0YWxnaWMteWVsbG93KSwgMC44KTtcXG4gIHRyYW5zaXRpb246IDAuM3M7XFxufVxcblxcbi5tYWluLWFkZFRhc2tCdG4ge1xcbiAgZ3JpZC1jb2x1bW46IDIgLyAtMTtcXG4gIGhlaWdodDogY2FsYyh2YXIoLS1idG4taGVpZ2h0KSAvIDIpO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBmb250LWZhbWlseTogXFxcIlJvYm90b1xcXCIsIHNhbnMtc2VyaWY7XFxuICBjb2xvcjogcmdiYSh2YXIoLS15aW5tbi1ibHVlLCAxKSk7XFxuICBmb250LXNpemU6IDAuOHJlbTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEodmFyKC0tbm9zdGFsZ2ljLXllbGxvdyksIDAuNSk7XFxuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dDtcXG59XFxuXFxuLm1haW4tYWRkVGFza0J0bjpob3ZlcixcXG4ubWFpbi1hZGRUYXNrQnRuOmFjdGl2ZSxcXG4ubWFpbi1hZGRUYXNrQnRuOmZvY3VzIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEodmFyKC0tbm9zdGFsZ2ljLXllbGxvdyksIDAuOCk7XFxufVxcblxcbi5tYWluLXByb2plY3QtdGFza0xpc3Qge1xcbiAgZ3JpZC1jb2x1bW46IDIgLyAtMTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiB2YXIoLS1zcGFjaW5nLXNtKTtcXG59XFxuXFxuLm1haW4tdGFzayB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvIDFmciBhdXRvIGF1dG8gYXV0bztcXG4gIGFsaWduLWl0ZW1zOiBzdGFydDtcXG4gIGdhcDogdmFyKC0tc3BhY2luZy1zbSk7XFxufVxcblxcbi5tYWluLXByb2plY3QtZGVzY3JpcHRpb24sXFxuLm1haW4tdGFzay1kZXNjcmlwdGlvbiB7XFxuICBkaXNwbGF5OiBub25lO1xcbiAgZm9udC1zaXplOiAwLjlyZW07XFxufVxcblxcbi5tYWluLXByb2plY3QtZGVzY3JpcHRpb24uYWN0aXZlLFxcbi5tYWluLXRhc2stZGVzY3JpcHRpb24uYWN0aXZlIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cXG4ubWFpbi1wcm9qZWN0IGJ1dHRvbiB7XFxuICBmb250LWZhbWlseTogXFxcIlJvYm90b1xcXCIsIHNhbnMtc2VyaWY7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBib3JkZXI6IG5vbmU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKHZhcigtLW5vc3RhbGdpYy15ZWxsb3cpLCAwLjUpO1xcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7XFxufVxcblxcbi5tYWluLXByb2plY3QgYnV0dG9uOmhvdmVyLFxcbi5tYWluLXByb2plY3QgYnV0dG9uOmFjdGl2ZSxcXG4ubWFpbi1wcm9qZWN0IGJ1dHRvbjpmb2N1cyB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKHZhcigtLW5vc3RhbGdpYy15ZWxsb3cpLCAwLjgpO1xcbn1cXG5cXG4ubWFpbi1wcm9qZWN0LWV4cGFuZEJ0bixcXG4ubWFpbi1wcm9qZWN0LWRlbGV0ZUJ0bixcXG4ubWFpbi10YXNrLWV4cGFuZEJ0bixcXG4ubWFpbi10YXNrLWRlbGV0ZUJ0biB7XFxuICB3aWR0aDogdmFyKC0tZm4tYnRuLXdpZHRoKTtcXG59XFxuXFxuLm1haW4tcHJvamVjdC1jaGVja2JveCxcXG4ubWFpbi10YXNrLWNoZWNrYm94IHtcXG4gIG1hcmdpbjogMDtcXG4gIHdpZHRoOiB2YXIoLS1jaGVja2JveC1zaXplKTtcXG4gIGhlaWdodDogdmFyKC0tY2hlY2tib3gtc2l6ZSk7XFxuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKHZhcigtLWRhcmstYmxhY2spLCAxKTtcXG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLWJvcmRlci1yYWRpdXMpO1xcbiAgYWNjZW50LWNvbG9yOiByZ2JhKHZhcigtLXBhc3Npb25hdGUtcmVkKSwgMSk7XFxuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLyogRk9PVEVSICovXFxuLmZvb3RlciB7XFxuICBwYWRkaW5nLWJvdHRvbTogdmFyKC0tc3BhY2luZy14cyk7XFxuICBoZWlnaHQ6IHZhcigtLWZvb3Rlci1oZWlnaHQpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSh2YXIoLS1zb2Z0LWdyYXkpLCAwLjgpO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGdhcDogMTBweDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgZ3JpZC1yb3c6IDMgLyA0O1xcbn1cXG5cXG4uZmEtZ2l0aHViIHtcXG4gIGZvbnQtc2l6ZTogMjBweDtcXG4gIG1hcmdpbi10b3A6IDRweDtcXG4gIGNvbG9yOiBibGFjaztcXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjNzIGVhc2UtaW4tb3V0O1xcbn1cXG5cXG4uZmEtZ2l0aHViOmhvdmVyIHtcXG4gIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZykgc2NhbGUoMS4yKTtcXG59XFxuXFxuLyogTUVESUEgUVVFUklFUyAqL1xcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDUwMHB4KSB7XFxuICAubWFpbi1wcm9qZWN0LWV4cGFuZEJ0biBzcGFuLFxcbiAgLm1haW4tcHJvamVjdC1kZWxldGVCdG4gc3BhbixcXG4gIC5tYWluLXRhc2stZXhwYW5kQnRuIHNwYW4sXFxuICAubWFpbi10YXNrLWRlbGV0ZUJ0biBzcGFuIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gIH1cXG5cXG4gIC5tYWluLWljb25zIHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgfVxcblxcbiAgLm1haW4tcHJvamVjdC1leHBhbmRCdG4sXFxuICAubWFpbi1wcm9qZWN0LWRlbGV0ZUJ0bixcXG4gIC5tYWluLXRhc2stZXhwYW5kQnRuLFxcbiAgLm1haW4tdGFzay1kZWxldGVCdG4ge1xcbiAgICB3aWR0aDogYXV0bztcXG4gIH1cXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vdG9kby1saXN0L3NyYy9zdHlsZXMvc3R5bGVzLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLDRCQUE0QjtFQUM1QixpQ0FBaUM7RUFDakMsMEJBQTBCO0VBQzFCLDRCQUE0QjtFQUM1QixzQkFBc0I7RUFDdEIsNEJBQTRCO0VBQzVCLDJCQUEyQjtFQUMzQiwwQkFBMEI7RUFDMUIseUJBQXlCO0VBQ3pCLG9CQUFvQjtFQUNwQixpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLHlCQUF5QjtFQUN6QixxQkFBcUI7RUFDckIsa0JBQWtCO0VBQ2xCLHFCQUFxQjtFQUNyQixxQkFBcUI7RUFDckIscUJBQXFCO0VBQ3JCLHlDQUF5QztBQUMzQzs7QUFFQSxXQUFXO0FBQ1g7RUFDRSxzQkFBc0I7RUFDdEIsWUFBWTtBQUNkOztBQUVBOzs7RUFHRSxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsYUFBYTtFQUNiLGlDQUFpQztBQUNuQzs7QUFFQSxXQUFXO0FBQ1g7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG9EQUFvRDtFQUNwRCx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixXQUFXO0VBQ1gsaUNBQWlDO0VBQ2pDLDBCQUEwQjtBQUM1Qjs7QUFFQTtFQUNFLGlDQUFpQztFQUNqQyxpQ0FBaUM7RUFDakMsaUJBQWlCO0FBQ25COztBQUVBLFNBQVM7QUFDVDtFQUNFLGlDQUFpQztFQUNqQyxpQkFBaUI7RUFDakIsaUNBQWlDO0VBQ2pDLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsbUJBQW1CO0VBQ25CLFdBQVc7RUFDWCxpQ0FBaUM7RUFDakMsY0FBYztFQUNkLCtDQUErQztBQUNqRDs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixZQUFZ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Q1osc0NBQXNDO0FBQ3hDOztBQUVBO0VBQ0Usb0NBQW9DO0FBQ3RDOztBQUVBLGtCQUFrQjtBQUNsQjtFQUNFOzs7O0lBSUUsYUFBYTtFQUNmOztFQUVBO0lBQ0UsU0FBUztFQUNYOztFQUVBOzs7O0lBSUUsV0FBVztFQUNiO0FBQ0ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiOnJvb3Qge1xcbiAgLS1wYXNzaW9uYXRlLXJlZDogMTkxLCA1LCA1NTtcXG4gIC0tbm9zdGFsZ2ljLXllbGxvdzogMjQyLCAyMzMsIDEwNztcXG4gIC0tc29mdC1ncmF5OiAyMzcsIDE5NiwgMTc4O1xcbiAgLS15ZWxsby1yYW5nZTogMjQyLCAxNzQsIDExNDtcXG4gIC0tZGFyay1ibGFjazogODksIDIsIDI7XFxuICAtLXNoYXJwLXdoaXRlOiAyNTUsIDI1NSwgMjU1O1xcbiAgLS12aXN0YS1ibHVlOiAxMzgsIDE2NiwgMTk4O1xcbiAgLS1zdGVlbC1ibHVlOiA1MCwgMTI5LCAxNzg7XFxuICAtLXlpbm1uLWJsdWU6IDU3LCA4NSwgMTU4O1xcbiAgLS1ib3JkZXItcmFkaXVzOiA4cHg7XFxuICAtLXNwYWNpbmcteHM6IDVweDtcXG4gIC0tc3BhY2luZy1zbTogMTBweDtcXG4gIC0tc3BhY2luZy1tZDogMTVweDtcXG4gIC0tc3BhY2luZy1sZzogMjBweDtcXG4gIC0tc3BhY2luZy14bDogNDBweDtcXG4gIC0tY29udGFpbmVyLXdpZHRoOiAxMjAwcHg7XFxuICAtLWZvb3Rlci1oZWlnaHQ6IDQwcHg7XFxuICAtLWJ0bi1oZWlnaHQ6IDUwcHg7XFxuICAtLXBvcHVwLWhlaWdodDogMzAwcHg7XFxuICAtLWNoZWNrYm94LXNpemU6IDIwcHg7XFxuICAtLWZuLWJ0bi13aWR0aDogMTEwcHg7XFxuICAtLXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjE2KSAwcHggMXB4IDRweDtcXG59XFxuXFxuLyogR0xPQkFMICovXFxuaHRtbCB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgaGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG4qLFxcbio6YmVmb3JlLFxcbio6YWZ0ZXIge1xcbiAgYm94LXNpemluZzogaW5oZXJpdDtcXG59XFxuXFxuYm9keSB7XFxuICBtaW4taGVpZ2h0OiAxMDAlO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogYXV0byAxZnIgYXV0bztcXG59XFxuXFxuLyogSEVBREVSICovXFxuLmhlYWRlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKHZhcigtLW5vc3RhbGdpYy15ZWxsb3cpLCAwLjgpO1xcbiAgYm94LXNoYWRvdzogdmFyKC0tc2hhZG93KTtcXG59XFxuXFxuLmhlYWRlci1jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgbWF4LXdpZHRoOiB2YXIoLS1jb250YWluZXItd2lkdGgpO1xcbiAgcGFkZGluZzogdmFyKC0tc3BhY2luZy1sZyk7XFxufVxcblxcbi5oZWFkZXItdGl0bGUge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJSb2JvdG9cXFwiLCBzYW5zLXNlcmlmO1xcbiAgY29sb3I6IHJnYmEodmFyKC0teWlubW4tYmx1ZSksIDEpO1xcbiAgZm9udC1zaXplOiAxLjVyZW07XFxufVxcblxcbi8qIE1BSU4gKi9cXG4ubWFpbiB7XFxuICBmb250LWZhbWlseTogXFxcIlJvYm90b1xcXCIsIHNhbnMtc2VyaWY7XFxuICBmb250LXNpemU6IDEuMXJlbTtcXG4gIGNvbG9yOiByZ2JhKHZhcigtLWRhcmstYmxhY2spLCAxKTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgbWF4LXdpZHRoOiB2YXIoLS1jb250YWluZXItd2lkdGgpO1xcbiAgbWFyZ2luOiAwIGF1dG87XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKHZhcigtLXllbGxvLXJhbmdlKSwgMC44KTtcXG59XFxuXFxuLm1haW4taWNvbnMge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgdG9wOiAwLjEyNWVtO1xcbiAgaGVpZ2h0OiAxZW07XFxuICB3aWR0aDogMWVtO1xcbiAgbWFyZ2luLWxlZnQ6IHZhcigtLXNwYWNpbmcteHMpO1xcbn1cXG5cXG4vKiBNQUlOIC0gTkFWQkFSICovXFxuLm1haW4tbmF2YmFyIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiB2YXIoLS1idG4taGVpZ2h0KTtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCAxZnIpO1xcbiAgYm94LXNoYWRvdzogdmFyKC0tc2hhZG93KTtcXG59XFxuXFxuLm1haW4tbmF2YmFyLWl0ZW0ge1xcbiAgYXBwZWFyYW5jZTogbm9uZTtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5tYWluLW5hdmJhci1pdGVtTGFiZWwge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLm1haW4tbmF2YmFyLWl0ZW06Y2hlY2tlZCArIGxhYmVsIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEodmFyKC0tbm9zdGFsZ2ljLXllbGxvdyksIDAuOCk7XFxufVxcblxcbi8qIE1BSU4gLSBBQ1RJVkUgVEFCICovXFxuLm1haW4tYWN0aXZlVGFiIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgZmxleDogMTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLyogTUFJTiAtIEFERCBQUk9KRUNUICovXFxuLm1haW4tYWRkUHJvamVjdEJ0biB7XFxuICBoZWlnaHQ6IHZhcigtLWJ0bi1oZWlnaHQpO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBmb250LWZhbWlseTogXFxcIlJvYm90b1xcXCIsIHNhbnMtc2VyaWY7XFxuICBjb2xvcjogcmdiYSh2YXIoLS15aW5tbi1ibHVlLCAxKSk7XFxuICBmb250LXNpemU6IDEuMXJlbTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEodmFyKC0tbm9zdGFsZ2ljLXllbGxvdyksIDAuNSk7XFxuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dDtcXG59XFxuXFxuLm1haW4tYWRkUHJvamVjdEJ0bjpob3ZlcixcXG4ubWFpbi1hZGRQcm9qZWN0QnRuOmFjdGl2ZSxcXG4ubWFpbi1hZGRQcm9qZWN0QnRuOmZvY3VzIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEodmFyKC0tbm9zdGFsZ2ljLXllbGxvdyksIDAuOCk7XFxufVxcblxcbi5tYWluLWFkZFByb2plY3RGb3JtIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiB2YXIoLS1wb3B1cC1oZWlnaHQpO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogYXV0byAxZnIgYXV0bztcXG4gIGdhcDogdmFyKC0tc3BhY2luZy1zbSk7XFxuICBwYWRkaW5nOiB2YXIoLS1zcGFjaW5nLXNtKTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEodmFyKC0tbm9zdGFsZ2ljLXllbGxvdyksIDAuOCk7XFxufVxcblxcbi5tYWluLWFkZFByb2plY3RGb3JtLXRpdGxlLFxcbi5tYWluLWFkZFByb2plY3RGb3JtLWRlc2NyaXB0aW9uIHtcXG4gIGdyaWQtY29sdW1uOiAxIC8gLTE7XFxuICBib3JkZXI6IG5vbmU7XFxuICBwYWRkaW5nOiB2YXIoLS1zcGFjaW5nLXNtKTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEodmFyKC0tc29mdC1ncmF5KSwgMC44KTtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiUm9ib3RvXFxcIiwgc2Fucy1zZXJpZjtcXG4gIGNvbG9yOiByZ2JhKHZhcigtLWRhcmstYmxhY2spLCAxKTtcXG4gIGZvbnQtc2l6ZTogMS4xcmVtO1xcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7XFxufVxcblxcbi5tYWluLWFkZFByb2plY3RGb3JtLXRpdGxlOmZvY3VzLFxcbi5tYWluLWFkZFByb2plY3RGb3JtLXRpdGxlOmFjdGl2ZSxcXG4ubWFpbi1hZGRQcm9qZWN0Rm9ybS1kZXNjcmlwdGlvbjpmb2N1cyxcXG4ubWFpbi1hZGRQcm9qZWN0Rm9ybS1kZXNjcmlwdGlvbjphY3RpdmUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSh2YXIoLS1ub3N0YWxnaWMteWVsbG93KSwgMC44KTtcXG59XFxuXFxuLm1haW4tYWRkUHJvamVjdEZvcm0tZGVzY3JpcHRpb24ge1xcbiAgcmVzaXplOiBub25lO1xcbn1cXG5cXG4ubWFpbi1hZGRQcm9qZWN0Rm9ybS1jb25maXJtLFxcbi5tYWluLWFkZFByb2plY3RGb3JtLWNhbmNlbCB7XFxuICBoZWlnaHQ6IHZhcigtLWJ0bi1oZWlnaHQpO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJSb2JvdG9cXFwiLCBzYW5zLXNlcmlmO1xcbiAgY29sb3I6IHJnYmEodmFyKC0tZGFyay1ibGFjayksIDEpO1xcbiAgZm9udC1zaXplOiAxLjFyZW07XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dDtcXG59XFxuXFxuLm1haW4tYWRkUHJvamVjdEZvcm0tY29uZmlybSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKHZhcigtLXllbGxvLXJhbmdlKSwgMC41KTtcXG59XFxuXFxuLm1haW4tYWRkUHJvamVjdEZvcm0tY29uZmlybTpob3ZlcixcXG4ubWFpbi1hZGRQcm9qZWN0Rm9ybS1jb25maXJtOmFjdGl2ZSxcXG4ubWFpbi1hZGRQcm9qZWN0Rm9ybS1jb25maXJtOmZvY3VzIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEodmFyKC0tbm9zdGFsZ2ljLXllbGxvdyksIDAuOCk7XFxufVxcblxcbi5tYWluLWFkZFByb2plY3RGb3JtLWNhbmNlbCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKHZhcigtLXNvZnQtZ3JheSksIDAuOCk7XFxufVxcblxcbi5tYWluLWFkZFByb2plY3RGb3JtLWNhbmNlbDpob3ZlcixcXG4ubWFpbi1hZGRQcm9qZWN0Rm9ybS1jYW5jZWw6YWN0aXZlLFxcbi5tYWluLWFkZFByb2plY3RGb3JtLWNhbmNlbDpmb2N1cyB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKHZhcigtLXNvZnQtZ3JheSksIDEpO1xcbn1cXG5cXG4vKiBNQUlOIC0gQUREIFRBU0sgKi9cXG4ubWFpbi1hZGRUYXNrRm9ybSB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogdmFyKC0tcG9wdXAtaGVpZ2h0KTtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG8gMWZyIGF1dG8gYXV0bztcXG4gIGdhcDogdmFyKC0tc3BhY2luZy1zbSk7XFxuICBwYWRkaW5nOiB2YXIoLS1zcGFjaW5nLXNtKTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEodmFyKC0tbm9zdGFsZ2ljLXllbGxvdyksIDAuOCk7XFxufVxcblxcbi5tYWluLWFkZFRhc2tGb3JtLXRpdGxlLFxcbi5tYWluLWFkZFRhc2tGb3JtLWRlc2NyaXB0aW9uLFxcbi5tYWluLWFkZFRhc2tGb3JtLWRhdGUge1xcbiAgZ3JpZC1jb2x1bW46IDEgLyAtMTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIHBhZGRpbmc6IHZhcigtLXNwYWNpbmctc20pO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSh2YXIoLS1zb2Z0LWdyYXkpLCAwLjgpO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJSb2JvdG9cXFwiLCBzYW5zLXNlcmlmO1xcbiAgY29sb3I6IHJnYmEodmFyKC0tZGFyay1ibGFjayksIDEpO1xcbiAgZm9udC1zaXplOiAxcmVtO1xcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7XFxufVxcblxcbi5tYWluLWFkZFRhc2tGb3JtLXRpdGxlOmZvY3VzLFxcbi5tYWluLWFkZFRhc2tGb3JtLXRpdGxlOmFjdGl2ZSxcXG4ubWFpbi1hZGRUYXNrRm9ybS1kZXNjcmlwdGlvbjpmb2N1cyxcXG4ubWFpbi1hZGRUYXNrRm9ybS1kZXNjcmlwdGlvbjphY3RpdmUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSh2YXIoLS1ub3N0YWxnaWMteWVsbG93KSwgMC44KTtcXG59XFxuXFxuLm1haW4tYWRkVGFza0Zvcm0tZGVzY3JpcHRpb24ge1xcbiAgcmVzaXplOiBub25lO1xcbn1cXG5cXG4ubWFpbi1hZGRUYXNrRm9ybS1jb25maXJtLFxcbi5tYWluLWFkZFRhc2tGb3JtLWNhbmNlbCB7XFxuICBoZWlnaHQ6IHZhcigtLWJ0bi1oZWlnaHQpO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJSb2JvdG9cXFwiLCBzYW5zLXNlcmlmO1xcbiAgY29sb3I6IHJnYmEodmFyKC0tZGFyay1ibGFjayksIDEpO1xcbiAgZm9udC1zaXplOiAxcmVtO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7XFxufVxcblxcbi5tYWluLWFkZFRhc2tGb3JtLWNvbmZpcm0ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSh2YXIoLS15ZWxsby1yYW5nZSksIDAuNSk7XFxufVxcblxcbi5tYWluLWFkZFRhc2tGb3JtLWNvbmZpcm06aG92ZXIsXFxuLm1haW4tYWRkVGFza0Zvcm0tY29uZmlybTphY3RpdmUsXFxuLm1haW4tYWRkVGFza0Zvcm0tY29uZmlybTpmb2N1cyB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKHZhcigtLW5vc3RhbGdpYy15ZWxsb3cpLCAwLjgpO1xcbn1cXG5cXG4ubWFpbi1hZGRUYXNrRm9ybS1jYW5jZWwge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSh2YXIoLS1zb2Z0LWdyYXkpLCAwLjgpO1xcbn1cXG5cXG4ubWFpbi1hZGRUYXNrRm9ybS1jYW5jZWw6aG92ZXIsXFxuLm1haW4tYWRkVGFza0Zvcm0tY2FuY2VsOmFjdGl2ZSxcXG4ubWFpbi1hZGRUYXNrRm9ybS1jYW5jZWw6Zm9jdXMge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSh2YXIoLS1zb2Z0LWdyYXkpLCAxKTtcXG59XFxuXFxuLyogTUFJTiAtIFRPRE8gTElTVCAqL1xcbi5tYWluLXByb2plY3RMaXN0IHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgZmxleDogMTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiB2YXIoLS1zcGFjaW5nLWxnKTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEodmFyKC0teWVsbG8tcmFuZ2UpLCAwLjgpO1xcbiAgcGFkZGluZzogdmFyKC0tc3BhY2luZy1sZyk7XFxufVxcblxcbi5tYWluLXByb2plY3Qge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKHZhcigtLXNvZnQtZ3JheSksIDAuOCk7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvIDFmciBhdXRvIGF1dG87XFxuICBhbGlnbi1pdGVtczogc3RhcnQ7XFxuICBnYXA6IHZhcigtLXNwYWNpbmctc20pO1xcbiAgcGFkZGluZzogdmFyKC0tc3BhY2luZy1zbSk7XFxuICBjdXJzb3I6IGdyYWI7XFxufVxcblxcbi5tYWluLXByb2plY3QtdGl0bGUsXFxuLm1haW4tdGFzay10aXRsZSxcXG4ubWFpbi10YXNrLWRhdGUge1xcbiAgbWFyZ2luLXRvcDogMC4xNWVtO1xcbiAgb3ZlcmZsb3ctd3JhcDogYnJlYWstd29yZDtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiUm9ib3RvXFxcIiwgc2Fucy1zZXJpZjtcXG4gIGNvbG9yOiByZ2JhKHZhcigtLWRhcmstYmxhY2spLCAxKTtcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0O1xcbn1cXG5cXG4ubWFpbi1wcm9qZWN0LXNvcnRUYXNrV3JhcHBlciB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGdyaWQtY29sdW1uOiAxIC8gLTE7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xcbiAgZ2FwOiB2YXIoLS1zcGFjaW5nLXNtKTtcXG4gIGhlaWdodDogdmFyKC0tYnRuLWhlaWdodCk7XFxufVxcblxcbi5tYWluLXByb2plY3Qtc29ydEJ0biB7XFxuICBkaXNwbGF5OiBub25lO1xcbiAgYXBwZWFyYW5jZTogbm9uZTtcXG59XFxuXFxuLm1haW4tcHJvamVjdC1zb3J0TGFiZWwge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEodmFyKC0tbm9zdGFsZ2ljLXllbGxvdyksIDAuNSk7XFxuICB0cmFuc2l0aW9uOiAwLjNzIGVhc2UtaW4tb3V0O1xcbn1cXG5cXG4ubWFpbi1wcm9qZWN0LXNvcnRCdG46Y2hlY2tlZCArIC5tYWluLXByb2plY3Qtc29ydExhYmVsIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEodmFyKC0tbm9zdGFsZ2ljLXllbGxvdyksIDAuOCk7XFxuICB0cmFuc2l0aW9uOiAwLjNzO1xcbn1cXG5cXG4ubWFpbi1hZGRUYXNrQnRuIHtcXG4gIGdyaWQtY29sdW1uOiAyIC8gLTE7XFxuICBoZWlnaHQ6IGNhbGModmFyKC0tYnRuLWhlaWdodCkgLyAyKTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJSb2JvdG9cXFwiLCBzYW5zLXNlcmlmO1xcbiAgY29sb3I6IHJnYmEodmFyKC0teWlubW4tYmx1ZSwgMSkpO1xcbiAgZm9udC1zaXplOiAwLjhyZW07XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBib3JkZXI6IG5vbmU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKHZhcigtLW5vc3RhbGdpYy15ZWxsb3cpLCAwLjUpO1xcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7XFxufVxcblxcbi5tYWluLWFkZFRhc2tCdG46aG92ZXIsXFxuLm1haW4tYWRkVGFza0J0bjphY3RpdmUsXFxuLm1haW4tYWRkVGFza0J0bjpmb2N1cyB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKHZhcigtLW5vc3RhbGdpYy15ZWxsb3cpLCAwLjgpO1xcbn1cXG5cXG4ubWFpbi1wcm9qZWN0LXRhc2tMaXN0IHtcXG4gIGdyaWQtY29sdW1uOiAyIC8gLTE7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogdmFyKC0tc3BhY2luZy1zbSk7XFxufVxcblxcbi5tYWluLXRhc2sge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0byAxZnIgYXV0byBhdXRvIGF1dG87XFxuICBhbGlnbi1pdGVtczogc3RhcnQ7XFxuICBnYXA6IHZhcigtLXNwYWNpbmctc20pO1xcbn1cXG5cXG4ubWFpbi1wcm9qZWN0LWRlc2NyaXB0aW9uLFxcbi5tYWluLXRhc2stZGVzY3JpcHRpb24ge1xcbiAgZGlzcGxheTogbm9uZTtcXG4gIGZvbnQtc2l6ZTogMC45cmVtO1xcbn1cXG5cXG4ubWFpbi1wcm9qZWN0LWRlc2NyaXB0aW9uLmFjdGl2ZSxcXG4ubWFpbi10YXNrLWRlc2NyaXB0aW9uLmFjdGl2ZSB7XFxuICBkaXNwbGF5OiBibG9jaztcXG59XFxuXFxuLm1haW4tcHJvamVjdCBidXR0b24ge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJSb2JvdG9cXFwiLCBzYW5zLXNlcmlmO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSh2YXIoLS1ub3N0YWxnaWMteWVsbG93KSwgMC41KTtcXG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0O1xcbn1cXG5cXG4ubWFpbi1wcm9qZWN0IGJ1dHRvbjpob3ZlcixcXG4ubWFpbi1wcm9qZWN0IGJ1dHRvbjphY3RpdmUsXFxuLm1haW4tcHJvamVjdCBidXR0b246Zm9jdXMge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSh2YXIoLS1ub3N0YWxnaWMteWVsbG93KSwgMC44KTtcXG59XFxuXFxuLm1haW4tcHJvamVjdC1leHBhbmRCdG4sXFxuLm1haW4tcHJvamVjdC1kZWxldGVCdG4sXFxuLm1haW4tdGFzay1leHBhbmRCdG4sXFxuLm1haW4tdGFzay1kZWxldGVCdG4ge1xcbiAgd2lkdGg6IHZhcigtLWZuLWJ0bi13aWR0aCk7XFxufVxcblxcbi5tYWluLXByb2plY3QtY2hlY2tib3gsXFxuLm1haW4tdGFzay1jaGVja2JveCB7XFxuICBtYXJnaW46IDA7XFxuICB3aWR0aDogdmFyKC0tY2hlY2tib3gtc2l6ZSk7XFxuICBoZWlnaHQ6IHZhcigtLWNoZWNrYm94LXNpemUpO1xcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSh2YXIoLS1kYXJrLWJsYWNrKSwgMSk7XFxuICBib3JkZXItcmFkaXVzOiB2YXIoLS1ib3JkZXItcmFkaXVzKTtcXG4gIGFjY2VudC1jb2xvcjogcmdiYSh2YXIoLS1wYXNzaW9uYXRlLXJlZCksIDEpO1xcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi8qIEZPT1RFUiAqL1xcbi5mb290ZXIge1xcbiAgcGFkZGluZy1ib3R0b206IHZhcigtLXNwYWNpbmcteHMpO1xcbiAgaGVpZ2h0OiB2YXIoLS1mb290ZXItaGVpZ2h0KTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEodmFyKC0tc29mdC1ncmF5KSwgMC44KTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBnYXA6IDEwcHg7XFxuICB3aWR0aDogMTAwJTtcXG4gIGdyaWQtcm93OiAzIC8gNDtcXG59XFxuXFxuLmZhLWdpdGh1YiB7XFxuICBmb250LXNpemU6IDIwcHg7XFxuICBtYXJnaW4tdG9wOiA0cHg7XFxuICBjb2xvcjogYmxhY2s7XFxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4zcyBlYXNlLWluLW91dDtcXG59XFxuXFxuLmZhLWdpdGh1Yjpob3ZlciB7XFxuICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpIHNjYWxlKDEuMik7XFxufVxcblxcbi8qIE1FRElBIFFVRVJJRVMgKi9cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1MDBweCkge1xcbiAgLm1haW4tcHJvamVjdC1leHBhbmRCdG4gc3BhbixcXG4gIC5tYWluLXByb2plY3QtZGVsZXRlQnRuIHNwYW4sXFxuICAubWFpbi10YXNrLWV4cGFuZEJ0biBzcGFuLFxcbiAgLm1haW4tdGFzay1kZWxldGVCdG4gc3BhbiB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICB9XFxuXFxuICAubWFpbi1pY29ucyB7XFxuICAgIG1hcmdpbjogMDtcXG4gIH1cXG5cXG4gIC5tYWluLXByb2plY3QtZXhwYW5kQnRuLFxcbiAgLm1haW4tcHJvamVjdC1kZWxldGVCdG4sXFxuICAubWFpbi10YXNrLWV4cGFuZEJ0bixcXG4gIC5tYWluLXRhc2stZGVsZXRlQnRuIHtcXG4gICAgd2lkdGg6IGF1dG87XFxuICB9XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy1yZXNldC5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy1yZXNldC5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBpcyByZWZlcmVuY2VkIGJ5IG90aGVyIG1vZHVsZXMgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi90b2RvLWxpc3Qvc3JjL2NvbXBvbmVudHMvcHJvamVjdExpc3QvcHJvamVjdExpc3QuanNcIik7XG4iLCIiXSwibmFtZXMiOlsicHJvamVjdExpc3RDb21wb25lbnQiLCJhcmNoaXZlIiwiY29tcGxldGVkUHJvamVjdHMiLCJ3cmFwcGVyIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwicHJvamVjdExpc3QiLCJjbGFzc0xpc3QiLCJhZGQiLCJhcHBlbmRDaGlsZCIsImhlYWRlciIsImhlYWRlckNvbnRhaW5lciIsImhlYWRlclRpdGxlIiwidGV4dENvbnRlbnQiLCJtYWluIiwibWFpbk5hdmJhciIsIm1haW5OYXZiYXJJdGVtcyIsImlkIiwiZm9yRWFjaCIsIml0ZW0iLCJtYWluTmF2YmFyTGFiZWwiLCJtYWluTmF2YmFySXRlbSIsImh0bWxGb3IiLCJ0b0xvd2VyQ2FzZSIsInR5cGUiLCJuYW1lIiwidmFsdWUiLCJjaGVja2VkIiwiZm9vdGVyIiwiZm9vdGVyVGV4dCIsImZvb3RlckxpbmsiLCJmb290ZXJJY29uIiwiRGF0ZSIsImdldEZ1bGxZZWFyIiwiaHJlZiIsInRhcmdldCIsInJlbCIsInBhZ2VMb2FkIiwiY29udGVudCIsImdldEVsZW1lbnRCeUlkIiwiYWRkUHJvamVjdCIsImFkZFByb2plY3RCdG4iLCJhZGRFdmVudExpc3RlbmVyIiwiYWRkUHJvamVjdFBvcHVwIiwiYWRkUHJvamVjdEZvcm0iLCJwcm9qZWN0VGl0bGUiLCJwcm9qZWN0RGVzY3JpcHRpb24iLCJjb25maXJtQnRuIiwiY2FuY2VsQnRuIiwicGxhY2Vob2xkZXIiLCJyZXF1aXJlZCIsIm9uc3VibWl0IiwiZSIsInByZXZlbnREZWZhdWx0IiwicmVtb3ZlIiwidGFza0xpc3QiLCJ0YXNrTGlzdENvbXBvbmVudCIsImFkZFByb2plY3RCdG5Db21wb25lbnQiLCJyZW5kZXJQZW5kaW5nQ29tcG9uZW50IiwicGVuZGluZ1Byb2plY3RzIiwicmVmcmVzaFByb2plY3RMaXN0IiwicHJvamVjdEFyciIsImNsZWFyUHJvamVjdExpc3QiLCJhY3RpdmVUYWIiLCJxdWVyeVNlbGVjdG9yIiwibmV3UHJvamVjdExpc3QiLCJyZWZyZXNoVGFza0xpc3QiLCJwcm9qZWN0T2JqIiwiY2xlYXJUYXNrTGlzdCIsIm5ld1Rhc2tMaXN0IiwicHJvamVjdEVsZW1lbnQiLCJhZGRUYXNrIiwiY29tcGxldGVQcm9qZWN0IiwiY29tcGxldGVUYXNrIiwiZGVsZXRlSWNvbiIsImV4cGFuZEljb25Nb3JlIiwiZXhwYW5kSWNvbkxlc3MiLCJkZWxldGVUYXNrIiwiZGVsZXRlUHJvamVjdCIsInNvcnRUYXNrQnlEYXRlIiwic29ydEFyckJ5UHJpb3JpdHkiLCJzd2FwUHJvamVjdCIsImkiLCJsZW5ndGgiLCJwcm9qZWN0Q29tcG9uZW50IiwicHJvamVjdCIsImluZGV4IiwicHJvamVjdENoZWNrYm94IiwicHJvamVjdEV4cGFuZEJ0biIsInByb2plY3RFeHBhbmRCdG5UZXh0IiwicHJvamVjdERlbGV0ZUJ0biIsInByb2plY3REZWxldGVCdG5UZXh0IiwicHJvamVjdEV4cGFuZEljb24iLCJwcm9qZWN0RGVsZXRlSWNvbiIsInNvcnRUYXNrQ29tcG9uZW50Iiwic29ydENvbXBvbmVudCIsImFkZFRhc2tCdG5Db21wb25lbnQiLCJhZGRUYXNrQnRuIiwicHJvamVjdFRhc2tMaXN0IiwiY29tcGxldGVkIiwic3R5bGUiLCJiYWNrZ3JvdW5kSW1hZ2UiLCJnZXRPYmpDb2xvciIsImRyYWdnYWJsZSIsImRhdGFUcmFuc2ZlciIsInNldERhdGEiLCJwcmlvcml0eSIsIm9wYWNpdHkiLCJkcmFnZ2VkUHJvamVjdFByaW9yaXR5IiwiZ2V0RGF0YSIsImRhdGFzZXQiLCJkaXNhYmxlZCIsInRpdGxlIiwic3BlbGxjaGVjayIsImRlc2NyaXB0aW9uIiwic3JjIiwidGFza0FyciIsInRhc2tzIiwidGFza0NvbXBvbmVudCIsInRhc2siLCJ0YXNrSW5kZXgiLCJ0YXNrT2JqIiwidGFza0NoZWNrYm94IiwidGFza1RpdGxlIiwidGFza0Rlc2NyaXB0aW9uIiwidGFza0RhdGUiLCJ0YXNrRXhwYW5kQnRuIiwidGFza0V4cGFuZEJ0blRleHQiLCJ0YXNrRGVsZXRlQnRuIiwidGFza0RlbGV0ZUJ0blRleHQiLCJ0YXNrRXhwYW5kSWNvbiIsInRhc2tEZWxldGVJY29uIiwiZHVlRGF0ZSIsImFkZFRhc2tQb3B1cCIsImFkZFRhc2tGb3JtIiwib25jbGljayIsInNvcnRUYXNrV3JhcHBlciIsInNvcnRUYXNrQnlQcmlvcml0eUxhYmVsIiwic29ydFRhc2tCeVByaW9yaXR5QnRuIiwic29ydFRhc2tCeURhdGVMYWJlbCIsInNvcnRUYXNrQnlEYXRlQnRuIiwib2JqQXJyIiwib2JqIiwib2JqUHJpb3JpdHkiLCJub3JtYWxpemVkUHJpb3JpdHkiLCJyZWQiLCJNYXRoIiwicm91bmQiLCJncmVlbiIsInJlbmRlckFyY2hpdmVDb21wb25lbnQiLCJmYXZpY29uTGluayIsImdldFBlbmRpbmdQcm9qZWN0cyIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJKU09OIiwicGFyc2UiLCJnZXRDb21wbGV0ZWRQcm9qZWN0cyIsInNhdmVQZW5kaW5nUHJvamVjdHMiLCJzZXRJdGVtIiwic3RyaW5naWZ5Iiwic2F2ZUNvbXBsZXRlZFByb2plY3RzIiwic2F2ZVByb2plY3RzIiwid2luZG93IiwiZ2V0UHJvamVjdEZyb21JbnB1dCIsImZvcm0iLCJlbGVtZW50cyIsIm5vdyIsIm5ld1Byb2plY3QiLCJwdXNoIiwicHJvamVjdEluZGV4IiwiZGlzcGxheU1vZGUiLCJnZXREaXNwbGF5TW9kZSIsIndvcmtBcnIiLCJzcGxpY2UiLCJyZXNldFByaW9yaXR5IiwiZmluZEluZGV4IiwicHJpb3JpdHkxIiwicHJpb3JpdHkyIiwidGVtcCIsImdldFRhc2tGcm9tSW5wdXQiLCJuZXdUYXNrIiwiZ2V0U29ydE1vZGUiLCJzb3J0IiwiYSIsImIiLCJhRGF0ZSIsImJEYXRlIiwiYXJyIiwiZWxlbWVudCIsInNvcnRCdG5zIiwiZ2V0RWxlbWVudHNCeU5hbWUiLCJzb3J0TW9kZSIsImJ0biIsImNyZWF0ZUZhdmljb24iLCJpY29uTGluayIsImhlYWQiLCJwdXJnZUFjdGl2ZVRhYiIsImNoaWxkcmVuIiwicmVtb3ZlQ2hpbGQiLCJsYXN0Q2hpbGQiLCJ0YWJCdG5zIiwidGFiU3dpdGNoIiwic3RhcnRBcHAiXSwic291cmNlUm9vdCI6IiJ9