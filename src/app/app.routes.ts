import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { GameplayComponent } from './gameplay/gameplay.component';

export const routes: Routes = [
	{ path: '', component: HomeComponent },
	{ path: 'gameplay', component: GameplayComponent },
];
