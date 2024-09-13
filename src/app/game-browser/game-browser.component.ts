import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-game-browser',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './game-browser.component.html',
  styleUrl: './game-browser.component.css'
})
export class GameBrowserComponent {
  itemsNew = Array.from({ length: 22 }, () => {
    const randomIndex = Math.floor(Math.random() * 22) + 1;
    return {
      link: `GameplayComponent`,
      image: `/assets/thumbnails/${randomIndex}.jpg`
    };
  });
  itemsPopular = Array.from({ length: 22 }, () => {
    const randomIndex = Math.floor(Math.random() * 22) + 1;
    return {
      link: 'GameplayComponent',
      image: `/assets/thumbnails/${randomIndex}.jpg`
    };
  });
  itemsSlot = Array.from({ length: 22 }, () => {
    const randomIndex = Math.floor(Math.random() * 22) + 1;
    return {
      link: 'GameplayComponent',
      image: `/assets/thumbnails/${randomIndex}.jpg`
    };
  });
}
