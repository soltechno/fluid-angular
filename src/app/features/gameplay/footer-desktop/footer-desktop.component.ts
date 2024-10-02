import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
	selector: 'app-footer-desktop',
	standalone: true,
	imports: [CommonModule],
	templateUrl: './footer-desktop.component.html',
	styleUrl: './footer-desktop.component.css'
})
export class FooterDesktopComponent {
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
