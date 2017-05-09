import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IsschedulableComponent } from './isschedulable.component';

describe('IsschedulableComponent', () => {
  let component: IsschedulableComponent;
  let fixture: ComponentFixture<IsschedulableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IsschedulableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IsschedulableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
