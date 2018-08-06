import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChongQingComponent } from './chong-qing.component';

describe('ChongQingComponent', () => {
  let component: ChongQingComponent;
  let fixture: ComponentFixture<ChongQingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChongQingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChongQingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
