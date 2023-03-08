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
    description: "A Japanese dish of grilled yellowtail and daikon radish. A meal that is subtly sweet, salty, and perfect with a steaming hot bowl of rice. From Seishun Buta Yarou.",
    imgPath: _buriDaikon_png__WEBPACK_IMPORTED_MODULE_0__
  },
  calciferBreakfast: {
    name: "Calcifer's Breakfast",
    description: "A breakfast made by Howl consisted of frying up bacon and eggs. From the world-famous Howl's Moving Castle.",
    imgPath: _calciferBreakfast_jpg__WEBPACK_IMPORTED_MODULE_1__
  },
  gotchaPorkRoast: {
    name: "Gotcha Pork Roast",
    description: "A creative dish made with creamy, seasoned mashed potato wrapped in delicious bacon and drizzled with a rich, red wine sauce, taken from Shokugeki no Shouma.",
    imgPath: _gotchaPorkRoast_png__WEBPACK_IMPORTED_MODULE_2__
  },
  hamRamen: {
    name: "Ham Ramen",
    description: "Elevate your ramen game with ham and soft-boiled eggs. A simple dish from Ponyo.",
    imgPath: _hamRamen_png__WEBPACK_IMPORTED_MODULE_3__
  },
  furikakeRice: {
    name: "Furikake Rice",
    description: "Made of rice, scrambled eggs, chicken, green onions, and the secret ingredients, gelatin cubes, this dish from Shokugeki no Shouma is a must-try.",
    imgPath: _furikakeRice_jpg__WEBPACK_IMPORTED_MODULE_4__
  },
  porkKatsudon: {
    name: "Pork Katsudon",
    description: "An incredible comfort food dish from Yuri!!! on Ice made of rice, eggs, onions, sauce, and deep fried pork.",
    imgPath: _porkKatsudon_jpg__WEBPACK_IMPORTED_MODULE_5__
  }
};

/**
 * Create the menu component.
 * @return {HTMLElement} Menu component
 * @export
 */
function menu() {
  const menuGrid = document.createElement("div");
  menuGrid.classList.add("main-menu-grid");
  Object.values(menuItems).forEach(value => {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QW1CLENBQUNULFNBQVMsQ0FBQ0MsR0FBRyxDQUFDLDRCQUE0QixDQUFDO0lBQy9ETSxhQUFhLENBQUNHLFdBQVcsR0FBR0wsS0FBSyxDQUFDakIsSUFBSTtJQUN0Q29CLFdBQVcsQ0FBQ0csR0FBRyxHQUFHTixLQUFLLENBQUNmLE9BQU87SUFDL0JrQixXQUFXLENBQUNJLEdBQUcsR0FBR1AsS0FBSyxDQUFDakIsSUFBSTtJQUM1QnFCLG1CQUFtQixDQUFDQyxXQUFXLEdBQUdMLEtBQUssQ0FBQ2hCLFdBQVc7SUFDbkRpQixRQUFRLENBQUNPLFdBQVcsQ0FBQ04sYUFBYSxDQUFDO0lBQ25DRCxRQUFRLENBQUNPLFdBQVcsQ0FBQ0wsV0FBVyxDQUFDO0lBQ2pDRixRQUFRLENBQUNPLFdBQVcsQ0FBQ0osbUJBQW1CLENBQUM7SUFDekNaLFFBQVEsQ0FBQ2dCLFdBQVcsQ0FBQ1AsUUFBUSxDQUFDO0VBQ2hDLENBQUMsQ0FBQztFQUNGLE9BQU9ULFFBQVE7QUFDakIsQyIsInNvdXJjZXMiOlsid2VicGFjazovL2phdmFzY3JpcHQtZGVzaWduLXBhdHRlcm5zL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2phdmFzY3JpcHQtZGVzaWduLXBhdHRlcm5zL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LWRlc2lnbi1wYXR0ZXJucy93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL2phdmFzY3JpcHQtZGVzaWduLXBhdHRlcm5zL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdC1kZXNpZ24tcGF0dGVybnMvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LWRlc2lnbi1wYXR0ZXJucy93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LWRlc2lnbi1wYXR0ZXJucy8uL3Jlc3RhdXJhbnQvc3JjL2NvbXBvbmVudHMvbWVudS9tZW51LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIi8qKlxuICogQGZpbGVvdmVydmlldyBNZW51IHRhYiBtb2R1bGVcbiAqIEBhdXRob3IgVGhpbmggTmd1eWVuXG4gKiBAdmVyc2lvbiAxLjAuMFxuICovXG5cblwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgYnVyaURhaWtvbkltZyBmcm9tIFwiLi9idXJpRGFpa29uLnBuZ1wiO1xuaW1wb3J0IGNhbGNpZmVyQnJlYWtmYXN0SW1nIGZyb20gXCIuL2NhbGNpZmVyQnJlYWtmYXN0LmpwZ1wiO1xuaW1wb3J0IGdvdGNoYVBvcmtSb2FzdEltZyBmcm9tIFwiLi9nb3RjaGFQb3JrUm9hc3QucG5nXCI7XG5pbXBvcnQgaGFtUmFtZW5JbWcgZnJvbSBcIi4vaGFtUmFtZW4ucG5nXCI7XG5pbXBvcnQgZnVyaWtha2VSaWNlSW1nIGZyb20gXCIuL2Z1cmlrYWtlUmljZS5qcGdcIjtcbmltcG9ydCBwb3JrS2F0c3Vkb25JbWcgZnJvbSBcIi4vcG9ya0thdHN1ZG9uLmpwZ1wiO1xuXG5jb25zdCBtZW51SXRlbXMgPSB7XG4gIGJ1cmlEYWlrb246IHtcbiAgICBuYW1lOiBcIkJ1cmkgRGFpa29uXCIsXG4gICAgZGVzY3JpcHRpb246XG4gICAgICBcIkEgSmFwYW5lc2UgZGlzaCBvZiBncmlsbGVkIHllbGxvd3RhaWwgYW5kIGRhaWtvbiByYWRpc2guIEEgbWVhbCB0aGF0IGlzIHN1YnRseSBzd2VldCwgc2FsdHksIGFuZCBwZXJmZWN0IHdpdGggYSBzdGVhbWluZyBob3QgYm93bCBvZiByaWNlLiBGcm9tIFNlaXNodW4gQnV0YSBZYXJvdS5cIixcbiAgICBpbWdQYXRoOiBidXJpRGFpa29uSW1nLFxuICB9LFxuICBjYWxjaWZlckJyZWFrZmFzdDoge1xuICAgIG5hbWU6IFwiQ2FsY2lmZXIncyBCcmVha2Zhc3RcIixcbiAgICBkZXNjcmlwdGlvbjpcbiAgICAgIFwiQSBicmVha2Zhc3QgbWFkZSBieSBIb3dsIGNvbnNpc3RlZCBvZiBmcnlpbmcgdXAgYmFjb24gYW5kIGVnZ3MuIEZyb20gdGhlIHdvcmxkLWZhbW91cyBIb3dsJ3MgTW92aW5nIENhc3RsZS5cIixcbiAgICBpbWdQYXRoOiBjYWxjaWZlckJyZWFrZmFzdEltZyxcbiAgfSxcbiAgZ290Y2hhUG9ya1JvYXN0OiB7XG4gICAgbmFtZTogXCJHb3RjaGEgUG9yayBSb2FzdFwiLFxuICAgIGRlc2NyaXB0aW9uOlxuICAgICAgXCJBIGNyZWF0aXZlIGRpc2ggbWFkZSB3aXRoIGNyZWFteSwgc2Vhc29uZWQgbWFzaGVkIHBvdGF0byB3cmFwcGVkIGluIGRlbGljaW91cyBiYWNvbiBhbmQgZHJpenpsZWQgd2l0aCBhIHJpY2gsIHJlZCB3aW5lIHNhdWNlLCB0YWtlbiBmcm9tIFNob2t1Z2VraSBubyBTaG91bWEuXCIsXG4gICAgaW1nUGF0aDogZ290Y2hhUG9ya1JvYXN0SW1nLFxuICB9LFxuICBoYW1SYW1lbjoge1xuICAgIG5hbWU6IFwiSGFtIFJhbWVuXCIsXG4gICAgZGVzY3JpcHRpb246XG4gICAgICBcIkVsZXZhdGUgeW91ciByYW1lbiBnYW1lIHdpdGggaGFtIGFuZCBzb2Z0LWJvaWxlZCBlZ2dzLiBBIHNpbXBsZSBkaXNoIGZyb20gUG9ueW8uXCIsXG4gICAgaW1nUGF0aDogaGFtUmFtZW5JbWcsXG4gIH0sXG4gIGZ1cmlrYWtlUmljZToge1xuICAgIG5hbWU6IFwiRnVyaWtha2UgUmljZVwiLFxuICAgIGRlc2NyaXB0aW9uOlxuICAgICAgXCJNYWRlIG9mIHJpY2UsIHNjcmFtYmxlZCBlZ2dzLCBjaGlja2VuLCBncmVlbiBvbmlvbnMsIGFuZCB0aGUgc2VjcmV0IGluZ3JlZGllbnRzLCBnZWxhdGluIGN1YmVzLCB0aGlzIGRpc2ggZnJvbSBTaG9rdWdla2kgbm8gU2hvdW1hIGlzIGEgbXVzdC10cnkuXCIsXG4gICAgaW1nUGF0aDogZnVyaWtha2VSaWNlSW1nLFxuICB9LFxuICBwb3JrS2F0c3Vkb246IHtcbiAgICBuYW1lOiBcIlBvcmsgS2F0c3Vkb25cIixcbiAgICBkZXNjcmlwdGlvbjpcbiAgICAgIFwiQW4gaW5jcmVkaWJsZSBjb21mb3J0IGZvb2QgZGlzaCBmcm9tIFl1cmkhISEgb24gSWNlIG1hZGUgb2YgcmljZSwgZWdncywgb25pb25zLCBzYXVjZSwgYW5kIGRlZXAgZnJpZWQgcG9yay5cIixcbiAgICBpbWdQYXRoOiBwb3JrS2F0c3Vkb25JbWcsXG4gIH0sXG59O1xuXG4vKipcbiAqIENyZWF0ZSB0aGUgbWVudSBjb21wb25lbnQuXG4gKiBAcmV0dXJuIHtIVE1MRWxlbWVudH0gTWVudSBjb21wb25lbnRcbiAqIEBleHBvcnRcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbWVudSgpIHtcbiAgY29uc3QgbWVudUdyaWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBtZW51R3JpZC5jbGFzc0xpc3QuYWRkKFwibWFpbi1tZW51LWdyaWRcIik7XG4gIE9iamVjdC52YWx1ZXMobWVudUl0ZW1zKS5mb3JFYWNoKCh2YWx1ZSkgPT4ge1xuICAgIGNvbnN0IG1lbnVJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb25zdCBtZW51SXRlbVRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgzXCIpO1xuICAgIGNvbnN0IG1lbnVJdGVtSW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgICBjb25zdCBtZW51SXRlbURlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgbWVudUl0ZW0uY2xhc3NMaXN0LmFkZChcIm1haW4tbWVudS1pdGVtXCIpO1xuICAgIG1lbnVJdGVtVGl0bGUuY2xhc3NMaXN0LmFkZChcIm1haW4tbWVudS1pdGVtLXRpdGxlXCIpO1xuICAgIG1lbnVJdGVtSW1nLmNsYXNzTGlzdC5hZGQoXCJtYWluLW1lbnUtaXRlbS1pbWdcIik7XG4gICAgbWVudUl0ZW1EZXNjcmlwdGlvbi5jbGFzc0xpc3QuYWRkKFwibWFpbi1tZW51LWl0ZW0tZGVzY3JpcHRpb25cIik7XG4gICAgbWVudUl0ZW1UaXRsZS50ZXh0Q29udGVudCA9IHZhbHVlLm5hbWU7XG4gICAgbWVudUl0ZW1JbWcuc3JjID0gdmFsdWUuaW1nUGF0aDtcbiAgICBtZW51SXRlbUltZy5hbHQgPSB2YWx1ZS5uYW1lO1xuICAgIG1lbnVJdGVtRGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSB2YWx1ZS5kZXNjcmlwdGlvbjtcbiAgICBtZW51SXRlbS5hcHBlbmRDaGlsZChtZW51SXRlbVRpdGxlKTtcbiAgICBtZW51SXRlbS5hcHBlbmRDaGlsZChtZW51SXRlbUltZyk7XG4gICAgbWVudUl0ZW0uYXBwZW5kQ2hpbGQobWVudUl0ZW1EZXNjcmlwdGlvbik7XG4gICAgbWVudUdyaWQuYXBwZW5kQ2hpbGQobWVudUl0ZW0pO1xuICB9KTtcbiAgcmV0dXJuIG1lbnVHcmlkO1xufVxuIl0sIm5hbWVzIjpbImJ1cmlEYWlrb25JbWciLCJjYWxjaWZlckJyZWFrZmFzdEltZyIsImdvdGNoYVBvcmtSb2FzdEltZyIsImhhbVJhbWVuSW1nIiwiZnVyaWtha2VSaWNlSW1nIiwicG9ya0thdHN1ZG9uSW1nIiwibWVudUl0ZW1zIiwiYnVyaURhaWtvbiIsIm5hbWUiLCJkZXNjcmlwdGlvbiIsImltZ1BhdGgiLCJjYWxjaWZlckJyZWFrZmFzdCIsImdvdGNoYVBvcmtSb2FzdCIsImhhbVJhbWVuIiwiZnVyaWtha2VSaWNlIiwicG9ya0thdHN1ZG9uIiwibWVudSIsIm1lbnVHcmlkIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NMaXN0IiwiYWRkIiwiT2JqZWN0IiwidmFsdWVzIiwiZm9yRWFjaCIsInZhbHVlIiwibWVudUl0ZW0iLCJtZW51SXRlbVRpdGxlIiwibWVudUl0ZW1JbWciLCJtZW51SXRlbURlc2NyaXB0aW9uIiwidGV4dENvbnRlbnQiLCJzcmMiLCJhbHQiLCJhcHBlbmRDaGlsZCJdLCJzb3VyY2VSb290IjoiIn0=