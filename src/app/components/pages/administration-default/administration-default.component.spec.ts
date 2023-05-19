import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdministrationDefaultComponent } from './administration-default.component';

describe('AdministrationDefaultComponent', () => {
  let component: AdministrationDefaultComponent;
  let fixture: ComponentFixture<AdministrationDefaultComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdministrationDefaultComponent]
    });
    fixture = TestBed.createComponent(AdministrationDefaultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
