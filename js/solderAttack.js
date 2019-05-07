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

    this.individualFrames = Math.floor(this.img.width / this.img.frames);
  }
  draw(framesCounter) {
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
  setListeners() {
    document.onkeydown = event => {
      if (event.keycode === 40) {
        console.log("hola");
        this.posY += 70;
      } else if (event.keycode === 39) {
        this.posX += 70;
      }
    };
  }
  animateImg(framesCounter) {
    if (framesCounter % 6 === 0) {
      this.img.frameIndex += 1;
      if (this.img.frameIndex > 2) {
        this.img.frameIndex = 0;
      }
    }
  }
}
