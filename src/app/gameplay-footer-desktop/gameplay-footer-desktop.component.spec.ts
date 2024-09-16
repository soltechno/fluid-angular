import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameplayFooterDesktopComponent } from './gameplay-footer-desktop.component';

describe('GameplayFooterDesktopComponent', () => {
  let component: GameplayFooterDesktopComponent;
  let fixture: ComponentFixture<GameplayFooterDesktopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GameplayFooterDesktopComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GameplayFooterDesktopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
