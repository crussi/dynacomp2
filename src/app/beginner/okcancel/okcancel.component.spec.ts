import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OkcancelComponent } from './okcancel.component';

describe('OkcancelComponent', () => {
  let component: OkcancelComponent;
  let fixture: ComponentFixture<OkcancelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OkcancelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OkcancelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
