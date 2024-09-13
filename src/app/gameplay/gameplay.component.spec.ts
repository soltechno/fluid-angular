import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameplayComponentComponent } from './gameplay-component.component';

describe('GameplayComponentComponent', () => {
  let component: GameplayComponentComponent;
  let fixture: ComponentFixture<GameplayComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GameplayComponentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GameplayComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
