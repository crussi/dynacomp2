import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

import { StepService } from './beginner/step.service';
import { InboxService } from './beginner/inbox.service';
import { BeginnerWizard } from './beginner/wizard/wizard.component';
import { WizardDirective } from './wizard.directive';
import { YesNo } from './beginner/yesno/yesno.component';
import { BaseComponent } from './beginner/base/base.component';
import { NextAction } from './beginner/nextaction/nextaction.component';
import { NonActionable } from './beginner/nonactionable/nonactionable.component';
import { RefineAction } from './beginner/refineaction/refineaction.component';
import { ProjectPlan } from './beginner/projectplan/projectplan.component';
import { Delegate } from './beginner/delegate/delegate.component';
import { Schedule } from './beginner/schedule/schedule.component';
import { NewProject } from './beginner/newproject/newproject.component';
import { ApproveChange} from './beginner/approvechange/approvechange.component';

@NgModule({
  declarations: [ AppComponent,
                  BeginnerWizard,
                  WizardDirective,
                  YesNo,
                  BaseComponent,
                  NextAction,
                  NonActionable,
                  RefineAction,
                  ProjectPlan,
                  Delegate,
                  Schedule,
                  NewProject,
                  ApproveChange ],
  entryComponents: [
                  YesNo, 
                  NextAction, 
                  NonActionable, 
                  RefineAction, 
                  ProjectPlan, 
                  NewProject, 
                  Delegate, 
                  Schedule, 
                  ApproveChange ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [StepService,InboxService],
  bootstrap: [AppComponent]
})
export class AppModule { }
