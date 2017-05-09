import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IsprojectComponent } from './isproject.component';

describe('IsprojectComponent', () => {
  let component: IsprojectComponent;
  let fixture: ComponentFixture<IsprojectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IsprojectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IsprojectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
