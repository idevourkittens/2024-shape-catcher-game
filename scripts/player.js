//@ts-check
import { canvas, ctx } from "./common/canvas.js";

export class Player {
  constructor(x = 0, y = 0) {
    this.x = x;
    this.y = y;
    this.width = 75;
    this.height = 25;
    this.speed = 1;

    this.keyBinding = {
      up: "ArrowUp" && "KeyW",
      down: "ArrowDown" && "KeyS",
      left: "ArrowLeft" && "KeyA",
      right: "ArrowRight" && "KeyD",
    };

    this.moving = {
      up: false,
      down: false,
      left: false,
      right: false,
    };

    this.wireUpKeyboard();
  }

  wireUpKeyboard() {
    window.addEventListener("keydown", (e) => {
      //   console.log(e);
      switch (e.code) {
        case this.keyBinding.up:
          this.moving.up = true;
          break;
        case this.keyBinding.down:
          this.moving.down = true;
          break;
        case this.keyBinding.left:
          this.moving.left = true;
          break;
        case this.keyBinding.right:
          this.moving.right = true;
          break;
      }
    });

    window.addEventListener("keydown", (e) => {
      //   console.log(e);
      switch (e.code) {
        case this.keyBinding.up:
          this.moving.up = false;
          break;
        case this.keyBinding.down:
          this.moving.down = false;
          break;
        case this.keyBinding.left:
          this.moving.left = false;
          break;
        case this.keyBinding.right:
          this.moving.right = false;
          break;
      }
    });
  }

  update() {
    let dirX = 0;
    let dirY = 0;

    if (this.moving.up) {
        dirY = -1;
    }

    if (this.moving.down) {
        dirY = 1;
    }

    if (this.moving.up && this.moving.down) {
        dirY = 0;
    }

    if (this.moving.left) {
        dirX = -1;
    }

    if (this.moving.right) {
        dirX = 1;
    }

    if (this.moving.left && this.moving.right) {
        dirX = 0;
    }

    this.x += this.speed * dirX;
    this.y += this.speed * dirY;
  }

  draw() {
    ctx.fillStyle = "white";
    ctx.fillRect(this.x, this.y, this.width, this.height);
  }
}
