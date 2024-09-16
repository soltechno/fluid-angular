import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameComponent } from './game/game.component';
import { FooterMobileComponent } from './footer-mobile/footer-mobile.component';
import { FooterDesktopComponent } from './footer-desktop/footer-desktop.component';
import { ToolsComponent } from './tools/tools.component';

@Component({
	selector: 'app-gameplay',
	standalone: true,
	imports: [
		CommonModule,
		GameComponent,
		ToolsComponent,
		FooterMobileComponent,
		FooterDesktopComponent,
	],
	templateUrl: './gameplay.component.html',
	styleUrl: './gameplay.component.css'
})

export class GameplayComponent {

}
