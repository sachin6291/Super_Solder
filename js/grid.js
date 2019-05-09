//create an array of 2 dimention that represents a map 15 x 10

class Grid {
  constructor(width, height, ctx) {
    this.width = width;
    this.height = height;
    this.ctx = ctx;
    this.img = new Image();
    this.img.src = "images/tile_grass.png";
    this.arrMap = [];
    this.solder = new Solder(this.ctx, 4, 3);
    this.solderBlue = new SolderBlue(this.ctx, 5, 7);
    for (let i = 0; i < 10; i++) {
      this.arrMap.push([]);
      for (let j = 0; j < 15; j++) {
        this.arrMap[i].push(0);
      }
    }

    this.moveGrass();
    this.moveSolder();
    this.moveBlueSolder();
    this.posX = 0;
    this.posY = 0;
    this.setListeners();
  }

  draw(fr) {
    this.posX = 0;
    this.posY = 0;

    for (let i = 0; i < this.arrMap.length; i++) {
      for (let j = 0; j < this.arrMap[i].length; j++) {
        if (this.arrMap[i][j] === 0) {
          //draw grass
          this.ctx.drawImage(
            this.img,
            this.posX,
            this.posY,
            this.width,
            this.height
          );
        } else if (this.arrMap[i][j] === 1) {
          //Draw Solder A for attack & M for move & I for idle
          this.solder.drawM(fr, this.posX, this.posY);
        } else if (this.arrMap[i][j] === 11) {
          //Draw Blue Solder A for attack & M for move & I for idle
          this.solderBlue.drawBlueMove(fr, this.posX, this.posY);
        }
        (this.posX += this.width) * j;
      }
      this.posX = 0;
      (this.posY += this.height) * i;
    }
  }

  setListeners() {
    //40 abajo, 38 arriba, 37 izquierda, 39 derecha, 32 space
    document.onkeydown = event => {
      if (event.keyCode == 32) {
        this.solder.playerSwich();
      }
      if (this.solder.moveCounter > 0) {
        if (event.keyCode == 40) {
          if (this.solder.currentPlayer == "red") {
            if (
              this.solder.gridY < this.arrMap.length - 1 &&
              this.arrMap[this.solder.gridY + 1][this.solder.gridX] == 0
            ) {
              this.moveGrass();
              this.solder.gridY += 1;
              this.recurentListener();
            }
          } else if (this.solder.currentPlayer == "blue") {
            if (
              this.solderBlue.gridY < this.arrMap.length - 1 &&
              this.arrMap[this.solderBlue.gridY + 1][this.solderBlue.gridX] == 0
            ) {
              this.moveGrass();
              this.solderBlue.gridY += 1;
              this.recurentListener();
            }
          }
        } else if (event.keyCode === 39) {
          if (this.solder.currentPlayer == "red") {
            if (
              this.solder.gridX < this.arrMap[0].length - 1 && //<-- añadido para prohibir que pise
              this.arrMap[this.solder.gridY][this.solder.gridX + 1] == 0 //<--sobre el soldado enemigo
            ) {
              this.moveGrass();
              this.solder.gridX += 1;
              this.recurentListener();
            }
          } else if (this.solder.currentPlayer == "blue") {
            if (
              this.solderBlue.gridX < this.arrMap[0].length - 1 &&
              this.arrMap[this.solderBlue.gridY][this.solderBlue.gridX + 1] == 0
            ) {
              this.moveGrass();
              this.solderBlue.gridX += 1;
              this.recurentListener();
            }
          }
        } else if (event.keyCode === 37) {
          if (this.solder.currentPlayer == "red") {
            if (
              this.solder.gridX > 0 &&
              this.arrMap[this.solder.gridY][this.solder.gridX - 1] == 0
            ) {
              this.moveGrass();
              this.solder.gridX -= 1;
              this.recurentListener();
            }
          } else if (this.solder.currentPlayer == "blue") {
            if (
              this.solderBlue.gridX > 0 &&
              this.arrMap[this.solderBlue.gridY][this.solderBlue.gridX - 1] == 0
            ) {
              this.moveGrass();
              this.solderBlue.gridX -= 1;
              this.recurentListener();
            }
          }
        } else if (event.keyCode === 38) {
          if (this.solder.currentPlayer == "red") {
            if (
              this.solder.gridY > 0 &&
              this.arrMap[this.solder.gridY - 1][this.solder.gridX] == 0
            ) {
              this.moveGrass();
              this.solder.gridY -= 1;
              this.recurentListener();
            }
          } else if (this.solder.currentPlayer == "blue") {
            if (
              this.solderBlue.gridY > 0 &&
              this.arrMap[this.solderBlue.gridY - 1][this.solderBlue.gridX] == 0
            ) {
              this.moveGrass();
              this.solderBlue.gridY -= 1;
              this.recurentListener();
            }
          }
        }
      }
    };
  }
  moveSolder() {
    this.arrMap[this.solder.gridY][this.solder.gridX] = 1;
  }
  moveBlueSolder() {
    this.arrMap[this.solderBlue.gridY][this.solderBlue.gridX] = 11;
  }
  moveGrass() {
    if (this.solder.currentPlayer == "red") {
      this.arrMap[this.solder.gridY][this.solder.gridX] = 0;
    } else if (this.solder.currentPlayer == "blue") {
      this.arrMap[this.solderBlue.gridY][this.solderBlue.gridX] = 0;
    }
  }
  recurentListener() {
    console.log(this.solder.currentPlayer);
    if (this.solder.currentPlayer == "red") {
      this.moveSolder();
    } else if (this.solder.currentPlayer == "blue") {
      this.moveBlueSolder();
    }
    this.draw();
    this.solder.moveCounter--;
  }
}
