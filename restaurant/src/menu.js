/**
 * @fileoverview Menu tab module
 * @author Thinh Nguyen
 * @version 1.0.0
 */

"use strict";

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
export default function menu() {
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
