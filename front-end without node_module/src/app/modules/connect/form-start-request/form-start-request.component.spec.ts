import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormStartRequestComponent } from './form-start-request.component';

describe('FormStartRequestComponent', () => {
  let component: FormStartRequestComponent;
  let fixture: ComponentFixture<FormStartRequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormStartRequestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormStartRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
