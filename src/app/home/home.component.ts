import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../header/header.component';
import { HeroComponent } from '../hero/hero.component';
import { FooterComponent } from '../footer/footer.component';
import { GameBrowserComponent } from '../game-browser/game-browser.component';

@Component({
	selector: 'app-home',
	standalone: true,
	imports: [
		CommonModule,
		HeaderComponent,
		HeroComponent,
		FooterComponent,
		GameBrowserComponent
	],
	templateUrl: './home.component.html',
	styleUrl: './home.component.css'
})
export class HomeComponent {

}
