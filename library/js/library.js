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

// User Interface
const addBookBtn = document.getElementById("main-addBookBtn");
const addBookForm = document.getElementById("modal-addBookForm");
const modalOverlay = document.getElementById("modal-overlay");
const modal = document.getElementById("modal");

function activateBookModal() {
  modal.classList.add("active");
  modalOverlay.classList.add("active");
}

function closeAllModals() {
  modal.classList.remove("active");
  modalOverlay.classList.remove("active");
  addBookForm.reset();
}

addBookBtn.addEventListener("click", activateBookModal);

modalOverlay.addEventListener("click", closeAllModals);

function getBookFromInput() {
  const title = document.getElementById("title").value;
  const author = document.getElementById("author").value;
  const pages = document.getElementById("pages").value;
  const read = document.getElementById("isRead").checked;
  return new Book(title, author, pages, read);
}

function isInLibrary(book) {
  return myLibrary.some(
    (b) => b.title === book.title && b.author === book.author
  );
}

function displayLatestBook() {
  const bookGrid = document.getElementById("main-bookGrid");
  const book = myLibrary[myLibrary.length - 1];
  const bookCard = document.createElement("div");
  bookCard.classList.add("main-bookCard");
  bookCard.innerHTML = `
    <p>"${book.title}"</p>
    <p>${book.author}</p>
    <p>${book.pages} pages</p>
    <div class="main-bookCardBtnGroup">
      <button class="main-bookCardBtn">${
        book.read ? "Read" : "Not Read"
      }</button>
      <button class="main-bookCardBtn">Remove</button>
    </div>
  `;
  bookGrid.appendChild(bookCard);
}

function addBook(e) {
  e.preventDefault();
  const newBook = getBookFromInput();
  if (isInLibrary(newBook)) {
    return;
  }
  myLibrary.push(newBook);
  displayLatestBook();
  closeAllModals();
  addBookForm.reset();
}

addBookForm.onsubmit = addBook;

// Local Storage

// Authentication

// Firestore

// Utils
