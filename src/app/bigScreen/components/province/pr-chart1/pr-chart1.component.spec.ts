import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrChart1Component } from './pr-chart1.component';

describe('PrChart1Component', () => {
  let component: PrChart1Component;
  let fixture: ComponentFixture<PrChart1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrChart1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrChart1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
