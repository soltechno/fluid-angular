import { Component } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
	selector: 'app-footer-mobile',
	standalone: true,
	imports: [RouterOutlet, RouterLink, RouterLinkActive],
	templateUrl: './footer-mobile.component.html',
	styleUrl: './footer-mobile.component.css'
})

export class FooterMobileComponent {

}
