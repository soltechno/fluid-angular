import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-tools',
  standalone: true,
  imports: [],
  templateUrl: './tools.component.html',
  styleUrl: './tools.component.css'
})
export class ToolsComponent {
	// Output event emitter for wallet click
	@Output() quickDepositClicked = new EventEmitter<void>();

	onQuickDepositClick() {
		this.quickDepositClicked.emit();
	}
}
