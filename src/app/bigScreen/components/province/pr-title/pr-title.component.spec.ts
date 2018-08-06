import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrTitleComponent } from './pr-title.component';

describe('PrTitleComponent', () => {
  let component: PrTitleComponent;
  let fixture: ComponentFixture<PrTitleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrTitleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
