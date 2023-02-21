/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./restaurant/src/components/menu/buriDaikon.png":
/*!*******************************************************!*\
  !*** ./restaurant/src/components/menu/buriDaikon.png ***!
  \*******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "472a4fadba9ea18d3cf8.png";

/***/ }),

/***/ "./restaurant/src/components/menu/calciferBreakfast.jpg":
/*!**************************************************************!*\
  !*** ./restaurant/src/components/menu/calciferBreakfast.jpg ***!
  \**************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "28e8f676999c85abdbe8.jpg";

/***/ }),

/***/ "./restaurant/src/components/menu/furikakeRice.jpg":
/*!*********************************************************!*\
  !*** ./restaurant/src/components/menu/furikakeRice.jpg ***!
  \*********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "a27f95eecd6608c0113a.jpg";

/***/ }),

/***/ "./restaurant/src/components/menu/gotchaPorkRoast.png":
/*!************************************************************!*\
  !*** ./restaurant/src/components/menu/gotchaPorkRoast.png ***!
  \************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "57e9bd8b95d2a7fa2ef0.png";

/***/ }),

/***/ "./restaurant/src/components/menu/hamRamen.png":
/*!*****************************************************!*\
  !*** ./restaurant/src/components/menu/hamRamen.png ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "cbb3cc48cb029328b885.png";

/***/ }),

/***/ "./restaurant/src/components/menu/porkKatsudon.jpg":
/*!*********************************************************!*\
  !*** ./restaurant/src/components/menu/porkKatsudon.jpg ***!
  \*********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "aaffe50b0f4e0b1ba635.jpg";

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
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!************************************************!*\
  !*** ./restaurant/src/components/menu/menu.js ***!
  \************************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ menu)
/* harmony export */ });
/* harmony import */ var _buriDaikon_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./buriDaikon.png */ "./restaurant/src/components/menu/buriDaikon.png");
/* harmony import */ var _calciferBreakfast_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./calciferBreakfast.jpg */ "./restaurant/src/components/menu/calciferBreakfast.jpg");
/* harmony import */ var _gotchaPorkRoast_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./gotchaPorkRoast.png */ "./restaurant/src/components/menu/gotchaPorkRoast.png");
/* harmony import */ var _hamRamen_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./hamRamen.png */ "./restaurant/src/components/menu/hamRamen.png");
/* harmony import */ var _furikakeRice_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./furikakeRice.jpg */ "./restaurant/src/components/menu/furikakeRice.jpg");
/* harmony import */ var _porkKatsudon_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./porkKatsudon.jpg */ "./restaurant/src/components/menu/porkKatsudon.jpg");
/**
 * @fileoverview Menu tab module
 * @author Thinh Nguyen
 * @version 1.0.0
 */










const menuItems = {
  buriDaikon: {
    name: "Buri Daikon",
    description:
      "A Japanese dish of grilled yellowtail and daikon radish. A meal that is subtly sweet, salty, and perfect with a steaming hot bowl of rice. From Seishun Buta Yarou.",
    imgPath: _buriDaikon_png__WEBPACK_IMPORTED_MODULE_0__,
  },
  calciferBreakfast: {
    name: "Calcifer's Breakfast",
    description:
      "A breakfast made by Howl consisted of frying up bacon and eggs. From the world-famous Howl's Moving Castle.",
    imgPath: _calciferBreakfast_jpg__WEBPACK_IMPORTED_MODULE_1__,
  },
  gotchaPorkRoast: {
    name: "Gotcha Pork Roast",
    description:
      "A creative dish made with creamy, seasoned mashed potato wrapped in delicious bacon and drizzled with a rich, red wine sauce, taken from Shokugeki no Shouma.",
    imgPath: _gotchaPorkRoast_png__WEBPACK_IMPORTED_MODULE_2__,
  },
  hamRamen: {
    name: "Ham Ramen",
    description:
      "Elevate your ramen game with ham and soft-boiled eggs. A simple dish from Ponyo.",
    imgPath: _hamRamen_png__WEBPACK_IMPORTED_MODULE_3__,
  },
  furikakeRice: {
    name: "Furikake Rice",
    description:
      "Made of rice, scrambled eggs, chicken, green onions, and the secret ingredients, gelatin cubes, this dish from Shokugeki no Shouma is a must-try.",
    imgPath: _furikakeRice_jpg__WEBPACK_IMPORTED_MODULE_4__,
  },
  porkKatsudon: {
    name: "Pork Katsudon",
    description:
      "An incredible comfort food dish from Yuri!!! on Ice made of rice, eggs, onions, sauce, and deep fried pork.",
    imgPath: _porkKatsudon_jpg__WEBPACK_IMPORTED_MODULE_5__,
  },
};

/**
 * Create the menu component.
 * @return {HTMLElement} Menu component
 * @export
 */
function menu() {
  const menuGrid = document.createElement("div");
  menuGrid.classList.add("main-menu-grid");
  Object.values(menuItems).forEach((value) => {
    const menuItem = document.createElement("div");
    const menuItemTitle = document.createElement("h3");
    const menuItemImg = document.createElement("img");
    const menuItemDescription = document.createElement("p");
    menuItem.classList.add("main-menu-item");
    menuItemTitle.classList.add("main-menu-item-title");
    menuItemImg.classList.add("main-menu-item-img");
    menuItemDescription.classList.add("main-menu-item-description");
    menuItemTitle.textContent = value.name;
    menuItemImg.src = value.imgPath;
    menuItemImg.alt = value.name;
    menuItemDescription.textContent = value.description;
    menuItem.appendChild(menuItemTitle);
    menuItem.appendChild(menuItemImg);
    menuItem.appendChild(menuItemDescription);
    menuGrid.appendChild(menuItem);
  });
  return menuGrid;
}

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVudS5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDZkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFYTs7QUFFZ0M7QUFDYztBQUNKO0FBQ2Q7QUFDUTtBQUNBOztBQUVqRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSw0Q0FBYTtBQUMxQixHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLG1EQUFvQjtBQUNqQyxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLGlEQUFrQjtBQUMvQixHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLDBDQUFXO0FBQ3hCLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsOENBQWU7QUFDNUIsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSw4Q0FBZTtBQUM1QixHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBLFlBQVksYUFBYTtBQUN6QjtBQUNBO0FBQ2U7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vamF2YXNjcmlwdC1kZXNpZ24tcGF0dGVybnMvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdC1kZXNpZ24tcGF0dGVybnMvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2phdmFzY3JpcHQtZGVzaWduLXBhdHRlcm5zL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdC1kZXNpZ24tcGF0dGVybnMvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LWRlc2lnbi1wYXR0ZXJucy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2phdmFzY3JpcHQtZGVzaWduLXBhdHRlcm5zL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL2phdmFzY3JpcHQtZGVzaWduLXBhdHRlcm5zLy4vcmVzdGF1cmFudC9zcmMvY29tcG9uZW50cy9tZW51L21lbnUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiLyoqXG4gKiBAZmlsZW92ZXJ2aWV3IE1lbnUgdGFiIG1vZHVsZVxuICogQGF1dGhvciBUaGluaCBOZ3V5ZW5cbiAqIEB2ZXJzaW9uIDEuMC4wXG4gKi9cblxuXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBidXJpRGFpa29uSW1nIGZyb20gXCIuL2J1cmlEYWlrb24ucG5nXCI7XG5pbXBvcnQgY2FsY2lmZXJCcmVha2Zhc3RJbWcgZnJvbSBcIi4vY2FsY2lmZXJCcmVha2Zhc3QuanBnXCI7XG5pbXBvcnQgZ290Y2hhUG9ya1JvYXN0SW1nIGZyb20gXCIuL2dvdGNoYVBvcmtSb2FzdC5wbmdcIjtcbmltcG9ydCBoYW1SYW1lbkltZyBmcm9tIFwiLi9oYW1SYW1lbi5wbmdcIjtcbmltcG9ydCBmdXJpa2FrZVJpY2VJbWcgZnJvbSBcIi4vZnVyaWtha2VSaWNlLmpwZ1wiO1xuaW1wb3J0IHBvcmtLYXRzdWRvbkltZyBmcm9tIFwiLi9wb3JrS2F0c3Vkb24uanBnXCI7XG5cbmNvbnN0IG1lbnVJdGVtcyA9IHtcbiAgYnVyaURhaWtvbjoge1xuICAgIG5hbWU6IFwiQnVyaSBEYWlrb25cIixcbiAgICBkZXNjcmlwdGlvbjpcbiAgICAgIFwiQSBKYXBhbmVzZSBkaXNoIG9mIGdyaWxsZWQgeWVsbG93dGFpbCBhbmQgZGFpa29uIHJhZGlzaC4gQSBtZWFsIHRoYXQgaXMgc3VidGx5IHN3ZWV0LCBzYWx0eSwgYW5kIHBlcmZlY3Qgd2l0aCBhIHN0ZWFtaW5nIGhvdCBib3dsIG9mIHJpY2UuIEZyb20gU2Vpc2h1biBCdXRhIFlhcm91LlwiLFxuICAgIGltZ1BhdGg6IGJ1cmlEYWlrb25JbWcsXG4gIH0sXG4gIGNhbGNpZmVyQnJlYWtmYXN0OiB7XG4gICAgbmFtZTogXCJDYWxjaWZlcidzIEJyZWFrZmFzdFwiLFxuICAgIGRlc2NyaXB0aW9uOlxuICAgICAgXCJBIGJyZWFrZmFzdCBtYWRlIGJ5IEhvd2wgY29uc2lzdGVkIG9mIGZyeWluZyB1cCBiYWNvbiBhbmQgZWdncy4gRnJvbSB0aGUgd29ybGQtZmFtb3VzIEhvd2wncyBNb3ZpbmcgQ2FzdGxlLlwiLFxuICAgIGltZ1BhdGg6IGNhbGNpZmVyQnJlYWtmYXN0SW1nLFxuICB9LFxuICBnb3RjaGFQb3JrUm9hc3Q6IHtcbiAgICBuYW1lOiBcIkdvdGNoYSBQb3JrIFJvYXN0XCIsXG4gICAgZGVzY3JpcHRpb246XG4gICAgICBcIkEgY3JlYXRpdmUgZGlzaCBtYWRlIHdpdGggY3JlYW15LCBzZWFzb25lZCBtYXNoZWQgcG90YXRvIHdyYXBwZWQgaW4gZGVsaWNpb3VzIGJhY29uIGFuZCBkcml6emxlZCB3aXRoIGEgcmljaCwgcmVkIHdpbmUgc2F1Y2UsIHRha2VuIGZyb20gU2hva3VnZWtpIG5vIFNob3VtYS5cIixcbiAgICBpbWdQYXRoOiBnb3RjaGFQb3JrUm9hc3RJbWcsXG4gIH0sXG4gIGhhbVJhbWVuOiB7XG4gICAgbmFtZTogXCJIYW0gUmFtZW5cIixcbiAgICBkZXNjcmlwdGlvbjpcbiAgICAgIFwiRWxldmF0ZSB5b3VyIHJhbWVuIGdhbWUgd2l0aCBoYW0gYW5kIHNvZnQtYm9pbGVkIGVnZ3MuIEEgc2ltcGxlIGRpc2ggZnJvbSBQb255by5cIixcbiAgICBpbWdQYXRoOiBoYW1SYW1lbkltZyxcbiAgfSxcbiAgZnVyaWtha2VSaWNlOiB7XG4gICAgbmFtZTogXCJGdXJpa2FrZSBSaWNlXCIsXG4gICAgZGVzY3JpcHRpb246XG4gICAgICBcIk1hZGUgb2YgcmljZSwgc2NyYW1ibGVkIGVnZ3MsIGNoaWNrZW4sIGdyZWVuIG9uaW9ucywgYW5kIHRoZSBzZWNyZXQgaW5ncmVkaWVudHMsIGdlbGF0aW4gY3ViZXMsIHRoaXMgZGlzaCBmcm9tIFNob2t1Z2VraSBubyBTaG91bWEgaXMgYSBtdXN0LXRyeS5cIixcbiAgICBpbWdQYXRoOiBmdXJpa2FrZVJpY2VJbWcsXG4gIH0sXG4gIHBvcmtLYXRzdWRvbjoge1xuICAgIG5hbWU6IFwiUG9yayBLYXRzdWRvblwiLFxuICAgIGRlc2NyaXB0aW9uOlxuICAgICAgXCJBbiBpbmNyZWRpYmxlIGNvbWZvcnQgZm9vZCBkaXNoIGZyb20gWXVyaSEhISBvbiBJY2UgbWFkZSBvZiByaWNlLCBlZ2dzLCBvbmlvbnMsIHNhdWNlLCBhbmQgZGVlcCBmcmllZCBwb3JrLlwiLFxuICAgIGltZ1BhdGg6IHBvcmtLYXRzdWRvbkltZyxcbiAgfSxcbn07XG5cbi8qKlxuICogQ3JlYXRlIHRoZSBtZW51IGNvbXBvbmVudC5cbiAqIEByZXR1cm4ge0hUTUxFbGVtZW50fSBNZW51IGNvbXBvbmVudFxuICogQGV4cG9ydFxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBtZW51KCkge1xuICBjb25zdCBtZW51R3JpZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIG1lbnVHcmlkLmNsYXNzTGlzdC5hZGQoXCJtYWluLW1lbnUtZ3JpZFwiKTtcbiAgT2JqZWN0LnZhbHVlcyhtZW51SXRlbXMpLmZvckVhY2goKHZhbHVlKSA9PiB7XG4gICAgY29uc3QgbWVudUl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnN0IG1lbnVJdGVtVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDNcIik7XG4gICAgY29uc3QgbWVudUl0ZW1JbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICAgIGNvbnN0IG1lbnVJdGVtRGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICBtZW51SXRlbS5jbGFzc0xpc3QuYWRkKFwibWFpbi1tZW51LWl0ZW1cIik7XG4gICAgbWVudUl0ZW1UaXRsZS5jbGFzc0xpc3QuYWRkKFwibWFpbi1tZW51LWl0ZW0tdGl0bGVcIik7XG4gICAgbWVudUl0ZW1JbWcuY2xhc3NMaXN0LmFkZChcIm1haW4tbWVudS1pdGVtLWltZ1wiKTtcbiAgICBtZW51SXRlbURlc2NyaXB0aW9uLmNsYXNzTGlzdC5hZGQoXCJtYWluLW1lbnUtaXRlbS1kZXNjcmlwdGlvblwiKTtcbiAgICBtZW51SXRlbVRpdGxlLnRleHRDb250ZW50ID0gdmFsdWUubmFtZTtcbiAgICBtZW51SXRlbUltZy5zcmMgPSB2YWx1ZS5pbWdQYXRoO1xuICAgIG1lbnVJdGVtSW1nLmFsdCA9IHZhbHVlLm5hbWU7XG4gICAgbWVudUl0ZW1EZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9IHZhbHVlLmRlc2NyaXB0aW9uO1xuICAgIG1lbnVJdGVtLmFwcGVuZENoaWxkKG1lbnVJdGVtVGl0bGUpO1xuICAgIG1lbnVJdGVtLmFwcGVuZENoaWxkKG1lbnVJdGVtSW1nKTtcbiAgICBtZW51SXRlbS5hcHBlbmRDaGlsZChtZW51SXRlbURlc2NyaXB0aW9uKTtcbiAgICBtZW51R3JpZC5hcHBlbmRDaGlsZChtZW51SXRlbSk7XG4gIH0pO1xuICByZXR1cm4gbWVudUdyaWQ7XG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=