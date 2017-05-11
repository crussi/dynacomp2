import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { StepEnum } from '../step.enum';
import { StepTransition, StepSettings } from '../step.model';

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
  @Input() Settings: StepSettings;
  //@Input() trigger: Number;
  @Output() stepChanged: EventEmitter<StepTransition> = new EventEmitter();

  get Question(): string {
    return this.Settings.Question;
  }
  get hasQuestion(): boolean {
    return this.Settings.Question.length > 0;
  }  
  get Declaration(): string {
    return this.Settings.Declaration;
  }
  get hasDeclaration(): boolean {
    return this.Settings.Declaration.length > 0;
  }   
  get YesStep(): StepEnum {
    return this.Settings.Steps.YesStep;
  }
  get hasYes(): boolean {
    return this.Settings.Steps.hasYes;
  }
  get NoStep(): StepEnum {
    return this.Settings.Steps.NoStep;
  }
  get hasNo(): boolean {
    return this.Settings.Steps.hasNo;
  } 
  get PrevStep(): StepEnum {
    return this.Settings.Steps.PrevStep;
  }
  get hasPrev(): boolean {
    return this.Settings.Steps.hasPrev;
  }         
  get NextStep(): StepEnum {
    return this.Settings.Steps.NextStep;
  }
  get hasNext(): boolean {
    return this.Settings.Steps.hasNext;
  }  
  get OkStep(): StepEnum {
    return this.Settings.Steps.OkStep;
  }
  get hasOk(): boolean {
    return this.Settings.Steps.hasOk;
  }     

  constructor() { }

  ngOnInit() {
    //this.Initialize();
  }



  LoadStep(step:StepEnum) {
    console.log('LoadStep:' + step);
    this.stepChanged.emit(new StepTransition(this.Settings.Name, step));
  }

  // Initialize(){
  //   console.log('Initialize ',this.Settings);
    // this.hasDeclaration = this.Settings.Declaration.length > 0;
    // this.hasQuestion = this.Settings.Question.length > 0;
    // if (this.Settings.Steps.YesStep != StepEnum.Undefined) {
    //   this.hasYes = true;
    //   this.YesStep = this.Settings.Steps.YesStep;
    // }
    // if (this.Settings.Steps.NoStep != StepEnum.Undefined) {
    //   this.hasNo = true;
    //   this.NoStep = this.Settings.Steps.NoStep;
    // } 
    // if (this.Settings.Steps.OkStep != StepEnum.Undefined) {
    //   this.hasOk = true;
    //   this.OkStep = this.Settings.Steps.OkStep;
    // }
    // if (this.Settings.Steps.CancelStep != StepEnum.Undefined) {
    //   this.hasCancel = true;
    //   this.CancelStep = this.Settings.Steps.CancelStep;
    // }         
    // if (this.Settings.Steps.PrevStep != StepEnum.Undefined) {
    //   this.hasPrev = true;
    //   this.PrevStep = this.Settings.Steps.PrevStep;
    // }    
    // if (this.Settings.Steps.NextStep != StepEnum.Undefined) {
    //   this.hasNext = true;
    //   this.NextStep = this.Settings.Steps.NextStep;
    // } 


  // }

}
