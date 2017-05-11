import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RefineactionComponent } from './refineaction.component';

describe('RefineactionComponent', () => {
  let component: RefineactionComponent;
  let fixture: ComponentFixture<RefineactionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RefineactionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RefineactionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
