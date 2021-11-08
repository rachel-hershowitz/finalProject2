import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowListCustomerComponent } from './show-list-customer.component';

describe('ShowListCustomerComponent', () => {
  let component: ShowListCustomerComponent;
  let fixture: ComponentFixture<ShowListCustomerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowListCustomerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowListCustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
