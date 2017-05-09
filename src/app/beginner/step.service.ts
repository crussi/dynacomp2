import { Injectable } from '@angular/core';
import { Step } from './step.model';
import { StepEnum, InputTypeEnum } from './step.enum';
import { IsActionable } from './isactionable/isactionable.component';
import { IsProject } from './isproject/isproject.component';
import { NonActionable } from './nonactionable/nonactionable.component';
import { ApproveChange } from './approvechange/approvechange.component';
import { IsDoableNow } from './isdoablenow/isdoablenow.component';
import { DoItNow } from './doitnow/doitnow.component';
import { IsDelegatable } from './isdelegatable/isdelegatable.component';
import { NextAction } from './nextaction/nextaction.component';
import { Delegate } from './delegate/delegate.component';
import { IsSchedulable } from './isschedulable/isschedulable.component';
import { RefineAction } from './refineaction/refineaction.component';


@Injectable()
export class StepService {

  constructor() { }

  getSteps() {
    return [
      new Step(IsActionable,
      {
        Number: 1,
        Name: StepEnum.IsActionable,
        InputType: InputTypeEnum.YesNo,
        Declaration: "",
        Question: "Is this actionable?",
        Steps: { 
          YesStep: StepEnum.IsProject, 
          NoStep: StepEnum.NonActionable,
          PrevStep: StepEnum.Undefined,
          NextStep: StepEnum.Undefined
        }
      }),
      new Step(IsProject,
      {
        Number: 2,
        Name: StepEnum.IsProject,
        InputType: InputTypeEnum.YesNo,
        Declaration: "",
        Question: "Does this require multiple steps?",
        Steps: { 
          YesStep: StepEnum.ProjectPlan, 
          NoStep: StepEnum.IsDoableNow,
          PrevStep: StepEnum.IsActionable,
          NextStep: StepEnum.Undefined
        }
      }),
      new Step(NextAction,
      {
        Number: 2,
        Name: StepEnum.NextAction,
        InputType: InputTypeEnum.Form,
        Declaration: "",
        Question: "What is the next action?",
        Steps: { 
          YesStep: StepEnum.Undefined, 
          NoStep: StepEnum.Undefined,
          PrevStep: StepEnum.IsProject,
          NextStep: StepEnum.IsDoableNow
        }
      }),      
      new Step(NonActionable,
      {
        Number: 3,
        Name: StepEnum.NonActionable,
        InputType: InputTypeEnum.Options,
        Declaration: "",
        Question: "How would you categorize this?",
        Steps: { 
          YesStep: StepEnum.Undefined, 
          NoStep: StepEnum.Undefined,
          PrevStep: StepEnum.IsActionable,
          NextStep: StepEnum.ApproveChange
        }
      }),
      new Step(ApproveChange,
      {
        Number: 4,
        Name: StepEnum.NonActionable,
        InputType: InputTypeEnum.OkCancel,
        Declaration: "",
        Question: "This will be moved to {list}?",
        Steps: { 
          YesStep: StepEnum.Undefined, 
          NoStep: StepEnum.Undefined,
          PrevStep: StepEnum.Undefined,
          NextStep: StepEnum.Undefined
        }
      }),
       new Step(IsDoableNow,
      {
        Number:5,
        Name: StepEnum.IsDoableNow,
        InputType: InputTypeEnum.YesNo,
        Declaration: "",
        Question: "Can this be done in 2-5 minutes?",
        Steps: { 
          YesStep: StepEnum.DoItNow, 
          NoStep: StepEnum.IsDelegatable,
          PrevStep: StepEnum.IsProject,
          NextStep: StepEnum.Undefined
        }
      }), 
       new Step(DoItNow,
      {
        Number:5,
        Name: StepEnum.DoItNow,
        InputType: InputTypeEnum.YesNo,
        Declaration: "Do it now!",
        Question: "Did you do it?",
        Steps: { 
          YesStep: StepEnum.ApproveChange, 
          NoStep: StepEnum.IsDelegatable,
          PrevStep: StepEnum.NextAction,
          NextStep: StepEnum.Undefined
        }
      }), 
       new Step(IsDelegatable,
      {
        Number:5,
        Name: StepEnum.IsDelegatable,
        InputType: InputTypeEnum.YesNo,
        Declaration: "",
        Question: "Can this be delegated?",
        Steps: { 
          YesStep: StepEnum.Delegate, 
          NoStep: StepEnum.IsSchedulable,
          PrevStep: StepEnum.IsDoableNow,
          NextStep: StepEnum.Undefined
        }
      }), 
       new Step(IsSchedulable,
      {
        Number:5,
        Name: StepEnum.IsSchedulable,
        InputType: InputTypeEnum.YesNo,
        Declaration: "",
        Question: "Does this need to be done on a specific date and time?",
        Steps: { 
          YesStep: StepEnum.Schedule, 
          NoStep: StepEnum.RefineAction,
          PrevStep: StepEnum.IsDelegatable,
          NextStep: StepEnum.Undefined
        }
      }),
       new Step(RefineAction,
      {
        Number:5,
        Name: StepEnum.IsSchedulable,
        InputType: InputTypeEnum.YesNo,
        Declaration: "Please refine this task ...",
        Question: "",
        Steps: { 
          YesStep: StepEnum.Undefined, 
          NoStep: StepEnum.Undefined,
          PrevStep: StepEnum.IsSchedulable,
          NextStep: StepEnum.ApproveChange
        }
      }),                                             
    ]
  }
  

}
