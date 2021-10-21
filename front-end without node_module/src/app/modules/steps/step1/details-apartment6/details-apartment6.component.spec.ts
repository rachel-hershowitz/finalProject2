import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsApartment6Component } from './details-apartment6.component';

describe('DetailsApartment6Component', () => {
  let component: DetailsApartment6Component;
  let fixture: ComponentFixture<DetailsApartment6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailsApartment6Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsApartment6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
