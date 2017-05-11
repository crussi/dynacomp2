import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

import { StepService } from './beginner/step.service';
import { BeginnerWizard } from './beginner/wizard/wizard.component';
import { WizardDirective } from './wizard.directive';
import { YesNo } from './beginner/yesno/yesno.component';
import { BaseComponent } from './beginner/base/base.component';
import { WizForm } from './beginner/wiz-form/wiz-form.component';
import { NextAction } from './beginner/nextaction/nextaction.component';
import { NonActionable } from './beginner/nonactionable/nonactionable.component';
import { OkCancel } from './beginner/okcancel/okcancel.component';
import { RefineAction } from './beginner/refineaction/refineaction.component';
import { ProjectPlan } from './beginner/projectplan/projectplan.component';
import { Delegate } from './beginner/delegate/delegate.component';
import { Schedule } from './beginner/schedule/schedule.component';

@NgModule({
  declarations: [ AppComponent,
                  BeginnerWizard,
                  WizardDirective,
                  YesNo,
                  BaseComponent,
                  WizForm,
                  NextAction,
                  NonActionable,
                  OkCancel,
                  RefineAction,
                  ProjectPlan,
                  Delegate,
                  Schedule ],
  entryComponents: [
                  YesNo, WizForm, NextAction, NonActionable, OkCancel, RefineAction, ProjectPlan, Delegate, Schedule ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [StepService],
  bootstrap: [AppComponent]
})
export class AppModule { }
