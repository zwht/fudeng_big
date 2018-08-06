import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SiChuanComponent } from './si-chuan.component';

describe('SiChuanComponent', () => {
  let component: SiChuanComponent;
  let fixture: ComponentFixture<SiChuanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SiChuanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SiChuanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
