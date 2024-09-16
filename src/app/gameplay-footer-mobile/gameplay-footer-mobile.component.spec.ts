import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameplayFooterMobileComponent } from './gameplay-footer-mobile.component';

describe('GameplayFooterMobileComponent', () => {
  let component: GameplayFooterMobileComponent;
  let fixture: ComponentFixture<GameplayFooterMobileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GameplayFooterMobileComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GameplayFooterMobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
