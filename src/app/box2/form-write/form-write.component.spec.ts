import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormWriteComponent } from './form-write.component';

describe('FormWriteComponent', () => {
  let component: FormWriteComponent;
  let fixture: ComponentFixture<FormWriteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormWriteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormWriteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
