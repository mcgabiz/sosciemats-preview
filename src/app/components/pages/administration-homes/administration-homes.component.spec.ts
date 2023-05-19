import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdministrationHomesComponent } from './administration-homes.component';

describe('AdministrationHomesComponent', () => {
  let component: AdministrationHomesComponent;
  let fixture: ComponentFixture<AdministrationHomesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdministrationHomesComponent]
    });
    fixture = TestBed.createComponent(AdministrationHomesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
