import { Injectable } from '@angular/core';
import { Step } from './step.model';
import { StepEnum, InputTypeEnum } from './step.enum';
import { YesNo } from './yesno/yesno.component';
import { OkCancel } from './okcancel/okcancel.component';
import { WizForm } from './wiz-form/wiz-form.component';
import { NextAction } from './nextaction/nextaction.component';
import { NonActionable } from './nonactionable/nonactionable.component';
import { RefineAction } from './refineaction/refineaction.component';
import { ProjectPlan } from './projectplan/projectplan.component';
import { Delegate } from './delegate/delegate.component';
import { Schedule } from './schedule/schedule.component';

@Injectable()
export class StepService {

  constructor() { }

  getSteps() {
    return [
      new Step(YesNo,
      {
        Number: 0,
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
      new Step(YesNo,
      {
        Number: 1,
        Name: StepEnum.IsProject,
        InputType: InputTypeEnum.YesNo,
        Declaration: "",
        Question: "Does this require multiple steps?",
        Steps: {
          YesStep: StepEnum.ProjectPlan,
          NoStep: StepEnum.NextAction,
          PrevStep: StepEnum.IsActionable,
          NextStep: StepEnum.Undefined
        }
      }),
      new Step(ProjectPlan,
      {
        Number: 1,
        Name: StepEnum.ProjectPlan,
        InputType: InputTypeEnum.YesNo,
        Declaration: "",
        Question: "What is the successful outcome?",
        Steps: {
          YesStep: StepEnum.Undefined,
          NoStep: StepEnum.Undefined,
          PrevStep: StepEnum.IsProject,
          NextStep: StepEnum.ApproveChange
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
      new Step(OkCancel,
      {
        Number: 4,
        Name: StepEnum.ApproveChange,
        InputType: InputTypeEnum.OkCancel,
        Declaration: "",
        Question: "Approve change?",
        Steps: {
          OkStep: StepEnum.Done,
          CancelStep: StepEnum.Done,
          PrevStep: StepEnum.Done,
          NextStep: StepEnum.Undefined
        }
      }),
       new Step(YesNo,
      {
        Number:5,
        Name: StepEnum.IsDoableNow,
        InputType: InputTypeEnum.YesNo,
        Declaration: "",
        Question: "Can this be done in 2-5 minutes?",
        Steps: {
          YesStep: StepEnum.DoItNow,
          NoStep: StepEnum.IsDelegatable,
          PrevStep: StepEnum.NextAction,
          NextStep: StepEnum.Undefined
        }
      }),
       new Step(YesNo,
      {
        Number:5,
        Name: StepEnum.DoItNow,
        InputType: InputTypeEnum.YesNo,
        Declaration: "Do it now!",
        Question: "Did you do it?",
        Steps: {
          YesStep: StepEnum.ApproveChange,
          NoStep: StepEnum.IsDelegatable,
          PrevStep: StepEnum.IsDoableNow,
          NextStep: StepEnum.Undefined
        }
      }),
       new Step(YesNo,
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
       new Step(YesNo,
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
       new Step(Schedule,
      {
        Number:5,
        Name: StepEnum.Schedule,
        InputType: InputTypeEnum.Form,
        Declaration: "Create event ...",
        Question: "",
        Steps: {
          YesStep: StepEnum.Undefined,
          NoStep: StepEnum.Undefined,
          PrevStep: StepEnum.IsSchedulable,
          NextStep: StepEnum.ApproveChange
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
       new Step(Delegate,
      {
        Number:5,
        Name: StepEnum.Delegate,
        InputType: InputTypeEnum.Form,
        Declaration: "Please refine this task ...",
        Question: "",
        Steps: {
          YesStep: StepEnum.Undefined,
          NoStep: StepEnum.Undefined,
          PrevStep: StepEnum.IsDelegatable,
          NextStep: StepEnum.ApproveChange
        }
      }),      
    ]
  }


}
