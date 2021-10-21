import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsApartment5Component } from './details-apartment5.component';

describe('DetailsApartment5Component', () => {
  let component: DetailsApartment5Component;
  let fixture: ComponentFixture<DetailsApartment5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailsApartment5Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsApartment5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
