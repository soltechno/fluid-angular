import { Routes } from '@angular/router';
import { HomeComponent } from './features/home/home.component';
import { GameplayComponent } from './features/gameplay/gameplay.component';

export const routes: Routes = [
	{ path: '', title: 'Fluid demo', component: HomeComponent },
	{ path: 'gameplay', title: 'Gameplay | Fuid demo', component: GameplayComponent },
];
