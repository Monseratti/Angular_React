import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BillyComponent } from './billy.component';

describe('BillyComponent', () => {
  let component: BillyComponent;
  let fixture: ComponentFixture<BillyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BillyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BillyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
