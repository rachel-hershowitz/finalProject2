import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsApartment3Component } from './details-apartment3.component';

describe('DetailsApartment3Component', () => {
  let component: DetailsApartment3Component;
  let fixture: ComponentFixture<DetailsApartment3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailsApartment3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsApartment3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
