// Data Structures
const gameBoard = (() => {
  const board = ["", "", "", "", "", "", "", "", ""];
  const getBoard = () => board;
  const setBoard = (index, value) => {
    board[index] = value;
  };
  const resetBoard = () => {
    for (let i = 0; i < 9; i++) {
      board[i] = "";
    }
    result = "";
  };
  return { getBoard, setBoard, resetBoard };
})();

const getWinner = (board) => {
  const winningConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < winningConditions.length; i++) {
    const [a, b, c] = winningConditions[i];
    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      return board[a];
    }
  }
  if (board.every((cell) => cell !== "")) {
    return "tie";
  }
  return undefined;
};

const player = (name, symbol) => {
  const getName = () => name;
  const getSymbol = () => symbol;
  return { getName, getSymbol };
};

// Utils
const displayWinner = (winner) => {
  if (winner === undefined) return;
  const resultModal = document.getElementById("resultModal");
  if (winner === "tie") {
    resultModal.textContent = "It's a tie. Click to restart";
  }
  if (winner === human.getSymbol()) {
    resultModal.textContent = "A humble victory. Click to restart";
  }
  if (winner === computer.getSymbol()) {
    resultModal.textContent = "You really lost? Anyway, click to restart";
  }
  resultModal.classList.add("active");
  resultModal.addEventListener("click", () => {
    restartGame();
    resultModal.classList.remove("active");
    resultModal.textContent = "";
  });
};

const displayController = (() => {
  const gameBoardDiv = document.getElementById("gameBoard");
  const renderBoard = () => {
    const currentBoard = gameBoard.getBoard();
    gameBoardDiv.innerHTML = "";
    currentBoard.forEach((cell, index) => {
      const cellBtn = document.createElement("button");
      cellBtn.classList.add("playArea-boardCell");
      cellBtn.id = `boardCell`;
      cellBtn.setAttribute("data-index", index);
      cellBtn.textContent = cell;
      cellBtn.addEventListener("click", (e) => {
        if (cell !== "" || currentTurn === computer) return;
        const index = e.target.dataset.index;
        gameBoard.setBoard(index, human.getSymbol());
        const winner = getWinner(gameBoard.getBoard());
        if (winner !== undefined) {
          displayWinner(winner);
          displayController.renderBoard();
          return;
        }
        displayController.renderBoard();
        currentTurn = computer;
      });
      gameBoardDiv.appendChild(cellBtn);
    });
  };
  return { renderBoard };
})();

displayController.renderBoard();

// User Interface
const restartBtn = document.getElementById("restartBtn");
const XMarkerBtn = document.getElementById("playerXBtn");
const OMarkerBtn = document.getElementById("playerOBtn");

let human = player("Human", "X");
let computer = player("Computer", "O");
let currentTurn = human;

const restartGame = () => {
  gameBoard.resetBoard();
  human = player("Human", "X");
  computer = player("Computer", "O");
  currentTurn = human;
  displayController.renderBoard();
};

restartBtn.addEventListener("click", restartGame);

XMarkerBtn.addEventListener("click", () => {
  restartGame();
  XMarkerBtn.classList.add("selected");
  OMarkerBtn.classList.remove("selected");
  human = player("Human", "X");
  computer = player("Computer", "O");
  currentTurn = human;
});

OMarkerBtn.addEventListener("click", () => {
  restartGame();
  OMarkerBtn.classList.add("selected");
  XMarkerBtn.classList.remove("selected");
  human = player("Human", "O");
  computer = player("Computer", "X");
  currentTurn = computer;
});

const gameLoop = () => {
  if (currentTurn === computer) {
    const index = computerPlay();
    gameBoard.setBoard(index, computer.getSymbol());
    const winner = getWinner(gameBoard.getBoard());
    if (winner !== undefined) {
      displayWinner(winner);
      displayController.renderBoard();
      return;
    }
    displayController.renderBoard();
    currentTurn = human;
  }
};

const computerPlay = () => {
  const currentBoard = gameBoard.getBoard();
  const availableMoves = currentBoard
    .map((cell, index) => {
      if (cell === "") return index;
    })
    .filter((cell) => cell !== undefined);
  const randomIndex = Math.floor(Math.random() * availableMoves.length);
  return availableMoves[randomIndex];
};

const game = () => {
  setInterval(gameLoop, 1000);
};

game();
