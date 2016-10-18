var Player = function(name) {
  this.name = name;
  this.moves = {};
}

// first click is player 1
var player1 = new Player('player1');
// second click is player 2
var player2 = new Player('player2');

$(document).ready(function() {
  var movesPlayed = 0;
  var currentPlayer;
  var currentMarker;



  // need click handler
  $('.cell').on('click', function(e) {
    // need turns
    if (movesPlayed % 2 === 0) {
      currentPlayer = player1;
      currentMarker = 'x';
    } else {
      currentPlayer = player2;
      currentMarker = 'o';
    }

    // TODO: assign the current marker to the cell

    var node = e.target;
    var className = node.className;
    var row = className.split(' ')[1];
    var col = className.split(' ')[2];
    console.log(row, col);

    // can also store game moves in user objects
    currentPlayer.moves[row + ',' + col] = true;

    // when you win, announce winner
    if (checkIfWinner(currentPlayer)) {
      alert(currentPlayer.name + ' has won the game!');
    }

    moves++; // increment moves to switch player
  })
});

function checkIfWinner(player) {
  var moves = player.moves;
  Object.keys(moves).forEach(function(move) {
    // TODO: do some logic here to check if moves string horizontally, vertically or diagonally
  })
}
