import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectcreatedComponent } from './projectcreated.component';

describe('ProjectcreatedComponent', () => {
  let component: ProjectcreatedComponent;
  let fixture: ComponentFixture<ProjectcreatedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectcreatedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectcreatedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
