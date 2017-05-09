import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IsdelegatableComponent } from './isdelegatable.component';

describe('IsdelegatableComponent', () => {
  let component: IsdelegatableComponent;
  let fixture: ComponentFixture<IsdelegatableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IsdelegatableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IsdelegatableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
