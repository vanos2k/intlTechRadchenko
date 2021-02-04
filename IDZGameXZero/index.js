const cells = document.querySelectorAll('.cell');
const currentTurnEl = document.querySelector('[data-turn]');
const currentPlayerEl = document.querySelector('[data-player]');
const resetButton = document.querySelector('#reset');
const victoryList = document.querySelector('#victoryList');
const gamesEl = document.querySelector('[data-games]');

function isVictory() {
  let combs = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let comb of combs) {
    if (
      cells[comb[0]].innerHTML == cells[comb[1]].innerHTML &&
      cells[comb[1]].innerHTML == cells[comb[2]].innerHTML &&
      cells[comb[0]].innerHTML != ''
    ) {
      return true;
    }
  }

  return false;
}

function resetGame() {
  gamesEl.dataset.games = +gamesEl.dataset.games + 1;
  gamesEl.innerText = `Games ${gamesEl.dataset.games}`;

  currentPlayerEl.dataset.player = 0;
  currentPlayerEl.innerHTML  = `Player 0`;

  currentTurnEl.innerHTML  = `Current turn = 0`;
  currentTurnEl.dataset.turn = 0;

  cells.forEach((cell) => {
    cell.dataset.selected = 0;
    cell.innerText = '';
  })
}

cells.forEach((cell) => {
  cell.addEventListener('click', (event) => {
      if (!+event.target.dataset.selected) {

        event.target.dataset.selected = 1;
        event.target.innerText = currentPlayerEl.dataset.player;

        if (isVictory()) {
          victoryList.append(
            `Player ${currentPlayerEl.dataset.player} win in ${currentTurnEl.dataset.turn} turn`,
            document.createElement('p')
          );
          resetGame();
          return;
        }

        const nextPlayer = currentPlayerEl.dataset.player === '0' ? 'X' : '0';

        currentPlayerEl.dataset.player = nextPlayer;
        currentPlayerEl.innerHTML  = `Player ${nextPlayer}`;

        const nextTurn = +currentTurnEl.dataset.turn + 1;

        currentTurnEl.innerHTML  = `Current turn = ${nextTurn}`;
        currentTurnEl.dataset.turn = nextTurn;
      }
  });
});


resetButton.addEventListener('click', resetGame);


