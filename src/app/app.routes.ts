import { Routes } from '@angular/router';
import { HomeComponent } from './features/home/home.component';
import { GameplayComponent } from './features/gameplay/gameplay.component';

export const routes: Routes = [
	{ path: '', component: HomeComponent },
	{ path: 'gameplay', component: GameplayComponent },
];
