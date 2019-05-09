var Game = {
  canvas: undefined,
  ctx: undefined,
  fps: 60,
  score: undefined,
  gridWidth: 70,
  gridHeight: 70,

  init: function(canvasId) {
    this.canvas = document.getElementById(canvasId);
    this.ctx = this.canvas.getContext("2d");
    this.start();
  },
  start: function() {
    this.reset();
    this.interval = setInterval(() => {
      this.clear();
      this.framesCounter++;

      if (this.framesCounter > 1000) {
        this.framesCounter = 0;
      }
      this.drawall();
    }, 1000 / this.fps);
  },
  reset: function() {
    this.grid = new Grid(
      this.framesCounter,
      this.gridWidth,
      this.gridHeight,
      this.ctx
    );
    this.framesCounter = 0;
  },
  clear: function() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
  },
  drawall: function() {
    this.grid.draw(this.framesCounter);
  }
};
