import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
	selector: 'app-gameplay-footer-desktop',
	standalone: true,
	imports: [CommonModule],
	templateUrl: './gameplay-footer-desktop.component.html',
	styleUrl: './gameplay-footer-desktop.component.css'
})
export class GameplayFooterDesktopComponent {
	desktopGenre = [
		'Recently played',
		'New games',
		'Free Spins',
		'Live Casino',
		'Drop & Wins',
		'High volatility',
		'Scratchcards',
		'Netent',
		'Play N Go'
	];
}
