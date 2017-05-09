import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IsdoablenowComponent } from './isdoablenow.component';

describe('IsdoablenowComponent', () => {
  let component: IsdoablenowComponent;
  let fixture: ComponentFixture<IsdoablenowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IsdoablenowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IsdoablenowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
