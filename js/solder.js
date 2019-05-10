class Solder {
  constructor(ctx, gridX, gridY) {
    this.ctx = ctx;

    this.img = new Image();
    this.img.src = "images/moving solder.png";
    // this.posX = 55;
    // this.posY = 40;

    this.img.frames = 6;
    this.img.frameIndex = 0;

    this.imgWidth = 43;
    this.imgHeight = 70;

    this.gridX = gridX;
    this.gridY = gridY;
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
  }
  drawM(framesCounter, posX, posY) {
    // animation move
    this.ctx.drawImage(
      this.img,
      this.img.frameIndex * Math.floor(this.img.width / this.img.frames),
      0,
      Math.floor(this.img.width / this.img.frames),
      this.img.height,
      posX + 10,
      posY,
      this.imgWidth,
      this.imgHeight
    );

    this.animateImg(framesCounter);
  }
  drawA(framesCounter, posX, posY) {
    // animation attack
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
  animateImg(framesCounter) {
    if (framesCounter % 6 === 0) {
      this.img.frameIndex += 1;
      this.imgA.frameIndex += 1;
      if (this.img.frameIndex > 2) {
        this.img.frameIndex = 0;
      }
      if (this.imgA.frameIndex > 2) {
        this.imgA.frameIndex = 0;
      }
    }
  }
  playerSwich() {
    if (this.currentPlayer == "red") {
      this.currentPlayer = "blue";
      this.moveCounter = 3;
    } else {
      this.currentPlayer = "red";
      this.moveCounter = 3;
    }
    console.log(this.currentPlayer);
  }
}
