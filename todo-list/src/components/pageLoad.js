/**
 * @fileoverview Initialize page load
 * @author Thinh Nguyen
 * @version 1.0.0
 */

"use strict";

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
  headerTitle.textContent = "StackTasks";
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
  const mainNavbarItems = ["Pending", "Archive"];
  main.classList.add("main");
  main.id = "main";
  mainNavbar.classList.add("main-navbar");
  mainNavbarItems.forEach((item) => {
    const mainNavbarLabel = document.createElement("label");
    const mainNavbarItem = document.createElement("input");
    mainNavbarLabel.classList.add("main-navbar-itemLabel");
    mainNavbarItem.classList.add("main-navbar-item");
    mainNavbarLabel.textContent = item;
    mainNavbarLabel.htmlFor = "main-navbar-" + item.toLowerCase();
    mainNavbarItem.type = "radio";
    mainNavbarItem.name = "main-navbar";
    mainNavbarItem.value = item.toLowerCase();
    mainNavbarItem.id = "main-navbar-" + item.toLowerCase();
    mainNavbarItem.checked = item === "Pending";
    mainNavbar.appendChild(mainNavbarItem);
    mainNavbar.appendChild(mainNavbarLabel);
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
export default function pageLoad() {
  const content = document.getElementById("content");
  content.appendChild(header());
  content.appendChild(main());
  content.appendChild(footer());
}
