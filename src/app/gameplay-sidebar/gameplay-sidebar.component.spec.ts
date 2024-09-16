import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameplaySidebarComponent } from './gameplay-sidebar.component';

describe('GameplaySidebarComponent', () => {
  let component: GameplaySidebarComponent;
  let fixture: ComponentFixture<GameplaySidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GameplaySidebarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GameplaySidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
