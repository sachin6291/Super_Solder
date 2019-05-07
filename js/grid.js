//grid array 15 X 10
//let arrayMap=[[0,0],[1,0],[2,0],[0,1],[1,1],[2,1],[0,2],[1,2],[2,2]]
//create an array of 2 dimention that represents a map 15 x 10

class Grid {
  constructor(width, height, ctx) {
    this.width = width;
    this.height = height;
    this.ctx = ctx;
    this.img = new Image();
    this.img.src = "images/tile_grass.png";
    this.arrMap = [];
    this.solder = new Solder(this.ctx);

    for (let i = 0; i < 10; i++) {
      this.arrMap.push([]);
      for (let j = 0; j < 15; j++) {
        if (i === 2 && j === 2) {
          this.arrMap[i].push(1);
        } else {
          this.arrMap[i].push(0);
        }
      }
    }

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
          //draw solder
          this.solder.drawA(fr);
        }
        (this.posX += this.width) * j;
      }
      this.posX = 0;
      (this.posY += this.height) * i;
    }
  }

  setListeners() {
    document.onkeydown = event => {
      if (event.keyCode == 40) {
        console.log(this.arrMap);

        this.arrMap.forEach((row, col) => {
          if (row.indexOf(1) >= 0) {
            this.arrMap[row.indexOf(1)][col + 1] = 0;
            this.arrMap[row.indexOf(1)][col] = 1;
          }
        });
        // })
        // for (let i = 0; i < this.arrMap.length; i++) {
        //   if ("1")
        //   for (let j = 0; j < this.arrMap[i].length; j++) {
        //     console.log(this.arrMap[i][j][2]);

        //     if (this.arrMap[i][j] == 1) {
        //       this.arrMap[i][j] = 0;
        //       this.arrMap[(i += 1)][j] = 1;

        //       console.log(this.arrMap[i][j]);

        this.draw();
      } else if (event.keyCode === 39) {
        console.log("adios");
      } else if (event.keyCode === 37) {
        console.log("ashjhjah");
      } else if (event.keyCode === 38) {
        console.log("inljkgbkfj");
      }
    };
  }
}
