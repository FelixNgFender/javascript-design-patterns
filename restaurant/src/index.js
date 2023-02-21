/**
 * @fileoverview Restaurant app
 * @author Thinh Nguyen
 * @version 1.0.0
 */

"use strict";
import "./styles/styles-reset.css";
import "./styles/styles.css";

import pageLoad from "./components/pageLoad";
import createMenuComponent from "./components/menu/menu";
import createHomeComponent from "./components/home";
import createContactComponent from "./components/contact";
import faviconLink from "./assets/favicon.png";

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
  iconLink.href = faviconLink;
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

createFavicon();
pageLoad();
tabSwitch();
