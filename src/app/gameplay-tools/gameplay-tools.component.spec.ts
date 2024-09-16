import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameplayToolsComponent } from './gameplay-tools.component';

describe('GameplayToolsComponent', () => {
  let component: GameplayToolsComponent;
  let fixture: ComponentFixture<GameplayToolsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GameplayToolsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GameplayToolsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
