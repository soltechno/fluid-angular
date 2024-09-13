import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
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
