/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
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
/************************************************************************/
var __webpack_exports__ = {};
/*!**********************************************!*\
  !*** ./todo-list/src/components/pageLoad.js ***!
  \**********************************************/
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
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUMzQndCLE9BQU8sQ0FBQ3pCLFdBQVcsQ0FBQ2UsTUFBTSxFQUFFLENBQUM7QUFDL0IsQyIsInNvdXJjZXMiOlsid2VicGFjazovL2phdmFzY3JpcHQtZGVzaWduLXBhdHRlcm5zL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2phdmFzY3JpcHQtZGVzaWduLXBhdHRlcm5zL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LWRlc2lnbi1wYXR0ZXJucy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2phdmFzY3JpcHQtZGVzaWduLXBhdHRlcm5zL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdC1kZXNpZ24tcGF0dGVybnMvLi90b2RvLWxpc3Qvc3JjL2NvbXBvbmVudHMvcGFnZUxvYWQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gVGhlIHJlcXVpcmUgc2NvcGVcbnZhciBfX3dlYnBhY2tfcmVxdWlyZV9fID0ge307XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIvKipcbiAqIEBmaWxlb3ZlcnZpZXcgSW5pdGlhbGl6ZSBwYWdlIGxvYWRcbiAqIEBhdXRob3IgVGhpbmggTmd1eWVuXG4gKiBAdmVyc2lvbiAxLjAuMFxuICovXG5cblwidXNlIHN0cmljdFwiO1xuXG4vKipcbiAqIENyZWF0ZSB0aGUgaGVhZGVyIGNvbXBvbmVudC5cbiAqIEByZXR1cm4ge0hUTUxFbGVtZW50fSBIZWFkZXIgZWxlbWVudFxuICovXG5mdW5jdGlvbiBoZWFkZXIoKSB7XG4gIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoZWFkZXJcIik7XG4gIGNvbnN0IGhlYWRlckNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IGhlYWRlclRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xuICBoZWFkZXIuY2xhc3NMaXN0LmFkZChcImhlYWRlclwiKTtcbiAgaGVhZGVyQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJoZWFkZXItY29udGFpbmVyXCIpO1xuICBoZWFkZXJUaXRsZS5jbGFzc0xpc3QuYWRkKFwiaGVhZGVyLXRpdGxlXCIpO1xuICBoZWFkZXJUaXRsZS50ZXh0Q29udGVudCA9IFwiU3RhY2tUYXNrc1wiO1xuICBoZWFkZXJDb250YWluZXIuYXBwZW5kQ2hpbGQoaGVhZGVyVGl0bGUpO1xuICBoZWFkZXIuYXBwZW5kQ2hpbGQoaGVhZGVyQ29udGFpbmVyKTtcbiAgcmV0dXJuIGhlYWRlcjtcbn1cblxuLyoqXG4gKiBDcmVhdGUgdGhlIG1haW4gY29tcG9uZW50LlxuICogQHJldHVybiB7SFRNTEVsZW1lbnR9IE1haW4gZWxlbWVudFxuICovXG5mdW5jdGlvbiBtYWluKCkge1xuICBjb25zdCBtYWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm1haW5cIik7XG4gIGNvbnN0IG1haW5OYXZiYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibmF2XCIpO1xuICBjb25zdCBtYWluTmF2YmFySXRlbXMgPSBbXCJQZW5kaW5nXCIsIFwiQXJjaGl2ZVwiXTtcbiAgbWFpbi5jbGFzc0xpc3QuYWRkKFwibWFpblwiKTtcbiAgbWFpbi5pZCA9IFwibWFpblwiO1xuICBtYWluTmF2YmFyLmNsYXNzTGlzdC5hZGQoXCJtYWluLW5hdmJhclwiKTtcbiAgbWFpbk5hdmJhckl0ZW1zLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICBjb25zdCBtYWluTmF2YmFyTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gICAgY29uc3QgbWFpbk5hdmJhckl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgbWFpbk5hdmJhckxhYmVsLmNsYXNzTGlzdC5hZGQoXCJtYWluLW5hdmJhci1pdGVtTGFiZWxcIik7XG4gICAgbWFpbk5hdmJhckl0ZW0uY2xhc3NMaXN0LmFkZChcIm1haW4tbmF2YmFyLWl0ZW1cIik7XG4gICAgbWFpbk5hdmJhckxhYmVsLnRleHRDb250ZW50ID0gaXRlbTtcbiAgICBtYWluTmF2YmFyTGFiZWwuaHRtbEZvciA9IFwibWFpbi1uYXZiYXItXCIgKyBpdGVtLnRvTG93ZXJDYXNlKCk7XG4gICAgbWFpbk5hdmJhckl0ZW0udHlwZSA9IFwicmFkaW9cIjtcbiAgICBtYWluTmF2YmFySXRlbS5uYW1lID0gXCJtYWluLW5hdmJhclwiO1xuICAgIG1haW5OYXZiYXJJdGVtLnZhbHVlID0gaXRlbS50b0xvd2VyQ2FzZSgpO1xuICAgIG1haW5OYXZiYXJJdGVtLmlkID0gXCJtYWluLW5hdmJhci1cIiArIGl0ZW0udG9Mb3dlckNhc2UoKTtcbiAgICBtYWluTmF2YmFySXRlbS5jaGVja2VkID0gaXRlbSA9PT0gXCJQZW5kaW5nXCI7XG4gICAgbWFpbk5hdmJhci5hcHBlbmRDaGlsZChtYWluTmF2YmFySXRlbSk7XG4gICAgbWFpbk5hdmJhci5hcHBlbmRDaGlsZChtYWluTmF2YmFyTGFiZWwpO1xuICB9KTtcbiAgbWFpbi5hcHBlbmRDaGlsZChtYWluTmF2YmFyKTtcbiAgcmV0dXJuIG1haW47XG59XG5cbi8qKlxuICogQ3JlYXRlIHRoZSBmb290ZXIgY29tcG9uZW50LlxuICogQHJldHVybiB7SFRNTEVsZW1lbnR9IEZvb3RlciBlbGVtZW50XG4gKi9cbmZ1bmN0aW9uIGZvb3RlcigpIHtcbiAgY29uc3QgZm9vdGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZvb3RlclwiKTtcbiAgY29uc3QgZm9vdGVyVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICBjb25zdCBmb290ZXJMaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XG4gIGNvbnN0IGZvb3Rlckljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaVwiKTtcbiAgZm9vdGVyLmNsYXNzTGlzdC5hZGQoXCJmb290ZXJcIik7XG4gIGZvb3Rlckljb24uY2xhc3NMaXN0LmFkZChcImZhYlwiLCBcImZhLWdpdGh1YlwiKTtcbiAgZm9vdGVyVGV4dC50ZXh0Q29udGVudCA9XG4gICAgXCJDb3B5cmlnaHQgwqkgXCIgKyBuZXcgRGF0ZSgpLmdldEZ1bGxZZWFyKCkgKyBcIiBGZWxpeE5nRmVuZGVyXCI7XG4gIGZvb3RlckxpbmsuaHJlZiA9IFwiaHR0cHM6Ly9naXRodWIuY29tL0ZlbGl4TmdGZW5kZXJcIjtcbiAgZm9vdGVyTGluay50YXJnZXQgPSBcIl9ibGFua1wiO1xuICBmb290ZXJMaW5rLnJlbCA9IFwibm9vcGVuZXIgbm9yZWZlcnJlclwiO1xuICBmb290ZXJMaW5rLmFwcGVuZENoaWxkKGZvb3Rlckljb24pO1xuICBmb290ZXIuYXBwZW5kQ2hpbGQoZm9vdGVyVGV4dCk7XG4gIGZvb3Rlci5hcHBlbmRDaGlsZChmb290ZXJMaW5rKTtcbiAgcmV0dXJuIGZvb3Rlcjtcbn1cblxuLyoqXG4gKiBJbml0aWFsaXplIHBhZ2UgbG9hZC5cbiAqIEByZXR1cm4ge3ZvaWR9XG4gKiBAZXhwb3J0XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHBhZ2VMb2FkKCkge1xuICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb250ZW50XCIpO1xuICBjb250ZW50LmFwcGVuZENoaWxkKGhlYWRlcigpKTtcbiAgY29udGVudC5hcHBlbmRDaGlsZChtYWluKCkpO1xuICBjb250ZW50LmFwcGVuZENoaWxkKGZvb3RlcigpKTtcbn1cbiJdLCJuYW1lcyI6WyJoZWFkZXIiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJoZWFkZXJDb250YWluZXIiLCJoZWFkZXJUaXRsZSIsImNsYXNzTGlzdCIsImFkZCIsInRleHRDb250ZW50IiwiYXBwZW5kQ2hpbGQiLCJtYWluIiwibWFpbk5hdmJhciIsIm1haW5OYXZiYXJJdGVtcyIsImlkIiwiZm9yRWFjaCIsIml0ZW0iLCJtYWluTmF2YmFyTGFiZWwiLCJtYWluTmF2YmFySXRlbSIsImh0bWxGb3IiLCJ0b0xvd2VyQ2FzZSIsInR5cGUiLCJuYW1lIiwidmFsdWUiLCJjaGVja2VkIiwiZm9vdGVyIiwiZm9vdGVyVGV4dCIsImZvb3RlckxpbmsiLCJmb290ZXJJY29uIiwiRGF0ZSIsImdldEZ1bGxZZWFyIiwiaHJlZiIsInRhcmdldCIsInJlbCIsInBhZ2VMb2FkIiwiY29udGVudCIsImdldEVsZW1lbnRCeUlkIl0sInNvdXJjZVJvb3QiOiIifQ==