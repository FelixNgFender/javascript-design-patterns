/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./restaurant/src/components/typography.js":
/*!*************************************************!*\
  !*** ./restaurant/src/components/typography.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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
/******/ 			// no module.id needed
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
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*******************************************!*\
  !*** ./restaurant/src/components/home.js ***!
  \*******************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ home)
/* harmony export */ });
/* harmony import */ var _typography__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./typography */ "./restaurant/src/components/typography.js");
/**
 * @fileoverview Home tab module
 * @author Thinh Nguyen
 * @version 1.0.0
 */





/**
 * Create the home component.
 * @return {HTMLElement} Home component
 * @export
 */
function home() {
  const home = document.createElement("div");
  home.classList.add("main-home");
  const homeTitle = document.createElement("h2");
  homeTitle.classList.add("main-home-title");
  homeTitle.innerHTML = (0,_typography__WEBPACK_IMPORTED_MODULE_0__.decorateText)("Welcome to Benny's").innerHTML;
  home.appendChild(homeTitle);
  const homeDescription = document.createElement("p");
  homeDescription.classList.add("main-home-description");
  homeDescription.textContent = "A one-of-a-kind restaurant that brings the delectable flavors of your favorite animes to your plate. Situated in the bustling heart of Tokyo, Benny's is a culinary oasis that offers an eclectic menu of dishes inspired by various animes. From Howl Moving Castle's famous Calcifer's breakfast to the mouth-watering Gotcha Pork Roast from Shokugeki no Shouma, our chefs have painstakingly recreated the authentic flavors of these beloved shows. We pride ourselves on using only the freshest, high-quality ingredients to create each dish, and our menu is thoughtfully curated to cater to all dietary requirements. Our cozy and vibrant atmosphere provides the perfect setting to savor our delicious food with friends and family. Come and experience the magic of anime-inspired cuisine at Benny's.";
  home.appendChild(homeDescription);
  return home;
}
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPLFNBQVNBLFlBQVlBLENBQUNDLElBQUksRUFBRTtFQUNqQyxNQUFNQyxPQUFPLEdBQUdDLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLEtBQUssQ0FBQztFQUM3QyxNQUFNQyxTQUFTLEdBQUdKLElBQUksQ0FBQ0ssS0FBSyxDQUFDLEVBQUUsQ0FBQztFQUNoQyxJQUFJQyxDQUFDLEdBQUcsQ0FBQztFQUNURixTQUFTLENBQUNHLE9BQU8sQ0FBRUMsSUFBSSxJQUFLO0lBQzFCLE1BQU1DLElBQUksR0FBR1AsUUFBUSxDQUFDQyxhQUFhLENBQUMsTUFBTSxDQUFDO0lBQzNDTSxJQUFJLENBQUNDLFdBQVcsR0FBR0YsSUFBSTtJQUN2QlAsT0FBTyxDQUFDVSxXQUFXLENBQUNGLElBQUksQ0FBQztJQUN6QixJQUFJRCxJQUFJLEtBQUssR0FBRyxFQUFFO01BQ2Q7SUFDSixDQUFDLE1BQU0sSUFBSUYsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLEVBQUU7TUFDdEJHLElBQUksQ0FBQ0csU0FBUyxDQUFDQyxHQUFHLENBQUMsZ0JBQWdCLENBQUM7TUFDcENQLENBQUMsRUFBRTtJQUNMLENBQUMsTUFBTTtNQUNMRyxJQUFJLENBQUNHLFNBQVMsQ0FBQ0MsR0FBRyxDQUFDLGtCQUFrQixDQUFDO01BQ3RDUCxDQUFDLEVBQUU7SUFDTDtFQUNGLENBQUMsQ0FBQztFQUNGLE9BQU9MLE9BQU87QUFDaEI7Ozs7OztVQ2pDQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7O0FDTkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFYTs7QUFFK0I7O0FBRTVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDZSxTQUFTYSxJQUFJQSxDQUFBLEVBQUc7RUFDN0IsTUFBTUEsSUFBSSxHQUFHWixRQUFRLENBQUNDLGFBQWEsQ0FBQyxLQUFLLENBQUM7RUFDMUNXLElBQUksQ0FBQ0YsU0FBUyxDQUFDQyxHQUFHLENBQUMsV0FBVyxDQUFDO0VBQy9CLE1BQU1FLFNBQVMsR0FBR2IsUUFBUSxDQUFDQyxhQUFhLENBQUMsSUFBSSxDQUFDO0VBQzlDWSxTQUFTLENBQUNILFNBQVMsQ0FBQ0MsR0FBRyxDQUFDLGlCQUFpQixDQUFDO0VBQzFDRSxTQUFTLENBQUNDLFNBQVMsR0FBR2pCLHlEQUFZLENBQUMsb0JBQW9CLENBQUMsQ0FBQ2lCLFNBQVM7RUFDbEVGLElBQUksQ0FBQ0gsV0FBVyxDQUFDSSxTQUFTLENBQUM7RUFDM0IsTUFBTUUsZUFBZSxHQUFHZixRQUFRLENBQUNDLGFBQWEsQ0FBQyxHQUFHLENBQUM7RUFDbkRjLGVBQWUsQ0FBQ0wsU0FBUyxDQUFDQyxHQUFHLENBQUMsdUJBQXVCLENBQUM7RUFDdERJLGVBQWUsQ0FBQ1AsV0FBVyxHQUN6Qix5eEJBQXl4QjtFQUMzeEJJLElBQUksQ0FBQ0gsV0FBVyxDQUFDTSxlQUFlLENBQUM7RUFDakMsT0FBT0gsSUFBSTtBQUNiLEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qYXZhc2NyaXB0LWRlc2lnbi1wYXR0ZXJucy8uL3Jlc3RhdXJhbnQvc3JjL2NvbXBvbmVudHMvdHlwb2dyYXBoeS5qcyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LWRlc2lnbi1wYXR0ZXJucy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LWRlc2lnbi1wYXR0ZXJucy93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdC1kZXNpZ24tcGF0dGVybnMvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LWRlc2lnbi1wYXR0ZXJucy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2phdmFzY3JpcHQtZGVzaWduLXBhdHRlcm5zLy4vcmVzdGF1cmFudC9zcmMvY29tcG9uZW50cy9ob21lLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGZpbGVvdmVydmlldyBUeXBvZ3JhcGh5IG1vZHVsZVxuICogQGF1dGhvciBUaGluaCBOZ3V5ZW5cbiAqIEB2ZXJzaW9uIDEuMC4wXG4gKi9cblxuXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qKlxuICogRGVjb3JhdGUgdGV4dCB0byBhbHRlcm5hdGUgYmV0d2VlbiBtYWluIGFuZCBhY2NlbnQgY29sb3IgYnkgcGxhY2luZyBlYWNoIGNoYXJhY3RlciBpbiBhIHNwYW4gYW5kIHNldHMgYSBjbGFzcyB0byBpdC5cbiAqIEBwYXJhbSB7c3RyaW5nfSB0ZXh0IC0gVGV4dCB0byBkZWNvcmF0ZVxuICogQGV4cG9ydFxuICogQHJldHVybiB7SFRNTEVsZW1lbnR9IC0gQSB3cmFwcGVyIGRpdiBjb250YWluaW5nIHRoZSBzcGFucyBjb250YWluaW5nIHRoZSBjaGFyYWN0ZXJzLlxuICovXG5leHBvcnQgZnVuY3Rpb24gZGVjb3JhdGVUZXh0KHRleHQpIHtcbiAgY29uc3Qgd3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IHRleHRBcnJheSA9IHRleHQuc3BsaXQoXCJcIik7XG4gIGxldCBpID0gMDtcbiAgdGV4dEFycmF5LmZvckVhY2goKGNoYXIpID0+IHtcbiAgICBjb25zdCBzcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gICAgc3Bhbi50ZXh0Q29udGVudCA9IGNoYXI7XG4gICAgd3JhcHBlci5hcHBlbmRDaGlsZChzcGFuKTtcbiAgICBpZiAoY2hhciA9PT0gXCIgXCIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH0gZWxzZSBpZiAoaSAlIDIgPT09IDApIHtcbiAgICAgIHNwYW4uY2xhc3NMaXN0LmFkZChcImRlY29yYXRlZC1tYWluXCIpO1xuICAgICAgaSsrO1xuICAgIH0gZWxzZSB7XG4gICAgICBzcGFuLmNsYXNzTGlzdC5hZGQoXCJkZWNvcmF0ZWQtYWNjZW50XCIpO1xuICAgICAgaSsrO1xuICAgIH1cbiAgfSk7XG4gIHJldHVybiB3cmFwcGVyO1xufVxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIvKipcbiAqIEBmaWxlb3ZlcnZpZXcgSG9tZSB0YWIgbW9kdWxlXG4gKiBAYXV0aG9yIFRoaW5oIE5ndXllblxuICogQHZlcnNpb24gMS4wLjBcbiAqL1xuXG5cInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgZGVjb3JhdGVUZXh0IH0gZnJvbSBcIi4vdHlwb2dyYXBoeVwiO1xuXG4vKipcbiAqIENyZWF0ZSB0aGUgaG9tZSBjb21wb25lbnQuXG4gKiBAcmV0dXJuIHtIVE1MRWxlbWVudH0gSG9tZSBjb21wb25lbnRcbiAqIEBleHBvcnRcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaG9tZSgpIHtcbiAgY29uc3QgaG9tZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGhvbWUuY2xhc3NMaXN0LmFkZChcIm1haW4taG9tZVwiKTtcbiAgY29uc3QgaG9tZVRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpO1xuICBob21lVGl0bGUuY2xhc3NMaXN0LmFkZChcIm1haW4taG9tZS10aXRsZVwiKTtcbiAgaG9tZVRpdGxlLmlubmVySFRNTCA9IGRlY29yYXRlVGV4dChcIldlbGNvbWUgdG8gQmVubnknc1wiKS5pbm5lckhUTUw7XG4gIGhvbWUuYXBwZW5kQ2hpbGQoaG9tZVRpdGxlKTtcbiAgY29uc3QgaG9tZURlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIGhvbWVEZXNjcmlwdGlvbi5jbGFzc0xpc3QuYWRkKFwibWFpbi1ob21lLWRlc2NyaXB0aW9uXCIpO1xuICBob21lRGVzY3JpcHRpb24udGV4dENvbnRlbnQgPVxuICAgIFwiQSBvbmUtb2YtYS1raW5kIHJlc3RhdXJhbnQgdGhhdCBicmluZ3MgdGhlIGRlbGVjdGFibGUgZmxhdm9ycyBvZiB5b3VyIGZhdm9yaXRlIGFuaW1lcyB0byB5b3VyIHBsYXRlLiBTaXR1YXRlZCBpbiB0aGUgYnVzdGxpbmcgaGVhcnQgb2YgVG9reW8sIEJlbm55J3MgaXMgYSBjdWxpbmFyeSBvYXNpcyB0aGF0IG9mZmVycyBhbiBlY2xlY3RpYyBtZW51IG9mIGRpc2hlcyBpbnNwaXJlZCBieSB2YXJpb3VzIGFuaW1lcy4gRnJvbSBIb3dsIE1vdmluZyBDYXN0bGUncyBmYW1vdXMgQ2FsY2lmZXIncyBicmVha2Zhc3QgdG8gdGhlIG1vdXRoLXdhdGVyaW5nIEdvdGNoYSBQb3JrIFJvYXN0IGZyb20gU2hva3VnZWtpIG5vIFNob3VtYSwgb3VyIGNoZWZzIGhhdmUgcGFpbnN0YWtpbmdseSByZWNyZWF0ZWQgdGhlIGF1dGhlbnRpYyBmbGF2b3JzIG9mIHRoZXNlIGJlbG92ZWQgc2hvd3MuIFdlIHByaWRlIG91cnNlbHZlcyBvbiB1c2luZyBvbmx5IHRoZSBmcmVzaGVzdCwgaGlnaC1xdWFsaXR5IGluZ3JlZGllbnRzIHRvIGNyZWF0ZSBlYWNoIGRpc2gsIGFuZCBvdXIgbWVudSBpcyB0aG91Z2h0ZnVsbHkgY3VyYXRlZCB0byBjYXRlciB0byBhbGwgZGlldGFyeSByZXF1aXJlbWVudHMuIE91ciBjb3p5IGFuZCB2aWJyYW50IGF0bW9zcGhlcmUgcHJvdmlkZXMgdGhlIHBlcmZlY3Qgc2V0dGluZyB0byBzYXZvciBvdXIgZGVsaWNpb3VzIGZvb2Qgd2l0aCBmcmllbmRzIGFuZCBmYW1pbHkuIENvbWUgYW5kIGV4cGVyaWVuY2UgdGhlIG1hZ2ljIG9mIGFuaW1lLWluc3BpcmVkIGN1aXNpbmUgYXQgQmVubnkncy5cIjtcbiAgaG9tZS5hcHBlbmRDaGlsZChob21lRGVzY3JpcHRpb24pO1xuICByZXR1cm4gaG9tZTtcbn1cbiJdLCJuYW1lcyI6WyJkZWNvcmF0ZVRleHQiLCJ0ZXh0Iiwid3JhcHBlciIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsInRleHRBcnJheSIsInNwbGl0IiwiaSIsImZvckVhY2giLCJjaGFyIiwic3BhbiIsInRleHRDb250ZW50IiwiYXBwZW5kQ2hpbGQiLCJjbGFzc0xpc3QiLCJhZGQiLCJob21lIiwiaG9tZVRpdGxlIiwiaW5uZXJIVE1MIiwiaG9tZURlc2NyaXB0aW9uIl0sInNvdXJjZVJvb3QiOiIifQ==