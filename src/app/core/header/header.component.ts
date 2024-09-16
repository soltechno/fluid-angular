import { Component, OnInit, OnDestroy } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
	selector: 'app-header',
	standalone: true,
	imports: [RouterOutlet, RouterLink, RouterLinkActive],
	templateUrl: './header.component.html',
	styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit, OnDestroy {
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
