import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsApartment2Component } from './details-apartment2.component';

describe('DetailsApartment2Component', () => {
  let component: DetailsApartment2Component;
  let fixture: ComponentFixture<DetailsApartment2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailsApartment2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsApartment2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
