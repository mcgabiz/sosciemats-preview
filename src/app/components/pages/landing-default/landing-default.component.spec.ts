import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingDefaultComponent } from './landing-default.component';

describe('LandingDefaultComponent', () => {
  let component: LandingDefaultComponent;
  let fixture: ComponentFixture<LandingDefaultComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LandingDefaultComponent]
    });
    fixture = TestBed.createComponent(LandingDefaultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
