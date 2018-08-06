import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HuBeiComponent } from './hu-bei.component';

describe('HuBeiComponent', () => {
  let component: HuBeiComponent;
  let fixture: ComponentFixture<HuBeiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HuBeiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HuBeiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
