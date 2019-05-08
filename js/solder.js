class Solder {
  constructor(ctx, gridX, gridY, gridBlueX, gridBlueY) {
    this.ctx = ctx;

    this.img = new Image();
    this.img.src = "images/moving solder.png";
    this.posX = 55;
    this.posY = 40;

    this.img.frames = 6;
    this.img.frameIndex = 0;

    this.imgWidth = 43;
    this.imgHeight = 70;

    this.gridX = gridX;
    this.gridY = gridY;

    this.gridBlueX = gridBlueX;
    this.gridBlueY = gridBlueY;

    this.moveCounter = 3;
    this.currentPlayer = "red";
    //----------------------------------------------------------//

    this.imgA = new Image();
    this.imgA.src = "images/solder shoot.png";
    this.imgA.frames = 5;
    this.imgA.frameIndex = 0;

    this.imgAWidth = 84;
    this.imgAHeight = 70;
    //------------------------------------------------------------//

    this.blueMove = new Image();
    this.blueMove.src = "images/blue solder move.png";
    this.blueMove.frames = 6;
    this.blueMove.frameIndex = 0;
    this.blueMoveWidth = 35;
    this.blueMoveHeight = 70;

    //----------------------------------------------------------//

    this.blueAttack = new Image();
    this.blueAttack.src = "images/blue solder shoot.png";
    this.blueAttack.frames = 4;
    this.blueAttack.frameIndex = 0;
    this.blueAttackWidth = 85;
    this.blueAttackHeight = 70;

    this.individualFrames = Math.floor(this.img.width / this.img.frames);
  }
  drawM(framesCounter, posX, posY) {
    this.ctx.drawImage(
      this.img,
      this.img.frameIndex * Math.floor(this.img.width / this.img.frames),
      0,
      Math.floor(this.img.width / this.img.frames),
      this.img.height,
      posX,
      posY,
      this.imgWidth,
      this.imgHeight
    );

    this.animateImg(framesCounter);
  }
  drawA(framesCounter, posX, posY) {
    this.ctx.drawImage(
      this.imgA,
      this.imgA.frameIndex * Math.floor(this.imgA.width / this.imgA.frames),
      0,
      Math.floor(this.imgA.width / this.imgA.frames),
      this.imgA.height,
      posX,
      posY,
      this.imgAWidth,
      this.imgAHeight
    );
    this.animateImg(framesCounter);
  }
  drawBlueMove(framesCounter, posX, posY) {
    this.ctx.drawImage(
      this.blueMove,
      this.blueMove.frameIndex *
        Math.floor(this.blueMove.width / this.blueMove.frames),
      0,
      Math.floor(this.blueMove.width / this.blueMove.frames),
      this.blueMove.height,
      posX,
      posY,
      this.blueMoveWidth,
      this.blueMoveHeight
    );

    this.animateImg(framesCounter);
  }
  animateImg(framesCounter) {
    if (framesCounter % 6 === 0) {
      this.img.frameIndex += 1;
      this.imgA.frameIndex += 1;
      this.blueAttack.frameIndex += 1;
      if (this.img.frameIndex > 2) {
        this.img.frameIndex = 0;
      }
      if (this.imgA.frameIndex > 2) {
        this.imgA.frameIndex = 0;
      }
      if (this.blueMove.frameIndex > 2) {
        this.blueMove.frameIndex = 0;
      }
    }
  }
  playerSwich() {
    if (currentPlayer == "red") {
      currentPlayer = "blue";
      this.moveCounter = 3;
    } else {
      currentPlayer = "red";
      this.moveCounter = 3;
    }
  }
}
