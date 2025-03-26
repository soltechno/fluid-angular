import {
	Component,
	Output,
	EventEmitter,
	CUSTOM_ELEMENTS_SCHEMA,
	ViewChild, ElementRef
} from '@angular/core';
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
	@Output() depositClicked = new EventEmitter<void>();
	@ViewChild('fluidQuickDepositRef') fluidQuickDepositRef!: ElementRef;

	onQuickDepositClick() {
		this.quickDepositClicked.emit();
	}

	ngAfterViewInit() {
		if (this.fluidQuickDepositRef) {
			this.addEventListeners();
			console.info('Fluid Quick Deposit listeners on');
		}
	}

	ngOnDestroy() {
		if (this.fluidQuickDepositRef) {
			this.removeEventListeners();
		}
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

	addEventListeners() {
		this.fluidQuickDepositRef.nativeElement.addEventListener('fluid-command', this.onCommand.bind(this));
		this.fluidQuickDepositRef.nativeElement.addEventListener('fluid-info', this.onInfo.bind(this));
		this.fluidQuickDepositRef.nativeElement.addEventListener('fluid-error', this.onError.bind(this));
	}

	removeEventListeners() {
		this.fluidQuickDepositRef.nativeElement.removeEventListener('fluid-command', this.onCommand.bind(this));
		this.fluidQuickDepositRef.nativeElement.removeEventListener('fluid-info', this.onInfo.bind(this));
		this.fluidQuickDepositRef.nativeElement.removeEventListener('fluid-error', this.onError.bind(this));
	}

	onCommand(event: CustomEvent<any>) {
		console.info('%cFluid COMMAND:', 'color: lightgreen', event.detail);
	}

	onInfo(event: CustomEvent<any>) {
		console.info('%cFluid INFO:', 'color: cornflowerblue', event.detail);

		switch (event.detail.message) {
			case 'internal-operation-change':
				this.transaction = event.detail.transactionType;
				break;
			case 'deposit-success':
				this.balance = this.balance ? Number(this.balance) : 0;
				const topup = Number(event.detail.amount);
				this.balance += topup;
				break;
			case 'withdrawal-success':
				this.balance = this.balance ? Number(this.balance) : 0;
				this.balance -= Number(event.detail.amount);
				break;
			case 'withdrawal-cancelled':
				this.balance = this.balance ? Number(this.balance) : 0;
				this.balance += Number(event.detail.withdrawalAmount);
				break;
			case 'deposit-cta-clicked':
			case 'error-cta-clicked':
				this.depositClicked.emit();
				break;
			default:
				break;
		}
	}

	onError(event: CustomEvent<any>) {
		console.error('Fluid ERROR:', event.detail);
	}
}
