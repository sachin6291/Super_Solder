//create an array of 2 dimention that represents a map 15 x 10

class Grid {
  constructor(frameCounter, width, height, ctx) {
    this.frameCounter = frameCounter;
    this.width = width;
    this.height = height;
    this.ctx = ctx;
    this.img = new Image();
    this.img.src = "images/tile_grass.png";
    this.arrMap = [];
    this.solder = [
      new Solder(this.ctx, 0, 0),
      new Solder(this.ctx, 0, 1),
      new Solder(this.ctx, 0, 2),
      new Solder(this.ctx, 0, 3),
      new Solder(this.ctx, 0, 4),
      new Solder(this.ctx, 0, 5),
      new Solder(this.ctx, 0, 6),
      new Solder(this.ctx, 0, 7),
      new Solder(this.ctx, 0, 8),
      new Solder(this.ctx, 0, 9)
    ];
    this.solderBlue = [
      new SolderBlue(this.ctx, 14, 0),
      new SolderBlue(this.ctx, 14, 1),
      new SolderBlue(this.ctx, 14, 2),
      new SolderBlue(this.ctx, 14, 3),
      new SolderBlue(this.ctx, 14, 4),
      new SolderBlue(this.ctx, 14, 5),
      new SolderBlue(this.ctx, 14, 6),
      new SolderBlue(this.ctx, 14, 7),
      new SolderBlue(this.ctx, 14, 8),
      new SolderBlue(this.ctx, 14, 9)
    ];
    this.turn = "red";
    this.solderCheckRed = { moveCounter: 0 };
    this.solderCheckBlue = { moveCounter: 0 };

    for (let i = 0; i < 10; i++) {
      this.arrMap.push([]);
      for (let j = 0; j < 15; j++) {
        this.arrMap[i].push(0);
      }
    }
    this.showSolder();
    this.solderSelect();
    // this.moveRedGrass();
    // this.moveBlueGrass();
    //this.moveSolder();
    // this.moveBlueSolder();
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
        } else if (this.arrMap[i][j][0] === 1) {
          //Draw Solder A for attack & M for move & I for idle
          this.arrMap[i][j][1].drawM(fr, this.posX, this.posY);
        } else if (this.arrMap[i][j][0] === 11) {
          //Draw Blue Solder A for attack & M for move & I for idle
          this.arrMap[i][j][1].drawBlueMove(fr, this.posX, this.posY);
        }
        (this.posX += this.width) * j;
      }

      this.posX = 0;
      (this.posY += this.height) * i;
    }
  }

  setListeners() {
    //set key action for: 40 up , 38 down, 37 left, 39 right, 32 space, 49 one,
    //50 two, 51 three, 52 four, 53 five, 54 six, 55 seven, 56 eight, 57 nine, 48 zero
    document.onkeydown = event => {
      if (event.keyCode == 32) {
        this.playerSwich();
      }
      if (event.keyCode === 49) {
        if (this.turn == "red") {
          this.solderCheckRed = this.solder[0];
        } else {
          this.solderCheckBlue = this.solderBlue[0];
        }
      }
      if (event.keyCode === 50) {
        if (this.turn == "red") {
          this.solderCheckRed = this.solder[1];
        } else {
          this.solderCheckBlue = this.solderBlue[1];
        }
      }
      if (event.keyCode === 51) {
        if (this.turn == "red") {
          this.solderCheckRed = this.solder[2];
        } else {
          this.solderCheckBlue = this.solderBlue[2];
        }
      }
      if (event.keyCode === 52) {
        if (this.turn == "red") {
          this.solderCheckRed = this.solder[3];
        } else {
          this.solderCheckBlue = this.solderBlue[3];
        }
      }
      if (event.keyCode === 53) {
        if (this.turn == "red") {
          this.solderCheckRed = this.solder[4];
        } else {
          this.solderCheckBlue = this.solderBlue[4];
        }
      }
      if (event.keyCode === 54) {
        if (this.turn == "red") {
          this.solderCheckRed = this.solder[5];
        } else {
          this.solderCheckBlue = this.solderBlue[5];
        }
      }
      if (event.keyCode === 55) {
        if (this.turn == "red") {
          this.solderCheckRed = this.solder[6];
        } else {
          this.solderCheckBlue = this.solderBlue[6];
        }
      }
      if (event.keyCode === 56) {
        if (this.turn == "red") {
          this.solderCheckRed = this.solder[7];
        } else {
          this.solderCheckBlue = this.solderBlue[7];
        }
      }
      if (event.keyCode === 57) {
        if (this.turn == "red") {
          this.solderCheckRed = this.solder[8];
        } else {
          this.solderCheckBlue = this.solderBlue[8];
        }
      }
      if (event.keyCode === 48) {
        if (this.turn == "red") {
          this.solderCheckRed = this.solder[9];
        } else {
          this.solderCheckBlue = this.solderBlue[9];
        }
      }
      if (
        this.solderCheckRed.moveCounter > 0 ||
        this.solderCheckBlue.moveCounter > 0
      ) {
        if (event.keyCode === 40) {
          if (this.turn == "red") {
            if (
              this.solderCheckRed.gridY < this.arrMap.length - 1 &&
              this.downPositionRed() == 0
            ) {
              this.moveRedGrass();
              this.solderCheckRed.gridY += 1;
              this.recurentListener();
            } else if (this.downPositionRed()[0] == 11) {
              this.deadBlueSolderDown();
            }
          } else if (this.turn == "blue") {
            if (
              this.solderCheckBlue.gridY < this.arrMap.length - 1 &&
              this.downPositionBlue() == 0
            ) {
              this.moveBlueGrass();
              this.solderCheckBlue.gridY += 1;
              this.recurentListener();
            } else if (this.downPositionBlue()[0] == 1) {
              this.deadRedSolderDown();
            }
          }
        } else if (event.keyCode === 39) {
          if (this.turn == "red") {
            if (
              this.solderCheckRed.gridX < this.arrMap[0].length - 1 &&
              this.rightPositionRed() == 0
            ) {
              this.moveRedGrass();
              this.solderCheckRed.gridX += 1;
              this.recurentListener();
            } else if (this.rightPositionRed()[0] == 11) {
              console.log("muere rojo de derecha");
              this.deadBlueSolderRight();
            }
          } else if (this.turn == "blue") {
            if (
              this.solderCheckBlue.gridX < this.arrMap[0].length - 1 &&
              this.arrMap[this.solderCheckBlue.gridY][
                this.solderCheckBlue.gridX + 1
              ] == 0
            ) {
              this.moveBlueGrass();
              this.solderCheckBlue.gridX += 1;
              this.recurentListener();
            } else if (
              this.arrMap[this.solderCheckBlue.gridY][
                this.solderCheckBlue.gridX + 1
              ][0] == 1
            ) {
              this.deadRedSolderRight();
            }
          }
        } else if (event.keyCode === 37) {
          if (this.turn == "red") {
            if (
              this.solderCheckRed.gridX > 0 &&
              this.arrMap[this.solderCheckRed.gridY][
                this.solderCheckRed.gridX - 1
              ] == 0
            ) {
              this.moveRedGrass();
              this.solderCheckRed.gridX -= 1;
              this.recurentListener();
            } else if (
              this.arrMap[this.solderCheckRed.gridY][
                this.solderCheckRed.gridX - 1
              ][0] == 11
            ) {
              this.deadBlueSolderLeft();
              // this.moveBlueGrass();
            }
          } else if (this.turn == "blue") {
            if (
              this.solderCheckBlue.gridX > 0 &&
              this.arrMap[this.solderCheckBlue.gridY][
                this.solderCheckBlue.gridX - 1
              ] == 0
            ) {
              this.moveBlueGrass();
              this.solderCheckBlue.gridX -= 1;
              this.recurentListener();
            } else if (
              this.arrMap[this.solderCheckBlue.gridY][
                this.solderCheckBlue.gridX - 1
              ][0] == 1
            ) {
              this.deadRedSolderLeft();
            }
          }
        } else if (event.keyCode === 38) {
          console.log("hola 38");
          if (this.turn == "red") {
            if (
              this.solderCheckRed.gridY > 0 &&
              this.arrMap[this.solderCheckRed.gridY - 1][
                this.solderCheckRed.gridX
              ] == 0
            ) {
              this.moveRedGrass();
              this.solderCheckRed.gridY -= 1;
              this.recurentListener();
            } else if (
              this.arrMap[this.solderCheckRed.gridY - 1][
                this.solderCheckRed.gridX
              ][0] == 11
            ) {
              this.deadBlueSolderUp();
              // this.moveBlueGrass();
            }
          } else if (this.turn == "blue") {
            if (
              this.solderCheckBlue.gridY > 0 &&
              this.arrMap[this.solderCheckBlue.gridY - 1][
                this.solderCheckBlue.gridX
              ] == 0
            ) {
              this.moveBlueGrass();
              this.solderCheckBlue.gridY -= 1;
              this.recurentListener();
            } else if (
              this.arrMap[this.solderCheckBlue.gridY - 1][
                this.solderCheckBlue.gridX
              ][0] == 1
            ) {
              this.deadRedSolderRight();
            }
          }
        }
      }
    };
  }
  moveSolder() {
    this.arrMap[this.solderCheckRed.gridY][this.solderCheckRed.gridX] = [
      1,
      this.solderCheckRed
    ];
  }
  moveBlueSolder() {
    this.arrMap[this.solderCheckBlue.gridY][this.solderCheckBlue.gridX] = [
      11,
      this.solderCheckBlue
    ];
  }

  //------para matar soldados Azules------//
  deadBlueSolderDown() {
    if (this.downPositionRed()[0] != 0 && this.downPositionRed()[0] != 1) {
      this.solderBlue.splice(
        this.solderBlue.indexOf(this.downPositionRed()[1]),
        1
      );
      this.arrMap[this.solderCheckRed.gridY + 1][this.solderCheckRed.gridX] = 0;
    }
  }
  deadBlueSolderUp() {
    if (this.upPositionRed()[0] != 0 && this.upPositionRed()[0] != 1) {
      console.log("entra");
      this.solderBlue.splice(
        this.solderBlue.indexOf(this.upPositionRed()[1]),
        1
      );
      this.arrMap[this.solderCheckRed.gridY - 1][this.solderCheckRed.gridX] = 0;
    }
  }
  deadBlueSolderLeft() {
    if (this.leftPositionRed()[0] != 0 && this.leftPositionRed()[0] != 1) {
      this.solderBlue.splice(
        this.solderBlue.indexOf(this.leftPositionRed()[1]),
        1
      );
      this.arrMap[this.solderCheckRed.gridY][this.solderCheckRed.gridX - 1] = 0;
    }
  }
  deadBlueSolderRight() {
    if (this.rightPositionRed()[0] != 0 && this.rightPositionRed()[0] != 1) {
      this.solderBlue.splice(
        this.solderBlue.indexOf(this.rightPositionRed()[1]),
        1
      );
      this.arrMap[this.solderCheckRed.gridY][this.solderCheckRed.gridX + 1] = 0;
    }
  }
  downPositionRed() {
    return this.arrMap[this.solderCheckRed.gridY + 1][
      this.solderCheckRed.gridX
    ];
  }
  upPositionRed() {
    return this.arrMap[this.solderCheckRed.gridY - 1][
      this.solderCheckRed.gridX
    ];
  }
  leftPositionRed() {
    return this.arrMap[this.solderCheckRed.gridY][
      this.solderCheckRed.gridX - 1
    ];
  }
  rightPositionRed() {
    return this.arrMap[this.solderCheckRed.gridY][
      this.solderCheckRed.gridX + 1
    ];
  }
  //------para matar soldados Rojos------//
  deadRedSolderDown() {
    if (this.downPositionBlue()[0] != 0 && this.downPositionBlue()[0] != 11) {
      this.solder.splice(this.solder.indexOf(this.downPositionBlue()[1]), 1);
      this.arrMap[this.solderCheckBlue.gridY + 1][
        this.solderCheckBlue.gridX
      ] = 0;
    }
  }
  deadRedSolderUp() {
    if (this.upPositionBlue()[0] != 0 && this.upPositionBlue()[0] != 11) {
      this.solder.splice(this.solder.indexOf(this.upPositionBlue()[1]), 1);
      this.arrMap[this.solderCheckBlue.gridY - 1][
        this.solderCheckBlue.gridX
      ] = 0;
    }
  }
  deadRedSolderLeft() {
    if (this.leftPositionBlue()[0] != 0 && this.leftPositionBlue()[0] != 11) {
      this.solder.splice(this.solder.indexOf(this.leftPositionBlue()[1]), 1);
      this.arrMap[this.solderCheckBlue.gridY][
        this.solderCheckBlue.gridX - 1
      ] = 0;
    }
  }
  deadRedSolderRight() {
    if (this.rightPositionBlue()[0] != 0 && this.rightPositionBlue()[0] != 11) {
      this.solder.splice(this.solder.indexOf(this.rightPositionBlue()[1]), 1);
      this.arrMap[this.solderCheckBlue.gridY][
        this.solderCheckBlue.gridX + 1
      ] = 0;
    }
  }
  downPositionBlue() {
    return this.arrMap[this.solderCheckBlue.gridY + 1][
      this.solderCheckBlue.gridX
    ];
  }
  upPositionBlue() {
    return this.arrMap[this.solderCheckBlue.gridY - 1][
      this.solderCheckBlue.gridX
    ];
  }
  leftPositionBlue() {
    return this.arrMap[this.solderCheckBlue.gridY][
      this.solderCheckBlue.gridX - 1
    ];
  }
  rightPositionBlue() {
    return this.arrMap[this.solderCheckBlue.gridY][
      this.solderCheckBlue.gridX + 1
    ];
  }
  moveRedGrass() {
    return (this.arrMap[this.solderCheckRed.gridY][
      this.solderCheckRed.gridX
    ] = 0);
  }
  moveBlueGrass() {
    this.arrMap[this.solderCheckBlue.gridY][this.solderCheckBlue.gridX] = 0;
  }
  recurentListener() {
    console.log(this.turn);
    if (this.turn == "red") {
      this.moveSolder();
      this.solderCheckRed.moveCounter--;
    } else if (this.turn == "blue") {
      this.moveBlueSolder();
      this.solderCheckBlue.moveCounter--;
    }
    this.draw();
  }
  solderSelect() {
    document.getElementById("bluePlayer").innerHTML = `<p>${
      this.solderBlue[0]
    }</p>`;
    document.getElementById("bluePlayer").innerHTML += `<p>${
      this.solderBlue[0]
    }</p>`;
    document.getElementById("redPlayer").innerHTML = `<p>${this.solder[0]}</p>`;
    document.getElementById("redPlayer").innerHTML += `<p>${
      this.solder[1]
    }</p>`;
  }
  playerSwich() {
    if (this.turn == "red") {
      this.solder.forEach(solder => (solder.moveCounter = 0));
      this.solderBlue.forEach(solderBlue => (solderBlue.moveCounter = 3));
      this.turn = "blue";
    } else if (this.turn == "blue") {
      this.solderBlue.forEach(solderBlue => (solderBlue.moveCounter = 0));
      this.solder.forEach(solder => (solder.moveCounter = 3));
      this.turn = "red";
    }
  }
  showSolder() {
    this.solder.forEach(
      solder => (this.arrMap[solder.gridY][solder.gridX] = [1, solder])
    );
    this.solderBlue.forEach(
      solder => (this.arrMap[solder.gridY][solder.gridX] = [11, solder])
    );
  }
}

// document.getElementById("canvas").className = "display";
// document.getElementById("gameover").className = "";
