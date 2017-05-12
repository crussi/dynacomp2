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
        new StepOptions(
        StepEnum.IsProject, 
        StepEnum.NonActionable,
        undefined, 
        undefined, 
        undefined, 
        undefined)
        )
      ),
      new Step(YesNo,
      new StepSettings(
        StepEnum.IsProject,
        "",
        "Does this require multiple steps?",
        new StepOptions(
        StepEnum.ProjectPlan, 
        StepEnum.NextAction,
        StepEnum.IsActionable, 
        undefined, 
        undefined, 
        undefined)
        )
      ),
      new Step(YesNo,
      new StepSettings(
        StepEnum.ProjectPlan,
        "",
        "What is the successful outcome?",
        new StepOptions(
        undefined, 
        undefined,
        StepEnum.IsProject, 
        StepEnum.ApproveChange, 
        undefined, 
        undefined)
        )
      ),      
      new Step(NextAction,
      new StepSettings(
        StepEnum.ProjectPlan,
        "",
        "What is the next action?",
        new StepOptions(
        undefined, 
        undefined,
        StepEnum.IsProject, 
        StepEnum.IsDoableNow, 
        undefined, 
        undefined)
        )
      ),           
      new Step(NonActionable,
      new StepSettings(
        StepEnum.ProjectPlan,
        "",
        "How would you categorize this?",
        new StepOptions(
        undefined, 
        undefined,
        StepEnum.IsActionable, 
        StepEnum.ApproveChange, 
        undefined, 
        undefined)
        )
      ),           
      new Step(OkCancel,
      new StepSettings(
        StepEnum.ApproveChange,
        "",
        "Approve change?",
        new StepOptions(
        StepEnum.Done, 
        StepEnum.Done,
        StepEnum.Done, 
        StepEnum.Done, 
        StepEnum.Done, 
        StepEnum.Done)
        )
      ),           
      new Step(YesNo,
      new StepSettings(
        StepEnum.IsDoableNow,
        "",
        "Can this be done in 2-5 minutes?",
        new StepOptions(
        StepEnum.DoItNow, 
        StepEnum.IsDelegatable,
        StepEnum.NextAction, 
        StepEnum.Undefined, 
        StepEnum.Undefined, 
        StepEnum.Undefined)
        )
      ),           
      new Step(YesNo,
      new StepSettings(
        StepEnum.DoItNow,
        "Do it now!",
        "Did you do it?",
        new StepOptions(
        StepEnum.ApproveChange, 
        StepEnum.IsDelegatable,
        StepEnum.IsDoableNow, 
        StepEnum.Undefined, 
        StepEnum.Undefined, 
        StepEnum.Undefined)
        )
      ),      
      new Step(YesNo,
      new StepSettings(
        StepEnum.IsDelegatable,
        "",
        "Can this be delegated?",
        new StepOptions(
        StepEnum.Delegate, 
        StepEnum.IsSchedulable,
        StepEnum.IsDoableNow, 
        StepEnum.Undefined, 
        StepEnum.Undefined, 
        StepEnum.Undefined)
        )
      ),      
      new Step(YesNo,
      new StepSettings(
        StepEnum.IsSchedulable,
        "",
        "Does this need to be done on a specific date and time?",
        new StepOptions(
        StepEnum.Schedule, 
        StepEnum.RefineAction,
        StepEnum.IsDelegatable, 
        StepEnum.Undefined, 
        StepEnum.Undefined, 
        StepEnum.Undefined)
        )
      ),      
      new Step(Schedule,
      new StepSettings(
        StepEnum.Schedule,
        "Create event ...",
        "",
        new StepOptions(
        StepEnum.Undefined, 
        StepEnum.Undefined,
        StepEnum.IsSchedulable, 
        StepEnum.ApproveChange, 
        StepEnum.Undefined, 
        StepEnum.Undefined)
        )
      ),  
      new Step(RefineAction,
      new StepSettings(
        StepEnum.Schedule,
        "Please refine this task ...",
        "",
        new StepOptions(
        StepEnum.Undefined, 
        StepEnum.Undefined,
        StepEnum.IsSchedulable, 
        StepEnum.ApproveChange, 
        StepEnum.Undefined, 
        StepEnum.Undefined)
        )
      ), 
      new Step(Delegate,
      new StepSettings(
        StepEnum.Schedule,
        "Please refine this task ...",
        "",
        new StepOptions(
        StepEnum.Undefined, 
        StepEnum.Undefined,
        StepEnum.IsSchedulable, 
        StepEnum.ApproveChange, 
        StepEnum.Undefined, 
        StepEnum.Undefined)
        )
      )     

           
    ]
  }


}
