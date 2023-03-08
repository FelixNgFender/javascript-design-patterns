/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./restaurant/src/components/contact.js":
/*!**********************************************!*\
  !*** ./restaurant/src/components/contact.js ***!
  \**********************************************/
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

/***/ }),

/***/ "./restaurant/src/components/home.js":
/*!*******************************************!*\
  !*** ./restaurant/src/components/home.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

/***/ }),

/***/ "./restaurant/src/components/menu/menu.js":
/*!************************************************!*\
  !*** ./restaurant/src/components/menu/menu.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

/***/ }),

/***/ "./restaurant/src/components/pageLoad.js":
/*!***********************************************!*\
  !*** ./restaurant/src/components/pageLoad.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ pageLoad)
/* harmony export */ });
/* harmony import */ var _typography__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./typography */ "./restaurant/src/components/typography.js");
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
  headerTitle.innerHTML = (0,_typography__WEBPACK_IMPORTED_MODULE_0__.decorateText)("Seishun Buta Yarou Restaurant").innerHTML;
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
  mainNavbarItems.forEach(item => {
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
  footerText.textContent = "Copyright © " + new Date().getFullYear() + " FelixNgFender";
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

/***/ }),

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

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./restaurant/src/styles/styles-reset.css":
/*!**************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./restaurant/src/styles/styles-reset.css ***!
  \**************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/* http://meyerweb.com/eric/tools/css/reset/ \n   v2.0 | 20110126\n   License: none (public domain)\n*/\n\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed, \nfigure, figcaption, footer, header, hgroup, \nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n\tmargin: 0;\n\tpadding: 0;\n\tborder: 0;\n\tfont-size: 100%;\n\tfont: inherit;\n\tvertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure, \nfooter, header, hgroup, menu, nav, section {\n\tdisplay: block;\n}\nbody {\n\tline-height: 1;\n}\nol, ul {\n\tlist-style: none;\n}\nblockquote, q {\n\tquotes: none;\n}\nblockquote:before, blockquote:after,\nq:before, q:after {\n\tcontent: '';\n\tcontent: none;\n}\ntable {\n\tborder-collapse: collapse;\n\tborder-spacing: 0;\n}", "",{"version":3,"sources":["webpack://./restaurant/src/styles/styles-reset.css"],"names":[],"mappings":"AAAA;;;CAGC;;AAED;;;;;;;;;;;;;CAaC,SAAS;CACT,UAAU;CACV,SAAS;CACT,eAAe;CACf,aAAa;CACb,wBAAwB;AACzB;AACA,gDAAgD;AAChD;;CAEC,cAAc;AACf;AACA;CACC,cAAc;AACf;AACA;CACC,gBAAgB;AACjB;AACA;CACC,YAAY;AACb;AACA;;CAEC,WAAW;CACX,aAAa;AACd;AACA;CACC,yBAAyB;CACzB,iBAAiB;AAClB","sourcesContent":["/* http://meyerweb.com/eric/tools/css/reset/ \n   v2.0 | 20110126\n   License: none (public domain)\n*/\n\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed, \nfigure, figcaption, footer, header, hgroup, \nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n\tmargin: 0;\n\tpadding: 0;\n\tborder: 0;\n\tfont-size: 100%;\n\tfont: inherit;\n\tvertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure, \nfooter, header, hgroup, menu, nav, section {\n\tdisplay: block;\n}\nbody {\n\tline-height: 1;\n}\nol, ul {\n\tlist-style: none;\n}\nblockquote, q {\n\tquotes: none;\n}\nblockquote:before, blockquote:after,\nq:before, q:after {\n\tcontent: '';\n\tcontent: none;\n}\ntable {\n\tborder-collapse: collapse;\n\tborder-spacing: 0;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./restaurant/src/styles/styles.css":
/*!********************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./restaurant/src/styles/styles.css ***!
  \********************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! GriffoClassicoBold.woff2 */ "./restaurant/src/styles/GriffoClassicoBold.woff2"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! GriffoClassicoBold.woff */ "./restaurant/src/styles/GriffoClassicoBold.woff"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! GriffoClassicoBold.ttf */ "./restaurant/src/styles/GriffoClassicoBold.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/bennyRestaurant.jpg */ "./restaurant/src/assets/bennyRestaurant.jpg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_3___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n  --passionate-red: 191, 5, 55;\n  --nostalgic-yellow: 242, 233, 107;\n  --soft-gray: 237, 196, 178;\n  --yello-range: 242, 174, 114;\n  --dark-black: 89, 2, 2;\n  --sharp-white: 255, 255, 255;\n  --vista-blue: 138, 166, 198;\n  --steel-blue: 50, 129, 178;\n  --yinmn-blue: 57, 85, 158;\n  --border-radius: 8px;\n  --spacing-xs: 5px;\n  --spacing-sm: 10px;\n  --spacing-md: 15px;\n  --spacing-lg: 20px;\n  --spacing-xl: 40px;\n  --container-width: 1200px;\n  --footer-height: 40px;\n  --btn-height: 50px;\n  --img-height: 300px;\n  --shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;\n}\n\n/* GLOBAL */\n@font-face {\n  font-family: \"Griffo Classico\";\n  src: local(\"Griffo Classico Bold\"), local(\"Griffo-Classico-Bold\"),\n    url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") format(\"woff2\"),\n    url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ") format(\"woff\"),\n    url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ") format(\"truetype\");\n  font-weight: 700;\n  font-style: normal;\n}\n\nhtml {\n  box-sizing: border-box;\n  height: 100%;\n}\n\n*,\n*:before,\n*:after {\n  box-sizing: inherit;\n}\n\nbody {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + ");\n  background-size: cover;\n  background-repeat: no-repeat;\n  background-attachment: fixed;\n  background-position: 35%;\n  min-height: 100%;\n  display: grid;\n  grid-template-rows: auto 1fr auto;\n}\n\n.decorated-main {\n  color: rbga(var(--yinmn-blue), 1);\n}\n\n.decorated-accent {\n  color: rgba(var(--vista-blue), 1);\n}\n\n/* HEADER */\n.header {\n  display: flex;\n  justify-content: center;\n  background-color: rgba(var(--nostalgic-yellow), 0.8);\n  box-shadow: var(--shadow);\n}\n\n.header-container {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 100%;\n  max-width: var(--container-width);\n  padding: var(--spacing-lg);\n}\n\n.header-title {\n  font-family: \"Griffo Classico\", sans-serif;\n  color: rgba(var(--yinmn-blue), 1);\n  font-size: 1.5rem;\n}\n\n/* NAVBAR */\n.main {\n  font-family: \"Alegreya\", sans-serif;\n  font-size: 1.2rem;\n  color: rgba(var(--dark-black), 1);\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  width: 100%;\n  max-width: var(--container-width);\n  margin: 0 auto;\n  background-color: rgba(var(--yello-range), 0.8);\n}\n\n.main-navbar {\n  width: 100%;\n  height: var(--btn-height);\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  box-shadow: var(--shadow);\n}\n\n.main-navbar-item {\n  font-family: \"Alegreya\", sans-serif;\n  color: rgba(var(--yinmn-blue, 1));\n  font-size: 1.2rem;\n  cursor: pointer;\n  border: none;\n  background-color: rgba(var(--yello-range), 1);\n  transition: all 0.3s ease-in-out;\n}\n\n.main-navbar-item:hover,\n.main-navbar-item:active,\n.main-navbar-item:focus {\n  background-color: rgba(var(--nostalgic-yellow), 0.8);\n}\n\n/* HOME */\n.main-home {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  width: 100%;\n  height: 100%;\n  max-width: var(--container-width);\n  margin: 0 auto;\n  padding: var(--spacing-lg);\n  background-color: rgba(var(--nostalgic-yellow), 1);\n}\n\n.main-home-title {\n  font-family: \"Griffo Classico\", sans-serif;\n  color: rgba(var(--yinmn-blue), 1);\n  font-size: 2rem;\n  margin: var(--spacing-lg) 0;\n}\n\n.main-home-description {\n  color: rgba(var(--dark-black), 1);\n  font-size: 1.5rem;\n  line-height: 2;\n  letter-spacing: 0.15rem;\n  max-width: calc(var(--container-width) / 1.5);\n}\n\n/* MENU */\n.main-menu-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(calc(var(--container-width) / 3), 1fr));\n  grid-gap: var(--spacing-lg);\n  padding: var(--spacing-lg);\n}\n\n.main-menu-item {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  background-color: rgba(var(--nostalgic-yellow), 1);\n  border-radius: var(--border-radius);\n  box-shadow: var(--shadow);\n  transition: all 0.3s ease-in-out;\n}\n\n.main-menu-item:hover {\n  transform: scale(1.03);\n}\n\n.main-menu-item-img {\n  width: 100%;\n  height: var(--img-height);\n  object-fit: cover;\n  border-radius: var(--border-radius) var(--border-radius) 0 0;\n}\n\n.main-menu-item-title {\n  font-family: \"Griffo Classico\", sans-serif;\n  color: rgba(var(--yinmn-blue), 1);\n  font-size: 1.5rem;\n  margin: var(--spacing-sm) 0;\n}\n\n.main-menu-item-description {\n  color: rgba(var(--dark-black), 1);\n  font-size: 1rem;\n  margin: var(--spacing-sm);\n  letter-spacing: 0.15rem;\n}\n\n/* CONTACT */\n.main-contact {\n  display: flex;\n  flex-direction: column;\n  gap: var(--spacing-lg);\n  font-size: 1.5rem;\n  letter-spacing: 0.15rem;\n  width: 100%;\n  height: 100%;\n  max-width: var(--container-width);\n  margin: 0 auto;\n  padding: var(--spacing-lg);\n  background-color: rgba(var(--nostalgic-yellow), 1);\n}\n\n/* FOOTER */\n.footer {\n  padding-bottom: var(--spacing-xs);\n  height: var(--footer-height);\n  background-color: rgba(var(--soft-gray), 0.8);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 10px;\n  width: 100%;\n  grid-row: 3 / 4;\n}\n\n.fa-github {\n  font-size: 20px;\n  margin-top: 4px;\n  color: black;\n  transition: transform 0.3s ease-in-out;\n}\n\n.fa-github:hover {\n  transform: rotate(360deg) scale(1.2);\n}\n\n/* MEDIA QUERIES */\n@media screen and (max-width: 425px) {\n  .main-menu-grid {\n    grid-template-columns: 1fr;\n  }\n}\n", "",{"version":3,"sources":["webpack://./restaurant/src/styles/styles.css"],"names":[],"mappings":"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","sourcesContent":[":root {\n  --passionate-red: 191, 5, 55;\n  --nostalgic-yellow: 242, 233, 107;\n  --soft-gray: 237, 196, 178;\n  --yello-range: 242, 174, 114;\n  --dark-black: 89, 2, 2;\n  --sharp-white: 255, 255, 255;\n  --vista-blue: 138, 166, 198;\n  --steel-blue: 50, 129, 178;\n  --yinmn-blue: 57, 85, 158;\n  --border-radius: 8px;\n  --spacing-xs: 5px;\n  --spacing-sm: 10px;\n  --spacing-md: 15px;\n  --spacing-lg: 20px;\n  --spacing-xl: 40px;\n  --container-width: 1200px;\n  --footer-height: 40px;\n  --btn-height: 50px;\n  --img-height: 300px;\n  --shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;\n}\n\n/* GLOBAL */\n@font-face {\n  font-family: \"Griffo Classico\";\n  src: local(\"Griffo Classico Bold\"), local(\"Griffo-Classico-Bold\"),\n    url(\"GriffoClassicoBold.woff2\") format(\"woff2\"),\n    url(\"GriffoClassicoBold.woff\") format(\"woff\"),\n    url(\"GriffoClassicoBold.ttf\") format(\"truetype\");\n  font-weight: 700;\n  font-style: normal;\n}\n\nhtml {\n  box-sizing: border-box;\n  height: 100%;\n}\n\n*,\n*:before,\n*:after {\n  box-sizing: inherit;\n}\n\nbody {\n  background-image: url(\"../assets/bennyRestaurant.jpg\");\n  background-size: cover;\n  background-repeat: no-repeat;\n  background-attachment: fixed;\n  background-position: 35%;\n  min-height: 100%;\n  display: grid;\n  grid-template-rows: auto 1fr auto;\n}\n\n.decorated-main {\n  color: rbga(var(--yinmn-blue), 1);\n}\n\n.decorated-accent {\n  color: rgba(var(--vista-blue), 1);\n}\n\n/* HEADER */\n.header {\n  display: flex;\n  justify-content: center;\n  background-color: rgba(var(--nostalgic-yellow), 0.8);\n  box-shadow: var(--shadow);\n}\n\n.header-container {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 100%;\n  max-width: var(--container-width);\n  padding: var(--spacing-lg);\n}\n\n.header-title {\n  font-family: \"Griffo Classico\", sans-serif;\n  color: rgba(var(--yinmn-blue), 1);\n  font-size: 1.5rem;\n}\n\n/* NAVBAR */\n.main {\n  font-family: \"Alegreya\", sans-serif;\n  font-size: 1.2rem;\n  color: rgba(var(--dark-black), 1);\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  width: 100%;\n  max-width: var(--container-width);\n  margin: 0 auto;\n  background-color: rgba(var(--yello-range), 0.8);\n}\n\n.main-navbar {\n  width: 100%;\n  height: var(--btn-height);\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  box-shadow: var(--shadow);\n}\n\n.main-navbar-item {\n  font-family: \"Alegreya\", sans-serif;\n  color: rgba(var(--yinmn-blue, 1));\n  font-size: 1.2rem;\n  cursor: pointer;\n  border: none;\n  background-color: rgba(var(--yello-range), 1);\n  transition: all 0.3s ease-in-out;\n}\n\n.main-navbar-item:hover,\n.main-navbar-item:active,\n.main-navbar-item:focus {\n  background-color: rgba(var(--nostalgic-yellow), 0.8);\n}\n\n/* HOME */\n.main-home {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  width: 100%;\n  height: 100%;\n  max-width: var(--container-width);\n  margin: 0 auto;\n  padding: var(--spacing-lg);\n  background-color: rgba(var(--nostalgic-yellow), 1);\n}\n\n.main-home-title {\n  font-family: \"Griffo Classico\", sans-serif;\n  color: rgba(var(--yinmn-blue), 1);\n  font-size: 2rem;\n  margin: var(--spacing-lg) 0;\n}\n\n.main-home-description {\n  color: rgba(var(--dark-black), 1);\n  font-size: 1.5rem;\n  line-height: 2;\n  letter-spacing: 0.15rem;\n  max-width: calc(var(--container-width) / 1.5);\n}\n\n/* MENU */\n.main-menu-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(calc(var(--container-width) / 3), 1fr));\n  grid-gap: var(--spacing-lg);\n  padding: var(--spacing-lg);\n}\n\n.main-menu-item {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  background-color: rgba(var(--nostalgic-yellow), 1);\n  border-radius: var(--border-radius);\n  box-shadow: var(--shadow);\n  transition: all 0.3s ease-in-out;\n}\n\n.main-menu-item:hover {\n  transform: scale(1.03);\n}\n\n.main-menu-item-img {\n  width: 100%;\n  height: var(--img-height);\n  object-fit: cover;\n  border-radius: var(--border-radius) var(--border-radius) 0 0;\n}\n\n.main-menu-item-title {\n  font-family: \"Griffo Classico\", sans-serif;\n  color: rgba(var(--yinmn-blue), 1);\n  font-size: 1.5rem;\n  margin: var(--spacing-sm) 0;\n}\n\n.main-menu-item-description {\n  color: rgba(var(--dark-black), 1);\n  font-size: 1rem;\n  margin: var(--spacing-sm);\n  letter-spacing: 0.15rem;\n}\n\n/* CONTACT */\n.main-contact {\n  display: flex;\n  flex-direction: column;\n  gap: var(--spacing-lg);\n  font-size: 1.5rem;\n  letter-spacing: 0.15rem;\n  width: 100%;\n  height: 100%;\n  max-width: var(--container-width);\n  margin: 0 auto;\n  padding: var(--spacing-lg);\n  background-color: rgba(var(--nostalgic-yellow), 1);\n}\n\n/* FOOTER */\n.footer {\n  padding-bottom: var(--spacing-xs);\n  height: var(--footer-height);\n  background-color: rgba(var(--soft-gray), 0.8);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 10px;\n  width: 100%;\n  grid-row: 3 / 4;\n}\n\n.fa-github {\n  font-size: 20px;\n  margin-top: 4px;\n  color: black;\n  transition: transform 0.3s ease-in-out;\n}\n\n.fa-github:hover {\n  transform: rotate(360deg) scale(1.2);\n}\n\n/* MEDIA QUERIES */\n@media screen and (max-width: 425px) {\n  .main-menu-grid {\n    grid-template-columns: 1fr;\n  }\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./restaurant/src/styles/styles-reset.css":
/*!************************************************!*\
  !*** ./restaurant/src/styles/styles-reset.css ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_reset_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!./styles-reset.css */ "./node_modules/css-loader/dist/cjs.js!./restaurant/src/styles/styles-reset.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_reset_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_reset_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_styles_reset_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_styles_reset_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./restaurant/src/styles/styles.css":
/*!******************************************!*\
  !*** ./restaurant/src/styles/styles.css ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!./styles.css */ "./node_modules/css-loader/dist/cjs.js!./restaurant/src/styles/styles.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./restaurant/src/assets/bennyRestaurant.jpg":
/*!***************************************************!*\
  !*** ./restaurant/src/assets/bennyRestaurant.jpg ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "7793844a3549488528ef.jpg";

/***/ }),

/***/ "./restaurant/src/assets/favicon.png":
/*!*******************************************!*\
  !*** ./restaurant/src/assets/favicon.png ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "1a446b1e3e3f4d104eaa.png";

/***/ }),

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

/***/ }),

/***/ "./restaurant/src/styles/GriffoClassicoBold.ttf":
/*!******************************************************!*\
  !*** ./restaurant/src/styles/GriffoClassicoBold.ttf ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "8db2dd21b7cf10cb9f0c.ttf";

/***/ }),

/***/ "./restaurant/src/styles/GriffoClassicoBold.woff":
/*!*******************************************************!*\
  !*** ./restaurant/src/styles/GriffoClassicoBold.woff ***!
  \*******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "079acc7b075ddb6c6446.woff";

/***/ }),

/***/ "./restaurant/src/styles/GriffoClassicoBold.woff2":
/*!********************************************************!*\
  !*** ./restaurant/src/styles/GriffoClassicoBold.woff2 ***!
  \********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "20fc703db05f7add5d67.woff2";

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
/******/ 			id: moduleId,
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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"index": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
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
/* harmony import */ var _styles_styles_reset_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/styles-reset.css */ "./restaurant/src/styles/styles-reset.css");
/* harmony import */ var _styles_styles_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles/styles.css */ "./restaurant/src/styles/styles.css");
/* harmony import */ var _components_pageLoad__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/pageLoad */ "./restaurant/src/components/pageLoad.js");
/* harmony import */ var _components_menu_menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/menu/menu */ "./restaurant/src/components/menu/menu.js");
/* harmony import */ var _components_home__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/home */ "./restaurant/src/components/home.js");
/* harmony import */ var _components_contact__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/contact */ "./restaurant/src/components/contact.js");
/* harmony import */ var _assets_favicon_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./assets/favicon.png */ "./restaurant/src/assets/favicon.png");
/**
 * @fileoverview Restaurant app
 * @author Thinh Nguyen
 * @version 1.0.0
 */











/**
 * Create favicon.
 * @return {void}
 */
function createFavicon() {
  let iconLink = document.querySelector("link[rel*='icon']");
  if (!iconLink) {
    iconLink = document.createElement("link");
    iconLink.rel = "icon";
    document.head.appendChild(iconLink);
  }
  iconLink.href = _assets_favicon_png__WEBPACK_IMPORTED_MODULE_6__;
}

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
  main.appendChild((0,_components_home__WEBPACK_IMPORTED_MODULE_4__["default"])());
  tabs.forEach(tab => {
    tab.addEventListener("click", () => {
      purgeActiveTab();
      switch (tab.textContent) {
        case "Home":
          main.appendChild((0,_components_home__WEBPACK_IMPORTED_MODULE_4__["default"])());
          break;
        case "Menu":
          main.appendChild((0,_components_menu_menu__WEBPACK_IMPORTED_MODULE_3__["default"])());
          break;
        case "Contact":
          main.appendChild((0,_components_contact__WEBPACK_IMPORTED_MODULE_5__["default"])());
          break;
      }
    });
  });
}
createFavicon();
(0,_components_pageLoad__WEBPACK_IMPORTED_MODULE_2__["default"])();
tabSwitch();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNlLFNBQVNBLE9BQU9BLENBQUEsRUFBRztFQUNoQyxNQUFNQSxPQUFPLEdBQUdDLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLEtBQUssQ0FBQztFQUM3QyxNQUFNQyxjQUFjLEdBQUdGLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLEdBQUcsQ0FBQztFQUNsRCxNQUFNRSxZQUFZLEdBQUdILFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLEdBQUcsQ0FBQztFQUNoRCxNQUFNRyxZQUFZLEdBQUdKLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLEdBQUcsQ0FBQztFQUNoRCxNQUFNSSxZQUFZLEdBQUdMLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLEdBQUcsQ0FBQztFQUNoRCxNQUFNSyxpQkFBaUIsR0FBR04sUUFBUSxDQUFDQyxhQUFhLENBQUMsR0FBRyxDQUFDO0VBQ3JERixPQUFPLENBQUNRLFNBQVMsQ0FBQ0MsR0FBRyxDQUFDLGNBQWMsQ0FBQztFQUNyQ04sY0FBYyxDQUFDSyxTQUFTLENBQUNDLEdBQUcsQ0FBQyxzQkFBc0IsQ0FBQztFQUNwREwsWUFBWSxDQUFDSSxTQUFTLENBQUNDLEdBQUcsQ0FBQyxvQkFBb0IsQ0FBQztFQUNoREosWUFBWSxDQUFDRyxTQUFTLENBQUNDLEdBQUcsQ0FBQyxvQkFBb0IsQ0FBQztFQUNoREgsWUFBWSxDQUFDRSxTQUFTLENBQUNDLEdBQUcsQ0FBQyxvQkFBb0IsQ0FBQztFQUNoREYsaUJBQWlCLENBQUNDLFNBQVMsQ0FBQ0MsR0FBRyxDQUFDLHlCQUF5QixDQUFDO0VBQzFETixjQUFjLENBQUNPLFdBQVcsR0FDeEIsOERBQThEO0VBQ2hFTixZQUFZLENBQUNNLFdBQVcsR0FBRyx3QkFBd0I7RUFDbkRMLFlBQVksQ0FBQ0ssV0FBVyxHQUFHLGlDQUFpQztFQUM1REosWUFBWSxDQUFDSSxXQUFXLEdBQ3RCLGtHQUFrRztFQUNwR0gsaUJBQWlCLENBQUNHLFdBQVcsR0FDM0IsMkVBQTJFO0VBQzdFVixPQUFPLENBQUNXLFdBQVcsQ0FBQ1IsY0FBYyxDQUFDO0VBQ25DSCxPQUFPLENBQUNXLFdBQVcsQ0FBQ1AsWUFBWSxDQUFDO0VBQ2pDSixPQUFPLENBQUNXLFdBQVcsQ0FBQ04sWUFBWSxDQUFDO0VBQ2pDTCxPQUFPLENBQUNXLFdBQVcsQ0FBQ0wsWUFBWSxDQUFDO0VBQ2pDTixPQUFPLENBQUNXLFdBQVcsQ0FBQ0osaUJBQWlCLENBQUM7RUFDdEMsT0FBT1AsT0FBTztBQUNoQjs7Ozs7Ozs7Ozs7Ozs7O0FDdkNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRWE7O0FBRStCOztBQUU1QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ2UsU0FBU2EsSUFBSUEsQ0FBQSxFQUFHO0VBQzdCLE1BQU1BLElBQUksR0FBR1osUUFBUSxDQUFDQyxhQUFhLENBQUMsS0FBSyxDQUFDO0VBQzFDVyxJQUFJLENBQUNMLFNBQVMsQ0FBQ0MsR0FBRyxDQUFDLFdBQVcsQ0FBQztFQUMvQixNQUFNSyxTQUFTLEdBQUdiLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLElBQUksQ0FBQztFQUM5Q1ksU0FBUyxDQUFDTixTQUFTLENBQUNDLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQztFQUMxQ0ssU0FBUyxDQUFDQyxTQUFTLEdBQUdILHlEQUFZLENBQUMsb0JBQW9CLENBQUMsQ0FBQ0csU0FBUztFQUNsRUYsSUFBSSxDQUFDRixXQUFXLENBQUNHLFNBQVMsQ0FBQztFQUMzQixNQUFNRSxlQUFlLEdBQUdmLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLEdBQUcsQ0FBQztFQUNuRGMsZUFBZSxDQUFDUixTQUFTLENBQUNDLEdBQUcsQ0FBQyx1QkFBdUIsQ0FBQztFQUN0RE8sZUFBZSxDQUFDTixXQUFXLEdBQ3pCLHl4QkFBeXhCO0VBQzN4QkcsSUFBSSxDQUFDRixXQUFXLENBQUNLLGVBQWUsQ0FBQztFQUNqQyxPQUFPSCxJQUFJO0FBQ2I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDNUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRWE7O0FBRWdDO0FBQ2M7QUFDSjtBQUNkO0FBQ1E7QUFDQTtBQUVqRCxNQUFNVSxTQUFTLEdBQUc7RUFDaEJDLFVBQVUsRUFBRTtJQUNWQyxJQUFJLEVBQUUsYUFBYTtJQUNuQkMsV0FBVyxFQUNULHFLQUFxSztJQUN2S0MsT0FBTyxFQUFFViw0Q0FBYUE7RUFDeEIsQ0FBQztFQUNEVyxpQkFBaUIsRUFBRTtJQUNqQkgsSUFBSSxFQUFFLHNCQUFzQjtJQUM1QkMsV0FBVyxFQUNULDZHQUE2RztJQUMvR0MsT0FBTyxFQUFFVCxtREFBb0JBO0VBQy9CLENBQUM7RUFDRFcsZUFBZSxFQUFFO0lBQ2ZKLElBQUksRUFBRSxtQkFBbUI7SUFDekJDLFdBQVcsRUFDVCwrSkFBK0o7SUFDaktDLE9BQU8sRUFBRVIsaURBQWtCQTtFQUM3QixDQUFDO0VBQ0RXLFFBQVEsRUFBRTtJQUNSTCxJQUFJLEVBQUUsV0FBVztJQUNqQkMsV0FBVyxFQUNULGtGQUFrRjtJQUNwRkMsT0FBTyxFQUFFUCwwQ0FBV0E7RUFDdEIsQ0FBQztFQUNEVyxZQUFZLEVBQUU7SUFDWk4sSUFBSSxFQUFFLGVBQWU7SUFDckJDLFdBQVcsRUFDVCxtSkFBbUo7SUFDckpDLE9BQU8sRUFBRU4sOENBQWVBO0VBQzFCLENBQUM7RUFDRFcsWUFBWSxFQUFFO0lBQ1pQLElBQUksRUFBRSxlQUFlO0lBQ3JCQyxXQUFXLEVBQ1QsNkdBQTZHO0lBQy9HQyxPQUFPLEVBQUVMLDhDQUFlQTtFQUMxQjtBQUNGLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNlLFNBQVNXLElBQUlBLENBQUEsRUFBRztFQUM3QixNQUFNQyxRQUFRLEdBQUdqQyxRQUFRLENBQUNDLGFBQWEsQ0FBQyxLQUFLLENBQUM7RUFDOUNnQyxRQUFRLENBQUMxQixTQUFTLENBQUNDLEdBQUcsQ0FBQyxnQkFBZ0IsQ0FBQztFQUN4QzBCLE1BQU0sQ0FBQ0MsTUFBTSxDQUFDYixTQUFTLENBQUMsQ0FBQ2MsT0FBTyxDQUFFQyxLQUFLLElBQUs7SUFDMUMsTUFBTUMsUUFBUSxHQUFHdEMsUUFBUSxDQUFDQyxhQUFhLENBQUMsS0FBSyxDQUFDO0lBQzlDLE1BQU1zQyxhQUFhLEdBQUd2QyxRQUFRLENBQUNDLGFBQWEsQ0FBQyxJQUFJLENBQUM7SUFDbEQsTUFBTXVDLFdBQVcsR0FBR3hDLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLEtBQUssQ0FBQztJQUNqRCxNQUFNd0MsbUJBQW1CLEdBQUd6QyxRQUFRLENBQUNDLGFBQWEsQ0FBQyxHQUFHLENBQUM7SUFDdkRxQyxRQUFRLENBQUMvQixTQUFTLENBQUNDLEdBQUcsQ0FBQyxnQkFBZ0IsQ0FBQztJQUN4QytCLGFBQWEsQ0FBQ2hDLFNBQVMsQ0FBQ0MsR0FBRyxDQUFDLHNCQUFzQixDQUFDO0lBQ25EZ0MsV0FBVyxDQUFDakMsU0FBUyxDQUFDQyxHQUFHLENBQUMsb0JBQW9CLENBQUM7SUFDL0NpQyxtQkFBbUIsQ0FBQ2xDLFNBQVMsQ0FBQ0MsR0FBRyxDQUFDLDRCQUE0QixDQUFDO0lBQy9EK0IsYUFBYSxDQUFDOUIsV0FBVyxHQUFHNEIsS0FBSyxDQUFDYixJQUFJO0lBQ3RDZ0IsV0FBVyxDQUFDRSxHQUFHLEdBQUdMLEtBQUssQ0FBQ1gsT0FBTztJQUMvQmMsV0FBVyxDQUFDRyxHQUFHLEdBQUdOLEtBQUssQ0FBQ2IsSUFBSTtJQUM1QmlCLG1CQUFtQixDQUFDaEMsV0FBVyxHQUFHNEIsS0FBSyxDQUFDWixXQUFXO0lBQ25EYSxRQUFRLENBQUM1QixXQUFXLENBQUM2QixhQUFhLENBQUM7SUFDbkNELFFBQVEsQ0FBQzVCLFdBQVcsQ0FBQzhCLFdBQVcsQ0FBQztJQUNqQ0YsUUFBUSxDQUFDNUIsV0FBVyxDQUFDK0IsbUJBQW1CLENBQUM7SUFDekNSLFFBQVEsQ0FBQ3ZCLFdBQVcsQ0FBQzRCLFFBQVEsQ0FBQztFQUNoQyxDQUFDLENBQUM7RUFDRixPQUFPTCxRQUFRO0FBQ2pCOzs7Ozs7Ozs7Ozs7Ozs7QUNqRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFYTs7QUFFK0I7O0FBRTVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBU1csTUFBTUEsQ0FBQSxFQUFHO0VBQ2hCLE1BQU1BLE1BQU0sR0FBRzVDLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLFFBQVEsQ0FBQztFQUMvQyxNQUFNNEMsZUFBZSxHQUFHN0MsUUFBUSxDQUFDQyxhQUFhLENBQUMsS0FBSyxDQUFDO0VBQ3JELE1BQU02QyxXQUFXLEdBQUc5QyxRQUFRLENBQUNDLGFBQWEsQ0FBQyxJQUFJLENBQUM7RUFDaEQyQyxNQUFNLENBQUNyQyxTQUFTLENBQUNDLEdBQUcsQ0FBQyxRQUFRLENBQUM7RUFDOUJxQyxlQUFlLENBQUN0QyxTQUFTLENBQUNDLEdBQUcsQ0FBQyxrQkFBa0IsQ0FBQztFQUNqRHNDLFdBQVcsQ0FBQ3ZDLFNBQVMsQ0FBQ0MsR0FBRyxDQUFDLGNBQWMsQ0FBQztFQUN6Q3NDLFdBQVcsQ0FBQ2hDLFNBQVMsR0FBR0gseURBQVksQ0FBQywrQkFBK0IsQ0FBQyxDQUFDRyxTQUFTO0VBQy9FK0IsZUFBZSxDQUFDbkMsV0FBVyxDQUFDb0MsV0FBVyxDQUFDO0VBQ3hDRixNQUFNLENBQUNsQyxXQUFXLENBQUNtQyxlQUFlLENBQUM7RUFDbkMsT0FBT0QsTUFBTTtBQUNmOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBU0csSUFBSUEsQ0FBQSxFQUFHO0VBQ2QsTUFBTUEsSUFBSSxHQUFHL0MsUUFBUSxDQUFDQyxhQUFhLENBQUMsTUFBTSxDQUFDO0VBQzNDLE1BQU0rQyxVQUFVLEdBQUdoRCxRQUFRLENBQUNDLGFBQWEsQ0FBQyxLQUFLLENBQUM7RUFDaEQsTUFBTWdELGVBQWUsR0FBRyxDQUFDLE1BQU0sRUFBRSxNQUFNLEVBQUUsU0FBUyxDQUFDO0VBQ25ERixJQUFJLENBQUN4QyxTQUFTLENBQUNDLEdBQUcsQ0FBQyxNQUFNLENBQUM7RUFDMUJ1QyxJQUFJLENBQUNHLEVBQUUsR0FBRyxNQUFNO0VBQ2hCRixVQUFVLENBQUN6QyxTQUFTLENBQUNDLEdBQUcsQ0FBQyxhQUFhLENBQUM7RUFDdkN5QyxlQUFlLENBQUNiLE9BQU8sQ0FBRWUsSUFBSSxJQUFLO0lBQ2hDLE1BQU1DLGNBQWMsR0FBR3BELFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLFFBQVEsQ0FBQztJQUN2RG1ELGNBQWMsQ0FBQzdDLFNBQVMsQ0FBQ0MsR0FBRyxDQUFDLGtCQUFrQixDQUFDO0lBQ2hENEMsY0FBYyxDQUFDM0MsV0FBVyxHQUFHMEMsSUFBSTtJQUNqQ0gsVUFBVSxDQUFDdEMsV0FBVyxDQUFDMEMsY0FBYyxDQUFDO0VBQ3hDLENBQUMsQ0FBQztFQUNGTCxJQUFJLENBQUNyQyxXQUFXLENBQUNzQyxVQUFVLENBQUM7RUFDNUIsT0FBT0QsSUFBSTtBQUNiOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBU00sTUFBTUEsQ0FBQSxFQUFHO0VBQ2hCLE1BQU1BLE1BQU0sR0FBR3JELFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLFFBQVEsQ0FBQztFQUMvQyxNQUFNcUQsVUFBVSxHQUFHdEQsUUFBUSxDQUFDQyxhQUFhLENBQUMsR0FBRyxDQUFDO0VBQzlDLE1BQU1zRCxVQUFVLEdBQUd2RCxRQUFRLENBQUNDLGFBQWEsQ0FBQyxHQUFHLENBQUM7RUFDOUMsTUFBTXVELFVBQVUsR0FBR3hELFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLEdBQUcsQ0FBQztFQUM5Q29ELE1BQU0sQ0FBQzlDLFNBQVMsQ0FBQ0MsR0FBRyxDQUFDLFFBQVEsQ0FBQztFQUM5QmdELFVBQVUsQ0FBQ2pELFNBQVMsQ0FBQ0MsR0FBRyxDQUFDLEtBQUssRUFBRSxXQUFXLENBQUM7RUFDNUM4QyxVQUFVLENBQUM3QyxXQUFXLEdBQ3BCLGNBQWMsR0FBRyxJQUFJZ0QsSUFBSSxFQUFFLENBQUNDLFdBQVcsRUFBRSxHQUFHLGdCQUFnQjtFQUM5REgsVUFBVSxDQUFDSSxJQUFJLEdBQUcsa0NBQWtDO0VBQ3BESixVQUFVLENBQUNLLE1BQU0sR0FBRyxRQUFRO0VBQzVCTCxVQUFVLENBQUNNLEdBQUcsR0FBRyxxQkFBcUI7RUFDdENOLFVBQVUsQ0FBQzdDLFdBQVcsQ0FBQzhDLFVBQVUsQ0FBQztFQUNsQ0gsTUFBTSxDQUFDM0MsV0FBVyxDQUFDNEMsVUFBVSxDQUFDO0VBQzlCRCxNQUFNLENBQUMzQyxXQUFXLENBQUM2QyxVQUFVLENBQUM7RUFDOUIsT0FBT0YsTUFBTTtBQUNmOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDZSxTQUFTUyxRQUFRQSxDQUFBLEVBQUc7RUFDakMsTUFBTUMsT0FBTyxHQUFHL0QsUUFBUSxDQUFDZ0UsY0FBYyxDQUFDLFNBQVMsQ0FBQztFQUNsREQsT0FBTyxDQUFDckQsV0FBVyxDQUFDa0MsTUFBTSxFQUFFLENBQUM7RUFDN0JtQixPQUFPLENBQUNyRCxXQUFXLENBQUNxQyxJQUFJLEVBQUUsQ0FBQztFQUMzQmdCLE9BQU8sQ0FBQ3JELFdBQVcsQ0FBQzJDLE1BQU0sRUFBRSxDQUFDO0FBQy9COzs7Ozs7Ozs7Ozs7OztBQ2hGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPLFNBQVMxQyxZQUFZQSxDQUFDc0QsSUFBSSxFQUFFO0VBQ2pDLE1BQU1DLE9BQU8sR0FBR2xFLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLEtBQUssQ0FBQztFQUM3QyxNQUFNa0UsU0FBUyxHQUFHRixJQUFJLENBQUNHLEtBQUssQ0FBQyxFQUFFLENBQUM7RUFDaEMsSUFBSUMsQ0FBQyxHQUFHLENBQUM7RUFDVEYsU0FBUyxDQUFDL0IsT0FBTyxDQUFFa0MsSUFBSSxJQUFLO0lBQzFCLE1BQU1DLElBQUksR0FBR3ZFLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLE1BQU0sQ0FBQztJQUMzQ3NFLElBQUksQ0FBQzlELFdBQVcsR0FBRzZELElBQUk7SUFDdkJKLE9BQU8sQ0FBQ3hELFdBQVcsQ0FBQzZELElBQUksQ0FBQztJQUN6QixJQUFJRCxJQUFJLEtBQUssR0FBRyxFQUFFO01BQ2Q7SUFDSixDQUFDLE1BQU0sSUFBSUQsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLEVBQUU7TUFDdEJFLElBQUksQ0FBQ2hFLFNBQVMsQ0FBQ0MsR0FBRyxDQUFDLGdCQUFnQixDQUFDO01BQ3BDNkQsQ0FBQyxFQUFFO0lBQ0wsQ0FBQyxNQUFNO01BQ0xFLElBQUksQ0FBQ2hFLFNBQVMsQ0FBQ0MsR0FBRyxDQUFDLGtCQUFrQixDQUFDO01BQ3RDNkQsQ0FBQyxFQUFFO0lBQ0w7RUFDRixDQUFDLENBQUM7RUFDRixPQUFPSCxPQUFPO0FBQ2hCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqQ0E7QUFDZ0g7QUFDakI7QUFDL0YsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRjtBQUNBLCtvQkFBK29CLGNBQWMsZUFBZSxjQUFjLG9CQUFvQixrQkFBa0IsNkJBQTZCLEdBQUcsZ0pBQWdKLG1CQUFtQixHQUFHLFFBQVEsbUJBQW1CLEdBQUcsVUFBVSxxQkFBcUIsR0FBRyxpQkFBaUIsaUJBQWlCLEdBQUcsMkRBQTJELGdCQUFnQixrQkFBa0IsR0FBRyxTQUFTLDhCQUE4QixzQkFBc0IsR0FBRyxPQUFPLDJHQUEyRyxNQUFNLGlCQUFpQixVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxNQUFNLFlBQVksT0FBTyxVQUFVLEtBQUssS0FBSyxVQUFVLEtBQUssS0FBSyxZQUFZLE1BQU0sS0FBSyxVQUFVLEtBQUssTUFBTSxVQUFVLFVBQVUsS0FBSyxLQUFLLFlBQVksYUFBYSwrbkJBQStuQixjQUFjLGVBQWUsY0FBYyxvQkFBb0Isa0JBQWtCLDZCQUE2QixHQUFHLGdKQUFnSixtQkFBbUIsR0FBRyxRQUFRLG1CQUFtQixHQUFHLFVBQVUscUJBQXFCLEdBQUcsaUJBQWlCLGlCQUFpQixHQUFHLDJEQUEyRCxnQkFBZ0Isa0JBQWtCLEdBQUcsU0FBUyw4QkFBOEIsc0JBQXNCLEdBQUcsbUJBQW1CO0FBQ3BzRjtBQUNBLGlFQUFlLHVCQUF1QixFQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNQdkM7QUFDZ0g7QUFDakI7QUFDTztBQUN0Ryw0Q0FBNEMsaUpBQTJDO0FBQ3ZGLDRDQUE0QywrSUFBMEM7QUFDdEYsNENBQTRDLDZJQUF5QztBQUNyRiw0Q0FBNEMsaUpBQWdEO0FBQzVGLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0YseUNBQXlDLHNGQUErQjtBQUN4RSx5Q0FBeUMsc0ZBQStCO0FBQ3hFLHlDQUF5QyxzRkFBK0I7QUFDeEUseUNBQXlDLHNGQUErQjtBQUN4RTtBQUNBLGlEQUFpRCxpQ0FBaUMsc0NBQXNDLCtCQUErQixpQ0FBaUMsMkJBQTJCLGlDQUFpQyxnQ0FBZ0MsK0JBQStCLDhCQUE4Qix5QkFBeUIsc0JBQXNCLHVCQUF1Qix1QkFBdUIsdUJBQXVCLHVCQUF1Qiw4QkFBOEIsMEJBQTBCLHVCQUF1Qix3QkFBd0IsOENBQThDLEdBQUcsOEJBQThCLHFDQUFxQyxvU0FBb1MscUJBQXFCLHVCQUF1QixHQUFHLFVBQVUsMkJBQTJCLGlCQUFpQixHQUFHLDRCQUE0Qix3QkFBd0IsR0FBRyxVQUFVLHNFQUFzRSwyQkFBMkIsaUNBQWlDLGlDQUFpQyw2QkFBNkIscUJBQXFCLGtCQUFrQixzQ0FBc0MsR0FBRyxxQkFBcUIsc0NBQXNDLEdBQUcsdUJBQXVCLHNDQUFzQyxHQUFHLDJCQUEyQixrQkFBa0IsNEJBQTRCLHlEQUF5RCw4QkFBOEIsR0FBRyx1QkFBdUIsa0JBQWtCLHdCQUF3Qiw0QkFBNEIsZ0JBQWdCLHNDQUFzQywrQkFBK0IsR0FBRyxtQkFBbUIsaURBQWlELHNDQUFzQyxzQkFBc0IsR0FBRyx5QkFBeUIsMENBQTBDLHNCQUFzQixzQ0FBc0Msa0JBQWtCLDJCQUEyQix3QkFBd0IsZ0JBQWdCLHNDQUFzQyxtQkFBbUIsb0RBQW9ELEdBQUcsa0JBQWtCLGdCQUFnQiw4QkFBOEIsa0JBQWtCLDBDQUEwQyw4QkFBOEIsR0FBRyx1QkFBdUIsMENBQTBDLHNDQUFzQyxzQkFBc0Isb0JBQW9CLGlCQUFpQixrREFBa0QscUNBQXFDLEdBQUcsa0ZBQWtGLHlEQUF5RCxHQUFHLDRCQUE0QixrQkFBa0IsMkJBQTJCLHdCQUF3QixnQkFBZ0IsaUJBQWlCLHNDQUFzQyxtQkFBbUIsK0JBQStCLHVEQUF1RCxHQUFHLHNCQUFzQixpREFBaUQsc0NBQXNDLG9CQUFvQixnQ0FBZ0MsR0FBRyw0QkFBNEIsc0NBQXNDLHNCQUFzQixtQkFBbUIsNEJBQTRCLGtEQUFrRCxHQUFHLGlDQUFpQyxrQkFBa0IsMkZBQTJGLGdDQUFnQywrQkFBK0IsR0FBRyxxQkFBcUIsa0JBQWtCLDJCQUEyQix3QkFBd0IsdURBQXVELHdDQUF3Qyw4QkFBOEIscUNBQXFDLEdBQUcsMkJBQTJCLDJCQUEyQixHQUFHLHlCQUF5QixnQkFBZ0IsOEJBQThCLHNCQUFzQixpRUFBaUUsR0FBRywyQkFBMkIsaURBQWlELHNDQUFzQyxzQkFBc0IsZ0NBQWdDLEdBQUcsaUNBQWlDLHNDQUFzQyxvQkFBb0IsOEJBQThCLDRCQUE0QixHQUFHLGtDQUFrQyxrQkFBa0IsMkJBQTJCLDJCQUEyQixzQkFBc0IsNEJBQTRCLGdCQUFnQixpQkFBaUIsc0NBQXNDLG1CQUFtQiwrQkFBK0IsdURBQXVELEdBQUcsMkJBQTJCLHNDQUFzQyxpQ0FBaUMsa0RBQWtELGtCQUFrQix3QkFBd0IsNEJBQTRCLGNBQWMsZ0JBQWdCLG9CQUFvQixHQUFHLGdCQUFnQixvQkFBb0Isb0JBQW9CLGlCQUFpQiwyQ0FBMkMsR0FBRyxzQkFBc0IseUNBQXlDLEdBQUcsK0RBQStELHFCQUFxQixpQ0FBaUMsS0FBSyxHQUFHLFNBQVMsbUdBQW1HLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLFVBQVUsS0FBSyxZQUFZLFFBQVEsT0FBTyxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxNQUFNLE9BQU8sWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sVUFBVSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLFVBQVUsS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxXQUFXLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsT0FBTyxPQUFPLFlBQVksT0FBTyxVQUFVLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxPQUFPLFVBQVUsS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLE9BQU8sVUFBVSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxPQUFPLFVBQVUsS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxXQUFXLFVBQVUsVUFBVSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxnQ0FBZ0MsaUNBQWlDLHNDQUFzQywrQkFBK0IsaUNBQWlDLDJCQUEyQixpQ0FBaUMsZ0NBQWdDLCtCQUErQiw4QkFBOEIseUJBQXlCLHNCQUFzQix1QkFBdUIsdUJBQXVCLHVCQUF1Qix1QkFBdUIsOEJBQThCLDBCQUEwQix1QkFBdUIsd0JBQXdCLDhDQUE4QyxHQUFHLDhCQUE4QixxQ0FBcUMsdVBBQXVQLHFCQUFxQix1QkFBdUIsR0FBRyxVQUFVLDJCQUEyQixpQkFBaUIsR0FBRyw0QkFBNEIsd0JBQXdCLEdBQUcsVUFBVSw2REFBNkQsMkJBQTJCLGlDQUFpQyxpQ0FBaUMsNkJBQTZCLHFCQUFxQixrQkFBa0Isc0NBQXNDLEdBQUcscUJBQXFCLHNDQUFzQyxHQUFHLHVCQUF1QixzQ0FBc0MsR0FBRywyQkFBMkIsa0JBQWtCLDRCQUE0Qix5REFBeUQsOEJBQThCLEdBQUcsdUJBQXVCLGtCQUFrQix3QkFBd0IsNEJBQTRCLGdCQUFnQixzQ0FBc0MsK0JBQStCLEdBQUcsbUJBQW1CLGlEQUFpRCxzQ0FBc0Msc0JBQXNCLEdBQUcseUJBQXlCLDBDQUEwQyxzQkFBc0Isc0NBQXNDLGtCQUFrQiwyQkFBMkIsd0JBQXdCLGdCQUFnQixzQ0FBc0MsbUJBQW1CLG9EQUFvRCxHQUFHLGtCQUFrQixnQkFBZ0IsOEJBQThCLGtCQUFrQiwwQ0FBMEMsOEJBQThCLEdBQUcsdUJBQXVCLDBDQUEwQyxzQ0FBc0Msc0JBQXNCLG9CQUFvQixpQkFBaUIsa0RBQWtELHFDQUFxQyxHQUFHLGtGQUFrRix5REFBeUQsR0FBRyw0QkFBNEIsa0JBQWtCLDJCQUEyQix3QkFBd0IsZ0JBQWdCLGlCQUFpQixzQ0FBc0MsbUJBQW1CLCtCQUErQix1REFBdUQsR0FBRyxzQkFBc0IsaURBQWlELHNDQUFzQyxvQkFBb0IsZ0NBQWdDLEdBQUcsNEJBQTRCLHNDQUFzQyxzQkFBc0IsbUJBQW1CLDRCQUE0QixrREFBa0QsR0FBRyxpQ0FBaUMsa0JBQWtCLDJGQUEyRixnQ0FBZ0MsK0JBQStCLEdBQUcscUJBQXFCLGtCQUFrQiwyQkFBMkIsd0JBQXdCLHVEQUF1RCx3Q0FBd0MsOEJBQThCLHFDQUFxQyxHQUFHLDJCQUEyQiwyQkFBMkIsR0FBRyx5QkFBeUIsZ0JBQWdCLDhCQUE4QixzQkFBc0IsaUVBQWlFLEdBQUcsMkJBQTJCLGlEQUFpRCxzQ0FBc0Msc0JBQXNCLGdDQUFnQyxHQUFHLGlDQUFpQyxzQ0FBc0Msb0JBQW9CLDhCQUE4Qiw0QkFBNEIsR0FBRyxrQ0FBa0Msa0JBQWtCLDJCQUEyQiwyQkFBMkIsc0JBQXNCLDRCQUE0QixnQkFBZ0IsaUJBQWlCLHNDQUFzQyxtQkFBbUIsK0JBQStCLHVEQUF1RCxHQUFHLDJCQUEyQixzQ0FBc0MsaUNBQWlDLGtEQUFrRCxrQkFBa0Isd0JBQXdCLDRCQUE0QixjQUFjLGdCQUFnQixvQkFBb0IsR0FBRyxnQkFBZ0Isb0JBQW9CLG9CQUFvQixpQkFBaUIsMkNBQTJDLEdBQUcsc0JBQXNCLHlDQUF5QyxHQUFHLCtEQUErRCxxQkFBcUIsaUNBQWlDLEtBQUssR0FBRyxxQkFBcUI7QUFDcnlaO0FBQ0EsaUVBQWUsdUJBQXVCLEVBQUM7Ozs7Ozs7Ozs7O0FDaEIxQjs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscURBQXFEO0FBQ3JEO0FBQ0E7QUFDQSxnREFBZ0Q7QUFDaEQ7QUFDQTtBQUNBLHFGQUFxRjtBQUNyRjtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsaUJBQWlCO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQixxQkFBcUI7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Ysc0ZBQXNGLHFCQUFxQjtBQUMzRztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1YsaURBQWlELHFCQUFxQjtBQUN0RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Ysc0RBQXNELHFCQUFxQjtBQUMzRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDcEZhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUN6QmE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVEQUF1RCxjQUFjO0FBQ3JFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNkQSxNQUFxRztBQUNyRyxNQUEyRjtBQUMzRixNQUFrRztBQUNsRyxNQUFxSDtBQUNySCxNQUE4RztBQUM5RyxNQUE4RztBQUM5RyxNQUFnSDtBQUNoSDtBQUNBOztBQUVBOztBQUVBLDRCQUE0QixxR0FBbUI7QUFDL0Msd0JBQXdCLGtIQUFhOztBQUVyQyx1QkFBdUIsdUdBQWE7QUFDcEM7QUFDQSxpQkFBaUIsK0ZBQU07QUFDdkIsNkJBQTZCLHNHQUFrQjs7QUFFL0MsYUFBYSwwR0FBRyxDQUFDLDZGQUFPOzs7O0FBSTBEO0FBQ2xGLE9BQU8saUVBQWUsNkZBQU8sSUFBSSxvR0FBYyxHQUFHLG9HQUFjLFlBQVksRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN6QjdFLE1BQXFHO0FBQ3JHLE1BQTJGO0FBQzNGLE1BQWtHO0FBQ2xHLE1BQXFIO0FBQ3JILE1BQThHO0FBQzlHLE1BQThHO0FBQzlHLE1BQTBHO0FBQzFHO0FBQ0E7O0FBRUE7O0FBRUEsNEJBQTRCLHFHQUFtQjtBQUMvQyx3QkFBd0Isa0hBQWE7O0FBRXJDLHVCQUF1Qix1R0FBYTtBQUNwQztBQUNBLGlCQUFpQiwrRkFBTTtBQUN2Qiw2QkFBNkIsc0dBQWtCOztBQUUvQyxhQUFhLDBHQUFHLENBQUMsdUZBQU87Ozs7QUFJb0Q7QUFDNUUsT0FBTyxpRUFBZSx1RkFBTyxJQUFJLDhGQUFjLEdBQUcsOEZBQWMsWUFBWSxFQUFDOzs7Ozs7Ozs7OztBQzFCaEU7O0FBRWI7O0FBRUE7QUFDQTs7QUFFQSxrQkFBa0Isd0JBQXdCO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsa0JBQWtCLGlCQUFpQjtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsb0JBQW9CLDRCQUE0QjtBQUNoRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxxQkFBcUIsNkJBQTZCO0FBQ2xEOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ3ZHYTs7QUFFYjtBQUNBOztBQUVBO0FBQ0E7QUFDQSxzREFBc0Q7O0FBRXREO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7QUN0Q2E7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7QUNWYTs7QUFFYjtBQUNBO0FBQ0EsY0FBYyxLQUF3QyxHQUFHLHNCQUFpQixHQUFHLENBQUk7O0FBRWpGO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7O0FDWGE7O0FBRWI7QUFDQTtBQUNBOztBQUVBO0FBQ0Esa0RBQWtEO0FBQ2xEOztBQUVBO0FBQ0EsMENBQTBDO0FBQzFDOztBQUVBOztBQUVBO0FBQ0EsaUZBQWlGO0FBQ2pGOztBQUVBOztBQUVBO0FBQ0EsYUFBYTtBQUNiOztBQUVBO0FBQ0EsYUFBYTtBQUNiOztBQUVBO0FBQ0EsYUFBYTtBQUNiOztBQUVBOztBQUVBO0FBQ0EseURBQXlEO0FBQ3pELElBQUk7O0FBRUo7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7OztBQ3JFYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQ2ZBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7Ozs7V0N6QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDZkE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOzs7OztXQ3JCQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFYTs7QUFDc0I7QUFDTjtBQUVnQjtBQUNZO0FBQ0w7QUFDTTtBQUNYOztBQUUvQztBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVNVLGFBQWFBLENBQUEsRUFBRztFQUN2QixJQUFJQyxRQUFRLEdBQUc3RSxRQUFRLENBQUM4RSxhQUFhLENBQUMsbUJBQW1CLENBQUM7RUFDMUQsSUFBSSxDQUFDRCxRQUFRLEVBQUU7SUFDYkEsUUFBUSxHQUFHN0UsUUFBUSxDQUFDQyxhQUFhLENBQUMsTUFBTSxDQUFDO0lBQ3pDNEUsUUFBUSxDQUFDaEIsR0FBRyxHQUFHLE1BQU07SUFDckI3RCxRQUFRLENBQUMrRSxJQUFJLENBQUNyRSxXQUFXLENBQUNtRSxRQUFRLENBQUM7RUFDckM7RUFDQUEsUUFBUSxDQUFDbEIsSUFBSSxHQUFHZ0IsZ0RBQVc7QUFDN0I7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTSyxjQUFjQSxDQUFBLEVBQUc7RUFDeEIsTUFBTWpDLElBQUksR0FBRy9DLFFBQVEsQ0FBQ2dFLGNBQWMsQ0FBQyxNQUFNLENBQUM7RUFDNUMsSUFBSWpCLElBQUksQ0FBQ2tDLFFBQVEsQ0FBQ0MsTUFBTSxHQUFHLENBQUMsRUFBRTtJQUM1Qm5DLElBQUksQ0FBQ29DLFdBQVcsQ0FBQ3BDLElBQUksQ0FBQ2tDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQztFQUNwQztBQUNGOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBU0csU0FBU0EsQ0FBQSxFQUFHO0VBQ25CLE1BQU1yQyxJQUFJLEdBQUcvQyxRQUFRLENBQUNnRSxjQUFjLENBQUMsTUFBTSxDQUFDO0VBQzVDLE1BQU1xQixJQUFJLEdBQUdyRixRQUFRLENBQUNzRixnQkFBZ0IsQ0FBQyxtQkFBbUIsQ0FBQztFQUMzRDtFQUNBdkMsSUFBSSxDQUFDckMsV0FBVyxDQUFDK0QsNERBQW1CLEVBQUUsQ0FBQztFQUN2Q1ksSUFBSSxDQUFDakQsT0FBTyxDQUFFbUQsR0FBRyxJQUFLO0lBQ3BCQSxHQUFHLENBQUNDLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxNQUFNO01BQ2xDUixjQUFjLEVBQUU7TUFDaEIsUUFBUU8sR0FBRyxDQUFDOUUsV0FBVztRQUNyQixLQUFLLE1BQU07VUFDVHNDLElBQUksQ0FBQ3JDLFdBQVcsQ0FBQytELDREQUFtQixFQUFFLENBQUM7VUFDdkM7UUFDRixLQUFLLE1BQU07VUFDVDFCLElBQUksQ0FBQ3JDLFdBQVcsQ0FBQzhELGlFQUFtQixFQUFFLENBQUM7VUFDdkM7UUFDRixLQUFLLFNBQVM7VUFDWnpCLElBQUksQ0FBQ3JDLFdBQVcsQ0FBQ2dFLCtEQUFzQixFQUFFLENBQUM7VUFDMUM7TUFBTTtJQUVaLENBQUMsQ0FBQztFQUNKLENBQUMsQ0FBQztBQUNKO0FBRUFFLGFBQWEsRUFBRTtBQUNmZCxnRUFBUSxFQUFFO0FBQ1ZzQixTQUFTLEVBQUUsQyIsInNvdXJjZXMiOlsid2VicGFjazovL2phdmFzY3JpcHQtZGVzaWduLXBhdHRlcm5zLy4vcmVzdGF1cmFudC9zcmMvY29tcG9uZW50cy9jb250YWN0LmpzIiwid2VicGFjazovL2phdmFzY3JpcHQtZGVzaWduLXBhdHRlcm5zLy4vcmVzdGF1cmFudC9zcmMvY29tcG9uZW50cy9ob21lLmpzIiwid2VicGFjazovL2phdmFzY3JpcHQtZGVzaWduLXBhdHRlcm5zLy4vcmVzdGF1cmFudC9zcmMvY29tcG9uZW50cy9tZW51L21lbnUuanMiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdC1kZXNpZ24tcGF0dGVybnMvLi9yZXN0YXVyYW50L3NyYy9jb21wb25lbnRzL3BhZ2VMb2FkLmpzIiwid2VicGFjazovL2phdmFzY3JpcHQtZGVzaWduLXBhdHRlcm5zLy4vcmVzdGF1cmFudC9zcmMvY29tcG9uZW50cy90eXBvZ3JhcGh5LmpzIiwid2VicGFjazovL2phdmFzY3JpcHQtZGVzaWduLXBhdHRlcm5zLy4vcmVzdGF1cmFudC9zcmMvc3R5bGVzL3N0eWxlcy1yZXNldC5jc3MiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdC1kZXNpZ24tcGF0dGVybnMvLi9yZXN0YXVyYW50L3NyYy9zdHlsZXMvc3R5bGVzLmNzcyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LWRlc2lnbi1wYXR0ZXJucy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdC1kZXNpZ24tcGF0dGVybnMvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL2phdmFzY3JpcHQtZGVzaWduLXBhdHRlcm5zLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdC1kZXNpZ24tcGF0dGVybnMvLi9yZXN0YXVyYW50L3NyYy9zdHlsZXMvc3R5bGVzLXJlc2V0LmNzcz9iMTE0Iiwid2VicGFjazovL2phdmFzY3JpcHQtZGVzaWduLXBhdHRlcm5zLy4vcmVzdGF1cmFudC9zcmMvc3R5bGVzL3N0eWxlcy5jc3M/YmE1NyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LWRlc2lnbi1wYXR0ZXJucy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LWRlc2lnbi1wYXR0ZXJucy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdC1kZXNpZ24tcGF0dGVybnMvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdC1kZXNpZ24tcGF0dGVybnMvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdC1kZXNpZ24tcGF0dGVybnMvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LWRlc2lnbi1wYXR0ZXJucy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL2phdmFzY3JpcHQtZGVzaWduLXBhdHRlcm5zL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2phdmFzY3JpcHQtZGVzaWduLXBhdHRlcm5zL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2phdmFzY3JpcHQtZGVzaWduLXBhdHRlcm5zL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LWRlc2lnbi1wYXR0ZXJucy93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL2phdmFzY3JpcHQtZGVzaWduLXBhdHRlcm5zL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdC1kZXNpZ24tcGF0dGVybnMvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LWRlc2lnbi1wYXR0ZXJucy93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LWRlc2lnbi1wYXR0ZXJucy93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LWRlc2lnbi1wYXR0ZXJucy93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdC1kZXNpZ24tcGF0dGVybnMvLi9yZXN0YXVyYW50L3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBmaWxlb3ZlcnZpZXcgQ29udGFjdCB0YWIgbW9kdWxlXG4gKiBAYXV0aG9yIFRoaW5oIE5ndXllblxuICogQHZlcnNpb24gMS4wLjBcbiAqL1xuXG5cInVzZSBzdHJpY3RcIjtcblxuLyoqXG4gKiBDcmVhdGUgdGhlIGNvbnRhY3QgY29tcG9uZW50LlxuICogQHJldHVybiB7SFRNTEVsZW1lbnR9IENvbnRhY3QgY29tcG9uZW50XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNvbnRhY3QoKSB7XG4gIGNvbnN0IGNvbnRhY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBjb250YWN0QWRkcmVzcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICBjb25zdCBjb250YWN0UGhvbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgY29uc3QgY29udGFjdEVtYWlsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIGNvbnN0IGNvbnRhY3RIb3VycyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICBjb25zdCBjb250YWN0T21vdGVuYXNoaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICBjb250YWN0LmNsYXNzTGlzdC5hZGQoXCJtYWluLWNvbnRhY3RcIik7XG4gIGNvbnRhY3RBZGRyZXNzLmNsYXNzTGlzdC5hZGQoXCJtYWluLWNvbnRhY3QtYWRkcmVzc1wiKTtcbiAgY29udGFjdFBob25lLmNsYXNzTGlzdC5hZGQoXCJtYWluLWNvbnRhY3QtcGhvbmVcIik7XG4gIGNvbnRhY3RFbWFpbC5jbGFzc0xpc3QuYWRkKFwibWFpbi1jb250YWN0LWVtYWlsXCIpO1xuICBjb250YWN0SG91cnMuY2xhc3NMaXN0LmFkZChcIm1haW4tY29udGFjdC1ob3Vyc1wiKTtcbiAgY29udGFjdE9tb3RlbmFzaGkuY2xhc3NMaXN0LmFkZChcIm1haW4tY29udGFjdC1vbW90ZW5hc2hpXCIpO1xuICBjb250YWN0QWRkcmVzcy50ZXh0Q29udGVudCA9XG4gICAgXCJBZGRyZXNzOiAxMjM0IFNha3VyYSBTdHJlZXQgU2hpYnV5YS1rdSwgVG9reW8gMTUwLTAwNDIgSmFwYW5cIjtcbiAgY29udGFjdFBob25lLnRleHRDb250ZW50ID0gXCJQaG9uZTogKzgxLTMtMTIzNC01Njc4XCI7XG4gIGNvbnRhY3RFbWFpbC50ZXh0Q29udGVudCA9IFwiRW1haWw6IGluZm9AYmVubnlzYW5pbWVmb29kLmNvbVwiO1xuICBjb250YWN0SG91cnMudGV4dENvbnRlbnQgPVxuICAgIFwiSG91cnMgb2YgT3BlcmF0aW9uOiBNb25kYXkgLSBGcmlkYXk6IDExOjAwIEFNIC0gOTowMCBQTSB8IFNhdHVyZGF5IC0gU3VuZGF5OiAxMDowMCBBTSAtIDEwOjAwIFBNXCI7XG4gIGNvbnRhY3RPbW90ZW5hc2hpLnRleHRDb250ZW50ID1cbiAgICBcIldlIGhvcGUgdG8gaGVhciBmcm9tIHlvdSBzb29uIGFuZCBsb29rIGZvcndhcmQgdG8gc2VydmluZyB5b3UgYXQgQmVubnkncyFcIjtcbiAgY29udGFjdC5hcHBlbmRDaGlsZChjb250YWN0QWRkcmVzcyk7XG4gIGNvbnRhY3QuYXBwZW5kQ2hpbGQoY29udGFjdFBob25lKTtcbiAgY29udGFjdC5hcHBlbmRDaGlsZChjb250YWN0RW1haWwpO1xuICBjb250YWN0LmFwcGVuZENoaWxkKGNvbnRhY3RIb3Vycyk7XG4gIGNvbnRhY3QuYXBwZW5kQ2hpbGQoY29udGFjdE9tb3RlbmFzaGkpO1xuICByZXR1cm4gY29udGFjdDtcbn1cbiIsIi8qKlxuICogQGZpbGVvdmVydmlldyBIb21lIHRhYiBtb2R1bGVcbiAqIEBhdXRob3IgVGhpbmggTmd1eWVuXG4gKiBAdmVyc2lvbiAxLjAuMFxuICovXG5cblwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBkZWNvcmF0ZVRleHQgfSBmcm9tIFwiLi90eXBvZ3JhcGh5XCI7XG5cbi8qKlxuICogQ3JlYXRlIHRoZSBob21lIGNvbXBvbmVudC5cbiAqIEByZXR1cm4ge0hUTUxFbGVtZW50fSBIb21lIGNvbXBvbmVudFxuICogQGV4cG9ydFxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBob21lKCkge1xuICBjb25zdCBob21lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgaG9tZS5jbGFzc0xpc3QuYWRkKFwibWFpbi1ob21lXCIpO1xuICBjb25zdCBob21lVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIik7XG4gIGhvbWVUaXRsZS5jbGFzc0xpc3QuYWRkKFwibWFpbi1ob21lLXRpdGxlXCIpO1xuICBob21lVGl0bGUuaW5uZXJIVE1MID0gZGVjb3JhdGVUZXh0KFwiV2VsY29tZSB0byBCZW5ueSdzXCIpLmlubmVySFRNTDtcbiAgaG9tZS5hcHBlbmRDaGlsZChob21lVGl0bGUpO1xuICBjb25zdCBob21lRGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgaG9tZURlc2NyaXB0aW9uLmNsYXNzTGlzdC5hZGQoXCJtYWluLWhvbWUtZGVzY3JpcHRpb25cIik7XG4gIGhvbWVEZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9XG4gICAgXCJBIG9uZS1vZi1hLWtpbmQgcmVzdGF1cmFudCB0aGF0IGJyaW5ncyB0aGUgZGVsZWN0YWJsZSBmbGF2b3JzIG9mIHlvdXIgZmF2b3JpdGUgYW5pbWVzIHRvIHlvdXIgcGxhdGUuIFNpdHVhdGVkIGluIHRoZSBidXN0bGluZyBoZWFydCBvZiBUb2t5bywgQmVubnkncyBpcyBhIGN1bGluYXJ5IG9hc2lzIHRoYXQgb2ZmZXJzIGFuIGVjbGVjdGljIG1lbnUgb2YgZGlzaGVzIGluc3BpcmVkIGJ5IHZhcmlvdXMgYW5pbWVzLiBGcm9tIEhvd2wgTW92aW5nIENhc3RsZSdzIGZhbW91cyBDYWxjaWZlcidzIGJyZWFrZmFzdCB0byB0aGUgbW91dGgtd2F0ZXJpbmcgR290Y2hhIFBvcmsgUm9hc3QgZnJvbSBTaG9rdWdla2kgbm8gU2hvdW1hLCBvdXIgY2hlZnMgaGF2ZSBwYWluc3Rha2luZ2x5IHJlY3JlYXRlZCB0aGUgYXV0aGVudGljIGZsYXZvcnMgb2YgdGhlc2UgYmVsb3ZlZCBzaG93cy4gV2UgcHJpZGUgb3Vyc2VsdmVzIG9uIHVzaW5nIG9ubHkgdGhlIGZyZXNoZXN0LCBoaWdoLXF1YWxpdHkgaW5ncmVkaWVudHMgdG8gY3JlYXRlIGVhY2ggZGlzaCwgYW5kIG91ciBtZW51IGlzIHRob3VnaHRmdWxseSBjdXJhdGVkIHRvIGNhdGVyIHRvIGFsbCBkaWV0YXJ5IHJlcXVpcmVtZW50cy4gT3VyIGNvenkgYW5kIHZpYnJhbnQgYXRtb3NwaGVyZSBwcm92aWRlcyB0aGUgcGVyZmVjdCBzZXR0aW5nIHRvIHNhdm9yIG91ciBkZWxpY2lvdXMgZm9vZCB3aXRoIGZyaWVuZHMgYW5kIGZhbWlseS4gQ29tZSBhbmQgZXhwZXJpZW5jZSB0aGUgbWFnaWMgb2YgYW5pbWUtaW5zcGlyZWQgY3Vpc2luZSBhdCBCZW5ueSdzLlwiO1xuICBob21lLmFwcGVuZENoaWxkKGhvbWVEZXNjcmlwdGlvbik7XG4gIHJldHVybiBob21lO1xufVxuIiwiLyoqXG4gKiBAZmlsZW92ZXJ2aWV3IE1lbnUgdGFiIG1vZHVsZVxuICogQGF1dGhvciBUaGluaCBOZ3V5ZW5cbiAqIEB2ZXJzaW9uIDEuMC4wXG4gKi9cblxuXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBidXJpRGFpa29uSW1nIGZyb20gXCIuL2J1cmlEYWlrb24ucG5nXCI7XG5pbXBvcnQgY2FsY2lmZXJCcmVha2Zhc3RJbWcgZnJvbSBcIi4vY2FsY2lmZXJCcmVha2Zhc3QuanBnXCI7XG5pbXBvcnQgZ290Y2hhUG9ya1JvYXN0SW1nIGZyb20gXCIuL2dvdGNoYVBvcmtSb2FzdC5wbmdcIjtcbmltcG9ydCBoYW1SYW1lbkltZyBmcm9tIFwiLi9oYW1SYW1lbi5wbmdcIjtcbmltcG9ydCBmdXJpa2FrZVJpY2VJbWcgZnJvbSBcIi4vZnVyaWtha2VSaWNlLmpwZ1wiO1xuaW1wb3J0IHBvcmtLYXRzdWRvbkltZyBmcm9tIFwiLi9wb3JrS2F0c3Vkb24uanBnXCI7XG5cbmNvbnN0IG1lbnVJdGVtcyA9IHtcbiAgYnVyaURhaWtvbjoge1xuICAgIG5hbWU6IFwiQnVyaSBEYWlrb25cIixcbiAgICBkZXNjcmlwdGlvbjpcbiAgICAgIFwiQSBKYXBhbmVzZSBkaXNoIG9mIGdyaWxsZWQgeWVsbG93dGFpbCBhbmQgZGFpa29uIHJhZGlzaC4gQSBtZWFsIHRoYXQgaXMgc3VidGx5IHN3ZWV0LCBzYWx0eSwgYW5kIHBlcmZlY3Qgd2l0aCBhIHN0ZWFtaW5nIGhvdCBib3dsIG9mIHJpY2UuIEZyb20gU2Vpc2h1biBCdXRhIFlhcm91LlwiLFxuICAgIGltZ1BhdGg6IGJ1cmlEYWlrb25JbWcsXG4gIH0sXG4gIGNhbGNpZmVyQnJlYWtmYXN0OiB7XG4gICAgbmFtZTogXCJDYWxjaWZlcidzIEJyZWFrZmFzdFwiLFxuICAgIGRlc2NyaXB0aW9uOlxuICAgICAgXCJBIGJyZWFrZmFzdCBtYWRlIGJ5IEhvd2wgY29uc2lzdGVkIG9mIGZyeWluZyB1cCBiYWNvbiBhbmQgZWdncy4gRnJvbSB0aGUgd29ybGQtZmFtb3VzIEhvd2wncyBNb3ZpbmcgQ2FzdGxlLlwiLFxuICAgIGltZ1BhdGg6IGNhbGNpZmVyQnJlYWtmYXN0SW1nLFxuICB9LFxuICBnb3RjaGFQb3JrUm9hc3Q6IHtcbiAgICBuYW1lOiBcIkdvdGNoYSBQb3JrIFJvYXN0XCIsXG4gICAgZGVzY3JpcHRpb246XG4gICAgICBcIkEgY3JlYXRpdmUgZGlzaCBtYWRlIHdpdGggY3JlYW15LCBzZWFzb25lZCBtYXNoZWQgcG90YXRvIHdyYXBwZWQgaW4gZGVsaWNpb3VzIGJhY29uIGFuZCBkcml6emxlZCB3aXRoIGEgcmljaCwgcmVkIHdpbmUgc2F1Y2UsIHRha2VuIGZyb20gU2hva3VnZWtpIG5vIFNob3VtYS5cIixcbiAgICBpbWdQYXRoOiBnb3RjaGFQb3JrUm9hc3RJbWcsXG4gIH0sXG4gIGhhbVJhbWVuOiB7XG4gICAgbmFtZTogXCJIYW0gUmFtZW5cIixcbiAgICBkZXNjcmlwdGlvbjpcbiAgICAgIFwiRWxldmF0ZSB5b3VyIHJhbWVuIGdhbWUgd2l0aCBoYW0gYW5kIHNvZnQtYm9pbGVkIGVnZ3MuIEEgc2ltcGxlIGRpc2ggZnJvbSBQb255by5cIixcbiAgICBpbWdQYXRoOiBoYW1SYW1lbkltZyxcbiAgfSxcbiAgZnVyaWtha2VSaWNlOiB7XG4gICAgbmFtZTogXCJGdXJpa2FrZSBSaWNlXCIsXG4gICAgZGVzY3JpcHRpb246XG4gICAgICBcIk1hZGUgb2YgcmljZSwgc2NyYW1ibGVkIGVnZ3MsIGNoaWNrZW4sIGdyZWVuIG9uaW9ucywgYW5kIHRoZSBzZWNyZXQgaW5ncmVkaWVudHMsIGdlbGF0aW4gY3ViZXMsIHRoaXMgZGlzaCBmcm9tIFNob2t1Z2VraSBubyBTaG91bWEgaXMgYSBtdXN0LXRyeS5cIixcbiAgICBpbWdQYXRoOiBmdXJpa2FrZVJpY2VJbWcsXG4gIH0sXG4gIHBvcmtLYXRzdWRvbjoge1xuICAgIG5hbWU6IFwiUG9yayBLYXRzdWRvblwiLFxuICAgIGRlc2NyaXB0aW9uOlxuICAgICAgXCJBbiBpbmNyZWRpYmxlIGNvbWZvcnQgZm9vZCBkaXNoIGZyb20gWXVyaSEhISBvbiBJY2UgbWFkZSBvZiByaWNlLCBlZ2dzLCBvbmlvbnMsIHNhdWNlLCBhbmQgZGVlcCBmcmllZCBwb3JrLlwiLFxuICAgIGltZ1BhdGg6IHBvcmtLYXRzdWRvbkltZyxcbiAgfSxcbn07XG5cbi8qKlxuICogQ3JlYXRlIHRoZSBtZW51IGNvbXBvbmVudC5cbiAqIEByZXR1cm4ge0hUTUxFbGVtZW50fSBNZW51IGNvbXBvbmVudFxuICogQGV4cG9ydFxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBtZW51KCkge1xuICBjb25zdCBtZW51R3JpZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIG1lbnVHcmlkLmNsYXNzTGlzdC5hZGQoXCJtYWluLW1lbnUtZ3JpZFwiKTtcbiAgT2JqZWN0LnZhbHVlcyhtZW51SXRlbXMpLmZvckVhY2goKHZhbHVlKSA9PiB7XG4gICAgY29uc3QgbWVudUl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnN0IG1lbnVJdGVtVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDNcIik7XG4gICAgY29uc3QgbWVudUl0ZW1JbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICAgIGNvbnN0IG1lbnVJdGVtRGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICBtZW51SXRlbS5jbGFzc0xpc3QuYWRkKFwibWFpbi1tZW51LWl0ZW1cIik7XG4gICAgbWVudUl0ZW1UaXRsZS5jbGFzc0xpc3QuYWRkKFwibWFpbi1tZW51LWl0ZW0tdGl0bGVcIik7XG4gICAgbWVudUl0ZW1JbWcuY2xhc3NMaXN0LmFkZChcIm1haW4tbWVudS1pdGVtLWltZ1wiKTtcbiAgICBtZW51SXRlbURlc2NyaXB0aW9uLmNsYXNzTGlzdC5hZGQoXCJtYWluLW1lbnUtaXRlbS1kZXNjcmlwdGlvblwiKTtcbiAgICBtZW51SXRlbVRpdGxlLnRleHRDb250ZW50ID0gdmFsdWUubmFtZTtcbiAgICBtZW51SXRlbUltZy5zcmMgPSB2YWx1ZS5pbWdQYXRoO1xuICAgIG1lbnVJdGVtSW1nLmFsdCA9IHZhbHVlLm5hbWU7XG4gICAgbWVudUl0ZW1EZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9IHZhbHVlLmRlc2NyaXB0aW9uO1xuICAgIG1lbnVJdGVtLmFwcGVuZENoaWxkKG1lbnVJdGVtVGl0bGUpO1xuICAgIG1lbnVJdGVtLmFwcGVuZENoaWxkKG1lbnVJdGVtSW1nKTtcbiAgICBtZW51SXRlbS5hcHBlbmRDaGlsZChtZW51SXRlbURlc2NyaXB0aW9uKTtcbiAgICBtZW51R3JpZC5hcHBlbmRDaGlsZChtZW51SXRlbSk7XG4gIH0pO1xuICByZXR1cm4gbWVudUdyaWQ7XG59XG4iLCIvKipcbiAqIEBmaWxlb3ZlcnZpZXcgSW5pdGlhbGl6ZSBwYWdlIGxvYWRcbiAqIEBhdXRob3IgVGhpbmggTmd1eWVuXG4gKiBAdmVyc2lvbiAxLjAuMFxuICovXG5cblwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBkZWNvcmF0ZVRleHQgfSBmcm9tIFwiLi90eXBvZ3JhcGh5XCI7XG5cbi8qKlxuICogQ3JlYXRlIHRoZSBoZWFkZXIgY29tcG9uZW50LlxuICogQHJldHVybiB7SFRNTEVsZW1lbnR9IEhlYWRlciBlbGVtZW50XG4gKi9cbmZ1bmN0aW9uIGhlYWRlcigpIHtcbiAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImhlYWRlclwiKTtcbiAgY29uc3QgaGVhZGVyQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgaGVhZGVyVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XG4gIGhlYWRlci5jbGFzc0xpc3QuYWRkKFwiaGVhZGVyXCIpO1xuICBoZWFkZXJDb250YWluZXIuY2xhc3NMaXN0LmFkZChcImhlYWRlci1jb250YWluZXJcIik7XG4gIGhlYWRlclRpdGxlLmNsYXNzTGlzdC5hZGQoXCJoZWFkZXItdGl0bGVcIik7XG4gIGhlYWRlclRpdGxlLmlubmVySFRNTCA9IGRlY29yYXRlVGV4dChcIlNlaXNodW4gQnV0YSBZYXJvdSBSZXN0YXVyYW50XCIpLmlubmVySFRNTDtcbiAgaGVhZGVyQ29udGFpbmVyLmFwcGVuZENoaWxkKGhlYWRlclRpdGxlKTtcbiAgaGVhZGVyLmFwcGVuZENoaWxkKGhlYWRlckNvbnRhaW5lcik7XG4gIHJldHVybiBoZWFkZXI7XG59XG5cbi8qKlxuICogQ3JlYXRlIHRoZSBtYWluIGNvbXBvbmVudC5cbiAqIEByZXR1cm4ge0hUTUxFbGVtZW50fSBNYWluIGVsZW1lbnRcbiAqL1xuZnVuY3Rpb24gbWFpbigpIHtcbiAgY29uc3QgbWFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJtYWluXCIpO1xuICBjb25zdCBtYWluTmF2YmFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm5hdlwiKTtcbiAgY29uc3QgbWFpbk5hdmJhckl0ZW1zID0gW1wiSG9tZVwiLCBcIk1lbnVcIiwgXCJDb250YWN0XCJdO1xuICBtYWluLmNsYXNzTGlzdC5hZGQoXCJtYWluXCIpO1xuICBtYWluLmlkID0gXCJtYWluXCI7XG4gIG1haW5OYXZiYXIuY2xhc3NMaXN0LmFkZChcIm1haW4tbmF2YmFyXCIpO1xuICBtYWluTmF2YmFySXRlbXMuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgIGNvbnN0IG1haW5OYXZiYXJJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBtYWluTmF2YmFySXRlbS5jbGFzc0xpc3QuYWRkKFwibWFpbi1uYXZiYXItaXRlbVwiKTtcbiAgICBtYWluTmF2YmFySXRlbS50ZXh0Q29udGVudCA9IGl0ZW07XG4gICAgbWFpbk5hdmJhci5hcHBlbmRDaGlsZChtYWluTmF2YmFySXRlbSk7XG4gIH0pO1xuICBtYWluLmFwcGVuZENoaWxkKG1haW5OYXZiYXIpO1xuICByZXR1cm4gbWFpbjtcbn1cblxuLyoqXG4gKiBDcmVhdGUgdGhlIGZvb3RlciBjb21wb25lbnQuXG4gKiBAcmV0dXJuIHtIVE1MRWxlbWVudH0gRm9vdGVyIGVsZW1lbnRcbiAqL1xuZnVuY3Rpb24gZm9vdGVyKCkge1xuICBjb25zdCBmb290ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZm9vdGVyXCIpO1xuICBjb25zdCBmb290ZXJUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIGNvbnN0IGZvb3RlckxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcbiAgY29uc3QgZm9vdGVySWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpXCIpO1xuICBmb290ZXIuY2xhc3NMaXN0LmFkZChcImZvb3RlclwiKTtcbiAgZm9vdGVySWNvbi5jbGFzc0xpc3QuYWRkKFwiZmFiXCIsIFwiZmEtZ2l0aHViXCIpO1xuICBmb290ZXJUZXh0LnRleHRDb250ZW50ID1cbiAgICBcIkNvcHlyaWdodCDCqSBcIiArIG5ldyBEYXRlKCkuZ2V0RnVsbFllYXIoKSArIFwiIEZlbGl4TmdGZW5kZXJcIjtcbiAgZm9vdGVyTGluay5ocmVmID0gXCJodHRwczovL2dpdGh1Yi5jb20vRmVsaXhOZ0ZlbmRlclwiO1xuICBmb290ZXJMaW5rLnRhcmdldCA9IFwiX2JsYW5rXCI7XG4gIGZvb3RlckxpbmsucmVsID0gXCJub29wZW5lciBub3JlZmVycmVyXCI7XG4gIGZvb3RlckxpbmsuYXBwZW5kQ2hpbGQoZm9vdGVySWNvbik7XG4gIGZvb3Rlci5hcHBlbmRDaGlsZChmb290ZXJUZXh0KTtcbiAgZm9vdGVyLmFwcGVuZENoaWxkKGZvb3RlckxpbmspO1xuICByZXR1cm4gZm9vdGVyO1xufVxuXG4vKipcbiAqIEluaXRpYWxpemUgcGFnZSBsb2FkLlxuICogQHJldHVybiB7dm9pZH1cbiAqIEBleHBvcnRcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcGFnZUxvYWQoKSB7XG4gIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbnRlbnRcIik7XG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQoaGVhZGVyKCkpO1xuICBjb250ZW50LmFwcGVuZENoaWxkKG1haW4oKSk7XG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQoZm9vdGVyKCkpO1xufSIsIi8qKlxuICogQGZpbGVvdmVydmlldyBUeXBvZ3JhcGh5IG1vZHVsZVxuICogQGF1dGhvciBUaGluaCBOZ3V5ZW5cbiAqIEB2ZXJzaW9uIDEuMC4wXG4gKi9cblxuXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qKlxuICogRGVjb3JhdGUgdGV4dCB0byBhbHRlcm5hdGUgYmV0d2VlbiBtYWluIGFuZCBhY2NlbnQgY29sb3IgYnkgcGxhY2luZyBlYWNoIGNoYXJhY3RlciBpbiBhIHNwYW4gYW5kIHNldHMgYSBjbGFzcyB0byBpdC5cbiAqIEBwYXJhbSB7c3RyaW5nfSB0ZXh0IC0gVGV4dCB0byBkZWNvcmF0ZVxuICogQGV4cG9ydFxuICogQHJldHVybiB7SFRNTEVsZW1lbnR9IC0gQSB3cmFwcGVyIGRpdiBjb250YWluaW5nIHRoZSBzcGFucyBjb250YWluaW5nIHRoZSBjaGFyYWN0ZXJzLlxuICovXG5leHBvcnQgZnVuY3Rpb24gZGVjb3JhdGVUZXh0KHRleHQpIHtcbiAgY29uc3Qgd3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IHRleHRBcnJheSA9IHRleHQuc3BsaXQoXCJcIik7XG4gIGxldCBpID0gMDtcbiAgdGV4dEFycmF5LmZvckVhY2goKGNoYXIpID0+IHtcbiAgICBjb25zdCBzcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gICAgc3Bhbi50ZXh0Q29udGVudCA9IGNoYXI7XG4gICAgd3JhcHBlci5hcHBlbmRDaGlsZChzcGFuKTtcbiAgICBpZiAoY2hhciA9PT0gXCIgXCIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH0gZWxzZSBpZiAoaSAlIDIgPT09IDApIHtcbiAgICAgIHNwYW4uY2xhc3NMaXN0LmFkZChcImRlY29yYXRlZC1tYWluXCIpO1xuICAgICAgaSsrO1xuICAgIH0gZWxzZSB7XG4gICAgICBzcGFuLmNsYXNzTGlzdC5hZGQoXCJkZWNvcmF0ZWQtYWNjZW50XCIpO1xuICAgICAgaSsrO1xuICAgIH1cbiAgfSk7XG4gIHJldHVybiB3cmFwcGVyO1xufVxuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIvKiBodHRwOi8vbWV5ZXJ3ZWIuY29tL2VyaWMvdG9vbHMvY3NzL3Jlc2V0LyBcXG4gICB2Mi4wIHwgMjAxMTAxMjZcXG4gICBMaWNlbnNlOiBub25lIChwdWJsaWMgZG9tYWluKVxcbiovXFxuXFxuaHRtbCwgYm9keSwgZGl2LCBzcGFuLCBhcHBsZXQsIG9iamVjdCwgaWZyYW1lLFxcbmgxLCBoMiwgaDMsIGg0LCBoNSwgaDYsIHAsIGJsb2NrcXVvdGUsIHByZSxcXG5hLCBhYmJyLCBhY3JvbnltLCBhZGRyZXNzLCBiaWcsIGNpdGUsIGNvZGUsXFxuZGVsLCBkZm4sIGVtLCBpbWcsIGlucywga2JkLCBxLCBzLCBzYW1wLFxcbnNtYWxsLCBzdHJpa2UsIHN0cm9uZywgc3ViLCBzdXAsIHR0LCB2YXIsXFxuYiwgdSwgaSwgY2VudGVyLFxcbmRsLCBkdCwgZGQsIG9sLCB1bCwgbGksXFxuZmllbGRzZXQsIGZvcm0sIGxhYmVsLCBsZWdlbmQsXFxudGFibGUsIGNhcHRpb24sIHRib2R5LCB0Zm9vdCwgdGhlYWQsIHRyLCB0aCwgdGQsXFxuYXJ0aWNsZSwgYXNpZGUsIGNhbnZhcywgZGV0YWlscywgZW1iZWQsIFxcbmZpZ3VyZSwgZmlnY2FwdGlvbiwgZm9vdGVyLCBoZWFkZXIsIGhncm91cCwgXFxubWVudSwgbmF2LCBvdXRwdXQsIHJ1YnksIHNlY3Rpb24sIHN1bW1hcnksXFxudGltZSwgbWFyaywgYXVkaW8sIHZpZGVvIHtcXG5cXHRtYXJnaW46IDA7XFxuXFx0cGFkZGluZzogMDtcXG5cXHRib3JkZXI6IDA7XFxuXFx0Zm9udC1zaXplOiAxMDAlO1xcblxcdGZvbnQ6IGluaGVyaXQ7XFxuXFx0dmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xcbn1cXG4vKiBIVE1MNSBkaXNwbGF5LXJvbGUgcmVzZXQgZm9yIG9sZGVyIGJyb3dzZXJzICovXFxuYXJ0aWNsZSwgYXNpZGUsIGRldGFpbHMsIGZpZ2NhcHRpb24sIGZpZ3VyZSwgXFxuZm9vdGVyLCBoZWFkZXIsIGhncm91cCwgbWVudSwgbmF2LCBzZWN0aW9uIHtcXG5cXHRkaXNwbGF5OiBibG9jaztcXG59XFxuYm9keSB7XFxuXFx0bGluZS1oZWlnaHQ6IDE7XFxufVxcbm9sLCB1bCB7XFxuXFx0bGlzdC1zdHlsZTogbm9uZTtcXG59XFxuYmxvY2txdW90ZSwgcSB7XFxuXFx0cXVvdGVzOiBub25lO1xcbn1cXG5ibG9ja3F1b3RlOmJlZm9yZSwgYmxvY2txdW90ZTphZnRlcixcXG5xOmJlZm9yZSwgcTphZnRlciB7XFxuXFx0Y29udGVudDogJyc7XFxuXFx0Y29udGVudDogbm9uZTtcXG59XFxudGFibGUge1xcblxcdGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XFxuXFx0Ym9yZGVyLXNwYWNpbmc6IDA7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3Jlc3RhdXJhbnQvc3JjL3N0eWxlcy9zdHlsZXMtcmVzZXQuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBOzs7Q0FHQzs7QUFFRDs7Ozs7Ozs7Ozs7OztDQWFDLFNBQVM7Q0FDVCxVQUFVO0NBQ1YsU0FBUztDQUNULGVBQWU7Q0FDZixhQUFhO0NBQ2Isd0JBQXdCO0FBQ3pCO0FBQ0EsZ0RBQWdEO0FBQ2hEOztDQUVDLGNBQWM7QUFDZjtBQUNBO0NBQ0MsY0FBYztBQUNmO0FBQ0E7Q0FDQyxnQkFBZ0I7QUFDakI7QUFDQTtDQUNDLFlBQVk7QUFDYjtBQUNBOztDQUVDLFdBQVc7Q0FDWCxhQUFhO0FBQ2Q7QUFDQTtDQUNDLHlCQUF5QjtDQUN6QixpQkFBaUI7QUFDbEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLyogaHR0cDovL21leWVyd2ViLmNvbS9lcmljL3Rvb2xzL2Nzcy9yZXNldC8gXFxuICAgdjIuMCB8IDIwMTEwMTI2XFxuICAgTGljZW5zZTogbm9uZSAocHVibGljIGRvbWFpbilcXG4qL1xcblxcbmh0bWwsIGJvZHksIGRpdiwgc3BhbiwgYXBwbGV0LCBvYmplY3QsIGlmcmFtZSxcXG5oMSwgaDIsIGgzLCBoNCwgaDUsIGg2LCBwLCBibG9ja3F1b3RlLCBwcmUsXFxuYSwgYWJiciwgYWNyb255bSwgYWRkcmVzcywgYmlnLCBjaXRlLCBjb2RlLFxcbmRlbCwgZGZuLCBlbSwgaW1nLCBpbnMsIGtiZCwgcSwgcywgc2FtcCxcXG5zbWFsbCwgc3RyaWtlLCBzdHJvbmcsIHN1Yiwgc3VwLCB0dCwgdmFyLFxcbmIsIHUsIGksIGNlbnRlcixcXG5kbCwgZHQsIGRkLCBvbCwgdWwsIGxpLFxcbmZpZWxkc2V0LCBmb3JtLCBsYWJlbCwgbGVnZW5kLFxcbnRhYmxlLCBjYXB0aW9uLCB0Ym9keSwgdGZvb3QsIHRoZWFkLCB0ciwgdGgsIHRkLFxcbmFydGljbGUsIGFzaWRlLCBjYW52YXMsIGRldGFpbHMsIGVtYmVkLCBcXG5maWd1cmUsIGZpZ2NhcHRpb24sIGZvb3RlciwgaGVhZGVyLCBoZ3JvdXAsIFxcbm1lbnUsIG5hdiwgb3V0cHV0LCBydWJ5LCBzZWN0aW9uLCBzdW1tYXJ5LFxcbnRpbWUsIG1hcmssIGF1ZGlvLCB2aWRlbyB7XFxuXFx0bWFyZ2luOiAwO1xcblxcdHBhZGRpbmc6IDA7XFxuXFx0Ym9yZGVyOiAwO1xcblxcdGZvbnQtc2l6ZTogMTAwJTtcXG5cXHRmb250OiBpbmhlcml0O1xcblxcdHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcXG59XFxuLyogSFRNTDUgZGlzcGxheS1yb2xlIHJlc2V0IGZvciBvbGRlciBicm93c2VycyAqL1xcbmFydGljbGUsIGFzaWRlLCBkZXRhaWxzLCBmaWdjYXB0aW9uLCBmaWd1cmUsIFxcbmZvb3RlciwgaGVhZGVyLCBoZ3JvdXAsIG1lbnUsIG5hdiwgc2VjdGlvbiB7XFxuXFx0ZGlzcGxheTogYmxvY2s7XFxufVxcbmJvZHkge1xcblxcdGxpbmUtaGVpZ2h0OiAxO1xcbn1cXG5vbCwgdWwge1xcblxcdGxpc3Qtc3R5bGU6IG5vbmU7XFxufVxcbmJsb2NrcXVvdGUsIHEge1xcblxcdHF1b3Rlczogbm9uZTtcXG59XFxuYmxvY2txdW90ZTpiZWZvcmUsIGJsb2NrcXVvdGU6YWZ0ZXIsXFxucTpiZWZvcmUsIHE6YWZ0ZXIge1xcblxcdGNvbnRlbnQ6ICcnO1xcblxcdGNvbnRlbnQ6IG5vbmU7XFxufVxcbnRhYmxlIHtcXG5cXHRib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xcblxcdGJvcmRlci1zcGFjaW5nOiAwO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIkdyaWZmb0NsYXNzaWNvQm9sZC53b2ZmMlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fID0gbmV3IFVSTChcIkdyaWZmb0NsYXNzaWNvQm9sZC53b2ZmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18gPSBuZXcgVVJMKFwiR3JpZmZvQ2xhc3NpY29Cb2xkLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8zX19fID0gbmV3IFVSTChcIi4uL2Fzc2V0cy9iZW5ueVJlc3RhdXJhbnQuanBnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfM19fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzNfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiOnJvb3Qge1xcbiAgLS1wYXNzaW9uYXRlLXJlZDogMTkxLCA1LCA1NTtcXG4gIC0tbm9zdGFsZ2ljLXllbGxvdzogMjQyLCAyMzMsIDEwNztcXG4gIC0tc29mdC1ncmF5OiAyMzcsIDE5NiwgMTc4O1xcbiAgLS15ZWxsby1yYW5nZTogMjQyLCAxNzQsIDExNDtcXG4gIC0tZGFyay1ibGFjazogODksIDIsIDI7XFxuICAtLXNoYXJwLXdoaXRlOiAyNTUsIDI1NSwgMjU1O1xcbiAgLS12aXN0YS1ibHVlOiAxMzgsIDE2NiwgMTk4O1xcbiAgLS1zdGVlbC1ibHVlOiA1MCwgMTI5LCAxNzg7XFxuICAtLXlpbm1uLWJsdWU6IDU3LCA4NSwgMTU4O1xcbiAgLS1ib3JkZXItcmFkaXVzOiA4cHg7XFxuICAtLXNwYWNpbmcteHM6IDVweDtcXG4gIC0tc3BhY2luZy1zbTogMTBweDtcXG4gIC0tc3BhY2luZy1tZDogMTVweDtcXG4gIC0tc3BhY2luZy1sZzogMjBweDtcXG4gIC0tc3BhY2luZy14bDogNDBweDtcXG4gIC0tY29udGFpbmVyLXdpZHRoOiAxMjAwcHg7XFxuICAtLWZvb3Rlci1oZWlnaHQ6IDQwcHg7XFxuICAtLWJ0bi1oZWlnaHQ6IDUwcHg7XFxuICAtLWltZy1oZWlnaHQ6IDMwMHB4O1xcbiAgLS1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4xNikgMHB4IDFweCA0cHg7XFxufVxcblxcbi8qIEdMT0JBTCAqL1xcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJHcmlmZm8gQ2xhc3NpY29cXFwiO1xcbiAgc3JjOiBsb2NhbChcXFwiR3JpZmZvIENsYXNzaWNvIEJvbGRcXFwiKSwgbG9jYWwoXFxcIkdyaWZmby1DbGFzc2ljby1Cb2xkXFxcIiksXFxuICAgIHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIikgZm9ybWF0KFxcXCJ3b2ZmMlxcXCIpLFxcbiAgICB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fICsgXCIpIGZvcm1hdChcXFwid29mZlxcXCIpLFxcbiAgICB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19fICsgXCIpIGZvcm1hdChcXFwidHJ1ZXR5cGVcXFwiKTtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxufVxcblxcbmh0bWwge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIGhlaWdodDogMTAwJTtcXG59XFxuXFxuKixcXG4qOmJlZm9yZSxcXG4qOmFmdGVyIHtcXG4gIGJveC1zaXppbmc6IGluaGVyaXQ7XFxufVxcblxcbmJvZHkge1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfM19fXyArIFwiKTtcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IDM1JTtcXG4gIG1pbi1oZWlnaHQ6IDEwMCU7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvIDFmciBhdXRvO1xcbn1cXG5cXG4uZGVjb3JhdGVkLW1haW4ge1xcbiAgY29sb3I6IHJiZ2EodmFyKC0teWlubW4tYmx1ZSksIDEpO1xcbn1cXG5cXG4uZGVjb3JhdGVkLWFjY2VudCB7XFxuICBjb2xvcjogcmdiYSh2YXIoLS12aXN0YS1ibHVlKSwgMSk7XFxufVxcblxcbi8qIEhFQURFUiAqL1xcbi5oZWFkZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSh2YXIoLS1ub3N0YWxnaWMteWVsbG93KSwgMC44KTtcXG4gIGJveC1zaGFkb3c6IHZhcigtLXNoYWRvdyk7XFxufVxcblxcbi5oZWFkZXItY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICB3aWR0aDogMTAwJTtcXG4gIG1heC13aWR0aDogdmFyKC0tY29udGFpbmVyLXdpZHRoKTtcXG4gIHBhZGRpbmc6IHZhcigtLXNwYWNpbmctbGcpO1xcbn1cXG5cXG4uaGVhZGVyLXRpdGxlIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiR3JpZmZvIENsYXNzaWNvXFxcIiwgc2Fucy1zZXJpZjtcXG4gIGNvbG9yOiByZ2JhKHZhcigtLXlpbm1uLWJsdWUpLCAxKTtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbn1cXG5cXG4vKiBOQVZCQVIgKi9cXG4ubWFpbiB7XFxuICBmb250LWZhbWlseTogXFxcIkFsZWdyZXlhXFxcIiwgc2Fucy1zZXJpZjtcXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xcbiAgY29sb3I6IHJnYmEodmFyKC0tZGFyay1ibGFjayksIDEpO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBtYXgtd2lkdGg6IHZhcigtLWNvbnRhaW5lci13aWR0aCk7XFxuICBtYXJnaW46IDAgYXV0bztcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEodmFyKC0teWVsbG8tcmFuZ2UpLCAwLjgpO1xcbn1cXG5cXG4ubWFpbi1uYXZiYXIge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IHZhcigtLWJ0bi1oZWlnaHQpO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDMsIDFmcik7XFxuICBib3gtc2hhZG93OiB2YXIoLS1zaGFkb3cpO1xcbn1cXG5cXG4ubWFpbi1uYXZiYXItaXRlbSB7XFxuICBmb250LWZhbWlseTogXFxcIkFsZWdyZXlhXFxcIiwgc2Fucy1zZXJpZjtcXG4gIGNvbG9yOiByZ2JhKHZhcigtLXlpbm1uLWJsdWUsIDEpKTtcXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSh2YXIoLS15ZWxsby1yYW5nZSksIDEpO1xcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7XFxufVxcblxcbi5tYWluLW5hdmJhci1pdGVtOmhvdmVyLFxcbi5tYWluLW5hdmJhci1pdGVtOmFjdGl2ZSxcXG4ubWFpbi1uYXZiYXItaXRlbTpmb2N1cyB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKHZhcigtLW5vc3RhbGdpYy15ZWxsb3cpLCAwLjgpO1xcbn1cXG5cXG4vKiBIT01FICovXFxuLm1haW4taG9tZSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIG1heC13aWR0aDogdmFyKC0tY29udGFpbmVyLXdpZHRoKTtcXG4gIG1hcmdpbjogMCBhdXRvO1xcbiAgcGFkZGluZzogdmFyKC0tc3BhY2luZy1sZyk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKHZhcigtLW5vc3RhbGdpYy15ZWxsb3cpLCAxKTtcXG59XFxuXFxuLm1haW4taG9tZS10aXRsZSB7XFxuICBmb250LWZhbWlseTogXFxcIkdyaWZmbyBDbGFzc2ljb1xcXCIsIHNhbnMtc2VyaWY7XFxuICBjb2xvcjogcmdiYSh2YXIoLS15aW5tbi1ibHVlKSwgMSk7XFxuICBmb250LXNpemU6IDJyZW07XFxuICBtYXJnaW46IHZhcigtLXNwYWNpbmctbGcpIDA7XFxufVxcblxcbi5tYWluLWhvbWUtZGVzY3JpcHRpb24ge1xcbiAgY29sb3I6IHJnYmEodmFyKC0tZGFyay1ibGFjayksIDEpO1xcbiAgZm9udC1zaXplOiAxLjVyZW07XFxuICBsaW5lLWhlaWdodDogMjtcXG4gIGxldHRlci1zcGFjaW5nOiAwLjE1cmVtO1xcbiAgbWF4LXdpZHRoOiBjYWxjKHZhcigtLWNvbnRhaW5lci13aWR0aCkgLyAxLjUpO1xcbn1cXG5cXG4vKiBNRU5VICovXFxuLm1haW4tbWVudS1ncmlkIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KGNhbGModmFyKC0tY29udGFpbmVyLXdpZHRoKSAvIDMpLCAxZnIpKTtcXG4gIGdyaWQtZ2FwOiB2YXIoLS1zcGFjaW5nLWxnKTtcXG4gIHBhZGRpbmc6IHZhcigtLXNwYWNpbmctbGcpO1xcbn1cXG5cXG4ubWFpbi1tZW51LWl0ZW0ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSh2YXIoLS1ub3N0YWxnaWMteWVsbG93KSwgMSk7XFxuICBib3JkZXItcmFkaXVzOiB2YXIoLS1ib3JkZXItcmFkaXVzKTtcXG4gIGJveC1zaGFkb3c6IHZhcigtLXNoYWRvdyk7XFxuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dDtcXG59XFxuXFxuLm1haW4tbWVudS1pdGVtOmhvdmVyIHtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4wMyk7XFxufVxcblxcbi5tYWluLW1lbnUtaXRlbS1pbWcge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IHZhcigtLWltZy1oZWlnaHQpO1xcbiAgb2JqZWN0LWZpdDogY292ZXI7XFxuICBib3JkZXItcmFkaXVzOiB2YXIoLS1ib3JkZXItcmFkaXVzKSB2YXIoLS1ib3JkZXItcmFkaXVzKSAwIDA7XFxufVxcblxcbi5tYWluLW1lbnUtaXRlbS10aXRsZSB7XFxuICBmb250LWZhbWlseTogXFxcIkdyaWZmbyBDbGFzc2ljb1xcXCIsIHNhbnMtc2VyaWY7XFxuICBjb2xvcjogcmdiYSh2YXIoLS15aW5tbi1ibHVlKSwgMSk7XFxuICBmb250LXNpemU6IDEuNXJlbTtcXG4gIG1hcmdpbjogdmFyKC0tc3BhY2luZy1zbSkgMDtcXG59XFxuXFxuLm1haW4tbWVudS1pdGVtLWRlc2NyaXB0aW9uIHtcXG4gIGNvbG9yOiByZ2JhKHZhcigtLWRhcmstYmxhY2spLCAxKTtcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG4gIG1hcmdpbjogdmFyKC0tc3BhY2luZy1zbSk7XFxuICBsZXR0ZXItc3BhY2luZzogMC4xNXJlbTtcXG59XFxuXFxuLyogQ09OVEFDVCAqL1xcbi5tYWluLWNvbnRhY3Qge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IHZhcigtLXNwYWNpbmctbGcpO1xcbiAgZm9udC1zaXplOiAxLjVyZW07XFxuICBsZXR0ZXItc3BhY2luZzogMC4xNXJlbTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgbWF4LXdpZHRoOiB2YXIoLS1jb250YWluZXItd2lkdGgpO1xcbiAgbWFyZ2luOiAwIGF1dG87XFxuICBwYWRkaW5nOiB2YXIoLS1zcGFjaW5nLWxnKTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEodmFyKC0tbm9zdGFsZ2ljLXllbGxvdyksIDEpO1xcbn1cXG5cXG4vKiBGT09URVIgKi9cXG4uZm9vdGVyIHtcXG4gIHBhZGRpbmctYm90dG9tOiB2YXIoLS1zcGFjaW5nLXhzKTtcXG4gIGhlaWdodDogdmFyKC0tZm9vdGVyLWhlaWdodCk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKHZhcigtLXNvZnQtZ3JheSksIDAuOCk7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZ2FwOiAxMHB4O1xcbiAgd2lkdGg6IDEwMCU7XFxuICBncmlkLXJvdzogMyAvIDQ7XFxufVxcblxcbi5mYS1naXRodWIge1xcbiAgZm9udC1zaXplOiAyMHB4O1xcbiAgbWFyZ2luLXRvcDogNHB4O1xcbiAgY29sb3I6IGJsYWNrO1xcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuM3MgZWFzZS1pbi1vdXQ7XFxufVxcblxcbi5mYS1naXRodWI6aG92ZXIge1xcbiAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKSBzY2FsZSgxLjIpO1xcbn1cXG5cXG4vKiBNRURJQSBRVUVSSUVTICovXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDI1cHgpIHtcXG4gIC5tYWluLW1lbnUtZ3JpZCB7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xcbiAgfVxcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9yZXN0YXVyYW50L3NyYy9zdHlsZXMvc3R5bGVzLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLDRCQUE0QjtFQUM1QixpQ0FBaUM7RUFDakMsMEJBQTBCO0VBQzFCLDRCQUE0QjtFQUM1QixzQkFBc0I7RUFDdEIsNEJBQTRCO0VBQzVCLDJCQUEyQjtFQUMzQiwwQkFBMEI7RUFDMUIseUJBQXlCO0VBQ3pCLG9CQUFvQjtFQUNwQixpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLHlCQUF5QjtFQUN6QixxQkFBcUI7RUFDckIsa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQix5Q0FBeUM7QUFDM0M7O0FBRUEsV0FBVztBQUNYO0VBQ0UsOEJBQThCO0VBQzlCOzs7OERBR2tEO0VBQ2xELGdCQUFnQjtFQUNoQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxzQkFBc0I7RUFDdEIsWUFBWTtBQUNkOztBQUVBOzs7RUFHRSxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSx5REFBc0Q7RUFDdEQsc0JBQXNCO0VBQ3RCLDRCQUE0QjtFQUM1Qiw0QkFBNEI7RUFDNUIsd0JBQXdCO0VBQ3hCLGdCQUFnQjtFQUNoQixhQUFhO0VBQ2IsaUNBQWlDO0FBQ25DOztBQUVBO0VBQ0UsaUNBQWlDO0FBQ25DOztBQUVBO0VBQ0UsaUNBQWlDO0FBQ25DOztBQUVBLFdBQVc7QUFDWDtFQUNFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsb0RBQW9EO0VBQ3BELHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLFdBQVc7RUFDWCxpQ0FBaUM7RUFDakMsMEJBQTBCO0FBQzVCOztBQUVBO0VBQ0UsMENBQTBDO0VBQzFDLGlDQUFpQztFQUNqQyxpQkFBaUI7QUFDbkI7O0FBRUEsV0FBVztBQUNYO0VBQ0UsbUNBQW1DO0VBQ25DLGlCQUFpQjtFQUNqQixpQ0FBaUM7RUFDakMsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixtQkFBbUI7RUFDbkIsV0FBVztFQUNYLGlDQUFpQztFQUNqQyxjQUFjO0VBQ2QsK0NBQStDO0FBQ2pEOztBQUVBO0VBQ0UsV0FBVztFQUNYLHlCQUF5QjtFQUN6QixhQUFhO0VBQ2IscUNBQXFDO0VBQ3JDLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLG1DQUFtQztFQUNuQyxpQ0FBaUM7RUFDakMsaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZixZQUFZO0VBQ1osNkNBQTZDO0VBQzdDLGdDQUFnQztBQUNsQzs7QUFFQTs7O0VBR0Usb0RBQW9EO0FBQ3REOztBQUVBLFNBQVM7QUFDVDtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsbUJBQW1CO0VBQ25CLFdBQVc7RUFDWCxZQUFZO0VBQ1osaUNBQWlDO0VBQ2pDLGNBQWM7RUFDZCwwQkFBMEI7RUFDMUIsa0RBQWtEO0FBQ3BEOztBQUVBO0VBQ0UsMENBQTBDO0VBQzFDLGlDQUFpQztFQUNqQyxlQUFlO0VBQ2YsMkJBQTJCO0FBQzdCOztBQUVBO0VBQ0UsaUNBQWlDO0VBQ2pDLGlCQUFpQjtFQUNqQixjQUFjO0VBQ2QsdUJBQXVCO0VBQ3ZCLDZDQUE2QztBQUMvQzs7QUFFQSxTQUFTO0FBQ1Q7RUFDRSxhQUFhO0VBQ2Isc0ZBQXNGO0VBQ3RGLDJCQUEyQjtFQUMzQiwwQkFBMEI7QUFDNUI7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLG1CQUFtQjtFQUNuQixrREFBa0Q7RUFDbEQsbUNBQW1DO0VBQ25DLHlCQUF5QjtFQUN6QixnQ0FBZ0M7QUFDbEM7O0FBRUE7RUFDRSxzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gseUJBQXlCO0VBQ3pCLGlCQUFpQjtFQUNqQiw0REFBNEQ7QUFDOUQ7O0FBRUE7RUFDRSwwQ0FBMEM7RUFDMUMsaUNBQWlDO0VBQ2pDLGlCQUFpQjtFQUNqQiwyQkFBMkI7QUFDN0I7O0FBRUE7RUFDRSxpQ0FBaUM7RUFDakMsZUFBZTtFQUNmLHlCQUF5QjtFQUN6Qix1QkFBdUI7QUFDekI7O0FBRUEsWUFBWTtBQUNaO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixzQkFBc0I7RUFDdEIsaUJBQWlCO0VBQ2pCLHVCQUF1QjtFQUN2QixXQUFXO0VBQ1gsWUFBWTtFQUNaLGlDQUFpQztFQUNqQyxjQUFjO0VBQ2QsMEJBQTBCO0VBQzFCLGtEQUFrRDtBQUNwRDs7QUFFQSxXQUFXO0FBQ1g7RUFDRSxpQ0FBaUM7RUFDakMsNEJBQTRCO0VBQzVCLDZDQUE2QztFQUM3QyxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixTQUFTO0VBQ1QsV0FBVztFQUNYLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsZUFBZTtFQUNmLFlBQVk7RUFDWixzQ0FBc0M7QUFDeEM7O0FBRUE7RUFDRSxvQ0FBb0M7QUFDdEM7O0FBRUEsa0JBQWtCO0FBQ2xCO0VBQ0U7SUFDRSwwQkFBMEI7RUFDNUI7QUFDRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCI6cm9vdCB7XFxuICAtLXBhc3Npb25hdGUtcmVkOiAxOTEsIDUsIDU1O1xcbiAgLS1ub3N0YWxnaWMteWVsbG93OiAyNDIsIDIzMywgMTA3O1xcbiAgLS1zb2Z0LWdyYXk6IDIzNywgMTk2LCAxNzg7XFxuICAtLXllbGxvLXJhbmdlOiAyNDIsIDE3NCwgMTE0O1xcbiAgLS1kYXJrLWJsYWNrOiA4OSwgMiwgMjtcXG4gIC0tc2hhcnAtd2hpdGU6IDI1NSwgMjU1LCAyNTU7XFxuICAtLXZpc3RhLWJsdWU6IDEzOCwgMTY2LCAxOTg7XFxuICAtLXN0ZWVsLWJsdWU6IDUwLCAxMjksIDE3ODtcXG4gIC0teWlubW4tYmx1ZTogNTcsIDg1LCAxNTg7XFxuICAtLWJvcmRlci1yYWRpdXM6IDhweDtcXG4gIC0tc3BhY2luZy14czogNXB4O1xcbiAgLS1zcGFjaW5nLXNtOiAxMHB4O1xcbiAgLS1zcGFjaW5nLW1kOiAxNXB4O1xcbiAgLS1zcGFjaW5nLWxnOiAyMHB4O1xcbiAgLS1zcGFjaW5nLXhsOiA0MHB4O1xcbiAgLS1jb250YWluZXItd2lkdGg6IDEyMDBweDtcXG4gIC0tZm9vdGVyLWhlaWdodDogNDBweDtcXG4gIC0tYnRuLWhlaWdodDogNTBweDtcXG4gIC0taW1nLWhlaWdodDogMzAwcHg7XFxuICAtLXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjE2KSAwcHggMXB4IDRweDtcXG59XFxuXFxuLyogR0xPQkFMICovXFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogXFxcIkdyaWZmbyBDbGFzc2ljb1xcXCI7XFxuICBzcmM6IGxvY2FsKFxcXCJHcmlmZm8gQ2xhc3NpY28gQm9sZFxcXCIpLCBsb2NhbChcXFwiR3JpZmZvLUNsYXNzaWNvLUJvbGRcXFwiKSxcXG4gICAgdXJsKFxcXCJHcmlmZm9DbGFzc2ljb0JvbGQud29mZjJcXFwiKSBmb3JtYXQoXFxcIndvZmYyXFxcIiksXFxuICAgIHVybChcXFwiR3JpZmZvQ2xhc3NpY29Cb2xkLndvZmZcXFwiKSBmb3JtYXQoXFxcIndvZmZcXFwiKSxcXG4gICAgdXJsKFxcXCJHcmlmZm9DbGFzc2ljb0JvbGQudHRmXFxcIikgZm9ybWF0KFxcXCJ0cnVldHlwZVxcXCIpO1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG59XFxuXFxuaHRtbCB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgaGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG4qLFxcbio6YmVmb3JlLFxcbio6YWZ0ZXIge1xcbiAgYm94LXNpemluZzogaW5oZXJpdDtcXG59XFxuXFxuYm9keSB7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXFxcIi4uL2Fzc2V0cy9iZW5ueVJlc3RhdXJhbnQuanBnXFxcIik7XFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAzNSU7XFxuICBtaW4taGVpZ2h0OiAxMDAlO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogYXV0byAxZnIgYXV0bztcXG59XFxuXFxuLmRlY29yYXRlZC1tYWluIHtcXG4gIGNvbG9yOiByYmdhKHZhcigtLXlpbm1uLWJsdWUpLCAxKTtcXG59XFxuXFxuLmRlY29yYXRlZC1hY2NlbnQge1xcbiAgY29sb3I6IHJnYmEodmFyKC0tdmlzdGEtYmx1ZSksIDEpO1xcbn1cXG5cXG4vKiBIRUFERVIgKi9cXG4uaGVhZGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEodmFyKC0tbm9zdGFsZ2ljLXllbGxvdyksIDAuOCk7XFxuICBib3gtc2hhZG93OiB2YXIoLS1zaGFkb3cpO1xcbn1cXG5cXG4uaGVhZGVyLWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBtYXgtd2lkdGg6IHZhcigtLWNvbnRhaW5lci13aWR0aCk7XFxuICBwYWRkaW5nOiB2YXIoLS1zcGFjaW5nLWxnKTtcXG59XFxuXFxuLmhlYWRlci10aXRsZSB7XFxuICBmb250LWZhbWlseTogXFxcIkdyaWZmbyBDbGFzc2ljb1xcXCIsIHNhbnMtc2VyaWY7XFxuICBjb2xvcjogcmdiYSh2YXIoLS15aW5tbi1ibHVlKSwgMSk7XFxuICBmb250LXNpemU6IDEuNXJlbTtcXG59XFxuXFxuLyogTkFWQkFSICovXFxuLm1haW4ge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJBbGVncmV5YVxcXCIsIHNhbnMtc2VyaWY7XFxuICBmb250LXNpemU6IDEuMnJlbTtcXG4gIGNvbG9yOiByZ2JhKHZhcigtLWRhcmstYmxhY2spLCAxKTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgbWF4LXdpZHRoOiB2YXIoLS1jb250YWluZXItd2lkdGgpO1xcbiAgbWFyZ2luOiAwIGF1dG87XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKHZhcigtLXllbGxvLXJhbmdlKSwgMC44KTtcXG59XFxuXFxuLm1haW4tbmF2YmFyIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiB2YXIoLS1idG4taGVpZ2h0KTtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLCAxZnIpO1xcbiAgYm94LXNoYWRvdzogdmFyKC0tc2hhZG93KTtcXG59XFxuXFxuLm1haW4tbmF2YmFyLWl0ZW0ge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJBbGVncmV5YVxcXCIsIHNhbnMtc2VyaWY7XFxuICBjb2xvcjogcmdiYSh2YXIoLS15aW5tbi1ibHVlLCAxKSk7XFxuICBmb250LXNpemU6IDEuMnJlbTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEodmFyKC0teWVsbG8tcmFuZ2UpLCAxKTtcXG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0O1xcbn1cXG5cXG4ubWFpbi1uYXZiYXItaXRlbTpob3ZlcixcXG4ubWFpbi1uYXZiYXItaXRlbTphY3RpdmUsXFxuLm1haW4tbmF2YmFyLWl0ZW06Zm9jdXMge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSh2YXIoLS1ub3N0YWxnaWMteWVsbG93KSwgMC44KTtcXG59XFxuXFxuLyogSE9NRSAqL1xcbi5tYWluLWhvbWUge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBtYXgtd2lkdGg6IHZhcigtLWNvbnRhaW5lci13aWR0aCk7XFxuICBtYXJnaW46IDAgYXV0bztcXG4gIHBhZGRpbmc6IHZhcigtLXNwYWNpbmctbGcpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSh2YXIoLS1ub3N0YWxnaWMteWVsbG93KSwgMSk7XFxufVxcblxcbi5tYWluLWhvbWUtdGl0bGUge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJHcmlmZm8gQ2xhc3NpY29cXFwiLCBzYW5zLXNlcmlmO1xcbiAgY29sb3I6IHJnYmEodmFyKC0teWlubW4tYmx1ZSksIDEpO1xcbiAgZm9udC1zaXplOiAycmVtO1xcbiAgbWFyZ2luOiB2YXIoLS1zcGFjaW5nLWxnKSAwO1xcbn1cXG5cXG4ubWFpbi1ob21lLWRlc2NyaXB0aW9uIHtcXG4gIGNvbG9yOiByZ2JhKHZhcigtLWRhcmstYmxhY2spLCAxKTtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgbGluZS1oZWlnaHQ6IDI7XFxuICBsZXR0ZXItc3BhY2luZzogMC4xNXJlbTtcXG4gIG1heC13aWR0aDogY2FsYyh2YXIoLS1jb250YWluZXItd2lkdGgpIC8gMS41KTtcXG59XFxuXFxuLyogTUVOVSAqL1xcbi5tYWluLW1lbnUtZ3JpZCB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heChjYWxjKHZhcigtLWNvbnRhaW5lci13aWR0aCkgLyAzKSwgMWZyKSk7XFxuICBncmlkLWdhcDogdmFyKC0tc3BhY2luZy1sZyk7XFxuICBwYWRkaW5nOiB2YXIoLS1zcGFjaW5nLWxnKTtcXG59XFxuXFxuLm1haW4tbWVudS1pdGVtIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEodmFyKC0tbm9zdGFsZ2ljLXllbGxvdyksIDEpO1xcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tYm9yZGVyLXJhZGl1cyk7XFxuICBib3gtc2hhZG93OiB2YXIoLS1zaGFkb3cpO1xcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7XFxufVxcblxcbi5tYWluLW1lbnUtaXRlbTpob3ZlciB7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMDMpO1xcbn1cXG5cXG4ubWFpbi1tZW51LWl0ZW0taW1nIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiB2YXIoLS1pbWctaGVpZ2h0KTtcXG4gIG9iamVjdC1maXQ6IGNvdmVyO1xcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tYm9yZGVyLXJhZGl1cykgdmFyKC0tYm9yZGVyLXJhZGl1cykgMCAwO1xcbn1cXG5cXG4ubWFpbi1tZW51LWl0ZW0tdGl0bGUge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJHcmlmZm8gQ2xhc3NpY29cXFwiLCBzYW5zLXNlcmlmO1xcbiAgY29sb3I6IHJnYmEodmFyKC0teWlubW4tYmx1ZSksIDEpO1xcbiAgZm9udC1zaXplOiAxLjVyZW07XFxuICBtYXJnaW46IHZhcigtLXNwYWNpbmctc20pIDA7XFxufVxcblxcbi5tYWluLW1lbnUtaXRlbS1kZXNjcmlwdGlvbiB7XFxuICBjb2xvcjogcmdiYSh2YXIoLS1kYXJrLWJsYWNrKSwgMSk7XFxuICBmb250LXNpemU6IDFyZW07XFxuICBtYXJnaW46IHZhcigtLXNwYWNpbmctc20pO1xcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMTVyZW07XFxufVxcblxcbi8qIENPTlRBQ1QgKi9cXG4ubWFpbi1jb250YWN0IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiB2YXIoLS1zcGFjaW5nLWxnKTtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMTVyZW07XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIG1heC13aWR0aDogdmFyKC0tY29udGFpbmVyLXdpZHRoKTtcXG4gIG1hcmdpbjogMCBhdXRvO1xcbiAgcGFkZGluZzogdmFyKC0tc3BhY2luZy1sZyk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKHZhcigtLW5vc3RhbGdpYy15ZWxsb3cpLCAxKTtcXG59XFxuXFxuLyogRk9PVEVSICovXFxuLmZvb3RlciB7XFxuICBwYWRkaW5nLWJvdHRvbTogdmFyKC0tc3BhY2luZy14cyk7XFxuICBoZWlnaHQ6IHZhcigtLWZvb3Rlci1oZWlnaHQpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSh2YXIoLS1zb2Z0LWdyYXkpLCAwLjgpO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGdhcDogMTBweDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgZ3JpZC1yb3c6IDMgLyA0O1xcbn1cXG5cXG4uZmEtZ2l0aHViIHtcXG4gIGZvbnQtc2l6ZTogMjBweDtcXG4gIG1hcmdpbi10b3A6IDRweDtcXG4gIGNvbG9yOiBibGFjaztcXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjNzIGVhc2UtaW4tb3V0O1xcbn1cXG5cXG4uZmEtZ2l0aHViOmhvdmVyIHtcXG4gIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZykgc2NhbGUoMS4yKTtcXG59XFxuXFxuLyogTUVESUEgUVVFUklFUyAqL1xcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQyNXB4KSB7XFxuICAubWFpbi1tZW51LWdyaWQge1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcXG4gIH1cXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTtcblxuICAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfVxuXG4gIC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy1yZXNldC5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy1yZXNldC5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcImluZGV4XCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsIi8qKlxuICogQGZpbGVvdmVydmlldyBSZXN0YXVyYW50IGFwcFxuICogQGF1dGhvciBUaGluaCBOZ3V5ZW5cbiAqIEB2ZXJzaW9uIDEuMC4wXG4gKi9cblxuXCJ1c2Ugc3RyaWN0XCI7XG5pbXBvcnQgXCIuL3N0eWxlcy9zdHlsZXMtcmVzZXQuY3NzXCI7XG5pbXBvcnQgXCIuL3N0eWxlcy9zdHlsZXMuY3NzXCI7XG5cbmltcG9ydCBwYWdlTG9hZCBmcm9tIFwiLi9jb21wb25lbnRzL3BhZ2VMb2FkXCI7XG5pbXBvcnQgY3JlYXRlTWVudUNvbXBvbmVudCBmcm9tIFwiLi9jb21wb25lbnRzL21lbnUvbWVudVwiO1xuaW1wb3J0IGNyZWF0ZUhvbWVDb21wb25lbnQgZnJvbSBcIi4vY29tcG9uZW50cy9ob21lXCI7XG5pbXBvcnQgY3JlYXRlQ29udGFjdENvbXBvbmVudCBmcm9tIFwiLi9jb21wb25lbnRzL2NvbnRhY3RcIjtcbmltcG9ydCBmYXZpY29uTGluayBmcm9tIFwiLi9hc3NldHMvZmF2aWNvbi5wbmdcIjtcblxuLyoqXG4gKiBDcmVhdGUgZmF2aWNvbi5cbiAqIEByZXR1cm4ge3ZvaWR9XG4gKi9cbmZ1bmN0aW9uIGNyZWF0ZUZhdmljb24oKSB7XG4gIGxldCBpY29uTGluayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJsaW5rW3JlbCo9J2ljb24nXVwiKTtcbiAgaWYgKCFpY29uTGluaykge1xuICAgIGljb25MaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpbmtcIik7XG4gICAgaWNvbkxpbmsucmVsID0gXCJpY29uXCI7XG4gICAgZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChpY29uTGluayk7XG4gIH1cbiAgaWNvbkxpbmsuaHJlZiA9IGZhdmljb25MaW5rO1xufVxuXG4vKipcbiAqIFB1cmdlIHRoZSBjb250ZW50IG9mIHRoZSBhY3RpdmUgdGFiIGluIG1haW4uXG4gKiBAcmV0dXJuIHt2b2lkfVxuICovXG5mdW5jdGlvbiBwdXJnZUFjdGl2ZVRhYigpIHtcbiAgY29uc3QgbWFpbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWFpblwiKTtcbiAgaWYgKG1haW4uY2hpbGRyZW4ubGVuZ3RoID4gMSkge1xuICAgIG1haW4ucmVtb3ZlQ2hpbGQobWFpbi5jaGlsZHJlblsxXSk7XG4gIH1cbn1cblxuLyoqXG4gKiBTd2l0Y2ggYmV0d2VlbiB0YWJzLlxuICogQHJldHVybiB7dm9pZH1cbiAqL1xuZnVuY3Rpb24gdGFiU3dpdGNoKCkge1xuICBjb25zdCBtYWluID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtYWluXCIpO1xuICBjb25zdCB0YWJzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5tYWluLW5hdmJhci1pdGVtXCIpO1xuICAvLyBEZWZhdWx0IHRhYiBpcyBIb21lXG4gIG1haW4uYXBwZW5kQ2hpbGQoY3JlYXRlSG9tZUNvbXBvbmVudCgpKTtcbiAgdGFicy5mb3JFYWNoKCh0YWIpID0+IHtcbiAgICB0YWIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgIHB1cmdlQWN0aXZlVGFiKCk7XG4gICAgICBzd2l0Y2ggKHRhYi50ZXh0Q29udGVudCkge1xuICAgICAgICBjYXNlIFwiSG9tZVwiOlxuICAgICAgICAgIG1haW4uYXBwZW5kQ2hpbGQoY3JlYXRlSG9tZUNvbXBvbmVudCgpKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBcIk1lbnVcIjpcbiAgICAgICAgICBtYWluLmFwcGVuZENoaWxkKGNyZWF0ZU1lbnVDb21wb25lbnQoKSk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgXCJDb250YWN0XCI6XG4gICAgICAgICAgbWFpbi5hcHBlbmRDaGlsZChjcmVhdGVDb250YWN0Q29tcG9uZW50KCkpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH0pO1xuICB9KTtcbn1cblxuY3JlYXRlRmF2aWNvbigpO1xucGFnZUxvYWQoKTtcbnRhYlN3aXRjaCgpO1xuIl0sIm5hbWVzIjpbImNvbnRhY3QiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJjb250YWN0QWRkcmVzcyIsImNvbnRhY3RQaG9uZSIsImNvbnRhY3RFbWFpbCIsImNvbnRhY3RIb3VycyIsImNvbnRhY3RPbW90ZW5hc2hpIiwiY2xhc3NMaXN0IiwiYWRkIiwidGV4dENvbnRlbnQiLCJhcHBlbmRDaGlsZCIsImRlY29yYXRlVGV4dCIsImhvbWUiLCJob21lVGl0bGUiLCJpbm5lckhUTUwiLCJob21lRGVzY3JpcHRpb24iLCJidXJpRGFpa29uSW1nIiwiY2FsY2lmZXJCcmVha2Zhc3RJbWciLCJnb3RjaGFQb3JrUm9hc3RJbWciLCJoYW1SYW1lbkltZyIsImZ1cmlrYWtlUmljZUltZyIsInBvcmtLYXRzdWRvbkltZyIsIm1lbnVJdGVtcyIsImJ1cmlEYWlrb24iLCJuYW1lIiwiZGVzY3JpcHRpb24iLCJpbWdQYXRoIiwiY2FsY2lmZXJCcmVha2Zhc3QiLCJnb3RjaGFQb3JrUm9hc3QiLCJoYW1SYW1lbiIsImZ1cmlrYWtlUmljZSIsInBvcmtLYXRzdWRvbiIsIm1lbnUiLCJtZW51R3JpZCIsIk9iamVjdCIsInZhbHVlcyIsImZvckVhY2giLCJ2YWx1ZSIsIm1lbnVJdGVtIiwibWVudUl0ZW1UaXRsZSIsIm1lbnVJdGVtSW1nIiwibWVudUl0ZW1EZXNjcmlwdGlvbiIsInNyYyIsImFsdCIsImhlYWRlciIsImhlYWRlckNvbnRhaW5lciIsImhlYWRlclRpdGxlIiwibWFpbiIsIm1haW5OYXZiYXIiLCJtYWluTmF2YmFySXRlbXMiLCJpZCIsIml0ZW0iLCJtYWluTmF2YmFySXRlbSIsImZvb3RlciIsImZvb3RlclRleHQiLCJmb290ZXJMaW5rIiwiZm9vdGVySWNvbiIsIkRhdGUiLCJnZXRGdWxsWWVhciIsImhyZWYiLCJ0YXJnZXQiLCJyZWwiLCJwYWdlTG9hZCIsImNvbnRlbnQiLCJnZXRFbGVtZW50QnlJZCIsInRleHQiLCJ3cmFwcGVyIiwidGV4dEFycmF5Iiwic3BsaXQiLCJpIiwiY2hhciIsInNwYW4iLCJjcmVhdGVNZW51Q29tcG9uZW50IiwiY3JlYXRlSG9tZUNvbXBvbmVudCIsImNyZWF0ZUNvbnRhY3RDb21wb25lbnQiLCJmYXZpY29uTGluayIsImNyZWF0ZUZhdmljb24iLCJpY29uTGluayIsInF1ZXJ5U2VsZWN0b3IiLCJoZWFkIiwicHVyZ2VBY3RpdmVUYWIiLCJjaGlsZHJlbiIsImxlbmd0aCIsInJlbW92ZUNoaWxkIiwidGFiU3dpdGNoIiwidGFicyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJ0YWIiLCJhZGRFdmVudExpc3RlbmVyIl0sInNvdXJjZVJvb3QiOiIifQ==