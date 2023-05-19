import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentDefaultComponent } from './student-default.component';

describe('StudentDefaultComponent', () => {
  let component: StudentDefaultComponent;
  let fixture: ComponentFixture<StudentDefaultComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StudentDefaultComponent]
    });
    fixture = TestBed.createComponent(StudentDefaultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
