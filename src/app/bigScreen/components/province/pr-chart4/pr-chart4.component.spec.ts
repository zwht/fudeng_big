import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrChart4Component } from './pr-chart4.component';

describe('PrChart4Component', () => {
  let component: PrChart4Component;
  let fixture: ComponentFixture<PrChart4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrChart4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrChart4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
