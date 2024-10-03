//@ts-check
import { canvas, ctx } from "./common/canvas.js";

export class Player {
	constructor(x = 0, y = 0) {
		this.x = x;
		this.y = y;
		this.width = 75;
		this.height = 25;

		this.speed = 5;

		this.keyBindings = {
			up: "ArrowUp",
			down: "ArrowDown",
			right: "ArrowRight",
			left: "ArrowLeft",
		};

		this.moving = {
			up: false,
			down: false,
			right: false,
			left: false,
		};

		this.wireUpKeyboard();
	}

	wireUpKeyboard() {
		window.addEventListener("keydown", (e) => {
			//console.log(e);

			switch (e.code) {
				case this.keyBindings.up:
					this.moving.up = true;
					break;
				case this.keyBindings.down:
					this.moving.down = true;
					break;
				case this.keyBindings.right:
					this.moving.right = true;
					break;
				case this.keyBindings.left:
					this.moving.left = true;
					break;
			}
		});

		window.addEventListener("keyup", (e) => {
			//console.log(e);
			switch (e.code) {
				case this.keyBindings.up:
					this.moving.up = false;
					break;
				case this.keyBindings.down:
					this.moving.down = false;
					break;
				case this.keyBindings.right:
					this.moving.right = false;
					break;
				case this.keyBindings.left:
					this.moving.left = false;
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

        if (this.x < -75) {
            this.x = canvas.width;
        }

        if (this.x > canvas.width) {
            this.x = canvas.width - canvas.width - 75;
        }

        if (this.y < -75) {
            this.y = canvas.height;
        }

        if (this.y > canvas.height) {
            this.y = canvas.height - canvas.height - 75;
        }
	}

	draw() {
		ctx.fillStyle = "white";
		ctx.fillRect(this.x, this.y, this.width, this.height);
	}
}