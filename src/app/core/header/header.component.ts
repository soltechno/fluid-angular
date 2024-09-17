import { Component, OnInit, OnDestroy, Output, EventEmitter, Input } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';

@Component({
	selector: 'app-header',
	standalone: true,
	imports: [RouterOutlet, RouterLink, RouterLinkActive, SharedModule],
	templateUrl: './header.component.html',
	styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit, OnDestroy {
	 @Input() balance: number = 0;
	// Output event emitter for wallet click
	@Output() walletClicked = new EventEmitter<void>();

	onWalletClick() {
		this.walletClicked.emit();
	}

	// Set the current time
	currentTime: string = '';
	private intervalId: any;

	ngOnInit() {
		this.updateTime();
		this.intervalId = setInterval(() => this.updateTime(), 60000); // Update time every minute
	}

	ngOnDestroy() {
		if (this.intervalId) {
			clearInterval(this.intervalId);
		}
	}

	updateTime() {
		const now = new Date();
		this.currentTime = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
	}

}
