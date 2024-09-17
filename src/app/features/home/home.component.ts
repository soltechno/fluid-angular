import { Component, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroComponent } from './hero/hero.component';
import { GameBrowserComponent } from './game-browser/game-browser.component';

@Component({
	selector: 'app-home',
	standalone: true,
	imports: [
		CommonModule,
		HeroComponent,
		GameBrowserComponent
	],
	templateUrl: './home.component.html',
	styleUrl: './home.component.css'
})
export class HomeComponent {
	@Output() claimBonusClicked = new EventEmitter<void>();

	onClaimBonusClick() {
		this.claimBonusClicked.emit();
	}
}
