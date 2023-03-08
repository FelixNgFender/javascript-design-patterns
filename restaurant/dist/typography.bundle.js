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
/*!*************************************************!*\
  !*** ./restaurant/src/components/typography.js ***!
  \*************************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "decorateText": () => (/* binding */ decorateText)
/* harmony export */ });
/**
 * @fileoverview Typography module
 * @author Thinh Nguyen
 * @version 1.0.0
 */



/**
 * Decorate text to alternate between main and accent color by placing each character in a span and sets a class to it.
 * @param {string} text - Text to decorate
 * @export
 * @return {HTMLElement} - A wrapper div containing the spans containing the characters.
 */
function decorateText(text) {
  const wrapper = document.createElement("div");
  const textArray = text.split("");
  let i = 0;
  textArray.forEach(char => {
    const span = document.createElement("span");
    span.textContent = char;
    wrapper.appendChild(span);
    if (char === " ") {
      return;
    } else if (i % 2 === 0) {
      span.classList.add("decorated-main");
      i++;
    } else {
      span.classList.add("decorated-accent");
      i++;
    }
  });
  return wrapper;
}
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHlwb2dyYXBoeS5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7VUFBQTtVQUNBOzs7OztXQ0RBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7QUNOQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPLFNBQVNBLFlBQVlBLENBQUNDLElBQUksRUFBRTtFQUNqQyxNQUFNQyxPQUFPLEdBQUdDLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLEtBQUssQ0FBQztFQUM3QyxNQUFNQyxTQUFTLEdBQUdKLElBQUksQ0FBQ0ssS0FBSyxDQUFDLEVBQUUsQ0FBQztFQUNoQyxJQUFJQyxDQUFDLEdBQUcsQ0FBQztFQUNURixTQUFTLENBQUNHLE9BQU8sQ0FBRUMsSUFBSSxJQUFLO0lBQzFCLE1BQU1DLElBQUksR0FBR1AsUUFBUSxDQUFDQyxhQUFhLENBQUMsTUFBTSxDQUFDO0lBQzNDTSxJQUFJLENBQUNDLFdBQVcsR0FBR0YsSUFBSTtJQUN2QlAsT0FBTyxDQUFDVSxXQUFXLENBQUNGLElBQUksQ0FBQztJQUN6QixJQUFJRCxJQUFJLEtBQUssR0FBRyxFQUFFO01BQ2Q7SUFDSixDQUFDLE1BQU0sSUFBSUYsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLEVBQUU7TUFDdEJHLElBQUksQ0FBQ0csU0FBUyxDQUFDQyxHQUFHLENBQUMsZ0JBQWdCLENBQUM7TUFDcENQLENBQUMsRUFBRTtJQUNMLENBQUMsTUFBTTtNQUNMRyxJQUFJLENBQUNHLFNBQVMsQ0FBQ0MsR0FBRyxDQUFDLGtCQUFrQixDQUFDO01BQ3RDUCxDQUFDLEVBQUU7SUFDTDtFQUNGLENBQUMsQ0FBQztFQUNGLE9BQU9MLE9BQU87QUFDaEIsQyIsInNvdXJjZXMiOlsid2VicGFjazovL2phdmFzY3JpcHQtZGVzaWduLXBhdHRlcm5zL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2phdmFzY3JpcHQtZGVzaWduLXBhdHRlcm5zL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LWRlc2lnbi1wYXR0ZXJucy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2phdmFzY3JpcHQtZGVzaWduLXBhdHRlcm5zL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdC1kZXNpZ24tcGF0dGVybnMvLi9yZXN0YXVyYW50L3NyYy9jb21wb25lbnRzL3R5cG9ncmFwaHkuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gVGhlIHJlcXVpcmUgc2NvcGVcbnZhciBfX3dlYnBhY2tfcmVxdWlyZV9fID0ge307XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIvKipcbiAqIEBmaWxlb3ZlcnZpZXcgVHlwb2dyYXBoeSBtb2R1bGVcbiAqIEBhdXRob3IgVGhpbmggTmd1eWVuXG4gKiBAdmVyc2lvbiAxLjAuMFxuICovXG5cblwidXNlIHN0cmljdFwiO1xuXG4vKipcbiAqIERlY29yYXRlIHRleHQgdG8gYWx0ZXJuYXRlIGJldHdlZW4gbWFpbiBhbmQgYWNjZW50IGNvbG9yIGJ5IHBsYWNpbmcgZWFjaCBjaGFyYWN0ZXIgaW4gYSBzcGFuIGFuZCBzZXRzIGEgY2xhc3MgdG8gaXQuXG4gKiBAcGFyYW0ge3N0cmluZ30gdGV4dCAtIFRleHQgdG8gZGVjb3JhdGVcbiAqIEBleHBvcnRcbiAqIEByZXR1cm4ge0hUTUxFbGVtZW50fSAtIEEgd3JhcHBlciBkaXYgY29udGFpbmluZyB0aGUgc3BhbnMgY29udGFpbmluZyB0aGUgY2hhcmFjdGVycy5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGRlY29yYXRlVGV4dCh0ZXh0KSB7XG4gIGNvbnN0IHdyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCB0ZXh0QXJyYXkgPSB0ZXh0LnNwbGl0KFwiXCIpO1xuICBsZXQgaSA9IDA7XG4gIHRleHRBcnJheS5mb3JFYWNoKChjaGFyKSA9PiB7XG4gICAgY29uc3Qgc3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICAgIHNwYW4udGV4dENvbnRlbnQgPSBjaGFyO1xuICAgIHdyYXBwZXIuYXBwZW5kQ2hpbGQoc3Bhbik7XG4gICAgaWYgKGNoYXIgPT09IFwiIFwiKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9IGVsc2UgaWYgKGkgJSAyID09PSAwKSB7XG4gICAgICBzcGFuLmNsYXNzTGlzdC5hZGQoXCJkZWNvcmF0ZWQtbWFpblwiKTtcbiAgICAgIGkrKztcbiAgICB9IGVsc2Uge1xuICAgICAgc3Bhbi5jbGFzc0xpc3QuYWRkKFwiZGVjb3JhdGVkLWFjY2VudFwiKTtcbiAgICAgIGkrKztcbiAgICB9XG4gIH0pO1xuICByZXR1cm4gd3JhcHBlcjtcbn1cbiJdLCJuYW1lcyI6WyJkZWNvcmF0ZVRleHQiLCJ0ZXh0Iiwid3JhcHBlciIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsInRleHRBcnJheSIsInNwbGl0IiwiaSIsImZvckVhY2giLCJjaGFyIiwic3BhbiIsInRleHRDb250ZW50IiwiYXBwZW5kQ2hpbGQiLCJjbGFzc0xpc3QiLCJhZGQiXSwic291cmNlUm9vdCI6IiJ9