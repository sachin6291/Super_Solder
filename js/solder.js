class Solder {
  constructor(ctx) {
    this.ctx = ctx;

    this.img = new Image();
    this.img.src = "images/moving solder.png";
    this.posX = 55;
    this.posY = 40;

    this.img.frames = 6;
    this.img.frameIndex = 0;

    this.imgWidth = 43;
    this.imgHeight = 70;
    //----------------------------------------------------------//

    this.imgA = new Image();
    this.imgA.src = "images/solder shoot.png";
    this.imgA.frames = 5;
    this.imgA.frameIndex = 0;

    this.imgAWidth = 84;
    this.imgAHeight = 70;

    this.individualFrames = Math.floor(this.img.width / this.img.frames);
  }
  drawM(framesCounter) {
    this.ctx.drawImage(
      this.img,
      this.img.frameIndex * Math.floor(this.img.width / this.img.frames),
      0,
      Math.floor(this.img.width / this.img.frames),
      this.img.height,
      this.posX + 100,
      this.posY + 100,
      this.imgWidth,
      this.imgHeight
    );

    this.animateImg(framesCounter);
  }
  drawA(framesCounter) {
    this.ctx.drawImage(
      this.imgA,
      this.imgA.frameIndex * Math.floor(this.imgA.width / this.imgA.frames),
      0,
      Math.floor(this.imgA.width / this.imgA.frames),
      this.imgA.height,
      this.posX + 70,
      this.posY + 100,
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
}
