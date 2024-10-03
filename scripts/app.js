//@ts-check

import { canvas, ctx } from "./common/canvas.js";
import { Player } from "./player.js";

let player = new Player();

let lastTimeStamp = 0;

function gameLoop(timeStamp) {
    let elapsedTime = lastTimeStamp - timeStamp;
    lastTimeStamp = timeStamp;

    ctx.clearRect(0,0, canvas.width, canvas.height);

    player.update();
    player.draw();

    window.requestAnimationFrame(gameLoop);

}

window.requestAnimationFrame(gameLoop);