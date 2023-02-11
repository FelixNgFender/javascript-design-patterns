// Data Structures

const gameBoard = (() => {
  const board = ["X", "X", "O", "", "O", "X", "", "", ""];
  const getBoard = () => board;
  const setBoard = (index, value) => {
    board[index] = value;
  };
  return { getBoard, setBoard };
})();

const displayController = (() => {
  const gameBoardDiv = document.getElementById("gameBoard");
  const currentBoard = gameBoard.getBoard();
  const renderBoard = () => {
    currentBoard.forEach((cell, index) => {
      const cellBtn = document.createElement("button");
      cellBtn.classList.add("playArea-boardCell");
      cellBtn.setAttribute("data-index", index);
      cellBtn.textContent = cell;
      gameBoardDiv.appendChild(cellBtn);
    });
  };
  return { renderBoard };
})();

displayController.renderBoard();

const player = (name, symbol) => {
  const getName = () => name;
  const getSymbol = () => symbol;
  return { getName, getSymbol };
};

const playerX = player("Player X", "X");
const playerO = player("Player O", "O");

// User Interface



// Utils
