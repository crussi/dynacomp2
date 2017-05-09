import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NonactionableComponent } from './nonactionable.component';

describe('NonactionableComponent', () => {
  let component: NonactionableComponent;
  let fixture: ComponentFixture<NonactionableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NonactionableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NonactionableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
