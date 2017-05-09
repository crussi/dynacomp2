import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IsactionableComponent } from './isactionable.component';

describe('IsactionableComponent', () => {
  let component: IsactionableComponent;
  let fixture: ComponentFixture<IsactionableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IsactionableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IsactionableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
