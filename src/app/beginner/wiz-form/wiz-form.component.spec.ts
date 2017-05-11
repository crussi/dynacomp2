import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WizFormComponent } from './wiz-form.component';

describe('WizFormComponent', () => {
  let component: WizFormComponent;
  let fixture: ComponentFixture<WizFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WizFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WizFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
