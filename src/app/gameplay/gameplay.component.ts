import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameplayGameComponent } from '../gameplay-game/gameplay-game.component';
import { GameplayFooterMobileComponent } from '../gameplay-footer-mobile/gameplay-footer-mobile.component';
import { GameplayFooterDesktopComponent } from '../gameplay-footer-desktop/gameplay-footer-desktop.component';
import { GameplaySidebarComponent } from '../gameplay-sidebar/gameplay-sidebar.component';
import { GameplayToolsComponent } from '../gameplay-tools/gameplay-tools.component';
@Component({
  selector: 'app-gameplay',
  standalone: true,
	imports: [
		CommonModule,
		GameplayGameComponent,
		GameplayToolsComponent,
		GameplayFooterMobileComponent,
		GameplayFooterDesktopComponent,
		GameplaySidebarComponent
	],
  templateUrl: './gameplay.component.html',
  styleUrl: './gameplay.component.css'
})
export class GameplayComponent {

}
