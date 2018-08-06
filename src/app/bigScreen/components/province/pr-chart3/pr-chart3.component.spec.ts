import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrChart3Component } from './pr-chart3.component';

describe('PrChart3Component', () => {
  let component: PrChart3Component;
  let fixture: ComponentFixture<PrChart3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrChart3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrChart3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
