/**
 * @fileoverview Typography module
 * @author Thinh Nguyen
 * @version 1.0.0
 */

"use strict";

/**
 * Decorate text to alternate between main and accent color by placing each character in a span and sets a class to it.
 * @param {string} text - Text to decorate
 * @export
 * @return {HTMLElement} - A wrapper div containing the spans containing the characters.
 */
export function decorateText(text) {
  const wrapper = document.createElement("div");
  const textArray = text.split("");
  let i = 0;
  textArray.forEach((char) => {
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
