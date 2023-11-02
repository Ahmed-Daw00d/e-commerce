import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SliderProductComponent } from './slider-product.component';

describe('SliderProductComponent', () => {
  let component: SliderProductComponent;
  let fixture: ComponentFixture<SliderProductComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SliderProductComponent]
    });
    fixture = TestBed.createComponent(SliderProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
