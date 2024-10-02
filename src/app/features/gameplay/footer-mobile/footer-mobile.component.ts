import { Component, Output, EventEmitter } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
	selector: 'app-footer-mobile',
	standalone: true,
	imports: [RouterOutlet, RouterLink, RouterLinkActive],
	templateUrl: './footer-mobile.component.html',
	styleUrl: './footer-mobile.component.css'
})

export class FooterMobileComponent {
	// Output event emitter for wallet click
	@Output() quickDepositClicked = new EventEmitter<void>();

	onQuickDepositClick() {
		this.quickDepositClicked.emit();
	}
}
