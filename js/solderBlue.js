// class SolderBlue extends Solder {
//   constructor(gridX, gridY, ctx) {
//     super(ctx);
//     this.gridX = gridX;
//     this.gridY = gridY;
class SolderBlue {
  constructor(ctx, gridX, gridY) {
    this.ctx = ctx;
    this.gridX = gridX;
    this.gridY = gridY;

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

    this.moveCounter = 3;
  }
  drawBlueMove(framesCounter, posX, posY) {
    this.ctx.drawImage(
      this.blueMove,
      this.blueMove.frameIndex *
        Math.floor(this.blueMove.width / this.blueMove.frames),
      0,
      Math.floor(this.blueMove.width / this.blueMove.frames),
      this.blueMove.height,
      posX + 15,
      posY,
      this.blueMoveWidth,
      this.blueMoveHeight
    );

    this.animateImg(framesCounter);
  }

  drawBlueAttack(framesCounter, posX, posY) {
    this.ctx.drawImage(
      this.blueAttack,
      this.blueAttack.frameIndex *
        Math.floor(this.blueAttack.width / this.blueAttack.frames),
      0,
      Math.floor(this.blueAttack.width / this.blueAttack.frames),
      this.blueAttack.height,
      posX,
      posY,
      this.blueAttackWidth,
      this.blueAttackHeight
    );

    this.animateImg(framesCounter);
  }
  animateImg(framesCounter) {
    if (framesCounter % 6 === 0) {
      this.blueMove.frameIndex += 1;
      this.blueAttack.frameIndex += 1;

      if (this.blueMove.frameIndex > 2) {
        this.blueMove.frameIndex = 0;
      }
      if (this.blueAttack.frameIndex > 2) {
        this.blueAttack.frameIndex = 0;
      }
    }
  }
}
