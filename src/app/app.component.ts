import {
	AfterViewInit,
	Component,
	CUSTOM_ELEMENTS_SCHEMA,
	ElementRef,
	OnDestroy,
	OnInit,
	ViewChild
} from '@angular/core';
import { CommonModule } from '@angular/common';
import {
	Event as RouterEvent,
	NavigationEnd,
	Router,
	RouterLink,
	RouterLinkActive,
	RouterOutlet
} from '@angular/router';
import { filter } from 'rxjs/operators';
import bonusData from '../bonuses.json';
import { HeaderComponent } from './core/header/header.component';
import { FooterComponent } from './core/footer/footer.component';

@Component({
	selector: 'app-root',
	standalone: true,
	imports: [
		CommonModule,
		RouterOutlet,
		RouterLink,
		RouterLinkActive,
		HeaderComponent,
		FooterComponent
	],
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css'],
	schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppComponent implements OnInit, OnDestroy, AfterViewInit {
	// Set the CSS custom properties.
	// The values will come from the CMS at some point
	// The values are transformed to CSS variables in app.component.html
	buttonBgColor: string = '#121926';
	buttonBgColorHover: string = '#364152';
	buttonColor: string = '#fff';
	textcolorPrimary: string = '#121926';
	textcolorSecondary: string = '#7A7E85';
	baseBg: string = '#fff';
	zeroBg: string = '#EAF0F5';
	colorPrimary: string = '63, 104, 245';
	colorOverlay: string = '2, 43, 92';
	inputBorder: string = '#CDD5DF';
	inputPlaceholder: string = '#C9D0DA';
	pillBg: string = '#F8F8F8';
	pillColor: string = '#3D4552';
	colorCardStart: string = '#BD63AF';
	colorCardStop: string = '#1B86D4';

	// Set the current page based on the URL
	currentPage: string = '';
	constructor(private router: Router) { }


	@ViewChild('fluidWidgetRef') fluidWidgetRef!: ElementRef;

	transaction = 'deposit';
	bonuses: any = null;
	loggedIn = true;
	operatorId: string | null = null;
	userId: string | null = null;
	sessionId: string | null = null;
	depositLimit: number | string = "";
	balance: number = 1000;

	isOpen = false;

	ngOnInit() {
		// Set the current page based on the URL to the body class
		this.router.events
			.pipe(
				filter((event: RouterEvent): event is NavigationEnd => event instanceof NavigationEnd)
			)
			.subscribe((event: NavigationEnd) => {
				const navigationEndEvent = event;
				this.currentPage = event.urlAfterRedirects.split('/').pop() || 'home';
			});
		// Binding the wallet attributes
		this.operatorId = '10000001';
		this.userId = '10000';
		this.sessionId = this.generateSessionId();
		this.bonuses = JSON.stringify(bonusData);
		this.depositLimit = "";
		this.transaction = "";
	}

	// Set emit events for the child components
	onActivate(component: any) {
		if (component.claimBonusClicked) {
			component.claimBonusClicked.subscribe(() => {
				this.onClaimBonusClick();
			});
		}

		if (component.quickDepositClicked) {
			component.quickDepositClicked.subscribe(() => {
				this.quickDeposit();
			});
		}
	}

	// Get the event from the hero component
	// Preselect the first bonus, load the bonuses and call the deposit method
	onClaimBonusClick() {
		if (Array.isArray(bonusData) && bonusData.length > 0) {
			(bonusData[0] as any).selected = true;
			this.bonuses = JSON.stringify(bonusData);
			this.deposit();
		}
	}

	addEventListeners() {
		this.fluidWidgetRef.nativeElement.addEventListener('fluid-command', this.onCommand.bind(this));
		this.fluidWidgetRef.nativeElement.addEventListener('fluid-info', this.onInfo.bind(this));
		this.fluidWidgetRef.nativeElement.addEventListener('fluid-error', this.onError.bind(this));
	}

	removeEventListeners() {
		this.fluidWidgetRef.nativeElement.removeEventListener('fluid-command', this.onCommand.bind(this));
		this.fluidWidgetRef.nativeElement.removeEventListener('fluid-info', this.onInfo.bind(this));
		this.fluidWidgetRef.nativeElement.removeEventListener('fluid-error', this.onError.bind(this));
	}

	ngAfterViewInit() {
		if (this.fluidWidgetRef) {
			this.addEventListeners();
		}

		// Ensure the dialog element is available after view initialization
		if (!this.settingsDialog) {
			console.error('Dialog element not found from ngAfterViewInit');
		}
	}

	ngOnDestroy() {
		if (this.fluidWidgetRef) {
			this.removeEventListeners();
		}
	}

	setLoggedIn(value: boolean) {
		this.isOpen = false;
		this.loggedIn = value;
		if (value) {
			setTimeout(() => {
				this.addEventListeners();
			});
		}
		else {
			this.removeEventListeners();
		}
	}

	changeUser() {
		this.userId = '10001';
	}

	wallet() {
		this.isOpen = true;
	}

	deposit() {
		this.transaction = 'deposit';
		this.isOpen = true;
	}

	withdraw() {
		this.transaction = 'withdrawal';
		this.isOpen = true;
	}

	quickDeposit() {
		this.transaction = 'quick-deposit';
		this.isOpen = true;
	}

	addBonuses() {
		this.bonuses = JSON.stringify(bonusData);
	}

	setDepositLimit() {
		this.depositLimit = 200;
	}

	close() {
		this.isOpen = false;
	}

	onCommand(event: CustomEvent<any>) {
		console.info('%cFluid COMMAND:', 'color: lightgreen', event.detail);

		if (event.detail.message === 'close') {
			this.close();
		}
	}

	onInfo(event: CustomEvent<any>) {
		console.info('%cFluid INFO:', 'color: cornflowerblue', event.detail);
		if (event.detail.message === 'internal-operation-change') {
			this.transaction = event.detail.transactionType;
		}
	}

	onError(event: CustomEvent<any>) {
		console.error('Fluid ERROR:', event.detail);
	}

	// Settings dialog
	@ViewChild('settings') settingsDialog!: ElementRef<HTMLDialogElement>;


	openSettings() {
		console.log('test');
		if (this.settingsDialog && this.settingsDialog.nativeElement) {
			this.settingsDialog.nativeElement.showModal(); // Opens the settings dialog
		} else {
			console.error('Dialog element not found');
		}
	}

	closeSettings() {
		if (this.settingsDialog && this.settingsDialog.nativeElement) {
			this.settingsDialog.nativeElement.close(); // Closes the settings dialog
		} else {
			console.error('Dialog element not found');
		}
	}

	generateSessionId() {
		const prefix = '10002PW-';
		const hash = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
		return prefix + hash;
	}

	resetToFtd() {
		this.sessionId = this.generateSessionId();
	}
}
