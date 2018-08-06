import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrChart2Component } from './pr-chart2.component';

describe('PrChart2Component', () => {
  let component: PrChart2Component;
  let fixture: ComponentFixture<PrChart2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrChart2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrChart2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
