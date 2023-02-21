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
  !*** ./restaurant/src/components/contact.js ***!
  \**********************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ contact)
/* harmony export */ });
/**
 * @fileoverview Contact tab module
 * @author Thinh Nguyen
 * @version 1.0.0
 */



/**
 * Create the contact component.
 * @return {HTMLElement} Contact component
 */
function contact() {
  const contact = document.createElement("div");
  const contactAddress = document.createElement("p");
  const contactPhone = document.createElement("p");
  const contactEmail = document.createElement("p");
  const contactHours = document.createElement("p");
  const contactOmotenashi = document.createElement("p");
  contact.classList.add("main-contact");
  contactAddress.classList.add("main-contact-address");
  contactPhone.classList.add("main-contact-phone");
  contactEmail.classList.add("main-contact-email");
  contactHours.classList.add("main-contact-hours");
  contactOmotenashi.classList.add("main-contact-omotenashi");
  contactAddress.textContent =
    "Address: 1234 Sakura Street Shibuya-ku, Tokyo 150-0042 Japan";
  contactPhone.textContent = "Phone: +81-3-1234-5678";
  contactEmail.textContent = "Email: info@bennysanimefood.com";
  contactHours.textContent =
    "Hours of Operation: Monday - Friday: 11:00 AM - 9:00 PM | Saturday - Sunday: 10:00 AM - 10:00 PM";
  contactOmotenashi.textContent =
    "We hope to hear from you soon and look forward to serving you at Benny's!";
  contact.appendChild(contactAddress);
  contact.appendChild(contactPhone);
  contact.appendChild(contactEmail);
  contact.appendChild(contactHours);
  contact.appendChild(contactOmotenashi);
  return contact;
}

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGFjdC5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7VUFBQTtVQUNBOzs7OztXQ0RBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7QUNOQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVhOztBQUViO0FBQ0E7QUFDQSxZQUFZLGFBQWE7QUFDekI7QUFDZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2phdmFzY3JpcHQtZGVzaWduLXBhdHRlcm5zL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2phdmFzY3JpcHQtZGVzaWduLXBhdHRlcm5zL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LWRlc2lnbi1wYXR0ZXJucy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2phdmFzY3JpcHQtZGVzaWduLXBhdHRlcm5zL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdC1kZXNpZ24tcGF0dGVybnMvLi9yZXN0YXVyYW50L3NyYy9jb21wb25lbnRzL2NvbnRhY3QuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gVGhlIHJlcXVpcmUgc2NvcGVcbnZhciBfX3dlYnBhY2tfcmVxdWlyZV9fID0ge307XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIvKipcbiAqIEBmaWxlb3ZlcnZpZXcgQ29udGFjdCB0YWIgbW9kdWxlXG4gKiBAYXV0aG9yIFRoaW5oIE5ndXllblxuICogQHZlcnNpb24gMS4wLjBcbiAqL1xuXG5cInVzZSBzdHJpY3RcIjtcblxuLyoqXG4gKiBDcmVhdGUgdGhlIGNvbnRhY3QgY29tcG9uZW50LlxuICogQHJldHVybiB7SFRNTEVsZW1lbnR9IENvbnRhY3QgY29tcG9uZW50XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNvbnRhY3QoKSB7XG4gIGNvbnN0IGNvbnRhY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBjb250YWN0QWRkcmVzcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICBjb25zdCBjb250YWN0UGhvbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgY29uc3QgY29udGFjdEVtYWlsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIGNvbnN0IGNvbnRhY3RIb3VycyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICBjb25zdCBjb250YWN0T21vdGVuYXNoaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICBjb250YWN0LmNsYXNzTGlzdC5hZGQoXCJtYWluLWNvbnRhY3RcIik7XG4gIGNvbnRhY3RBZGRyZXNzLmNsYXNzTGlzdC5hZGQoXCJtYWluLWNvbnRhY3QtYWRkcmVzc1wiKTtcbiAgY29udGFjdFBob25lLmNsYXNzTGlzdC5hZGQoXCJtYWluLWNvbnRhY3QtcGhvbmVcIik7XG4gIGNvbnRhY3RFbWFpbC5jbGFzc0xpc3QuYWRkKFwibWFpbi1jb250YWN0LWVtYWlsXCIpO1xuICBjb250YWN0SG91cnMuY2xhc3NMaXN0LmFkZChcIm1haW4tY29udGFjdC1ob3Vyc1wiKTtcbiAgY29udGFjdE9tb3RlbmFzaGkuY2xhc3NMaXN0LmFkZChcIm1haW4tY29udGFjdC1vbW90ZW5hc2hpXCIpO1xuICBjb250YWN0QWRkcmVzcy50ZXh0Q29udGVudCA9XG4gICAgXCJBZGRyZXNzOiAxMjM0IFNha3VyYSBTdHJlZXQgU2hpYnV5YS1rdSwgVG9reW8gMTUwLTAwNDIgSmFwYW5cIjtcbiAgY29udGFjdFBob25lLnRleHRDb250ZW50ID0gXCJQaG9uZTogKzgxLTMtMTIzNC01Njc4XCI7XG4gIGNvbnRhY3RFbWFpbC50ZXh0Q29udGVudCA9IFwiRW1haWw6IGluZm9AYmVubnlzYW5pbWVmb29kLmNvbVwiO1xuICBjb250YWN0SG91cnMudGV4dENvbnRlbnQgPVxuICAgIFwiSG91cnMgb2YgT3BlcmF0aW9uOiBNb25kYXkgLSBGcmlkYXk6IDExOjAwIEFNIC0gOTowMCBQTSB8IFNhdHVyZGF5IC0gU3VuZGF5OiAxMDowMCBBTSAtIDEwOjAwIFBNXCI7XG4gIGNvbnRhY3RPbW90ZW5hc2hpLnRleHRDb250ZW50ID1cbiAgICBcIldlIGhvcGUgdG8gaGVhciBmcm9tIHlvdSBzb29uIGFuZCBsb29rIGZvcndhcmQgdG8gc2VydmluZyB5b3UgYXQgQmVubnkncyFcIjtcbiAgY29udGFjdC5hcHBlbmRDaGlsZChjb250YWN0QWRkcmVzcyk7XG4gIGNvbnRhY3QuYXBwZW5kQ2hpbGQoY29udGFjdFBob25lKTtcbiAgY29udGFjdC5hcHBlbmRDaGlsZChjb250YWN0RW1haWwpO1xuICBjb250YWN0LmFwcGVuZENoaWxkKGNvbnRhY3RIb3Vycyk7XG4gIGNvbnRhY3QuYXBwZW5kQ2hpbGQoY29udGFjdE9tb3RlbmFzaGkpO1xuICByZXR1cm4gY29udGFjdDtcbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==