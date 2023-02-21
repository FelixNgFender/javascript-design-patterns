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
  textArray.forEach((char) => {
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
  homeDescription.textContent =
    "A one-of-a-kind restaurant that brings the delectable flavors of your favorite animes to your plate. Situated in the bustling heart of Tokyo, Benny's is a culinary oasis that offers an eclectic menu of dishes inspired by various animes. From Howl Moving Castle's famous Calcifer's breakfast to the mouth-watering Gotcha Pork Roast from Shokugeki no Shouma, our chefs have painstakingly recreated the authentic flavors of these beloved shows. We pride ourselves on using only the freshest, high-quality ingredients to create each dish, and our menu is thoughtfully curated to cater to all dietary requirements. Our cozy and vibrant atmosphere provides the perfect setting to savor our delicious food with friends and family. Come and experience the magic of anime-inspired cuisine at Benny's.";
  home.appendChild(homeDescription);
  return home;
}

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVhOztBQUViO0FBQ0E7QUFDQSxXQUFXLFFBQVE7QUFDbkI7QUFDQSxZQUFZLGFBQWE7QUFDekI7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOzs7Ozs7O1VDakNBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7Ozs7QUNOQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVhOztBQUUrQjs7QUFFNUM7QUFDQTtBQUNBLFlBQVksYUFBYTtBQUN6QjtBQUNBO0FBQ2U7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3Qix5REFBWTtBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vamF2YXNjcmlwdC1kZXNpZ24tcGF0dGVybnMvLi9yZXN0YXVyYW50L3NyYy9jb21wb25lbnRzL3R5cG9ncmFwaHkuanMiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdC1kZXNpZ24tcGF0dGVybnMvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdC1kZXNpZ24tcGF0dGVybnMvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2phdmFzY3JpcHQtZGVzaWduLXBhdHRlcm5zL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdC1kZXNpZ24tcGF0dGVybnMvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LWRlc2lnbi1wYXR0ZXJucy8uL3Jlc3RhdXJhbnQvc3JjL2NvbXBvbmVudHMvaG9tZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBmaWxlb3ZlcnZpZXcgVHlwb2dyYXBoeSBtb2R1bGVcbiAqIEBhdXRob3IgVGhpbmggTmd1eWVuXG4gKiBAdmVyc2lvbiAxLjAuMFxuICovXG5cblwidXNlIHN0cmljdFwiO1xuXG4vKipcbiAqIERlY29yYXRlIHRleHQgdG8gYWx0ZXJuYXRlIGJldHdlZW4gbWFpbiBhbmQgYWNjZW50IGNvbG9yIGJ5IHBsYWNpbmcgZWFjaCBjaGFyYWN0ZXIgaW4gYSBzcGFuIGFuZCBzZXRzIGEgY2xhc3MgdG8gaXQuXG4gKiBAcGFyYW0ge3N0cmluZ30gdGV4dCAtIFRleHQgdG8gZGVjb3JhdGVcbiAqIEBleHBvcnRcbiAqIEByZXR1cm4ge0hUTUxFbGVtZW50fSAtIEEgd3JhcHBlciBkaXYgY29udGFpbmluZyB0aGUgc3BhbnMgY29udGFpbmluZyB0aGUgY2hhcmFjdGVycy5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGRlY29yYXRlVGV4dCh0ZXh0KSB7XG4gIGNvbnN0IHdyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCB0ZXh0QXJyYXkgPSB0ZXh0LnNwbGl0KFwiXCIpO1xuICBsZXQgaSA9IDA7XG4gIHRleHRBcnJheS5mb3JFYWNoKChjaGFyKSA9PiB7XG4gICAgY29uc3Qgc3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICAgIHNwYW4udGV4dENvbnRlbnQgPSBjaGFyO1xuICAgIHdyYXBwZXIuYXBwZW5kQ2hpbGQoc3Bhbik7XG4gICAgaWYgKGNoYXIgPT09IFwiIFwiKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9IGVsc2UgaWYgKGkgJSAyID09PSAwKSB7XG4gICAgICBzcGFuLmNsYXNzTGlzdC5hZGQoXCJkZWNvcmF0ZWQtbWFpblwiKTtcbiAgICAgIGkrKztcbiAgICB9IGVsc2Uge1xuICAgICAgc3Bhbi5jbGFzc0xpc3QuYWRkKFwiZGVjb3JhdGVkLWFjY2VudFwiKTtcbiAgICAgIGkrKztcbiAgICB9XG4gIH0pO1xuICByZXR1cm4gd3JhcHBlcjtcbn1cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiLyoqXG4gKiBAZmlsZW92ZXJ2aWV3IEhvbWUgdGFiIG1vZHVsZVxuICogQGF1dGhvciBUaGluaCBOZ3V5ZW5cbiAqIEB2ZXJzaW9uIDEuMC4wXG4gKi9cblxuXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGRlY29yYXRlVGV4dCB9IGZyb20gXCIuL3R5cG9ncmFwaHlcIjtcblxuLyoqXG4gKiBDcmVhdGUgdGhlIGhvbWUgY29tcG9uZW50LlxuICogQHJldHVybiB7SFRNTEVsZW1lbnR9IEhvbWUgY29tcG9uZW50XG4gKiBAZXhwb3J0XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGhvbWUoKSB7XG4gIGNvbnN0IGhvbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBob21lLmNsYXNzTGlzdC5hZGQoXCJtYWluLWhvbWVcIik7XG4gIGNvbnN0IGhvbWVUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcbiAgaG9tZVRpdGxlLmNsYXNzTGlzdC5hZGQoXCJtYWluLWhvbWUtdGl0bGVcIik7XG4gIGhvbWVUaXRsZS5pbm5lckhUTUwgPSBkZWNvcmF0ZVRleHQoXCJXZWxjb21lIHRvIEJlbm55J3NcIikuaW5uZXJIVE1MO1xuICBob21lLmFwcGVuZENoaWxkKGhvbWVUaXRsZSk7XG4gIGNvbnN0IGhvbWVEZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICBob21lRGVzY3JpcHRpb24uY2xhc3NMaXN0LmFkZChcIm1haW4taG9tZS1kZXNjcmlwdGlvblwiKTtcbiAgaG9tZURlc2NyaXB0aW9uLnRleHRDb250ZW50ID1cbiAgICBcIkEgb25lLW9mLWEta2luZCByZXN0YXVyYW50IHRoYXQgYnJpbmdzIHRoZSBkZWxlY3RhYmxlIGZsYXZvcnMgb2YgeW91ciBmYXZvcml0ZSBhbmltZXMgdG8geW91ciBwbGF0ZS4gU2l0dWF0ZWQgaW4gdGhlIGJ1c3RsaW5nIGhlYXJ0IG9mIFRva3lvLCBCZW5ueSdzIGlzIGEgY3VsaW5hcnkgb2FzaXMgdGhhdCBvZmZlcnMgYW4gZWNsZWN0aWMgbWVudSBvZiBkaXNoZXMgaW5zcGlyZWQgYnkgdmFyaW91cyBhbmltZXMuIEZyb20gSG93bCBNb3ZpbmcgQ2FzdGxlJ3MgZmFtb3VzIENhbGNpZmVyJ3MgYnJlYWtmYXN0IHRvIHRoZSBtb3V0aC13YXRlcmluZyBHb3RjaGEgUG9yayBSb2FzdCBmcm9tIFNob2t1Z2VraSBubyBTaG91bWEsIG91ciBjaGVmcyBoYXZlIHBhaW5zdGFraW5nbHkgcmVjcmVhdGVkIHRoZSBhdXRoZW50aWMgZmxhdm9ycyBvZiB0aGVzZSBiZWxvdmVkIHNob3dzLiBXZSBwcmlkZSBvdXJzZWx2ZXMgb24gdXNpbmcgb25seSB0aGUgZnJlc2hlc3QsIGhpZ2gtcXVhbGl0eSBpbmdyZWRpZW50cyB0byBjcmVhdGUgZWFjaCBkaXNoLCBhbmQgb3VyIG1lbnUgaXMgdGhvdWdodGZ1bGx5IGN1cmF0ZWQgdG8gY2F0ZXIgdG8gYWxsIGRpZXRhcnkgcmVxdWlyZW1lbnRzLiBPdXIgY296eSBhbmQgdmlicmFudCBhdG1vc3BoZXJlIHByb3ZpZGVzIHRoZSBwZXJmZWN0IHNldHRpbmcgdG8gc2F2b3Igb3VyIGRlbGljaW91cyBmb29kIHdpdGggZnJpZW5kcyBhbmQgZmFtaWx5LiBDb21lIGFuZCBleHBlcmllbmNlIHRoZSBtYWdpYyBvZiBhbmltZS1pbnNwaXJlZCBjdWlzaW5lIGF0IEJlbm55J3MuXCI7XG4gIGhvbWUuYXBwZW5kQ2hpbGQoaG9tZURlc2NyaXB0aW9uKTtcbiAgcmV0dXJuIGhvbWU7XG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=