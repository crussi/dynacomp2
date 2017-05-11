import { Injectable } from '@angular/core';
import { Step, StepSettings, StepOptions } from './step.model';
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
      new StepSettings(
        StepEnum.IsActionable,
        "",
        "Is this actionable?",
        new StepOptions(StepEnum.IsProject, 
        StepEnum.NonActionable,
        undefined, 
        undefined, 
        undefined, 
        undefined)
        )
      // new Step(YesNo,
      // {
      //   Name: StepEnum.IsProject,
      //   Declaration: "",
      //   Question: "Does this require multiple steps?",
      //   Steps: {
      //     YesStep: StepEnum.ProjectPlan,
      //     NoStep: StepEnum.NextAction,
      //     PrevStep: StepEnum.IsActionable,
      //     NextStep: StepEnum.Undefined
      //   }
      // }),
      // new Step(ProjectPlan,
      // {
      //   Name: StepEnum.ProjectPlan,
      //   Declaration: "",
      //   Question: "What is the successful outcome?",
      //   Steps: {
      //     YesStep: StepEnum.Undefined,
      //     NoStep: StepEnum.Undefined,
      //     PrevStep: StepEnum.IsProject,
      //     NextStep: StepEnum.ApproveChange
      //   }
      // }),      
      // new Step(NextAction,
      // {
      //   Name: StepEnum.NextAction,
      //   Declaration: "",
      //   Question: "What is the next action?",
      //   Steps: {
      //     YesStep: StepEnum.Undefined,
      //     NoStep: StepEnum.Undefined,
      //     PrevStep: StepEnum.IsProject,
      //     NextStep: StepEnum.IsDoableNow
      //   }
      // }),
      // new Step(NonActionable,
      // {
      //   Name: StepEnum.NonActionable,
      //   Declaration: "",
      //   Question: "How would you categorize this?",
      //   Steps: {
      //     YesStep: StepEnum.Undefined,
      //     NoStep: StepEnum.Undefined,
      //     PrevStep: StepEnum.IsActionable,
      //     NextStep: StepEnum.ApproveChange
      //   }
      // }),
      // new Step(OkCancel,
      // {
      //   Name: StepEnum.ApproveChange,
      //   Declaration: "",
      //   Question: "Approve change?",
      //   Steps: {
      //     OkStep: StepEnum.Done,
      //     CancelStep: StepEnum.Done,
      //     PrevStep: StepEnum.Done,
      //     NextStep: StepEnum.Undefined
      //   }
      // }),
      //  new Step(YesNo,
      // {
      //   Name: StepEnum.IsDoableNow,
      //   Declaration: "",
      //   Question: "Can this be done in 2-5 minutes?",
      //   Steps: {
      //     YesStep: StepEnum.DoItNow,
      //     NoStep: StepEnum.IsDelegatable,
      //     PrevStep: StepEnum.NextAction,
      //     NextStep: StepEnum.Undefined
      //   }
      // }),
      //  new Step(YesNo,
      // {
      //   Name: StepEnum.DoItNow,
      //   Declaration: "Do it now!",
      //   Question: "Did you do it?",
      //   Steps: {
      //     YesStep: StepEnum.ApproveChange,
      //     NoStep: StepEnum.IsDelegatable,
      //     PrevStep: StepEnum.IsDoableNow,
      //     NextStep: StepEnum.Undefined
      //   }
      // }),
      //  new Step(YesNo,
      // {
      //   Name: StepEnum.IsDelegatable,
      //   Declaration: "",
      //   Question: "Can this be delegated?",
      //   Steps: {
      //     YesStep: StepEnum.Delegate,
      //     NoStep: StepEnum.IsSchedulable,
      //     PrevStep: StepEnum.IsDoableNow,
      //     NextStep: StepEnum.Undefined
      //   }
      // }),
      //  new Step(YesNo,
      // {
      //   Name: StepEnum.IsSchedulable,
      //   Declaration: "",
      //   Question: "Does this need to be done on a specific date and time?",
      //   Steps: {
      //     YesStep: StepEnum.Schedule,
      //     NoStep: StepEnum.RefineAction,
      //     PrevStep: StepEnum.IsDelegatable,
      //     NextStep: StepEnum.Undefined
      //   }
      // }),
      //  new Step(Schedule,
      // {
      //   Name: StepEnum.Schedule,
      //   Declaration: "Create event ...",
      //   Question: "",
      //   Steps: {
      //     YesStep: StepEnum.Undefined,
      //     NoStep: StepEnum.Undefined,
      //     PrevStep: StepEnum.IsSchedulable,
      //     NextStep: StepEnum.ApproveChange
      //   }
      // }),      
      //  new Step(RefineAction,
      // {
      //   Name: StepEnum.RefineAction,
      //   Declaration: "Please refine this task ...",
      //   Question: "",
      //   Steps: {
      //     YesStep: StepEnum.Undefined,
      //     NoStep: StepEnum.Undefined,
      //     PrevStep: StepEnum.IsSchedulable,
      //     NextStep: StepEnum.ApproveChange
      //   }
      // }),
      //  new Step(Delegate,
      // {
      //   Name: StepEnum.Delegate,
      //   Declaration: "Please refine this task ...",
      //   Question: "",
      //   Steps: {
      //     YesStep: StepEnum.Undefined,
      //     NoStep: StepEnum.Undefined,
      //     PrevStep: StepEnum.IsDelegatable,
      //     NextStep: StepEnum.ApproveChange
      //   }
      // }
      ) 
           
    ]
  }


}
