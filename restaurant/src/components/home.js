/**
 * @fileoverview Home tab module
 * @author Thinh Nguyen
 * @version 1.0.0
 */

"use strict";

import { decorateText } from "./typography";

/**
 * Create the home component.
 * @return {HTMLElement} Home component
 * @export
 */
export default function home() {
  const home = document.createElement("div");
  home.classList.add("main-home");
  const homeTitle = document.createElement("h2");
  homeTitle.classList.add("main-home-title");
  homeTitle.innerHTML = decorateText("Welcome to Benny's").innerHTML;
  home.appendChild(homeTitle);
  const homeDescription = document.createElement("p");
  homeDescription.classList.add("main-home-description");
  homeDescription.textContent =
    "A one-of-a-kind restaurant that brings the delectable flavors of your favorite animes to your plate. Situated in the bustling heart of Tokyo, Benny's is a culinary oasis that offers an eclectic menu of dishes inspired by various animes. From Howl Moving Castle's famous Calcifer's breakfast to the mouth-watering Gotcha Pork Roast from Shokugeki no Shouma, our chefs have painstakingly recreated the authentic flavors of these beloved shows. We pride ourselves on using only the freshest, high-quality ingredients to create each dish, and our menu is thoughtfully curated to cater to all dietary requirements. Our cozy and vibrant atmosphere provides the perfect setting to savor our delicious food with friends and family. Come and experience the magic of anime-inspired cuisine at Benny's.";
  home.appendChild(homeDescription);
  return home;
}
