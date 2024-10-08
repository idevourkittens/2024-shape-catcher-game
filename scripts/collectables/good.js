//@ts-check
import { CollectableItem } from "./collectable-base.js";

export class SimpleGoodItem extends CollectableItem {
	constructor(x = 0, y = 0) {
		super(x, y);

		this.width = 25;
		this.height = 25;

		this.despawnTime = 10 * 1000;
		this.spawnInTime = 5 * 1000;
        this.despawnWarningTime = 3 * 1000;

        this.blink = {
            Interval: 500,
            lastBlink: 0,
            isVisible: true,
        };

		this.lastAlphaTime = 0;
		this.alpha = 0;

		this.lifetime = 0;

		this.color = "hsla(0, 100%, 50%, 0%)";
	}

	update(elapsedTime) {
        if (!this.isCollectable) {
            return;
        }

		this.lifetime += elapsedTime;

		if (this.lifetime < this.spawnInTime) {
			// we have not fully spawned in yet
			this.alpha = Math.floor((this.lifetime / this.spawnInTime) * 100);

		}

        if (this.lifetime > this.despawnTime - this.despawnWarningTime) {
            this.blink.lastBlink += elapsedTime;
            if (this.blink.lastBlink > this.blink.Interval) {
                if (this.blink.isVisible) {
                    this.alpha = 0;
                } else {
                    this.alpha = 100;
                }
                this.blink.lastBlink = 0;
                this.blink.isVisible = !this.blink.isVisible;
            }
        }
        if (this.lifetime > this.despawnTime) {
            this.alpha = 0;
            this.isCollectable = false;
            this.isCollected = false;
        }
        this.color = `hsla(112.5, 100%, 50%, ${this.alpha}%)`;
	}
}