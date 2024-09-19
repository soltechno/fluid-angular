import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
	selector: 'app-game-browser',
	standalone: true,
	imports: [CommonModule, RouterOutlet, RouterLink, RouterLinkActive],
	templateUrl: './game-browser.component.html',
	styleUrl: './game-browser.component.css'
})
export class GameBrowserComponent {
	itemsNew: { link: string; image: string }[] = [];
	itemsPopular: { link: string; image: string }[] = [];
	itemsSlot: { link: string; image: string }[] = [];

	constructor() {
		this.initializeItems();
	}

	private shuffle(array: string[]): string[] {
		for (let i = array.length - 1; i > 0; i--) {
			const j = Math.floor(Math.random() * (i + 1));
			[array[i], array[j]] = [array[j], array[i]];
		}
		return array;
	}

	private initializeItems(): void {
		const numbers: string[] = Array.from({ length: 23 }, (_, i) => (i + 1).toString());
		const shuffledNumbersNew: string[] = this.shuffle([...numbers]);
		const shuffledNumbersPopular: string[] = this.shuffle([...numbers]);
		const shuffledNumbersSlot: string[] = this.shuffle([...numbers]);

		this.itemsNew = shuffledNumbersNew.map((num: string) => ({
			link: `GameplayComponent`,
			image: `/assets/thumbnails/${num}.webp`
		}));

		this.itemsPopular = shuffledNumbersPopular.map((num: string) => ({
			link: `GameplayComponent`,
			image: `/assets/thumbnails/${num}.webp`
		}));

		this.itemsSlot = shuffledNumbersSlot.map((num: string) => ({
			link: `GameplayComponent`,
			image: `/assets/thumbnails/${num}.webp`
	}));
	}
}
