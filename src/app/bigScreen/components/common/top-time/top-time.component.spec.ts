import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopTimeComponent } from './top-time.component';

describe('TopTimeComponent', () => {
  let component: TopTimeComponent;
  let fixture: ComponentFixture<TopTimeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopTimeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopTimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
