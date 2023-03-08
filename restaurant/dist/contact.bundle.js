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
  contactAddress.textContent = "Address: 1234 Sakura Street Shibuya-ku, Tokyo 150-0042 Japan";
  contactPhone.textContent = "Phone: +81-3-1234-5678";
  contactEmail.textContent = "Email: info@bennysanimefood.com";
  contactHours.textContent = "Hours of Operation: Monday - Friday: 11:00 AM - 9:00 PM | Saturday - Sunday: 10:00 AM - 10:00 PM";
  contactOmotenashi.textContent = "We hope to hear from you soon and look forward to serving you at Benny's!";
  contact.appendChild(contactAddress);
  contact.appendChild(contactPhone);
  contact.appendChild(contactEmail);
  contact.appendChild(contactHours);
  contact.appendChild(contactOmotenashi);
  return contact;
}
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGFjdC5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7VUFBQTtVQUNBOzs7OztXQ0RBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7QUNOQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ2UsU0FBU0EsT0FBT0EsQ0FBQSxFQUFHO0VBQ2hDLE1BQU1BLE9BQU8sR0FBR0MsUUFBUSxDQUFDQyxhQUFhLENBQUMsS0FBSyxDQUFDO0VBQzdDLE1BQU1DLGNBQWMsR0FBR0YsUUFBUSxDQUFDQyxhQUFhLENBQUMsR0FBRyxDQUFDO0VBQ2xELE1BQU1FLFlBQVksR0FBR0gsUUFBUSxDQUFDQyxhQUFhLENBQUMsR0FBRyxDQUFDO0VBQ2hELE1BQU1HLFlBQVksR0FBR0osUUFBUSxDQUFDQyxhQUFhLENBQUMsR0FBRyxDQUFDO0VBQ2hELE1BQU1JLFlBQVksR0FBR0wsUUFBUSxDQUFDQyxhQUFhLENBQUMsR0FBRyxDQUFDO0VBQ2hELE1BQU1LLGlCQUFpQixHQUFHTixRQUFRLENBQUNDLGFBQWEsQ0FBQyxHQUFHLENBQUM7RUFDckRGLE9BQU8sQ0FBQ1EsU0FBUyxDQUFDQyxHQUFHLENBQUMsY0FBYyxDQUFDO0VBQ3JDTixjQUFjLENBQUNLLFNBQVMsQ0FBQ0MsR0FBRyxDQUFDLHNCQUFzQixDQUFDO0VBQ3BETCxZQUFZLENBQUNJLFNBQVMsQ0FBQ0MsR0FBRyxDQUFDLG9CQUFvQixDQUFDO0VBQ2hESixZQUFZLENBQUNHLFNBQVMsQ0FBQ0MsR0FBRyxDQUFDLG9CQUFvQixDQUFDO0VBQ2hESCxZQUFZLENBQUNFLFNBQVMsQ0FBQ0MsR0FBRyxDQUFDLG9CQUFvQixDQUFDO0VBQ2hERixpQkFBaUIsQ0FBQ0MsU0FBUyxDQUFDQyxHQUFHLENBQUMseUJBQXlCLENBQUM7RUFDMUROLGNBQWMsQ0FBQ08sV0FBVyxHQUN4Qiw4REFBOEQ7RUFDaEVOLFlBQVksQ0FBQ00sV0FBVyxHQUFHLHdCQUF3QjtFQUNuREwsWUFBWSxDQUFDSyxXQUFXLEdBQUcsaUNBQWlDO0VBQzVESixZQUFZLENBQUNJLFdBQVcsR0FDdEIsa0dBQWtHO0VBQ3BHSCxpQkFBaUIsQ0FBQ0csV0FBVyxHQUMzQiwyRUFBMkU7RUFDN0VWLE9BQU8sQ0FBQ1csV0FBVyxDQUFDUixjQUFjLENBQUM7RUFDbkNILE9BQU8sQ0FBQ1csV0FBVyxDQUFDUCxZQUFZLENBQUM7RUFDakNKLE9BQU8sQ0FBQ1csV0FBVyxDQUFDTixZQUFZLENBQUM7RUFDakNMLE9BQU8sQ0FBQ1csV0FBVyxDQUFDTCxZQUFZLENBQUM7RUFDakNOLE9BQU8sQ0FBQ1csV0FBVyxDQUFDSixpQkFBaUIsQ0FBQztFQUN0QyxPQUFPUCxPQUFPO0FBQ2hCLEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qYXZhc2NyaXB0LWRlc2lnbi1wYXR0ZXJucy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LWRlc2lnbi1wYXR0ZXJucy93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdC1kZXNpZ24tcGF0dGVybnMvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LWRlc2lnbi1wYXR0ZXJucy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2phdmFzY3JpcHQtZGVzaWduLXBhdHRlcm5zLy4vcmVzdGF1cmFudC9zcmMvY29tcG9uZW50cy9jb250YWN0LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIFRoZSByZXF1aXJlIHNjb3BlXG52YXIgX193ZWJwYWNrX3JlcXVpcmVfXyA9IHt9O1xuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiLyoqXG4gKiBAZmlsZW92ZXJ2aWV3IENvbnRhY3QgdGFiIG1vZHVsZVxuICogQGF1dGhvciBUaGluaCBOZ3V5ZW5cbiAqIEB2ZXJzaW9uIDEuMC4wXG4gKi9cblxuXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qKlxuICogQ3JlYXRlIHRoZSBjb250YWN0IGNvbXBvbmVudC5cbiAqIEByZXR1cm4ge0hUTUxFbGVtZW50fSBDb250YWN0IGNvbXBvbmVudFxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjb250YWN0KCkge1xuICBjb25zdCBjb250YWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgY29udGFjdEFkZHJlc3MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgY29uc3QgY29udGFjdFBob25lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIGNvbnN0IGNvbnRhY3RFbWFpbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICBjb25zdCBjb250YWN0SG91cnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgY29uc3QgY29udGFjdE9tb3RlbmFzaGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgY29udGFjdC5jbGFzc0xpc3QuYWRkKFwibWFpbi1jb250YWN0XCIpO1xuICBjb250YWN0QWRkcmVzcy5jbGFzc0xpc3QuYWRkKFwibWFpbi1jb250YWN0LWFkZHJlc3NcIik7XG4gIGNvbnRhY3RQaG9uZS5jbGFzc0xpc3QuYWRkKFwibWFpbi1jb250YWN0LXBob25lXCIpO1xuICBjb250YWN0RW1haWwuY2xhc3NMaXN0LmFkZChcIm1haW4tY29udGFjdC1lbWFpbFwiKTtcbiAgY29udGFjdEhvdXJzLmNsYXNzTGlzdC5hZGQoXCJtYWluLWNvbnRhY3QtaG91cnNcIik7XG4gIGNvbnRhY3RPbW90ZW5hc2hpLmNsYXNzTGlzdC5hZGQoXCJtYWluLWNvbnRhY3Qtb21vdGVuYXNoaVwiKTtcbiAgY29udGFjdEFkZHJlc3MudGV4dENvbnRlbnQgPVxuICAgIFwiQWRkcmVzczogMTIzNCBTYWt1cmEgU3RyZWV0IFNoaWJ1eWEta3UsIFRva3lvIDE1MC0wMDQyIEphcGFuXCI7XG4gIGNvbnRhY3RQaG9uZS50ZXh0Q29udGVudCA9IFwiUGhvbmU6ICs4MS0zLTEyMzQtNTY3OFwiO1xuICBjb250YWN0RW1haWwudGV4dENvbnRlbnQgPSBcIkVtYWlsOiBpbmZvQGJlbm55c2FuaW1lZm9vZC5jb21cIjtcbiAgY29udGFjdEhvdXJzLnRleHRDb250ZW50ID1cbiAgICBcIkhvdXJzIG9mIE9wZXJhdGlvbjogTW9uZGF5IC0gRnJpZGF5OiAxMTowMCBBTSAtIDk6MDAgUE0gfCBTYXR1cmRheSAtIFN1bmRheTogMTA6MDAgQU0gLSAxMDowMCBQTVwiO1xuICBjb250YWN0T21vdGVuYXNoaS50ZXh0Q29udGVudCA9XG4gICAgXCJXZSBob3BlIHRvIGhlYXIgZnJvbSB5b3Ugc29vbiBhbmQgbG9vayBmb3J3YXJkIHRvIHNlcnZpbmcgeW91IGF0IEJlbm55J3MhXCI7XG4gIGNvbnRhY3QuYXBwZW5kQ2hpbGQoY29udGFjdEFkZHJlc3MpO1xuICBjb250YWN0LmFwcGVuZENoaWxkKGNvbnRhY3RQaG9uZSk7XG4gIGNvbnRhY3QuYXBwZW5kQ2hpbGQoY29udGFjdEVtYWlsKTtcbiAgY29udGFjdC5hcHBlbmRDaGlsZChjb250YWN0SG91cnMpO1xuICBjb250YWN0LmFwcGVuZENoaWxkKGNvbnRhY3RPbW90ZW5hc2hpKTtcbiAgcmV0dXJuIGNvbnRhY3Q7XG59XG4iXSwibmFtZXMiOlsiY29udGFjdCIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsImNvbnRhY3RBZGRyZXNzIiwiY29udGFjdFBob25lIiwiY29udGFjdEVtYWlsIiwiY29udGFjdEhvdXJzIiwiY29udGFjdE9tb3RlbmFzaGkiLCJjbGFzc0xpc3QiLCJhZGQiLCJ0ZXh0Q29udGVudCIsImFwcGVuZENoaWxkIl0sInNvdXJjZVJvb3QiOiIifQ==