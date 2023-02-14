/**
 * @fileoverview Library app
 * @author Thinh Nguyen
 * @version 1.5.0
 */

"use strict";

// Data Structures
const myLibrary = [];

/** Class for Book object */
class Book {
  /**
   * Create a book object.
   * @param {string} title - The title of the book.
   * @param {string} author - The author of the book.
   * @param {number} pages - The number of pages in the book.
   * @param {boolean} read - Whether the book has been read.
   */
  constructor(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
  }

  /**
   * Get the book info.
   * @return {string} The book info.
   */
  info() {
    return `${this.title} by ${this.author}, ${this.pages} pages, ${this.read}`;
  }
}

// Refactor to arrow functions

const toggleRead = (book) => {
  const tempBook = book;
  tempBook.read = !tempBook.read;
};

// User Interface
const addBookBtn = document.getElementById("main-addBookBtn");
const addBookForm = document.getElementById("modal-addBookForm");
const modalOverlay = document.getElementById("modal-overlay");
const modal = document.getElementById("modal");
const errorMsg = document.getElementById("modal-errorMsg");

const activateBookModal = () => {
  addBookForm.reset();
  modal.classList.add("active");
  modalOverlay.classList.add("active");
};

const closeBookModal = () => {
  modal.classList.remove("active");
  modalOverlay.classList.remove("active");
  errorMsg.classList.remove("active");
};

addBookBtn.addEventListener("click", activateBookModal);

modalOverlay.addEventListener("click", closeBookModal);

const isInLibrary = (book) => {
  return myLibrary.some(
    (b) => b.title === book.title && b.author === book.author
  );
};

const getBookFromInput = () => {
  const title = document.getElementById("title").value;
  const author = document.getElementById("author").value;
  const pages = document.getElementById("pages").value;
  const read = document.getElementById("isRead").checked;
  return new Book(title, author, pages, read);
};

const displayBooks = () => {
  const bookGrid = document.getElementById("main-bookGrid");
  bookGrid.innerHTML = "";
  if (myLibrary.length !== 0) {
    myLibrary.forEach((book, index) => {
      const bookCard = document.createElement("div");
      const bookCardBtnGroup = document.createElement("div");
      const readBtn = document.createElement("button");
      const removeBtn = document.createElement("button");
      bookCard.classList.add("main-bookCard");
      bookCardBtnGroup.classList.add("main-bookCardBtnGroup");
      readBtn.classList.add("main-bookCardBtn");
      removeBtn.classList.add("main-bookCardBtn");
      bookCard.setAttribute("data-index", index);
      bookCard.innerHTML = `
      <p>"${book.title}"</p>
      <p>${book.author}</p>
      <p>${book.pages} pages</p>
      `;
      readBtn.innerHTML = book.read ? "Read" : "Not Read";
      removeBtn.innerHTML = "Remove";
      readBtn.addEventListener("click", () => {
        toggleRead(book);
        displayBooks();
      });
      removeBtn.addEventListener("click", () => {
        myLibrary.splice(index, 1);
        displayBooks();
      });
      bookCardBtnGroup.appendChild(readBtn);
      bookCardBtnGroup.appendChild(removeBtn);
      bookCard.appendChild(bookCardBtnGroup);
      bookGrid.appendChild(bookCard);
    });
  }
};

const addBook = (e) => {
  e.preventDefault();
  const newBook = getBookFromInput();
  if (isInLibrary(newBook)) {
    errorMsg.classList.add("active");
    return;
  }
  myLibrary.push(newBook);
  displayBooks();
  closeBookModal();
  addBookForm.reset();
};

addBookForm.onsubmit = addBook;

window.onkeydown = (e) => {
  if (e.key === "Escape") {
    closeBookModal();
  }
};

// Local Storage

// Authentication

// Firestore

// Utils
