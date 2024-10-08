//@ts-check

import { Player } from "../player.js";
import { canvas } from "./canvas.js";

export class GameManager {
    constructor() {
        this.players = [];
        this.collectables = [];
        this.baddies = [];

        this.isGameOver = false;

        this.goodSpawn = {
            lastTime: 0,
            nextTime: Math.min(rand(15), 5),
            getNewNext: function () {
                this.nextTime = Math.min(rand(15), 5);
            }
        };
    }
    initalize() {
        this.players = []; 
        let p1 = new Player(canvas.width / 2, canvas.height / 2);
        p1.x -= p1.width / 2;
        p1.y -= p1.height / 2;
        this.players.push(p1);
    }
    update(elapsedTime) {
        this.players.forEach(p => {
            p.update();
        })
        this.collectables.forEach(c => {
            c.update(elapsedTime);
        })
    }

    spawner(elapsedTime) {
        
    }

    draw() {
        this.players.forEach(p => {
            p.draw();
        })
        this.collectables.forEach(c => {
            c.draw();
        })  
    }
}

function rand(max = 100) {
    let r = Math.floor(Math.random() * max + 1);
    return r;
}