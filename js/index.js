window.onload = function() {
  document.getElementById("start-button").onclick = function() {
    startGame();
  };

  function startGame() {
    document.getElementById("game-intro").className = "display";
    Game.init("canvas");
  }
};
