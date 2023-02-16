import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetLoginPassComponent } from './set-login-pass.component';

describe('SetLoginPassComponent', () => {
  let component: SetLoginPassComponent;
  let fixture: ComponentFixture<SetLoginPassComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SetLoginPassComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SetLoginPassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
