// Data Structures
const myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.info = function info() {
    return `${title} by ${author}, ${pages} pages, ${read}`;
  };
}

function toggleRead(book) {
  const tempBook = book;
  tempBook.read = !tempBook.read;
}

// User Interface
const addBookBtn = document.getElementById("main-addBookBtn");
const addBookForm = document.getElementById("modal-addBookForm");
const modalOverlay = document.getElementById("modal-overlay");
const modal = document.getElementById("modal");
const errorMsg = document.getElementById("modal-errorMsg");

function activateBookModal() {
  addBookForm.reset();
  modal.classList.add("active");
  modalOverlay.classList.add("active");
}

function closeBookModal() {
  modal.classList.remove("active");
  modalOverlay.classList.remove("active");
  errorMsg.classList.remove("active");
}

addBookBtn.addEventListener("click", activateBookModal);

modalOverlay.addEventListener("click", closeBookModal);

function isInLibrary(book) {
  return myLibrary.some(
    (b) => b.title === book.title && b.author === book.author
  );
}

function getBookFromInput() {
  const title = document.getElementById("title").value;
  const author = document.getElementById("author").value;
  const pages = document.getElementById("pages").value;
  const read = document.getElementById("isRead").checked;
  return new Book(title, author, pages, read);
}

function displayBooks() {
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
}

function addBook(e) {
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
}

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
