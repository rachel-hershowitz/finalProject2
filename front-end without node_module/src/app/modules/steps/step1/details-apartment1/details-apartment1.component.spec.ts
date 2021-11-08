import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsApartment1Component } from './details-apartment1.component';

describe('DetailsApartment1Component', () => {
  let component: DetailsApartment1Component;
  let fixture: ComponentFixture<DetailsApartment1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailsApartment1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsApartment1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
