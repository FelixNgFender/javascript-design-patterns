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
/*!***********************************************!*\
  !*** ./restaurant/src/components/pageLoad.js ***!
  \***********************************************/
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
  headerTitle.textContent = "Seishun Buta Yarou Restaurant";
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
  const mainNavbarItems = ["Home", "Menu", "Contact"];
  main.classList.add("main");
  main.id = "main";
  mainNavbar.classList.add("main-navbar");
  mainNavbarItems.forEach((item) => {
    const mainNavbarItem = document.createElement("button");
    mainNavbarItem.classList.add("main-navbar-item");
    mainNavbarItem.textContent = item;
    mainNavbar.appendChild(mainNavbarItem);
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
function pageLoad() {
  const content = document.getElementById("content");
  content.appendChild(header());
  content.appendChild(main());
  content.appendChild(footer());
}
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZUxvYWQuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7O1VBQUE7VUFDQTs7Ozs7V0NEQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7O0FDTkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFYTs7QUFFYjtBQUNBO0FBQ0EsWUFBWSxhQUFhO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxZQUFZLGFBQWE7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxZQUFZLGFBQWE7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQTtBQUNlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vamF2YXNjcmlwdC1kZXNpZ24tcGF0dGVybnMvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdC1kZXNpZ24tcGF0dGVybnMvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2phdmFzY3JpcHQtZGVzaWduLXBhdHRlcm5zL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdC1kZXNpZ24tcGF0dGVybnMvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LWRlc2lnbi1wYXR0ZXJucy8uL3Jlc3RhdXJhbnQvc3JjL2NvbXBvbmVudHMvcGFnZUxvYWQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gVGhlIHJlcXVpcmUgc2NvcGVcbnZhciBfX3dlYnBhY2tfcmVxdWlyZV9fID0ge307XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIvKipcbiAqIEBmaWxlb3ZlcnZpZXcgSW5pdGlhbGl6ZSBwYWdlIGxvYWRcbiAqIEBhdXRob3IgVGhpbmggTmd1eWVuXG4gKiBAdmVyc2lvbiAxLjAuMFxuICovXG5cblwidXNlIHN0cmljdFwiO1xuXG4vKipcbiAqIENyZWF0ZSB0aGUgaGVhZGVyIGNvbXBvbmVudC5cbiAqIEByZXR1cm4ge0hUTUxFbGVtZW50fSBIZWFkZXIgZWxlbWVudFxuICovXG5mdW5jdGlvbiBoZWFkZXIoKSB7XG4gIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoZWFkZXJcIik7XG4gIGNvbnN0IGhlYWRlckNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IGhlYWRlclRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xuICBoZWFkZXIuY2xhc3NMaXN0LmFkZChcImhlYWRlclwiKTtcbiAgaGVhZGVyQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJoZWFkZXItY29udGFpbmVyXCIpO1xuICBoZWFkZXJUaXRsZS5jbGFzc0xpc3QuYWRkKFwiaGVhZGVyLXRpdGxlXCIpO1xuICBoZWFkZXJUaXRsZS50ZXh0Q29udGVudCA9IFwiU2Vpc2h1biBCdXRhIFlhcm91IFJlc3RhdXJhbnRcIjtcbiAgaGVhZGVyQ29udGFpbmVyLmFwcGVuZENoaWxkKGhlYWRlclRpdGxlKTtcbiAgaGVhZGVyLmFwcGVuZENoaWxkKGhlYWRlckNvbnRhaW5lcik7XG4gIHJldHVybiBoZWFkZXI7XG59XG5cbi8qKlxuICogQ3JlYXRlIHRoZSBtYWluIGNvbXBvbmVudC5cbiAqIEByZXR1cm4ge0hUTUxFbGVtZW50fSBNYWluIGVsZW1lbnRcbiAqL1xuZnVuY3Rpb24gbWFpbigpIHtcbiAgY29uc3QgbWFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJtYWluXCIpO1xuICBjb25zdCBtYWluTmF2YmFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm5hdlwiKTtcbiAgY29uc3QgbWFpbk5hdmJhckl0ZW1zID0gW1wiSG9tZVwiLCBcIk1lbnVcIiwgXCJDb250YWN0XCJdO1xuICBtYWluLmNsYXNzTGlzdC5hZGQoXCJtYWluXCIpO1xuICBtYWluLmlkID0gXCJtYWluXCI7XG4gIG1haW5OYXZiYXIuY2xhc3NMaXN0LmFkZChcIm1haW4tbmF2YmFyXCIpO1xuICBtYWluTmF2YmFySXRlbXMuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgIGNvbnN0IG1haW5OYXZiYXJJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBtYWluTmF2YmFySXRlbS5jbGFzc0xpc3QuYWRkKFwibWFpbi1uYXZiYXItaXRlbVwiKTtcbiAgICBtYWluTmF2YmFySXRlbS50ZXh0Q29udGVudCA9IGl0ZW07XG4gICAgbWFpbk5hdmJhci5hcHBlbmRDaGlsZChtYWluTmF2YmFySXRlbSk7XG4gIH0pO1xuICBtYWluLmFwcGVuZENoaWxkKG1haW5OYXZiYXIpO1xuICByZXR1cm4gbWFpbjtcbn1cblxuLyoqXG4gKiBDcmVhdGUgdGhlIGZvb3RlciBjb21wb25lbnQuXG4gKiBAcmV0dXJuIHtIVE1MRWxlbWVudH0gRm9vdGVyIGVsZW1lbnRcbiAqL1xuZnVuY3Rpb24gZm9vdGVyKCkge1xuICBjb25zdCBmb290ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZm9vdGVyXCIpO1xuICBjb25zdCBmb290ZXJUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIGNvbnN0IGZvb3RlckxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcbiAgY29uc3QgZm9vdGVySWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpXCIpO1xuICBmb290ZXIuY2xhc3NMaXN0LmFkZChcImZvb3RlclwiKTtcbiAgZm9vdGVySWNvbi5jbGFzc0xpc3QuYWRkKFwiZmFiXCIsIFwiZmEtZ2l0aHViXCIpO1xuICBmb290ZXJUZXh0LnRleHRDb250ZW50ID1cbiAgICBcIkNvcHlyaWdodCDCqSBcIiArIG5ldyBEYXRlKCkuZ2V0RnVsbFllYXIoKSArIFwiIEZlbGl4TmdGZW5kZXJcIjtcbiAgZm9vdGVyTGluay5ocmVmID0gXCJodHRwczovL2dpdGh1Yi5jb20vRmVsaXhOZ0ZlbmRlclwiO1xuICBmb290ZXJMaW5rLnRhcmdldCA9IFwiX2JsYW5rXCI7XG4gIGZvb3RlckxpbmsucmVsID0gXCJub29wZW5lciBub3JlZmVycmVyXCI7XG4gIGZvb3RlckxpbmsuYXBwZW5kQ2hpbGQoZm9vdGVySWNvbik7XG4gIGZvb3Rlci5hcHBlbmRDaGlsZChmb290ZXJUZXh0KTtcbiAgZm9vdGVyLmFwcGVuZENoaWxkKGZvb3RlckxpbmspO1xuICByZXR1cm4gZm9vdGVyO1xufVxuXG4vKipcbiAqIEluaXRpYWxpemUgcGFnZSBsb2FkLlxuICogQHJldHVybiB7dm9pZH1cbiAqIEBleHBvcnRcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcGFnZUxvYWQoKSB7XG4gIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbnRlbnRcIik7XG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQoaGVhZGVyKCkpO1xuICBjb250ZW50LmFwcGVuZENoaWxkKG1haW4oKSk7XG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQoZm9vdGVyKCkpO1xufSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==