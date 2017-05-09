import { Injectable } from '@angular/core';
import { StepEnum } from './step.enum';
import { IsActionable } from './isactionable/isactionable.component';
import { IsProject } from './isproject/isproject.component';
import { NonActionable } from './nonactionable/nonactionable.component';
import { Step } from './step.model';

@Injectable()
export class StepService {

  constructor() { }

  getSteps() {
    return [
      new Step(IsActionable,
      {
        Number: 1,
        Name: StepEnum.Actionable,
        Declaration: "",
        Question: "Is this actionable?",
        PrevStep: StepEnum.IsProject,
        NextStep: StepEnum.NonActionable
      }),
      new Step(IsProject,
      {
        Number: 1,
        Name: StepEnum.IsProject,
        Declaration: "",
        Question: "Does this require multiple steps?",
        PrevStep: StepEnum.Undefined,
        NextStep: StepEnum.Undefined
      }),
      new Step(NonActionable,
      {
        Number: 1,
        Name: StepEnum.NonActionable,
        Declaration: "",
        Question: "How would you categorize this?",
        PrevStep: StepEnum.Undefined,
        NextStep: StepEnum.Undefined
      })             
    ]
  }
  

}
