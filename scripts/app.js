//@ts-check
import { canvas, ctx } from "./common/canvas.js";
import { GameManager } from "./common/game-manager.js";

let game = new GameManager();
game.initalize();

let lastTimestamp = 0;

function gameLoop(timestamp) {
	let elapsedTime = timestamp - lastTimestamp;
	lastTimestamp = timestamp;

	ctx.clearRect(0, 0, canvas.width, canvas.height);

    game.update(elapsedTime);
    game.draw();

	window.requestAnimationFrame(gameLoop);
}

window.requestAnimationFrame(gameLoop);