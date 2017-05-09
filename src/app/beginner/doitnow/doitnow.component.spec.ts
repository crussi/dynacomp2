import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DoitnowComponent } from './doitnow.component';

describe('DoitnowComponent', () => {
  let component: DoitnowComponent;
  let fixture: ComponentFixture<DoitnowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DoitnowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DoitnowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
