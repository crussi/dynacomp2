import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

import { StepService } from './beginner/step.service';
import { IsActionable } from './beginner/isactionable/isactionable.component';
import { IsProject } from './beginner/isproject/isproject.component';
import { NonActionable } from './beginner/nonactionable/nonactionable.component';
import { BeginnerWizard } from './beginner/wizard/wizard.component';
import { WizardDirective } from './wizard.directive';
import { ApproveChange } from './beginner/approvechange/approvechange.component';
import { IsDoableNow } from './beginner/isdoablenow/isdoablenow.component';
import { DoItNow } from './beginner/doitnow/doitnow.component';
import { IsDelegatable } from './beginner/isdelegatable/isdelegatable.component';
import { NextAction } from './beginner/nextaction/nextaction.component';
import { Delegate } from './beginner/delegate/delegate.component';
import { IsSchedulable } from './beginner/isschedulable/isschedulable.component';
import { RefineAction } from './beginner/refineaction/refineaction.component';
import { YesNo } from './beginner/yesno/yesno.component';
import { BaseComponent } from './beginner/base/base.component';

@NgModule({
  declarations: [ AppComponent,
                  IsActionable,
                  IsProject,
                  NonActionable,
                  BeginnerWizard,
                  WizardDirective,
                  ApproveChange,
                  IsDoableNow,
                  DoItNow,
                  IsDelegatable,
                  NextAction,
                  Delegate,
                  IsSchedulable,
                  RefineAction,
                  YesNo,
                  BaseComponent ],
  entryComponents: [ 
                  IsActionable, 
                  IsProject, 
                  NonActionable, 
                  ApproveChange, 
                  IsDoableNow, 
                  DoItNow, 
                  IsDelegatable, 
                  NextAction,
                  Delegate,
                  IsSchedulable,
                  RefineAction,
                  YesNo ],                  
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [StepService],
  bootstrap: [AppComponent]
})
export class AppModule { }
