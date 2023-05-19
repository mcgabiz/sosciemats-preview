import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentMoodComponent } from './student-mood.component';

describe('StudentMoodComponent', () => {
  let component: StudentMoodComponent;
  let fixture: ComponentFixture<StudentMoodComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StudentMoodComponent]
    });
    fixture = TestBed.createComponent(StudentMoodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
