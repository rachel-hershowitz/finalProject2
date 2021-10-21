import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsApartment4Component } from './details-apartment4.component';

describe('DetailsApartment4Component', () => {
  let component: DetailsApartment4Component;
  let fixture: ComponentFixture<DetailsApartment4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailsApartment4Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsApartment4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
