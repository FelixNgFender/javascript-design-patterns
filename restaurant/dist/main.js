/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./restaurant/src/contact.js":
/*!***********************************!*\
  !*** ./restaurant/src/contact.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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


/***/ }),

/***/ "./restaurant/src/home.js":
/*!********************************!*\
  !*** ./restaurant/src/home.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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


/***/ }),

/***/ "./restaurant/src/menu.js":
/*!********************************!*\
  !*** ./restaurant/src/menu.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ menu)
/* harmony export */ });
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
    imgPath: "./assets/buriDaikon.png",
  },
  calciferBreakfast: {
    name: "Calcifer's Breakfast",
    description:
      "A breakfast made by Howl consisted of frying up bacon and eggs. From the world-famous Howl's Moving Castle.",
    imgPath: "./assets/calciferBreakfast.jpg",
  },
  gotchaPorkRoast: {
    name: "Gotcha Pork Roast",
    description:
      "A creative dish made with creamy, seasoned mashed potato wrapped in delicious bacon and drizzled with a rich, red wine sauce, taken from Shokugeki no Shouma.",
    imgPath: "./assets/gotchaPorkRoast.webp",
  },
  hamRamen: {
    name: "Ham Ramen",
    description:
      "Elevate your ramen game with ham and soft-boiled eggs. A simple dish from Ponyo.",
    imgPath: "./assets/hamRamen.jpeg",
  },
  furikakeRice: {
    name: "Furikake Rice",
    description:
      "Made of rice, scrambled eggs, chicken, green onions, and the secret ingredients, gelatin cubes, this dish from Shokugeki no Shouma is a must-try.",
    imgPath: "./assets/furikakeRice.jpg",
  },
  porkKatsudon: {
    name: "Pork Katsudon",
    description:
      "An incredible comfort food dish from Yuri!!! on Ice made of rice, eggs, onions, sauce, and deep fried pork.",
    imgPath: "./assets/porkKatsudon.jpg",
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


/***/ }),

/***/ "./restaurant/src/pageLoad.js":
/*!************************************!*\
  !*** ./restaurant/src/pageLoad.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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
/*!*********************************!*\
  !*** ./restaurant/src/index.js ***!
  \*********************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _pageLoad__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pageLoad */ "./restaurant/src/pageLoad.js");
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu */ "./restaurant/src/menu.js");
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home */ "./restaurant/src/home.js");
/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contact */ "./restaurant/src/contact.js");
/**
 * @fileoverview Restaurant app
 * @author Thinh Nguyen
 * @version 1.0.0
 */







/**
 * Purge the content of the active tab in main.
 * @return {void}
 */
function purgeActiveTab() {
  const main = document.getElementById("main");
  if (main.children.length > 1) {
    main.removeChild(main.children[1]);
  }
}

/**
 * Switch between tabs.
 * @return {void}
 */
function tabSwitch() {
  const main = document.getElementById("main");
  const tabs = document.querySelectorAll(".main-navbar-item");
  // Default tab is Home
  main.appendChild((0,_home__WEBPACK_IMPORTED_MODULE_2__["default"])());
  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      purgeActiveTab();
      switch (tab.textContent) {
        case "Home":
          main.appendChild((0,_home__WEBPACK_IMPORTED_MODULE_2__["default"])());
          break;
        case "Menu":
          main.appendChild((0,_menu__WEBPACK_IMPORTED_MODULE_1__["default"])());
          break;
        case "Contact":
          main.appendChild((0,_contact__WEBPACK_IMPORTED_MODULE_3__["default"])());
          break;
      }
    });
  });
}

(0,_pageLoad__WEBPACK_IMPORTED_MODULE_0__["default"])();
tabSwitch();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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b0RBQXNCO0FBQ2pEO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNIOztBQUVBLHFEQUFRO0FBQ1IiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qYXZhc2NyaXB0LWRlc2lnbi1wYXR0ZXJucy8uL3Jlc3RhdXJhbnQvc3JjL2NvbnRhY3QuanMiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdC1kZXNpZ24tcGF0dGVybnMvLi9yZXN0YXVyYW50L3NyYy9ob21lLmpzIiwid2VicGFjazovL2phdmFzY3JpcHQtZGVzaWduLXBhdHRlcm5zLy4vcmVzdGF1cmFudC9zcmMvbWVudS5qcyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LWRlc2lnbi1wYXR0ZXJucy8uL3Jlc3RhdXJhbnQvc3JjL3BhZ2VMb2FkLmpzIiwid2VicGFjazovL2phdmFzY3JpcHQtZGVzaWduLXBhdHRlcm5zL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2phdmFzY3JpcHQtZGVzaWduLXBhdHRlcm5zL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LWRlc2lnbi1wYXR0ZXJucy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2phdmFzY3JpcHQtZGVzaWduLXBhdHRlcm5zL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdC1kZXNpZ24tcGF0dGVybnMvLi9yZXN0YXVyYW50L3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBmaWxlb3ZlcnZpZXcgQ29udGFjdCB0YWIgbW9kdWxlXG4gKiBAYXV0aG9yIFRoaW5oIE5ndXllblxuICogQHZlcnNpb24gMS4wLjBcbiAqL1xuXG5cInVzZSBzdHJpY3RcIjtcblxuLyoqXG4gKiBDcmVhdGUgdGhlIGNvbnRhY3QgY29tcG9uZW50LlxuICogQHJldHVybiB7SFRNTEVsZW1lbnR9IENvbnRhY3QgY29tcG9uZW50XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNvbnRhY3QoKSB7XG4gIGNvbnN0IGNvbnRhY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBjb250YWN0QWRkcmVzcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICBjb25zdCBjb250YWN0UGhvbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgY29uc3QgY29udGFjdEVtYWlsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIGNvbnN0IGNvbnRhY3RIb3VycyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICBjb25zdCBjb250YWN0T21vdGVuYXNoaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICBjb250YWN0LmNsYXNzTGlzdC5hZGQoXCJtYWluLWNvbnRhY3RcIik7XG4gIGNvbnRhY3RBZGRyZXNzLmNsYXNzTGlzdC5hZGQoXCJtYWluLWNvbnRhY3QtYWRkcmVzc1wiKTtcbiAgY29udGFjdFBob25lLmNsYXNzTGlzdC5hZGQoXCJtYWluLWNvbnRhY3QtcGhvbmVcIik7XG4gIGNvbnRhY3RFbWFpbC5jbGFzc0xpc3QuYWRkKFwibWFpbi1jb250YWN0LWVtYWlsXCIpO1xuICBjb250YWN0SG91cnMuY2xhc3NMaXN0LmFkZChcIm1haW4tY29udGFjdC1ob3Vyc1wiKTtcbiAgY29udGFjdE9tb3RlbmFzaGkuY2xhc3NMaXN0LmFkZChcIm1haW4tY29udGFjdC1vbW90ZW5hc2hpXCIpO1xuICBjb250YWN0QWRkcmVzcy50ZXh0Q29udGVudCA9XG4gICAgXCJBZGRyZXNzOiAxMjM0IFNha3VyYSBTdHJlZXQgU2hpYnV5YS1rdSwgVG9reW8gMTUwLTAwNDIgSmFwYW5cIjtcbiAgY29udGFjdFBob25lLnRleHRDb250ZW50ID0gXCJQaG9uZTogKzgxLTMtMTIzNC01Njc4XCI7XG4gIGNvbnRhY3RFbWFpbC50ZXh0Q29udGVudCA9IFwiRW1haWw6IGluZm9AYmVubnlzYW5pbWVmb29kLmNvbVwiO1xuICBjb250YWN0SG91cnMudGV4dENvbnRlbnQgPVxuICAgIFwiSG91cnMgb2YgT3BlcmF0aW9uOiBNb25kYXkgLSBGcmlkYXk6IDExOjAwIEFNIC0gOTowMCBQTSB8IFNhdHVyZGF5IC0gU3VuZGF5OiAxMDowMCBBTSAtIDEwOjAwIFBNXCI7XG4gIGNvbnRhY3RPbW90ZW5hc2hpLnRleHRDb250ZW50ID1cbiAgICBcIldlIGhvcGUgdG8gaGVhciBmcm9tIHlvdSBzb29uIGFuZCBsb29rIGZvcndhcmQgdG8gc2VydmluZyB5b3UgYXQgQmVubnkncyFcIjtcbiAgY29udGFjdC5hcHBlbmRDaGlsZChjb250YWN0QWRkcmVzcyk7XG4gIGNvbnRhY3QuYXBwZW5kQ2hpbGQoY29udGFjdFBob25lKTtcbiAgY29udGFjdC5hcHBlbmRDaGlsZChjb250YWN0RW1haWwpO1xuICBjb250YWN0LmFwcGVuZENoaWxkKGNvbnRhY3RIb3Vycyk7XG4gIGNvbnRhY3QuYXBwZW5kQ2hpbGQoY29udGFjdE9tb3RlbmFzaGkpO1xuICByZXR1cm4gY29udGFjdDtcbn1cbiIsIi8qKlxuICogQGZpbGVvdmVydmlldyBIb21lIHRhYiBtb2R1bGVcbiAqIEBhdXRob3IgVGhpbmggTmd1eWVuXG4gKiBAdmVyc2lvbiAxLjAuMFxuICovXG5cblwidXNlIHN0cmljdFwiO1xuXG4vKipcbiAqIENyZWF0ZSB0aGUgaG9tZSBjb21wb25lbnQuXG4gKiBAcmV0dXJuIHtIVE1MRWxlbWVudH0gSG9tZSBjb21wb25lbnRcbiAqIEBleHBvcnRcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaG9tZSgpIHtcbiAgY29uc3QgaG9tZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGhvbWUuY2xhc3NMaXN0LmFkZChcIm1haW4taG9tZVwiKTtcbiAgY29uc3QgaG9tZVRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpO1xuICBob21lVGl0bGUuY2xhc3NMaXN0LmFkZChcIm1haW4taG9tZS10aXRsZVwiKTtcbiAgaG9tZVRpdGxlLnRleHRDb250ZW50ID0gXCJXZWxjb21lIHRvIEJlbm55J3NcIjtcbiAgaG9tZS5hcHBlbmRDaGlsZChob21lVGl0bGUpO1xuICBjb25zdCBob21lRGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgaG9tZURlc2NyaXB0aW9uLmNsYXNzTGlzdC5hZGQoXCJtYWluLWhvbWUtZGVzY3JpcHRpb25cIik7XG4gIGhvbWVEZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9XG4gICAgXCJBIG9uZS1vZi1hLWtpbmQgcmVzdGF1cmFudCB0aGF0IGJyaW5ncyB0aGUgZGVsZWN0YWJsZSBmbGF2b3JzIG9mIHlvdXIgZmF2b3JpdGUgYW5pbWVzIHRvIHlvdXIgcGxhdGUuIFNpdHVhdGVkIGluIHRoZSBidXN0bGluZyBoZWFydCBvZiBUb2t5bywgQmVubnkncyBpcyBhIGN1bGluYXJ5IG9hc2lzIHRoYXQgb2ZmZXJzIGFuIGVjbGVjdGljIG1lbnUgb2YgZGlzaGVzIGluc3BpcmVkIGJ5IHZhcmlvdXMgYW5pbWVzLiBGcm9tIEhvd2wgTW92aW5nIENhc3RsZSdzIGZhbW91cyBDYWxjaWZlcidzIGJyZWFrZmFzdCB0byB0aGUgbW91dGgtd2F0ZXJpbmcgR290Y2hhIFBvcmsgUm9hc3QgZnJvbSBTaG9rdWdla2kgbm8gU2hvdW1hLCBvdXIgY2hlZnMgaGF2ZSBwYWluc3Rha2luZ2x5IHJlY3JlYXRlZCB0aGUgYXV0aGVudGljIGZsYXZvcnMgb2YgdGhlc2UgYmVsb3ZlZCBzaG93cy4gV2UgcHJpZGUgb3Vyc2VsdmVzIG9uIHVzaW5nIG9ubHkgdGhlIGZyZXNoZXN0LCBoaWdoLXF1YWxpdHkgaW5ncmVkaWVudHMgdG8gY3JlYXRlIGVhY2ggZGlzaCwgYW5kIG91ciBtZW51IGlzIHRob3VnaHRmdWxseSBjdXJhdGVkIHRvIGNhdGVyIHRvIGFsbCBkaWV0YXJ5IHJlcXVpcmVtZW50cy4gT3VyIGNvenkgYW5kIHZpYnJhbnQgYXRtb3NwaGVyZSBwcm92aWRlcyB0aGUgcGVyZmVjdCBzZXR0aW5nIHRvIHNhdm9yIG91ciBkZWxpY2lvdXMgZm9vZCB3aXRoIGZyaWVuZHMgYW5kIGZhbWlseS4gQ29tZSBhbmQgZXhwZXJpZW5jZSB0aGUgbWFnaWMgb2YgYW5pbWUtaW5zcGlyZWQgY3Vpc2luZSBhdCBCZW5ueSdzLlwiO1xuICBob21lLmFwcGVuZENoaWxkKGhvbWVEZXNjcmlwdGlvbik7XG4gIHJldHVybiBob21lO1xufVxuIiwiLyoqXG4gKiBAZmlsZW92ZXJ2aWV3IE1lbnUgdGFiIG1vZHVsZVxuICogQGF1dGhvciBUaGluaCBOZ3V5ZW5cbiAqIEB2ZXJzaW9uIDEuMC4wXG4gKi9cblxuXCJ1c2Ugc3RyaWN0XCI7XG5cbmNvbnN0IG1lbnVJdGVtcyA9IHtcbiAgYnVyaURhaWtvbjoge1xuICAgIG5hbWU6IFwiQnVyaSBEYWlrb25cIixcbiAgICBkZXNjcmlwdGlvbjpcbiAgICAgIFwiQSBKYXBhbmVzZSBkaXNoIG9mIGdyaWxsZWQgeWVsbG93dGFpbCBhbmQgZGFpa29uIHJhZGlzaC4gQSBtZWFsIHRoYXQgaXMgc3VidGx5IHN3ZWV0LCBzYWx0eSwgYW5kIHBlcmZlY3Qgd2l0aCBhIHN0ZWFtaW5nIGhvdCBib3dsIG9mIHJpY2UuIEZyb20gU2Vpc2h1biBCdXRhIFlhcm91LlwiLFxuICAgIGltZ1BhdGg6IFwiLi9hc3NldHMvYnVyaURhaWtvbi5wbmdcIixcbiAgfSxcbiAgY2FsY2lmZXJCcmVha2Zhc3Q6IHtcbiAgICBuYW1lOiBcIkNhbGNpZmVyJ3MgQnJlYWtmYXN0XCIsXG4gICAgZGVzY3JpcHRpb246XG4gICAgICBcIkEgYnJlYWtmYXN0IG1hZGUgYnkgSG93bCBjb25zaXN0ZWQgb2YgZnJ5aW5nIHVwIGJhY29uIGFuZCBlZ2dzLiBGcm9tIHRoZSB3b3JsZC1mYW1vdXMgSG93bCdzIE1vdmluZyBDYXN0bGUuXCIsXG4gICAgaW1nUGF0aDogXCIuL2Fzc2V0cy9jYWxjaWZlckJyZWFrZmFzdC5qcGdcIixcbiAgfSxcbiAgZ290Y2hhUG9ya1JvYXN0OiB7XG4gICAgbmFtZTogXCJHb3RjaGEgUG9yayBSb2FzdFwiLFxuICAgIGRlc2NyaXB0aW9uOlxuICAgICAgXCJBIGNyZWF0aXZlIGRpc2ggbWFkZSB3aXRoIGNyZWFteSwgc2Vhc29uZWQgbWFzaGVkIHBvdGF0byB3cmFwcGVkIGluIGRlbGljaW91cyBiYWNvbiBhbmQgZHJpenpsZWQgd2l0aCBhIHJpY2gsIHJlZCB3aW5lIHNhdWNlLCB0YWtlbiBmcm9tIFNob2t1Z2VraSBubyBTaG91bWEuXCIsXG4gICAgaW1nUGF0aDogXCIuL2Fzc2V0cy9nb3RjaGFQb3JrUm9hc3Qud2VicFwiLFxuICB9LFxuICBoYW1SYW1lbjoge1xuICAgIG5hbWU6IFwiSGFtIFJhbWVuXCIsXG4gICAgZGVzY3JpcHRpb246XG4gICAgICBcIkVsZXZhdGUgeW91ciByYW1lbiBnYW1lIHdpdGggaGFtIGFuZCBzb2Z0LWJvaWxlZCBlZ2dzLiBBIHNpbXBsZSBkaXNoIGZyb20gUG9ueW8uXCIsXG4gICAgaW1nUGF0aDogXCIuL2Fzc2V0cy9oYW1SYW1lbi5qcGVnXCIsXG4gIH0sXG4gIGZ1cmlrYWtlUmljZToge1xuICAgIG5hbWU6IFwiRnVyaWtha2UgUmljZVwiLFxuICAgIGRlc2NyaXB0aW9uOlxuICAgICAgXCJNYWRlIG9mIHJpY2UsIHNjcmFtYmxlZCBlZ2dzLCBjaGlja2VuLCBncmVlbiBvbmlvbnMsIGFuZCB0aGUgc2VjcmV0IGluZ3JlZGllbnRzLCBnZWxhdGluIGN1YmVzLCB0aGlzIGRpc2ggZnJvbSBTaG9rdWdla2kgbm8gU2hvdW1hIGlzIGEgbXVzdC10cnkuXCIsXG4gICAgaW1nUGF0aDogXCIuL2Fzc2V0cy9mdXJpa2FrZVJpY2UuanBnXCIsXG4gIH0sXG4gIHBvcmtLYXRzdWRvbjoge1xuICAgIG5hbWU6IFwiUG9yayBLYXRzdWRvblwiLFxuICAgIGRlc2NyaXB0aW9uOlxuICAgICAgXCJBbiBpbmNyZWRpYmxlIGNvbWZvcnQgZm9vZCBkaXNoIGZyb20gWXVyaSEhISBvbiBJY2UgbWFkZSBvZiByaWNlLCBlZ2dzLCBvbmlvbnMsIHNhdWNlLCBhbmQgZGVlcCBmcmllZCBwb3JrLlwiLFxuICAgIGltZ1BhdGg6IFwiLi9hc3NldHMvcG9ya0thdHN1ZG9uLmpwZ1wiLFxuICB9LFxufTtcblxuLyoqXG4gKiBDcmVhdGUgdGhlIG1lbnUgY29tcG9uZW50LlxuICogQHJldHVybiB7SFRNTEVsZW1lbnR9IE1lbnUgY29tcG9uZW50XG4gKiBAZXhwb3J0XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG1lbnUoKSB7XG4gIGNvbnN0IG1lbnVHcmlkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgbWVudUdyaWQuY2xhc3NMaXN0LmFkZChcIm1haW4tbWVudS1ncmlkXCIpO1xuICBPYmplY3QudmFsdWVzKG1lbnVJdGVtcykuZm9yRWFjaCgodmFsdWUpID0+IHtcbiAgICBjb25zdCBtZW51SXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29uc3QgbWVudUl0ZW1UaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoM1wiKTtcbiAgICBjb25zdCBtZW51SXRlbUltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gICAgY29uc3QgbWVudUl0ZW1EZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIG1lbnVJdGVtLmNsYXNzTGlzdC5hZGQoXCJtYWluLW1lbnUtaXRlbVwiKTtcbiAgICBtZW51SXRlbVRpdGxlLmNsYXNzTGlzdC5hZGQoXCJtYWluLW1lbnUtaXRlbS10aXRsZVwiKTtcbiAgICBtZW51SXRlbUltZy5jbGFzc0xpc3QuYWRkKFwibWFpbi1tZW51LWl0ZW0taW1nXCIpO1xuICAgIG1lbnVJdGVtRGVzY3JpcHRpb24uY2xhc3NMaXN0LmFkZChcIm1haW4tbWVudS1pdGVtLWRlc2NyaXB0aW9uXCIpO1xuICAgIG1lbnVJdGVtVGl0bGUudGV4dENvbnRlbnQgPSB2YWx1ZS5uYW1lO1xuICAgIG1lbnVJdGVtSW1nLnNyYyA9IHZhbHVlLmltZ1BhdGg7XG4gICAgbWVudUl0ZW1JbWcuYWx0ID0gdmFsdWUubmFtZTtcbiAgICBtZW51SXRlbURlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gdmFsdWUuZGVzY3JpcHRpb247XG4gICAgbWVudUl0ZW0uYXBwZW5kQ2hpbGQobWVudUl0ZW1UaXRsZSk7XG4gICAgbWVudUl0ZW0uYXBwZW5kQ2hpbGQobWVudUl0ZW1JbWcpO1xuICAgIG1lbnVJdGVtLmFwcGVuZENoaWxkKG1lbnVJdGVtRGVzY3JpcHRpb24pO1xuICAgIG1lbnVHcmlkLmFwcGVuZENoaWxkKG1lbnVJdGVtKTtcbiAgfSk7XG4gIHJldHVybiBtZW51R3JpZDtcbn1cbiIsIi8qKlxuICogQGZpbGVvdmVydmlldyBJbml0aWFsaXplIHBhZ2UgbG9hZFxuICogQGF1dGhvciBUaGluaCBOZ3V5ZW5cbiAqIEB2ZXJzaW9uIDEuMC4wXG4gKi9cblxuXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qKlxuICogQ3JlYXRlIHRoZSBoZWFkZXIgY29tcG9uZW50LlxuICogQHJldHVybiB7SFRNTEVsZW1lbnR9IEhlYWRlciBlbGVtZW50XG4gKi9cbmZ1bmN0aW9uIGhlYWRlcigpIHtcbiAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImhlYWRlclwiKTtcbiAgY29uc3QgaGVhZGVyQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgaGVhZGVyVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XG4gIGhlYWRlci5jbGFzc0xpc3QuYWRkKFwiaGVhZGVyXCIpO1xuICBoZWFkZXJDb250YWluZXIuY2xhc3NMaXN0LmFkZChcImhlYWRlci1jb250YWluZXJcIik7XG4gIGhlYWRlclRpdGxlLmNsYXNzTGlzdC5hZGQoXCJoZWFkZXItdGl0bGVcIik7XG4gIGhlYWRlclRpdGxlLnRleHRDb250ZW50ID0gXCJTZWlzaHVuIEJ1dGEgWWFyb3UgUmVzdGF1cmFudFwiO1xuICBoZWFkZXJDb250YWluZXIuYXBwZW5kQ2hpbGQoaGVhZGVyVGl0bGUpO1xuICBoZWFkZXIuYXBwZW5kQ2hpbGQoaGVhZGVyQ29udGFpbmVyKTtcbiAgcmV0dXJuIGhlYWRlcjtcbn1cblxuLyoqXG4gKiBDcmVhdGUgdGhlIG1haW4gY29tcG9uZW50LlxuICogQHJldHVybiB7SFRNTEVsZW1lbnR9IE1haW4gZWxlbWVudFxuICovXG5mdW5jdGlvbiBtYWluKCkge1xuICBjb25zdCBtYWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm1haW5cIik7XG4gIGNvbnN0IG1haW5OYXZiYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibmF2XCIpO1xuICBjb25zdCBtYWluTmF2YmFySXRlbXMgPSBbXCJIb21lXCIsIFwiTWVudVwiLCBcIkNvbnRhY3RcIl07XG4gIG1haW4uY2xhc3NMaXN0LmFkZChcIm1haW5cIik7XG4gIG1haW4uaWQgPSBcIm1haW5cIjtcbiAgbWFpbk5hdmJhci5jbGFzc0xpc3QuYWRkKFwibWFpbi1uYXZiYXJcIik7XG4gIG1haW5OYXZiYXJJdGVtcy5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgY29uc3QgbWFpbk5hdmJhckl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIG1haW5OYXZiYXJJdGVtLmNsYXNzTGlzdC5hZGQoXCJtYWluLW5hdmJhci1pdGVtXCIpO1xuICAgIG1haW5OYXZiYXJJdGVtLnRleHRDb250ZW50ID0gaXRlbTtcbiAgICBtYWluTmF2YmFyLmFwcGVuZENoaWxkKG1haW5OYXZiYXJJdGVtKTtcbiAgfSk7XG4gIG1haW4uYXBwZW5kQ2hpbGQobWFpbk5hdmJhcik7XG4gIHJldHVybiBtYWluO1xufVxuXG4vKipcbiAqIENyZWF0ZSB0aGUgZm9vdGVyIGNvbXBvbmVudC5cbiAqIEByZXR1cm4ge0hUTUxFbGVtZW50fSBGb290ZXIgZWxlbWVudFxuICovXG5mdW5jdGlvbiBmb290ZXIoKSB7XG4gIGNvbnN0IGZvb3RlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmb290ZXJcIik7XG4gIGNvbnN0IGZvb3RlclRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgY29uc3QgZm9vdGVyTGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xuICBjb25zdCBmb290ZXJJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlcIik7XG4gIGZvb3Rlci5jbGFzc0xpc3QuYWRkKFwiZm9vdGVyXCIpO1xuICBmb290ZXJJY29uLmNsYXNzTGlzdC5hZGQoXCJmYWJcIiwgXCJmYS1naXRodWJcIik7XG4gIGZvb3RlclRleHQudGV4dENvbnRlbnQgPVxuICAgIFwiQ29weXJpZ2h0IMKpIFwiICsgbmV3IERhdGUoKS5nZXRGdWxsWWVhcigpICsgXCIgRmVsaXhOZ0ZlbmRlclwiO1xuICBmb290ZXJMaW5rLmhyZWYgPSBcImh0dHBzOi8vZ2l0aHViLmNvbS9GZWxpeE5nRmVuZGVyXCI7XG4gIGZvb3RlckxpbmsudGFyZ2V0ID0gXCJfYmxhbmtcIjtcbiAgZm9vdGVyTGluay5yZWwgPSBcIm5vb3BlbmVyIG5vcmVmZXJyZXJcIjtcbiAgZm9vdGVyTGluay5hcHBlbmRDaGlsZChmb290ZXJJY29uKTtcbiAgZm9vdGVyLmFwcGVuZENoaWxkKGZvb3RlclRleHQpO1xuICBmb290ZXIuYXBwZW5kQ2hpbGQoZm9vdGVyTGluayk7XG4gIHJldHVybiBmb290ZXI7XG59XG5cbi8qKlxuICogSW5pdGlhbGl6ZSBwYWdlIGxvYWQuXG4gKiBAcmV0dXJuIHt2b2lkfVxuICogQGV4cG9ydFxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBwYWdlTG9hZCgpIHtcbiAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udGVudFwiKTtcbiAgY29udGVudC5hcHBlbmRDaGlsZChoZWFkZXIoKSk7XG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQobWFpbigpKTtcbiAgY29udGVudC5hcHBlbmRDaGlsZChmb290ZXIoKSk7XG59IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIvKipcbiAqIEBmaWxlb3ZlcnZpZXcgUmVzdGF1cmFudCBhcHBcbiAqIEBhdXRob3IgVGhpbmggTmd1eWVuXG4gKiBAdmVyc2lvbiAxLjAuMFxuICovXG5cblwidXNlIHN0cmljdFwiO1xuaW1wb3J0IHBhZ2VMb2FkIGZyb20gXCIuL3BhZ2VMb2FkXCI7XG5pbXBvcnQgY3JlYXRlTWVudUNvbXBvbmVudCBmcm9tIFwiLi9tZW51XCI7XG5pbXBvcnQgY3JlYXRlSG9tZUNvbXBvbmVudCBmcm9tIFwiLi9ob21lXCI7XG5pbXBvcnQgY3JlYXRlQ29udGFjdENvbXBvbmVudCBmcm9tIFwiLi9jb250YWN0XCI7XG5cbi8qKlxuICogUHVyZ2UgdGhlIGNvbnRlbnQgb2YgdGhlIGFjdGl2ZSB0YWIgaW4gbWFpbi5cbiAqIEByZXR1cm4ge3ZvaWR9XG4gKi9cbmZ1bmN0aW9uIHB1cmdlQWN0aXZlVGFiKCkge1xuICBjb25zdCBtYWluID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtYWluXCIpO1xuICBpZiAobWFpbi5jaGlsZHJlbi5sZW5ndGggPiAxKSB7XG4gICAgbWFpbi5yZW1vdmVDaGlsZChtYWluLmNoaWxkcmVuWzFdKTtcbiAgfVxufVxuXG4vKipcbiAqIFN3aXRjaCBiZXR3ZWVuIHRhYnMuXG4gKiBAcmV0dXJuIHt2b2lkfVxuICovXG5mdW5jdGlvbiB0YWJTd2l0Y2goKSB7XG4gIGNvbnN0IG1haW4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1haW5cIik7XG4gIGNvbnN0IHRhYnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLm1haW4tbmF2YmFyLWl0ZW1cIik7XG4gIC8vIERlZmF1bHQgdGFiIGlzIEhvbWVcbiAgbWFpbi5hcHBlbmRDaGlsZChjcmVhdGVIb21lQ29tcG9uZW50KCkpO1xuICB0YWJzLmZvckVhY2goKHRhYikgPT4ge1xuICAgIHRhYi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgcHVyZ2VBY3RpdmVUYWIoKTtcbiAgICAgIHN3aXRjaCAodGFiLnRleHRDb250ZW50KSB7XG4gICAgICAgIGNhc2UgXCJIb21lXCI6XG4gICAgICAgICAgbWFpbi5hcHBlbmRDaGlsZChjcmVhdGVIb21lQ29tcG9uZW50KCkpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFwiTWVudVwiOlxuICAgICAgICAgIG1haW4uYXBwZW5kQ2hpbGQoY3JlYXRlTWVudUNvbXBvbmVudCgpKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBcIkNvbnRhY3RcIjpcbiAgICAgICAgICBtYWluLmFwcGVuZENoaWxkKGNyZWF0ZUNvbnRhY3RDb21wb25lbnQoKSk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfSk7XG4gIH0pO1xufVxuXG5wYWdlTG9hZCgpO1xudGFiU3dpdGNoKCk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=