import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Box0Component } from './box0.component';

describe('Box0Component', () => {
  let component: Box0Component;
  let fixture: ComponentFixture<Box0Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Box0Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Box0Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
