import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameBrowserComponent } from './game-browser.component';

describe('GameBrowserComponent', () => {
  let component: GameBrowserComponent;
  let fixture: ComponentFixture<GameBrowserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GameBrowserComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GameBrowserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
