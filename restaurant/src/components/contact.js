/**
 * @fileoverview Contact tab module
 * @author Thinh Nguyen
 * @version 1.0.0
 */

"use strict";

/**
 * Create the contact component.
 * @return {HTMLElement} Contact component
 */
export default function contact() {
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
