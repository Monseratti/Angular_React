import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaintGalleryComponent } from './paint-gallery.component';

describe('PaintGalleryComponent', () => {
  let component: PaintGalleryComponent;
  let fixture: ComponentFixture<PaintGalleryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaintGalleryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaintGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
