import { Component, OnInit, OnDestroy, ViewChild, ElementRef, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import bonusData from '../bonuses.json';
import { HeaderComponent } from './header/header.component';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [CommonModule, RouterOutlet, HeaderComponent],
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppComponent implements OnInit, OnDestroy {

    @ViewChild('fluidWidgetRef') fluidWidgetRef!: ElementRef;

    transaction = 'deposit';
    bonuses: any = null;
    loggedIn = true;

    operatorId: string | null = null;
    userId: string | null = null;
    sessionId: string | null = null;
    depositLimit: number | string = "";

    isOpen = false;


    ngOnInit() {
        this.operatorId = '10000001';
        this.userId = '10000';
        this.sessionId = 'a-session';
        this.bonuses = JSON.stringify([]);
        this.depositLimit = "";
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
    }

    onError(event: CustomEvent<any>) {
        console.error('Fluid ERROR:', event.detail);
    }
}
