import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowDetailsCustomersComponent } from './show-details-users.component';

describe('ShowDetailsCustomersComponent', () => {
  let component: ShowDetailsCustomersComponent;
  let fixture: ComponentFixture<ShowDetailsCustomersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ShowDetailsCustomersComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowDetailsCustomersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
