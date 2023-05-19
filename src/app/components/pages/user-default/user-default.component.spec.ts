import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserDefaultComponent } from './user-default.component';

describe('UserDefaultComponent', () => {
  let component: UserDefaultComponent;
  let fixture: ComponentFixture<UserDefaultComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserDefaultComponent]
    });
    fixture = TestBed.createComponent(UserDefaultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
