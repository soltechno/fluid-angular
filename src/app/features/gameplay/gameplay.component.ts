import { Component, Output, EventEmitter, CUSTOM_ELEMENTS_SCHEMA, } from '@angular/core';
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
	styleUrl: './gameplay.component.css',
	schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class GameplayComponent {
	@Output() quickDepositClicked = new EventEmitter<void>();

	onQuickDepositClick() {
		this.quickDepositClicked.emit();
	}

	transaction = 'deposit';
	bonuses: any = null;
	loggedIn = true;
	operatorId: string | null = null;
	userId: string | null = null;
	sessionId: string | null = null;
	depositLimit: number | string = "";
	balance: number = 1000;
	withdrawableBalance: number = 1000;
}
