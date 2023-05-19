import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdministrationMainComponent } from './administration-main.component';

describe('AdministrationMainComponent', () => {
  let component: AdministrationMainComponent;
  let fixture: ComponentFixture<AdministrationMainComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdministrationMainComponent]
    });
    fixture = TestBed.createComponent(AdministrationMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
