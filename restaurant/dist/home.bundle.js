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
/*!*******************************************!*\
  !*** ./restaurant/src/components/home.js ***!
  \*******************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ home)
/* harmony export */ });
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
  homeTitle.textContent = "Welcome to Benny's";
  home.appendChild(homeTitle);
  const homeDescription = document.createElement("p");
  homeDescription.classList.add("main-home-description");
  homeDescription.textContent =
    "A one-of-a-kind restaurant that brings the delectable flavors of your favorite animes to your plate. Situated in the bustling heart of Tokyo, Benny's is a culinary oasis that offers an eclectic menu of dishes inspired by various animes. From Howl Moving Castle's famous Calcifer's breakfast to the mouth-watering Gotcha Pork Roast from Shokugeki no Shouma, our chefs have painstakingly recreated the authentic flavors of these beloved shows. We pride ourselves on using only the freshest, high-quality ingredients to create each dish, and our menu is thoughtfully curated to cater to all dietary requirements. Our cozy and vibrant atmosphere provides the perfect setting to savor our delicious food with friends and family. Come and experience the magic of anime-inspired cuisine at Benny's.";
  home.appendChild(homeDescription);
  return home;
}

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7VUFBQTtVQUNBOzs7OztXQ0RBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7QUNOQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVhOztBQUViO0FBQ0E7QUFDQSxZQUFZLGFBQWE7QUFDekI7QUFDQTtBQUNlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qYXZhc2NyaXB0LWRlc2lnbi1wYXR0ZXJucy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LWRlc2lnbi1wYXR0ZXJucy93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdC1kZXNpZ24tcGF0dGVybnMvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LWRlc2lnbi1wYXR0ZXJucy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2phdmFzY3JpcHQtZGVzaWduLXBhdHRlcm5zLy4vcmVzdGF1cmFudC9zcmMvY29tcG9uZW50cy9ob21lLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIFRoZSByZXF1aXJlIHNjb3BlXG52YXIgX193ZWJwYWNrX3JlcXVpcmVfXyA9IHt9O1xuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiLyoqXG4gKiBAZmlsZW92ZXJ2aWV3IEhvbWUgdGFiIG1vZHVsZVxuICogQGF1dGhvciBUaGluaCBOZ3V5ZW5cbiAqIEB2ZXJzaW9uIDEuMC4wXG4gKi9cblxuXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qKlxuICogQ3JlYXRlIHRoZSBob21lIGNvbXBvbmVudC5cbiAqIEByZXR1cm4ge0hUTUxFbGVtZW50fSBIb21lIGNvbXBvbmVudFxuICogQGV4cG9ydFxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBob21lKCkge1xuICBjb25zdCBob21lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgaG9tZS5jbGFzc0xpc3QuYWRkKFwibWFpbi1ob21lXCIpO1xuICBjb25zdCBob21lVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIik7XG4gIGhvbWVUaXRsZS5jbGFzc0xpc3QuYWRkKFwibWFpbi1ob21lLXRpdGxlXCIpO1xuICBob21lVGl0bGUudGV4dENvbnRlbnQgPSBcIldlbGNvbWUgdG8gQmVubnknc1wiO1xuICBob21lLmFwcGVuZENoaWxkKGhvbWVUaXRsZSk7XG4gIGNvbnN0IGhvbWVEZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICBob21lRGVzY3JpcHRpb24uY2xhc3NMaXN0LmFkZChcIm1haW4taG9tZS1kZXNjcmlwdGlvblwiKTtcbiAgaG9tZURlc2NyaXB0aW9uLnRleHRDb250ZW50ID1cbiAgICBcIkEgb25lLW9mLWEta2luZCByZXN0YXVyYW50IHRoYXQgYnJpbmdzIHRoZSBkZWxlY3RhYmxlIGZsYXZvcnMgb2YgeW91ciBmYXZvcml0ZSBhbmltZXMgdG8geW91ciBwbGF0ZS4gU2l0dWF0ZWQgaW4gdGhlIGJ1c3RsaW5nIGhlYXJ0IG9mIFRva3lvLCBCZW5ueSdzIGlzIGEgY3VsaW5hcnkgb2FzaXMgdGhhdCBvZmZlcnMgYW4gZWNsZWN0aWMgbWVudSBvZiBkaXNoZXMgaW5zcGlyZWQgYnkgdmFyaW91cyBhbmltZXMuIEZyb20gSG93bCBNb3ZpbmcgQ2FzdGxlJ3MgZmFtb3VzIENhbGNpZmVyJ3MgYnJlYWtmYXN0IHRvIHRoZSBtb3V0aC13YXRlcmluZyBHb3RjaGEgUG9yayBSb2FzdCBmcm9tIFNob2t1Z2VraSBubyBTaG91bWEsIG91ciBjaGVmcyBoYXZlIHBhaW5zdGFraW5nbHkgcmVjcmVhdGVkIHRoZSBhdXRoZW50aWMgZmxhdm9ycyBvZiB0aGVzZSBiZWxvdmVkIHNob3dzLiBXZSBwcmlkZSBvdXJzZWx2ZXMgb24gdXNpbmcgb25seSB0aGUgZnJlc2hlc3QsIGhpZ2gtcXVhbGl0eSBpbmdyZWRpZW50cyB0byBjcmVhdGUgZWFjaCBkaXNoLCBhbmQgb3VyIG1lbnUgaXMgdGhvdWdodGZ1bGx5IGN1cmF0ZWQgdG8gY2F0ZXIgdG8gYWxsIGRpZXRhcnkgcmVxdWlyZW1lbnRzLiBPdXIgY296eSBhbmQgdmlicmFudCBhdG1vc3BoZXJlIHByb3ZpZGVzIHRoZSBwZXJmZWN0IHNldHRpbmcgdG8gc2F2b3Igb3VyIGRlbGljaW91cyBmb29kIHdpdGggZnJpZW5kcyBhbmQgZmFtaWx5LiBDb21lIGFuZCBleHBlcmllbmNlIHRoZSBtYWdpYyBvZiBhbmltZS1pbnNwaXJlZCBjdWlzaW5lIGF0IEJlbm55J3MuXCI7XG4gIGhvbWUuYXBwZW5kQ2hpbGQoaG9tZURlc2NyaXB0aW9uKTtcbiAgcmV0dXJuIGhvbWU7XG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=