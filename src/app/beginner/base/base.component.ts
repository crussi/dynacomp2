import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { StepEnum } from '../step.enum';

@Component({
  selector: 'base',
  //templateUrl: './isactionable.component.html',
  template: `
    <div></div>
  `,  
  styleUrls: ['./base.component.css']
})
export class BaseComponent implements OnInit  {
  //Data: any;
  @Input() Data: any;
  //@Input() trigger: Number;
  @Output() stepChanged: EventEmitter<StepEnum> = new EventEmitter();

  hasDeclaration: boolean;
  hasQuestion: boolean;
  hasYes: boolean;
  YesStep: StepEnum;
  hasNo: boolean;
  NoStep: StepEnum;
  hasOk: boolean;
  OkStep: StepEnum;
  hasCancel: boolean;
  CancelStep: StepEnum;  
  hasPrev: boolean;
  PrevStep: StepEnum;
  hasNext: boolean;
  NextStep: StepEnum;

  constructor() { }

  ngOnInit() {
    this.Initialize();
  }



  LoadStep(step:StepEnum) {
    console.log('LoadStep:' + step);
    this.stepChanged.emit(step);
  }

  Initialize(){
    console.log('Initialize ',this.Data);
    this.hasDeclaration = this.Data.Declaration.length > 0;
    this.hasQuestion = this.Data.Question.length > 0;
    if (this.Data.Steps.YesStep != StepEnum.Undefined) {
      this.hasYes = true;
      this.YesStep = this.Data.Steps.YesStep;
    }
    if (this.Data.Steps.NoStep != StepEnum.Undefined) {
      this.hasNo = true;
      this.NoStep = this.Data.Steps.NoStep;
    } 
    if (this.Data.Steps.OkStep != StepEnum.Undefined) {
      this.hasOk = true;
      this.OkStep = this.Data.Steps.OkStep;
    }
    if (this.Data.Steps.CancelStep != StepEnum.Undefined) {
      this.hasCancel = true;
      this.CancelStep = this.Data.Steps.CancelStep;
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

}
