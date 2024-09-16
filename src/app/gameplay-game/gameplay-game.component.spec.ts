import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameplayGameComponent } from './gameplay-game.component';

describe('GameplayGameComponent', () => {
  let component: GameplayGameComponent;
  let fixture: ComponentFixture<GameplayGameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GameplayGameComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GameplayGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
