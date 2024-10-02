import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {
	// Output event emitter for claim bonus click
	@Output() claimBonusClicked = new EventEmitter<void>();

	onClaimBonusClick() {
		this.claimBonusClicked.emit();
	}
}
