import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { StepEnum } from '../step.enum';

@Component({
  selector: 'base',
  //templateUrl: './isactionable.component.html',
  template: `
      <button *ngIf="hasPrev" (click)="LoadStep(PrevStep)">Prev button</button>
      <button *ngIf="hasNext" (click)="LoadStep(NextStep)">Next button</button>

  `,  
  styleUrls: ['./base.component.css']
})
export class BaseComponent implements OnInit {

  @Input() Data: any;
  @Output() stepChanged: EventEmitter<StepEnum> = new EventEmitter();

  hasYes: boolean;
  YesStep: StepEnum;
  hasNo: boolean;
  NoStep: StepEnum;
  hasPrev: boolean;
  PrevStep: StepEnum;
  hasNext: boolean;
  NextStep: StepEnum;

  constructor() { }

  ngOnInit() {
    if (this.Data.Steps.YesStep != StepEnum.Undefined) {
      this.hasYes = true;
      this.YesStep = this.Data.Steps.YesStep;
    }
    if (this.Data.Steps.NoStep != StepEnum.Undefined) {
      this.hasNo = true;
      this.NoStep = this.Data.Steps.NoStep;
    }    
    if (this.Data.Steps.PrevStep != StepEnum.Undefined) {
      this.hasPrev = true;
      this.PrevStep = this.Data.Steps.PrevStep;
    }    
    if (this.Data.Steps.NextStep != StepEnum.Undefined) {
      this.hasNext = true;
      this.NextStep = this.Data.Steps.NextStep;
    }    
  }

  LoadStep(step:StepEnum) {
    console.log('NextStep:' + step);
    this.stepChanged.emit(step);
  }

}
