// Data Structures
const myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.info = function () {
    return `${title} by ${author}, ${pages} pages, ${read}`;
  };
}

function addBookToLibrary(book) {
  myLibrary.push(book);
}

function displayBooks() {
  const bookList = document.querySelector("#book-list");
}

// User Interface
const addBookBtn = document.querySelector("#main-addBookBtn");
const modalOverlay = document.querySelector("#modal-overlay");
const modal = document.querySelector("#modal");
addBookBtn.addEventListener("click", () => {
  modal.classList.add("active");
  modalOverlay.classList.add("active");
});

modalOverlay.addEventListener("click", () => {
  modal.classList.remove("active");
  modalOverlay.classList.remove("active");
});

// Local Storage

// Authentication

// Firestore

// Utils