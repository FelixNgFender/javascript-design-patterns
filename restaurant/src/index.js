/**
 * @fileoverview Restaurant app
 * @author Thinh Nguyen
 * @version 1.0.0
 */

"use strict";
import pageLoad from "./pageLoad";
import createMenuComponent from "./menu";
import createHomeComponent from "./home";
import createContactComponent from "./contact";

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
  main.appendChild(createHomeComponent());
  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      purgeActiveTab();
      switch (tab.textContent) {
        case "Home":
          main.appendChild(createHomeComponent());
          break;
        case "Menu":
          main.appendChild(createMenuComponent());
          break;
        case "Contact":
          main.appendChild(createContactComponent());
          break;
      }
    });
  });
}

pageLoad();
tabSwitch();
